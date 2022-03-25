import React from "react";



class ArtistCard extends React.Component {
    render () {
        const { artistcard } = this.props;
        // console.log(this.props.artistcard);
        return (
         <>
          {/* Elemento filho de Artists.js */}
          <h2>{artistcard.name}</h2>
          <p>{artistcard.genre}</p>
          <h3>{artistcard.country}</h3>
          <img src={artistcard.image} alt={artistcard.name} width="30%" />
          <h3>Melhores músicas</h3>
          <ul>
              {artistcard.bestSingles.map((single) => <li key={single}>{single}</li>)}
          </ul>
          
         </> 
        )
    }
}

export default ArtistCard;