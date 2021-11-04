
import './App.css';
import React from 'react';


  const Task = (value) => {
    return(
    <li key={value}>{value}</li>
    );
  }

  const tarefas = ['Conseguir um "trampo"', 'Morar em São José dos Campos', 'Concluir o curso do Trybe'];

  class App extends React.Component{
    render(){
      return(
        <ul>{tarefas.map(tarefa => Task(tarefa))}</ul>
      );
    }
  }


export default App;
