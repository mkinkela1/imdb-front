import React, {FunctionComponent} from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

interface SearchBarProps {}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const SearchBar: FunctionComponent<SearchBarProps> = () => {

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>SearchBar</Paper>
  );
}

export default SearchBar;