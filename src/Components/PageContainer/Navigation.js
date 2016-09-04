import React from 'react';
import {Link} from 'react-router';

const Navigation = () => {
  return (
    <div className="page-container__side-nav-links">
      <Link className="page-container__side-nav-link" to="/"> Home </Link>
      <Link className="page-container__side-nav-link" activeClassName="page-container__side-nav-link--active" to="/blog"> Blog </Link>
      <Link className="page-container__side-nav-link" activeClassName="page-container__side-nav-link--active" to="/about" onlyActiveOnIndex={true}> About </Link>      
    </div>
  );
};

export default Navigation;