import angular from 'angular';
import MyListComponent from './my-list';
import MyFormComponent from './my-form';
import HomePageComponent from './home-page';

export default angular.module('app.components', [])
    .component('myList', MyListComponent)
    .component('myForm', MyFormComponent)
    .component('homePage', HomePageComponent)
    .name;