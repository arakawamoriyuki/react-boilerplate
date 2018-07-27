import { observable, action } from 'mobx';

export default class AppStore {
  @observable count = 0;

  constructor() {
    this.init();
  }

  @action
  addCount(n) {
    this.count = this.count + n;
  }

  @action
  init() {
    this.count = 0;
  }
}
