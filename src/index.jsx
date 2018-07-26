import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import App from './App';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.querySelector('#root'),
  );
};

render();
