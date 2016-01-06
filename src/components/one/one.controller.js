import { inject } from 'state';
import styles from './one.css';
import { addButton } from './actions';

class Controller {
    constructor() {
        this.styles = styles;
        inject('buttons', this);
    }
    newButton() {
        addButton({
            title: new Date().getTime()
        });
    }

}

export default Controller;
