import React, { useMemo } from 'react';
import { Tile, Position } from '../types';
import { useSelector } from 'react-redux';
import { selectMap, selectPosition } from '../redux/selectors';
import Sprite from './Sprite';
import { TileDrawing } from './Tile';

function equalPosition(pos1: Position, pos2: Position) {
  return pos1.i === pos2.i && pos1.j === pos2.j;
}

export default function PokemonMapDrawing() {
  const position = useSelector(selectPosition, equalPosition);
  const pokemonMap = useSelector(selectMap);
  const sprite = useMemo(() => <Sprite />, []);
  return (
    <>
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
    </>
  );
}
