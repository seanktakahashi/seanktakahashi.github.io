import { TileType } from '../TileType';
import { Direction, PokemonMap, Position, Tile } from '../types';

export interface SpriteState {
  position: Position;
  facing: Direction;
}

export interface MapState {
  spriteState: SpriteState;
  geography: PokemonMap;
}

export interface StoreState {
  mapState: MapState
}

export const emptyMapState = {
  spriteState: {
    position: { i: 0, j: 0 },
    facing: Direction.DOWN
  },
  geography: Array(Array(new Tile(TileType.grass)))
}