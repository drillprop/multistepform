import { NICK, EMAIL, PASSWORD } from './types';

const setNick = text => ({
  type: NICK,
  text
});

const setEmail = text => ({
  type: EMAIL,
  text
});

const setPassword = text => ({
  type: PASSWORD,
  text
});

export default { setEmail, setNick, setPassword };
