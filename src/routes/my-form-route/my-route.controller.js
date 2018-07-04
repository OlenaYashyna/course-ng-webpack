export default class MyRouteController {
    constructor($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        $scope.formData = {
            login : 'Your Name',
            password: 'Your Password'
        }
        $scope.showForm = true;
        //$scope.showStatus = false;
        //$scope.handleSubmit = () => console.log(this);
        $scope.handleSubmit = function() { 
            const userData = JSON.stringify(this.formData);
            localStorage.setItem("myKey", userData);
            //$scope.showForm = false;
            if($scope.formData.login !== '' && $scope.formData.password !== '') {
                //$window.location.path = '/home';
                //$location.path('/home');
                
                console.log($scope.formData);
            } else {console.log('nothing to view');}
        };
    }
}

MyRouteController.$inject = ['$scope'];