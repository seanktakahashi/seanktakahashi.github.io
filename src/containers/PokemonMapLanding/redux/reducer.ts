import { combineReducers } from 'redux';
import { Action, SpriteActions } from './actions';
import { initialSpriteState, SpriteState, StoreState } from './states';
import { Direction } from '../types';

function spriteReducer(state: SpriteState = initialSpriteState, action: Action) {
  console.log(state, action);
  switch (action.type) {
    case SpriteActions.moveLeft.type:
      return {
        position: { i: state.position.i, j: state.position.j - 1 },
        facing: Direction.LEFT
      };
    case SpriteActions.moveDown.type:
      return {
        position: { i: state.position.i + 1, j: state.position.j },
        facing: Direction.DOWN
      };
    case SpriteActions.moveUp.type:
      return {
        position: { i: state.position.i - 1, j: state.position.j },
        facing: Direction.UP
      };
    case SpriteActions.moveRight.type:
      return {
        position: { i: state.position.i, j: state.position.j + 1 },
        facing: Direction.RIGHT
      };
    default:
      return state;
  }
}

export const reducer = combineReducers<StoreState>({
  spriteState: spriteReducer
});