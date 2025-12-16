import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tab } from '../types';

export const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = (): Tab => {
    if (location.pathname === '/quiz') return Tab.PRACTICE;
    if (location.pathname === '/settings') return Tab.SETTINGS;
    return Tab.LEARN;
  };

  const activeTab = getActiveTab();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-[env(safe-area-inset-bottom)] pt-2 px-6 z-50 transition-colors duration-300">
      <div className="max-w-md mx-auto flex items-center justify-between h-16">
        <button 
          onClick={() => navigate('/')}
          className={`flex flex-col items-center justify-center w-1/3 gap-1 group transition-colors ${activeTab === Tab.LEARN ? 'text-primary' : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-gray-600 dark:hover:text-gray-300'}`}
        >
          <span className={`material-symbols-outlined text-[26px] transition-transform ${activeTab === Tab.LEARN ? 'fill-1 scale-110' : 'group-hover:scale-110'}`}>
            menu_book
          </span>
          <span className={`text-[10px] ${activeTab === Tab.LEARN ? 'font-bold' : 'font-medium'}`}>Learn</span>
        </button>

        <button 
          onClick={() => navigate('/quiz')}
          className={`flex flex-col items-center justify-center w-1/3 gap-1 group transition-colors ${activeTab === Tab.PRACTICE ? 'text-primary' : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-gray-600 dark:hover:text-gray-300'}`}
        >
          <span className={`material-symbols-outlined text-[26px] transition-transform ${activeTab === Tab.PRACTICE ? 'fill-1 scale-110' : 'group-hover:scale-110'}`}>
            edit_note
          </span>
          <span className={`text-[10px] ${activeTab === Tab.PRACTICE ? 'font-bold' : 'font-medium'}`}>Practice</span>
        </button>

        <button 
          onClick={() => navigate('/settings')}
          className={`flex flex-col items-center justify-center w-1/3 gap-1 group transition-colors ${activeTab === Tab.SETTINGS ? 'text-primary' : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-gray-600 dark:hover:text-gray-300'}`}
        >
          <span className={`material-symbols-outlined text-[26px] transition-transform ${activeTab === Tab.SETTINGS ? 'fill-1 scale-110' : 'group-hover:scale-110'}`}>
            settings
          </span>
          <span className={`text-[10px] ${activeTab === Tab.SETTINGS ? 'font-bold' : 'font-medium'}`}>Settings</span>
        </button>
      </div>
    </nav>
  );
};