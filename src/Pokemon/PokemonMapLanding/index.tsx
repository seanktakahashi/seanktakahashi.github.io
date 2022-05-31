import React, { useMemo } from 'react';
import { Provider } from 'react-redux'
import { createPokemonMapStore } from '../mapRedux/store'
import { landingPokemonMap } from './landing';
import PokemonPage from './PokemonPage';

export default function PokemonMapLanding() {
  const store = useMemo(() => {
    return createPokemonMapStore(landingPokemonMap);
  }, [landingPokemonMap]);
  return (
    <Provider store={store}>
      <PokemonPage />
    </Provider>
  );
}
