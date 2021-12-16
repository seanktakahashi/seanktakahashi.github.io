import './PokemonMapLanding.scss';
import React from 'react';
import { TileType, getTypeImage } from './constants';
import { Tile, PokemonMap, Position } from './types';

namespace TileDrawing {
  interface OwnProps {
    type: TileType;
    position: Position;
    // sprite: Sprite;
  }
  export type Props = OwnProps;
}

function TileDrawing({ type }: TileDrawing.Props) {
  return (
    <div
      className="tile"
      style={{ backgroundImage: `url(${getTypeImage[type]})` }}
    >
      {/* {samePosition(position, sprite.position) ? buildSprite(sprite) : null} */}
    </div>
  );
}

namespace PokemonMapDrawing {
  interface OwnProps {
    pokemonMap: PokemonMap;
    // sprite: Sprite;
  }
  export type Props = OwnProps;
}

export default function PokemonMapDrawing({ pokemonMap }: PokemonMapDrawing.Props) {
  return (
    <React.Fragment>
      {pokemonMap.map(
        (row: Tile[], i: number) => (
          <div key={i} className="row">
            {row.map((elem: Tile, j: number) => (
              <TileDrawing
                key={`${i},${j}`}
                type={elem.type}
                position={{ i, j }}
              // sprite={sprite}
              />
            ))}
          </div>
        ))}
    </React.Fragment>
  );
}
