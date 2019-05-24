import { SET_FIELD } from './types';

const setField = (field, text) => ({
  type: SET_FIELD,
  field,
  text
});

export default { setField };
