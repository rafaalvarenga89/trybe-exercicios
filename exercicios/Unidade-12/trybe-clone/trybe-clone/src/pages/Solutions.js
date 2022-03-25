import React from 'react';
import { Link } from 'react-router-dom';

class Solutions extends React.Component {
  render() {
    const { solutions } = this.props;
    console.log(solutions);
    return (
      <>
        <h1>Gabaritos</h1>
        {solutions.map((solution) => (
          <div key={ solution.slug }>
            <Link to={ `solutions/${solution.slug}` }>{solution.name}</Link>
          </div>
        ))}
      </>
    );
  }
}

export default Solutions;
