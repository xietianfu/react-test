import React from 'react';
import style from './style.less';
import classnames from 'classnames';

const Demo = () => {
  return (
    <div>
      <h1 className="title">hello world</h1>
      <h1 className={style.title}>hello world!</h1>
      <h1 className={classnames('common', [style.title])}>hello world</h1>
    </div>
  );
};

export default Demo;
