import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StyledPaper, StyledH3, StyledTextField, StyledButton } from './styles';
import { everyoneTrue, atLeastOneTrue } from '../../utils/helpers';

const AccountInfo = props => {
  const { nick, email, password } = props.user;
  const { setField, setActiveStep, activeStep } = props;
  const [isValid, checkValidation] = useState({
    nick: !!nick || false,
    email: !!email || false,
    password: !!password || true
  });
  const [errors, setValidationError] = useState({
    nick: '',
    email: '',
    password: ''
  });
  const checkIfValid = (id, valid) => {
    checkValidation({ ...isValid, [id]: valid });
  };
  const handleChange = e => {
    const { id, value } = e.currentTarget;
    const { valid } = e.target.validity;
    setField(id, value);
    checkIfValid(id, valid);
  };

  const checkValidationError = e => {
    const { id, value } = e.currentTarget;
    const { validationMessage } = e.target;
    if (value) setValidationError({ ...errors, [id]: validationMessage });
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
            onBlur={checkValidationError}
            helperText={!isValid.nick && errors.nick}
            error={!!(!isValid.nick && errors.nick)}
            id='nick'
            onChange={handleChange}
            autoFocus={true}
            margin='normal'
            label='Nick'
          />
          <StyledTextField
            required
            value={email}
            onBlur={checkValidationError}
            helperText={!isValid.email && errors.email}
            error={!!(!isValid.email && errors.email)}
            id='email'
            onChange={handleChange}
            margin='normal'
            type='email'
            label='Email'
          />
          <StyledTextField
            required
            id='password'
            value={password}
            onBlur={checkValidationError}
            helperText={!isValid.password && errors.password}
            error={!!(!isValid.nick && errors.nick)}
            onChange={handleChange}
            margin='normal'
            type='password'
            label='Password'
          />
          <StyledButton
            onClick={() => setActiveStep(activeStep, 1)}
            color='primary'
            variant='contained'
            disabled={!everyoneTrue(isValid)}
          >
            Next Step
          </StyledButton>
        </Grid>
      </form>
    </StyledPaper>
  );
};

export default AccountInfo;
