import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component {
  render() {
    return (
        <div>
            <h1>Minha homepage</h1>
            <Link to="/about">Ir para à página About</Link>
            <Link to="/howto">Ir para à página HowTo</Link>
            <Link to="/profile">Ir para à página Profile</Link>
        </div>
    )
  }
}

export default Home;