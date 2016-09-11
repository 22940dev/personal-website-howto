import React from 'react';
import Navigation from './Navigation';
import SideProfile from './SideProfile';

const SideNav = () => {
  return (
    <div className="page-container__side-nav">
      <SideProfile />
      <Navigation />
    </div>
  );
};

export default SideNav; 