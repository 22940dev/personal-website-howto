import React from 'react';
import avatar from '../Images/ava.jpg';

const SideProfile = () => {
  return (
    <div className="page-container__side-profile">
      <img src={avatar} className="page-container__side-profile--img" role="presentation" />
      <div className="page-container__side-profile--detail">
        <h2 className="page-container__side-profile--name"> Muhammad Rivki </h2>
        <h3 className="page-container__side-profile--role"> Frontend Engineer </h3>
        <p className="page-container__side-profile--jargon">This is my personal blog. I'm a frontend engineer who loves JavaScript and beautiful design.</p>
        <div className="page-container__side-profile--social">
          <a href="https://github.com/mikqi" target="_blank"><i className="icon-github" /></a>
          <a href="https://id.linkedin.com/in/muhammadrivki" target="_blank"><i className="icon-linkedin" /></a>
          <a href="https://plus.google.com/+MuhammadRivki" target="_blank"><i className="icon-googleplus" /></a>
          <a href="https://facebook.com/c4tax" target="_blank"><i className="icon-facebook" /></a>
        </div>
      </div>
    </div>
  );
};

export default SideProfile;