import React, {FunctionComponent, useContext} from "react";
import {
  Paper,
  Table,
  TableRow,
  TableCell,
  List, ListItemText, ListItem, Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ImdbContext} from "../../contexts/ImdbContext";

interface ImdbResultProps {}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  listItem: {
    borderBottom: '1px solid #cdcdcd',
    '&:last-child': {
      borderBottom: 'none'
    }
  }
}));

const ImdbResult: FunctionComponent<ImdbResultProps> = () => {

  const { movie } = useContext(ImdbContext);

  const classes = useStyles();
  const removeKeys = ['Poster', 'Response', 'DateRequested', 'Ratings']

  const generateTable = () => {
    if (movie)
      return Object.keys(movie).filter(key => !removeKeys.includes(key)).map(key => (
        <TableRow>
          <TableCell>{key}</TableCell>
          <TableCell>
            {
              // @ts-ignore
              movie[key]
            }
          </TableCell>
        </TableRow>
      ));
  }

  return (
    <Paper className={classes.paper}>
      {!movie ?
        '' :
        <>
          <img src={movie.Poster} alt="Movie poster" />
          <Table>
            {generateTable()}
          </Table>
          <Typography variant="subtitle1">
            Ratings
          </Typography>
          <List>
            {!movie.Ratings?.length ?
              '' :
              movie.Ratings.map(({Source, Value}, idx: number) => (
                <ListItem key={idx} className={classes.listItem}>
                  <ListItemText primary={Source} secondary={Value} />
                </ListItem>
              ))
            }
          </List>
        </>
      }
    </Paper>
  );
}

export default ImdbResult;