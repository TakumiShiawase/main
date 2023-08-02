import React from 'react';
import { useLineHeight } from '../../../context/LineHeightContext';


const LineHeight = () => {
    const { lineHeight, handleLineHeightChange } = useLineHeight();
  
    return (
      <div className='menu-item'>
      <div className="radio-group">
        <h4>Font Heit</h4>
        <div>
          <label className='radio-label'>
            <input
              type="radio"
              value="16px"
              checked={lineHeight === '1.5'}
              onChange={() => handleLineHeightChange('1.5')}
            />
            <span className="radio-custom"></span>
          </label  >
          <label className='radio-label'>
            <input
              type="radio"
              value="20px"
              checked={lineHeight === '2'}
              onChange={() => handleLineHeightChange('2')}
            /><span className="radio-custom"></span>
          </label>
          <label className='radio-label'>
            <input
              type="radio"
              value="28px"
              checked={lineHeight === '2.5'}
              onChange={() => handleLineHeightChange('2.5')}
            /><span className="radio-custom"></span>
          </label>
          <label className='radio-label'>
            <input
              type="radio"
              value="32px"
              checked={lineHeight === '3'}
              onChange={() => handleLineHeightChange('3')}
            /><span className="radio-custom"></span>
          </label>
        </div>
      </div>
      </div>
    );
  };

  export default LineHeight;