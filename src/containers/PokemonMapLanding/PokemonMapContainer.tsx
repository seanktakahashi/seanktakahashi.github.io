import React from 'react';
import { useSelector } from 'react-redux';
import PokemonMapDrawing from './PokemonMapDrawing';
import { selectMap } from './redux/selectors';
import Sprite from './Sprite';

export default function PokemonMapContainer() {
  const pokemonMap = useSelector(selectMap);

  return (
    <PokemonMapDrawing
      pokemonMap={pokemonMap}
      sprite={<Sprite />}
    />
  );
}
