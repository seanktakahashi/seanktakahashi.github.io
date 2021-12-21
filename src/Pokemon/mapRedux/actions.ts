import { Direction } from "../types";

export interface Action {
  readonly type: string
  readonly payload?: any
};

export type ActionCreator = (arg: any) => Action;

export namespace SpriteActions {
  export const move = {
    type: 'MOVE',
    payload: Direction
  }
  export const createMove: ActionCreator = (direction: Direction): Action => ({
    type: 'MOVE',
    payload: direction
  });
}