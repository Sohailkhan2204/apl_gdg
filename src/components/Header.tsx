import React from 'react';
import { Trophy, Cpu, Database } from 'lucide-react';

interface HeaderProps {
  candidateCount: number;
  activeTab: 'game' | 'database';
  setActiveTab: (tab: 'game' | 'database') => void;
  maxQuestionsLimit: number;
  setMaxQuestionsLimit: (val: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  candidateCount,
  activeTab,
  setActiveTab,
  maxQuestionsLimit,
  setMaxQuestionsLimit
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 px-4 lg:px-8 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo and branding */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-tr from-amber-500 to-yellow-300 rounded-xl shadow-lg shadow-amber-500/20 text-slate-950 animate-float">
            <Trophy className="w-6 h-6 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
                IPL Akinator
              </h1>
              <span className="text-[10px] uppercase font-bold tracking-widest bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/30">
                v3.0 OpenAI Engine
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">LLM-Powered Cricketer Deduction</p>
          </div>
        </div>

        {/* Global Statistics & Navigation */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center">
          
          {/* Live Pool indicator */}
          <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow"></span>
            <span className="text-slate-400">Live Pool:</span>
            <span className="font-bold text-slate-200">{candidateCount} Players</span>
          </div>

          {/* Engine settings: limit questions toggle */}
          <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-xs">
            <span className="text-slate-400">Max Qs:</span>
            <select 
              value={maxQuestionsLimit} 
              onChange={(e) => setMaxQuestionsLimit(Number(e.target.value))}
              className="bg-slate-800 text-amber-400 font-bold border-none outline-none cursor-pointer rounded px-1"
              title="Set maximum question rounds limit"
            >
              <option value={8}>8 (Strict Base)</option>
              <option value={10}>10 (Standard)</option>
              <option value={15}>15 (High Depth)</option>
            </select>
          </div>

          {/* Tabs switch */}
          <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('game')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'game'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Game Engine
            </button>
            <button
              onClick={() => setActiveTab('database')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'database'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              Dataset
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};
