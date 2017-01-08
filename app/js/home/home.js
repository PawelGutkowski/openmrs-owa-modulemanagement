import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component.js';
import uicommons from 'openmrs-contrib-uicommons';

let homeModule = angular.module('home', [ uiRouter, 'openmrs-contrib-uicommons'])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            template: "<home modules='$resolve.modules'></home>",
            resolve: {
                modules : modules
            }
        })
    })
    .component('home', homeComponent);

function modules(openmrsRest) {
    return openmrsRest.listFull('module').then(function(response){
        return response.results;
    })
}

export default homeModule;
