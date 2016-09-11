import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SideNav from './SideNav';
import './PageContainer.css';

const PageContainer = ({children, location}) => {
  return (
    <div className="page-container">
      <SideNav />
      <div className="page-container__content">
        <ReactCSSTransitionGroup
          transitionName="animate"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(children, {
            key: location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    </div>
  );
};

export default PageContainer;