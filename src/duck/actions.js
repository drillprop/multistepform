import { NICK, EMAIL, PASSWORD } from './types';

const setNick = text => {
  return {
    type: NICK,
    text
  };
};

const setEmail = text => {
  return {
    type: EMAIL,
    text
  };
};

const setPassword = text => {
  return {
    type: PASSWORD,
    text
  };
};

export default { setEmail, setNick, setPassword };
