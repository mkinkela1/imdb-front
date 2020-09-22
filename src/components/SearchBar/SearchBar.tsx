import React, {FunctionComponent, useContext, useState} from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {Button, TextField} from "@material-ui/core";
import {ImdbContext} from "../../contexts/ImdbContext";

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

  const { getMovie } = useContext(ImdbContext);
  const [title, setTitle] = useState<string> ('');

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <TextField
        style={{ margin: 8, width: '50%' }}
        placeholder="Movie title"
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => getMovie ? getMovie(title) : undefined}
      >
        Search
      </Button>
    </Paper>
  );
}

export default SearchBar;