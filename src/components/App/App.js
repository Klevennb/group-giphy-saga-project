import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Favorites from '../Favorites/Favorites'
import Search from '../Search/Search'
import './App.css';
class App extends Component {


  render() {
    return (
      <div>
        <header>
          <h1>Giphy Collectore</h1>
          {/* <button className="serach-btn">Search</button>
          <button className="favorite-btn">Favorites</button>     */}
          <Router>
          <div className="App-Paths">
            <Link to="/">Search</Link>
            <br/>
            <Link to="/favorites">Favorites</Link>
            <Route extact path ="/" component={Search} />
            <Route extact path="/favorites" component={Favorites} />
          </div>
        </Router>
          </header>    
      <div>
        {/* <h1>Giphy Search!</h1> */}
      </div>
      </div>
    );
  }
  
}

export default App;
