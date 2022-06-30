import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const { title, poster_path } = movie;
  const imageEndpoint = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  const urlImage = imageEndpoint + poster_path;
  return (
    <Link to="/movieDetails" state={{ movie }} className="textDecoration">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="450"
          width="450"
          image={urlImage}
          alt={title}
        />
        <CardContent>
          <Typography variant="h6" color="text.primary">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Movie;
