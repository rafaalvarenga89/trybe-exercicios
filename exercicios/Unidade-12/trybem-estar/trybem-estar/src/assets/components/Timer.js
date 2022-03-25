import React from 'react';
import bip from "../bip.mp3"

// 5. cria uma função para o valor de tempo;
// Número mágico: Convenção tudo maiúsculo
const ONE_SECOND = 1000;

// 7. Cria uma funçaõ para limitação de tempo
const TIME_LIMIT = 5;

//17.cria uma função para  limitação de fases.
const PHASES_LIMIT = 2;

class Timer extends React.Component {

    // 1. Atribuir um estado
    constructor() {
        super();
        this.state = {
            // = prevState: dentro do this.state
            seconds: 0,
            // 12. Criar o estado das fases
            phases: ['🫁 Inspire...', '😑 Segure...', '😗 Expire...' ],
            //14. Criar um estado da fase atual
            currentPhase: 0,
        }
    }

    componentDidMount() {
        // 17.Criar a função  do efeito de som;
        const sound = new Audio(bip);
        // componentDidMount(): é executado depois que a saída do componente é renderizada no DOM
        console.log('Montei o componente')
        // 4. Cria o timer
        // 9.Criar o identificador do intervalo
        this.intervalID = setInterval(() => {
            // Propriedade 'this.setState' atualizar o estado
            // prevState: Estado Anterior;
            // 18. Inserir o efeito de som
            sound.play()
            console.log('Interval') 
            this.setState((prevState) => ({
                seconds: prevState.seconds + 1,
            }))
        }, ONE_SECOND);
       
    }

    // 6. Cria uma atualização para zerar aṕos os 5 segundos
    componentDidUpdate(prevProps, prevState) {
        // componentDidUpdate(): é invocado imediatamente após alguma atualização ocorrer.
        console.log('Atualizou o estado')
        if(prevState.seconds === TIME_LIMIT) {
            this.setState({ 
                seconds: 0,
                //16. Atualizar o estado assim que atingir o tempo limite (CONDICIONAL);
                currentPhase: prevState.currentPhase === PHASES_LIMIT ? 0 : prevState.currentPhase + 1,
            });
            
        }  

    }

    // 8. Desmontar o estado do componente
    componentWillUnmount() {
        console.log('Vou desmontar');
        // 10. cria a função "clearInterval"
        clearInterval(this.intervalID);
    }

    render() {
        // 2. Renderiza o estado, desconstruindo o estado;
        // 13. desmembrar as fases;
        // 15. desmembrar a fase atual;
        const { /*{2}*/seconds, /*{13}*/phases, /*{15}*/currentPhase  } = this.state;
        return (
          <section>
            {/* 11.Adicionar  as fases: 'Inspire, segure, expire' */}
            <h2> {phases[currentPhase]} </h2>
            {/* 3. Passar pra dentro do return */}
            <h2>{ seconds }</h2>
          </section>
  
        )
    }
}

export default Timer;