import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Help</Link></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Help</Link></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Help</Link></li>
          </ul>
        </nav>
        <div className="copyright">&copy; Copyright 2018</div>
      </footer>
    );
  }
}

export default Footer;
