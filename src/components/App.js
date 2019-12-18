import React from 'react';
import { GlobalStyle } from '../utils/GlobalStyle';
import brown from '@material-ui/core/colors/brown';
import Main from './Main';
import Navigation from './Navigation';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: brown
  }
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Main />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
