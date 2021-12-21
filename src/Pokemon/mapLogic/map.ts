import { TileType } from '../TileType';
import { Tile, PokemonMap } from '../types';
import paintRiver from './paintRiver';
import { fixAllTileBorders } from './utils';

function getInitTile(i: number, j: number, mapSeed: TileType[][]): Tile {
  return new Tile(mapSeed.at(i)?.at(j) ? mapSeed[i][j] : TileType.grass);
}

function initPokemonMap(m: number, n: number, mapSeed: TileType[][]): PokemonMap {
  return [...Array(m)].map(
    (_elem, i: number) => [...Array(n)].map(
      (_elem, j: number) => getInitTile(i, j, mapSeed)
    )
  );
}

function paintPokemonMap(map: PokemonMap, mapSeed: TileType[][]): void {
  paintRiver(map, mapSeed);
  paintRiver(map, mapSeed);
}

export function createPokemonMap(m: number, n: number, mapSeed: TileType[][], paintMap: boolean = true) {
  const map = initPokemonMap(m, n, mapSeed);
  if (paintMap) {
    paintPokemonMap(map, mapSeed);
  }
  fixAllTileBorders(map);
  return map;
}