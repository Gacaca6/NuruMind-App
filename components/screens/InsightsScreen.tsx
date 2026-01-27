
import React, { useEffect, useState } from 'react';
import { Screen, UserState } from '../../types';
import NavigationBar from '../ui/NavigationBar';
import { getPersonalizedInsight } from '../../services/geminiService';

interface Props {
  user: UserState;
  onNavigate: (screen: Screen) => void;
}

const InsightsScreen: React.FC<Props> = ({ user, onNavigate }) => {
  const [personalizedInsight, setPersonalizedInsight] = useState("You're improving! Less addictive content exposure detected this week.");

  useEffect(() => {
    getPersonalizedInsight(user.clarityScore, user.streakDays).then(setPersonalizedInsight);
  }, [user]);

  return (
    <div className="flex flex-col h-full overflow-y-auto no-scrollbar pb-32">
      <nav className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
            <div 
              className="size-8 rounded-full bg-cover bg-center" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAB27ua83z-4Niy2_U9vjgsi-4ydduf98Hwo9kjXjRQCOwB1xYm3LWxShiSlEXJ3Lm_w2-38K4L8dbvkosBMOLG5CeNfq4K9J162aodfujvJSWGE4vbmRVdNi3eyqLBBR1ME94WAKsGAZEfHlHOyyyciDAwek-WTOf4mIjW8J4dX57EQ9nfD69NDL1eXvbtfozOSdqi_gsvLsifmUCT3rHnHbOOb_kXq2n5t31h2QX9qiTerPpjHRBsgLPi2_jg3P6NLXCgl6Wbdw")' }}
            ></div>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-none">Insights & Progress</h1>
            <p className="text-xs text-slate-400">NuruMind AI Personal</p>
          </div>
        </div>
        <button className="size-10 flex items-center justify-center rounded-full bg-white/10">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </nav>

      <header className="px-4 py-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#1a2e24] border border-primary/10 shadow-[0_0_15px_rgba(19,236,128,0.1)]">
            <div className="flex justify-between items-start">
              <p className="text-slate-300 text-sm font-medium">Clarity Score</p>
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-bold tracking-tight">{user.clarityScore}</p>
              <p className="text-primary text-sm font-bold">+15%</p>
            </div>
            <p className="text-slate-400 text-xs mt-1">Focus is sharper today</p>
          </div>
        </div>
      </header>

      <section className="px-4 mb-6">
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-start gap-4">
          <div className="bg-primary text-background-dark rounded-full p-2 flex items-center justify-center">
            <span className="material-symbols-outlined text-sm font-bold">trending_up</span>
          </div>
          <div>
            <p className="text-white font-semibold text-sm">You’re improving, Alex!</p>
            <p className="text-slate-400 text-sm">{personalizedInsight}</p>
          </div>
        </div>
      </section>

      <section className="px-4 mb-8">
        <div className="bg-[#1a2e24] rounded-xl p-6 border border-primary/10">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-lg">Weekly Trend</h3>
              <p className="text-slate-400 text-xs">Clarity vs Exposure</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-primary text-2xl font-bold">High</p>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Consistency</p>
            </div>
          </div>
          <div className="relative h-[180px] w-full mt-4">
            <svg className="w-full h-full" viewBox="0 0 472 150" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="emerald-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#13ec80" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#13ec80" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V150H0V109Z" fill="url(#emerald-grad)" />
              <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#13ec80" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex justify-between mt-4">
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(d => (
              <span key={d} className={`text-[11px] font-bold ${d === 'SAT' ? 'text-primary' : 'text-slate-400'}`}>{d}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 mb-12">
        <h2 className="text-xl font-bold mb-4 px-1">Trigger Analysis</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1a2e24] p-4 rounded-xl border border-primary/10">
            <div className="size-8 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-sm">schedule</span>
            </div>
            <h4 className="font-bold text-sm mb-1">Peak Hazard</h4>
            <p className="text-xs text-slate-400 mb-2">9:00 PM - 11:00 PM</p>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-orange-500 h-full w-[75%] rounded-full"></div>
            </div>
            <p className="text-[10px] mt-2 text-orange-400">High risk period</p>
          </div>

          <div className="bg-[#1a2e24] p-4 rounded-xl border border-primary/10">
            <div className="size-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-sm">apps</span>
            </div>
            <h4 className="font-bold text-sm mb-1">Top Source</h4>
            <p className="text-xs text-slate-400 mb-2">Social Feeds</p>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-red-500 h-full w-[60%] rounded-full"></div>
            </div>
            <p className="text-[10px] mt-2 text-red-400">42% of exposure</p>
          </div>
        </div>
      </section>

      <NavigationBar currentScreen={Screen.INSIGHTS} onNavigate={onNavigate} />
    </div>
  );
};

export default InsightsScreen;
