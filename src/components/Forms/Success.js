import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Typography, Grid } from '@material-ui/core';
import { StyledPaper, StyledButton } from './styles';

const Success = props => {
  const { setActiveStep, activeStep } = props;
  return (
    <>
      <StyledPaper elevation={4}>
        <Grid container alignItems='center' direction='column'>
          <Typography color='primary' variant='h3'>
            Success
          </Typography>
          <CheckCircleIcon
            color='primary'
            style={{
              marginTop: 40,
              fontSize: 90
            }}
          />
          <StyledButton
            onClick={() => setActiveStep(activeStep, -4)}
            color='primary'
            variant='contained'
          >
            Start again
          </StyledButton>
        </Grid>
      </StyledPaper>
    </>
  );
};

export default Success;
