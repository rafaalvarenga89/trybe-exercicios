import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

// Criar um App com os componentes;
// Criar o React Router DOM, "npm install react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
