// pages
import home from 'components/home';

//	common
import routerConfig from 'common/routes.config';

angular
	.module('app', [
		'ngMaterial',
		'ngSanitize',
		'ngRoute',
		 home
	).config(routerConfig);

const bootstrap = () => angular.bootstrap(document, [ 'app' ]);

document.addEventListener('DOMContentLoaded', bootstrap);
