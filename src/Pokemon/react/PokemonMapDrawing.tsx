import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Tile, equalPosition } from '../types';
import { GlobalActions } from '../mapRedux/actions';
import { selectMap, selectPosition, selectNavigate } from '../mapRedux/selectors';
import Sprite from './Sprite';
import { TileDrawing } from './TileDrawing';

const sprite = <Sprite />;

export default function PokemonMapDrawing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateTo = useSelector(selectNavigate);
  const position = useSelector(selectPosition, equalPosition);
  const pokemonMap = useSelector(selectMap);

  useEffect(() => {
    if (navigateTo !== undefined) {
      setTimeout(() => {
        dispatch(GlobalActions.clearNavigateTo);
        navigate(navigateTo);
      }, 200);
    }
  }, [navigateTo]);

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
