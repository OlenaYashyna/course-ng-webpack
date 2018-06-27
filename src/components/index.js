import angular from 'angular';
import MyListComponent from './my-list';
import MyFormComponent from './my-form';

export default angular.module('app.components', [])
    .component('myList', MyListComponent)
    .component('myForm', MyFormComponent)
    .name;