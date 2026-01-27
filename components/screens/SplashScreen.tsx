
import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative">
      <div className="absolute w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative flex items-center justify-center mb-12 animate-pulse">
          <div className="absolute w-32 h-32 bg-primary/20 rounded-full blur-[40px]"></div>
          <div className="relative w-1.5 h-16 bg-primary rounded-full shadow-[0_0_20px_rgba(19,236,128,0.8)]"></div>
        </div>
        
        <h1 className="text-white tracking-tight text-[42px] font-bold leading-tight px-4 text-center">
          NuruMind
        </h1>
        <p className="text-primary/70 text-lg font-light tracking-[0.2em] uppercase pb-3 pt-1 px-4 text-center">
          Clarity over impulse
        </p>
      </div>

      <div className="absolute bottom-16 w-full max-w-xs px-8 z-30">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <p className="text-white/40 text-xs font-medium tracking-widest uppercase animate-bounce">
              Calibrating Focus
            </p>
          </div>
          <div className="h-1 w-full rounded-full bg-white/5 overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
