import { NICK, EMAIL, PASSWORD } from './types';

const userReducer = (state, action) => {
  switch (action.type) {
    case NICK:
      return {
        ...state,
        nick: action.text
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
