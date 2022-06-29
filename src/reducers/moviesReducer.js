import {
  GET_CINEMA_LISTINGS,
  GET_POPULAR_MOVIES,
  GET_MOVIES_CHILDREN,
  SET_URL_CINEMA,
  SET_URL_POPULAR,
  SET_URL_CHILDREN,
  SET_URL_SEARCH,
} from "../types";

const initialState = {
  movies: [],
  error: null,
  loading: false,
  movie: {},
  url: "/trending/movie/week?api_key=45bf6592c14a965b33549f4cc7e6c664",
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

    case SET_URL_CINEMA:
      return {
        ...state,
        error: null,
        url: "/trending/movie/week?api_key=45bf6592c14a965b33549f4cc7e6c664",
      };

    case SET_URL_POPULAR:
      return {
        ...state,
        error: null,
        url: "/discover/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&sort_by=popularity.asc&include_video=false&page=1",
      };

    case SET_URL_CHILDREN:
      return {
        ...state,
        error: null,
        url: "/discover/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&sort_by=popularity.asc&include_adult=false&with_genres=28",
      };

    case SET_URL_SEARCH:
      return {
        ...state,
        error: null,
        url: `/search/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&query=${action.payload}&page=1`,
      };

    default:
      return state;
  }
}
