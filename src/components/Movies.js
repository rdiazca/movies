import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Movie from "./Movie";
import {
  getCinemaListings,
  getCinemaListingsAction,
} from "../actions/moviesAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import clientAxios from "../configAxios/axios";

function Movies() {
  const dispatch = useDispatch();
  const getCinema = (movies) => dispatch(getCinemaListings(movies));

  const getCinemaListingsAction = async () => {
    await clientAxios
      .get("/trending/movie/week?api_key=45bf6592c14a965b33549f4cc7e6c664")
      .then((res) => {
        console.log(res);
        getCinema(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCinemaListingsAction();
  }, []);

  const { movies } = useSelector((state) => state.movies);
  console.log(movies);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {movies?.map((movie) => {
          return (
            <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
              <Movie key={movie?.id} movie={movie} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Movies;
