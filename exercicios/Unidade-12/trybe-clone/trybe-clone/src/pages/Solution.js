import React from 'react';

class Solution extends React.Component {
  render() {
    const { match: { params: { slug } }, solutions } = this.props;
    const { name } = solutions.find((solution) => solution.slug === slug);
    return (
      <h1>
        Gabarito de:
        {' '}
        {name}
      </h1>
    );
  }
}

export default Solution;
