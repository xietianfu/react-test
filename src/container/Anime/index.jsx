import React, { Component } from 'react';
import { Button } from 'antd';

import anime from 'animejs';

import style from './style.less';

export class Anime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pre: 0,
    };
  }

  changeLocation = () => {
    if (this.state.pre) {
      anime({
        targets: '.box',
        translateX: 250,
        rotate: '1turn',
        width: '500px',
        // backgroundColor: '#FFF',
        duration: 800,
      });
      this.setState({
        pre: 0,
      });
    } else {
      anime({
        targets: '.box',
        translateX: 0,
        rotate: '0turn',
        width: '200px',
        borderRadius: '1000px',
        // backgroundColor: '#FFF',
        duration: 800,
      });
      this.setState({
        pre: 1,
      });
    }
  };

  render() {
    return (
      <div>
        <Button type="primary" className="box" onClick={this.changeLocation}>
          hhhh
        </Button>
        <div
          className={style.box}
          onClick={() => {
            anime({
              targets: style['block-1'],
              translateX: 250,
              scale: 2,
              rotate: '1turn',
            });
          }}
        >
          <div className={style['block-1']} />
        </div>
        <h1 className="title">hello world</h1>
      </div>
    );
  }
}

export default Anime;
