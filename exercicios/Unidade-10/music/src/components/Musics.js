import React, { Component } from 'react';
import MusicCard from './MusicCard';


class Musics extends Component {

    render() {
        const { musics } = this.props;
        return(
            <>
            <article>
          
            {musics.map((artist) => {
              return <MusicCard music={artist} key={artist.id}/>
            })};
  
          </article>
            </>
        )
    }
}

export default Musics;