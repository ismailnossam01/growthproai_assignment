import { useState } from 'react';

export interface BusinessData {
  rating: number;
  reviews: number;
  headline: string;
  lastUpdated: string;
}

export interface BusinessForm {
  name: string;
  location: string;
}

export const useBusinessData = () => {
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [regeneratingHeadline, setRegeneratingHeadline] = useState(false);

  // Use environment variable for API URL, fallback to localhost for development
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  const fetchBusinessData = async (formData: BusinessForm) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE_URL}/business-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch business data');
      }

      const data = await response.json();
      setBusinessData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const regenerateHeadline = async (formData: BusinessForm) => {
    if (!businessData) return;
    
    setRegeneratingHeadline(true);
    setError(null);
    
    try {
      const response = await fetch(
        `${API_BASE_URL}/regenerate-headline?name=${encodeURIComponent(formData.name)}&location=${encodeURIComponent(formData.location)}`
      );

      if (!response.ok) {
        throw new Error('Failed to regenerate headline');
      }

      const data = await response.json();
      setBusinessData(prev => prev ? { ...prev, headline: data.headline } : null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to regenerate headline');
    } finally {
      setRegeneratingHeadline(false);
    }
  };

  return {
    businessData,
    loading,
    error,
    regeneratingHeadline,
    fetchBusinessData,
    regenerateHeadline,
  };
};