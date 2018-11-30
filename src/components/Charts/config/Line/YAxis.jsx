import React from 'react';
import { Switch, Input, Radio } from 'antd';

const YAxis = ({ YAxisConfig, pushConfig }) => {
  function changeYAxis(type, val) {
    pushConfig({ YAxisConfig: { ...YAxisConfig, [type]: val } });
  }
  return (
    <div>
      <span>是否显示X轴</span>
      <Switch checkedChildren="开" unCheckedChildren="关" />
      <p>坐标轴名称</p>
      <Input placeholder="坐标轴标题" />
      <span>是否显示坐标轴轴线</span>
      <Switch checkedChildren="开" unCheckedChildren="关" />
    </div>
  );
};

export default YAxis;
