import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';

const Navigation = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6' color='inherit'>
          Register
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
