
import React from 'react';

interface Props {
  onNext: () => void;
}

const PrivacyScreen: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="flex items-center p-4 pb-2 justify-between">
        <div className="text-white flex size-12 shrink-0 items-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <h2 className="text-white text-lg font-bold flex-1 text-center pr-12">NuruMind</h2>
      </div>

      <div className="px-4 py-3">
        <div 
          className="w-full relative bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-background-dark rounded-xl min-h-[200px] shadow-2xl"
          style={{ 
            backgroundImage: 'linear-gradient(to bottom, rgba(10,26,18,0.2), rgba(10,26,18,0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBHs1CRPMB-xmDPmVwbHBlE9D1UhxIjTxaHlKcKQiBm__2mC4sHty1DVOvHv4yflPQ6XIsMzg-fMNyYcy0B1ZwwCGUeBJ4v4my1y9vWmyivIsZ9fxvCyDOVSgA-AaUQL-j0yk7Hdzqkjr0MJXe1C0zuq9t5H0rk5qJWdk_bJLuJxGH9zMNiqtFQHiLDJXyWdANLkk2EZkSw-SRMzVk46sx7gEZougOi9J_Z0invq1eZwtdEOXpKG83XWb3Y1xnEFADpm8VLTA1E0w")'
          }}
        >
          <div className="p-6">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-2 border border-primary/30">Secure & Private</span>
            <h1 className="text-white tracking-tight text-3xl font-extrabold leading-tight">Privacy First</h1>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <h2 className="text-white tracking-tight text-[24px] font-bold leading-tight text-center">
          Your screen. Your data. <br/>
          <span className="text-primary">Your control.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-3 px-4 py-2">
        <div className="flex items-center gap-4 bg-card-dark p-4 rounded-xl border border-white/5 shadow-xl">
          <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12 border border-primary/20">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>memory</span>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-bold">On-device AI</p>
            <p className="text-[#9db9ab] text-sm font-medium leading-relaxed">Processing happens locally on your phone, never on our servers.</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-card-dark p-4 rounded-xl border border-white/5 shadow-xl">
          <div className="text-orange-400 flex items-center justify-center rounded-lg bg-orange-400/10 shrink-0 size-12 border border-orange-400/20">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>no_photography</span>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-bold">No screenshots saved</p>
            <p className="text-[#9db9ab] text-sm font-medium leading-relaxed">Visual data is analyzed in real-time and discarded immediately.</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-card-dark p-4 rounded-xl border border-white/5 shadow-xl">
          <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12 border border-primary/20">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>encrypted</span>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-bold">Zero Data Sharing</p>
            <p className="text-[#9db9ab] text-sm font-medium leading-relaxed">Your focus habits are yours alone. We never sell your data.</p>
          </div>
        </div>
      </div>

      <div className="mt-auto p-6 space-y-4">
        <button 
          onClick={onNext}
          className="w-full bg-primary hover:bg-primary/90 text-background-dark font-extrabold py-4 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-primary/20"
        >
          I Understand & Continue
        </button>
        <p className="text-center">
          <a className="text-[#9db9ab] text-sm font-semibold hover:text-primary transition-colors" href="#">
            Learn more about our privacy commitment
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyScreen;
