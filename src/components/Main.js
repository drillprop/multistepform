import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import AppStepper from './AppStepper';
import FormContainer from './Forms/FormContainer';

const StyledGrid = styled(Grid)`
  margin-top: 5rem;
`;

const Main = () => {
  return (
    <StyledGrid container direction='column' alignItems='center'>
      <AppStepper />
      <FormContainer />
    </StyledGrid>
  );
};

export default Main;
