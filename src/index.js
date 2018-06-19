import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import icons from 'glyphicons';
import './index.css';
import './App.css';
import App from './App';
import Home from './home/Home';
import About from './about/About';
import Login from './auth/Login';
import Register from './auth/Register';
import Listings from './listing/Listings';
import ListingEdit from './listing/ListingEdit';
import ListingCreate from './listing/ListingCreate';
import ListingShow from './listing/ListingShow';
import NotFound from './NotFound';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <App>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/listings' component={Listings} />
          <Route path='/edit/:id' component={ListingEdit} />
          <Route path='/create' component={ListingCreate} />
          <Route path='/show/:id' component={ListingShow} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
