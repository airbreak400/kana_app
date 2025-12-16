import React, { createContext, useEffect, useState } from 'react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import { KanaChart } from './pages/KanaChart';
import { CharacterDetail } from './pages/CharacterDetail';
import { Settings } from './pages/Settings';
import { Quiz } from './pages/Quiz';
import { BottomNav } from './components/BottomNav';

export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

const App: React.FC = () => {
  // Theme State
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference or localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    </ThemeContext.Provider>
  );
};

const AppShell: React.FC = () => {
  const location = useLocation();
  // Nav is visible on Home (Chart) and Settings.
  // Quiz and Detail are full screen.
  const showNav = ['/', '/settings'].includes(location.pathname);

  return (
    <div className="w-full min-h-screen bg-[#e5e5e5] dark:bg-[#111] flex justify-center font-display">
       <div className="w-full max-w-md bg-background-light dark:bg-background-dark shadow-2xl min-h-screen relative flex flex-col">
          <Routes>
            <Route path="/" element={<KanaChart />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/detail/:id" element={<CharacterDetail />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
          {showNav && <BottomNav />}
       </div>
    </div>
  );
}

export default App;