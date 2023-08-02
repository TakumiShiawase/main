import React from 'react';
import { useColorContext } from '../../../context/ColorContext';

const ColorSlider = () => {
    const { colors, handleColorChange } = useColorContext();
  
    const handleColorChangeForKey = (colorKey, event) => {
      handleColorChange(colorKey, event.target.value);
    };
  
    return (
      <div className='menu-item'>
        <label className='color-label-back' >Background Color:</label>
        <input
          className='color-input'
          type="color"
          value={colors.backgroundColor}
          onChange={(e) => handleColorChangeForKey("backgroundColor", e)}
        />
  
        <label className='color-label-font' >Font Color:</label>
        <input
          className='color-input'
          type="color"
          value={colors.fontColor}
          onChange={(e) => handleColorChangeForKey("fontColor", e)}
        />
      </div>
    );
  };
  

  export default ColorSlider;