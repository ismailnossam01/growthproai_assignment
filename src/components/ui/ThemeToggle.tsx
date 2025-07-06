import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 sm:p-2.5 rounded-xl bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 hover:bg-white/30 dark:hover:bg-gray-600/30 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 sm:w-6 sm:h-6">
        <Sun 
          className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200 transition-all duration-300 ${
            theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200 transition-all duration-300 ${
            theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`} 
        />
      </div>
    </button>
  );
};