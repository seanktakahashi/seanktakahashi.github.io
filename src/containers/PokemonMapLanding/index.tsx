import './PokemonMapLanding.scss';
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import PokemonMapContainer from './PokemonMapContainer';

export default function PokemonMapLanding() {
  return (
    <div id="landing">
      <Provider store={store}>
        <PokemonMapContainer />
      </Provider>
    </div>
  );
}
