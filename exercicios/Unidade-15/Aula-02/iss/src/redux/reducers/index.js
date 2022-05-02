import { combineReducers } from "redux";
import ISSReducer from "./ISSReducer";

const rootReducer = combineReducers({ISSLocation: ISSReducer})

export default rootReducer;