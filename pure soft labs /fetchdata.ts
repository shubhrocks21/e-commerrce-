import { useEffect, useState } from 'react';

export const useFetchData = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const   
 fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setData(data);
      } catch   
 (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};
