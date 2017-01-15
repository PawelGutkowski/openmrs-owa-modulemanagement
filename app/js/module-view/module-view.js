import angular from 'angular';
import uiRouter from 'angular-ui-router';
import moduleViewController from './module-view.controller.js';
import uicommons from 'openmrs-contrib-uicommons';
import template from './module-view.html';

/**
 * Module view is not component because of problems with resolve.
 * Using simple controller is workaround
 */
let moduleViewModule = angular.module('moduleview', [ uiRouter, 'openmrs-contrib-uicommons'])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('module', {
            url: '/module/:UUID',
            template: template,
            controller: 'ModuleViewController',
            controllerAs: 'vm',
            resolve: {
                module: module
            }
        })
    })
    .controller('ModuleViewController', moduleViewController);

function module(openmrsRest, $stateParams) {
    return openmrsRest.getFull('module', {uuid: $stateParams.UUID}).then(function(response){
        return response;
    })
}

export default moduleViewModule;
