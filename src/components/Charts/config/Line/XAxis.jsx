import React from 'react';
import { Switch, Input, Radio } from 'antd';

const XAxis = ({ XAxisConfig, pushConfig }) => {
  function changeXAxis(type, val) {
    pushConfig({ XAxisConfig: { ...XAxisConfig, [type]: val } });
  }

  return (
    <div>
      <span>是否显示X轴</span>
      <Switch checkedChildren="开" unCheckedChildren="关" />
      <p>坐标轴名称</p>
      <Input placeholder="坐标轴标题" />
      <span>坐标轴名称显示位置</span>
      <Radio.Group defaultValue="right">
        <Radio.Button value="left">居左</Radio.Button>
        <Radio.Button value="center">居中</Radio.Button>
        <Radio.Button value="right">居右</Radio.Button>
      </Radio.Group>
      <br />
      <span>是否显示坐标轴轴线</span>
      <Switch checkedChildren="开" unCheckedChildren="关" />
    </div>
  );
};

export default XAxis;
