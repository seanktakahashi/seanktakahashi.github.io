import './NavigationHelper.scss';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavigate } from '../mapRedux/selectors';
import { GlobalActions } from '../mapRedux/actions';

export function NavigationHelper() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateTo = useSelector(selectNavigate);
  const navigating = navigateTo != null ? true : false;

  useEffect(() => {
    if (navigateTo !== undefined) {
      setTimeout(() => {
        dispatch(GlobalActions.clearNavigateTo);
        navigate(navigateTo);
      }, 1000); // Equal to Fading Div
    }
  }, [navigateTo]);
  return (
    <div id="fading-div" style={{ opacity: navigating ? 1 : 0, zIndex: navigating ? 1 : -1 }} />
  );
}