import React, { Component } from 'react'

export class RegisterForm extends Component {
    
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);

    }

    // handleChange(event) {
    //     console.log(event.target.value)

    //     this.setState({ email: event.target.value })
    // }

    // handleChangePassword = (event) => {
    //     console.log(event.target.name)

    //         this.setState({ 
    //         password: event.target.value })
    // }

    handleChange = (event) => {
        console.log(event.target.name)

        const { name } = event.target

        this.setState({ 
            [name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault() // para o comportamento padrao do <form>

        const { email } = this.state;


        // alert(`Usuário ${email} cadastrado com sucesso`)

        this.props.addNewUser(email) //callback que veio do pai
    }
    
    render() {

        const { email, password } = this.state;

        return (
            <section className='register-form'>
               <h1>Registro de usuário</h1>

               <form onSubmit = {this.handleSubmit}>
                   <label>
                       Email:
                       <input 
                        type='email' 
                        name='email' 
                        id='email' 
                        value={email}
                        onChange={ this.handleChange }
                    />
                   </label>

                   <label>
                       Senha:
                       <input 
                        type='password' 
                        name='password' 
                        id='password'
                        value={password}
                        onChange={this.handleChange} 
                    />
                   </label>

                  <button type='submit'>Registrar</button>
               </form>
               
           </section> 
        )
    }
}

export default RegisterForm