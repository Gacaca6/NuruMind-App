
import React, { useState, useEffect, useCallback } from 'react';
import { Screen, UserState } from './types';
import SplashScreen from './components/screens/SplashScreen';
import WelcomeScreen from './components/screens/WelcomeScreen';
import PrivacyScreen from './components/screens/PrivacyScreen';
import PermissionsScreen from './components/screens/PermissionsScreen';
import HomeScreen from './components/screens/HomeScreen';
import FocusModeScreen from './components/screens/FocusModeScreen';
import InsightsScreen from './components/screens/InsightsScreen';
import SafeHavenScreen from './components/screens/SafeHavenScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import NudgeOverlay from './components/ui/NudgeOverlay';

const INITIAL_STATE: UserState = {
  name: 'Alex Thompson',
  clarityScore: 84,
  streakDays: 12,
  isFirstTime: true,
  focusModeActive: false,
  privacyEnabled: true,
  blockedApps: ['TikTok', 'Instagram', 'Snapchat', 'YouTube']
};

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.SPLASH);
  const [user, setUser] = useState<UserState>(INITIAL_STATE);
  const [showNudge, setShowNudge] = useState(false);

  // Initial navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen(Screen.WELCOME);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Simulate periodic detection nudges (only if on Home or Insights)
  useEffect(() => {
    if ([Screen.HOME, Screen.INSIGHTS].includes(currentScreen)) {
      const trigger = setTimeout(() => {
        setShowNudge(true);
      }, 30000); // Show a nudge after 30 seconds of browsing simulation
      return () => clearTimeout(trigger);
    }
  }, [currentScreen]);

  const handleNavigate = useCallback((screen: Screen) => {
    setCurrentScreen(screen);
  }, []);

  const handleAction = useCallback((action: string) => {
    if (action === 'startFocus') {
      handleNavigate(Screen.FOCUS);
    } else if (action === 'dismissNudge') {
      setShowNudge(false);
    }
  }, [handleNavigate]);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.SPLASH:
        return <SplashScreen />;
      case Screen.WELCOME:
        return <WelcomeScreen onNext={() => handleNavigate(Screen.PRIVACY)} />;
      case Screen.PRIVACY:
        return <PrivacyScreen onNext={() => handleNavigate(Screen.PERMISSIONS)} />;
      case Screen.PERMISSIONS:
        return <PermissionsScreen onNext={() => handleNavigate(Screen.HOME)} />;
      case Screen.HOME:
        return <HomeScreen 
          user={user} 
          onNavigate={handleNavigate} 
          onStartFocus={() => handleNavigate(Screen.FOCUS)} 
        />;
      case Screen.FOCUS:
        return <FocusModeScreen user={user} onBack={() => handleNavigate(Screen.HOME)} />;
      case Screen.INSIGHTS:
        return <InsightsScreen user={user} onNavigate={handleNavigate} />;
      case Screen.SAFE_HAVEN:
        return <SafeHavenScreen onBack={() => handleNavigate(Screen.HOME)} />;
      case Screen.SETTINGS:
        return <SettingsScreen user={user} onNavigate={handleNavigate} onBack={() => handleNavigate(Screen.HOME)} />;
      default:
        return <HomeScreen user={user} onNavigate={handleNavigate} onStartFocus={() => handleNavigate(Screen.FOCUS)} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full max-w-[430px] mx-auto bg-background-dark shadow-2xl overflow-hidden flex flex-col">
      <div className="absolute inset-0 grain-texture pointer-events-none z-[999]"></div>
      
      {renderScreen()}

      {showNudge && (
        <NudgeOverlay 
          onScrollAway={() => setShowNudge(false)} 
          onIgnore={() => setShowNudge(false)} 
        />
      )}
    </div>
  );
};

export default App;
