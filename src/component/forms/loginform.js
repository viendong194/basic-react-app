import React, { Component } from 'react';
import {Form,Button} from 'semantic-ui-react';
import validator from 'validator';
import InlineError from "../messages/InlineError.js";
class LoginForm extends Component {
  state = {
    data: {
      email:'',
      password:''
    },
    loading: false,
    errors: {}
  }
  onChange = e => this.setState({
    data: {...this.state.data,[e.target.name]:e.target.value }
  })

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length === 0){
      this.props.submit(this.state.data);
    }
  }
  validate = (data) => {
    const errors = {};
    if(!validator.isEmail(data.email)) errors.email = "Invalid email";
    if(!data.password) errors.password = "Can't be blank"
    return errors
  }
  render() {
    const { data,errors } = this.state;
  
    return (
      <Form onSubmit = {this.onSubmit}>
        <Form.Field>
          <label htmlFor="email>">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="example@example.com"
            value={data.email}
            onChange = {this.onChange}
          />
        </Form.Field>
        {errors.email && <InlineError text={errors.email}/>}
        <Form.Field>
          <label htmlFor="pasword>">Pasword</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Make it secure"
            value={data.pasword}
            onChange = {this.onChange}
          />
        </Form.Field>
        {errors.password && <InlineError text={errors.password}/>}
        <Button primary>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;