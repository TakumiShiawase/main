import React, {createContext, useContext, useState} from 'react';

const LineHeightContext = createContext();

export const useLineHeight = () => {
  return useContext(LineHeightContext);
};

export const LineHeightProvider = ({ children }) => {
  const [lineHeight, setLineHeight] = useState('1.5'); 
    
  const handleLineHeightChange = (height) => {
    setLineHeight(height);
  };

  return (
    <LineHeightContext.Provider value={{ lineHeight, handleLineHeightChange }}>
      {children}
    </LineHeightContext.Provider>
  );
};

