import React, {FunctionComponent, useContext} from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {ImdbContext} from "../../contexts/ImdbContext";

interface ImdbResultProps {}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ImdbResult: FunctionComponent<ImdbResultProps> = () => {

  const { movie } = useContext(ImdbContext);

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>{movie?.Title}</Paper>
  );
}

export default ImdbResult;