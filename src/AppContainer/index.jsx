import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../config/muiTheme';
import '../static/main.css';

const AppContainer = (props) => {
  const { children } = props;

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

// export default hot(module)(AppContainer);
export default AppContainer;
