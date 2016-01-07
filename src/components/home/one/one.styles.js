import {create} from 'jss';
let jss = create();

import { baseMargin } from 'common/styles/buttons';

let sheet = jss.createStyleSheet({
	button: {
		margin: baseMargin,
		border: '3px solid red'
	}
}).attach();

export default sheet.classes;
