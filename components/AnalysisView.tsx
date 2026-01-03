
import React from 'react';
import { CryptidStory, AnalysisResult } from '../types';

interface AnalysisViewProps {
  story: CryptidStory | null;
  analysis: AnalysisResult | null;
  onConfirm: () => void;
  onRestart: () => void;
}

const AnalysisView: React.FC<AnalysisViewProps> = ({ story, analysis, onConfirm, onRestart }) => {
  if (!analysis) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-8 animate-pulse">
        <div className="w-24 h-24 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
        <div className="text-center">
          <h3 className="text-3xl font-command text-emerald-500 tracking-widest">ANALYZING FREQUENCIES</h3>
          <p className="font-mono text-xs text-emerald-700 mt-2 uppercase tracking-[0.3em]">
            Cross-referencing global encounter databases...
          </p>
        </div>
        <div className="w-full max-w-md h-1 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-0 bottom-0 bg-emerald-500 animate-[loading_2s_infinite]"></div>
        </div>
        <style>{`
          @keyframes loading {
            0% { left: -100%; width: 100%; }
            100% { left: 100%; width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  const threatColors = {
    Low: 'text-emerald-500 border-emerald-500',
    Medium: 'text-yellow-500 border-yellow-500',
    High: 'text-orange-500 border-orange-500',
    Extreme: 'text-red-500 border-red-500',
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-slate-900 border border-emerald-500/30 p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
        {/* Scanner Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="scanner-line relative"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-grow space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-4xl font-command text-emerald-50 tracking-tight">ENCOUNTER PROFILE</h3>
                <p className="font-mono text-[10px] text-emerald-700 uppercase">Analysis ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              </div>
              <div className={`px-4 py-1 border-2 font-command text-xl tracking-widest uppercase ${threatColors[analysis.threatLevel]}`}>
                THREAT: {analysis.threatLevel}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/50 p-4 border border-emerald-900/30">
                <p className="text-[10px] text-emerald-700 uppercase font-bold tracking-widest mb-1">Entity Classification</p>
                <p className="font-mono text-emerald-400 uppercase text-lg">{analysis.cryptidType}</p>
              </div>
              <div className="bg-black/50 p-4 border border-emerald-900/30">
                <p className="text-[10px] text-emerald-700 uppercase font-bold tracking-widest mb-1">Authenticity Score</p>
                <p className="font-mono text-emerald-400 text-lg">{analysis.authenticityScore}%</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] text-emerald-700 uppercase font-bold tracking-widest">Executive Summary</p>
              <p className="font-dossier italic text-emerald-50/80 leading-relaxed bg-emerald-500/5 p-4 border-l-2 border-emerald-500">
                "{analysis.summary}"
              </p>
            </div>

            <div className="space-y-2">
               <p className="text-[10px] text-emerald-700 uppercase font-bold tracking-widest">Extracted Markers</p>
               <div className="flex flex-wrap gap-2">
                 {analysis.keywords.map((kw, i) => (
                   <span key={i} className="px-2 py-0.5 bg-emerald-950 border border-emerald-800 text-[10px] text-emerald-400 font-mono uppercase">
                     {kw}
                   </span>
                 ))}
               </div>
            </div>
          </div>

          <div className="md:w-64 space-y-4">
             <div className="aspect-square bg-slate-950 border border-emerald-900/50 flex flex-col items-center justify-center p-4 relative">
                {/* Visualizer Mock */}
                <div className="w-full h-full flex items-center justify-center opacity-30">
                   <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-500 animate-pulse">
                     <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
                     <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.5" />
                     <path d="M20 20 L80 80 M80 20 L20 80" stroke="currentColor" strokeWidth="0.2" />
                     <circle cx="50" cy="50" r="10" className="animate-ping" fill="currentColor" opacity="0.5" />
                   </svg>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl">☣️</span>
                  <p className="text-[8px] uppercase tracking-[0.2em] text-emerald-700 mt-2">Anomaly Detected</p>
                </div>
             </div>
             <p className="text-[9px] text-emerald-800 font-mono text-center">
               WARNING: PROLONGED EXPOSURE TO ANALYTICAL DATA MAY CAUSE PARANOIA.
             </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 pt-6">
        <button 
          onClick={onConfirm}
          className="flex-grow bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold py-4 uppercase tracking-[0.2em] text-sm transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]"
        >
          Transmit to Command Center
        </button>
        <button 
          onClick={onRestart}
          className="px-8 border border-emerald-800 hover:bg-emerald-900/30 text-emerald-600 font-bold py-4 uppercase tracking-[0.2em] text-sm transition-all"
        >
          Re-edit Dossier
        </button>
      </div>
    </div>
  );
};

export default AnalysisView;
