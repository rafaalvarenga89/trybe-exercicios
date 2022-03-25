import React from 'react';
import TrybeLogo from '../img/logo.svg';
import ToggleButtonImage from '../img/list.svg';

// Componente do Cabeçalho

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <button className="toggle-button" type="button">
          <img src={ ToggleButtonImage } alt="Toggle sidebar button" />
          <img src={ TrybeLogo } alt="Trybe Logo" />
          <h4>Curso</h4>
        </button>
      </header>
    );
  }
}

export default Header;
