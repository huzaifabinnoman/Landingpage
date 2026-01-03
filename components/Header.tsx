
import React from 'react';

interface HeaderProps {
  onHome: () => void;
  onArchive: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHome, onArchive }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-emerald-500/20 px-6 py-4 flex items-center justify-between">
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={onHome}
      >
        <div className="w-10 h-10 border-2 border-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
          <span className="text-emerald-500 font-command text-2xl group-hover:text-black">C</span>
        </div>
        <div>
          <h1 className="text-xl font-command tracking-wider text-emerald-500">Cryptid Command</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-700 leading-none">Security Protocol Active</p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-emerald-600">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
          Live Feed: Monitoring
        </span>
        <span className="hover:text-emerald-400 cursor-pointer transition-colors" onClick={onHome}>Dashboard</span>
        <span className="hover:text-emerald-400 cursor-pointer transition-colors" onClick={onArchive}>Archive</span>
        <span className="hover:text-emerald-400 cursor-pointer transition-colors text-emerald-300 border border-emerald-500/30 px-3 py-1 bg-emerald-500/5">Command Center</span>
      </div>
    </nav>
  );
};

export default Header;
