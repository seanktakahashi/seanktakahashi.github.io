import { Direction, Position } from '../types';

export interface SpriteState {
  position: Position;
  facing: Direction;
}

export const initialSpriteState: SpriteState = {
  position: { i: 0, j: 0 },
  facing: Direction.DOWN,
}

export interface StoreState {
  spriteState: SpriteState
}