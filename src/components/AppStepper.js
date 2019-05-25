import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Grid, Paper } from '@material-ui/core';
import styled from 'styled-components';

const StyledGrid = styled(Grid)`
  width: 28rem;
  && {
    margin-bottom: 2.5rem;
  }
`;

const AppStepper = ({ activeStep }) => {
  const steps = ['Account', 'Personal', 'Adress'];
  console.log(activeStep);
  return (
    <StyledGrid item xs={8} xl={12}>
      <Paper elevation={1}>
        <Stepper orientation='horizontal' activeStep={activeStep}>
          {steps.map(step => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>
    </StyledGrid>
  );
};

export default AppStepper;
