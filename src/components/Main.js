import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import AppStepper from './AppStepper';

const StyledGrid = styled(Grid)`
  margin-top: 5rem;
`;

const Main = () => {
  return (
    <StyledGrid container direction='column' alignContent='center'>
      <AppStepper />
    </StyledGrid>
  );
};

export default Main;
