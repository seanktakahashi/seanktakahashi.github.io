import { createStore } from 'redux';
import { reducer } from './reducer';

function configureStore() {
  const store = createStore(reducer);
  return store;
}

export const store = configureStore();