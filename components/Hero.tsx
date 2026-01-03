
import React from 'react';

interface HeroProps {
  onStart: () => void;
  onViewArchives: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart, onViewArchives }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 py-12 md:py-24">
      <div className="relative inline-block">
        <h2 className="text-5xl md:text-8xl font-command tracking-tighter text-emerald-50 text-shadow-glow">
          THEY ARE <span className="text-emerald-500">AMONG US</span>
        </h2>
        <div className="absolute -top-4 -right-4 text-[10px] bg-red-600 text-white px-2 py-0.5 font-bold uppercase tracking-tighter rotate-12">
          Classified
        </div>
      </div>
      
      <p className="max-w-2xl text-emerald-400/80 font-mono text-sm md:text-base leading-relaxed">
        Cryptid Command is the front-line investigation unit for supernatural and anomalous creatures. 
        Whether it's a sighting in the Cascades or a disturbance in the Pine Barrens, 
        your evidence is vital. Report your encounter today.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md pt-4">
        <button 
          onClick={onStart}
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold py-4 uppercase tracking-[0.2em] text-sm transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        >
          Submit Encounter
        </button>
        <button 
          onClick={onViewArchives}
          className="flex-1 border border-emerald-600/50 hover:border-emerald-500 text-emerald-500 font-bold py-4 uppercase tracking-[0.2em] text-sm transition-all bg-emerald-500/5 hover:bg-emerald-500/10"
        >
          View Archives
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-16">
        {[
          { label: 'Verified Cases', value: '1,492', icon: '🔍' },
          { label: 'Active Sightings', value: '43', icon: '⚠️' },
          { label: 'Threat Zones', value: '12', icon: '📍' }
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-6 border-l-4 border-l-emerald-600 text-left">
            <span className="text-2xl mb-2 block">{stat.icon}</span>
            <div className="text-2xl font-command text-emerald-50">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-widest text-emerald-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
