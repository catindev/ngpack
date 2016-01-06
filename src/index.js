//	vendors
import './common/mimic.css';
import angular from 'angular';
import 'angular-component';

// components
import one from './components/one';
import two from './components/two';
import stateTree from './components/state/tree';

angular
	.module('app', [])
	.directive('twoBtn', two)
	.component('oneBtn', one)
	.run(() => {
		stateTree.on('update', function () {
			console.log(stateTree.getHistory());
		});
	});

document.addEventListener('DOMContentLoaded', () => {
	if(NODE_ENV === 'development')	console.info('bootstraping app...');
	angular.bootstrap(document, [ 'app' ]);
});
