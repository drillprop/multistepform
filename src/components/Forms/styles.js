import styled from 'styled-components';
import { Paper, TextField, Button, Typography } from '@material-ui/core';

const StyledPaper = styled(Paper)`
  width: 28rem;
  padding: 3rem 0;
`;
const StyledTextField = styled(TextField)`
  width: 200px;
`;
const StyledButton = styled(Button)`
  && {
    margin-top: 2.5rem;
  }
`;
const StyledH3 = styled(Typography)`
  && {
    margin-bottom: 1rem;
  }
`;

export { StyledButton, StyledH3, StyledPaper, StyledTextField };
