import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SymptomsPage } from './pages/SymptomsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/symptoms" element={<SymptomsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;