import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Services</Link>
        </li>
        <li>
          <Link to="/services">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
