import angular from 'angular';
import router from 'angular-route';

import 'common/common.css';
import login from 'components/login';

angular.module('app', [
  router,
  login
]).config([
  '$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {template: '<login-page></login-page>'})
        .otherwise({redirectTo: '/'});
  }
]);

const bootstrap = () => angular.bootstrap(document, ['app']);

document.addEventListener('DOMContentLoaded', bootstrap);
