import { SET_FIELD, SET_STEP } from './types';

const initialState = {
  user: {
    nick: '',
    email: '',
    password: '',
    firstName: '',
    secondName: '',
    dateOfBirth: '',
    gender: '',
    country: '',
    city: '',
    adress: '',
    phone: ''
  },
  activeStep: 0
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        user: {
          ...state.user,
          [action.field]: action.text
        }
      };
    case SET_STEP:
      return {
        ...state,
        activeStep: action.activeStep
      };
    default:
      return state;
  }
};

export default userReducer;
