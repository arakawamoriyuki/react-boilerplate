import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import App from './App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./AppContainer', () => {
    const NextRootContainer = require('./App/index.jsx').default;
    render(NextRootContainer);
  });
}
