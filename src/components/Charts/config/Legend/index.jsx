import React, { Component } from 'react';

import { Switch, Slider, Radio, Row, Col } from 'antd';
import style from '../style.less';

class Legend extends Component {
  constructor(props) {
    super(props);
    const { config = false } = this.props;
    console.log(config);
    const { left, top, orient } = config;
    this.state = {
      isShow: Boolean(config),
      left: left || '50%',
      top: top || '0%',
      orient: orient || 'horizontal',
    };
  }

  onChange = (type, val) => {
    const { pushConfig } = this.props;
    this.setState(
      {
        [type]: val,
      },
      () => {
        if (this.state.isShow) {
          const obj = { ...this.state };
          delete obj.isShow;
          pushConfig({ legend: { ...obj } });
        } else {
          pushConfig({ legend: false });
        }
      },
    );
  };

  parseNumber = str => {
    return parseInt(str, 10);
  };

  render() {
    const { isShow, left, top, orient } = this.state;
    const { config } = this.props;
    return (
      <div className={style.warp}>
        <span className={style.switchTitle}>图例</span>
        <Switch
          checkedChildren="开"
          unCheckedChildren="关"
          checked={Boolean(config)}
          onChange={bool => {
            this.onChange('isShow', bool);
          }}
        />
        {isShow && (
          <div>
            <p>左右位置</p>
            <Slider
              defaultValue={this.parseNumber(left)}
              max={100}
              min={0}
              marks={{ 0: '最左', 50: '居中', 100: '最右' }}
              onChange={val => this.onChange('left', `${val}%`)}
            />
            <p>上下位置</p>
            <Slider
              defaultValue={this.parseNumber(top)}
              max={100}
              min={0}
              marks={{ 0: '最上', 50: '居中', 100: '最下' }}
              onChange={val => this.onChange('top', `${val}%`)}
            />
            <span>图例排列顺序</span>
            <Radio.Group
              defaultValue={orient}
              buttonStyle="solid"
              // size="small"
              onChange={val => this.onChange('orient', val.target.value)}
            >
              <Radio.Button value="horizontal">水平</Radio.Button>
              <Radio.Button value="vertical">垂直</Radio.Button>
            </Radio.Group>
          </div>
        )}
      </div>
    );
  }
}

export default Legend;
