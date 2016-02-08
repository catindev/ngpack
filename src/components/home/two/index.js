import styles from './two.css';
import template from './two.html';

class controller {
    constructor() {
        this.styles = styles;

        this.tabs = [
          {title:'Home', content: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.'},
          {title:'Profile', content: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.'},
          {title:'About', content: 'Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table readymade.', disabled: true}
        ];

        this.pushTab = function() {
          this.tabs.push({title: 'Contact', content: 'Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.'});
        };

        this.toggleThirdTab = function() {
          this.tabs[2].disabled = !this.tabs[2].disabled;
        };

        this.dropdown = [
           {text: '<i class="fa fa-download"></i>&nbsp;Another action', href: '#anotherAction', active: true},
           {text: '<i class="fa fa-globe"></i>&nbsp;Display an alert', click: '$alert("Holy guacamole!")'},
           {text: '<i class="fa fa-external-link"></i>&nbsp;External link', href: '/auth/facebook', target: '_self'},
           {divider: true},
           {text: 'Separated link', href: '#separatedLink'}
         ];

    }
}

const two = () => {
    let directive = {
    	scope: {},
        restrict: 'E',
        template,
        controller,
        controllerAs: 'two',
        bindToController: {
        	title: '@'
        }
    };
    return directive;
};

export default two;
