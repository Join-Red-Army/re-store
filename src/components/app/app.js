import React from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import './app.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/cart' element={<CartPage />} />
    </Routes>
  )
};

export default App;