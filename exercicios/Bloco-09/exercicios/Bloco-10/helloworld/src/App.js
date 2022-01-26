import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    function nomeCompleto(nome,sobrenome) {
      return `${nome} ${sobrenome}`;
    }
    const element = <h1>Hello, {nomeCompleto('Jorge', 'Maravilha')}</h1>;

    function helloWorld (nome2, sobrenome2) {
      return <h1>Hello, {`${nome2} ${sobrenome2}`}</h1>;
    }
    
    const element2 = helloWorld("Jorge", "Maravilha");
    const container = <div>{element2}</div>;

    const nome3 = 'Jorge Maravilha';
    const classe = 'hello-class';
    const element3 = <h1 className={classe}>Hello, {nome3}</h1>;
  return (
  <>
  {element}

  {container}

  {element3}








  </>
  );
  }
}

export default App;
