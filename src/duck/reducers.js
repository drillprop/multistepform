import { SET_FIELD, INC_STEP, DEC_STEP } from './types';

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
    case INC_STEP:
      return {
        ...state,
        activeStep: state.activeStep !== 3 ? state.activeStep + 1 : 3
      };
    case DEC_STEP:
      return {
        ...state,
        activeStep: state.activeStep !== 0 ? state.activeStep - 1 : 0
      };
    default:
      return state;
  }
};

export default userReducer;
