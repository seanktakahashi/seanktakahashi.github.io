import { isTileWalkable, Tile } from '../../tiles/Tile';
import { Direction, Door, equalPosition, Position, Sign } from '../../types';
import { SpriteState } from '../states';

export function findItem<T extends Door | Sign>(position: Position, items: T[]): T | undefined {
  return items.find(item => equalPosition(position, item.position));
}

export function findDialog(spritePosition: Position, facing: Direction, signs: Sign[]): string | undefined {
  const spaceOfInteraction = stepInDirection(spritePosition, facing);
  return findItem(spaceOfInteraction, signs)?.dialog;
}

function spaceIsWalkable(map: Tile[][], position: Position): boolean {
  const M = map.length;
  const N = map[0].length;
  if (position.i < 0 || position.i >= M || position.j < 0 || position.j >= N) {
    return false;
  }
  const tileType = map[position.i][position.j];
  return isTileWalkable(tileType);

}

export function stepInDirection(position: Position, direction: Direction): Position {
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


export function moveSpriteState(spriteState: SpriteState, map: Tile[][], direction: Direction): SpriteState {
  let newPosition = stepInDirection(spriteState.position, direction);
  const walkable = spaceIsWalkable(map, newPosition);
  return {
    position: walkable ? newPosition : spriteState.position,
    facing: direction
  }
}