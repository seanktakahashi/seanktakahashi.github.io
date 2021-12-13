import React, { useMemo } from 'react';
import './PokemonMapLanding.scss';
import { TileType, getTypeImage } from './constants';
import { Tile, PokemonMap } from './types';
import paintRiver, { direction } from './paintRiver';

function createTile(key: number, type: TileType) {
  return (
    <div
      key={key}
      className="tile col"
      style={{
        backgroundImage: `url(${getTypeImage[type]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
}

function buildPokemonMapRow(row: Tile[]): JSX.Element[] {
  return row.map((elem: Tile, i) => createTile(i, elem.type))
}


function buildPokemonMap(pokemonMap: PokemonMap): JSX.Element[] {
  return pokemonMap.map(
    (row, i) => (
      <div key={i} className="row">
        {buildPokemonMapRow(row)}
      </div>
    ));
}

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
  paintRiver(map, direction.DOWN);
  paintRiver(map, direction.UP);
}

export default function PokemonMapLanding() {
  const pokemonMap = useMemo(() => {
    let map = initPokemonMap(M, N);
    paintPokemonMap(map);
    return buildPokemonMap(map);
  }, [M, N]);

  return (
    <div id="landing">
      {pokemonMap}
    </div>
  );
}
