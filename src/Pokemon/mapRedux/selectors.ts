import { StoreState } from './states';

export const selectFacing = (state: StoreState) => state.mapState.spriteState.facing;
export const selectPosition = (state: StoreState) => state.mapState.spriteState.position;
export const selectMap = (state: StoreState) => state.mapState.geography;

export const selectNavigate = (state: StoreState) => state.mapState.globalState.navigateTo;

export const selectItems = (state: StoreState) => state.mapState.itemsState;