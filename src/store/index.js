import { createStore } from 'react-redux';
import reducer from '../reducers';

const initialState = {
  key: 'value'
};

const store = createStore(reducer, initialState);

export default store;
