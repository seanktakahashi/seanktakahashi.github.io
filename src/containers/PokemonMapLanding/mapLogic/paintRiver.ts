import { TileType } from '../TileType';
import { Direction, PokemonMap, Position } from '../types';

const directions = [Direction.DOWN, Direction.RIGHT, Direction.LEFT, Direction.UP];

function paintWaterTile(map: PokemonMap, i: number, j: number): boolean {
  const M = map.length;
  const N = map[0].length;
  if (i < 0 || i >= M || j < 0 || j >= N || map[i][j].type) {
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

function randomChoice<T>(arr: Array<T>): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function weightedRandomChoice<T>(arr: Array<T>, changeWeight: number, curr: T, exclude?: T): T {
  if (Math.random() > changeWeight) {
    return curr;
  }
  const choices = arr.slice();
  choices.splice(choices.indexOf(curr), 1);
  if (exclude != null) {
    choices.splice(choices.indexOf(exclude), 1);
  }
  return randomChoice(choices);
}

// starting point i and j need to be divisible by 2
function getStartingPoint(map: PokemonMap, mapSeed: TileType[][], direction: Direction): { i: number, j: number } {
  const M = map.length;
  const N = map[0].length;
  const border: Position[] = [];
  switch (direction) {
    case Direction.DOWN:
      // Top Edge
      map[0].forEach((_tile, j) => {
        if (mapSeed.at(0)?.at(j) == null) {
          border.push({ i: 0, j });
        }
      });
      break;
    case Direction.RIGHT:
      // Left Edges
      map.forEach((_tiles, i) => {
        if (mapSeed.at(i)?.at(0) == null) {
          border.push({ i, j: 0 });
        }
      });
      break;
    case Direction.LEFT:
      // Right Edge
      map.forEach((_tiles, i) => {
        if (mapSeed.at(i)?.at(N - 2) == null) {
          border.push({ i, j: N - 2 });
        }
      });
      break;
    case Direction.UP:
      // Bottom Edge
      map[M - 2].forEach((_tile, j) => {
        if (mapSeed.at(M - 2)?.at(j) == null) {
          border.push({ i: M - 2, j });
        }
      });
      break;
    default:
      throw new Error(`unrecognizable direction ${direction}`);
  }
  return randomChoice(border);
}

export default function paintRiver(map: PokemonMap, mapSeed: TileType[][]): void {
  let currDirection = randomChoice(directions);
  let { i, j } = getStartingPoint(map, mapSeed, currDirection);
  let done;
  do {
    done = paintWaterSplotch(map, i, j);
    switch (currDirection) {
      case Direction.DOWN:
        i += 2;
        currDirection = weightedRandomChoice(directions, 0.3, currDirection, Direction.UP);
        break;
      case Direction.RIGHT:
        j += 2;
        currDirection = weightedRandomChoice(directions, 0.3, currDirection, Direction.LEFT);
        break;
      case Direction.LEFT:
        j -= 2;
        currDirection = weightedRandomChoice(directions, 0.3, currDirection, Direction.RIGHT);
        break;
      case Direction.UP:
        i -= 2;
        currDirection = weightedRandomChoice(directions, 0.3, currDirection, Direction.DOWN);
        break;
      default:
        throw new Error(`unrecognizable direction ${currDirection}`);
    }
  } while (!done);
}