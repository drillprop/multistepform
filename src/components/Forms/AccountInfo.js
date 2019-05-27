import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StyledPaper, StyledH3, StyledTextField, StyledButton } from './styles';
import { everyoneTrue, atLeastOneTrue } from '../../utils/helpers';

const AccountInfo = props => {
  const { nick, email, password } = props.user;
  const { setField, setActiveStep, activeStep } = props;
  const [isValid, checkValidation] = useState({
    nick: false,
    email: false,
    password: false
  });
  const [errors, setValidationError] = useState({
    nick: '',
    email: '',
    password: ''
  });
  const handleChange = e => {
    const { id, value } = e.currentTarget;
    const { valid } = e.target.validity;
    const { validationMessage } = e.target;
    setField(id, value);
    checkIfValid(id, valid);
  };

  const checkIfValid = (id, valid) => {
    checkValidation({ ...isValid, [id]: valid });
  };

  const showValidationError = e => {
    const { id, value } = e.currentTarget;
    const { validationMessage } = e.target;
    if (value) setValidationError({ ...errors, [id]: validationMessage });
    console.log(errors);
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
            onBlur={showValidationError}
            helperText={!isValid.nick && errors.nick}
            id='nick'
            onChange={handleChange}
            autoFocus={true}
            margin='normal'
            label='Nick'
          />
          <StyledTextField
            required
            value={email}
            onBlur={showValidationError}
            helperText={!isValid.email && errors.email}
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
            onBlur={showValidationError}
            helperText={!isValid.password && errors.password}
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
