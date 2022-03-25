import React from 'react';
import './App.css';
import Artists from './components/Artists';
import Title from './components/Title';
import artists from './data'


class App extends React.Component {
  render() {
    console.log(artists);
    return (
      <>
      {/* Elemento Pai */}
      <Title titleProp={"Músicas"}/>
      <Artists artistProp={artists} />
      

      </>
    )
  }
}

export default App;
