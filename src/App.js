import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Home from './components/home';
import Favorites from './components/favorites';
import ErrorModal from './components/others/errorModal';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="site-content">
        <div className="site-header">
          <div className="container">
            <div className="main-navigation">
              <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
              <ul className="menu">
                <li className="menu-item"><NavLink to='/' exact activeClassName="current-menu-selected">Home</NavLink></li>
                <li className="menu-item"><NavLink to="/favorites" activeClassName="current-menu-selected">Favorites</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
        <Route path="/Favorites" component={Favorites} />
        <Route path="/" exact component={Home} />
        <ErrorModal />
      </div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-1"> <p className="colophon">Site Prepared by Patel Drashti</p></div>
            <div className="col-md-3 col-md-offset-1">
              <div className="social-links">
                <a href="mailto:drashtiarunpatel@gmail.com" className="email"><Image src={require('./images/email.png')} thumbnail /></a>
                <a className="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/drashti-patel-308a82138/"><Image src={require('./images/linkedin.png')} thumbnail /></a>
                <a className="phone" href="tel:+420774232779"><Image src={require('./images/phone.png')} thumbnail /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
