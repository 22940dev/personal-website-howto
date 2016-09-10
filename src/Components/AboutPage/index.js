import React, {Component} from 'react';
import './AboutPage.css';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="about-page--overflow"> 
        
          <div className="about-page__banner"></div>
          <div className="about-page__container">
            <h1 className="about-page__title"> Introduction </h1>
            <p>Hi my name is Muhammad Rivki. I am a <span className="about-page__highlight">Frontend Engineer</span>, and i've been active in this field for 4 years. I love <span className="about-page__highlight">chocolate</span> I love watch a <span className="about-page__highlight">movie</span> I love <span className="about-page__highlight">classical music</span> I love <span className="about-page__highlight">beautiful design</span> and I love to <span className="about-page__highlight">learn</span> something new it's a challange for me. </p>
            <p>So, <a className="about-page__email-me" href="mailto:muhammad.rivki@live.com?Subject=Hello%20From%20Friend" target="_top">let's talk</a>. Let's get a glass of hot chocolate and talk about technology that we love.</p>
            
            <hr />

            <h1 className="about-page__title"> Education </h1>
            <h2>Universitas Komputer Indonesia (UNIKOM)</h2>
            <p>September 2012 - August 2016 | Faculty of Engineer and Computer Science<br/>Bachelor of Informatics Engineer</p>

            <hr />
            <h1 className="about-page__title"> Skills </h1>
            <h3> Backend </h3>
            <ul>
              <li> NodeJS using Express </li>
            </ul>
            <h3> Frontend </h3>
            <ul>
              <li> ReactJS </li>
              <li> AngularJS </li>
              <li> IonicFramework </li>
              <li> SASS/LESS </li>              
              <li> jQuery </li>
            </ul>

            <h3> My Favorite Editor </h3>
            <ul>
              <li> <a href="https://code.visualstudio.com/" target="_blank" className="about-page__highlight">Visual Studio Code</a></li>
              <li> <a href="http://atom.io/" target="_blank" className="about-page__highlight">Atom</a> </li>            
            </ul>

            <p> I also have some experience developing for RESTful Web Service, android, chrome extension <em>text mining</em> and <em>web crawling</em> </p>
            
            <hr />
            <h1 className="about-page__title"> Awards </h1>
            <ul>
              <li>1<sup>st</sup> Winner Imagine Cup 2015 Innovation Category</li>
              <li>Finalist of Islamics Apps</li>            
            </ul>
          </div>
        
        </div>

      </div>
    );
  }
}

export default AboutPage;