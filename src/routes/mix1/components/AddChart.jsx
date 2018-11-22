import React, { Component } from 'react';
import { Button } from 'antd';
import style from '../style.less';
import { Link } from 'react-router-dom';
import { path } from './Header';

class AddChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button type="dashed" size="large" className={style.addChart}>
          <Link to={path.choiceChart}>添加图表</Link>
        </Button>
      </div>
    );
  }
}

export default AddChart;
