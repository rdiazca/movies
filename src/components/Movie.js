//import * as React from 'react';

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { useState } from "react";

function Movie({ movie }) {
  const { title, backdrop_path } = movie;
  const imageEndpoint = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  const urlImage = imageEndpoint + backdrop_path;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="250" image={urlImage} alt={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Movie;