import React, {createContext, useContext } from 'react';
import { FontSizeContext } from '../../../context/FontSizeContext';



const FontSizeControl = () => {
    const { fontSize, setFontSize } = useContext(FontSizeContext);
  
    const handleChange = (event) => {
      const newSize = parseInt(event.target.value);
      setFontSize(newSize);
    };
  
    return (
      <div className='menu-item'>
      <div className="radio-group">
        <h4>Font Size</h4>
        <label className='radio-label'>
          <input className='font-button'
            id='input1'
            type="radio"
            value="16"
            checked={fontSize === 16}
            onChange={handleChange}
          /><span className="radio-custom"></span>
        </label>
        <label className='radio-label'>
          <input className='font-button'
            id='input2'
            type="radio"
            value="20"
            checked={fontSize === 20}
            onChange={handleChange}
          /><span className="radio-custom"></span>
        </label>
        <label className='radio-label'>
          <input className='font-button'
            id='input3' 
            type="radio"
            value="24"
            checked={fontSize === 24}
            onChange={handleChange}
          /><span className="radio-custom"></span>
        </label>
        <label className='radio-label'>
          <input className='font-button'
            id='input4'
            type="radio"
            value="28"
            checked={fontSize === 28}
            onChange={handleChange}
          /><span className="radio-custom"></span>
        </label>
      </div>
      </div>
    );
  };

  export default FontSizeControl;