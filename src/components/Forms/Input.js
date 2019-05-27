import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { StyledPaper, StyledH3, StyledTextField, StyledButton } from './styles';
import { everyoneTrue, atLeastOneTrue } from '../../utils/helpers';

const Input = ({ inputValue, inputId, setField, type }) => {
  const [isValid, checkValidation] = useState({
    [inputId]: false
  });
  const [errors, setValidationError] = useState({
    [inputId]: ''
  });
  const checkIfValid = (id, valid) => {
    checkValidation({ ...isValid, [id]: valid });
  };
  const handleChange = e => {
    const { id, value } = e.currentTarget;
    const { valid } = e.target.validity;
    setField(id, value);
    checkIfValid(id, valid);
  };

  const checkValidationError = e => {
    const { id, value } = e.currentTarget;
    const { validationMessage } = e.target;
    if (value) setValidationError({ ...errors, [id]: validationMessage });
  };
  return (
    <StyledTextField
      required
      value={inputValue}
      onBlur={checkValidationError}
      helperText={!isValid[inputId] && errors[inputId]}
      error={!!(!isValid[inputId] && errors[inputId])}
      id={inputId}
      onChange={handleChange}
      type={type}
      margin='normal'
      label={inputId}
    />
  );
};

export default Input;
