import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
  nick: '',
  email: '',
  password: ''
};

const store = createStore(reducer, initialState);

export default store;
