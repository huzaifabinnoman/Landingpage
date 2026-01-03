
import React, { useState } from 'react';
import { AppState, CryptidStory, AnalysisResult } from './types';
import { analyzeStory } from './services/geminiService';
import Header from './components/Header';
import Hero from './components/Hero';
import StoryForm from './components/StoryForm';
import AnalysisView from './components/AnalysisView';
import SuccessMessage from './components/SuccessMessage';
import ArchiveView from './components/ArchiveView';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>(AppState.HOME);
  const [currentStory, setCurrentStory] = useState<CryptidStory | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const handleSubmit = async (story: CryptidStory) => {
    setCurrentStory(story);
    setView(AppState.ANALYZING);
    
    try {
      const result = await analyzeStory(story.description);
      setAnalysis(result);
    } catch (error) {
      console.error("Analysis failed", error);
      setAnalysis({
        cryptidType: "Unknown Entity",
        threatLevel: "Medium",
        authenticityScore: 50,
        summary: "Analysis connection lost. Manual review required.",
        keywords: ["Unknown", "Interference"]
      });
    }
  };

  const handleConfirmTransmission = () => {
    const mailto = `mailto:cryptidcommand@gmail.com?subject=NEW ENCOUNTER REPORT: ${analysis?.cryptidType}&body=Witness: ${currentStory?.witnessName}%0D%0ALocation: ${currentStory?.location}%0D%0AThreat Level: ${analysis?.threatLevel}%0D%0A%0D%0ADescription: ${currentStory?.description}`;
    window.location.href = mailto;
    setView(AppState.SUCCESS);
  };

  const renderContent = () => {
    switch (view) {
      case AppState.HOME:
        return <Hero onStart={() => setView(AppState.SUBMIT)} onViewArchives={() => setView(AppState.ARCHIVES)} />;
      case AppState.SUBMIT:
        return <StoryForm onSubmit={handleSubmit} onCancel={() => setView(AppState.HOME)} />;
      case AppState.ANALYZING:
        return <AnalysisView 
                  story={currentStory} 
                  analysis={analysis} 
                  onConfirm={handleConfirmTransmission} 
                  onRestart={() => setView(AppState.SUBMIT)} 
                />;
      case AppState.SUCCESS:
        return <SuccessMessage onReset={() => {
          setView(AppState.HOME);
          setAnalysis(null);
          setCurrentStory(null);
        }} />;
      case AppState.ARCHIVES:
        return <ArchiveView onBack={() => setView(AppState.HOME)} />;
      default:
        return <Hero onStart={() => setView(AppState.SUBMIT)} onViewArchives={() => setView(AppState.ARCHIVES)} />;
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col bg-slate-950 text-emerald-50 selection:bg-emerald-500 selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
         <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500/10"></div>
         <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500/10"></div>
      </div>

      <Header onHome={() => setView(AppState.HOME)} onArchive={() => setView(AppState.ARCHIVES)} />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12 relative z-10 max-w-5xl">
        {renderContent()}
      </main>

      <footer className="py-6 border-t border-emerald-950/50 bg-slate-950/80 backdrop-blur-sm text-center">
        <p className="text-xs text-emerald-800 font-mono tracking-widest uppercase">
          &copy; 2024 Cryptid Command - Unauthorized Access is Prohibited
        </p>
      </footer>
    </div>
  );
};

export default App;
