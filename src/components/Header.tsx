import React from 'react';
import { BarChart3, Zap } from 'lucide-react';
import { ThemeToggle } from './ui/ThemeToggle';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Zap className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  GrowthProAI
                </h1>
                <p className="text-xs text-gray-700 dark:text-gray-300 hidden sm:block">
                  Local Business Intelligence
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};