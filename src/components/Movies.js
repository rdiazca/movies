import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Movie from "./Movie";
import { getCinemaListings } from "../actions/moviesAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import clientAxios from "../configAxios/axios";

const Movies = () => {
  const dispatch = useDispatch();
  const getCinema = (movies) => dispatch(getCinemaListings(movies));
  const { url } = useSelector((state) => state.movies);

  const getMovies = async (url) => {
    await clientAxios
      .get(url)
      .then((res) => {
        console.log(res);
        getCinema(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovies(url);
  }, [url]);

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
};

export default Movies;
