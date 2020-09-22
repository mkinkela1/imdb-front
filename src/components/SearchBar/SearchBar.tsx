import React, {FunctionComponent} from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {Button, TextField} from "@material-ui/core";

interface SearchBarProps {}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'center'
  },
}));

const SearchBar: FunctionComponent<SearchBarProps> = () => {

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <TextField
        style={{ margin: 8, width: '50%' }}
        placeholder="Movie title"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" color="primary">
        Search
      </Button>
    </Paper>
  );
}

export default SearchBar;