import 'common/styles/theme.css';

//	vendors
import angular from 'angular';
import router from 'angular-route';
import animate from 'angular-animate';
import sanitize from 'angular-sanitize';

//	subcomponents
import one from 'components/home/one';
import two from 'components/home/two';

// common
import routesConfig from './routes.config';
import home from './home.component';

const dropdownConfig = ($dropdownProvider) => {
	angular.extend($dropdownProvider.defaults, {
		html: true
	});
}

// module
export default angular
	.module('app.home', [ animate, sanitize, router ])
	.config(routesConfig)
	.config(dropdownConfig)
	.component('home', home)
	.component('oneBtn', one)
	.directive('twoBtn', two)
	.name;
