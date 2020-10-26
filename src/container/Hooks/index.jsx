import React, { useState, useEffect ,useCallback,useMemo,memo} from 'react'

const ChildrenCmp=memo(({...props})=>{
  console.info('child has render');

  useEffect(()=>{
    console.info('child effect has runned')
  })
  return <div>
    <h1>children{props.count} </h1>
  </div>
})

export default ()=>{

  const [count,setCount]=useState(0);
  const num=1
  console.info('parent has render')

  const handleChildren = () => {
    console.log('clicked ChildrenComponent');
  };

  function sayHello(){
    console.log('hello')
  }

  const handleParent = () => {
    console.log('clicked ParentComponent');
    setCount(preCount => preCount + 1);
  };

  const callBackCount=useCallback(()=>count>10?count:1,[count]);

  const memoCount=useMemo(()=> callBackCount(),[count]);

  return <div>
    <h1 onClick={handleParent} >当前计数：{count}</h1>
    <ChildrenCmp change={sayHello} ></ChildrenCmp>
    {/* <ChildrenCmp count={memoCount} ></ChildrenCmp> */}
  </div>
}

