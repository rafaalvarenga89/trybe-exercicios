import React from 'react';
import { Map, Marker } from 'pigeon-maps';
import { connect } from 'react-redux';
import { actionFetchISSLocation } from "../redux/actions";

class ISSLocation extends React.Component {
  componentDidMount() {
    const { getISSLocation } = this.props;
    this.timer = setInterval(getISSLocation, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
    render() {
        // const latitude = -14.6279;
        // const longitude = -57.507;
        const { latitude ,  longitude, isFething } = this.props;
        return (
          <div>
            <Map height={ 300 } defaultCenter={ [0, 0] } defaultZoom={ 11 }>
              <Marker width={ 50 } anchor={ [latitude, longitude] } />
            </Map>
            {isFething && <span>Loading...</span>}
          </div>
        );
      }}

const mapStateToProps = (state) => ({
    latitude: state.ISSLocation.latitude,
    longitude: state.ISSLocation.longitude,
    isFething: state.ISSLocation.isFething,
})

const mapDispatchToProps = (dispatch) => ({
  getISSLocation: () => dispatch(actionFetchISSLocation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);
