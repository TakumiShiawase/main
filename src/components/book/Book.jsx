import React, {createContext, useContext, useState, useEffect, useRef } from 'react';
import { useFont } from '../../context/FontContext';
import {FontSizeContext } from '../../context/FontSizeContext';
import { useLineHeight } from '../../context/LineHeightContext';
import { useSplitContext } from '../../context/SplitContext';

function Book () {
    const { fontFamily } = useFont();
    const { fontSize } = useContext(FontSizeContext);
    const { lineHeight}  = useLineHeight();
    const { isSplit} = useSplitContext();
  
    const textStyle = {
      fontFamily: fontFamily,
    };
  
    return (
      <div className="book">
        <div style={{ lineHeight: lineHeight }}>
        <div className="container" style={{ fontSize: `${fontSize}px` }} >
          <div className='book-title' style={textStyle }> <h1>BIG ASS</h1></div>
          <div className='split' style={{ display: 'flex', flexDirection: isSplit ? 'row' : 'column' }}>
          <p style={textStyle }>The four seasons of the year are beautiful and pleasant. Summer is the most colourful season. There are a lot of flowers at this time. It is the best time to travel, to spend several weeks at the seaside or in a village. Autumn brings all kinds of fruits and vegetables. We may also enjoy some warm and pleasant days in September. Winter covers everything with glittering snow. Making a snowman and playing snowballs are among hobbies of many children and grown-ups. But everything and everyone waits impatiently for spring. Spring is the favourite season for many people.</p>
        <p style={textStyle}>The four seasons of the year are beautiful and pleasant. Summer is the most colourful season. There are a lot of flowers at this time. It is the best time to travel, to spend several weeks at the seaside or in a village. Autumn brings all kinds of fruits and vegetables. We may also enjoy some warm and pleasant days in September. Winter covers everything with glittering snow. Making a snowman and playing snowballs are among hobbies of many children and grown-ups. But everything and everyone waits impatiently for spring. Spring is the favourite season for many people.</p>
        </div>
        </div>
        </div>
      </div>
    )
  };

export default Book;