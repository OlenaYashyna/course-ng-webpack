import MyRouteController from './src/routes/my-route.controller.js';
import template from './src/routes/my-route.html';

export default function AppConfig($routeProvider) {
    $routeProvider.when('/', {
        template: template,
        controller: MyRouteController,
    })
};

AppConfig.$inject = ['$routeProvider'];