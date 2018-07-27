import { observable } from 'mobx';

export default class AppStore {
  @observable count = '';

  constructor() {
    this.init();
  }

  init() {
    this.count = 0;
  }
}
