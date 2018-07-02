export default class MyRouteController {
    constructor($scope) {
        $scope.formData = {
            login : 'Your Name',
            password: 'Your Password'
        }
        $scope.showForm = true;
        $scope.showStatus = false;
        //$scope.handleSubmit = () => console.log(this);
        $scope.handleSubmit = function() { 
            const userData = JSON.stringify(this.formData);
            localStorage.setItem("myKey", userData);
            $scope.showForm = false;
            $scope.showStatus = true;


            
            
            console.log(this);
        };
        
    }
}

MyRouteController.$inject = ['$scope'];