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

const PersonalDetails = props => {
  const { firstName, secondName, dateOfBirth, setField } = props;
  return (
    <StyledPaper elevation={4}>
      <form autoComplete='off'>
        <Grid container alignItems='center' direction='column'>
          <Typography variant='h6'>Personal</Typography>
          <StyledH3 color='primary' variant='h3'>
            Details
          </StyledH3>

          <StyledTextField
            required
            value={firstName}
            onChange={e => setField('firstName', e.currentTarget.value)}
            autoFocus={true}
            margin='normal'
            type='text'
            label='First Name'
          />
          <StyledTextField
            value={secondName}
            onChange={e => setField('secondName', e.currentTarget.value)}
            margin='normal'
            type='text'
            label='Second Name'
          />

          <StyledRadioGroup>
            <InputLabel display='block'>Gender</InputLabel>
            <FormGroup row>
              <FormControlLabel
                label='Male'
                control={<Radio color='primary' />}
              />
              <FormControlLabel label='Female' control={<Radio />} />
            </FormGroup>
          </StyledRadioGroup>
          <StyledTextField
            InputLabelProps={{ shrink: true }}
            value={dateOfBirth}
            onChange={e => setField('dateOfBirth', e.currentTarget.value)}
            margin='normal'
            type='date'
            label='Date of Birth'
          />
          <StyledButton color='primary' variant='contained'>
            Next Step
          </StyledButton>
        </Grid>
      </form>
    </StyledPaper>
  );
};

export default PersonalDetails;
