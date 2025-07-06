import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { BusinessForm } from './components/BusinessForm';
import { BusinessCard } from './components/BusinessCard';
import { BackgroundEffects } from './components/BackgroundEffects';
import { useBusinessData } from './hooks/useBusinessData';

function AppContent() {
  const [formData, setFormData] = useState({ name: '', location: '' });
  const { 
    businessData, 
    loading, 
    error, 
    regeneratingHeadline, 
    fetchBusinessData, 
    regenerateHeadline 
  } = useBusinessData();

  const handleFormSubmit = (data: typeof formData) => {
    setFormData(data);
    fetchBusinessData(data);
  };

  const handleRegenerateHeadline = () => {
    regenerateHeadline(formData);
  };

  return (
    <div className="min-h-screen relative">
      <BackgroundEffects />
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-4 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
                Local Business
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Performance Dashboard
                </span>
              </h2>
              <p className="text-base sm:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto px-4">
                Get instant insights into your business performance with AI-powered analytics and SEO optimization
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              <div className="order-2 lg:order-1">
                <BusinessForm 
                  onSubmit={handleFormSubmit} 
                  loading={loading}
                  error={error}
                />
              </div>
              
              <div className="order-1 lg:order-2">
                {businessData ? (
                  <BusinessCard
                    businessData={businessData}
                    formData={formData}
                    onRegenerateHeadline={handleRegenerateHeadline}
                    regeneratingHeadline={regeneratingHeadline}
                  />
                ) : (
                  <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 dark:border-gray-700/20 text-center mx-4 sm:mx-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 opacity-50">
                      <span className="text-white text-xl sm:text-2xl">📊</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Ready to Analyze
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      Enter your business details to get started with AI-powered insights
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <footer className="py-6 sm:py-8 text-center text-gray-600 dark:text-gray-400 px-4">
          <p className="text-sm sm:text-base">© 2025 GrowthProAI. Built with React, TypeScript & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;