import { combineReducers } from 'redux';
import { Action, GlobalActions, SpriteActions } from './actions';
import { emptyMapState, MapState, StoreState } from './states';
import { Direction } from '../types';
import { findDialog, findItem, moveSpriteState } from './utils/mapUtils';

function setState<T, K extends keyof T>(state: T, newState: Pick<T, K>): T {
  return Object.assign({}, state, newState);
}

function movementReducer(state: MapState, action: Action): MapState {
  switch (action.type) {
    case SpriteActions.move.type:
      // It seems like this should throw a type error, action.payload is understood as any? not Direction
      // according to VSCode 
      const newSpriteState = moveSpriteState(state.spriteState, state.geography, action.payload);
      return setState(
        state,
        {
          spriteState: newSpriteState,
        }
      );
    case GlobalActions.clearNavigateTo.type:
      return setState(
        state,
        {
          spriteState: moveSpriteState(state.spriteState, state.geography, Direction.DOWN),
        }
      );
    default:
      return state;
  }
}

function globalReducer(state: MapState, action: Action): MapState {
  switch (action.type) {
    case SpriteActions.move.type:
      const navigateTo = findItem(state.spriteState.position, state.itemsState.doors)?.naviateTo;
      return setState(
        state,
        {
          globalState: setState(state.globalState, { navigateTo })
        }
      );
    case SpriteActions.interact.type:
      const dialog = findDialog(state.spriteState.position, state.spriteState.facing, state.itemsState.signs);
      return setState(
        state, {
        globalState: setState(state.globalState, { dialog })
      });
    case GlobalActions.clearDialog.type:
      return setState(
        state,
        {
          globalState: setState(state.globalState, { dialog: undefined })
        }
      );
    case GlobalActions.clearNavigateTo.type:
      return setState(
        state,
        {
          globalState: setState(state.globalState, { navigateTo: undefined })
        }
      );
    default:
      return state;
  }
}

function mapReducer(state: MapState = emptyMapState, action: Action): MapState {
  const stateAfterMove = movementReducer(state, action);
  return globalReducer(stateAfterMove, action);
}

export const reducer = combineReducers<StoreState>({
  mapState: mapReducer
});