import React from "react";
import ArtistCard from './ArtistCard';
import Button from "./Button";


class Artists extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            artistIndexState: 0,
            artistCountryState:"All",
            artistRenderState: [],
        }
        this.handleArtistOnClick = this.handleArtistOnClick.bind(this);
        this.setArtistCountry = this.setArtistCountry.bind(this);
    }

    setArtistCountry = ({ target }) => {
        this.setState({
            artistCountryState: target.innerHTML,
        })
        
    }

    handleArtistOnClick = () => {
        const { artistProp } = this.props;
        const {artistIndexState} = this.state;
        this.setState((prevState) => ({
           artistIndexState: prevState.artistIndexState +1, 
        }));
        if(artistIndexState === artistProp.length-1) {
            this.setState({ artistIndexState: 0 })
        }
        
    }

    

    render () {
        const { artistProp } = this.props;
        const { artistIndexState } = this.state;
        console.log(this.props.artistProp);
        return (
         <>
          {/* Elemento filho de App.js */}
          <h2>Artistas</h2>
          <div className="artistCardDiv">
            <ArtistCard key={artistProp.id} artistcard={artistProp[artistIndexState]} />
          </div>
          <Button 
          buttonProp={"All"}
          buttonCountry={ artistProp }
          buttonNext={"Next Button"}nextArtistOnClick={this.handleArtistOnClick}
          setArtistCountryOnClick={this.setArtistCountry}
          />
         </> 
        )
    }
}

export default Artists;