import React from 'react';
import {Link} from 'react-router';

const SideNav = () => {
  return (
    <div className="page-container__side-nav">
      <h1> Side Nav </h1>
      <Link to="/"> Home </Link>
    </div>
  );
};

export default SideNav;