import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {
  render() {
    console.log(this.props);
    const { selectedMovie, selectedCategory} = this.props;
    return (
      <div>
        <h1>
          {selectedMovie.title}
        </h1>
        <h3>
          {selectedCategory.name}
          {' '}
          -
          {' '}
          {selectedMovie.released}
        </h3>
        <section>
          <iframe
            title="trailer"
            width="420"
            height="315"
            src=""
          />
        </section>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
    selectedMovie: state.movie.selectedMovie,
    selectedCategory: state.movie.selectedCategory,
});


// mapStatetoProps: Transformando o estado para propriedade

// connect === { 
// <Connect>
//   <Player selectedMovie, selectedCategory />
// </Connect>
// }

// Conecta o componente Player ao meu estado global
export default connect(mapStatetoProps)(Player);