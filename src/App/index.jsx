import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    maxWidth: 800,
  },
};

const App = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="display4" gutterBottom>
      Hello World!
      </Typography>
      <Button variant="contained" color="primary">
      push me
      </Button>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(App);
