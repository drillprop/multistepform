import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import AppStepperContainer from '../containers/AppStepperContainer';
import FormContainer from '../containers/FormContainer';

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
