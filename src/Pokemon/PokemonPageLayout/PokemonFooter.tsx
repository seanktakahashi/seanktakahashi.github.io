import "./PokemonFooter.scss";
import PokemonMapDrawing from '../react/PokemonMapDrawing';
import React, { useMemo } from 'react';
import { Provider } from 'react-redux';
import { pageLayoutMap } from "./pageLayoutMap";
import { createPokemonMapStore } from "../mapRedux/store";

export default function PokemonFooter() {
  const store = useMemo(() => {
    return createPokemonMapStore(pageLayoutMap);
  }, [pageLayoutMap]);
  return (
    <div id="pokemon-footer">
      <Provider store={store}>
        <PokemonMapDrawing />
      </Provider>
    </div>
  );
}