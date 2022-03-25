import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <section className="Sidebar">
        <h4>Curso</h4>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/calendar">Agenda do Curso</Link>
          <Link to="/live-lectures">Aula Ao Vivo</Link>
          <Link to="/trybe-talks">Trybe Talks</Link>
          <Link to="/solutions">Gabarito</Link>
        </nav>
      </section>
    );
  }
}

export default Sidebar;
