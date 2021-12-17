import React from 'react';
import { TileType, getTypeImage } from './constants';
import { Tile, PokemonMap, Position } from './types';
import { useSelector } from 'react-redux';
import { selectFacing, selectPosition } from './redux/selectors';

namespace TileDrawing {
  interface OwnProps {
    type: TileType;
    position: Position;
    sprite?: JSX.Element;
  }
  export type Props = OwnProps;
}

function TileDrawing({ type, sprite }: TileDrawing.Props) {
  return (
    <div
      className="tile"
      style={{ backgroundImage: `url(${getTypeImage[type]})` }}
    >
      {sprite}
    </div>
  );
}

function equalPosition(pos1: Position, pos2: Position) {
  return pos1.i === pos2.i && pos1.j === pos2.j;
}

namespace PokemonMapDrawing {
  interface OwnProps {
    pokemonMap: PokemonMap;
    sprite: JSX.Element;
  }
  export type Props = OwnProps;
}

export default function PokemonMapDrawing({ pokemonMap, sprite }: PokemonMapDrawing.Props) {
  const position = useSelector(selectPosition, equalPosition);
  return (
    <React.Fragment>
      <div>{position.i}{position.j}</div>
      {pokemonMap.map(
        (row: Tile[], i: number) => (
          <div key={i} className="row">
            {row.map((elem: Tile, j: number) => (
              <TileDrawing
                key={`${i},${j}`}
                type={elem.type}
                position={{ i, j }}
                sprite={equalPosition(position, { i, j }) ? sprite : undefined}
              />
            ))}
          </div>
        ))}
    </React.Fragment>
  );
}
