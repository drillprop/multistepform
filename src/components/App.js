import React from 'react';
import { GlobalStyle } from '../utils/GlobalStyle';
import Main from './Main';
import Navigation from './Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Main />
      <GlobalStyle />
    </>
  );
};

export default App;
