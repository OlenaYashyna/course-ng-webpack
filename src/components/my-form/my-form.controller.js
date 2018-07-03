export default function ($scope) {

     //console.log (this, $scope, $scope.$ctrl.formData)
    
    this.onSubmit = () => this.handleSubmit({ login: this.login, password: this.password });
}