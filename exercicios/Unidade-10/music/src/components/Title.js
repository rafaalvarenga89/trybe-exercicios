// 1. Importar o React;
import React from "react";
import PropTypes from 'prop-types';

// 2. Criar a classe;

class Title extends React.Component {
    render () {

        
        const { titulo } = this.props;

        return (
           <h1> {titulo} </h1> 
        )
    }
}

Title.propTypes = {
    titulo: PropTypes.string.isRequired
}

// 3. export default a classe;
export default Title;

