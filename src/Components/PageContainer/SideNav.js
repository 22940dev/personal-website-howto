import React from 'react';
import Navigation from './Navigation';
import SideProfile from './SideProfile';

const SideNav = () => {
  return (
    <div className="page-container__side-nav">
      <Navigation />
      <SideProfile />
    </div>
  );
};

export default SideNav; 