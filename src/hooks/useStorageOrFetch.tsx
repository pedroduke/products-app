import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type ErrorMessage = Error | unknown | null;

function useStorageOrFetch<T>(
  url: string,
  storageKey: string
): [
  data: T | null,
  setData: Dispatch<SetStateAction<T | null>>,
  isLoading: boolean,
  error: ErrorMessage
] {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorMessage>(null);

  useEffect(() => {
    const localStorageData = localStorage.getItem(storageKey);

    if (localStorageData) {
      const parsedData: T = JSON.parse(localStorageData);
      setData(parsedData);
      setIsLoading(false);
    } else {
      fetchFromApi();
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(data));
    }
  }, [data]);

  const fetchFromApi = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      setError('Ooops there was a problem getting data, please try again later');
    }
    setIsLoading(false);
  };

  return [data, setData, isLoading, error];
}

export default useStorageOrFetch;
