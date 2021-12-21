import { createStore } from 'redux';
import { createPokemonMap } from '../mapLogic/map';
import { reducer } from '../mapRedux/reducer';
import { emptyGlobalState, MapState, SpriteState } from '../mapRedux/states';
import { Direction, Door } from '../types';
import { M, mapSeed, N } from './mapSeed';

const initialSpriteState: SpriteState = {
  position: { i: 4, j: 1 }, // in front of cave door
  facing: Direction.DOWN,
}

const doors: Door[] = [
  {
    position: { i: 3, j: 1 }, // cave door
    naviateTo: '/',
  },
];

const initialMapState: MapState = {
  globalState: emptyGlobalState,
  itemsState: {
    doors
  },
  spriteState: initialSpriteState,
  geography: createPokemonMap(M, N, mapSeed, false),
}

function configureStore() {
  const store = createStore(reducer, { mapState: initialMapState });
  return store;
}

export const store = configureStore();