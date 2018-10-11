import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light gb-light">
              <Link to='/' className="navbar-brand">
                BlocJams!
              </Link>
              <div className="navbar-nav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to='/' className='nav-item nav-link'>Landing</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/library' className="nav-item nav-link">Library</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
