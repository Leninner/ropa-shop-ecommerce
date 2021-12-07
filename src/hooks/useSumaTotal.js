import { useState } from 'react';

export const useSumaTotal = (initialValue = 0) => {
  const [total, setTotal] = useState(initialValue);

  return { total, setTotal };
};
