import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isMapId } from '../Map';
import { GlobalActions } from '../mapRedux/actions';
import { selectNavigate } from '../mapRedux/selectors';
import './NavigationHelper.scss';

export default function NavigationHelper() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateTo = useSelector(selectNavigate);
  const navigating = navigateTo != null ? true : false;

  useEffect(() => {
    if (navigateTo !== undefined) {
      if (isMapId(navigateTo)) {
        setTimeout(() => {
          dispatch(GlobalActions.clearNavigateTo);
        }, 1000); // Equal to Fading Div
      } else {
        setTimeout(() => {
          dispatch(GlobalActions.clearNavigateTo);
          navigate(navigateTo);
        }, 1000); // Equal to Fading Div
      }
    }
  }, [navigateTo]);
  return (
    <div id="fading-div" style={navigating ? { opacity: 1, zIndex: 1 } : undefined} />
  );
}