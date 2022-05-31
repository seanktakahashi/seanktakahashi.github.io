import './PokemonMapLanding.scss';
import React from 'react';
import Dialog from '../react/Dialog';
import NavigationHelper from '../react/NavigationHelper';
import PokemonMapDrawing from '../react/PokemonMapDrawing';
import { getTypeImage } from '../tiles/Tile';
import { selectBackground } from '../mapRedux/selectors';
import { useSelector } from 'react-redux';

export default function PokemonPage() {
  const background = useSelector(selectBackground);
  return (
    <div id="pokemon-page-container"
      style={background === undefined ? { backgroundColor: 'black' } : { backgroundImage: `url(${getTypeImage[background]})` }}
    >
      <NavigationHelper />
      <Dialog />
      <div id={"pokemon-page"}>
        <PokemonMapDrawing />
      </div>
    </div >
  );
}
