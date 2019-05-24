import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import AppStepper from './AppStepper';
import AccountInfo from './Forms/AccountInfo';

const StyledGrid = styled(Grid)`
  margin-top: 5rem;
`;

const Main = () => {
  return (
    <StyledGrid container direction='column' alignItems='center'>
      <AppStepper />
      <AccountInfo />
    </StyledGrid>
  );
};

export default Main;
