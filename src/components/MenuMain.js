import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";

import { useState } from "react";

import {
  setUrlCinema,
  setUrlPopular,
  setUrlChildren,
  setUrlSearch,
} from "../actions/moviesAction";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MenuMain = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const cinemaAction = () => dispatch(setUrlCinema());
  const popularAction = () => dispatch(setUrlPopular());
  const childrenAction = () => dispatch(setUrlChildren());
  const searchAction = (search) => dispatch(setUrlSearch(search));

  const { showSearch } = useSelector((state) => state.movies);

  const handleSetUrlCinema = () => {
    cinemaAction();
  };

  const handleSetUrlPopular = () => {
    popularAction();
  };

  const handleSetUrlChildren = () => {
    childrenAction();
  };

  const handleSearch = () => {
    searchAction(search);
  };

  return (
    <Box className="menuBox">
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box className="menuBox2">
              <Link to="/" className="textDecoration">
                <Button
                  onClick={handleSetUrlCinema}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Cartelera
                </Button>
              </Link>
              <Link to="/" className="textDecoration">
                <Button
                  onClick={handleSetUrlPopular}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Populares
                </Button>
              </Link>
              <Link to="/" className="textDecoration">
                <Button
                  onClick={handleSetUrlChildren}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Populares infantiles
                </Button>
              </Link>
            </Box>

            {showSearch ? (
              <Box>
                <TextField
                  variant="filled"
                  placeholder="Buscar…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </Box>
            ) : null}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default MenuMain;
