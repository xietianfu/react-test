import { Legend, Title, Line, Size } from '@components/Charts/config';
import IsAccess from '@components/Charts/access';
import { Button, Collapse, Drawer, Form, Tabs, Select } from 'antd';
import { axios } from '../../../services';
import { api } from '../../../constants/api';
import React, { Component } from 'react';
import queryString from 'query-string';

import SqlForm from './SqlForm'; // eslint-disable-line
import PreviewSql from './PreviewSql';

const Panel = Collapse.Panel; // eslint-disable-line
const { TabPane } = Tabs;
const { Option } = Select;

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sql: '',
      position: {},
      option: {},
      templateList: [],
      slectTemplate: {}, // 选中的模板ID
      sqlData: [], //  预览数据
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
    axios.get(api.templateManage).then(res => {
      this.setState({
        templateList: res.data.templateList,
      });
    });
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
        .get('/chart/detail', {
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
        // title: this.props.config.title,
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
        .post('/sql_result', {
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
    const { slectTemplate } = this.state;
    const parsed = queryString.parse(location.search);
    console.log(parsed);
    const { sql, option } = this.state;
    const { key } = this.props.config;
    if (key) {
      axios
        .put('/chart/detail', {
          templateId: slectTemplate.templateId,
          dashboardId: parsed.id,
          config: option,
          id: this.props.config.key,
        })
        .then(() => {
          removeConfig();
          toggleVisible();
          editKey(key);
        });
    } else {
      axios
        .post('/chart/detail', {
          templateId: slectTemplate.templateId,
          dashboardId: parsed.id,
          config: option,
        })
        .then(res => {
          addEl(res.data.chartId);
        })
        .then(() => {
          removeConfig();
          toggleVisible();
        });
    }
  };

  updateConfig = config => {
    const { option } = this.state;
    this.setState({
      option: { ...option, ...config },
    });
    // editConfig({ config }); // 将所有变化存入到config中
  };

  /**
   * 验证配置项是否能在该图表配置项中显示配置
   * @param {class} component 待验证是否通过的组件
   * @param {Array} accessList 权限列表
   */
  isAccess(component, accessList) {
    IsAccess(component, this.props.config.type, accessList);
  }

  /**
   * 选中模板ID存入state中
   * @param {string} id 模板id
   */
  selectTempletId(id) {
    this.setState({
      slectTemplate: this.state.templateList.find(
        item => item.templateId === id,
      ),
    });
  }

  // 查看sql数据
  previewSql = () => {
    const { slectTemplate } = this.state;
    axios
      .post(api.sqlResult, {
        sql: slectTemplate.sql,
      })
      .then(res => {
        this.setState({
          sqlData: res.data,
        });
      });
  };

  render() {
    const { config, chartSeetingDrawer, toggleVisible } = this.props;
    const { option, templateList, sqlData } = this.state;
    // console.log('setting');
    return (
      <Drawer
        title={config.title}
        width={720}
        placement="right"
        onClose={toggleVisible}
        maskClosable={false}
        destroyOnClose
        mask={false}
        visible={chartSeetingDrawer.visible}
        style={{
          height: 'calc(100% - 55px)',
          overflow: 'auto',
          paddingBottom: 53,
        }}
      >
        <Tabs
          bordered={false}
          tabPosition="top"
          type="card"
          defaultActiveKey="1"
          style={{
            padding: '0 1em',
          }}
        >
          <TabPane tab="设定数据源" key="1">
            <Collapse defaultActiveKey={['1']}>
              <Panel header="选择数据模板" key="1">
                <h1>选择数据模板</h1>
                <Select
                  style={{ width: '100%' }}
                  onChange={id => this.selectTempletId(id)}
                >
                  {templateList.map(item => (
                    <Option value={item.templateId} key={item.templateId}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <SqlForm
                  onChangeCode={this.updateCode}
                  onCodeFocusChange={this.onCodeFocusChange}
                  code={this.state.sql}
                />
              </Panel>
            </Collapse>

            <Button type="primary" block onClick={() => this.previewSql()}>
              查看数据
            </Button>
            {sqlData.length > 0 && <PreviewSql data={sqlData} />}
          </TabPane>
          <TabPane tab="基本配置" key="2">
            <Title config={option.title} pushConfig={this.updateConfig} />
            <Legend
              pushConfig={this.updateConfig}
              config={this.state.option.legend}
            />
            <Size />
          </TabPane>
          <TabPane tab="高级配置" key="3">
            <Line />
          </TabPane>
        </Tabs>

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
