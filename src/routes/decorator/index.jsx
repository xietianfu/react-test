import React, { Component } from 'react';
import { Button } from 'antd';

function testable(isTestable) {
  return target => {
    target.isTestable = isTestable;
  };
}

function readonly(target, name, descriptor) {
  target.type = 'readonly';
  descriptor.writable = false;
  return descriptor;
}

function log(target, name, descriptor) {
  // 这里是缓存旧的方法，也就是上面那个add()原始方法
  var oldValue = descriptor.value;

  // 这里修改了方法，使其作用变成一个打印函数
  // 最后依旧返回旧的方法，真是巧妙
  descriptor.value = function() {
    console.log(`Calling "${name}" with`, arguments);
    return oldValue.apply(null, arguments);
  };

  return descriptor;
}

function isNumber(target, name, descriptor) {
  // console.log(target);
  // console.log(name);
  // console.log(descriptor);
  return descriptor;
}

@testable(true)
class Decorator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'jack',
      val: '',
    };
    console.log(Decorator.isTestable);

    // this.handleClick = this.handleClick.bind(this);
  }

  onInputChange = e => {
    console.log(e.target.value);
    this.setState({
      val: e.target.value,
    });
  };

  @readonly
  name() {
    return `${this.first} ${this.last}`;
  }

  // @log
  addNum = (a, b) => {
    return a + b;
    // this.addNum.call(this);
  };

  // @isNumber
  handleClick = () => {
    console.log(this.name());
    console.log(this.name.type);
    console.log(this.addNum(4, 6));
    console.log('clicked');
    // this.handleClick.call(this);
  };

  render() {
    const { name } = this.state;
    this.addNum(4, 2);
    return (
      <div>
        <h1>
          你好！
          {name}
        </h1>
        <input type="text" onChange={this.onInputChange} />
        <Button onClick={() => this.handleClick()}>验证</Button>
      </div>
    );
  }
}

export default Decorator;
