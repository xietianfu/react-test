import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Button } from 'antd';
import styles from './app.less';
import axios from 'axios';

import myPhoto from '../../assets/images/1.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('api/name').then(res => console.log(res));
  }

  render() {
    return (
      <div>
        <h1 className={styles.hello}>今天你真好看。</h1>
        <h1>明天也会是开心的一天</h1>
        <Button type="primary">hello</Button>
        <img src={myPhoto} alt="一张钞票" />
      </div>
    );
  }
}

export default hot(module)(App);
// export default App;
