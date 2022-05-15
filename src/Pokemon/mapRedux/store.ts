import { createStore } from 'redux';
import { createPokemonMap } from '../mapLogic/map';
import { reducer } from './reducer';
import { emptyGlobalState, MapState } from './states';
import { Direction, PokemonMap } from '../types';

const initialMapState = (map: PokemonMap): MapState => ({
  globalState: emptyGlobalState,
  itemsState: {
    doors: map.doors
  },
  spriteState: {
    position: map.start,
    facing: Direction.DOWN,
  },
  geography: createPokemonMap(map.tiles),
});

export const createPokemonMapStore = (initialMap: PokemonMap) => createStore(reducer, { mapState: initialMapState(initialMap) });