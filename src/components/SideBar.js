import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isCollapseOpen: false,
    }
    // This binding is necessary to make `this` work in the callback
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.handleSubMenuHover = this.handleSubMenuHover.bind(this);
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  handleMenuToggle = () => {
    this.setState( prevState => ({
            isToggleOn: !prevState.isToggleOn
          }));
  }

  handleSubMenuHover = () => {
    this.setState( prevState => ({
        isCollapseOpen: !prevState.isCollapseOpen
    }))
  }

  render() {
    return (
      <div id="SideBar" className="sidebar">
          <button id="sidebarCollapse" className="btn btn-info navbar-btn"
            onClick={this.handleMenuToggle}>&#9776; {this.state.isToggleOn ? 'open' : 'close'}</button>
          <div className={this.state.isToggleOn ? 'sidenav' : 'sidenav active'}>
            <nav>
              <ul>
                <li className="dropdown-hover">
                <button className={this.state.isCollapseOpen ? 'dropdown-btn' : this.state.isToggleOn ? 'dropdown-btn' : 'dropdown-btn active'}
                   onClick={this.handleSubMenuHover}> Listing Board {this.state.isCollapseOpen? "&#9650;" : "&#9660;"}</button>
                  <i className="fa fa-caret-down"></i>
                  <ul className={this.state.isCollapseOpen ? 'dropdown-container' : this.state.isToggleOn ? 'dropdown-container' : 'dropdown-container active'}>
                    <li><Link to={"/listings"}>Listings</Link></li>
                    <li><Link to={"/create"}>Create Listing</Link></li>
                  </ul>
                </li>
                <li><Link to={"/listings"}>Listings</Link></li>
                <li>
                  <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      );
    }
  }

export default SideBar;
