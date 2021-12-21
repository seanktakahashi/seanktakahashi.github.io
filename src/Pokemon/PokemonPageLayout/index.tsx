import React from 'react';
import { Outlet } from 'react-router-dom';
import PokemonFooter from './PokemonFooter';

export default function PokemonPageLayout() {
  return (
    <>
      <Outlet />
      <PokemonFooter />
    </>
  );
}