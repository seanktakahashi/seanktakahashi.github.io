import { combineReducers } from 'redux';
import { Action, GlobalActions, SpriteActions } from './actions';
import { emptyMapState, MapState, SpriteState, StoreState } from './states';
import { Direction, Door, equalPosition, Position, Sign } from '../types';
import { spaceIsObstructed } from '../mapLogic/utils';
import { TileType } from '../tiles/TileType';

function setState<T, K extends keyof T>(state: T, newState: Pick<T, K>): T {
  return Object.assign({}, state, newState);
}

function stepInDirection(position: Position, direction: Direction): Position {
  const { i, j } = position;
  switch (direction) {
    case Direction.LEFT:
      return { i, j: j - 1 }
    case Direction.DOWN:
      return { i: i + 1, j }
    case Direction.UP:
      return { i: i - 1, j }
    case Direction.RIGHT:
      return { i, j: j + 1 }
  }
}

function moveSpriteState(spriteState: SpriteState, map: TileType[][], direction: Direction): SpriteState {
  let newPosition = stepInDirection(spriteState.position, direction);
  const obstructed = spaceIsObstructed(map, newPosition);
  return {
    position: obstructed ? spriteState.position : newPosition,
    facing: direction
  }
}

function findItem<T extends Door | Sign>(position: Position, items: T[]): T | undefined {
  return items.find(item => equalPosition(position, item.position));
}

function findDialog(spritePosition: Position, facing: Direction, signs: Sign[]): string | undefined {
  const spaceOfInteraction = stepInDirection(spritePosition, facing);
  return findItem(spaceOfInteraction, signs)?.dialog;
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