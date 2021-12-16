export interface Action {
  type: string
};

export namespace SpriteActions {
  export const moveLeft: Action = {
    type: 'LEFT',
  };

  export const moveDown: Action = {
    type: 'DOWN',
  };

  export const moveUp: Action = {
    type: 'UP',
  };

  export const moveRight: Action = {
    type: 'RIGHT',
  };
}