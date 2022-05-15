import { TileType } from '../tiles/TileType';
import { fixAllTileBorders } from './utils';

export function createPokemonMap(mapSeed: TileType[][]) {
  fixAllTileBorders(mapSeed);
  return mapSeed;
}