// TODO: move to common
const checkSession = ($q) => {
	//	if (!authService.check() ) $location.path('/');
	return $q.when('session-resolved');
};

class controller {
	constructor(session){
		this.session = session;
	}
}

const routesConfig = $routeProvider => {
	let options = {
		template : '<home session="home.session"></home>',
		resolve: { session: checkSession },
		controller,
		controllerAs: 'home'
	};

	$routeProvider.when('/', options);
};

routesConfig.$inject = [ '$routeProvider' ];

export default routesConfig;
