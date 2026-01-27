
import React from 'react';

interface Props {
  onScrollAway: () => void;
  onIgnore: () => void;
}

const NudgeOverlay: React.FC<Props> = ({ onScrollAway, onIgnore }) => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-6 backdrop-blur-2xl bg-background-dark/60 animate-in fade-in duration-500">
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 px-6 mt-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>auto_awesome</span>
          <h2 className="text-white text-lg font-bold tracking-tight">NuruMind</h2>
        </div>
        <div className="bg-white/10 p-2 rounded-full">
          <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>info</span>
        </div>
      </div>

      <div className="w-full max-w-sm bg-nudge-gold rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center gap-6 animate-in zoom-in duration-300">
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl"></div>
          <div className="relative bg-emerald-deep/10 p-4 rounded-full">
            <span className="material-symbols-outlined text-emerald-deep" style={{ fontSize: '40px', fontVariationSettings: '"FILL" 1' }}>psychology</span>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-emerald-deep/60 text-sm font-bold uppercase tracking-widest">Focus Check-in</p>
          <h1 className="text-emerald-deep text-2xl font-extrabold leading-tight">This content may disturb your focus.</h1>
          <p className="text-emerald-deep/80 text-base font-medium leading-relaxed">
            You've been doing great staying on track today. Take a breath and protect your peace.
          </p>
        </div>

        <div className="w-full flex flex-col gap-3 pt-4">
          <button 
            onClick={onScrollAway}
            className="flex w-full items-center justify-center rounded-xl h-14 bg-emerald-deep text-white text-lg font-bold transition-transform active:scale-95 shadow-lg shadow-emerald-deep/20"
          >
            Scroll away
          </button>
          <button 
            onClick={onIgnore}
            className="flex w-full items-center justify-center rounded-xl h-12 bg-transparent text-emerald-deep/60 text-base font-bold transition-opacity hover:opacity-80"
          >
            Ignore once
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 flex items-center gap-2 px-6 py-2 bg-white/5 rounded-full border border-white/10">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
        <p className="text-white/60 text-xs font-medium uppercase tracking-tighter">Real-time detection active</p>
      </div>
    </div>
  );
};

export default NudgeOverlay;
