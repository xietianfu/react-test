import { Input, Radio } from 'antd';
import React from 'react';
import style from '../style.less';

const Title = ({ config = { text: '', left: 'center' }, pushConfig }) => {
  const { text, left } = config;

  // handleChange = (type, val) => {
  //   pushConfig({
  //     title: {
  //       ...config,
  //       [type]: val,
  //     },
  //   });
  // };
  function handleChange(type, val) {
    pushConfig({
      title: {
        ...config,
        [type]: val,
      },
    });
  }

  return (
    <div className={style.warp}>
      <p>图表名称</p>
      <Input
        placeholder="输入标题名称"
        value={text}
        onChange={e => handleChange('text', e.target.value)}
      />
      <span>图表名称对齐方式</span>
      <Radio.Group
        defaultValue={left}
        onChange={e => handleChange('left', e.target.value)}
      >
        <Radio.Button value="left">居左</Radio.Button>
        <Radio.Button value="center">居中</Radio.Button>
        <Radio.Button value="right">居右</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default Title;
