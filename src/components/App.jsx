import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Button } from 'antd';
import styles from './app.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(111);
  }

  render() {
    return (
      <div>
        <h1 className={styles.hello}>今天你真好看。</h1>
        <h1>明天也会是开心的一天</h1>
        <Button type="primary">hello</Button>
      </div>
    );
  }
}

export default hot(module)(App);
// export default App;
