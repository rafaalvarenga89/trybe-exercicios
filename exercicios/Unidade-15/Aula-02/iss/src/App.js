import React from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Localização da Estação Espacial Internacional (ISS)</h1>
      </header>
      <ISSLocation />
    </div>
  );
}

export default App;

//////
// Estado Global

// {
//   latitude: null,
//   longitude: null,
// }

// ACTION

// acessa a aplicação;
// buscar as informações da localização da ISS