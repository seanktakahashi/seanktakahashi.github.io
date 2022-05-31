import { combineReducers } from 'redux';
import { getMap } from '../getMap';
import { isMapId } from '../Map';
import { Action, GlobalActions, SpriteActions } from './actions';
import { emptyMapState, MapState, StoreState } from './states';
import { fillOutMapState, findDialog, findItem, moveSpriteState } from './utils/mapUtils';
import { setState } from './utils/utils';

function movementReducer(state: MapState, action: Action): MapState {
  switch (action.type) {
    case SpriteActions.move.type:
      // It seems like this should throw a type error, action.payload is understood as any? not Direction
      // according to VSCode 
      const newSpriteState = moveSpriteState(state, state.geography, action.payload);
      return setState(
        state,
        {
          spriteState: newSpriteState,
        }
      );
    default:
      return state;
  }
}

function globalReducer(state: MapState, action: Action): MapState {
  switch (action.type) {
    case SpriteActions.move.type:
      const door = findItem(state.spriteState.position, state.itemsState.doors);
      return setState(
        state,
        {
          globalState: setState(state.globalState, { navigateTo: door?.destination })
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
      const navigateTo = state.globalState.navigateTo;
      if (navigateTo === undefined) {
        return state;
      } else if (isMapId(navigateTo)) {
        return fillOutMapState(emptyMapState, getMap(navigateTo));
      } else {
        return setState(
          state,
          {
            globalState: setState(state.globalState, { navigateTo: undefined })
          }
        );
      }
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