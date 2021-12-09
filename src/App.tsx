import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './containers/Landing';
import PageLayout from './containers/PageLayout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Landing />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </Router >
  );
}
