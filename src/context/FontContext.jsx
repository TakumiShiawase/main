import React, {createContext, useContext, useState, useEffect} from 'react';

const FontContext = createContext();

const FontProvider = ({ children }) => {
  const [fontFamily, setFontFamily] = useState(() => {

    const savedFontFamily = localStorage.getItem('fontFamily');
    return savedFontFamily || 'Arial';
  });
  useEffect(() => {
    localStorage.setItem('fontFamily', fontFamily);
  }, [fontFamily]);

  return (
    <FontContext.Provider value={{ fontFamily, setFontFamily }}>
      {children}
    </FontContext.Provider>
  );
};

const useFont = () => {
  return useContext(FontContext);
};

export{FontProvider, useFont}