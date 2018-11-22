import { Legend } from '@components/Charts/config';
import { Button, Collapse, Drawer, Form } from 'antd';
import React, { Component } from 'react';
import { ChartSetting } from '../index'; // eslint-disable-line
import SqlForm from './SqlForm'; // eslint-disable-line
import axios from 'axios';
import { GridElementCTX } from '../index';

const Panel = Collapse.Panel; // eslint-disable-line

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sql: '',
      position: {},
      option: {},
    };
  }

  componentDidMount() {
    // console.log(this.props.config);
    // if (this.props.key) {
    //   axios
    //     .get('/api/chart/detail', {
    //       params: {
    //         chartId: this.props.key,
    //       },
    //     })
    //     .then(res => {
    //       console.log(res);
    //     });
    // } else {
    //   this.setState({
    //     option: {
    //       title: this.props.title,
    //       type: this.props.type,
    //     },
    //   });
    // }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log(`prevProps: ${prevProps}  prevState: ${prevState}`);
    // console.log(`this.props:${this.props}  this.state:${this.state}`);
    // console.log('prevProps', prevProps);
    // console.log('prevState', prevState);
    // console.log('this.props', this.props);
    // console.log('this.state', this.state);
    // console.log(this.props.config);
    // console.log(this.state);

    // 当前后prop相等后，停止更
    if (Object.is(this.props, prevProps)) {
      return false;
    }
    if (this.props.config.key) {
      axios
        .get('/api/chart/detail', {
          params: {
            chartId: this.props.config.key,
          },
        })
        .then(res => {
          const data = res.data.data; // eslint-disable-line
          this.setState({
            sql: data.sql,
            option: data.config,
          });
        });
      return true;
    }
    this.setState({
      option: {
        title: this.props.config.title,
        type: this.props.config.type,
      },
    });
    return true;
  }

  updateCode = sql => {
    this.setState({
      sql,
    });
  };

  onCodeFocusChange = boolean => {
    if (!boolean && this.state.sql !== '') {
      axios
        .post('/api/sql_result', {
          sql: this.state.sql,
        })
        .then(res => {
          this.setState({
            data: res.data.data,
          });
        });
    }
  };

  onSumbit = () => {
    const { addEl, removeConfig, toggleVisible, editKey } = this.props;
    const { sql, option } = this.state;
    const { key } = this.props.config;
    if (key) {
      console.log(key);
      axios
        .put('/api/chart/detail', {
          sql,
          config: option,
          chartId: this.props.config.key,
        })
        .then(() => {
          removeConfig();
          toggleVisible();
          editKey(key);
        });
    } else {
      axios
        .post('/api/chart/detail', {
          sql,
          config: option,
        })
        .then(res => {
          addEl(res.data.data.chartId);
        })
        .then(() => {
          removeConfig();
          toggleVisible();
        });
    }
  };

  updateConfig = config => {
    const { option } = this.state;
    console.log(config);
    this.setState({
      option: { ...option, ...config },
    });
    // editConfig({ config }); // 将所有变化存入到config中
  };

  render() {
    const { config, chartSeetingDrawer, toggleVisible } = this.props;
    // console.log('setting');
    return (
      <Drawer
        title={config.title}
        width={720}
        placement="right"
        onClose={toggleVisible}
        maskClosable={false}
        destroyOnClose
        visible={chartSeetingDrawer.visible}
        style={{
          height: 'calc(100% - 55px)',
          overflow: 'auto',
          paddingBottom: 53,
        }}
      >
        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header="设定数据源" key="1">
            <SqlForm
              onChangeCode={this.updateCode}
              onCodeFocusChange={this.onCodeFocusChange}
              code={this.state.sql}
            />
          </Panel>
          <Panel header="图表配置" key="2">
            <Legend
              pushConfig={this.updateConfig}
              config={this.state.option.legend}
            />
          </Panel>
        </Collapse>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #e8e8e8',
            padding: '10px 16px',
            textAlign: 'right',
            left: 0,
            background: '#fff',
            borderRadius: '0 0 4px 4px',
          }}
        >
          <Button
            style={{
              marginRight: 8,
            }}
            onClick={toggleVisible}
          >
            取消
          </Button>
          <Button onClick={() => this.onSumbit()} type="primary">
            提交
          </Button>
        </div>
      </Drawer>
    );
  }
}

const ChartSettingWrap = Form.create()(Setting);

export default ChartSettingWrap;
