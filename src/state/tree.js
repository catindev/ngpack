import Baobab from 'baobab';
import initial from './initial';

function logger(previousState, newState, affectedPaths) {
	if (NODE_ENV === 'development') {
		console.groupCollapsed('State history:');
		console.log('Previous', previousState);
		console.log('Now', newState);
		console.log('Affected', affectedPaths);
		console.groupEnd();
	}
}

const config = {
	maxHistory: 10,
	validate: logger
};

const tree = new Baobab(initial, config);

export default tree;
