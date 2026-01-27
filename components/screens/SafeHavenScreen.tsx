
import React from 'react';

interface Props {
  onBack: () => void;
}

const SafeHavenScreen: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-full bg-background-dark pb-10 overflow-y-auto no-scrollbar">
      <div className="flex items-center p-4 pb-2 justify-between">
        <button onClick={onBack} className="text-white flex size-12 items-center justify-start">
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
        <h2 className="text-white text-lg font-bold flex-1 text-center">NuruMind</h2>
        <div className="w-12 flex justify-end">
          <button className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/5">
            <span className="material-symbols-outlined text-2xl">settings</span>
          </button>
        </div>
      </div>

      <div className="px-4 text-center pb-3 pt-5">
        <h2 className="text-white tracking-tight text-[28px] font-extrabold leading-tight">Safe Haven</h2>
        <p className="text-slate-400 text-sm mt-1">Let the noise fade away</p>
      </div>

      <div className="flex flex-col items-center justify-center py-10 relative">
        <div className="relative flex items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 animate-pulse">
            <div className="w-48 h-48 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(19,236,128,0.4)]">
                <span className="material-symbols-outlined text-white text-4xl font-light">air</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center px-4">
          <p className="text-white text-xl font-medium tracking-wide">Inhale... Exhale...</p>
          <p className="text-primary text-sm font-semibold mt-2 uppercase tracking-[0.2em]">Breathe 4-7-8</p>
        </div>
      </div>

      <div className="px-4 pb-4 pt-6 flex justify-between items-center">
        <h3 className="text-white text-lg font-bold">Grounding Techniques</h3>
        <span className="text-primary text-sm font-semibold">See all</span>
      </div>

      <div className="flex overflow-x-auto gap-4 px-4 pb-6 no-scrollbar">
        {[
          { icon: 'numbers', title: '5-4-3-2-1', desc: 'Sensory awareness' },
          { icon: 'waves', title: 'Box Breathing', desc: 'Regulate pulse' },
          { icon: 'ac_unit', title: 'Cold Splash', desc: 'Vagus nerve reset' }
        ].map((tech, i) => (
          <div key={i} className="min-w-[160px] glass-card rounded-xl p-4 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">{tech.icon}</span>
            </div>
            <div>
              <h4 className="font-bold text-sm">{tech.title}</h4>
              <p className="text-xs text-slate-400 mt-1">{tech.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 pb-4 pt-4">
        <h3 className="text-white text-lg font-bold">Short Audio Suggestions</h3>
      </div>

      <div className="flex overflow-x-auto gap-3 px-4 pb-8 no-scrollbar">
        <div className="min-w-[280px] h-24 glass-card rounded-xl flex items-center p-3 gap-4 border-l-4 border-l-primary">
          <div 
            className="w-14 h-14 rounded-lg bg-center bg-cover flex items-center justify-center shrink-0 overflow-hidden" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrw6HJ2q2vhnEpiYwEaR35s-r2W7zn5EJXTDCGGxCKZBTXhgY2LLsLYcDd-ZtRqOOxtNgec2fDVEGYdAuH6qmIKm3Ay10YEi3gZPhXoR8xIEsHobO1tDm6SSwX5YsJdZpTkc0Ag7WgJuvSsl_OT1QJX_Y7avFoWlADpaZ30StB8vg3QjYIw0q5JWrgFBvIH_Xo1VCpeohYTYmyprbTdqakPzd-Skw-orUpmiXZVZ-RXN4xAhTkD-k4vzLAd0EciCN8oJY1K8AV-Q")' }}
          >
            <div className="bg-black/40 w-full h-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white">play_arrow</span>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm line-clamp-1">Midnight Rain in Kyoto</h4>
            <p className="text-xs text-slate-400">3 min • Nature</p>
          </div>
        </div>
        <div className="min-w-[280px] h-24 glass-card rounded-xl flex items-center p-3 gap-4">
          <div 
            className="w-14 h-14 rounded-lg bg-center bg-cover flex items-center justify-center shrink-0 overflow-hidden" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcauWPTJfDAEvREzN5rMiZqumzWpdLpaxWRe2lbyrMr5hpb7WhIXI95pTaLPONZbo-AJ84kgbJQNb1BiSSwMzXI7lUeXIxBDNzfEVA2OQfIQm5x1CqnJcyL4deUwfnyVgwdLA1oKUL4tU57-1myWCDABpNgmhu_PP34iByf4OYWsiN9686glImVotoo8YhUYE3bPrOx7p-ebYq1eBC7klxD-ixKhe6lYpijtZl6e-nIiTz9qoFOj6QtAjkZegnM2zaARcjWTTWEA")' }}
          >
            <div className="bg-black/40 w-full h-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white">play_arrow</span>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm line-clamp-1">Gentle Guiding Voice</h4>
            <p className="text-xs text-slate-400">2 min • Guidance</p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-auto mb-6">
        <button className="w-full py-4 rounded-xl bg-[#E5C16D]/10 border border-[#E5C16D]/30 flex items-center justify-center gap-3 transition-all hover:bg-[#E5C16D]/20">
          <span className="material-symbols-outlined text-[#E5C16D]">emergency_home</span>
          <span className="text-[#E5C16D] font-bold text-base">Need a different perspective?</span>
        </button>
        <p className="text-center text-[11px] text-slate-500 mt-4 px-8 leading-tight">
          If you are in immediate danger, please contact your local emergency services or a trusted guardian.
        </p>
      </div>
    </div>
  );
};

export default SafeHavenScreen;
