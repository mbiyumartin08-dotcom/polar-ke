// src/hooks/useFetch.js
import { useState, useEffect, useCallback } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);        // the result
  const [loading, setLoading] = useState(true);  // are we waiting?
  const [error, setError] = useState(null);      // did it fail?
  const [refreshKey, setRefreshKey] = useState(0); // lets us re-run the fetch

  useEffect(() => {
    let ignore = false;       // see "why ignore?" below
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json();
      })
      .then((json) => { if (!ignore) setData(json); })
      .catch((err) => { if (!ignore) setError(err.message); })
      .finally(() => { if (!ignore) setLoading(false); });

    return () => { ignore = true; };   // cleanup
  }, [url, refreshKey]);

  const refetch = useCallback(() => setRefreshKey((k) => k + 1), []);

  return { data, loading, error, refetch };
}