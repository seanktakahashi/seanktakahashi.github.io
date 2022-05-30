import './styles/globals.scss';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Chess from './containers/Chess';
import PokemonMapLanding from './Pokemon/PokemonMapLanding';
import PokemonPageLayout from './Pokemon/PokemonPageLayout';
import PokemonSeanHomeFloor1 from './Pokemon/PokemonSeanHome/Floor1';
import PokemonSeanHomeFloor2 from './Pokemon/PokemonSeanHome/Floor2';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<PokemonMapLanding />} />
        <Route path="/pokemon/homeF1" element={<PokemonSeanHomeFloor1 />} />
        <Route path="/pokemon/homeF2" element={<PokemonSeanHomeFloor2 />} />
        <Route path="/pokemon/" element={<PokemonPageLayout />}>
          <Route path="chess" element={<Chess />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router >
  );
}
