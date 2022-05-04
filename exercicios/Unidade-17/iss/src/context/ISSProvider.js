import React from 'react';
import ISSContext from './ISSContext';
import getCurrentISSLocation from '../services/issAPI';


class ISSProvider extends React.Component {
  constructor(){
    super();
  
  this.state = {
    latitude: -14.6279,
    longitude: -57.507,
    isFething: false,
  };

}

getISSLocation = async () => {
  this.setState({isFething: true});

  const issResponse = await getCurrentISSLocation();
  const { iss_position: { latitude, longitude } } = issResponse;

  this.setState({
    latitude,
    longitude,
    isFething: false,
  })
}


  render() {
  return (
    <ISSContext.Provider value={ {...this.state, getISSLocation: this.getISSLocation } }>
        { this.props.children }
    </ISSContext.Provider>
  );
  }
}

export default ISSProvider;

//////
// Estado Global

// {
//   latitude: null,
//   longitude: null,
// }

// ACTION

// acessa a aplicação;
// buscar as informações da localização da ISS