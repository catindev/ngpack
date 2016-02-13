import 'common/styles/theme.css';
import 'angular-material/angular-material.min.css';

//	subcomponents
import one from 'components/home/one';
import two from 'components/home/two';

// common
import routesConfig from './routes.config';
import home from './home.component';

// module
export default angular
	.module('app.home', [ 'ngAnimate', 'ngSanitize', 'ngRoute' ])
	.config(routesConfig)
	.component('home', home)
	.component('oneBtn', one)
	.directive('twoBtn', two)
	.name;
