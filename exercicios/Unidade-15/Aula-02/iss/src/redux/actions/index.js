import getCurrentISSLoction from "../../services/issAPI";
export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const REQUEST_ISS_LOCATION_SUCCESS = 'REQUEST_ISS_LOCATION_SUCCESS';



const requestISSLocation = () => ({
    type: REQUEST_ISS_LOCATION,
});

const requestISSLocationSuccess = (latitude, longitude) => ({
    type: REQUEST_ISS_LOCATION_SUCCESS,
    latitude,
    longitude,
});

const fetchISSLocation = async (dispatch) => {
    dispatch(requestISSLocation());
    const issResponse = await getCurrentISSLoction();
    console.log(issResponse);
    const {iss_position: {latitude, longitude } } = issResponse;
    dispatch(requestISSLocationSuccess(latitude,longitude));
}

 export const actionFetchISSLocation = () => {
    console.log('');
    return fetchISSLocation;
}