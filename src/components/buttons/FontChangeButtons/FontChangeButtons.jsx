import React from 'react';
import {useFont} from '../../../context/FontContext';

const FontChangerButtons = () => {
    const { setFontFamily } = useFont();
  
    const changeFontFamily = (font) => {
      setFontFamily(font);
    };
  
    return (
      <div>
        <a className='menu-item' onClick={() => changeFontFamily('Arial')}>Arial</a>
        <a className='menu-item' onClick={() => changeFontFamily('Times New Roman')}>
          Times New Roman
        </a>
        <a className='menu-item' onClick={() => changeFontFamily('Courier New')}>
          Courier New
        </a>
      </div>
    );
  };

  export default FontChangerButtons;