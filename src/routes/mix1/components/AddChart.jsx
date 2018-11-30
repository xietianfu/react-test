import React, { Component } from 'react';
import { Button } from 'antd';
import style from '../style.less';
import { Link } from 'react-router-dom';
import { path } from './Header';
import queryString from 'query-string';

class AddChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(queryString.parse(location.search));
    return (
      <div>
        <Button type="dashed" size="large" className={style.addChart}>
          <Link
            to={`${path.choiceChart}?id=${
              queryString.parse(location.search).id
            }`}
          >
            添加图表
          </Link>
        </Button>
      </div>
    );
  }
}

export default AddChart;
