import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

import { apiFetch } from '@/server/api';

// eslint-disable-next-line
export default function Hooks(props) {
  const [age, setAge] = useState(18);

  const [name, setName] = useState('xietf');

  const [total, setTotal] = useState();
  /* 初始化请求 */
  useEffect(() => {
    apiFetch.getProducts().then(res => {
      console.log(res);
      setTotal(res.total);
    });
    console.log(name);
  }, [age]);
  /* 设置定时器 */
  useEffect(() => {
    console.log(age);
    console.log('totla', total);
    const time1 = setTimeout(() => {
      console.log('time is end');
    }, 5000);
  });
  useLayoutEffect(() => {
    console.log('xidsdkljkl');
  });

  const inputE1 = useRef();

  useEffect(() => {
    console.log(inputE1);
  });

  return (
    <div>
      <h1>hello world!</h1>
      <h1>{age}</h1>
      <div>
        <button onClick={() => setAge(age + 1)}>+1</button>
        <button onClick={() => setAge(age - 1)}>-1</button>
      </div>
      <h1>{name}</h1>
      <input type="text" onChange={e => setName(e.target.value)} />
      <h1>{total}</h1>
      <input type="text" onChange={e => setTotal(e.target.value)} />
      <div>
        <input ref={inputE1} type="text" />
        <button
          onClick={() => {
            inputE1.current.focus();
            console.log(inputE1.current.value);
          }}
        >
          add hello
        </button>
      </div>
    </div>
  );
}
