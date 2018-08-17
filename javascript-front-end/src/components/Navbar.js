import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  return(
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/lesson">Lesson</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
