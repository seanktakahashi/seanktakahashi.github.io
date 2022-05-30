import { createStore } from 'redux';
import { reducer } from './reducer';
import { emptyGlobalState, MapState } from './states';
import { Direction, PokemonMap } from '../types';

const initialMapState = (map: PokemonMap): MapState => ({
  globalState: emptyGlobalState,
  itemsState: {
    doors: map.doors,
    signs: map.signs,
  },
  spriteState: {
    position: map.start,
    facing: Direction.DOWN,
  },
  geography: map.tiles,
});

export const createPokemonMapStore = (initialMap: PokemonMap) => createStore(reducer, { mapState: initialMapState(initialMap) });