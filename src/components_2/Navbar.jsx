import React from "react";
import "./css/style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#">Logo</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
