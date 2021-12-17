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
  position: { i: 0, j: 0 },
  facing: Direction.DOWN,
}

export const initialMapState: MapState = {
  spriteState: initialSpriteState,
  geography: createPokemonMap(),
}