import React, { Component } from 'react';
import { Modal, Row, Col, Input, Button, Tabs, Icon } from 'antd';
import SqlForm from './SqlForm';
import PreviewSql from './PreviewSql';
import { axios } from '../../../services';
import { api } from '../../../constants/api';

const { TextArea } = Input;
const { TabPane } = Tabs;

class MannageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      remark: '',
      filters: [],
      newFilter: {
        id: '',
        name: '',
      },
      sql: '',
      sqlData: [],
    };
  }

  addFilter = () => {
    const { filters, newFilter } = this.state;

    this.setState({
      filters: [
        ...filters,
        { id: newFilter.id, name: newFilter.name, data: [] },
      ],
      newFilter: {},
    });
  };

  removeFilter = id => {
    const { filters } = this.state;

    this.setState({
      filters: filters.filter(item => item.id !== id),
    });
  };

  changeNewFilter = (type, val) => {
    const { newFilter } = this.state;
    this.setState({
      newFilter: {
        ...newFilter,
        [type]: val,
      },
    });
  };

  addCondition = id => {
    const { filters } = this.state;
    let target = filters.find(item => item.id === id); // eslint-disable-line
    target.data.push({ name: '', condition: '' });

    this.setState({
      filters: [...filters.filter(item => item.id !== id), target],
    });
  };

  editCondition = (id, index, type, val) => {
    const { filters } = this.state;
    let target = filters.find(item => item.id === id); // eslint-disable-line
    target.data[index][type] = val;

    this.setState({
      filters: [...filters.filter(item => item.id !== id), target],
    });
  };

  removeCondition = (id, index) => {
    const { filters } = this.state;
    let target = filters.find(item => item.id === id); // eslint-disable-line
    // 删除该condition
    target.data.splice(index, 1);

    this.setState({
      filters: [...filters.filter(item => item.id !== id), target],
    });
  };

  changeCode = sql => {
    this.setState({
      sql,
    });
  };

  onSumbit = () => {
    const { name, remark, sql, filters } = this.state;
    axios
      .post(api.templateManage, {
        name,
        remark,
        sql,
        filters,
      })
      .then(res => console.log(res.data));
    this.props.toggleVisible();
  };

  previewSql = () => {
    const { sql } = this.state;
    axios
      .post(api.sqlResult, {
        sql,
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          sqlData: res.data,
        });
      });
  };

  render() {
    const { type, visible, changeTable, toggleVisible, data } = this.props;
    const { filters, sql, name, remark, sqlData } = this.state;
    return (
      <Modal
        visible={visible}
        onCancel={toggleVisible}
        onOk={this.onSumbit}
        width="1200px"
      >
        <Row>
          <Col span={12}>
            <h2>基本信息</h2>
            <p>模型标题</p>
            <Input
              value={name}
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
            />
            <p>模型注释</p>
            <TextArea
              autosize
              value={remark}
              onChange={e => {
                this.setState({ remark: e.target.value });
              }}
            />
          </Col>
          <Col span={12}>
            <h2>sql语句</h2>
            <SqlForm onChangeCode={this.changeCode} code={sql} />
            <Button type="primary" block onClick={() => this.previewSql()}>
              预览
            </Button>
          </Col>
          <Col span={12}>
            <h2>过滤设置</h2>
            <Input
              placeholder="输入过滤Id号"
              onChange={e => this.changeNewFilter('id', e.target.value)}
            />
            <Input
              placeholder="输入过滤项标题"
              onChange={e => this.changeNewFilter('name', e.target.value)}
            />
            <Button type="dashed" block onClick={() => this.addFilter()}>
              添加过滤
            </Button>

            <Tabs>
              {filters.map(item => {
                return (
                  <TabPane tab={item.name} key={item.id}>
                    {item.data.map((val, index) => (
                      <div key={index}>
                        <Input
                          value={val.name}
                          onChange={e =>
                            // eslint-disable-next-line
                            this.editCondition(
                              item.id,
                              index,
                              'name',
                              e.target.value,
                            )
                          }
                        />
                        <Input
                          value={val.condition}
                          width="80%"
                          onChange={e =>
                            // eslint-disable-next-line
                            this.editCondition(
                              item.id,
                              index,
                              'condition',
                              e.target.value,
                            )
                          }
                        />

                        <Button
                          type="danger"
                          block
                          onClick={() => this.removeCondition(item.id, index)}
                        >
                          删除该过滤
                        </Button>
                      </div>
                    ))}
                    <Button onClick={() => this.addCondition(item.id)}>
                      添加过滤字段
                    </Button>
                    <Button
                      type="danger"
                      block
                      onClick={() => this.removeFilter(item.id)}
                    >
                      删除过滤
                    </Button>
                  </TabPane>
                );
              })}
            </Tabs>
          </Col>
          <Col span={12}>
            <h2>预览</h2>
            {sqlData.length > 0 && <PreviewSql data={this.state.sqlData} />}
          </Col>
        </Row>
      </Modal>
    );
  }
}

export default MannageModal;
