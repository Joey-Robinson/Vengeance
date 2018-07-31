import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="Header">
    <NavLink activeClassName="Header-Home-Active" className="Header-Home" exact to="/">
      <span className="Header-Home-Visible">Home</span>
      <span className="Header-Home-Invisible">Phone</span>
    </NavLink>
    <NavLink activeClassName="Header-About-Active" className="Header-About" to="/about">
      <span className="Header-About-Visible">About</span>
      <span className="Header-About-Invisible">Me</span>
    </NavLink>
    <NavLink activeClassName="Header-Skills-Active" className="Header-Skills" to="/skills">
      <span className="Header-Skills-Visible">Skills</span>
      <span className="Header-Skills-Invisible">Skills</span>
    </NavLink>
    <NavLink activeClassName="Header-Portfolio-Active" className="Header-Portfolio" to="/portfolio">
      <span className="Header-Portfolio-Visible">Portfolio</span>
      <span className="Header-Portfolio-Invisible">Portfolio</span>
    </NavLink>
    <NavLink activeClassName="Header-Contact-Active" className="Header-Contact" to="/contact">
      <span className="Header-Contact-Visible">Contact</span>
      <span className="Header-Contact-Invisible">Contact</span>
    </NavLink>
    <div className="Header-Line">
      &nbsp;
    </div>
    {/* <NavLink to="/portfolio">Portfolio</NavLink>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/">Home</NavLink> */}
  </header>
);

export default Header;