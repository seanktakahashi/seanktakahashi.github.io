import { TileType } from './constants';

export class Tile {
  type = TileType.grass;
}

export type PokemonMap = Tile[][];