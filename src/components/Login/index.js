import React, { Component } from 'react';
import {connect} from 'react-redux';

import { auth } from '../../actions/userActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.auth(this.state.email, this.state.password)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="Login">
        <h1>Login</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          <label>Email</label>
          <br />
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            autoComplete="off"
            />
          <br />
          <label>Password</label>
          <br />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            autoComplete="off"
            />
          <br />
          <input
            type="submit"
            value="Login"
            />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  auth: auth
}

export default connect(null, mapDispatchToProps)(Login);
