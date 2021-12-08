import { useState } from 'react';

export const useSumaTotal = (initialValue = 0) => {
  const [total, setTotal] = useState(initialValue);
  const [toggleMenu, setToggleMenu] = useState(false);

  return { total, setTotal, toggleMenu, setToggleMenu };
};
