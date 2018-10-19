import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const Wrap = styled.div`
  position: absolute;
  left: 4px;
  top: 55px;
  button {
    margin: 0 8px;
  }

  .ant-btn {
    border: none;
  }
  .ant-btn-default {
    background: #f2f2f2;
    &:hover {
      background: #40a9ff;
      color: white;
    }
  }
`;

const Type = [
  {
    key: 'all',
    name: '全部',
  },
  {
    key: 'price',
    name: '查价格',
  },
  {
    key: 'maintain',
    name: '查保养',
  },
];

class FilterType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: Type[0].key,
    };
  }

  handleClick = index => {
    const { getData } = this.props;
    getData(index);
    this.setState({
      select: Type[index].key,
    });
  };

  render() {
    const { select } = this.state;
    return (
      <Wrap>
        {/* todo: 激活button */}
        {Type.map((item, index) => (
          <Button
            key={item.key}
            type={item.key === select ? 'primary' : 'default'}
            onClick={() => this.handleClick(index)}
          >
            {item.name}
          </Button>
        ))}
      </Wrap>
    );
  }
}

export default FilterType;
