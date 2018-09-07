import React from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    maxWidth: 800,
  },
  button: {
    margin: 8,
    color: 'white',
  },
};

@inject('app')
@observer
class App extends React.Component {
  static propTypes = {
    app: PropTypes.shape().isRequired,
    classes: PropTypes.shape().isRequired,
  };

  handleButton(n) {
    const { app } = this.props;
    app.addCount(n);
  }

  handleResetButton() {
    const { app } = this.props;
    app.init();
  }

  render() {
    const { classes, app } = this.props;
    const { count } = app;

    return (
      <div className={classes.root}>
        <div>
          <Typography variant="display3" gutterBottom>
            Counter
          </Typography>
          <Typography variant="display2" gutterBottom>
            {`count: ${count}`}
          </Typography>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleButton(1)}>
        +
          </Button>
          <Button variant="contained" color="secondary" className={classes.button} onClick={() => this.handleButton(-1)}>
        -
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleResetButton()}>
            Reset
          </Button>

          <Typography variant="display5" gutterBottom>
            <Link to="/readme">
              Readme
            </Link>
          </Typography>
        </div>
      </div>
    );
  }
}

export default hot(module)(withStyles(styles)(App));
