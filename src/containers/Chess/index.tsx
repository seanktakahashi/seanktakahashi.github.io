import React, { useCallback } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, selectCount, store } from './store';

function ChessInternal() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const onIncrement = useCallback(() => {
    dispatch(incrementAction);
  }, [count]);
  const onDecrement = useCallback(() => {
    dispatch(decrementAction);
  }, [count]);
  return (
    <div id="chess">
      <h1>Chess</h1>
      <h2>{count}</h2>
      <button onClick={onIncrement} >+</button>
      <button onClick={onDecrement} >- </button>
    </div>
  );
}

export default function Chess() {
  return (
    <Provider store={store}>
      <ChessInternal />
    </Provider >
  );
}