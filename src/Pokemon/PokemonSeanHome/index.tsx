import '../PokemonMapLanding/PokemonMapLanding.scss';
import React, { useMemo } from 'react';
import { Provider } from 'react-redux'
import { createPokemonMapStore } from '../mapRedux/store'
import PokemonMapDrawing from '../react/PokemonMapDrawing';
import { homeMap } from './homeMap';
import NavigationHelper from '../react/NavigationHelper';
import Dialog from '../react/Dialog';

export default function PokemonSeanHome() {
  const store = useMemo(() => {
    return createPokemonMapStore(homeMap);
  }, [homeMap]);
  return (
    <Provider store={store}>
      <div id="landing-container"
        style={{ backgroundColor: "black" }}
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
