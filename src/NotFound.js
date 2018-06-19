import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

const NotFound = () => (
  <div className="pageNotFound">
    <h2>Page not found</h2>
    <Link to="/">Go home</Link>
  </div>
);

export default NotFound;
