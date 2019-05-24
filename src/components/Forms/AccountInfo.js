import React from 'react';
import { TextField, Paper, Grid, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  width: 28rem;
  padding: 4rem 0;
`;
const StyledTextField = styled(TextField)`
  width: 200px;
`;
const StyledButton = styled(Button)`
  && {
    margin-top: 2rem;
  }
`;

const AccountInfo = () => {
  return (
    <StyledPaper elevation={4}>
      <form autoComplete='off'>
        <Grid container alignItems='center' direction='column'>
          <Typography variant='h5'>Create new</Typography>
          <Typography color='primary' variant='h3'>
            Account
          </Typography>
          <StyledTextField margin='normal' label='Nick'>
            Hello
          </StyledTextField>
          <StyledTextField margin='normal' type='email' label='Email'>
            Hello
          </StyledTextField>
          <StyledTextField margin='normal' type='password' label='Password'>
            Hello
          </StyledTextField>
          <StyledButton color='primary' variant='contained'>
            Next Step
          </StyledButton>
        </Grid>
      </form>
    </StyledPaper>
  );
};

export default AccountInfo;
