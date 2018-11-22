import React, { Component } from 'react';

import { Switch, Slider, Radio } from 'antd';

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
      <div>
        <h2>图例</h2>
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
            <Slider
              defaultValue={this.parseNumber(left)}
              max={100}
              min={0}
              marks={{ 0: '最左', 50: '居中', 100: '最右' }}
              onChange={val => this.onChange('left', `${val}%`)}
            />
            <Slider
              defaultValue={this.parseNumber(top)}
              max={100}
              min={0}
              marks={{ 0: '最上', 50: '居中', 100: '最下' }}
              onChange={val => this.onChange('top', `${val}%`)}
            />
            <Radio.Group
              defaultValue={orient}
              buttonStyle="solid"
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
