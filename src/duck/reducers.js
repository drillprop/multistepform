import { NICK, EMAIL, PASSWORD, SET_FIELD } from './types';

const initialState = {
  nick: '',
  email: '',
  password: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case NICK:
      return {
        ...state,
        nick: action.text
      };
    case SET_FIELD:
      return {
        ...state,
        [action.field]: action.text
      };
    case EMAIL:
      return {
        ...state,
        email: action.text
      };
    case PASSWORD:
      return {
        ...state,
        password: action.text
      };
    default:
      return state;
  }
};

export default userReducer;
