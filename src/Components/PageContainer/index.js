import React from 'react';
import SideNav from './SideNav';
import './PageContainer.css';

const PageContainer = (props) => {
  return (
    <div className="page-container">
      <SideNav />
      <div className="page-container__content">{props.children}</div>
    </div>
  );
};

export default PageContainer;