import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Header extends Component {

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleLoginButtons = this.handleLoginButtons.bind(this);
  }

  handleLoginButtons = () => {
    localStorage.getItem('jwtToken') ? this.logout() : this.login();
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  login = () => {
    window.location.href='/login';
  }

  render() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li className="login">
              <button className="btn btn-primary" onClick={(event) => { this.handleLoginButtons();}}>
                 {localStorage.getItem('jwtToken') ? 'Logout' : 'Login'}</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
