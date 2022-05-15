import React from 'react';
import { TileType, getTypeImage } from '../tiles/TileType';
import { Position } from '../types';

namespace TileDrawing {
  interface OwnProps {
    type: TileType;
    position: Position;
    sprite?: JSX.Element;
  }
  export type Props = OwnProps;
}

export function TileDrawing({ type, sprite }: TileDrawing.Props) {
  return (
    <div
      className="tile"
      style={{ backgroundImage: `url(${getTypeImage[type]})` }}
    >
      {sprite}
    </div>
  );
}