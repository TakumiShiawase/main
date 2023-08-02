import React, {createContext, useState, useEffect } from 'react';

export const FontSizeContext = createContext();

export function FontSizeProvider({ children }) {
  const initialFontSize = localStorage.getItem('fontSize')
    ? parseInt(localStorage.getItem('fontSize'))
    : 16;

  const [fontSize, setFontSize] = useState(initialFontSize);

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize.toString());
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}