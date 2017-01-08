import template from './module-view.html';
import controller from './module-view.controller.js';

let moduleViewComponent = {
    restrict: 'E',
    bindings: {
        module : "<"
    },
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default moduleViewComponent;
