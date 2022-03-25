import React from 'react';


class Idade extends React.Component {
    constructor(){
    super()
    this.state={
      nome:"João",
    }
  }
  render() {
      // Não vai funcionar, falhará. Propriedades são fixas.
    // this.props.idade = "50";

    // Estados são dinâmicos, podem mudar.
    this.state.nome = "Courtney LaPlante"

    return(
      <>
       <p>Nome: {this.state.nome}</p>
       <p>Idade: {this.props.idade}</p>
      </>
    )
  }
}

export default Idade;
