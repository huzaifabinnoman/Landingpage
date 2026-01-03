
import React from 'react';
import { VideoMetadata } from '../types';

interface ArchiveViewProps {
  onBack: () => void;
}

const ArchiveView: React.FC<ArchiveViewProps> = ({ onBack }) => {
  // Updated list with titles and themes matching the @CryptidCommand channel style
  const videos: VideoMetadata[] = [
    {
      id: 'rake',
      title: 'THE RAKE: URBAN LEGEND OR HIDDEN PREDATOR?',
      thumbnail: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=800',
      uploadDate: '3 DAYS AGO',
      duration: '15:42',
      views: '45K'
    },
    {
      id: 'notdeer',
      title: 'BEWARE THE "NOT DEER" - APPALACHIAN HORROR',
      thumbnail: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&q=80&w=800',
      uploadDate: '1 WEEK AGO',
      duration: '12:10',
      views: '122K'
    },
    {
      id: 'skinflint',
      title: 'THE SKINWALKER RANCH ANOMALIES: PHASE 1',
      thumbnail: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=800',
      uploadDate: '2 WEEKS AGO',
      duration: '22:05',
      views: '89K'
    },
    {
      id: 'ozark',
      title: 'OZARK HOWLER: THE CRY IN THE HOLLOW',
      thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
      uploadDate: '1 MONTH AGO',
      duration: '18:30',
      views: '67K'
    },
    {
      id: 'flatwoods',
      title: 'FLATWOODS MONSTER: 70 YEARS OF TERROR',
      thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
      uploadDate: '2 MONTHS AGO',
      duration: '14:55',
      views: '56K'
    },
    {
      id: 'brayroad',
      title: 'THE BEAST OF BRAY ROAD: NEW EVIDENCE',
      thumbnail: 'https://images.unsplash.com/photo-1533425450849-0158866179e8?auto=format&fit=crop&q=80&w=800',
      uploadDate: '3 MONTHS AGO',
      duration: '19:15',
      views: '210K'
    }
  ];

  const channelUrl = "https://www.youtube.com/@CryptidCommand";

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-emerald-500/20 pb-6 relative">
        {/* Decorative Scanner Line for Header */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500/30 overflow-hidden">
          <div className="h-full bg-emerald-400 w-1/4 animate-[scan_3s_infinite_linear]"></div>
        </div>
        
        <div>
          <h2 className="text-5xl font-command text-emerald-50 tracking-tight">VIDEO ARCHIVES</h2>
          <div className="flex items-center gap-3 mt-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="font-mono text-xs text-emerald-600 uppercase tracking-[0.3em]">
              Accessing Centralized Evidence Database // @CryptidCommand
            </p>
          </div>
        </div>
        
        <button 
          onClick={onBack}
          className="group text-[10px] uppercase font-bold tracking-widest text-emerald-600 hover:text-emerald-400 transition-all flex items-center gap-2 border border-emerald-900/50 px-4 py-2 bg-emerald-500/5"
        >
          <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span> Return to Dashboard
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <a 
            key={video.id}
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-slate-900 border border-emerald-900/50 overflow-hidden hover:border-emerald-500 transition-all transform hover:-translate-y-2 shadow-xl hover:shadow-emerald-500/20"
          >
            {/* Thumbnail with Heavy Thematic Post-Processing */}
            <div className="aspect-video relative overflow-hidden bg-black">
              {/* Grayscale and High Contrast Image */}
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:brightness-100 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              
              {/* Emerald Color Grade Overlay */}
              <div className="absolute inset-0 bg-emerald-900/30 mix-blend-color group-hover:bg-emerald-800/20 transition-colors"></div>
              
              {/* Vignette and Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90"></div>
              
              {/* CRT Scanline Effect Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]"></div>

              {/* Tagging System */}
              <div className="absolute top-2 left-2 z-20 flex flex-col gap-1">
                <div className="bg-red-600 text-[8px] font-bold text-white px-2 py-0.5 uppercase tracking-tighter shadow-sm">
                  DEBRIEF: {video.id.toUpperCase()}
                </div>
                <div className="bg-emerald-500 text-[7px] font-bold text-black px-1.5 py-0.5 uppercase tracking-tighter">
                  VERIFIED EVIDENCE
                </div>
              </div>
              
              <div className="absolute bottom-2 right-2 z-20 bg-black/80 text-[10px] font-mono text-emerald-500 px-2 py-0.5 border border-emerald-500/30 backdrop-blur-sm">
                {video.duration}
              </div>
              
              {/* Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 z-20">
                <div className="w-14 h-14 bg-emerald-500/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-emerald-500 border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>

            {/* Metadata Text Area */}
            <div className="p-5 space-y-4 relative">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors"></div>
              
              <h4 className="font-command text-2xl text-emerald-50 group-hover:text-emerald-400 transition-colors leading-tight tracking-tight">
                {video.title}
              </h4>
              
              <div className="flex items-center justify-between font-mono text-[9px] text-emerald-700 uppercase tracking-[0.2em] border-t border-emerald-900/30 pt-3">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-800 rounded-full"></span>
                  <span>{video.uploadDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-800 rounded-full"></span>
                  <span>{video.views} SIGHTINGS</span>
                </div>
              </div>

              <div className="group-hover:translate-x-1 transition-transform flex items-center gap-3 text-emerald-500/60 group-hover:text-emerald-400">
                <span className="text-[10px] font-bold uppercase tracking-widest">Open Intelligence Feed</span>
                <span className="text-lg">→</span>
              </div>
            </div>

            {/* Subtle Glitch Pattern on Hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          </a>
        ))}
      </div>

      {/* Channel Call to Action */}
      <div className="relative group overflow-hidden glass-panel p-10 text-center space-y-5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="relative z-10">
          <h3 className="text-3xl font-command text-emerald-50 tracking-widest">BROADCAST SIGNAL ACTIVE</h3>
          <p className="font-mono text-sm text-emerald-600/80 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
            Witness more classified encounters and join the global investigation network on our primary YouTube hub. 
            Fresh evidence uploaded weekly.
          </p>
          <div className="pt-6 flex justify-center items-center gap-8">
            <div className="h-[1px] w-12 bg-emerald-900/50"></div>
            <a 
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold py-4 px-12 uppercase tracking-[0.2em] text-sm transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)] overflow-hidden"
            >
              <span className="relative z-10">Connect to @CryptidCommand</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </a>
            <div className="h-[1px] w-12 bg-emerald-900/50"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
};

export default ArchiveView;
