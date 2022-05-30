import { Tile } from './tiles/Tile';

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

export type Sign = {
  position: Position,
  dialog: string,
}

export type PokemonMap = {
  tiles: Tile[][],
  start: Position,
  doors: Door[],
  signs: Sign[],
}