import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './App.css';
import {ImdbResult, PastSearches, SearchBar} from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1200,
    margin: '0 auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
        <Grid item xs={6}>
          <ImdbResult />
        </Grid>
        <Grid item xs={6}>
          <PastSearches />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
