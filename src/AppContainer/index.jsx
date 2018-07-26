import React from 'react';
import PropTypes from 'prop-types';

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

// export default hot(module)(AppContainer);
export default AppContainer;
