import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import JuliaImages from '../assets/images/about/JuliaImages';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
      
        <Link className="navbar-brand" to="/"> <img
          src={JuliaImages.brandLogo}  
          alt="Julia Raskin Style Logo"
          className="img-fluid rounded-circle"
          style={{ maxWidth: '50px' }}
        />Julia Raskin Style</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shopping-school">Shopping School</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
