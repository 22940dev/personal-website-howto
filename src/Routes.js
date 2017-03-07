import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import BlogPage from './Components/BlogPage';
import PostPage from './Components/PostPage';
import PageContainer from './Components/PageContainer';

function Routes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/about" component={PageContainer}>
        <IndexRoute component={AboutPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:id" component={PostPage} />
      </Route>
    </Route>
  )
}

export default Routes();