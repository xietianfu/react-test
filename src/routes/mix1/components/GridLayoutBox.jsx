import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { GridElementCTX } from '../index'; // eslint-disable-line
import style from './style.less'; // eslint-disable-line
const ResponsiveGridLayout = WidthProvider(Responsive);
import Element from './Element';

const Box = () => {
  return (
    <div className={style.layout}>
      <GridElementCTX.Consumer>
        {({ elements, resize }) => {
          return (
            <ResponsiveGridLayout
              className={style.layout}
              autoSize
              isDraggable
              isResizable
              breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
              cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
              onResizeStop={e => resize(e)}
              rowHeight={10}
              // width={1000}
            >
              {elements.map(item => (
                <div
                  key={item.key}
                  className={style.box}
                  title={item.key}
                  data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }} // eslint-disable-line
                >
                  <Element title={item.key}>{item.dom}</Element>
                </div>
              ))}
            </ResponsiveGridLayout>
          );
        }}
      </GridElementCTX.Consumer>
    </div>
  );
};

export default Box;
