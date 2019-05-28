import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import AppStepperContainer from './AppStepperContainer';
import FormContainer from './Forms/FormContainer';

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
