import { TileType } from '../TileType';
import { Tile, PokemonMap } from '../types';
import { mapSeed } from '../tiles/mapSeed';
import paintRiver from './paintRiver';
import { fixAllTileBorders } from './utils';

const M = 25;
const N = 40;

function getInitTile(i: number, j: number): Tile {
  return new Tile(mapSeed.at(i)?.at(j) ? mapSeed[i][j] : TileType.grass);
}

function initPokemonMap(m: number, n: number): PokemonMap {
  return [...Array(m)].map(
    (_elem, i: number) => [...Array(n)].map(
      (_elem, j: number) => getInitTile(i, j)
    )
  );
}

function paintPokemonMap(map: PokemonMap, mapSeed: TileType[][]): void {
  paintRiver(map, mapSeed);
  paintRiver(map, mapSeed);
}

export function createPokemonMap(m: number = M, n: number = N) {
  const map = initPokemonMap(m, n);
  paintPokemonMap(map, mapSeed);
  fixAllTileBorders(map);
  return map;
}