import { Typography, IconButton, Button, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { grey } from "@mui/material/colors";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ReplayIcon from "@mui/icons-material/Replay";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const MovieDetails = () => {
  const greyColor = grey[200];

  const location = useLocation();

  const imageEndpoint = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  const { title, poster_path, overview, popularity, vote_count } =
    location.state.movie;
  const urlImage = imageEndpoint + poster_path;
  console.log(location);
  return (
    <Box>
      <Typography
        variant="h4"
        color="textSecondary"
        sx={{ marginBottom: "2rem" }}
      >
        Vans shoes
      </Typography>
      <img
        src={urlImage}
        alt={title}
        height="400"
        width="500"
        style={{ float: "left" }}
      />

      {/* <Box
        sx={{
          flexDirection: "row",
          float: "right",
        }}
      >
        {Array(4)
          .fill()
          .map((_, i) => (
            <p key={i}>&#11088;</p>
          ))}
      </Box> */}
      <Box
        sx={{
          display: "block",
          height: 400,
          marginLeft: "auto",
          marginRight: "5rem",
          width: 450,
        }}
      >
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
      </Box>
      <Box
        sx={{
          backgroundColor: greyColor,
          display: "block",
          float: "right",
          height: 400,
          marginLeft: "auto",
          marginRight: "5rem",
          width: 450,
        }}
      >
        <Typography variant="h6" color="textSecondary">
          <NotificationsIcon /> Quedan sólo 9 unidades
        </Typography>

        <Typography variant="h6" color="textSecondary">
          <EventAvailableIcon /> Recíbelo el 28 de junio · Si compras hoy ·
          Eligiendo envío urgente a domicio · En península salvo festivo en
          destino · Puedes elegir otra fecha y horario de entrega
        </Typography>

        <Typography variant="h6" color="textSecondary">
          <CardGiftcardIcon /> ENVOLTORIO Elige tu papel de regalo al final del
          carro y lo envolveremos por ti.
        </Typography>

        <Typography variant="h6" color="textSecondary">
          <ReplayIcon /> Devolucione durante 30 dias
        </Typography>
      </Box>
    </Box>
  );
};

export default MovieDetails;
