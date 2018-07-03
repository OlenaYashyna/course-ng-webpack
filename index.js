import angular from 'angular';
import AppConfig from './app.config';
import ngRoute from 'angular-route';
import componentsModule from './src/components';

export default angular.module('app', [ngRoute, componentsModule])
    .factory('myService', ['$rootScope', function($rootScope) {
        return $rootScope;
        // return {
        //     boo: () => alert('Booo!'),
        // }
    }])
    .config(AppConfig)
    .run(['$rootScope', 'myService', (rootScope, myService) => { //services are ready, you can 
        // myService.boo();
        rootScope.TITLE = 'My super application!';
    }])
    .name;