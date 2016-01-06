import Baobab from 'baobab';
const config = { maxHistory: 10 };
const initialState = { buttons: [] };
const tree = new Baobab(initialState, config);

export default tree;
