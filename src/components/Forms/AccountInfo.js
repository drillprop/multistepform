import React, { useState } from 'react';
import { TextField, Paper, Grid, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  width: 28rem;
  padding: 3rem 0;
`;
const StyledTextField = styled(TextField)`
  width: 200px;
`;
const StyledButton = styled(Button)`
  && {
    margin-top: 2.5rem;
  }
`;
const StyledH3 = styled(Typography)`
  && {
    margin-bottom: 1rem;
  }
`;

const AccountInfo = () => {
  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <StyledPaper elevation={4}>
      <form autoComplete='off'>
        <Grid container alignItems='center' direction='column'>
          <Typography variant='h6'>Create new</Typography>
          <StyledH3 color='primary' variant='h3'>
            Account
          </StyledH3>
          <StyledTextField
            value={nick}
            onChange={e => setNick(e.currentTarget.value)}
            autoFocus={true}
            margin='normal'
            label='Nick'
          />
          <StyledTextField
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            margin='normal'
            type='email'
            label='Email'
          />
          <StyledTextField
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
            margin='normal'
            type='password'
            label='Password'
          />
          <StyledButton color='primary' variant='contained'>
            Next Step
          </StyledButton>
        </Grid>
      </form>
    </StyledPaper>
  );
};

export default AccountInfo;
