import React from 'react';
import './App.css';


import CurrencyProvider from './context/CurrencyProvider';
import Home from './pages/Home';

function App() {
  return (
    <CurrencyProvider>
      <div className="App">
        <Home />
      </div>
    </CurrencyProvider>

  );
}

export default App;
