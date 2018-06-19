import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password, firstname, lastname } = this.state;

    axios.post('/api/auth/register', { username, password, firstname, lastname })
      .then((result) => {
        this.props.history.push("/login")
      });
  }

  render() {
    const { username, password, firstname, lastname } = this.state;
    return (
      <div class="registerContainer">
        <form class="form-signin" onSubmit={this.onSubmit}>
          <h2 class="form-signin-heading">Register</h2>
          <label htmlfor="inputFirstname" class="sr-only">First Name</label>
          <input type="text" id="inputFirstname" class="form-control" placeholder="First name" name="firstname" value={firstname} onChange={this.onChange} required/>
          <label htmlfor="inputLastname" class="sr-only">Last Name</label>
          <input type="text" id="inputLastname" class="form-control" placeholder="Last name" name="lastname" value={lastname} onChange={this.onChange} required/>
          <label htmlfor="inputEmail" class="sr-only">Email address</label>
          <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
          <label htmlfor="inputPassword" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Create;
