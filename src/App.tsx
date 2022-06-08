import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import HeaderBar from './components/header/HeaderBar'
import HomePage from './components/home/HomePage';

function App() {
  return (
    <BrowserRouter>
      <HeaderBar />
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
