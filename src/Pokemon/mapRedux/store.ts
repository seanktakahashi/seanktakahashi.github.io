import { createStore } from 'redux';
import { reducer } from './reducer';
import { emptyMapState, MapState } from './states';
import { PokemonMap } from '../types';
import { fillOutMapState } from './utils/mapUtils';

const initialMapState = (map: PokemonMap): MapState => fillOutMapState(emptyMapState, map);

export const createPokemonMapStore = (initialMap: PokemonMap) => createStore(reducer, { mapState: initialMapState(initialMap) });