import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddCommunity from './AddCommunity';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#000000', 
  },
  title: {
    flexGrow: 1,
  },
}));

function HeaderBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          DevForum
        </Typography>
        <AddCommunity 
          button
        />
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;