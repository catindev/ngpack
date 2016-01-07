import { inject, tree } from 'state';
import { addButton } from './actions';
import styles from './one.styles';

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
    onTextValue(txtvalue){
        console.warn(txtvalue);
    }
}

export default Controller;
