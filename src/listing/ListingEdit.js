import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListingEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listing: {}
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/listing/'+this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data });
        console.log(this.state.book);
      });
  }

  onChange = (e) => {
    const state = this.state.book
    state[e.target.name] = e.target.value;
    this.setState({book:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { mls, listing_date, address, city, state, zip, price, agent, broker, description, publisher } = this.state.book;

    axios.put('/api/listing/'+this.props.match.params.id, { mls, listing_date, address, city, state, zip, price, agent, broker, description, publisher })
      .then((result) => {
        this.props.history.push("/listingshow/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT LISTING
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/listingshow/${this.state.listing._id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>Listings</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="mls">MLS:</label>
                <input type="text" className="form-control" name="mls" value={this.state.listing.mls} onChange={this.onChange} placeholder="MLS" />
              </div>
              <div className="form-group">
                <label htmlFor="listing_date">Listing Date:</label>
                <input type="text" className="form-control" name="listing_date" value={this.state.listing.listing_date} onChange={this.onChange} placeholder="Listing Date" />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" className="form-control" name="address" value={this.state.listing.address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" className="form-control" name="city" value={this.state.listing.city} onChange={this.onChange} placeholder="City" />
              </div>
              <div className="form-group">
                <label htmlFor="state">State:</label>
                <input type="text" className="form-control" name="state" value={this.state.listing.state} onChange={this.onChange} placeholder="State" />
              </div>
              <div className="form-group">
                <label htmlFor="zip">Zip:</label>
                <input type="text" className="form-control" name="zip" value={this.state.listing.zip} onChange={this.onChange} placeholder="Zip" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="text" className="form-control" name="price" value={this.state.listing.price} onChange={this.onChange} placeholder="Price" />
              </div>
              <div className="form-group">
                <label htmlFor="agent">Agent:</label>
                <input type="text" className="form-control" name="agent" value={this.state.listing.agent} onChange={this.onChange} placeholder="Agent" />
              </div>
              <div className="form-group">
                <label htmlFor="broker">Broker:</label>
                <input type="text" className="form-control" name="broker" value={this.state.listing.broker} onChange={this.onChange} placeholder="Broker" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" className="form-control" name="description" value={this.state.book.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div className="form-group">
                <label htmlFor="publisher">Publisher:</label>
                <input type="text" className="form-control" name="publisher" value={this.state.book.publisher} onChange={this.onChange} placeholder="Publisher" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingEdit;
