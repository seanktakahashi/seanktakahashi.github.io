import './PokemonMapLanding.scss';
import React, { useMemo } from 'react';
import { Provider } from 'react-redux'
import { createPokemonMapStore } from '../mapRedux/store'
import PokemonMapDrawing from '../react/PokemonMapDrawing';
import { landingPokemonMap } from './landingMap';

export default function PokemonMapLanding() {
  const store = useMemo(() => {
    return createPokemonMapStore(landingPokemonMap);
  }, [landingPokemonMap]);
  return (
    <div id="landing">
      <Provider store={store}>
        <PokemonMapDrawing />
      </Provider>
    </div>
  );
}
