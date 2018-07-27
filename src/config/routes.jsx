import React from 'react';
import {
  Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import createStores from '../stores/createStores';

import LegacyApp from '../LegacyApp';
import App from '../App';
import Readme from '../Readme';

const stores = createStores();

const browserHistory = createBrowserHistory();
const syncHistory = syncHistoryWithStore(browserHistory, stores.routing);

syncHistory.listen((info, action) => {
  if (action === 'PUSH') {
    console.log(info, action);
  }
});

const routes = () => (
  <Provider {...stores}>
    <Router history={syncHistory}>
      <Switch>
        <Route path="/app" component={App} />
        <Route path="/legacy" component={LegacyApp} />
        <Route path="/readme" component={Readme} />
        <Route exact path="/" component={App} />
        <Redirect from="*" to="/notfound" />
      </Switch>
    </Router>
  </Provider>
);

export default routes;
