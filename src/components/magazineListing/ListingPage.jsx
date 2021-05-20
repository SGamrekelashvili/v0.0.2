import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useLocation } from "react-router-dom";
import Listing from "./units/Listing";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ListingPage() {
  const classes = useStyles();
  const location = useLocation();
  useEffect(() => {
    console.log(location.state.category);
  }, [location]);
  console.log(location);
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={4} md={3}>
            <Paper className={classes.paper}>CategoryesNav </Paper>
          </Grid>
          <Grid item xs={8} md={9}>
            <Paper className={classes.paper}>
              <Listing />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
