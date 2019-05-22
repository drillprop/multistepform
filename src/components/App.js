import React from 'react';
import { GlobalStyle } from '../utils/GlobalStyle';
import Navigation from './Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <GlobalStyle />
      <div>Hello World</div>
    </>
  );
};

export default App;
