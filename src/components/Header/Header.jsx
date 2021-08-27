import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => (
   
    <nav className='navbar-header'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
);

export { Header };