
import React from 'react';
import { Screen, UserState } from '../../types';
import NavigationBar from '../ui/NavigationBar';

interface Props {
  user: UserState;
  onNavigate: (screen: Screen) => void;
  onStartFocus: () => void;
}

const HomeScreen: React.FC<Props> = ({ user, onNavigate, onStartFocus }) => {
  return (
    <div className="flex flex-col h-full overflow-y-auto no-scrollbar pb-32">
      <header className="flex items-center justify-between p-6 pt-8">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="size-12 rounded-full border-2 border-[#D4AF37] p-0.5 overflow-hidden">
              <img 
                className="w-full h-full object-cover rounded-full" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2OeP-qcOe0hvTX81uv0_WEE133-7AwGDW1rUL10WpmM2-zZXOrcycdNnHwxTc3l7rrvRZU4eX3kqVcIXLReV_ymfXZXvZRiSomHK0QCd9dyzMBDNVBLsMBXQIDfp-54y20rs754BxJnDdWUwafNlP878s2EFVqCQSqUyukk9JamJYhltlIROltcs60gIf0pAgkg5uzI5WYMZdYHTZIj6f1XRHLqN2FF4P26Y2LrTzfEWhO131Pn3N6e8-xcH6hETuuD6yS8LScA" 
                alt="Profile"
              />
            </div>
            <div className="absolute bottom-0 right-0 size-3 bg-primary rounded-full border-2 border-background-dark"></div>
          </div>
          <div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">NuruMind</p>
            <h2 className="text-lg font-bold leading-tight">Good evening, stay steady.</h2>
          </div>
        </div>
        <button className="flex size-11 items-center justify-center rounded-full bg-card-dark text-white hover:bg-primary/20 transition-colors shadow-lg">
          <span className="material-symbols-outlined text-[24px]">notifications</span>
        </button>
      </header>

      <main className="px-6">
        <div className="flex flex-col items-center justify-center py-8 relative">
          <div className="relative size-64 flex items-center justify-center">
            <div className="absolute inset-0 clarity-ring rounded-full transform rotate-180"></div>
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
            <div className="flex flex-col items-center justify-center text-center z-10">
              <p className="text-slate-400 text-sm font-medium">Daily Clarity</p>
              <span className="text-6xl font-extrabold text-white">{user.clarityScore}</span>
              <p className="text-primary text-sm font-bold flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[16px] fill-current">auto_awesome</span>
                Optimal
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-slate-300 text-base font-medium">Your mind is exceptionally clear today.</p>
            <p className="text-slate-500 text-xs mt-1">Based on 6.2 hours of restricted distraction.</p>
          </div>
        </div>

        <div className="glass-card rounded-xl p-5 mb-8 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-4">
            <div className="bg-primary/20 p-3 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[28px] fill-current">local_fire_department</span>
            </div>
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Clean Scroll Streak</p>
              <p className="text-white text-2xl font-bold">{user.streakDays} Days</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-primary text-sm font-bold">+2%</p>
            <p className="text-slate-500 text-[10px] uppercase">vs last week</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-bold tracking-tight">Quick Actions</h3>
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Premium</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div 
            onClick={onStartFocus}
            className="col-span-2 glass-card rounded-xl overflow-hidden relative group cursor-pointer active:scale-[0.98] transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-50"></div>
            <div className="relative p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(19,236,128,0.4)]">
                  <span className="material-symbols-outlined text-background-dark font-bold">center_focus_strong</span>
                </div>
                <div>
                  <p className="text-white text-base font-bold">Focus Mode</p>
                  <p className="text-slate-400 text-sm">Block distractions now</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-500">chevron_right</span>
            </div>
          </div>

          <div 
            onClick={() => onNavigate(Screen.SAFE_HAVEN)}
            className="glass-card rounded-xl p-5 flex flex-col gap-3 group cursor-pointer active:scale-[0.98] transition-all"
          >
            <div className="size-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
              <span className="material-symbols-outlined">self_improvement</span>
            </div>
            <div>
              <p className="text-white text-base font-bold">Calm Reset</p>
              <p className="text-slate-400 text-xs">3-min breathing</p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate(Screen.INSIGHTS)}
            className="glass-card rounded-xl p-5 flex flex-col gap-3 group cursor-pointer active:scale-[0.98] transition-all"
          >
            <div className="size-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <div>
              <p className="text-white text-base font-bold">View Insights</p>
              <p className="text-slate-400 text-xs">Digital trends</p>
            </div>
          </div>
        </div>
      </main>

      <NavigationBar currentScreen={Screen.HOME} onNavigate={onNavigate} />
    </div>
  );
};

export default HomeScreen;
