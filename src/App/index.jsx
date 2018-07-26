import React from 'react';
import { hot } from 'react-hot-loader';
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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  handleButton() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }


  render() {
    const { classes } = this.props;
    const { count } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="display3" gutterBottom>
        Hello World!
        </Typography>
        <Typography variant="display2" gutterBottom>
          {`count: ${count}`}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => this.handleButton()}>
        push me
        </Button>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.shape().isRequired,
};

App.defaultProp = {
  classes: {},
};

export default hot(module)(withStyles(styles)(App));
