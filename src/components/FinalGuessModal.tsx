import React from 'react';
import { Player } from '../types';
import { Trophy, ThumbsUp, ThumbsDown, CheckCircle, RefreshCw } from 'lucide-react';

interface FinalGuessModalProps {
  player: Player;
  confidence: number;
  questionCount: number;
  reason: 'confidence' | 'max_questions';
  onCorrectGuess: () => void;
  onIncorrectGuess: () => void;
  isConfirmedCorrect: boolean;
  onNewGame: () => void;
}

export const FinalGuessModal: React.FC<FinalGuessModalProps> = ({
  player,
  confidence,
  questionCount,
  reason,
  onCorrectGuess,
  onIncorrectGuess,
  isConfirmedCorrect,
  onNewGame
}) => {
  const [isContinuing, setIsContinuing] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchWikiImage = async () => {
      try {
        const query = encodeURIComponent(player.name);
        const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${query}&prop=pageimages&format=json&pithumbsize=500&origin=*`);
        const data = await res.json();
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pageId !== '-1' && pages[pageId].thumbnail) {
          setImageUrl(pages[pageId].thumbnail.source);
        } else {
          setImageUrl(null);
        }
      } catch (err) {
        console.error("Failed to fetch image", err);
        setImageUrl(null);
      }
    };
    
    // Reset image when player changes, then fetch new one
    setImageUrl(null);
    fetchWikiImage();
  }, [player.name]);

  const handleIncorrectClick = () => {
    setIsContinuing(true);
    // Wait briefly so the user reads the continuation message before the modal closes
    setTimeout(() => {
      onIncorrectGuess();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 w-full max-w-xl rounded-3xl p-6 lg:p-8 shadow-2xl relative my-auto">
        
        {/* Glow behind modal */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal type notice */}
        <div className="text-center mb-6 relative z-10">
          <div className="inline-flex p-3 bg-slate-950 rounded-2xl border border-slate-800 shadow-inner mb-3">
            <Trophy className="w-8 h-8 text-amber-400" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-100 tracking-tight">
            {isConfirmedCorrect ? "Brilliant Deduction!" : "Final Prediction Ready"}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {reason === 'confidence' 
              ? `Confidence crossed ≥ 80% boundary in ${questionCount} questions`
              : `Maximum limit reached (${questionCount} rounds). Outputting highest mass parameter.`
            }
          </p>
        </div>

        {/* Player Presentation Card */}
        <div className="bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 text-center relative z-10 shadow-lg">
          
          {/* Custom stats indicator badge */}
          <div className="absolute top-3 right-3 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-md">
            <span className="text-[10px] text-amber-400 font-mono font-bold block uppercase">Certainty</span>
            <span className="text-xs font-bold text-amber-300">{(confidence * 100).toFixed(1)}%</span>
          </div>

          <div className="absolute top-3 left-3 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
            <span className="text-[10px] text-slate-400 font-semibold">{player.role}</span>
          </div>

          {/* Avatar simulation placeholder / Real Image */}
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 p-0.5 shadow-lg shadow-amber-500/20 mt-3 mb-4">
            {imageUrl ? (
              <img src={imageUrl} alt={player.name} className="w-full h-full object-cover rounded-full bg-slate-950 border-2 border-slate-950" />
            ) : (
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-slate-200 font-extrabold text-2xl border-2 border-slate-950">
                {player.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>

          <h3 className="text-2xl font-black text-slate-100 tracking-wide">{player.name}</h3>
          
          <div className="flex items-center justify-center gap-2 mt-1 mb-3 text-xs text-slate-400">
            <span>🌐 {player.country}</span>
            <span>•</span>
            <span className="font-semibold text-amber-400">{player.teams.join(' / ')}</span>
          </div>

          <p className="text-xs text-slate-300 italic max-w-sm mx-auto bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/60">
            "{player.description}"
          </p>
        </div>

        {/* Dynamic Controls based on state */}
        <div className="mt-6 relative z-10">
          {isContinuing ? (
            <div className="text-center py-4 animate-fade-in">
              <div className="inline-block p-3 rounded-full bg-slate-800/50 mb-3 animate-spin" style={{ animationDuration: '3s' }}>
                <RefreshCw className="w-6 h-6 text-indigo-400" />
              </div>
              <p className="text-lg font-bold text-slate-100">
                {reason === 'max_questions' ? "Oops! Let's try more questions." : "Re-calibrating Engine..."}
              </p>
              <p className="text-xs text-indigo-300 mt-1">Feeding your feedback to the LLM and resuming questions.</p>
            </div>
          ) : isConfirmedCorrect ? (
            <div className="text-center space-y-4">
              <div className="bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-xl flex flex-col items-center gap-2">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <p className="text-sm font-bold text-emerald-300">
                  AI successfully identified your player in {questionCount} questions!
                </p>
                <span className="text-xs text-slate-400">The deduction pathways match your parameters exactly.</span>
              </div>

              <button
                onClick={onNewGame}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl shadow-lg transition-all"
              >
                Play Again / Guess Another Player
              </button>
            </div>
          ) : (
            <div>
              <p className="text-center text-sm font-bold text-slate-200 mb-4">
                You're thinking of <span className="text-amber-400 underline">{player.name}</span>, right?
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={onCorrectGuess}
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-slate-50 font-bold py-3 px-4 rounded-xl transition-all"
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span>Yes, Spot On!</span>
                </button>

                <button
                  onClick={handleIncorrectClick}
                  className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-rose-400 border border-rose-900/50 hover:border-rose-800 font-bold py-3 px-4 rounded-xl transition-all"
                >
                  <ThumbsDown className="w-4 h-4" />
                  <span>No, Incorrect</span>
                </button>
              </div>

              <div className="mt-4 text-center">
                <span className="text-[10px] text-slate-500 block">
                  *Selecting incorrect will resume the game and the AI will ask more questions.
                </span>
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
