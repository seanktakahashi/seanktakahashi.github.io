import './PokemonMapLanding.scss';
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store'
import PokemonMapDrawing from '../react/PokemonMapDrawing';

export default function PokemonMapLanding() {
  return (
    <div id="landing">
      <Provider store={store}>
        <PokemonMapDrawing />
      </Provider>
    </div>
  );
}
