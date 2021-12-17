import { combineReducers } from 'redux';
import { Action, SpriteActions } from './actions';
import { initialMapState, MapState, SpriteState, StoreState } from './states';
import { Direction, PokemonMap, Position } from '../types';
import { isWaterTile } from '../constants';

function setState<T, K extends keyof T>(state: T, newState: Pick<T, K>): T {
  return Object.assign({}, state, newState);
}

function spaceIsObstructed(map: PokemonMap, position: Position): boolean {
  const M = map.length;
  const N = map[0].length;
  if (position.i < 0 || position.i >= M || position.j < 0 || position.j >= N) {
    return true;
  }
  return isWaterTile(map[position.i][position.j].type);
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

function mapReducer(state: MapState = initialMapState, action: Action): MapState {
  switch (action.type) {
    case SpriteActions.moveLeft.type:
      return setState(
        state,
        { spriteState: moveSpriteState(state.spriteState, state.geography, Direction.LEFT) }
      );
    case SpriteActions.moveDown.type:
      return setState(
        state,
        { spriteState: moveSpriteState(state.spriteState, state.geography, Direction.DOWN) }
      );
    case SpriteActions.moveUp.type:
      return setState(
        state,
        { spriteState: moveSpriteState(state.spriteState, state.geography, Direction.UP) }
      );
    case SpriteActions.moveRight.type:
      return setState(
        state,
        { spriteState: moveSpriteState(state.spriteState, state.geography, Direction.RIGHT) }
      );
    default:
      return state;
  }
}

export const reducer = combineReducers<StoreState>({
  mapState: mapReducer
});