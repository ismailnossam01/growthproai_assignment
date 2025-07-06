import React, { useState } from 'react';
import { Building2, MapPin, Search } from 'lucide-react';
import { BusinessForm as BusinessFormType } from '../hooks/useBusinessData';
import { LoadingSpinner } from './ui/LoadingSpinner';

interface BusinessFormProps {
  onSubmit: (data: BusinessFormType) => void;
  loading: boolean;
  error: string | null;
}

export const BusinessForm: React.FC<BusinessFormProps> = ({ onSubmit, loading, error }) => {
  const [formData, setFormData] = useState<BusinessFormType>({
    name: '',
    location: ''
  });
  const [validationErrors, setValidationErrors] = useState<Partial<BusinessFormType>>({});

  const validateForm = (): boolean => {
    const errors: Partial<BusinessFormType> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Business name is required';
    }
    
    if (!formData.location.trim()) {
      errors.location = 'Location is required';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof BusinessFormType, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-0">
      <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/30 dark:border-gray-700/30 shadow-2xl">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-3 sm:mb-4">
            <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Business Dashboard
          </h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200">
            Get insights into your local business performance
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                Business Name
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  id="businessName"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full pl-10 sm:pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                    validationErrors.name 
                      ? 'border-red-400 dark:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500'
                  }`}
                  placeholder="Enter your business name"
                />
              </div>
              {validationErrors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className={`w-full pl-10 sm:pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                    validationErrors.location 
                      ? 'border-red-400 dark:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500'
                  }`}
                  placeholder="Enter your location"
                />
              </div>
              {validationErrors.location && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.location}</p>
              )}
            </div>
          </div>

          {error && (
            <div className="p-3 sm:p-4 rounded-xl bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700">
              <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center text-sm sm:text-base"
          >
            {loading ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                <span className="hidden sm:inline">Analyzing Business...</span>
                <span className="sm:hidden">Analyzing...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="hidden sm:inline">Get Business Insights</span>
                <span className="sm:hidden">Get Insights</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};