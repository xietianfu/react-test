import React, { Component } from 'react';

import { Switch, Slider, Radio, Row, Col } from 'antd';
import style from '../style.less';

const ToolBox = ({ config = { show: false, feature: {} }, pushConfig }) => {
  function handleChange(type, val) {
    pushConfig({
      toolbox: {
        show: true,
        feature: {
          ...config.feature,
          [type]: val,
        },
      },
    });
  }
  return (
    <div className={style.warp}>
      <span className={style.switchTitle}>工具箱</span>
      <Switch
        checkedChildren="开"
        unCheckedChildren="关"
        checked={config.show}
        onChange={bool => pushConfig({ toolbox: bool })}
      />
      {config.show && (
        <div>
          <span>区域缩放</span>
          <Switch
            checkedChildren="开"
            unCheckedChildren="关"
            checked={config.show}
            onChange={bool => {
              if (bool) {
                handleChange('dataZoom', { yAxisIndex: 'none' });
              } else {
                handleChange('dataZoom', { show: false });
              }
            }}
          />
          <span>保存为图片</span>
          <Switch
            checkedChildren="开"
            unCheckedChildren="关"
            checked={config.show}
            onChange={bool => {
              if (bool) {
                handleChange('saveAsImage', {});
              } else {
                handleChange('saveAsImage', { show: false });
              }
            }}
          />
          {/* <span>图表转换</span>
          <Switch
            checkedChildren="开"
            unCheckedChildren="关"
            checked={config.show}
          /> */}
        </div>
      )}
    </div>
  );
};

export default ToolBox;
