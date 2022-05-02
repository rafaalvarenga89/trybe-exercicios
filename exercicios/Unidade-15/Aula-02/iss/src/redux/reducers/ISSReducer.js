import { REQUEST_ISS_LOCATION, REQUEST_ISS_LOCATION_SUCCESS } from "../actions";

const INITIAL_STATE = {
        latitude: -14.6279,
        longitude: -57.507,
        isFething: false,
      }
 
  const ISSReducer = (state = INITIAL_STATE, action) => {
      switch(action.type) {
      case REQUEST_ISS_LOCATION:
        return {...state, isFething: true };
      case REQUEST_ISS_LOCATION_SUCCESS:
        return{
          ...state,
          latitude: parseFloat(action.latitude),
          longitude: parseFloat(action.longitude),
          isFething: false,
        }
         default:
             return state;
     }
  }

export default ISSReducer;
