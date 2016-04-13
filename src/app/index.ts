'use strict';

import appServer from '../app.server/index';

export default angular.module('app', [
  appServer.name
]);

angular.bootstrap(document.documentElement, ['app']);