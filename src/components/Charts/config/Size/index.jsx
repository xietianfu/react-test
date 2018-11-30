import React from 'react';
import { Slider, Divider, InputNumber } from 'antd';
import style from '../style.less';

const Size = () => {
  return (
    <div className={style.warp}>
      <Divider orientation="left"> 图表大小 </Divider>
      <p>图表宽度</p>
      <Slider min={1} max={12} step={1} />
      <p>图表高度</p>
      <InputNumber min={200} defaultValue="200" />
    </div>
  );
};

export default Size;
