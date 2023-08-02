import React from 'react';
import ReaderPage from './page/ReaderPage'
import { ColorProvider } from './context/ColorContext';
import { SplitProvider } from './context/SplitContext';
import { LineHeightProvider } from './context/LineHeightContext';
import { FontSizeProvider } from './context/FontSizeContext';
import { FontProvider } from './context/FontContext';
import { ModalProvider } from './context/BookModalContext';

function App() {


  return (
        <ModalProvider>
        <ColorProvider>
        <SplitProvider>
        <LineHeightProvider>
        <FontSizeProvider>
        <FontProvider>
          <ReaderPage />
        </FontProvider>
        </FontSizeProvider>
        </LineHeightProvider>
        </SplitProvider>
        </ColorProvider>
        </ModalProvider>
  );
}



export default App;
