import React, {Component} from 'react';
import HomeText from './HomeText';
import HomeIntro from './HomeIntro';
import HomeSocial from './HomeSocial';
import './HomePage.css'

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <HomeText />
        <HomeIntro />
        <HomeSocial />
      </div>
    );
  }
}

export default Homepage;