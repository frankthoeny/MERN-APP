import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListingCreate extends Component {

  constructor() {
    super();
    this.state = {
      mls: '',
      listing_date: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      price: '',
      agent: '',
      broker: '',
      description: '',
      publisher: ''
    };
  }

componentDidMount() {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
}

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { mls, listing_date, address, city, state, zip, price, agent, broker, description, publisher } = this.state;

    axios.post('/api/listing', { mls, listing_date, address, city, state, zip, price, agent, broker, description, publisher })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { mls, listing_date, address, city, state, zip, price, agent, broker, description, publisher } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD LISTING
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Listings</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" className="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" className="form-control" name="city" value={city} onChange={this.onChange} placeholder="City" />
              </div>
              <div className="form-group">
                <label htmlFor="state">State:</label>
                <input type="text" className="form-control" name="state" value={state} onChange={this.onChange} placeholder="State" />
              </div>
              <div className="form-group">
                <label htmlFor="zip">Zip:</label>
                <input type="text" className="form-control" name="zip" value={zip} onChange={this.onChange} placeholder="Zip" />
              </div>
              <div className="form-group">
                <label htmlFor="mls">MLS:</label>
                <input type="text" className="form-control" name="mls" value={mls} onChange={this.onChange} placeholder="MLS" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="text" className="form-control" name="price" value={price} onChange={this.onChange} placeholder="Price" />
              </div>
              <div className="form-group">
                <label htmlFor="agent">Agent:</label>
                <input type="text" className="form-control" name="agent" value={agent} onChange={this.onChange} placeholder="Agent" />
              </div>
              <div className="form-group">
                <label htmlFor="broker">Broker:</label>
                <input type="text" className="form-control" name="broker" value={broker} onChange={this.onChange} placeholder="Broker" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea className="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3" value={description}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="publisher">Publisher:</label>
                <input type="text" className="form-control" name="publisher" value={publisher} onChange={this.onChange} placeholder="Publisher" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingCreate;
