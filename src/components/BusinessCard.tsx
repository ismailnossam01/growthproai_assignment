import React from 'react';
import { Star, Users, RefreshCw, TrendingUp, Calendar } from 'lucide-react';
import { BusinessData, BusinessForm } from '../hooks/useBusinessData';
import { LoadingSpinner } from './ui/LoadingSpinner';

interface BusinessCardProps {
  businessData: BusinessData;
  formData: BusinessForm;
  onRegenerateHeadline: () => void;
  regeneratingHeadline: boolean;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({
  businessData,
  formData,
  onRegenerateHeadline,
  regeneratingHeadline
}) => {
  const { rating, reviews, headline, lastUpdated } = businessData;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-green-600 dark:text-green-400';
    if (rating >= 4.0) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-orange-600 dark:text-orange-400';
  };

  const getReviewsText = (count: number) => {
    if (count === 1) return '1 review';
    return `${count.toLocaleString()} reviews`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
      <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/30 dark:border-gray-700/30 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-green-500 to-blue-600 mb-3 sm:mb-4">
            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 break-words">
            {formData.name}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 break-words">
            {formData.location}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Rating Card */}
          <div className="bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 dark:border-gray-600/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mr-1" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Rating</span>
              </div>
            </div>
            <div className="flex items-center flex-wrap">
              <span className={`text-2xl sm:text-3xl font-bold ${getRatingColor(rating)}`}>
                {rating}
              </span>
              <div className="flex ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                      i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-400 dark:text-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Reviews Card */}
          <div className="bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 dark:border-gray-600/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-1" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Reviews</span>
              </div>
            </div>
            <div className="flex items-center flex-wrap">
              <span className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                {reviews.toLocaleString()}
              </span>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 ml-2 break-words">
                {getReviewsText(reviews)}
              </span>
            </div>
          </div>
        </div>

        {/* SEO Headline Section */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-600/20 dark:to-pink-600/20 rounded-xl p-4 sm:p-6 border border-purple-200/30 dark:border-purple-700/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              AI-Generated SEO Headline
            </h3>
            <button
              onClick={onRegenerateHeadline}
              disabled={regeneratingHeadline}
              className="flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none w-full sm:w-auto"
            >
              {regeneratingHeadline ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  <span className="hidden sm:inline">Generating...</span>
                  <span className="sm:hidden">Generating</span>
                </>
              ) : (
                <>
                  <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  <span className="hidden sm:inline">Regenerate</span>
                  <span className="sm:hidden">Regenerate</span>
                </>
              )}
            </button>
          </div>
          
          <div className="relative">
            <p className={`text-gray-800 dark:text-gray-100 text-sm sm:text-base lg:text-lg leading-relaxed transition-all duration-300 break-words ${
              regeneratingHeadline ? 'opacity-50' : 'opacity-100'
            }`}>
              "{headline}"
            </p>
            {regeneratingHeadline && (
              <div className="absolute inset-0 flex items-center justify-center">
                <LoadingSpinner size="lg" className="text-purple-600" />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/20 dark:border-gray-600/20 flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-300 gap-2">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span>Last updated: {formatDate(lastUpdated)}</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span>Live data</span>
          </div>
        </div>
      </div>
    </div>
  );
};