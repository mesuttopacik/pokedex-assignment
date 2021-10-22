import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "#f1ebff",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    cursor: 'pointer',
    color: '#52446f'
  }
}));

export default function AppNavigator() {
  const classes = useStyles();

  return (
    <AppBar className={classes.AppBar} position="fixed">
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography className={classes.title} variant="h6">Pokedex</Typography>
        </Link>
        <Link to="/caughtlist" className={classes.link}>
          <Typography className={classes.title} variant="h6" style={{ marginLeft: 15 }}>List of caught pokemons</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
