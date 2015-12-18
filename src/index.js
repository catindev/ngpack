import angular from 'angular';

angular
	.module( 'app', [] );

document.addEventListener( 'DOMContentLoaded', () => {
	if(NODE_ENV === 'development') console.info('starting app');
	angular.bootstrap(document, ['app']);
});	