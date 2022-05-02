import React from 'react';
import { connect } from 'react-redux';
import { actionSelectedMovie } from '../store/actions';


class Sidebar extends React.Component {
  render() {
    console.log(this.props);
    const { categories, selectMovie } = this.props; 
    return (
      <aside>
        {categories.map((category) => (
          <div key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {category.movies.map((movie) => (
                <li key = { movie.id }>
                {movie.title}
                {' '}
                was released in
                {' '}
                {movie.released}
                <button
                  type="button"
                  onClick={ () => selectMovie(movie, category) }
                >
                  Select
                </button>
              </li>            
            ))}
          </ul>
        </div>  
   ))}
      </aside>
    );
  }
}

const mapStatetoProps = (state) => ({
    categories: state.movie.categories,
  })

// Dispara a action
const mapDispatchToProps = (dispatch) => ({
    selectMovie: (movie, category) => dispatch(actionSelectedMovie(movie, category)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(Sidebar);