import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'fit-content',
    color: theme.palette.text.secondary,
    '& hr': {
      margin: theme.spacing(0, 0.1),
      
      
    },
  },
}));

export default function VerticalDividers() {
  const classes = useStyles();

  return (
    <div className="dividerDiv">
      <Grid container alignItems="center" className={classes.root}>
        <p><a className="verticalText" href="mailto:barthamonica@gmail.com">barthamonica@gmail.com</a></p>
          <Divider orientation="vertical" flexItem />
       
      </Grid>
    </div>
  );
}