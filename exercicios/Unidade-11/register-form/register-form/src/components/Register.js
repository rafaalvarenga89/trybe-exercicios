import React, { Component } from 'react'

export class Register extends Component {
    render() {
        
        const { users } = this.props

        console.log(users);

        return (
           <section className='register'>
               <h1>Usuários registrados</h1>

                <ul>
                    {users.map(usuario => <li key={usuario }>{usuario}</li>)}
                </ul>

           </section>
        )
    }
}

export default Register