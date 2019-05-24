import { SET_FIELD } from './types';

const initialState = {
  nick: '',
  email: '',
  password: '',
  firstName: '',
  secondName: '',
  dateOfBirth: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.field]: action.text
      };
    default:
      return state;
  }
};

export default userReducer;
