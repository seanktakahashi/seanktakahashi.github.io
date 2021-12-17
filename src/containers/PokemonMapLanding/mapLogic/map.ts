import { Direction, Tile, PokemonMap } from '../types';
import paintRiver from './paintRiver';

const M = 30;
const N = 50;

function initPokemonMap(m: number, n: number): PokemonMap {
  return [...Array(m)].map(
    () => [...Array(n)].map(
      () => new Tile()
    )
  );
}

function paintPokemonMap(map: PokemonMap): void {
  paintRiver(map, Direction.DOWN);
  paintRiver(map, Direction.UP);
}

export function createPokemonMap(m: number = M, n: number = N) {
  const map = initPokemonMap(m, n);
  paintPokemonMap(map);
  return map;
}