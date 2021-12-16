import './PokemonMapLanding.scss';
import React, { useMemo } from 'react';
import PokemonMapDrawing from './PokemonMapDrawing';
import { Direction, Tile, PokemonMap } from './types';
import paintRiver from './paintRiver';
import Sprite from './Sprite';

function initPokemonMap(m: number, n: number): PokemonMap {
  return [...Array(m)].map(
    () => [...Array(n)].map(
      () => new Tile()
    )
  );
}

const M = 30;
const N = 50;

function paintPokemonMap(map: PokemonMap): void {
  paintRiver(map, Direction.DOWN);
  paintRiver(map, Direction.UP);
}

export default function PokemonMapLanding() {
  const pokemonMap = useMemo(() => {
    let map = initPokemonMap(M, N);
    paintPokemonMap(map);
    return map;
  }, [M, N]);

  return (
    <div id="landing">
      <PokemonMapDrawing
        pokemonMap={pokemonMap}
      />
      <Sprite />
    </div>
  );
}
