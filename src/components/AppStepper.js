import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Grid, Paper, Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledGrid = styled(Grid)`
  width: 45rem;
`;

const AppStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['one', 'two', 'three'];
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
      <Button onClick={() => setActiveStep(activeStep + 1)}> Next</Button>
    </StyledGrid>
  );
};

export default AppStepper;
