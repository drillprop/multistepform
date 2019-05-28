import { Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { everyoneTrue } from '../../utils/helpers';
import { StyledButton, StyledH3, StyledPaper } from './styles';
import TextInput from './TextInput';

const AccountInfo = props => {
  const { nick, email, password } = props.user;
  const { setActiveStep, activeStep } = props;
  const [isValid, checkValidation] = useState({
    nick: !!nick || false,
    email: !!email || false,
    password: !!password || false
  });
  const checkIfValid = (id, valid) => {
    checkValidation({ ...isValid, [id]: valid });
  };
  return (
    <StyledPaper elevation={4}>
      <form autoComplete='off'>
        <Grid container alignItems='center' direction='column'>
          <Typography variant='h6'>Create new</Typography>
          <StyledH3 color='primary' variant='h3'>
            Account
          </StyledH3>
          <TextInput
            checkIfValid={checkIfValid}
            isValid={isValid}
            inputValue={nick}
            inputId='nick'
            type='text'
          />
          <TextInput
            checkIfValid={checkIfValid}
            isValid={isValid}
            inputValue={email}
            inputId='email'
            type='email'
          />
          <TextInput
            checkIfValid={checkIfValid}
            isValid={isValid}
            inputValue={password}
            inputId='password'
            type='password'
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
