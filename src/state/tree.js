import Baobab from 'baobab';
const config = { maxHistory: 10, validate: validation };
const initialState = { buttons: [] };

function validation(previousState, newState, affectedPaths) {
	console.groupCollapsed('validator info');
	console.log('previousState', previousState);
	console.log('newState',newState);
	console.log('affectedPaths', affectedPaths);
	console.groupEnd();
	//if (!valid) return new Error('Invalid tree because of reasons.');
}

const tree = new Baobab(initialState, config);


export default tree;
