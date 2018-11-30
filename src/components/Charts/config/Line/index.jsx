import { Divider, Input, Radio, Switch, InputNumber, Button } from 'antd';
import React from 'react';
import XAxis from './XAxis';
import YAxis from './YAxis';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Line = ({
  XAxisConfig,
  YAxisConfig,
  markPoint,
  markLine,
  pushConfig,
}) => {
  function changeCategory(val) {
    console.log(val);
    // pushConfig({ categoryAxis: val });
  }

  function changeConfig(configName, baseConfig, type, val = undefined) {
    if (val) {
      pushConfig({ [configName]: { ...baseConfig, [type]: val } });
    } else {
      const newConfig = { ...baseConfig };
      delete newConfig[type];
      pushConfig({ [configName]: { ...newConfig } });
    }
  }

  function changeMarkLine(type, val) {
    changeConfig('markLine', markLine, type, val);
  }

  function changeMarkPoint(type, val) {
    changeConfig('markPoint', markPoint, type, val);
  }

  return (
    <div>
      <p>类目轴选择</p>
      <RadioGroup
        onChange={e => changeCategory(e.target.value)}
        defaultValue="X"
      >
        <RadioButton value="X">X轴</RadioButton>
        <RadioButton value="Y">Y轴</RadioButton>
      </RadioGroup>
      <Divider orientation="left">X相关</Divider>
      <XAxis XAxisConfig={XAxisConfig} pushConfig={pushConfig} />
      <Divider orientation="left">Y相关</Divider>
      <YAxis YAxisConfig={YAxisConfig} pushConfig={pushConfig} />
      <Divider orientation="left">相关配置</Divider>
      {/* <span>值映射</span>
      <Switch checkedChildren="开" unCheckedChildren="关" onChange={bool =>{
        bool
      }} /> */}
      <span>显示最大值</span>
      <Switch
        checkedChildren="开"
        unCheckedChildren="关"
        onChange={bool => {
          if (bool) {
            changeMarkPoint('max', { type: 'max', name: '最大值' });
          } else {
            changeMarkPoint('max');
          }
        }}
      />
      <span>显示最小值</span>
      <Switch
        checkedChildren="开"
        unCheckedChildren="关"
        onChange={bool => {
          if (bool) {
            changeMarkPoint('min', { type: 'min', name: '最大值' });
          } else {
            changeMarkPoint('min');
          }
        }}
      />
      <span>显示平均值</span>
      <Switch
        checkedChildren="开"
        unCheckedChildren="关"
        onChange={bool => {
          if (bool) {
            changeMarkLine('average', { type: 'average', name: '平均值' });
          } else {
            changeMarkLine('average');
          }
        }}
      />
      <Button type="dashed" block>
        添加自定义基线
      </Button>
    </div>
  );
};

export default Line;
