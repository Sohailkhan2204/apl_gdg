import React, { useState, useEffect, useRef } from 'react';
import { Player, CandidateProbability, AnswerType, QuestionHistoryItem } from './types';
import { getSavedPlayers } from './data/playersData';
import { askOpenAIForNextQuestion } from './utils/openaiEngine';
import { Header } from './components/Header';
import { ProbabilityGraph } from './components/ProbabilityGraph';
import { GameEngineBoard } from './components/GameEngineBoard';
import { FinalGuessModal } from './components/FinalGuessModal';
import { PlayersDatabaseView } from './components/PlayersDatabaseView';
import { Sparkles, HelpCircle } from 'lucide-react';

export const App: React.FC = () => {
  // Master pool dataset
  const [allPlayers, setAllPlayers] = useState<Player[]>([]);
  
  // Dynamic inference arrays
  const [candidates, setCandidates] = useState<CandidateProbability[]>([]);
  const [history, setHistory] = useState<QuestionHistoryItem[]>([]);
  
  // OpenAI API Key
  const [apiKey, setApiKeyState] = useState<string>('');
  const [isOpenAiThinking, setIsOpenAiThinking] = useState<boolean>(false);
  
  // Current active targeted question variables
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);

  // App Interface Flow controls
  const [activeTab, setActiveTab] = useState<'game' | 'database'>('game');
  const [maxQuestionsLimit, setMaxQuestionsLimit] = useState<number>(10);
  const [baseMaxQuestionsLimit, setBaseMaxQuestionsLimit] = useState<number>(10);
  const [gameState, setGameState] = useState<'questioning' | 'final_guess'>('questioning');
  const [finalGuessReason, setFinalGuessReason] = useState<'confidence' | 'max_questions'>('confidence');
  const [isConfirmedCorrect, setIsConfirmedCorrect] = useState<boolean>(false);

  // Sound cues simulation triggers
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize custom API Key storage
  useEffect(() => {
    const savedKey = localStorage.getItem('openai_api_key_akinator');
    if (savedKey) {
      setApiKeyState(savedKey);
    }
  }, []);

  const setApiKey = (key: string) => {
    setApiKeyState(key);
    localStorage.setItem('openai_api_key_akinator', key);
  };

  // Play subtle feedback bloop sound
  const playBloop = (frequency = 440, type: OscillatorType = 'sine') => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch (e) {
      // Audio context policy blocked or unsupported, silently fallback
    }
  };

  // Process OpenAI Response
  const processOpenAIResponse = (res: any, currentHist: QuestionHistoryItem[], pool: Player[]) => {
    if (!res) {
      setCurrentQuestion("Error contacting OpenAI. Please check API Key.");
      return;
    }

    // Map top candidates back to local player objects
    const mappedCandidates: CandidateProbability[] = res.topCandidates.map((c: any) => {
      const foundPlayer = pool.find(p => p.name.toLowerCase() === c.name.toLowerCase());
      return {
        player: foundPlayer || { 
          id: c.name.toLowerCase().replace(/\s+/g, '_'),
          name: c.name, 
          role: c.role || 'Player',
          country: c.country || 'Unknown',
          teams: c.teams || [],
          description: c.description || 'Player dynamically identified by OpenAI.'
        },
        probability: currentHist.length === 0 ? 0 : c.probability
      };
    }).sort((a: any, b: any) => b.probability - a.probability);

    setCandidates(mappedCandidates);

    if (res.action === 'guess' && res.guessedPlayerName) {
      // Force guess state
      setFinalGuessReason('confidence');
      setTimeout(() => setGameState('final_guess'), 400);
      playBloop(880, 'triangle');
    } else if (res.action === 'ask' && res.question) {
      setCurrentQuestion(res.question);
    } else {
      // Fallback
      setFinalGuessReason('max_questions');
      setGameState('final_guess');
    }
  };

  // Initialize and load new session sequence
  const startNewSession = async (loadedPlayersOverride?: Player[]) => {
    const playersToUse = loadedPlayersOverride || getSavedPlayers();
    setAllPlayers(playersToUse);
    setMaxQuestionsLimit(baseMaxQuestionsLimit);
    
    // Initialize blank candidates uniformly just for visuals until OpenAI responds
    const initialPool = playersToUse.slice(0, 5).map(p => ({ player: p, probability: 0 }));
    setCandidates(initialPool);
    
    setHistory([]);
    setGameState('questioning');
    setIsConfirmedCorrect(false);
    setCurrentQuestion(null);

    if (apiKey) {
      setIsOpenAiThinking(true);
      const res = await askOpenAIForNextQuestion(apiKey, [], playersToUse);
      processOpenAIResponse(res, [], playersToUse);
      setIsOpenAiThinking(false);
    } else {
      setCurrentQuestion("Please enter your OpenAI API key to start.");
    }
  };

  // Run initial sequence on mount
  useEffect(() => {
    startNewSession();
  }, []);

  // Answer Submission Engine loop triggers
  const handleAnswer = async (answer: AnswerType) => {
    if (!currentQuestion || !apiKey) return;

    // Pitch trigger based on affirmative/negative response
    if (answer === 'Yes') playBloop(587.33, 'triangle'); // D5
    else if (answer === 'No') playBloop(329.63, 'sine'); // E4
    else playBloop(440, 'sine');

    const currentConfidenceBefore = candidates[0]?.probability || 0;

    const historyItem: QuestionHistoryItem = {
      attributeId: 'openai_generated' as any, // Fake ID
      questionText: currentQuestion,
      answer,
      confidenceBefore: currentConfidenceBefore,
      confidenceAfter: currentConfidenceBefore // Will update when next response comes
    };

    const newHistoryArr = [...history, historyItem];
    setHistory(newHistoryArr);
    setCurrentQuestion(null); // Clear question while thinking
    setIsOpenAiThinking(true);

    if (newHistoryArr.length >= maxQuestionsLimit) {
      setFinalGuessReason('max_questions');
      setTimeout(() => setGameState('final_guess'), 400);
      playBloop(880, 'triangle');
      setIsOpenAiThinking(false);
      return;
    }

    const res = await askOpenAIForNextQuestion(apiKey, newHistoryArr, allPlayers);
    
    // Update the last history item's confidenceAfter based on new results
    if (res && res.topCandidates.length > 0) {
      newHistoryArr[newHistoryArr.length - 1].confidenceAfter = res.topCandidates[0].probability;
      setHistory([...newHistoryArr]);
    }

    processOpenAIResponse(res, newHistoryArr, allPlayers);
    setIsOpenAiThinking(false);
  };

  const handleIncorrectGuess = async () => {
    if (!apiKey) return;
    
    // Play sound for negative feedback
    playBloop(329.63, 'sine');
    
    // Resume questioning
    setGameState('questioning');
    
    // Add 5 more questions to the limit so the AI has room to recover
    if (history.length >= maxQuestionsLimit) {
      setMaxQuestionsLimit(maxQuestionsLimit + 5);
    }
    
    // Add feedback to history that the last guess was wrong
    const currentConfidenceBefore = candidates[0]?.probability || 0;
    const historyItem: QuestionHistoryItem = {
      attributeId: 'openai_generated' as any,
      questionText: `Are you thinking of ${topCandidatePlayer.name}?`,
      answer: 'No',
      confidenceBefore: currentConfidenceBefore,
      confidenceAfter: currentConfidenceBefore 
    };

    const newHistoryArr = [...history, historyItem];
    setHistory(newHistoryArr);
    setCurrentQuestion(null);
    setIsOpenAiThinking(true);

    const res = await askOpenAIForNextQuestion(apiKey, newHistoryArr, allPlayers);
    
    if (res && res.topCandidates.length > 0) {
      newHistoryArr[newHistoryArr.length - 1].confidenceAfter = res.topCandidates[0].probability;
      setHistory([...newHistoryArr]);
    }

    processOpenAIResponse(res, newHistoryArr, allPlayers);
    setIsOpenAiThinking(false);
  };

  // Current predicted top player object
  const topCandidatePlayer = candidates[0]?.player || allPlayers[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      
      {/* Dynamic Header Metrics Dashboard */}
      <Header
        candidateCount={allPlayers.length}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        maxQuestionsLimit={maxQuestionsLimit}
        setMaxQuestionsLimit={(val) => {
          setMaxQuestionsLimit(val);
          setBaseMaxQuestionsLimit(val);
          if (history.length >= val && gameState === 'questioning') {
            setFinalGuessReason('max_questions');
            setGameState('final_guess');
          }
        }}
      />

      {/* Main Core Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-6">
        
        {/* Helper instruction banner */}
        <div className="bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-transparent border border-amber-500/20 px-4 py-2.5 rounded-2xl mb-6 flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-amber-300">
            <Sparkles className="w-4 h-4 shrink-0 text-amber-400" />
            <span>
              <strong>Gameplay Flow:</strong> Envision an IPL superstar or hidden legacy gem. Respond truthfully as the OpenAI LLM narrows down the possibilities.
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-slate-400 font-mono text-[11px]">
            <span>Threshold: <strong className="text-amber-400">LLM Decides</strong></span>
            <span>•</span>
            <span>Current Certainty: <strong className="text-slate-200">{( (candidates[0]?.probability || 0) * 100).toFixed(1)}%</strong></span>
          </div>
        </div>

        {/* Dynamic Tab Subscreens */}
        {activeTab === 'database' ? (
          <PlayersDatabaseView players={allPlayers} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Primary Interactive Board Panel (Left 7-8 columns) */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
              <GameEngineBoard
                currentQuestion={currentQuestion}
                questionCount={history.length + 1}
                maxQuestions={baseMaxQuestionsLimit}
                onAnswer={handleAnswer}
                onReset={() => startNewSession()}
                history={history}
                apiKey={apiKey}
                setApiKey={setApiKey}
                isOpenAiThinking={isOpenAiThinking}
              />
            </div>

            {/* Sidebar Graphical Live Leaderboard (Right 4-5 columns) */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col h-full">
              <ProbabilityGraph
                candidates={candidates}
                confidenceThreshold={0.80}
              />
            </div>

          </div>
        )}

      </main>

      {/* Overlapping Predictive Modal */}
      {gameState === 'final_guess' && topCandidatePlayer && (
        <FinalGuessModal
          player={topCandidatePlayer}
          confidence={candidates[0]?.probability || 0}
          questionCount={history.length}
          reason={finalGuessReason}
          isConfirmedCorrect={isConfirmedCorrect}
          onCorrectGuess={() => {
            setIsConfirmedCorrect(true);
            playBloop(1046.50, 'triangle'); // C6
          }}
          onIncorrectGuess={handleIncorrectGuess}
          onNewGame={() => startNewSession()}
        />
      )}

      {/* Subdued Premium App Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-4 px-4 text-center text-[11px] text-slate-600 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© IPL AIkinator Framework. Dynamic parameter deduction built on OpenAI LLM.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Seasons: 2008–Present</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-amber-500/80" />
              Powered by gpt-4o-mini
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
