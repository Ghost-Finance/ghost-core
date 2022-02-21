import { useCallback, useEffect, useState } from 'react';

const useAsync = <T, E = void>(
  asyncFunction: () => Promise<T | any>,
  immediate = true
) => {
  const [data, setData] = useState<T | null | any>(null);
  const [error, setError] = useState<E | null>(null);
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'success' | 'error'
  >('idle');

  const execute = useCallback(() => {
    setStatus('pending');
    setData(null);
    setError(null);

    return asyncFunction()
      .then((response: any) => {
        setData(response);
        setStatus('success');
      })
      .catch(error => {
        setError(error);
        setStatus('error');
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, data, error };
};

export default useAsync;
