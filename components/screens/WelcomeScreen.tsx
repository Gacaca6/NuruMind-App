
import React from 'react';

interface Props {
  onNext: () => void;
}

const WelcomeScreen: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="flex flex-col h-full px-6 pb-12 bg-gradient-to-b from-[#1a3a2a] to-[#102219]">
      <div className="flex items-center justify-between py-8">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-background-dark text-xl font-bold">spa</span>
          </div>
          <span className="text-lg font-bold tracking-tight">NuruMind</span>
        </div>
        <button onClick={onNext} className="text-sm font-semibold text-white/60 hover:text-white transition-colors">Skip</button>
      </div>

      <div className="flex-grow flex flex-col justify-center items-center py-8">
        <div className="relative w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
          <div 
            className="absolute inset-0 bg-cover bg-center scale-110" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCraZzgQKqd0Xt3cRkrtlS9bLwSTPXqeRpA3EahHvyqwT8CXVLKVj3Sl4dCDBwwGo_9tKDclYxQRE1gf2YVeXndW7FPOGUYKOZBhQH88L7xeqMEhsVk-WYq6L8Vr1tSydsN9MN2sv15oIX-ynHdu_vBMioYTEetczExzeAGiiN2jZ-Sax-W7Dc2aqfk5gbyKt1gTQP8xQEauuaJ1b8VxYNsupXoBVoUODOflQOJ8Ry7l9j4h564YrXvMfra7KX9M46r2FaxDFY6-Q")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
          <div className="absolute top-4 left-4 size-12 bg-white/10 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
          </div>
          <div className="absolute bottom-10 right-10 size-16 bg-primary/20 backdrop-blur-xl rounded-full border border-primary/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-3xl">light_mode</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center space-y-4 mb-8">
        <h1 className="text-white text-3xl font-extrabold leading-[1.15] tracking-tight">
          Your mind deserves peace in a <span className="text-primary">noisy</span> digital world.
        </h1>
        <p className="text-white/70 text-lg font-medium leading-relaxed max-w-[90%]">
          Transform addictive scrolls into moments of clarity with AI-powered focus.
        </p>
      </div>

      <div className="flex w-full flex-row items-center justify-center gap-3 py-6">
        <div className="h-1.5 w-6 rounded-full bg-primary"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
      </div>

      <button 
        onClick={onNext}
        className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold text-lg py-5 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
      >
        <span>Get Started</span>
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );
};

export default WelcomeScreen;
