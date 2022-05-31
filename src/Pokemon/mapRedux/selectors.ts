import { StoreState } from './states';

export const selectFacing = (state: StoreState) => state.mapState.spriteState.facing;
export const selectPosition = (state: StoreState) => state.mapState.spriteState.position;
export const selectMap = (state: StoreState) => state.mapState.geography;
export const selectBackground = (state: StoreState) => state.mapState.background

export const selectNavigate = (state: StoreState) => state.mapState.globalState.navigateTo;
export const selectDialog = (state: StoreState) => state.mapState.globalState.dialog;