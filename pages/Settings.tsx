import React, { useContext } from 'react';
import { ThemeContext } from '../App';

export const Settings: React.FC = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex-1 flex flex-col min-h-screen pb-24">
      <div className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 transition-colors duration-300">
        <div className="flex items-end justify-between px-4 pb-3 pt-12">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        </div>
      </div>

      <main className="w-full max-w-md mx-auto flex flex-col gap-6 p-4">
        <section>
          <h2 className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-medium uppercase tracking-wider mb-2 ml-4">Appearance</h2>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm">
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 last:border-0">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                  <span className="material-symbols-outlined text-[20px]">dark_mode</span>
                </div>
                <span className="text-base font-medium">Dark Mode</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={isDark}
                  onChange={toggleTheme}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-medium uppercase tracking-wider mb-2 ml-4">Learning Preferences</h2>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm">
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-lg bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400">
                  <span className="material-symbols-outlined text-[20px]">notifications</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-medium">Daily Reminder</span>
                  <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Study at 8:00 PM</span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 last:border-0">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-lg bg-slate-500/10 dark:bg-slate-500/20 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">vibration</span>
                </div>
                <span className="text-base font-medium">Haptic Feedback</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-medium uppercase tracking-wider mb-2 ml-4">Support</h2>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm">
            <button className="w-full flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 active:bg-gray-50 dark:active:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-lg bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400">
                  <span className="material-symbols-outlined text-[20px] fill-1">star</span>
                </div>
                <span className="text-base font-medium">Rate App</span>
              </div>
              <span className="material-symbols-outlined text-gray-400 text-[20px]">chevron_right</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 last:border-0 active:bg-gray-50 dark:active:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-lg bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <span className="text-base font-medium">Send Feedback</span>
              </div>
              <span className="material-symbols-outlined text-gray-400 text-[20px]">chevron_right</span>
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-medium uppercase tracking-wider mb-2 ml-4">About</h2>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm">
            <button className="w-full flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 active:bg-gray-50 dark:active:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-lg bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400">
                  <span className="material-symbols-outlined text-[20px]">library_books</span>
                </div>
                <span className="text-base font-medium">Resources & Licenses</span>
              </div>
              <span className="material-symbols-outlined text-gray-400 text-[20px]">chevron_right</span>
            </button>
            <div className="flex items-center justify-between p-4 last:border-0">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-lg bg-gray-500/10 dark:bg-gray-500/20 text-gray-600 dark:text-gray-400">
                  <span className="material-symbols-outlined text-[20px]">info</span>
                </div>
                <span className="text-base font-medium">Version</span>
              </div>
              <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark font-normal">v1.0.2</span>
            </div>
          </div>
        </section>

        <div className="text-center py-6">
          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Made with ❤️ for Japanese Learners</p>
        </div>
      </main>
    </div>
  );
};