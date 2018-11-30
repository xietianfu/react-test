import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { axios } from '../../../services';
import { GridElementCTX } from '../index'; // eslint-disable-line
import style from '../style.less'; // eslint-disable-line
import Echart from './Echart';
import Element from './Element';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      configList: [], // 配置信息列表
    };
  }

  componentDidMount() {
    const { elements } = this.props;
    let configList = [];
    axios
      .all(
        elements.map(item => {
          return axios.get('/chart/detail', {
            params: {
              chartId: item,
            },
          });
        }),
      )
      .then(
        axios.spread((acct, perms) => {
          console.log(acct);
          console.log(perms);
        }),
      );
  }

  render() {
    // console.log('gridLayoutbox');
    return (
      <div className={style.layout}>
        <GridElementCTX.Consumer>
          {({ elements, resize, removeEl, editEl, editKey, removeEditKey }) => {
            return (
              <ResponsiveGridLayout
                className={style.layout}
                // autoSize
                isDraggable
                isResizable
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }} // eslint-disable-line
                cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }} // eslint-disable-line
                // onResizeStop={e => resize(e)}
                rowHeight={10}
              >
                {elements.map(key => (
                  <div
                    key={key}
                    className={style.box}
                    title={key}
                    data-grid={{ x: 0, y: 0, w: 10, h: 40 }} // eslint-disable-line
                    id={key}
                  >
                    <Element title={key} removeEl={removeEl} editEl={editEl}>
                      <Echart
                        id={key}
                        editKey={editKey}
                        removeEditKey={removeEditKey}
                      />
                    </Element>
                  </div>
                ))}
              </ResponsiveGridLayout>
            );
          }}
        </GridElementCTX.Consumer>
      </div>
    );
  }
}

export default Box;
