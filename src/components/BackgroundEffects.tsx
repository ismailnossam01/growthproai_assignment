import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/50 dark:to-purple-900/50"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 dark:from-yellow-500/10 dark:to-pink-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-pink-400/20 to-red-400/20 dark:from-pink-500/10 dark:to-red-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob animation-delay-4000"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+CjwvZz4KPC9nPgo8L3N2Zz4K')] opacity-10 dark:opacity-5"></div>
    </div>
  );
};