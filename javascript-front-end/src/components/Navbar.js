import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/lessons">Lessons</Link></li>
    </ul>
  </nav>
);

export default Navbar;
