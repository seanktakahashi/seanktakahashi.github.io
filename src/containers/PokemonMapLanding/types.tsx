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
  type: TileType;

  constructor(type: TileType) {
    this.type = type;
  }
}

export type PokemonMap = Tile[][];

export interface TileSet {
  NW: TileType,
  N: TileType,
  NE: TileType,
  W: TileType,
  base: TileType,
  E: TileType,
  SW: TileType,
  S: TileType,
  SE: TileType,
  InverseNW: TileType,
  InverseNE: TileType,
  InverseSW: TileType,
  InverseSE: TileType,
}
