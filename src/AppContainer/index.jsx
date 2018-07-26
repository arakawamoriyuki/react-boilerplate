import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

// TODO: bind thema and stores.
const AppContainer = (props) => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default hot(module)(AppContainer);
