import { TileType, isWaterTile } from './constants';
import { PokemonMap } from './types';

export enum direction {
  DOWN,
  RIGHT,
  LEFT,
  UP
}
const directions = [direction.DOWN, direction.RIGHT, direction.LEFT, direction.UP];

// Assume Top is Grass. Right, Left, Bottom are Water
function selectWaterTile(map: PokemonMap, i: number, j: number): TileType {
  const M = map.length;
  const N = map[0].length;
  if (i < 0 || i >= M || j < 0 || j >= N) {
    return TileType.water;
  }
  // Bend
  if (i === 0 || !isWaterTile(map[i - 1][j].type)) {
    if (j > 0 && !isWaterTile(map[i][j - 1].type)) {
      // top + left grass
      return TileType.waterNW;
    } else if (j < N - 1 && !isWaterTile(map[i][j + 1].type)) {
      // top + right grass
      return TileType.waterNE;
    }
  } else if (i < M - 1 && !isWaterTile(map[i + 1][j].type)) {
    if (j !== 0 && !isWaterTile(map[i][j - 1].type)) {
      // bottom + left grass
      return TileType.waterSW;
    } else if (j < N - 1 && !isWaterTile(map[i][j + 1].type)) {
      // bottom + right grass
      return TileType.waterSE;
    }
  }
  // Edge
  if (i === 0 || !isWaterTile(map[i - 1][j].type)) {
    // top grass
    return TileType.waterN;
  } else if (j > 0 && !isWaterTile(map[i][j - 1].type)) {
    // left grass
    return TileType.waterW;
  } else if (j < N - 1 && !isWaterTile(map[i][j + 1].type)) {
    // right grass
    return TileType.waterE;
  } else if (i < M - 1 && !isWaterTile(map[i + 1][j].type)) {
    return TileType.waterS;
  }
  // Corner
  if (i === 0 || (j > 0 && !isWaterTile(map[i - 1][j - 1].type))) {
    // top left grass
    return TileType.waterInverseSE;
  } else if (i === 0 || (j < N - 1 && !isWaterTile(map[i - 1][j + 1].type))) {
    // top right grass
    return TileType.waterInverseSW;
  } else if (i < M - 1 && j > 0 && !isWaterTile(map[i + 1][j - 1].type)) {
    // bottom left grass
    return TileType.waterInverseNE;
  } else if (i < M - 1 && j < N - 1 && !isWaterTile(map[i + 1][j + 1].type)) {
    // bottom left grass
    return TileType.waterInverseNW;
  }
  // Surrounded
  return TileType.water;
}

// This function only creates nice river borders because we draw a river with a width of >= 2.
// In particular, this gaurentees that for any water tile, the right or left tile is also a water tile.
// The same for the top and bottom tiles to a water tile.
function fixRiverBorders(map: PokemonMap) {
  map.forEach((row, i) => {
    row.forEach((tile, j) => {
      if (isWaterTile(tile.type)) {
        tile.type = selectWaterTile(map, i, j);
      }
    });
  });
}

function paintWaterTile(map: PokemonMap, i: number, j: number): boolean {
  const M = map.length;
  const N = map[0].length;
  if (i < 0 || i >= M || j < 0 || j >= N) {
    return true;
  }
  map[i][j].type = TileType.water;
  return false;
}

function paintWaterSplotch(map: PokemonMap, i: number, j: number): boolean {
  let done = [];
  done.push(paintWaterTile(map, i, j));
  done.push(paintWaterTile(map, i + 1, j));
  done.push(paintWaterTile(map, i, j + 1));
  done.push(paintWaterTile(map, i + 1, j + 1));
  return done.some((somethingDone) => somethingDone);
}

function weightedRandomChoice<T>(arr: Array<T>, changeWeight: number, curr: T, exclude?: T): T {
  if (Math.random() > changeWeight) {
    return curr;
  }
  const choices = arr.slice();
  choices.splice(choices.indexOf(curr), 1);
  if (exclude !== undefined) {
    choices.splice(choices.indexOf(exclude), 1);
  }
  let c = choices[Math.floor(Math.random() * choices.length)];
  return c;
}

function getStartingPoint(map: PokemonMap, startingDirection: direction): { i: number, j: number } {
  const M = map.length;
  const N = map[0].length;
  switch (startingDirection) {
    case direction.DOWN:
      return { i: 0, j: Math.floor(Math.random() * N) }
    case direction.RIGHT:
      return { i: Math.floor(Math.random() * M), j: 0 }
    case direction.LEFT:
      return { i: Math.floor(Math.random() * M), j: N - 2 }
    case direction.UP:
      return { i: M - 2, j: Math.floor(Math.random() * N) }
    default:
      throw new Error(`unrecognizable direction ${startingDirection}`);
  }
}

export default function paintRiver(map: PokemonMap, currDirection: direction): void {
  let { i, j } = getStartingPoint(map, currDirection);
  let done;
  do {
    done = paintWaterSplotch(map, i, j);
    switch (currDirection) {
      case direction.DOWN:
        i += 2;
        currDirection = weightedRandomChoice(directions, 0.3, currDirection, direction.UP);
        break;
      case direction.RIGHT:
        j += 2;
        currDirection = weightedRandomChoice(directions, 0.3, currDirection, direction.LEFT);
        break;
      case direction.LEFT:
        j -= 2;
        currDirection = weightedRandomChoice(directions, 0.3, currDirection, direction.RIGHT);
        break;
      case direction.UP:
        i -= 2;
        currDirection = weightedRandomChoice(directions, 0.3, currDirection, direction.DOWN);
        break;
      default:
        throw new Error(`unrecognizable direction ${currDirection}`);
    }
  } while (!done);
  fixRiverBorders(map);
}