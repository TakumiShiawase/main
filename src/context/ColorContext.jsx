import React, {createContext, useContext, useState} from 'react';


const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState({
    backgroundColor: "#FFFFFF",
    fontColor: "#000000",
  });

  const handleColorChange = (colorKey, colorValue) => {
    setColors((prevColors) => ({ ...prevColors, [colorKey]: colorValue }));
  };

  return (
    <ColorContext.Provider value={{ colors, handleColorChange }}>
      {children}
    </ColorContext.Provider>
  );
};

const useColorContext = () => useContext(ColorContext);

export {ColorProvider, useColorContext};