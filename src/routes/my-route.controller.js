export default class MyRouteController {
    constructor($scope) {
        $scope.formData = {
            login : 'Your Name',
            password: 'Your Password'
        }
        //$scope.handleSubmit = () => console.log(this);
        $scope.handleSubmit = function() { 
            const userData = JSON.stringify(this.formData);
            localStorage.setItem("myKey", userData);
            
            
            console.log(this);
        };
        
    }
}

MyRouteController.$inject = ['$scope'];