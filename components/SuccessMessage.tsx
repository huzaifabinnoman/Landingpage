
import React from 'react';

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onReset }) => {
  return (
    <div className="max-w-xl mx-auto py-20 text-center space-y-8">
      <div className="inline-block w-24 h-24 rounded-full border-4 border-emerald-500 flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(16,185,129,0.5)] animate-bounce">
        ✅
      </div>
      
      <div className="space-y-4">
        <h2 className="text-4xl font-command text-emerald-500 tracking-wider">TRANSMISSION RECEIVED</h2>
        <p className="font-mono text-emerald-400/80 leading-relaxed">
          Your encounter dossier has been securely routed to the Command Center via satellite uplink. 
          Our specialists will review the evidence. You have done your part in uncovering the truth.
        </p>
      </div>

      <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 font-mono text-xs text-emerald-700 italic">
        "Expect no reply unless we find the breach significant. Keep your doors locked. Watch the skies."
      </div>

      <button 
        onClick={onReset}
        className="mt-8 bg-slate-900 border border-emerald-500 hover:bg-emerald-500 hover:text-slate-950 text-emerald-500 font-bold py-4 px-12 uppercase tracking-[0.2em] text-sm transition-all"
      >
        Return to Dashboard
      </button>
    </div>
  );
};

export default SuccessMessage;
