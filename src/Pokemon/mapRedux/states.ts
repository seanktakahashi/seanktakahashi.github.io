import { TileType } from '../tiles/TileType';
import { Direction, Door, Position } from '../types';

export interface GlobalState {
  navigateTo: string | undefined;
}

export interface SpriteState {
  position: Position;
  facing: Direction;
}

export interface ItemState {
  doors: Door[],
}

export interface MapState {
  globalState: GlobalState;
  spriteState: SpriteState;
  itemsState: ItemState;
  geography: TileType[][];
}

export interface StoreState {
  mapState: MapState
}

export const emptyGlobalState = {
  navigateTo: undefined,
}

export const emptyMapState: MapState = {
  globalState: emptyGlobalState,
  spriteState: {
    position: { i: 0, j: 0 },
    facing: Direction.DOWN
  },
  itemsState: {
    doors: []
  },
  geography: Array(Array(TileType.grass))
};