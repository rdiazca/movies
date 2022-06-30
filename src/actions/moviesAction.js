import {
  GET_CINEMA_LISTINGS,
  SET_URL_CINEMA,
  SET_URL_POPULAR,
  SET_URL_CHILDREN,
  SET_URL_SEARCH,
  SHOW_SEARCH,
  HIDE_SEARCH,
} from "../types";

export const getCinemaListings = (movies) => ({
  type: GET_CINEMA_LISTINGS,
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

export const showSearch = () => ({
  type: SHOW_SEARCH,
});

export const hideSearch = () => ({
  type: HIDE_SEARCH,
});
