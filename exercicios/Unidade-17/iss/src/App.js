import React from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import ISSContext from './context/ISSContext';
import ISSProvider from './context/ISSProvider';


const ShowContext = () => (
  <ISSContext.Consumer>
    {(valueContext) => (
      <span>{`O valor do contexto é: ${JSON.stringify(valueContext)}`}</span>
    ) }
  </ISSContext.Consumer>
)


class App extends React.Component {
  render() {
  return (
    <ISSProvider>
      <div className="App">
      <header>
        <h1>Localização da Estação Espacial Internacional (ISS)</h1>
      </header>      
       <ISSLocation />
       <ShowContext />
    </div>
    </ISSProvider>
  );
  }
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