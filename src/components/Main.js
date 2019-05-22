import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const StyledGrid = styled(Grid)`
  margin-top: 5rem;
`;

const Main = () => {
  return (
    <StyledGrid alignItems='center' container direction='column'>
      hello
    </StyledGrid>
  );
};

export default Main;
