import React from 'react';
import style from './style.less';
import classnames from 'classnames';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 80px;
`;

const Demo = () => {
  return (
    <div>
      <h1 className="title">hello world</h1>
      <h1 className={style.title}>hello world!</h1>
      <h1 className={classnames([style.title, 'align'])}>asdlk;fjal;ksj</h1>
      <Title className={classnames([style.title, 'align'])}>hello world</Title>
    </div>
  );
};

export default Demo;
