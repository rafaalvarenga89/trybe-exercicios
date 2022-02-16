import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm'
import Register from './components/Register';
import './App.css';

export class App extends Component {

  constructor() {
    super()

    this.state = {
      usuarios: []
    }
  }

  addNewUser = (email) => {
    // console.log(email)

    // this.setState({ usuarios: email })

    this.setState((prevState) => {
      return{
        usuarios: [...prevState.usuarios, email]
      }
    })
  }

  render() {

    const { usuarios } = this.state

    return (
      <main className='App'>
        <RegisterForm addNewUser={this.addNewUser} />
        <Register users={usuarios} />
      </main>
    )
  }
}

export default App;
