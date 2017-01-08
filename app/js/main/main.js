import angular from 'angular';
import angularSanitize from 'angular-sanitize'
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component.js';
import Home from '../home/home';
import ModuleView from '../module-view/module-view'
import uicommons from 'openmrs-contrib-uicommons';

let modulesmanagementModule = angular.module('modulesmanagement', [ uiRouter, angularSanitize, Home.name, ModuleView.name ,'openmrs-contrib-uicommons'
    ])
    .component('main', mainComponent);

export default modulesmanagementModule;
