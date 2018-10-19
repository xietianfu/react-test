import { message } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import bgImg from '../../assets/images/home-bg.jpg';
import { addVinList } from '../../redux/action/vin';
import { axios } from '../../services';
import { offerApi, searchApi } from '../../services/search';
import { vinApi } from '../../services/vin';
import { searchMenuList, searchTypeList } from './constants';
import History from './History';
import ImgDiscern from './ImgDiscern';
import OEModal from './OEModal';
import { openSearchFullModal } from '../../redux/action';

import Search from './Search';
import { ROUTE_PATH_LIST } from '../../constants/menu';
import modal from '../../models/modal';

const Wrap = styled.div`
  background: url(${bgImg});
  background-repeat: no-repeat;
`;

const Content = styled.div`
  margin: 0 auto;
  width: 1152px;
  overflow: hidden;
  /* padding: 1em; */
  /* padding: 0em calc(50% - 650px); */
  h1 {
    margin: 85px 0 60px 0;
    color: white;
    text-align: center;
    font-size: 4em;
    letter-spacing: 0.1em;
    font-weight: 530;
  }
`;

const SearchBox = styled.div`
  z-index: 100;
  margin: 0 auto;
  padding: 3em 10em;
  max-width: 980px;
  height: 230px;
  background: rgba(30, 30, 48, 0.5);
  border-radius: 1000px;
`;

const mapDispatchToProps = dispatch => {
  return {
    openSearchFull: () => {
      dispatch(openSearchFullModal());
    },
  };
};

@connect(
  null,
  mapDispatchToProps,
)
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: searchTypeList[0], // 默认选中的查询类型
      selectMenu: searchMenuList[0], // 默认选中的查询方式
      visible: false, // 弹窗
      historyList: [], // 报价历史
      oeSource: [], // 等待勾选的oe列表
      keyworld: '',
      errMsg: '', // 错误提示信息
      loging: false, // 默认oemodal的状态
      searchFullModal: {
        visible: false,
      },
      shopFormModal: {
        visible: false,
      },
    };
  }

  componentDidMount() {
    axios
      .get(offerApi.record, {
        params: {
          count: 5,
          page: 1,
        },
      })
      .then(res =>
        // eslint-disable-next-line
        this.setState({
          historyList: res.results,
        }),
      );
    // const { openSearchFull } = this.props;
    // openSearchFull();
  }

  /**
   * 改变搜索的方式
   * @param {object} params 选中的搜索模式对象
   * @author xietf
   */
  changeSelected = params => {
    this.setState({
      ...params,
      keyworld: '',
      errMsg: '',
    });
  };

  /**
   * 打开关闭modal
   */
  toggleModal = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
  };

  getSearchValue = val => {
    const { selectMenu } = this.state;
    // 根据选中的查询号模式
    this.fetchSearch(val, selectMenu.id);
    this.setState({
      keyworld: val,
    });
  };

  fetchSearch = (val, type) => {
    const { dispatch, history } = this.props;
    const { selectedType } = this.state;
    if (val === '') {
      let errMsg = '';
      switch (type) {
        case 'vin':
          errMsg = '请输入17位车架号';
          break;
        case 'OENumber':
          errMsg = '请输入原厂零件号';
          break;
        default:
          break;
      }
      this.setState({
        errMsg,
      });
    } else {
      if (type === 'vin') {
        axios
          .get(vinApi.vehicleByVin, {
            params: {
              vin: val,
            },
          })
          .then(res => {
            const list = res.vehicleList.map(item => ({
              ...item,
              search: val,
            }));
            if (list.length > 0) {
              dispatch(addVinList(list));
              history.push(
                `${ROUTE_PATH_LIST.home.choice.path}?vin=${val}&type=${
                  selectedType.id
                }`,
              );
            } else {
              message.warn('未找到与改vin码对应的车型');
            }
          })
          .catch(() => {
            this.setState({
              errMsg: 'VIN码错误，请核实VIN码！',
            });
          });
      }
      if (type === 'oe') {
        // 先弹出再加载数据
        this.setState({
          visible: true,
          loding: true,
          oeSource: [],
        });
        axios
          .post(searchApi.oeHistory, {
            oe: val,
          })
          .then(res => this.setState({ oeSource: res.results, loding: false }))
          .catch(() => {
            this.setState({
              errMsg: '请输入原厂零件号',
            });
          });
      }
    }
  };

  onchange = () => {
    this.setState({
      errMsg: '',
    });
  };

  changeSearchFullModal = params => {
    const { type } = params;
    delete params.type;
    modal.changeVisible.apply(this, ['searchFullModal', params.visible]);
    if (type) {
      this.setState({
        shopFormModal: {
          visible: true,
        },
      });
    }
  };

  changeShopFormModal = params => {
    const { type } = params;
    modal.changeVisible.apply(this, ['shopFormModal', params.visible]);
  };

  render() {
    const {
      selectedType,
      selectMenu,
      visible,
      historyList,
      oeSource,
      errMsg,
      loding,
      searchFullModal,
      shopFormModal,
    } = this.state;
    const { history } = this.props;
    return (
      <Wrap>
        <Content>
          <h1>超级报价员</h1>
          <SearchBox>
            <Search
              selectedType={selectedType}
              selectMenu={selectMenu}
              changeMenu={this.changeSelected}
              getSearchValue={this.getSearchValue}
              errMsg={errMsg}
              onchange={this.onchange}
            />
          </SearchBox>
          <History historyList={historyList} history={history} />
        </Content>
        <OEModal
          visible={visible}
          toggleModal={this.toggleModal}
          oeSource={oeSource}
          history={history}
          loding={loding}
        />
        <div className="modal">
          <ImgDiscern history={history} />
        </div>
      </Wrap>
    );
  }
}

export default Home;
