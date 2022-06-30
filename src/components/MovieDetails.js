import { Typography, Box } from "@mui/material";

import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideSearch } from "../actions/moviesAction";
import { useEffect } from "react";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const search = () => dispatch(hideSearch());

  const location = useLocation();

  useEffect(() => {
    search();
  }, []);

  const imageEndpoint = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  const { title, poster_path, overview, popularity, vote_count } =
    location.state.movie;
  const urlImage = imageEndpoint + poster_path;

  return (
    <Box className="mainBox">
      <Typography
        variant="h4"
        color="textSecondary"
        sx={{ marginBottom: "2rem", marginLeft: "10%" }}
      >
        {title}
      </Typography>
      <Box className="displayFlex">
        <Box className="marginLeft">
          <img src={urlImage} alt={title} height="450" width="350" />
        </Box>

        <Box className="secondaryBox">
          <Typography
            variant="h6"
            color="textPrimary"
            sx={{ marginBottom: "0.5rem" }}
          >
            Sinopsis
          </Typography>

          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ marginBottom: "0.5rem" }}
          >
            {overview}
          </Typography>

          <Typography
            variant="h6"
            color="textPrimary"
            sx={{ marginBottom: "0.5rem" }}
          >
            Popularidad
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ marginBottom: "0.5rem" }}
          >
            {popularity}
          </Typography>

          <Typography
            variant="h6"
            color="textPrimary"
            sx={{ marginBottom: "0.5rem" }}
          >
            Votos
          </Typography>

          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ marginBottom: "0.5rem" }}
          >
            {vote_count}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieDetails;
