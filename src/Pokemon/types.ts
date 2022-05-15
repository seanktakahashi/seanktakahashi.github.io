import { TileType } from './tiles/TileType';

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

export function equalPosition(pos1: Position, pos2: Position) {
  return pos1.i === pos2.i && pos1.j === pos2.j;
}

export type Door = {
  position: Position,
  naviateTo: string,
}

export type PokemonMap = {
  tiles: TileType[][],
  start: Position,
  doors: Door[],
}

export type TileSet = EnclosureTileSet | WalkwayTileSet;

export interface EnclosureTileSet {
  NW: TileType,
  N: TileType,
  NE: TileType,
  W: TileType,
  base: TileType,
  E: TileType,
  SW: TileType,
  S: TileType,
  SE: TileType,
}

export interface WalkwayTileSet {
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

export function isWalkwayTileSet(tileSet: TileSet): tileSet is WalkwayTileSet {
  return (tileSet as WalkwayTileSet).InverseNW !== undefined;
}
