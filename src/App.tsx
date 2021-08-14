import './App.css';

import React from 'react';

import Appbar from './components/Appbar';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <div className="App">
      <Appbar />
      <HomePage />
    </div>
  );
}

export default App;
