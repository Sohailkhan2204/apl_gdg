import React, { useState } from 'react';
import { AnswerType, QuestionHistoryItem } from '../types';
import { HelpCircle, RefreshCw, Key, Sparkles, CheckCircle2, XCircle, AlertCircle, EyeOff } from 'lucide-react';

interface GameEngineBoardProps {
  currentQuestion: string | null;
  questionCount: number;
  maxQuestions: number;
  onAnswer: (answer: AnswerType) => void;
  onReset: () => void;
  history: QuestionHistoryItem[];
  apiKey: string;
  setApiKey: (key: string) => void;
  isOpenAiThinking: boolean;
}

export const GameEngineBoard: React.FC<GameEngineBoardProps> = ({
  currentQuestion,
  questionCount,
  maxQuestions,
  onAnswer,
  onReset,
  history,
  apiKey,
  setApiKey,
  isOpenAiThinking
}) => {
  const [showKeyInput, setShowKeyInput] = useState(false);

  const displayedQuestionText = currentQuestion || "Connecting to OpenAI Engine...";

  return (
    <div className="flex flex-col gap-6">
      
      {/* Question Card Panel */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-6 lg:p-8 relative shadow-2xl overflow-hidden">
        
        {/* Glow backdrop accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-extrabold tracking-widest px-3 py-1 rounded-full bg-slate-800 border border-slate-700/60">
              Round <span className={questionCount > maxQuestions ? "text-rose-500 font-black" : "text-amber-400"}>{questionCount}</span> <span className="text-slate-500">/ {maxQuestions}</span>
            </span>
            <span className="text-xs font-semibold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800/80">
              LLM Deduction
            </span>
          </div>

          <button
            onClick={onReset}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800"
            title="Reset deduction game"
          >
            <RefreshCw className="w-3 h-3" />
            Restart
          </button>
        </div>

        {/* Main Question Display */}
        <div className="min-h-[110px] flex flex-col justify-center my-4 relative z-10">
          {isOpenAiThinking ? (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <Sparkles className="w-8 h-8 text-indigo-400 animate-spin mb-3" style={{ animationDuration: '3s' }} />
              <p className="text-sm font-semibold text-indigo-300 animate-pulse">
                OpenAI is synthesizing the next optimal question...
              </p>
              <span className="text-xs text-slate-500 mt-1">Analyzing chat history to maximize information gain</span>
            </div>
          ) : (
            <div>
              <div className="flex items-start gap-3">
                <HelpCircle className="w-6 h-6 text-amber-400 shrink-0 mt-1 animate-bounce" style={{ animationDuration: '2s' }} />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-100 leading-snug tracking-tight">
                  {displayedQuestionText}
                </h2>
              </div>
            </div>
          )}
        </div>

        {/* Input answer actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 relative z-10">
          <button
            disabled={isOpenAiThinking || !currentQuestion}
            onClick={() => onAnswer('Yes')}
            className="flex flex-col items-center justify-center gap-1 bg-gradient-to-b from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 active:scale-98 text-slate-50 font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-950/40 border border-emerald-500/40 transition-all disabled:opacity-50 cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-200" />
            <span className="text-sm">Yes</span>
          </button>

          <button
            disabled={isOpenAiThinking || !currentQuestion}
            onClick={() => onAnswer('No')}
            className="flex flex-col items-center justify-center gap-1 bg-gradient-to-b from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 active:scale-98 text-slate-50 font-bold py-3 px-4 rounded-xl shadow-lg shadow-rose-950/40 border border-rose-500/40 transition-all disabled:opacity-50 cursor-pointer"
          >
            <XCircle className="w-4 h-4 text-rose-200" />
            <span className="text-sm">No</span>
          </button>

          <button
            disabled={isOpenAiThinking || !currentQuestion}
            onClick={() => onAnswer('Maybe')}
            className="flex flex-col items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 active:scale-98 text-amber-300 font-bold py-3 px-4 rounded-xl border border-slate-700 transition-all disabled:opacity-50 cursor-pointer"
          >
            <AlertCircle className="w-4 h-4 text-amber-400/80" />
            <span className="text-sm">Maybe / Probably</span>
          </button>

          <button
            disabled={isOpenAiThinking || !currentQuestion}
            onClick={() => onAnswer("Don't Know")}
            className="flex flex-col items-center justify-center gap-1 bg-slate-900 hover:bg-slate-800 active:scale-98 text-slate-400 hover:text-slate-200 font-semibold py-3 px-4 rounded-xl border border-slate-800 transition-all disabled:opacity-50 cursor-pointer"
          >
            <EyeOff className="w-4 h-4 text-slate-500" />
            <span className="text-xs">Don't Know</span>
          </button>
        </div>

        {/* API Key custom setup banner */}
        <div className="mt-6 pt-4 border-t border-slate-800/80">
          <div className="flex items-center justify-between">
            <span className="text-xs text-indigo-300/90 flex items-center gap-1.5 font-medium">
              <Key className="w-3.5 h-3.5 text-indigo-400" />
              OpenAI API Key configuration: {apiKey ? '•••• Key Loaded' : 'No Key Provided'}
            </span>
            <button
              onClick={() => setShowKeyInput(!showKeyInput)}
              className="text-xs text-amber-400 hover:underline font-bold"
            >
              {showKeyInput ? 'Hide Settings' : apiKey ? 'Change Key' : 'Insert Key'}
            </button>
          </div>

          {showKeyInput && (
            <div className="mt-3 bg-slate-950 p-3 rounded-xl border border-indigo-900/50 flex gap-2">
              <input
                type="password"
                placeholder="Paste OpenAI API Key (sk-...)"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 outline-none focus:border-indigo-500 font-mono"
              />
              <button
                onClick={() => setShowKeyInput(false)}
                className="bg-indigo-600 hover:bg-indigo-500 text-slate-50 font-bold px-3 py-1.5 rounded-lg text-xs"
              >
                Save
              </button>
            </div>
          )}
          
          {!apiKey && (
            <p className="text-[11px] text-rose-500 mt-2 font-bold animate-pulse">
              *An OpenAI API key is required to play. Please insert your key.
            </p>
          )}
        </div>

      </div>

      {/* Audit log / Question path history */}
      <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-4 lg:p-6">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          Adaptive Questioning Deductive Path ({history.length} requested)
        </h3>

        {history.length === 0 ? (
          <div className="text-center py-6 bg-slate-950/30 rounded-xl border border-slate-900">
            <p className="text-xs text-slate-600 italic">No questions asked yet. The system candidate pool space is entirely neutral.</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
            {history.map((h, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs bg-slate-950/60 hover:bg-slate-900/80 p-2.5 rounded-xl border border-slate-800/40 transition-colors">
                <div className="flex items-center gap-2 truncate pr-2">
                  <span className="text-[10px] text-slate-500 font-mono">#{idx + 1}</span>
                  <span className="text-slate-300 truncate" title={h.questionText}>
                    {h.questionText}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Response pill */}
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    h.answer === 'Yes' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/50' :
                    h.answer === 'No' ? 'bg-rose-950 text-rose-400 border border-rose-800/50' :
                    h.answer === 'Maybe' ? 'bg-amber-950 text-amber-400 border border-amber-800/50' :
                    'bg-slate-800 text-slate-400'
                  }`}>
                    {h.answer}
                  </span>

                  {/* Confidence diff indicator */}
                  <span className="text-[10px] font-mono text-slate-400 w-12 text-right">
                    {(h.confidenceAfter * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
