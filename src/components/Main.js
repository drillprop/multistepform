import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import FormContainer from './Forms/FormContainer';
import AppStepperContainer from './AppStepperContainer';

const StyledGrid = styled(Grid)`
  margin-top: 5rem;
`;

const Main = () => {
  return (
    <StyledGrid container direction='column' alignItems='center'>
      <AppStepperContainer />
      <FormContainer />
    </StyledGrid>
  );
};

export default Main;
