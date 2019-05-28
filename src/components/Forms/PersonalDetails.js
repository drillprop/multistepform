import React from 'react';
import {
  Grid,
  Typography,
  InputLabel,
  Radio,
  FormControlLabel,
  FormGroup
} from '@material-ui/core';
import {
  StyledPaper,
  StyledH3,
  StyledTextField,
  StyledButton,
  StyledRadioGroup
} from './styles';
import InputsWrapper from './InputsWrapper';
import TextInput from './TextInput';
import { everyoneTrue } from '../../utils/helpers';

const PersonalDetails = props => {
  const { firstName, secondName, dateOfBirth, gender } = props.user;
  const { setField, setActiveStep, activeStep } = props;
  return (
    <StyledPaper elevation={4}>
      <form autoComplete='off'>
        <Grid container alignItems='center' direction='column'>
          <Typography variant='h6'>Personal</Typography>
          <StyledH3 color='primary' variant='h3'>
            Details
          </StyledH3>
          <InputsWrapper fields={{ firstName, secondName }}>
            {(checkIfValid, isValid) => (
              <>
                <TextInput
                  inputValue={firstName}
                  checkIfValid={checkIfValid}
                  isValid={isValid}
                  inputId='firstName'
                />
                <TextInput
                  inputValue={secondName}
                  checkIfValid={checkIfValid}
                  isValid={isValid}
                  inputId='secondName'
                />
                <StyledRadioGroup>
                  <InputLabel display='block'>Gender</InputLabel>
                  <FormGroup row>
                    <FormControlLabel
                      checked={gender === 'male'}
                      onChange={() => setField('gender', 'male')}
                      label='Male'
                      control={<Radio color='primary' />}
                    />
                    <FormControlLabel
                      checked={gender === 'female'}
                      onChange={() => setField('gender', 'female')}
                      label='Female'
                      control={<Radio />}
                    />
                  </FormGroup>
                </StyledRadioGroup>
                <TextInput
                  inputValue={dateOfBirth}
                  checkIfValid={checkIfValid}
                  isValid={isValid}
                  inputId='dateOfBirth'
                  InputLabelProps={{ shrink: true }}
                  type='date'
                />
                <Grid container justify='space-around'>
                  <StyledButton
                    onClick={() => setActiveStep(activeStep, -1)}
                    variant='contained'
                  >
                    Back
                  </StyledButton>
                  <StyledButton
                    onClick={() => setActiveStep(activeStep, 1)}
                    color='primary'
                    variant='contained'
                    disabled={!everyoneTrue(isValid) || !gender}
                  >
                    Next Step
                  </StyledButton>
                </Grid>
              </>
            )}
          </InputsWrapper>
        </Grid>
      </form>
    </StyledPaper>
  );
};

export default PersonalDetails;
