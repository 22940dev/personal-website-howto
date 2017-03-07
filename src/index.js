import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import routes from './Routes';
import 'normalize.css/normalize.css';
import './index.css';

console.log('%cHai, interesting with my code?', 'color:#f15152; font-size: 5em');

render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('root')
);
