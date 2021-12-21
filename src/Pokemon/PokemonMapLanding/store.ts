import { createStore } from 'redux';
import { createPokemonMap } from '../mapLogic/map';
import { reducer } from '../mapRedux/reducer';
import { MapState, SpriteState } from '../mapRedux/states';
import { Direction } from '../types';
import { M, mapSeed, N } from './mapSeed';

const initialSpriteState: SpriteState = {
  position: { i: 4, j: 2 }, // in front of house
  facing: Direction.DOWN,
}

const initialMapState: MapState = {
  spriteState: initialSpriteState,
  geography: createPokemonMap(M, N, mapSeed),
}

function configureStore() {
  const store = createStore(reducer, { mapState: initialMapState });
  return store;
}

export const store = configureStore();