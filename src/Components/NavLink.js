import React from 'react';
import { Link } from 'react-router';
import './Nav.css';

const NavLink = (props) => {
  return <Link activeClassName="navbar__item--active" {...props} />
}

export default NavLink;