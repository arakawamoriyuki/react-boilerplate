import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
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
      <Typography variant="display3" gutterBottom>
        lets me see.
      </Typography>
    </div>

  );
};

App.propTypes = {
  classes: PropTypes.shape().isRequired,
};

App.defaultProp = {
  classes: {},
};

export default hot(module)(withStyles(styles)(App));
