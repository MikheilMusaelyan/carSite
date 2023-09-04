import axios from "axios";
import { useEffect, useState } from 'react';

export default function useFetch(
  query: any,
  options: any = {}
) {
  const { initialData } = options;
  const [data, setData] = useState(initialData || null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios(query);
        if (isMounted) {
          setData(response.data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "An error occurred");
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [query]);

  const updateData = (newData: any) => {
    setData(newData);
  };

  const clearError = () => {
    setError(null);
  };

  return {
    data,
    error,
    loading,
    updateData,
    clearError,
  };
}
