
export interface UserState {
  name: string;
  clarityScore: number;
  streakDays: number;
  isFirstTime: boolean;
  focusModeActive: boolean;
  privacyEnabled: boolean;
  blockedApps: string[];
}

export enum Screen {
  SPLASH = 'splash',
  WELCOME = 'welcome',
  PRIVACY = 'privacy',
  PERMISSIONS = 'permissions',
  HOME = 'home',
  FOCUS = 'focus',
  INSIGHTS = 'insights',
  SAFE_HAVEN = 'safe-haven',
  SETTINGS = 'settings'
}
