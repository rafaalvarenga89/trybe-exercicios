import React from 'react'
import './App.css';
import Musics from './components/Musics';

import Title from './components/Title';

import musics from './data';


class App extends React.Component {
  render() {
    
    console.log(musics);

    return (
      <>
        <Title titulo ='Os artistas favoritos do Rafa!'/>
        <Title titulo = 'Cuidado! Isso é muito perigoso'/>

        <Musics musics={musics}/>
      </>
    )
  }
}

export default App;
