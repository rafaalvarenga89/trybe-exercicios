import React, { Component } from "react";
import PropTypes from 'prop-types';

class MusicCard extends Component {
    render() {
        const { music } = this.props;
        console.log(this.props);
        return (
            <>
            <section>
            <h2>{music.name}</h2>
            <p>Gênero: {music.genre}</p>
            <p>País: {music.country}</p>
            <img src={music.image} alt='' width='30%'/>
            <h3>Melhores músicas</h3>
            <ul>
              {music.bestSingles.map((single) => <li key={single}>{single}</li>)}

            </ul>
            
          </section>
          
          </>
        )
    }
}


MusicCard.propTypes = {
  music: PropTypes.shape ({
    name: PropTypes.string,
    genre: PropTypes.string,
    image: PropTypes.string,
    bestSingles: PropTypes.arrayOf(PropTypes.string),
  })
}

export default MusicCard;