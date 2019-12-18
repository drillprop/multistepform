import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StyledPaper, StyledH3, StyledTextField, StyledButton } from './styles';
import Select from 'react-select';
import countries from '../../utils/countries';

const Adress = props => {
  const { country, city, adress, phone } = props.user;
  const { setField, setActiveStep, activeStep } = props;
  const labeledCountries = countries.map(country => ({ label: country }));
  return (
    <StyledPaper elevation={4}>
      <form autoComplete='off' onSubmit={e => e.preventDefault()}>
        <Grid container alignItems='center' direction='column'>
          <Typography variant='h6'>Your</Typography>
          <StyledH3
            color='primary'
            variant='h3'
            style={{ marginBottom: '2.5rem' }}
          >
            Adress
          </StyledH3>
          <Select
            isClearable
            styles={{
              control: (provided, state) => ({
                ...provided,
                width: 210
              })
            }}
            placeholder='Country'
            theme={theme => ({
              ...theme,
              borderRadius: 4,
              colors: {
                ...theme.colors,
                primary: '#795548'
              }
            })}
            options={labeledCountries}
            value={country ? { label: country } : null}
            onChange={e => {
              return setField('country', e ? e.label : '');
            }}
          />
          <StyledTextField
            value={adress}
            onChange={e => setField('adress', e.currentTarget.value)}
            margin='normal'
            label='Adress'
          />
          <StyledTextField
            value={city}
            onChange={e => setField('city', e.currentTarget.value)}
            margin='normal'
            label='City'
          />
          <StyledTextField
            value={phone}
            onChange={e => setField('phone', e.currentTarget.value)}
            margin='normal'
            type='phone'
            label='Phone'
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
              disabled={!(country && city && adress && phone)}
            >
              Next Step
            </StyledButton>
          </Grid>
        </Grid>
      </form>
    </StyledPaper>
  );
};

export default Adress;
