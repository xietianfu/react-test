import React from 'react';
import '../../assets/styles/pages/demo.less';
import style from './style.less';

const Demo = () => {
  return (
    <div>
      <h1 className="title">hello world</h1>
      <h1
        className={style.title}
        onClick={() => {
          console.log(i);
        }}
      >
        hello world!
      </h1>
    </div>
  );
};

export default Demo;
