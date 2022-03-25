import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <>
      <span>Sobre</span>
      <Link to="/">Voltar à Home</Link>
      </>
    )
  }
}

export default About;