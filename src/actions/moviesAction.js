import clientAxios from "../configAxios/axios";

import {
  GET_CINEMA_LISTINGS,
  GET_MOVIES_CHILDREN,
  GET_POPULAR_MOVIES,
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
