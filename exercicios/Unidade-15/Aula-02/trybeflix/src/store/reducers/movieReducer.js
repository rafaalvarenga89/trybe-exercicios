// Estado global

import categories from "../../data";
import { CHANGE_MOVIE } from "../actions";

const INITIAL_STATE = {
    categories,
    selectedMovie: categories[1].movies[0],
    selectedCategory: categories[1],
}

const movieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_MOVIE:
            return { ...state, selectedMovie: action.movie, selectedCategory: action.category } 
        default:
            return state;
    }
};

export default movieReducer;