export default class MyRouteController {
    constructor($scope) {
        $scope.formData = {
            login : 'Your Name',
            password: 'Your Password'
        }
        $scope.handleSubmit = (formData) => console.log(formData);
        
    }
}

MyRouteController.$inject = ['$scope'];