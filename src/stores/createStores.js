import { RouterStore } from 'mobx-react-router';
import AppStore from './AppStore';

export default () => ({
  routing: new RouterStore(),
  app: new AppStore(),
});
