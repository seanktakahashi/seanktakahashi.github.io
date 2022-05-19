import "./Dialog.scss";
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GlobalActions } from '../mapRedux/actions';
import { selectDialog } from '../mapRedux/selectors';
import pokemonDialog from '../images/pokemon-dialog.png';

export default function Dialog() {
  const dialog = useSelector(selectDialog);

  const dispatch = useDispatch();
  const handleKey = useCallback((_event: KeyboardEvent) => {
    dispatch(GlobalActions.clearDialog);
  }, [dispatch]);

  useEffect(() => {
    if (dialog !== undefined) {
      document.addEventListener('keydown', handleKey);
      return () => {
        document.removeEventListener('keydown', handleKey)
      }
    }
  }, [dialog]);

  return dialog === undefined ? null : (
    <div className="dialog">
      <img className="dialog-frame" src={pokemonDialog} />
      <div className="dialog-content">
        {dialog}
      </div>
    </div>);
}