'use strict';

import UserController from './user-controller';

export default class UserComponent implements ng.IComponentOptions {
  public controller: any;
  public templateUrl: string;
  public bindings: any;

  constructor() {
    this.bindings = {};
    this.controller = UserController;
    this.templateUrl = '/src/app.server/user/user.html';
  }
}


