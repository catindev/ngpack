import styles from './two.css';

class Ctrl {
    constructor() {
        this.styles = styles;
    }
}

const two = () => {
    let directive = {
    	scope: {},
        restrict: 'E',
        template: `<button ng-class="two.styles.button">{{two.title}}</button>`,
        controller: Ctrl,
        controllerAs: 'two',
        bindToController: {
        	title: '@'
        }
    };
    return directive;
};

export default two;
