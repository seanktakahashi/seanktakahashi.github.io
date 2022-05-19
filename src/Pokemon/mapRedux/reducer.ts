import { combineReducers, compose } from 'redux';
import { Action, GlobalActions, SpriteActions } from './actions';
import { emptyMapState, MapState, SpriteState, StoreState } from './states';
import { Direction, Door, equalPosition, Position } from '../types';
import { spaceIsObstructed } from '../mapLogic/utils';
import { TileType } from '../tiles/TileType';

function setState<T, K extends keyof T>(state: T, newState: Pick<T, K>): T {
  return Object.assign({}, state, newState);
}

function moveSpriteState(spriteState: SpriteState, map: TileType[][], direction: Direction): SpriteState {
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

function findDoor(position: Position, doors: Door[]): string | undefined {
  return doors.find((door) => equalPosition(position, door.position))?.naviateTo;
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
      const door = findDoor(state.spriteState.position, state.itemsState.doors);
      return setState(
        state,
        {
          globalState: setState(state.globalState, { navigateTo: door })
        }
      );
    case SpriteActions.interact.type:
      return setState(
        state, {
        globalState: setState(state.globalState, { dialog: "hello! adfjkalsfjadklsfjdlkasj fk sdfj aklsdj laksj klas dska kls fjdasljfdlksa jadskl alskalsjfkdlal lajdfklajfldjaklfdj ladjskl fjadslkfj adklsj akldsj aklsj klsadjasj adsklj alskdj alskfj asldfjasklj akljskldjfalsjfaldskjfadklsjfalsdjaklsjaklsa jf ladskfj klsajdfklkl aklfj adsldjasklfjdas adsfjakl sjf kladjsfdasf jdaslk jfadslj fklads dfklsj kaldsj adklsjadklsjadklsjalsjalkdfjalkdfjaas " })
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