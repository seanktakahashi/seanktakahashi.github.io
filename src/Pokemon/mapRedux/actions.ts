import { Direction } from "../types";

export interface Action {
  readonly type: string
  readonly payload?: any
};

export type ActionCreator = (arg: any) => Action;

export namespace SpriteActions {
  export const move: Action = {
    type: 'MOVE',
    payload: Direction
  }
  export const createMove: ActionCreator = (direction: Direction): Action => ({
    type: 'MOVE',
    payload: direction
  });
  export const interact: Action = {
    type: 'INTERACT',
  };
}

export namespace GlobalActions {
  export const clearNavigateTo: Action = {
    type: 'CLEAR_NAVIGATE_TO'
  };
  export const clearDialog: Action = {
    type: 'CLEAR_DIALOG'
  };
}