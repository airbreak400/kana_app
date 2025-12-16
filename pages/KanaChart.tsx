import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HIRAGANA_DATA } from '../constants';

export const KanaChart: React.FC = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'Hiragana' | 'Katakana'>('Hiragana');

  return (
    <div className="flex-1 flex flex-col min-h-screen pb-24">
       <header className="flex items-center px-6 pt-12 pb-4 justify-between sticky top-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md z-20 transition-colors">
        <h2 className="text-3xl font-bold leading-tight tracking-tight flex-1">Kana Chart</h2>
      </header>

      <div className="sticky top-[88px] z-10 px-6 py-2 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md transition-colors">
        <div className="flex h-12 w-full items-center justify-center rounded-full bg-white dark:bg-[#2f2e1b] p-1 shadow-sm border border-black/5 dark:border-white/5">
          <button 
            onClick={() => setMode('Hiragana')}
            className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-4 transition-all duration-200 ${mode === 'Hiragana' ? 'bg-primary shadow-sm text-black' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'}`}
          >
            <span className="truncate text-sm font-bold">あ Hiragana</span>
          </button>
          <button 
            onClick={() => setMode('Katakana')}
            className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-4 transition-all duration-200 ${mode === 'Katakana' ? 'bg-primary shadow-sm text-black' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'}`}
          >
            <span className="truncate text-sm font-bold">ア Katakana</span>
          </button>
        </div>
      </div>

      <main className="flex-1 px-4 py-4">
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
          {HIRAGANA_DATA.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(`/detail/${item.id}`)}
              className="group relative flex flex-col items-center justify-center aspect-[4/5] rounded-2xl bg-white dark:bg-card-dark shadow-sm border border-black/5 dark:border-white/5 active:scale-95 transition-all active:ring-2 active:ring-primary overflow-hidden hover:shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 dark:to-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-3xl font-japanese font-bold text-gray-900 dark:text-white mb-1">
                {mode === 'Hiragana' ? item.char : 'ア' /* Simplified Katakana logic for demo */}
              </span>
              <span className="text-xs font-medium text-gray-400 dark:text-gray-500">{item.romaji}</span>
            </button>
          ))}
        </div>
        {/* Spacer for bottom nav */}
        <div className="h-8"></div>
      </main>
    </div>
  );
};