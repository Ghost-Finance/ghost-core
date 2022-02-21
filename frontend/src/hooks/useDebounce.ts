import { useState, useEffect } from 'react';

interface P {
  value: string;
  delay: number;
}

const useDebounce = ({ value, delay }: P): String => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
