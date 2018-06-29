export default function () {
    
     this.login = 'reef';
    // this.password = this.formData.password;
    
    console.log (this)
    
    this.onSubmit = () => this.handleSubmit({ login: this.login, password: this.password });
}