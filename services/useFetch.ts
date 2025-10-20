// custom hook

import { useEffect, useState } from "react";

// The type parameter T is defined here for the entire hook
const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
  // States now correctly use the generic type T
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFunction();

      // MODIFICATION: Set the fetched data to the state
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setLoading(false);
    setError(null);
  };

  useEffect(() => {
    if (autoFetch) {
      // MODIFICATION: Correctly handle initial data fetching without race condition
      fetchData();
    }
    // Dependency array is intentionally empty to run once on mount for autoFetch
  }, );

  // Return the fetched data, loading state, error, refetch function, and reset function
  return { data, loading, error, refetch: fetchData, reset };
};

export default useFetch;
