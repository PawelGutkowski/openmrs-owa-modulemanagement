import angular from 'angular';
import uiRouter from 'angular-ui-router';
import moduleViewComponent from './module-view.component.js';
import uicommons from 'openmrs-contrib-uicommons';

let moduleViewModule = angular.module('moduleview', [ uiRouter, 'openmrs-contrib-uicommons'])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('module', {
            url: '/module/:UUID',
            template: "<moduleview module='$resolve.module'/>",
            resolve: {
                module: module
            }
        })
    })
    .component('moduleview', moduleViewComponent);

function module(openmrsRest, $stateParams) {
    return openmrsRest.getFull('module', {uuid: $stateParams.UUID}).then(function(response){
        return response;
    })
}

export default moduleViewModule;
