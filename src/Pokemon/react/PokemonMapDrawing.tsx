import React from 'react';
import { useSelector } from 'react-redux';
import { Tile, equalPosition } from '../types';
import { selectMap, selectPosition } from '../mapRedux/selectors';
import Sprite from './Sprite';
import { TileDrawing } from './TileDrawing';
import { NavigationHelper } from './NavigationHelper';

const sprite = <Sprite />;

export default function PokemonMapDrawing() {
  const position = useSelector(selectPosition, equalPosition);
  const pokemonMap = useSelector(selectMap);

  return (
    <>
      <NavigationHelper />
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
