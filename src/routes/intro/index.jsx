import React from 'react';
import IntroJs from 'intro.js';
import { Card, Tooltip, Button } from 'antd';

class IntroPage extends React.Component {
  startIntro = () => {
    // 获取包含引导元素的父容器, 并组成IntroJs
    var intro1 = IntroJs(document.getElementById('root'));
    intro1
      .setOptions({
        prevLabel: '上一步',
        nextLabel: '下一步',
        skipLabel: '跳过',
        doneLabel: '结束',
      })
      .oncomplete(function() {
        //点击跳过按钮后执行的事件
      })
      .onexit(function() {
        //点击结束按钮后， 执行的事件
      })
      .start();
  };

  // render
  // 关键是data-step 和 data-intro
  render() {
    return (
      <div id="root">
        <Card
          bordered={true}
          style={{ width: '100%' }}
          data-step="1"
          data-intro="开始引导!"
        >
          <Button onClick={() => this.startIntro()}>开始引导</Button>
        </Card>
      </div>
    );
  }
}

export default IntroPage;
