// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">Philip Hayase's Portfolio</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="btn btn-custom mr-3" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-custom mr-3" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-custom mr-3" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-custom" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
