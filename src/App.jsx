import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapMatching from './mapmatching-page/mapmatching';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapMatching />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;