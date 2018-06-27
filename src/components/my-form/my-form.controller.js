export default function () {
    this.login = '';
    this.password = '';
    
    this.onSubmit = () => this.handleSubmit({ login: this.login, password: this.password });
}