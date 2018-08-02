import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Button } from 'antd';
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
        <h1>明天也会是开心的一天</h1>
        <Button type="primary">hello</Button>
      </div>
    );
  }
}

export default hot(module)(App);
// export default App;
