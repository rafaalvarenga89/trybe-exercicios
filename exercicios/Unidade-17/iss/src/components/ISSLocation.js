import React from 'react';
import { Map, Marker } from 'pigeon-maps';
// import { connect } from 'react-redux';
// import { actionFetchISSLocation } from "../redux/actions";

import ISSContext from '../context/ISSContext';

class ISSLocation extends React.Component {
  componentDidMount() {
    // const { getISSLocation } = this.props;
    const { getISSLocation } = this.context;
    this.timer = setInterval(getISSLocation, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
    render() {
        // const latitude = -14.6279;
        // const longitude = -57.507;
        // const { latitude ,  longitude, isFething } = this.props;
        return (
          <ISSContext.Consumer>
            {(contextValue) => (
              <div>
                <Map height={ 300 } defaultCenter={ [0, 0] } defaultZoom={ 11 }>
                  <Marker width={ 50 } anchor={ [contextValue.latitude, contextValue.longitude] } />
                </Map>
                {contextValue.isFething && <span>Loading...</span>}
              </div>
            )}
          </ISSContext.Consumer>
        );
      }}

// const mapStateToProps = (state) => ({
//     latitude: state.ISSLocation.latitude,
//     longitude: state.ISSLocation.longitude,
//     isFething: state.ISSLocation.isFething,
// })

// const mapDispatchToProps = (dispatch) => ({
//   getISSLocation: () => dispatch(actionFetchISSLocation()),
// })

ISSLocation.contextType = ISSContext;

export default ISSLocation;
