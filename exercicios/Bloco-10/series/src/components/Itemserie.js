import React from "react";

class Itemserie extends React.Component {
    render() {
      
        const data = this.props.data;
        console.table(data);
        
        return data.map((serie) => {
        return (
        <section>
          <h2>{serie.name}</h2>
          <p>
              ({serie.genre})
          <span>{'⭐'.repeat(serie.nota) }</span>
          </p>
        
          <img src={serie.image} alt=""></img>
          <h3>Personagens</h3>
          <ul>
            {serie.characters.map((character) => (
                <li>{character}</li>
            ))}
          </ul>
        </section>
        );
    });
    }
}

export default Itemserie;