import {
  GET_CINEMA_LISTINGS,
  GET_MOVIES_CHILDREN,
  GET_POPULAR_MOVIES,
  SET_URL_CINEMA,
  SET_URL_POPULAR,
  SET_URL_CHILDREN,
  SET_URL_SEARCH,
} from "../types";

// export function getCinemaListingsAction() {
//   return (dispatch) => {
//     clientAxios
//       .get("/trending/movie/week?api_key=45bf6592c14a965b33549f4cc7e6c664")
//       .then((res) => {
//         console.log(res);
//         dispatch(getCinemaListings(res.data.results));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// }

export const getCinemaListings = (movies) => ({
  type: GET_CINEMA_LISTINGS,
  payload: movies,
});

export const getMoviesChildren = (movies) => ({
  type: GET_MOVIES_CHILDREN,
  payload: movies,
});

export const getPopularMovies = (movies) => ({
  type: GET_POPULAR_MOVIES,
  payload: movies,
});

export const setUrlCinema = () => ({
  type: SET_URL_CINEMA,
});

export const setUrlPopular = () => ({
  type: SET_URL_POPULAR,
});

export const setUrlChildren = () => ({
  type: SET_URL_CHILDREN,
});

export const setUrlSearch = (search) => ({
  type: SET_URL_SEARCH,
  payload: search,
});
