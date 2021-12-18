import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { SpriteActions } from '../redux/actions';
import { selectFacing } from '../redux/selectors';
import pikachuDown from '../images/sprites/pikachu_down.png';
import pikachuLeft from '../images/sprites/pikachu_left.png';
import pikachuRight from '../images/sprites/pikachu_right.png';
import pikachuUp from '../images/sprites/pikachu_up.png';
import { Direction } from '../types';

type SpriteImages = {
  [Direction.DOWN]: string
  [Direction.RIGHT]: string
  [Direction.LEFT]: string
  [Direction.UP]: string
}

const pikachuImages: SpriteImages = {
  [Direction.DOWN]: pikachuDown,
  [Direction.LEFT]: pikachuLeft,
  [Direction.RIGHT]: pikachuRight,
  [Direction.UP]: pikachuUp,
};

export default function Sprite() {
  const dispatch = useDispatch();
  const facing = useSelector(selectFacing);

  const handleKey = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'h':
        dispatch(SpriteActions.createMove(Direction.LEFT));
        break;
      case 'j':
        dispatch(SpriteActions.createMove(Direction.DOWN));
        break;
      case 'k':
        dispatch(SpriteActions.createMove(Direction.UP));
        break;
      case 'l':
        dispatch(SpriteActions.createMove(Direction.RIGHT));
        break;
    }
  }, [dispatch]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey)
    }
  });

  const image = useMemo(() => pikachuImages[facing], [facing]);

  return (
    <div
      className="sprite"
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
}