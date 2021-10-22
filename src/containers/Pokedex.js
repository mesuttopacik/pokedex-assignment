import React, { useEffect, useState } from "react";
import {
  Box,
  createTheme,
  Grid,
  Switch,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { POKEMON_API_URL, IMAGE_API_URL } from "../config";
import PokemonCard from "../components/PokemonCard";
import { ThemeProvider } from "@material-ui/styles";
import ReactPaginate from "react-paginate";
import "../css/Pagination.css";
import Loading from "../components/Loading";

export default function Pokedex() {
  const [darkMode, setdarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const [pokemonData, setPokemonData] = useState(null);

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios
      .get(POKEMON_API_URL + "?limit=180")
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          const { results } = response.data;
          let newPokemonData = [];
          results.forEach((pokemon, index) => {
            index++;
            let pokemonObject = {
              id: index,
              url: IMAGE_API_URL + index + ".png",
              name: pokemon.name,
            };
            newPokemonData.push(pokemonObject);
          });
          const pokemonPerPage = 18;
          const pageVisited = pageNumber * pokemonPerPage;

          setPokemonData(
            newPokemonData.slice(pageVisited, pageVisited + pokemonPerPage)
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageNumber]);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ padding: "52px 10px 0px 10px" }}>
        <Box style={{ textAlign: "right" }}>
          <Switch
            checked={darkMode}
            onChange={() => setdarkMode(!darkMode)}
          ></Switch>
        </Box>
        <Box>
          {pokemonData ? (
            <Grid container spacing={2}>
              {pokemonData.map((pokemon) => {
                return (
                  <PokemonCard
                    pokemon={pokemon}
                    image={pokemon.url}
                    key={pokemon.id}
                  />
                );
              })}
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={10}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </Grid>
          ) : (
            <Loading />
          )}
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
