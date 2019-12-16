import { Button, Paper, TextField, Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  padding: 3rem 7rem;
  @media (max-width: 450px) {
    padding: 3rem 4rem;
  }
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
const StyledErrorText = styled(Typography)`
  && {
    width: 200px;
  }
`;
const StyledRadioGroup = styled.div`
  width: 200px;
  margin-top: 2rem;
`;

export {
  StyledButton,
  StyledH3,
  StyledPaper,
  StyledTextField,
  StyledRadioGroup,
  StyledErrorText
};
