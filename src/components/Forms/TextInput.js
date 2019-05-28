import React, { useState } from 'react';
import { StyledTextField } from './styles';
import { connect } from 'react-redux';
import actions from '../../duck/actions';
import { capitalize } from '../../utils/helpers';

const TextInput = ({
  inputValue,
  inputId,
  setField,
  type,
  checkIfValid,
  aditionalProps,
  isValid = false,
  ...props
}) => {
  const [errors, setValidationError] = useState({
    [inputId]: ''
  });
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
      {...props}
      required
      value={inputValue}
      onBlur={checkValidationError}
      helperText={!isValid[inputId] && errors[inputId]}
      error={!!(!isValid[inputId] && errors[inputId])}
      id={inputId}
      onChange={handleChange}
      type={type}
      margin='normal'
      label={inputId && capitalize(inputId)}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  setField: (text, field) => dispatch(actions.setField(text, field))
});

export default connect(
  null,
  mapDispatchToProps
)(TextInput);
