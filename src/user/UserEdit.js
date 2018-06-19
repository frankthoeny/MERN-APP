import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UserEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/user/profile'+this.props.match.params.id)
      .then(res => {
        this.setState({ user: res.data });
        console.log(this.state.user);
      });
  }

  onChange = (e) => {
    const state = this.state.user
    state[e.target.name] = e.target.value;
    this.setState({user:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password, firstname, lastname } = this.state.user;

    axios.put('/api/user/profile'+this.props.match.params.id, { username, password, firstname, lastname })
      .then((result) => {
        this.props.history.push("/profile/"+this.props.match.params.id)
      });
  }

  // validatePassword = (e) => {
  //   const state = this.state.user
  //   let password = state.indexOf('password');
  //   let confirmpassword = state.indexOf('password2');
  //   (password === password2)? this.setState({ message: 'password not match' }: '');
  //   // add password confirmation validation.
  // }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT USER
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/profile/${this.state.profile._id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Book List</Link></h4>
            <form onSubmit={this.onSubmit}>

              <div className="form-group">
                <label htmlFor="username">Username (email):</label>
                <input type="text" className="form-control" id="username" name="username" value={this.state.user.username} onChange={this.onChange} placeholder="Username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" className="form-control" id="password" name="password" value={this.state.user.password} onChange={this.onChange} placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password:</label>
                <input type="password" className="form-control" id="password2" name="password2" value={this.state.user.password2} onChange={this.onChange} placeholder="Confirm Password" />
              </div>
              <div className="form-group">
                <label htmlFor="firstname">First Name:</label>
                <input type="text" className="form-control" name="firstname" value={this.state.user.firstname} onChange={this.onChange} placeholder="First Name" />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" className="form-control" name="lastname" value={this.state.user.lastname} onChange={this.onChange} placeholder="Last Name" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserEdit;
