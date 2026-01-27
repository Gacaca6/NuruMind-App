
import React, { useState } from 'react';
import { Screen, UserState } from '../../types';
import NavigationBar from '../ui/NavigationBar';

interface Props {
  user: UserState;
  onNavigate: (screen: Screen) => void;
  onBack: () => void;
}

const SettingsScreen: React.FC<Props> = ({ user, onNavigate, onBack }) => {
  const [focusMode, setFocusMode] = useState('Balanced');

  return (
    <div className="flex flex-col h-full overflow-y-auto no-scrollbar pb-32">
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full bg-white/5">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold tracking-tight">Settings & Control</h1>
        </div>
        <button className="relative flex items-center justify-center size-10 rounded-full bg-white/5">
          <span className="material-symbols-outlined text-2xl">notifications</span>
          <span className="absolute top-2.5 right-2.5 size-2 bg-primary rounded-full ring-2 ring-background-dark"></span>
        </button>
      </header>

      <main className="max-w-md mx-auto px-4 pt-6 space-y-8">
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-lg font-bold tracking-tight">Privacy Dashboard</h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full">Secure</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="glass-card p-4 rounded-xl flex flex-col gap-3">
              <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">shield_person</span>
              </div>
              <div>
                <p className="text-sm font-bold">AI Privacy</p>
                <p className="text-xs text-slate-400">Local processing only</p>
              </div>
              <div className="mt-auto">
                <div className="w-11 h-6 bg-primary rounded-full relative p-1 cursor-pointer">
                  <div className="absolute right-1 top-1 size-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col gap-3">
              <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">data_usage</span>
              </div>
              <div>
                <p className="text-sm font-bold">Tracking</p>
                <p className="text-xs text-slate-400">Zero data sharing</p>
              </div>
              <div className="mt-auto">
                <div className="w-11 h-6 bg-white/10 rounded-full relative p-1 cursor-pointer">
                  <div className="absolute left-1 top-1 size-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="px-1 mb-2">
            <h3 className="text-lg font-bold tracking-tight">Focus Engine Mode</h3>
            <p className="text-sm text-slate-400 mt-1">Select your level of digital protection.</p>
          </div>
          <div className="flex px-1 py-3">
            <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-white/5 p-1.5">
              {['Soft', 'Balanced', 'Strict'].map(mode => (
                <button
                  key={mode}
                  onClick={() => setFocusMode(mode)}
                  className={`flex-1 h-full rounded-lg text-sm font-bold transition-all ${focusMode === mode ? 'bg-background-dark text-primary shadow-sm' : 'text-slate-400'}`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
          <p className="text-slate-300 text-sm font-normal leading-relaxed px-1">
            <span className="text-primary font-bold">{focusMode} mode</span> reduces distracting notifications while keeping essential communication open. AI filters addictive reels and loops.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-bold tracking-tight px-1 mb-2">Account & More</h3>
          <div className="flex flex-col rounded-2xl overflow-hidden bg-white/5">
            {[
              { icon: 'person_outline', title: 'Profile Details', sub: 'Alex Thompson' },
              { icon: 'block', title: 'App Blocklist', sub: '12 apps restricted' },
              { icon: 'support_agent', title: 'Help & Support', sub: '24/7 NuruMind Guide' }
            ].map((item, i) => (
              <button key={i} className="flex items-center gap-4 p-4 hover:bg-white/10 transition-colors border-b border-white/5 last:border-0">
                <div className="size-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.sub}</p>
                </div>
                <span className="material-symbols-outlined text-slate-400">chevron_right</span>
              </button>
            ))}
          </div>
        </section>

        <footer className="text-center py-4">
          <p className="text-xs text-slate-600 font-medium">NuruMind v2.4.0 — Made for healthy minds</p>
        </footer>
      </main>

      <NavigationBar currentScreen={Screen.SETTINGS} onNavigate={onNavigate} />
    </div>
  );
};

export default SettingsScreen;
