import {
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_STARTED
} from "../Actions/types";

const initialState = {
    loading: false,
    movies: [],
    error: null,
    searchQuery: ""
};

const MoviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIES_STARTED:
            return {
                ...state,
                loading: true,
                searchQuery: action.payload.searchQuery
            };
        case FETCH_MOVIES_SUCCESS:
            if(action.payload.searchQuery !== state.searchQuery) return state;

            return {
                ...state,
                loading: false,
                error: null,
                movies: action.payload.movies
            };
        case FETCH_MOVIES_FAILURE:
            if(action.payload.searchQuery !== state.searchQuery) return state;

            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default MoviesReducer;