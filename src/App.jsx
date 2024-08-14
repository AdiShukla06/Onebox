import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Oneboxpage from './pages/Oneboxpage'; // Placeholder for now

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/onebox" element={<Oneboxpage />} />
    </Routes>
  );
}

export default App;
