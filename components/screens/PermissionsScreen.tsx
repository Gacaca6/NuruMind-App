
import React, { useState } from 'react';

interface Props {
  onNext: () => void;
}

const PermissionsScreen: React.FC<Props> = ({ onNext }) => {
  const [permissions, setPermissions] = useState({ accessibility: true, overlay: false });

  return (
    <div className="flex flex-col h-full bg-background-dark">
      <div className="flex items-center p-6 pb-2 justify-between">
        <div className="text-white flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </div>
        <h2 className="text-white text-lg font-bold tracking-tight flex-1 text-center pr-10">Permissions</h2>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        <div className="px-6 pt-8 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Privacy First</span>
          </div>
          <h1 className="text-white tracking-tight text-[36px] font-bold leading-tight">Secure & Private</h1>
        </div>

        <div className="px-6 mb-8">
          <div className="glass-card rounded-xl p-5 border-l-4 border-l-primary">
            <p className="text-gray-300 text-base font-medium leading-relaxed">
              "We only see what helps you stay focused. Nothing more."
            </p>
            <p className="text-gray-500 text-sm mt-2">Our AI processes everything locally on your device.</p>
          </div>
        </div>

        <div className="px-6 pb-4">
          <h3 className="text-gray-400 text-xs font-bold uppercase tracking-[0.1em]">Control Center</h3>
        </div>

        <div className="px-6 mb-4">
          <div className="flex items-center gap-4 glass-card p-5 rounded-2xl justify-between">
            <div className="flex items-start gap-4">
              <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12 border border-primary/20">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-lg font-semibold leading-tight">Accessibility</p>
                <p className="text-gray-400 text-sm font-normal leading-snug mt-1">Detects addictive apps to help you pause and refocus.</p>
              </div>
            </div>
            <div className="shrink-0">
              <button 
                onClick={() => setPermissions(p => ({ ...p, accessibility: !p.accessibility }))}
                className={`relative flex h-[32px] w-[56px] items-center rounded-full transition-all duration-300 ${permissions.accessibility ? 'bg-primary' : 'bg-white/10'}`}
              >
                <div className={`h-[24px] w-[24px] rounded-full bg-white shadow-lg transition-all duration-300 ${permissions.accessibility ? 'ml-[28px]' : 'ml-1'}`}></div>
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 mb-4">
          <div className="flex items-center gap-4 glass-card p-5 rounded-2xl justify-between">
            <div className="flex items-start gap-4">
              <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12 border border-primary/20">
                <span className="material-symbols-outlined">layers</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-lg font-semibold leading-tight">Screen Overlay</p>
                <p className="text-gray-400 text-sm font-normal leading-snug mt-1">Show focus timers and gentle reminders over other apps.</p>
              </div>
            </div>
            <div className="shrink-0">
              <button 
                onClick={() => setPermissions(p => ({ ...p, overlay: !p.overlay }))}
                className={`relative flex h-[32px] w-[56px] items-center rounded-full transition-all duration-300 ${permissions.overlay ? 'bg-primary' : 'bg-white/10'}`}
              >
                <div className={`h-[24px] w-[24px] rounded-full bg-white shadow-lg transition-all duration-300 ${permissions.overlay ? 'ml-[28px]' : 'ml-1'}`}></div>
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 pt-4 flex justify-center">
          <div className="flex items-center gap-2 opacity-60">
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <span className="text-xs font-medium tracking-wide">End-to-End Encrypted Access</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent">
        <button 
          onClick={onNext}
          className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-4 rounded-xl shadow-[0_8px_30px_rgb(19,236,128,0.3)] transition-all flex items-center justify-center gap-2"
        >
          Continue to Focus
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <p className="text-center text-gray-500 text-[10px] mt-4 uppercase tracking-[0.1em]">
          Read our <a className="text-primary underline" href="#">Privacy Promise</a>
        </p>
      </div>
    </div>
  );
};

export default PermissionsScreen;
