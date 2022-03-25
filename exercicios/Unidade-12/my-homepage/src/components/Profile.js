import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    const { phrase } = this.props.match.params;
    return (

      <>
      <h1>{phrase}: {this.props.name}</h1>
      <Link to="/">Voltar à Home</Link>
      </>
    )
  }
}

export default Profile;