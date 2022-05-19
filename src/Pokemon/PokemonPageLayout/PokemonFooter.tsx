import "./PokemonFooter.scss";
import PokemonMapDrawing from '../react/PokemonMapDrawing';
import React, { useMemo } from 'react';
import { Provider } from 'react-redux';
import { pageLayoutMap } from "./pageLayoutMap";
import { createPokemonMapStore } from "../mapRedux/store";
import NavigationHelper from "../react/NavigationHelper";
import Dialog from "../react/Dialog";

export default function PokemonFooter() {
  const store = useMemo(() => {
    return createPokemonMapStore(pageLayoutMap);
  }, [pageLayoutMap]);
  return (
    <Provider store={store}>
      <div id="pokemon-footer">
        <NavigationHelper />
        <Dialog />
        <PokemonMapDrawing />
      </div>
    </Provider>
  );
}