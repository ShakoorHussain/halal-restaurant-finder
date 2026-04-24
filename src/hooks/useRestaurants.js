import { useState, useEffect } from 'react';
import { sheetParser } from '../utils/sheetParser';

// Yeh wo link hai jo hum ne Google Sheets se banaya tha. 
// Apne actual Published CSV link se isko replace kar lein.
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRfhucQRejY7iKYkrMxvlLwuWPxf_w9ieTydInqx5HZ-sf9nj_NybmvLckMgcVhPKlOV6DI1h9A3Jp_/pub?output=csv';

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(SHEET_CSV_URL);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const csvText = await response.text();
        const parsedData = sheetParser(csvText);
        
        setRestaurants(parsedData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { restaurants, isLoading, error };
};