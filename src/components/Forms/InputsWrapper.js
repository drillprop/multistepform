import React, { useState } from 'react';

const InputsWrapper = ({ children, obj }) => {
  const reduceThis = Object.entries(obj);
  const smth = reduceThis.reduce((acc, item) => {
    const object = {
      ...acc,
      [item[0]]: !!item[1] || false
    };
    return object;
  }, {});
  const [isValid, checkValidation] = useState(smth);
  const checkIfValid = (id, valid) => {
    console.log(id, valid);
    checkValidation({ ...isValid, [id]: valid });
  };
  return children(checkIfValid, isValid);
};

export default InputsWrapper;
