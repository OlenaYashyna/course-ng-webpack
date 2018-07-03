import MyRouteController from './src/routes/my-form-route/my-route.controller';
import HomeRouteController from './src/routes/home-route/home-route.controller';
import template from './src/routes/my-form-route/my-route.html';
import homeTemplate from './src/routes/home-route/home-route.html';

export default function AppConfig($routeProvider) {
    $routeProvider.when('/auth', {
        template: template,
        controller: MyRouteController
    })
    .when('/home', {
        template: homeTemplate,
        controller: HomeRouteController
    })
};

AppConfig.$inject = ['$routeProvider'];