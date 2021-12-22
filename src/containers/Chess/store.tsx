import { combineReducers, createStore } from 'redux';

interface StoreState {
  count: number;
}

const initialStoreState: StoreState = {
  count: 0
}


// selectors.js

export const selectCount = (state: StoreState) => {
  console.log(store);
  return state.count;
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
function countingReducer(state: StoreState = initialStoreState, action: Action) {
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

// store.js
function configureStore() {
  const store = createStore(countingReducer);
  return store;
}

export const store = configureStore();