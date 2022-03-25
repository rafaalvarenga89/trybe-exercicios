import React from 'react';
import './App.css'
import logo from './assets/trybemestar.png';
import Timer from './assets/components/Timer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showTimer: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    console.log(this.state);
  }

  toggleTimer() {
    this.setState((prevState) => ({
      showTimer: !prevState.showTimer,
    }))
  }

  // IF Statement

  // timerElement() {
  //   if(this.state.showTimer) {
  //     return <Timer />
  //   }
  // }

  render() {
    // Operador Ternário && Logical Operator
    const { showTimer } = this.state;
    return (
      <div>
        <header>
          <img src={ logo } className="App-logo" alt="logo" />
        </header>

        {/* IF Statement */}
        {/* {this.timerElement()} */}

        {/* Operador Ternário */}
        {/* {(showTimer === true) ? <Timer /> : null } */ } 

        {/* Logical Operator */}
        {showTimer && <Timer />}

        <button
          type='button'
          onClick={this.toggleTimer}
          >
          {showTimer ? 'Desligar Timer' : 'Ligar Timer'}
        </button>
        {console.log(showTimer)}
      </div>
    );
  }
}
export default App;
