import { SET_FIELD, SET_STEP } from './types';

const setField = (field, text) => ({
  type: SET_FIELD,
  field,
  text
});

const setActiveStep = activeStep => ({
  type: SET_STEP,
  activeStep: 1
});

export default { setField, setActiveStep };
