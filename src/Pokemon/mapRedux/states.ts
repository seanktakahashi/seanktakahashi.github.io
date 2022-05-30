import { Tile } from '../tiles/Tile';
import { Direction, Door, Position, Sign } from '../types';

export interface GlobalState {
  navigateTo: string | undefined;
  dialog: string | undefined;
}

export interface SpriteState {
  position: Position;
  facing: Direction;
}

export interface ItemState {
  doors: Door[],
  signs: Sign[],
}

export interface MapState {
  globalState: GlobalState;
  spriteState: SpriteState;
  itemsState: ItemState;
  geography: Tile[][];
}

export interface StoreState {
  mapState: MapState
}

export const emptyGlobalState = {
  navigateTo: undefined,
  dialog: undefined
}

export const emptyMapState: MapState = {
  globalState: emptyGlobalState,
  spriteState: {
    position: { i: 0, j: 0 },
    facing: Direction.DOWN,
  },
  itemsState: {
    doors: [],
    signs: [],
  },
  geography: Array(Array(Tile.grass))
};