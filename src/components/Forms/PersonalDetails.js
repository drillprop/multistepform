import {
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  Radio,
  Typography
} from '@material-ui/core';
import React from 'react';
import { everyoneTrue } from '../../utils/helpers';
import InputsWrapper from './InputsWrapper';
import {
  StyledButton,
  StyledH3,
  StyledPaper,
  StyledRadioGroup
} from './styles';
import TextInput from './TextInput';

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
