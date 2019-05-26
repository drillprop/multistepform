import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StyledPaper, StyledH3, StyledTextField, StyledButton } from './styles';
import ValidationError from './ValidationError';

const AccountInfo = props => {
  const { nick, email, password } = props.user;
  const { setField, setActiveStep, activeStep } = props;
  const [valid, setValidation] = useState({
    nick: false,
    email: false,
    password: false
  });
  const handleChange = e => {
    const { id, value } = e.currentTarget;
    setField(id, value);
  };

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
            id='nick'
            onChange={handleChange}
            autoFocus={true}
            margin='normal'
            label='Nick'
          />
          <StyledTextField
            required
            value={email}
            id='email'
            onChange={handleChange}
            // error={!!validationMessage}
            // onFocus={() => setValidationMessage('')}
            // onBlur={e =>
            //   e.currentTarget.value &&
            //   setValidationMessage(e.target.validationMessage)
            // }
            margin='normal'
            type='email'
            label='Email'
          />
          <ValidationError validationMessage={null} />
          <StyledTextField
            required
            id='password'
            value={password}
            onChange={handleChange}
            margin='normal'
            type='password'
            label='Password'
          />
          <StyledButton
            onClick={() => setActiveStep(activeStep, 1)}
            color='primary'
            variant='contained'
            disabled={!(nick && email && password)}
          >
            Next Step
          </StyledButton>
        </Grid>
      </form>
    </StyledPaper>
  );
};

export default AccountInfo;
