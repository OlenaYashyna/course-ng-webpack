export default class MyRouteController {
    constructor($scope) {
        $scope.handleSubmit = (formData) => console.log(formData);
    }
}

MyRouteController.$inject = ['$scope'];