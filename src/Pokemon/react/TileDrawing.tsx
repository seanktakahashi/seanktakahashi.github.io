import React from 'react';
import { TileType, getTypeImage } from '../tiles/TileType';
import { Position } from '../types';
import '../tiles/InteriorTileType.scss';
import '../tiles/ExteriorTileType.scss';

namespace TileDrawing {
  interface OwnProps {
    type: TileType;
    position: Position;
    sprite?: JSX.Element;
  }
  export type Props = OwnProps;
}

export function TileDrawing({ type, position, sprite }: TileDrawing.Props) {
  return (
    <div
      id={`${position.i},${position.j}`}
      className={`tile ${type}`}
      style={{ backgroundImage: `url(${getTypeImage[type]})` }}
    >
      {sprite}
    </div >
  );
}