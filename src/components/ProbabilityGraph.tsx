import React from 'react';
import { CandidateProbability } from '../types';
import { Award, UserCheck } from 'lucide-react';

interface ProbabilityGraphProps {
  candidates: CandidateProbability[];
  confidenceThreshold: number; // usually 0.80
}

export const ProbabilityGraph: React.FC<ProbabilityGraphProps> = ({
  candidates,
  confidenceThreshold
}) => {
  // Show top 6 candidates
  const topCandidates = candidates.slice(0, 6);
  const highestProb = topCandidates[0]?.probability || 0;

  return (
    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 lg:p-6 backdrop-blur-sm flex flex-col h-full">
      
      {/* Title block */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-slate-200 tracking-wide uppercase flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-amber-400" />
            Live Candidate Pool Distribution
          </h3>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Bayesian probabilities update continuously based on entropy models
          </p>
        </div>
        
        {/* Confidence metric chip */}
        <div className="text-right">
          <span className="text-[10px] uppercase font-bold text-slate-500 block">Top Confidence</span>
          <span className={`text-lg font-extrabold font-mono ${
            highestProb >= confidenceThreshold ? 'text-emerald-400 animate-pulse' : 'text-amber-400'
          }`}>
            {(highestProb * 100).toFixed(1)}%
          </span>
        </div>
      </div>

      {/* Target marker indicator */}
      <div className="text-[10px] text-slate-400 mb-2 flex items-center justify-between">
        <span>0%</span>
        <span className="text-amber-500/80 font-bold flex items-center gap-1">
          Target threshold ({(confidenceThreshold * 100)}%)
        </span>
        <span>100%</span>
      </div>

      {/* Bars container */}
      <div className="space-y-3.5 flex-1 flex flex-col justify-center">
        {topCandidates.map((item, index) => {
          const percentage = item.probability * 100;
          const isTop = index === 0;
          
          // Color coding
          let barBg = "bg-slate-700";
          if (isTop) {
            barBg = percentage >= (confidenceThreshold * 100) 
              ? "bg-gradient-to-r from-emerald-500 to-teal-400" 
              : "bg-gradient-to-r from-amber-500 to-yellow-400";
          } else if (index === 1 && percentage > 20) {
            barBg = "bg-gradient-to-r from-blue-500 to-indigo-400";
          }

          return (
            <div key={item.player.id} className="group transition-all">
              <div className="flex items-center justify-between text-xs mb-1">
                <div className="flex items-center gap-1.5 truncate pr-2">
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${
                    isTop ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {index + 1}
                  </span>
                  <span className={`font-semibold truncate ${isTop ? 'text-slate-100 font-bold' : 'text-slate-300'}`}>
                    {item.player.name}
                  </span>
                  <span className="text-[10px] text-slate-500 font-normal">({item.player.role})</span>
                </div>
                <span className="font-mono text-[11px] font-bold text-slate-300">
                  {percentage.toFixed(1)}%
                </span>
              </div>

              {/* Bar track */}
              <div className="w-full h-2.5 bg-slate-950/80 rounded-full overflow-hidden relative border border-slate-800/60">
                {/* Custom target threshold marker line */}
                <div 
                  className="absolute top-0 bottom-0 w-[1px] bg-amber-500/50 z-10" 
                  style={{ left: `${confidenceThreshold * 100}%` }}
                />

                {/* Animated fill */}
                <div 
                  className={`h-full rounded-full transition-all duration-700 ease-out ${barBg}`}
                  style={{ width: `${Math.max(percentage, 1)}%` }}
                />
              </div>
              
              {/* Franchise preview pill */}
              <div className="mt-0.5 flex gap-1">
                {item.player.teams.slice(0, 3).map(t => (
                  <span key={t} className="text-[9px] text-slate-500 font-medium">#{t}</span>
                ))}
              </div>
            </div>
          );
        })}

        {candidates.length > 6 && (
          <div className="pt-2 text-center">
            <span className="text-[10px] text-slate-500 italic">
              + {candidates.length - 6} more players actively tracked in latent probability arrays
            </span>
          </div>
        )}
      </div>

      {/* Info helper footer */}
      <div className="mt-4 pt-3 border-t border-slate-800/50 bg-slate-950/40 p-2.5 rounded-xl text-[11px] text-slate-400 flex items-start gap-2">
        <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <p>
          The engine continually minimizes uncertainty using Shannon Entropy reduction. A final guess triggers only when certainty crosses <span className="text-amber-400 font-semibold">80%</span>.
        </p>
      </div>

    </div>
  );
};
