import { SET_FIELD } from './types';

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
  }
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
    default:
      return state;
  }
};

export default userReducer;
