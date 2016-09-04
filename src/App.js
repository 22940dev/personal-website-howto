import React, { Component } from 'react';
// import Nav from './Components/Nav';

class App extends Component {
  render() {
    return (
      <div className="content">
        {this.props.children}
      </div>
    );
  }
}

export default App;
