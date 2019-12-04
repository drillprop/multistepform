import { Paper } from '@material-ui/core';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  && {
    margin-bottom: 2.5rem;
  }
`;

const AppStepper = ({ activeStep }) => {
  const steps = ['Account', 'Personal', 'Adress'];
  return (
    <Container>
      <Paper elevation={1}>
        <Stepper orientation='horizontal' activeStep={activeStep}>
          {steps.map(step => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>
    </Container>
  );
};

export default AppStepper;
