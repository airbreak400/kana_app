import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);

  // Mock quiz data matching the screenshot
  const question = {
    text: "Select the correct characters for «a»",
    options: ["あ", "い", "う", "え"]
  };

  return (
    <div className="relative flex flex-col h-screen w-full max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden pb-24">
      <header className="flex-none pt-12 px-6 pb-2">
        <div className="flex items-center gap-4">
          <button 
             onClick={() => navigate('/')}
             className="group flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl text-text-primary-light dark:text-white group-active:scale-90 transition-transform">close</span>
          </button>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="text-sm font-semibold text-text-primary-light/60 dark:text-white/60">Question 1/10</span>
            </div>
            <div className="h-3 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-500 ease-out" style={{ width: '10%' }}></div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col px-6 py-4 overflow-y-auto no-scrollbar">
        <div className="w-full mt-6 mb-8 text-center">
          <h2 className="text-2xl font-extrabold leading-tight text-text-primary-light dark:text-white">
            {question.text}
          </h2>
        </div>
        
        <div className="w-full grid grid-cols-2 gap-4 mb-auto">
          {question.options.map((opt, idx) => (
             <button 
                key={idx}
                onClick={() => setSelected(idx)}
                className={`group relative aspect-square rounded-2xl flex items-center justify-center shadow-sm transition-all duration-200 active:scale-[0.98] border-2
                  ${selected === idx 
                    ? 'bg-primary/10 border-primary' 
                    : 'bg-surface-light dark:bg-surface-dark border-transparent hover:border-primary/30 hover:bg-white dark:hover:bg-[#232e3c]'
                  }
                `}
             >
                <span className={`text-5xl font-japanese font-bold transition-colors ${selected === idx ? 'text-primary' : 'text-text-primary-light dark:text-white'}`}>
                  {opt}
                </span>
             </button>
          ))}
        </div>
        
        <div className="w-full h-[60px] shrink-0 bg-gray-200/50 dark:bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-dashed border-gray-300 dark:border-white/10">
          <span className="text-xs font-bold text-text-primary-light/30 dark:text-white/30 uppercase tracking-widest">Advertisement</span>
        </div>
        
        <button 
           className="w-full h-14 shrink-0 bg-primary hover:opacity-90 text-[#111418] font-extrabold rounded-xl text-lg shadow-lg active:scale-[0.98] transition-all flex items-center justify-center mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
           disabled={selected === null}
        >
          Check
        </button>
      </main>
    </div>
  );
};