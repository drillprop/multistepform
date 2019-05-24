import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StyledPaper, StyledH3, StyledTextField, StyledButton } from './styles';

const AccountInfo = props => {
  const { nick, email, password, setField } = props;
  return (
    <StyledPaper elevation={4}>
      <form autoComplete='off'>
        <Grid container alignItems='center' direction='column'>
          <Typography variant='h6'>Create new</Typography>
          <StyledH3 color='primary' variant='h3'>
            Account
          </StyledH3>
          <StyledTextField
            required
            value={nick}
            onChange={e => setField('nick', e.currentTarget.value)}
            autoFocus={true}
            margin='normal'
            label='Nick'
          />
          <StyledTextField
            required
            value={email}
            onChange={e => setField('email', e.currentTarget.value)}
            margin='normal'
            type='email'
            label='Email'
          />
          <StyledTextField
            required
            value={password}
            onChange={e => setField('password', e.currentTarget.value)}
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
