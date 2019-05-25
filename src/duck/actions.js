import { SET_FIELD, SET_STEP } from './types';

const setField = (field, text) => ({
  type: SET_FIELD,
  field,
  text
});

const setActiveStep = (activeStep, number) => ({
  type: SET_STEP,
  activeStep: activeStep + number
});

export default { setField, setActiveStep };
