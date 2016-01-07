//	vendors
import './common/mimic.css';
import angular from 'angular';
import router from 'angular-route';
import 'angular-component';

// pages
import home from 'components/home';

//	common
import routerConfig from 'common/routes.config';

angular
	.module('app', [ router, home ])
	.config(routerConfig);

const bootstrap = () => angular.bootstrap(document, [ 'app' ]);

document.addEventListener('DOMContentLoaded', bootstrap);
