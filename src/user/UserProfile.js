import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/user/profile/')
      .then(res => {
        this.setState({ profiles: res.data });
        console.log(this.state.profiles);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              User Profiles &nbsp;
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Address (username)</th>
                </tr>
              </thead>
              <tbody>
                {this.state.profiles.map(profile =>
                  <tr>
                    <td>{profile.firstname}</td>
                    <td>{profile.lastname}</td>
                    <td>{profile.username}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
