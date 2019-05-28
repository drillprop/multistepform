import React, { useState } from 'react';

const InputsWrapper = ({ children, fields }) => {
  const entries = Object.entries(fields);
  const reducedEntries = entries.reduce((acc, item) => {
    const object = {
      ...acc,
      [item[0]]: !!item[1] || false
    };
    return object;
  }, {});
  const [isValid, checkValidation] = useState(reducedEntries);
  const checkIfValid = (id, valid) => {
    checkValidation({ ...isValid, [id]: valid });
  };
  return children(checkIfValid, isValid);
};

export default InputsWrapper;
