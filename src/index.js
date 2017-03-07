import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import routes from './Routes';
import './index.css';

render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('root')
);
