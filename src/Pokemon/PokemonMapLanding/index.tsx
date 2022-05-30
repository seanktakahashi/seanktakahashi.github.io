import './PokemonMapLanding.scss';
import React, { useMemo } from 'react';
import { Provider } from 'react-redux'
import { createPokemonMapStore } from '../mapRedux/store'
import PokemonMapDrawing from '../react/PokemonMapDrawing';
import { landingPokemonMap } from './landingMap';
import { getTypeImage, Tile } from '../tiles/Tile';
import NavigationHelper from '../react/NavigationHelper';
import Dialog from '../react/Dialog';

export default function PokemonMapLanding() {
  const store = useMemo(() => {
    return createPokemonMapStore(landingPokemonMap);
  }, [landingPokemonMap]);
  return (
    <Provider store={store}>
      <div id="landing-container"
        style={{ backgroundImage: `url(${getTypeImage[Tile.grass]})` }}
      >
        <NavigationHelper />
        <Dialog />
        <div id={"landing"}>
          <PokemonMapDrawing />
        </div>
      </div >
    </Provider>
  );
}
