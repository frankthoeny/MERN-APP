import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Listings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/listing')
      .then(res => {
        this.setState({ listings: res.data });
        console.log(this.state.listings);
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
      <div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              LISTINGS
            </h3>
          </div>
          <div class="panel-body">
          <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Book</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Address</th>
                  <th>Price</th>
                  <th>Agent</th>
                </tr>
              </thead>
              <tbody>
                {this.state.listings.map(listing =>
                  <tr>
                    <td>{listing.date}</td>
                    <td><Link to={`/show/${listing._id}`}>{listing.address}</Link></td>
                    <td>{listing.price}</td>
                    <td>{listing.agent}</td>
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

export default Listings;
