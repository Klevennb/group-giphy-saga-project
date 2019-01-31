import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Favorites from '../Favorites/Favorites'
import Search from '../Search/Search'
class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to="/">Search</Link>
            <Link to="/favorites">Favorites</Link>
            <Route extact path ="/" component={Search} />
            <Route extact path="/favorites" component={Favorites} />
          </div>
        </Router>
      <div>
        <h1>Giphy Search!</h1>
      </div>
      </div>
    );
  }
  
}

export default App;
