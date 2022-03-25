import React from "react";
import PropTypes from 'prop-types';

class Title extends React.Component {
    render () {
        const { titleProp } = this.props;
        return (
            // Elemento filho de App.js
           <h1>{titleProp}</h1> 
        )
    }
}

 Title.propTypes = {
     titleProp: PropTypes.string.isRequired
 }

export default Title;