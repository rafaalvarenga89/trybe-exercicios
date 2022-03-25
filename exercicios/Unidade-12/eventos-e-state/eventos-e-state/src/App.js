import React from 'react';
import './App.css';



// function handleClick() {
//   console.log('Clicou');
// }

// A função handleClick() não pode ficar dentro da classe

class App extends React.Component {
  // Quando um componente é colocado na tela ele executa uma função chamada constructor , e usando a linha super() podemos sobrescrevê-la para estender seu comportamento;
  constructor() {
    super()
    // O objeto this , acessível a toda classe de componente React , contém tudo o que concerne àquele componente e deve ser vinculado explicitamente às funções criadas dentro da classe, através da sintaxe this.minhaFuncao = this.minhaFuncao.bind(this) no construtor do componente;
    this.handleClick = this.handleClick.bind(this)
    console.log('Componente sendo construído')
    // Estado Inicial
    // é possível definir um estado inicial no construtor com uma atribuição a this.state
    this.state = {
      numeroDeCliques:0
    }

  }

  handleClick() {
    console.log(this);
    console.log('Clicou');
    // Incrementa um valor ao estado (Atualiza)
    // e deve-se atualizar tal estado somente com a função this.setState .
    this.setState((prevState, _props) => ({
      // A atualização do estado é assíncrona e, por isso, se você quiser garantir que uma atualização ocorrerá depois da outra, tal atualização deverá ser definida via callback passada à função this.setState , no formato this.setState((estadoAnterior, props) => novoEstado)
      numeroDeCliques: prevState.numeroDeCliques + 1,
    }))    
  }

  render() {
    console.log(this);
    // this: é o objeto react que a gente cria e entrega pra gente
    return (
    <>

    {/* <span>Hello, World!</span> */}
    {/* <button onClick={handleClick}>Meu Botão</button> */}
    {/* É possível ler o estado de um componente via this.state */}
    <button onClick={this.handleClick}>Este botão foi clicado {this.state.numeroDeCliques} vezes</button>
    </>
    )
  }
}

export default App;
