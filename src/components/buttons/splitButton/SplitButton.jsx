import React from 'react';
import { useSplitContext } from '../../../context/SplitContext';


const SplitButton = (props) => {
    const { isSplit, toggleSplit } = useSplitContext();
  
    return (
      <a className='nav-item' onClick={toggleSplit}>
        <span className="icon-button">{props.icon}</span>
        {isSplit}
      </a>
    );
  };

export default SplitButton;