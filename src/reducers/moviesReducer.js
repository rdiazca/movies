import {
  GET_CINEMA_LISTINGS,
  GET_MOVIES_CHILDREN,
  GET_POPULAR_MOVIES,
} from "../types";

const initialState = {
  movies: [],
  error: null,
  loading: false,
  movie: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CINEMA_LISTINGS:
      return {
        ...state,
        error: null,
        movies: action.payload,
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        error: null,
        movies: action.payload,
      };

    case GET_MOVIES_CHILDREN:
      return {
        ...state,
        error: null,
        movies: action.payload,
      };

    default:
      return state;
  }
}
