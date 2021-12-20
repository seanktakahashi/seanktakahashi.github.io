import { createPokemonMap } from '../mapLogic/map';
import { Direction, PokemonMap, Position } from '../types';

export interface SpriteState {
  position: Position;
  facing: Direction;
}

export interface MapState {
  spriteState: SpriteState;
  geography: PokemonMap;
}

export interface StoreState {
  mapState: MapState
}

const initialSpriteState: SpriteState = {
  position: { i: 4, j: 2 }, // in front of house
  facing: Direction.DOWN,
}

export const initialMapState: MapState = {
  spriteState: initialSpriteState,
  geography: createPokemonMap(),
}