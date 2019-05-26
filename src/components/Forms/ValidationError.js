import React from 'react';
import { StyledErrorText } from './styles';

const ValidationError = ({ validationMessage }) => {
  return validationMessage ? (
    <StyledErrorText color='error' variant='caption' display='block'>
      {validationMessage}
    </StyledErrorText>
  ) : null;
};

export default ValidationError;
