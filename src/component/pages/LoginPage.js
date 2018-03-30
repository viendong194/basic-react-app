import React, { Component } from 'react';
import LoginForm from '../forms/loginform';
class LoginPage extends Component {
  submit = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit}/>
        {/* <Link to="/login">Login</Link> */}
      </div>
    );
  }
}

export default LoginPage;