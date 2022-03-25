import React from 'react'
import EstadoFavorito from './EstadoFavorito';

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            estadoFavorito:'',
            nome:'',
            email:'',
            idade: 0,
            vaiComparecer: false,
            palavraChaveFavorita:'',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target }) {

        console.log('Estou mudando o estado do Pai!')

        const { name } = target
        const valueHandleChangeState  = target.type === 'checkbox' ? target.checked : target.value
        
        this.setState({ 
            [name]: valueHandleChangeState,
        })
    }

    render() {
    
        return (
            <>
            <div>
                <h1>Estados e React: ferramenta incrível ou reagindo a regionalismos?</h1>
                <form className='form'>
                    <EstadoFavorito 
                    valueHandleChangeState={this.state.estadoFavorito} 
                    handleChangeEFProp={this.handleChange}
                    />
                    <label>
                        Email
                        <input name='email' type="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        Nome
                        <input name='nome' type="text" value={this.state.nome} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Idade
                        <input name='idade' type="number" value={this.state.idade} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Vai Comparecer?
                        <input name='vaiComparecer' type="checkbox" value={this.state.vaiComparecer} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Escolha sua palavra chave favorita:
                        <select
                          name="palavraChaveFavorita"
                          value={this.state.palavraChaveFavorita}
                          onChange={this.handleChange}
                        >
                        <option value="Componente">Componente</option>
                        <option value="Estado">Estado</option>
                        <option value="Evento">Evento</option>
                        <option value="Props">Props</option>

                        </select>
                    </label>




                </form>
            </div>
            </>
        )
    }
}

export default Form