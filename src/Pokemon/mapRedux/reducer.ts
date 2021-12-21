import { combineReducers } from 'redux';
import { Action, SpriteActions } from './actions';
import { emptyMapState, MapState, SpriteState, StoreState } from './states';
import { Direction, PokemonMap } from '../types';
import { spaceIsObstructed } from '../mapLogic/utils';

function setState<T, K extends keyof T>(state: T, newState: Pick<T, K>): T {
  return Object.assign({}, state, newState);
}

function moveSpriteState(spriteState: SpriteState, map: PokemonMap, direction: Direction): SpriteState {
  let facing;
  let newPosition = { ...spriteState.position };
  switch (direction) {
    case Direction.LEFT:
      facing = Direction.LEFT;
      newPosition.j -= 1;
      break;
    case Direction.DOWN:
      facing = Direction.DOWN;
      newPosition.i += 1;
      break;
    case Direction.UP:
      facing = Direction.UP;
      newPosition.i -= 1;
      break;
    case Direction.RIGHT:
      facing = Direction.RIGHT;
      newPosition.j += 1;
      break;
  }
  const obstructed = spaceIsObstructed(map, newPosition);
  return {
    position: obstructed ? spriteState.position : newPosition,
    facing
  }
}

function mapReducer(state: MapState = emptyMapState, action: Action): MapState {
  switch (action.type) {
    case SpriteActions.move.type:
      return setState(
        state,
        // It seems like this should throw a type error, action.payload is understood as any? not Direction 
        { spriteState: moveSpriteState(state.spriteState, state.geography, action.payload) }
      );
    default:
      return state;
  }
}

export const reducer = combineReducers<StoreState>({
  mapState: mapReducer
});