import React from 'react';
import { Tile, getTypeImage } from '../tiles/Tile';
import { Position } from '../types';
import '../tiles/InteriorTile.scss';
import '../tiles/ExteriorTile.scss';

namespace TileDrawing {
  interface OwnProps {
    type: Tile;
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