import React from "react";




class Button extends React.Component {

    // Cria os botões que seleciona o gênero musical
    createButtonCountry = () => {
        const { 
            buttonCountry, 
            setArtistCountryOnClick, 
        } = this.props;
        console.log(this.props.buttonCountry);
        const artistCountry = new Set(buttonCountry.map(({country}) => country));
        console.log(artistCountry);
        const artistCountryArray = Array.from(artistCountry);
        return artistCountryArray.map((country) => (<button key={ country } onClick={setArtistCountryOnClick} >{country}</button>))
    }

  

    render () {
        const { 
            buttonProp,
            buttonNext, 
            nextArtistOnClick, 
            setArtistCountryOnClick 
        } = this.props;

        return (
            <>

            {/* Botão que seleciona todo o Array */}
           <button 
           onClick={setArtistCountryOnClick}
           >
            {buttonProp}
            </button>
            {/* Botão que seleciona um tipo de gênero do Array */}
            { this.createButtonCountry() }
            <button onClick={nextArtistOnClick}>{buttonNext}</button>
           </>
        )
    }
}



export default Button;