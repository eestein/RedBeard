'use strict';

import $ from 'jquery';
import {User} from './user';

interface IUserController {
  user: User;
  loadUser(): void;
}

export default class UserController implements IUserController {
  public user: User;
  public localResource: ng.resource.IResourceService;

  static $inject = [
    "$resource"
  ];

  constructor($resource: ng.resource.IResourceService) {
    this.localResource = $resource;
    this.loadUser();
  }

  loadUser(): void {
    var curController: UserController = this;

    this.localResource<User>('http://localhost:5000/api/users/1', {
      'get': { method: 'GET' }
    }).get().$promise.then(function(response: User) {
      curController.user = response;
    });
  }
}
