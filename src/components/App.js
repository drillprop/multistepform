import React from 'react';
import { GlobalStyle } from '../utils/GlobalStyle';
import Navigation from './Navigation';
import Main from './Main';

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
