import { StoreState } from './states';

export const selectFacing = (state: StoreState) => state.spriteState.facing;
export const selectPosition = (state: StoreState) => state.spriteState.position;