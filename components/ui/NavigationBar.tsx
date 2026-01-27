
import React from 'react';
import { Screen } from '../../types';

interface Props {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const NavigationBar: React.FC<Props> = ({ currentScreen, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-background-dark/90 backdrop-blur-xl border-t border-white/5 px-6 pt-3 pb-8 flex justify-between items-center z-50 rounded-t-3xl shadow-2xl">
      <button 
        onClick={() => onNavigate(Screen.HOME)}
        className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === Screen.HOME ? 'text-primary' : 'text-slate-500 hover:text-slate-300'}`}
      >
        <span className="material-symbols-outlined fill-current">home</span>
        <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
      </button>
      
      <button 
        onClick={() => onNavigate(Screen.INSIGHTS)}
        className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === Screen.INSIGHTS ? 'text-primary' : 'text-slate-500 hover:text-slate-300'}`}
      >
        <span className="material-symbols-outlined">query_stats</span>
        <span className="text-[10px] font-bold uppercase tracking-tighter">Trends</span>
      </button>
      
      <div className="relative -top-8">
        <button 
          onClick={() => onNavigate(Screen.FOCUS)}
          className="size-14 bg-primary text-background-dark rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(19,236,128,0.5)] border-4 border-background-dark transition-transform active:scale-90"
        >
          <span className="material-symbols-outlined text-[32px] font-bold">add</span>
        </button>
      </div>
      
      <button 
        onClick={() => onNavigate(Screen.SAFE_HAVEN)}
        className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === Screen.SAFE_HAVEN ? 'text-primary' : 'text-slate-500 hover:text-slate-300'}`}
      >
        <span className="material-symbols-outlined">psychology</span>
        <span className="text-[10px] font-bold uppercase tracking-tighter">Mind</span>
      </button>
      
      <button 
        onClick={() => onNavigate(Screen.SETTINGS)}
        className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === Screen.SETTINGS ? 'text-primary' : 'text-slate-500 hover:text-slate-300'}`}
      >
        <span className="material-symbols-outlined">settings</span>
        <span className="text-[10px] font-bold uppercase tracking-tighter">Settings</span>
      </button>
    </nav>
  );
};

export default NavigationBar;
