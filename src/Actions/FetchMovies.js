import {
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_STARTED
} from "./types";
import axios from "axios";
import {TMDBConstants} from "../Constants";

export default (searchQuery) => {
    return dispatch => {
        dispatch(fetchMoviesStarted(searchQuery));

        const url = (searchQuery.length === 0 || !searchQuery.trim()) ?
            `${TMDBConstants.API_BASE}discover/movie?api_key=${TMDBConstants.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`:
            `${TMDBConstants.API_BASE}search/movie?api_key=${TMDBConstants.API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`;

        axios.get(url)
            .then(res => {
                dispatch(fetchMoviesSuccess(searchQuery, res.data.results));
            })
            .catch(err => {
                dispatch(fetchMoviesFailure(searchQuery, err.message));
            });
    }
};

const fetchMoviesSuccess = (searchQuery, movies) => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: {
        searchQuery: searchQuery,
        movies: movies
    }
});

const fetchMoviesStarted = searchQuery => ({
    type: FETCH_MOVIES_STARTED,
    payload: {
        searchQuery
    }
});

const fetchMoviesFailure = (searchQuery, error) => ({
    type: FETCH_MOVIES_FAILURE,
    payload: {
        searchQuery: searchQuery,
        error: error
    }
});