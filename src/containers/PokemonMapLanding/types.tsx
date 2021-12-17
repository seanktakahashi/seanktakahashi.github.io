import { TileType } from './TileType';

export enum Direction {
  DOWN,
  RIGHT,
  LEFT,
  UP
}

export type Position = {
  i: number
  j: number
}

export class Tile {
  type = TileType.grass;
}

export type PokemonMap = Tile[][];