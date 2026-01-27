
import React, { useState, useEffect } from 'react';
import { UserState } from '../../types';
import { getMotivationalQuote } from '../../services/geminiService';

interface Props {
  user: UserState;
  onBack: () => void;
}

const FocusModeScreen: React.FC<Props> = ({ user, onBack }) => {
  const [seconds, setSeconds] = useState(16 * 60 + 42); // 16:42
  const [quote, setQuote] = useState("Discipline is choosing what you want most.");

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => (s > 0 ? s - 1 : 0));
    }, 1000);

    // Fetch a new quote when entering focus mode
    getMotivationalQuote().then(setQuote);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return { mins: mins.toString().padStart(2, '0'), secs: secs.toString().padStart(2, '0') };
  };

  const { mins, secs } = formatTime(seconds);

  return (
    <div className="flex flex-col h-full bg-[#0D0D0D]">
      <header className="relative z-10 flex items-center bg-transparent p-4 pb-2 justify-between">
        <button onClick={onBack} className="text-white/60 flex size-12 shrink-0 items-center cursor-pointer hover:text-white">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
        </button>
        <div className="flex flex-col items-center flex-1 pr-12">
          <h2 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">NuruMind</h2>
          <h2 className="text-white text-sm font-medium">Deep Work Session</h2>
        </div>
      </header>

      <div className="px-6 py-2">
        <div className="flex gap-6 justify-between items-center mb-1">
          <p className="text-white/50 text-[10px] font-bold uppercase tracking-wider">Session Progress</p>
          <p className="text-primary text-[10px] font-bold">65%</p>
        </div>
        <div className="rounded-full bg-white/5 h-1 w-full overflow-hidden">
          <div className="h-full rounded-full bg-primary shadow-[0_0_10px_rgba(19,236,128,0.5)]" style={{ width: '65%' }}></div>
        </div>
      </div>

      <main className="relative flex-1 flex flex-col items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[80%] h-[60%] rounded-full bg-primary/5 blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex gap-4 items-center">
            <div className="flex flex-col items-center">
              <div className="flex h-32 w-28 items-center justify-center rounded-2xl glass-card backdrop-blur-md">
                <p className="text-white text-7xl font-extralight tracking-tighter">{mins}</p>
              </div>
              <p className="mt-4 text-white/30 text-xs font-bold uppercase tracking-[0.1em]">Minutes</p>
            </div>
            <div className="text-white/20 text-5xl font-thin pb-10">:</div>
            <div className="flex flex-col items-center">
              <div className="flex h-32 w-28 items-center justify-center rounded-2xl glass-card backdrop-blur-md">
                <p className="text-white text-7xl font-extralight tracking-tighter">{secs}</p>
              </div>
              <p className="mt-4 text-white/30 text-xs font-bold uppercase tracking-[0.1em]">Seconds</p>
            </div>
          </div>

          <button onClick={onBack} className="mt-16 group relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-125 animate-ping"></div>
            <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(19,236,128,0.3)] hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-background-dark text-3xl font-bold">pause</span>
            </div>
          </button>
        </div>
      </main>

      <footer className="relative z-10 pb-12 pt-4 px-6 space-y-8">
        <div className="max-w-xs mx-auto text-center h-16">
          <h3 className="text-white/80 tracking-tight text-lg font-light italic leading-relaxed">
            "{quote}"
          </h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-white/40 text-sm">lock</span>
            <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Currently Blocked</h4>
          </div>
          <div className="flex justify-center gap-6">
            {user.blockedApps.map(app => (
              <div key={app} className="flex flex-col items-center gap-2 opacity-30 grayscale">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                  <span className="material-symbols-outlined text-2xl">
                    {app === 'TikTok' ? 'video_library' : app === 'Instagram' ? 'photo_camera' : app === 'Snapchat' ? 'chat' : 'play_circle'}
                  </span>
                </div>
                <span className="text-[9px] font-medium text-white/60">{app}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-4">
          <button onClick={onBack} className="text-white/20 hover:text-white/40 text-[10px] font-bold uppercase tracking-widest">
            Emergency Exit
          </button>
        </div>
      </footer>
    </div>
  );
};

export default FocusModeScreen;
