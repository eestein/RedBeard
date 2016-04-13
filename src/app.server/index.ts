'use strict';

import 'angular';
import 'holderjs';
import 'angular-resource';
import UserController from './user/user-controller';
import UserComponent from './user/user-component';

export default angular.module('app.server', [
  'ngResource'
])
.controller('UserController', UserController)
.component('userComponent', new UserComponent());