import React from 'react';
import NavLink from './NavLink';
import './Nav.css';

const Nav = (props) => {
  return (
    <div className="navbar">
      <h2 className="navbar__title"> Mr </h2>
      <ul className="navbar__items">
        <li><NavLink className="navbar__item" to="/" onlyActiveOnIndex={true} > Home </NavLink></li>
        <li><NavLink className="navbar__item" to="/about"> About </NavLink></li>
        <li><NavLink className="navbar__item" to="/blog"> Blog </NavLink></li>      
      </ul>
    </div>
  )
}

export default Nav;