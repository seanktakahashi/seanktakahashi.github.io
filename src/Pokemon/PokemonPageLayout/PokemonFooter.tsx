import "./PokemonFooter.scss";
import PokemonMapDrawing from '../react/PokemonMapDrawing';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'

export default function PokemonFooter() {
  return (
    <div id="pokemon-footer">
      <Provider store={store}>
        <PokemonMapDrawing />
      </Provider>
    </div>
  );
}