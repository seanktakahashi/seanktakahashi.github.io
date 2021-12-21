import { createStore } from 'redux';
import { createPokemonMap } from '../mapLogic/map';
import { reducer } from '../mapRedux/reducer';
import { emptyGlobalState, MapState, SpriteState } from '../mapRedux/states';
import { Direction, Door } from '../types';
import { M, mapSeed, N } from './mapSeed';

const initialSpriteState: SpriteState = {
  position: { i: 5, j: 4 }, // in front of house
  facing: Direction.DOWN,
}

const doors: Door[] = [
  {
    position: { i: 4, j: 4 }, // house door
    naviateTo: '/pokemon/chess',
  },
  {
    position: { i: 2, j: 11 }, // cave door
    naviateTo: '/pokemon/chess',
  }
];

const initialMapState: MapState = {
  globalState: emptyGlobalState,
  itemsState: {
    doors
  },
  spriteState: initialSpriteState,
  geography: createPokemonMap(M, N, mapSeed),
}

function configureStore() {
  const store = createStore(reducer, { mapState: initialMapState });
  return store;
}

export const store = configureStore();