import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";

import { useState } from "react";

import {
  setUrlCinema,
  setUrlPopular,
  setUrlChildren,
  setUrlSearch,
} from "../actions/moviesAction";

import { useDispatch } from "react-redux";

const MenuMain = () => {
  const [search, setSearch] = useState("");
  const distpacth = useDispatch();
  const cinemaAction = () => distpacth(setUrlCinema());
  const popularAction = () => distpacth(setUrlPopular());
  const childrenAction = () => distpacth(setUrlChildren());
  const searchAction = (search) => distpacth(setUrlSearch(search));

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

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <Box sx={{ marginBottom: "7rem" }}>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                onClick={handleSetUrlCinema}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Cartelera
              </Button>
              <Button
                onClick={handleSetUrlPopular}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Populares
              </Button>
              <Button
                onClick={handleSetUrlChildren}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Populares infantiles
              </Button>
            </Box>
            {/* <Search> */}
            {/* <StyledInputBase
              placeholder="Buscar…"
              inputProps={{ "aria-label": "search" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            /> */}

            <TextField
              variant="filled"
              placeholder="Buscar…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
            {/* </Search> */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default MenuMain;
