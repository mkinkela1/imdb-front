import React, {FunctionComponent} from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

interface ImdbResultProps {}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ImdbResult: FunctionComponent<ImdbResultProps> = () => {

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>ImdbResult</Paper>
  );
}

export default ImdbResult;