import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HIRAGANA_DATA } from '../constants';
import { DrawingCanvas } from '../components/DrawingCanvas';

export const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const data = HIRAGANA_DATA.find((d) => d.id === id);

  if (!data) return <div>Character not found</div>;

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark font-display pb-20">
      <header className="flex items-center p-4 pb-2 justify-between z-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-text-primary-light dark:text-white text-[24px]">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
          <span className="text-xs font-medium text-text-secondary-light dark:text-gray-400 tracking-wide uppercase">Hiragana Basic 1</span>
          <div className="flex gap-1 mt-1">
            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          </div>
        </div>
        <button className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-text-primary-light dark:text-white text-[24px]">more_horiz</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center w-full px-6 pt-2 pb-6 overflow-y-auto no-scrollbar">
        {/* Character Card */}
        <div className="relative w-full aspect-square max-w-[280px] bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-sm flex flex-col items-center justify-center mb-6 border border-gray-100 dark:border-gray-700 overflow-hidden group pb-16">
          <div className="absolute w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 via-transparent to-transparent rounded-full blur-3xl -top-10 -right-10 opacity-60"></div>
          <h1 className="font-japanese text-[110px] leading-none font-bold text-text-primary-light dark:text-white z-10 group-hover:scale-105 transition-transform duration-500">
            {data.char}
          </h1>
          <p className="text-4xl font-bold text-text-primary-light dark:text-white z-10 mt-2">{data.romaji}</p>
          
          <div className="absolute bottom-4 flex gap-2 bg-background-light dark:bg-background-dark p-1.5 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 z-20">
             <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-700 text-text-primary-light dark:text-white hover:bg-primary hover:text-black transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">man</span>
             </button>
             <div className="w-px h-6 my-auto bg-gray-200 dark:bg-gray-600"></div>
             <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-black shadow-md">
                <span className="material-symbols-outlined text-[20px]">woman</span>
             </button>
          </div>
        </div>

        {/* Instruction */}
        <div className="w-full max-w-[320px] flex flex-col items-center gap-3 mb-6">
            <div className="px-4 py-1.5 bg-primary/20 dark:bg-primary/10 rounded-full mt-1">
                <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">lightbulb</span>
                    Write from top to bottom, left to right
                </span>
            </div>
        </div>

        {/* Practice Area */}
        <div className="w-full flex-1 min-h-[300px] relative flex flex-col">
            <div className="w-full flex justify-between items-end pb-2 z-10">
                <label className="text-sm font-bold text-text-primary-light dark:text-white">Practice</label>
            </div>
            
            <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[2rem] border-2 border-dashed border-gray-200 dark:border-gray-600 relative overflow-hidden shadow-inner flex-1">
               <DrawingCanvas char={data.char} />
            </div>
        </div>
      </main>
    </div>
  );
};