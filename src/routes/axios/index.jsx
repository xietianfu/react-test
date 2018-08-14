import React, { Component } from 'react';
import { Button } from 'antd';
import { axios, cancel } from '../../services/config';

class AxiosTest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    axios.get('/name').then(res => console.log(res));
  };

  handleCancel = () => {
    cancel('14644');
  };

  render() {
    return (
      <div>
        <h1>Axios测试</h1>
        <Button onClick={() => this.handleClick()}>响应请求</Button>
        <Button onClick={() => this.handleCancel()}>取消请求</Button>
      </div>
    );
  }
}

export default AxiosTest;
