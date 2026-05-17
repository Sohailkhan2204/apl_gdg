import React, { useState } from 'react';
import { Player } from '../types';
import { Search, Filter, ShieldCheck, UserCheck } from 'lucide-react';

interface PlayersDatabaseViewProps {
  players: Player[];
}

export const PlayersDatabaseView: React.FC<PlayersDatabaseViewProps> = ({ players }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('All');
  const [selectedTeam, setSelectedTeam] = useState<string>('All');

  // Extract all distinct team tags available
  const allTeams = Array.from(
    new Set(players.flatMap(p => p.teams))
  ).sort();

  const filtered = players.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'All' || p.role === selectedRole;
    const matchesTeam = selectedTeam === 'All' || p.teams.includes(selectedTeam);
    return matchesSearch && matchesRole && matchesTeam;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Search and filters bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 lg:p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              Foundational Candidate Roster Database
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Showing active metadata parameters feeding the entropy-minimization inference kernel
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-amber-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
            Total Pool: {players.length} Profiles
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Search box */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search player name, nation, description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 outline-none focus:border-amber-500"
            />
          </div>

          {/* Role selector */}
          <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
            <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="text-xs text-slate-400 shrink-0">Role:</span>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full bg-transparent text-xs text-slate-200 outline-none cursor-pointer"
            >
              <option value="All">All Roles</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="All-rounder">All-rounder</option>
              <option value="Wicketkeeper">Wicketkeeper</option>
            </select>
          </div>

          {/* Team selector */}
          <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
            <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="text-xs text-slate-400 shrink-0">Team:</span>
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="w-full bg-transparent text-xs text-slate-200 outline-none cursor-pointer"
            >
              <option value="All">All Franchises</option>
              {allTeams.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Roster Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(p => {
          // Count active truth attributes
          const truthCount = Object.values(p.attributes).filter(Boolean).length;

          return (
            <div 
              key={p.id} 
              className="bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 p-4 rounded-2xl flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-extrabold text-sm text-slate-100 group-hover:text-amber-400 transition-colors">
                        {p.name}
                      </h3>
                      {p.customAdded && (
                        <span className="text-[9px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.2 rounded font-bold">
                          Custom
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 block">{p.role} • {p.country}</span>
                  </div>

                  <span className="text-[10px] font-mono font-bold bg-slate-950 px-2 py-1 rounded text-slate-400 border border-slate-800">
                    Prior: {p.baseWeight.toFixed(1)}
                  </span>
                </div>

                {/* Franchise tags */}
                <div className="flex flex-wrap gap-1 my-2">
                  {p.teams.map(t => (
                    <span key={t} className="text-[9px] bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-slate-400 line-clamp-3 mt-2 leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Attributes quick digest row */}
              <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[10px] text-slate-500">
                <span className="flex items-center gap-1">
                  <UserCheck className="w-3 h-3 text-emerald-500" />
                  {truthCount} binary tags active
                </span>
                <span className="italic font-mono text-[9px]">ID: {p.id}</span>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
          <p className="text-sm text-slate-500">No cricketers align with the filtered constraints.</p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedRole('All'); setSelectedTeam('All'); }}
            className="mt-2 text-xs text-amber-400 underline font-bold"
          >
            Reset filter configurations
          </button>
        </div>
      )}

    </div>
  );
};
