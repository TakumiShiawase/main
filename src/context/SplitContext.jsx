import React, {createContext, useContext, useState} from 'react';

const SplitContext = createContext();

export const useSplitContext = () => useContext(SplitContext);

export const SplitProvider = ({ children }) => {
  const [isSplit, setIsSplit] = useState(false);

  const toggleSplit = () => {
    setIsSplit(prevState => !prevState);
  };

  return (
    <SplitContext.Provider value={{ isSplit, toggleSplit }}>
      {children}
    </SplitContext.Provider>
  );
};