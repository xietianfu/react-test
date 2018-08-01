import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import myPhoto from '../1.jpg';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className="hello">今天你真好看。</h1>
        <img src={myPhoto} alt="" />
      </div>
    );
  }
}

export default hot(module)(App);
// export default App;
