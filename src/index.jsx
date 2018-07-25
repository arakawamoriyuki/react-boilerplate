import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

const App = () => (
  <Button variant="contained" color="primary">
      Hello World
  </Button>
);

const render = () => {
  ReactDOM.render(
    <App />,
    document.querySelector('#root'),
  );
};

render();
