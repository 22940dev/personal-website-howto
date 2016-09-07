import React from 'react';
import {Link} from 'react-router';

const HomeIntro = () => {
  return (
    <div className="homepage-middle">
      <h3> I'm ikki. </h3>
      <h3>Frontend engineer who loved food, learn something new, daydream</h3>
      <h4>and <span className="highlight">JavaScript Enthusiast</span>. Want to know more <Link to="/about"><span className="highlight highlight-link">About Me?</span></Link></h4>
    </div>
  );
};

export default HomeIntro;