import React, {Component} from 'react';
import BlogPost from './BlogPost';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blogpage">
      <div className="blogpage-container">
        <BlogPost />
      </div>
    </div>
  );
};

export default BlogPage;