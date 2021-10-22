import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, withStyles, Grid } from "@material-ui/core";
import PokemonCard from "../components/PokemonCard";

const styles = (theme) => ({
  pokedexContainer: {
    height: "100vh",
    backgroundColor: "rgb(68, 68, 68)",
    paddingTop: 80,
    textAlign: "center"
  },
});

export class CaughtList extends Component {
  render() {
    const { classes, caughtList } = this.props;
    return (
      <Box>
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {caughtList.map((pokemon) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                key={pokemon.id}
                image={pokemon.sprites.front_default}
              />
            );
          })}
        </Grid>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  caughtList: state.caughtList,
});

const mapDispatchToProps = (dispatch) => ({});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(CaughtList)
);
