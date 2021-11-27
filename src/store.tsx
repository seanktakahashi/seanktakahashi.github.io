import { combineReducers, createStore } from 'redux';

interface StoreState {
  count: number;
}

const initialStoreState: StoreState = {
  count: 0
}

// actions.js
interface Action {
  type: string
};

export const incrementAction: Action = {
  type: 'INCREMENT',
};

export const decrementAction: Action = {
  type: 'DECREMENT',
};

// reducers.js
function reducer(state: StoreState = initialStoreState, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  reducer,
});

// store.js
function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();