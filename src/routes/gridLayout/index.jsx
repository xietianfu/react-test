import { Avatar, Button, Card, Icon } from 'antd';
import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import style from './style.less';

const { Meta } = Card;

const ResponsiveGridLayout = WidthProvider(Responsive);

class MyFristGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      el: [
        {
          key: 'a',
          dom: (
            <Card
              style={{ height: '100%' }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          ),
        },
      ],
    };
  }

  render() {
    const { el } = this.state;
    return (
      <div>
        <Button
          onClick={() => {
            const { el } = this.state;
            this.setState({
              el: [
                ...el,
                {
                  key: Math.random().toString(),
                  dom: <h1>{Math.random().toString()}</h1>,
                },
              ],
            });
          }}
        >
          add one
        </Button>
        <ResponsiveGridLayout
          className={style.layout}
          autoSize
          isDraggable
          isResizable
          // layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 24, md: 12, sm: 6, xs: 4, xxs: 2 }}
          onResizeStop={e => console.log(e)}
          rowHeight={10}
        >
          <div key="1" data-grid={{ x: 0, y: 0, w: 3, h: 10, static: true }}>
            <h1 onClick={() => console.log('click')}>hello world</h1>
          </div>
          <div key="56">2</div>
          <div key="3">3</div>
          {el.map(item => (
            <div key={item.key} data-grid={{ x: 0, y: 0, w: 3, h: 10 }}>
              {item.dom}
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    );
  }
}

export default MyFristGrid;
