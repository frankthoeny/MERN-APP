import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListingShow extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/listing/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }
  //let d = this.state.book.published_date.slice(0, 10).split('-')
  render() {
    return (

      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.listing.address}
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/listing"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Listings</Link></h4>
            <dl>
              <dt>Listing Date:</dt>
              <dd>{this.state.listing.listing_date}</dd>
              <dt>MLS:</dt>
              <dd>{this.state.listing.mls}</dd>
              <dt>Address:</dt>
              <dd>{this.state.listing.address}</dd>
              <dt>City:</dt>
              <dd>{this.state.listing.city}</dd>
              <dt>State:</dt>
              <dd>{this.state.listing.state}</dd>
              <dt>Zip:</dt>
              <dd>{this.state.listing.zip}</dd>
              <dt>Description:</dt>
              <dd>{this.state.listing.description}</dd>
              <dt>Publisher:</dt>
              <dd>{this.state.listing.publisher}</dd>
            </dl>
            <Link to={`/listingedit/${this.state.listing._id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.listing._id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingShow;
