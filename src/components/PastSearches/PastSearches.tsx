import React, {FunctionComponent, useContext} from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemText, Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ImdbContext} from "../../contexts/ImdbContext";

interface PastSearchesProps {}

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

const PastSearches: FunctionComponent<PastSearchesProps> = () => {

  const { pastSearches, getMovie } = useContext(ImdbContext);

  const classes = useStyles();

  const handleClick = (title: string | undefined) => {
    if (getMovie && title)
      getMovie(title);

    return;
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="subtitle1">
        Past searches
      </Typography>
      <List>
        {!pastSearches?.length ?
          '' :
          pastSearches.map(({Title, DateRequested}, idx: number) => (
            <ListItem key={idx} className={classes.listItem}>
              <ListItemText
                primary={
                  <div
                    style={{cursor: 'pointer', fontWeight: 'bold'}}
                    onClick={(e) => handleClick(Title)}>{Title}
                  </div>
                }
                secondary={DateRequested?.toDateString()}
              />
            </ListItem>
          ))
        }
      </List>
    </Paper>
  );
}

export default PastSearches;