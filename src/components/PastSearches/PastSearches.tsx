import React, {FunctionComponent, useContext} from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemText
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

  const { pastSearches } = useContext(ImdbContext);

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <List>
        {!pastSearches?.length ?
          '' :
          pastSearches.map(({Title, DateRequested}, idx: number) => (
            <ListItem key={idx} className={classes.listItem}>
              <ListItemText primary={Title} secondary={DateRequested?.toDateString()} />
            </ListItem>
          ))
        }
      </List>
    </Paper>
  );
}

export default PastSearches;