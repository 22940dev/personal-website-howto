import React, {Component} from 'react';
import Title from 'react-title-component';
import HomeText from './HomeText';
import HomeIntro from './HomeIntro';
import HomeSocial from './HomeSocial';
import './HomePage.css'

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Title render="About Rivki" />
        <HomeText />
        <HomeIntro />
        <HomeSocial />
      </div>
    );
  }
}

export default Homepage;