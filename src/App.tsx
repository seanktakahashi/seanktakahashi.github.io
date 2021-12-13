import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PokemonMapLanding from './containers/PokemonMapLanding';
import PageLayout from './containers/PageLayout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<PokemonMapLanding />} />
        <Route path="/" element={<PageLayout />}>
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </Router >
  );
}
