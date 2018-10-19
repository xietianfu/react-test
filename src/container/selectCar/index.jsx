import { Select } from 'antd';
import classNames from 'classnames';
// import { ROUTES } from 'CONSTANTS';
import uniq from 'lodash/uniq';
import queryString from 'query-string';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BreadcrumbTool from '../../components/Header/BreadcrumbTool';
import { addCar } from '../../redux/action/vin';
import { axios } from '../../services';
import { selectCarApi } from '../../services/selectCar';
import Flow from './Flow';

const Wrap = styled.div`
  margin: 0 auto;
  width: 1152px;
  overflow: hidden;
  /* padding: 1em;
  padding: 0em calc(50% - 650px); */
`;

const ROUTES = {
  BRANDS: '/select-car',
};

const routeList = [
  {
    name: '首页',
    to: '/home',
  },
  '手动选择车型',
];

@connect(null)
export class Brand extends React.Component {
  constructor(props) {
    super(props);
    this.queryParams = queryString.parse(this.props.location.search);
    this.state = {
      // 当前选车的第几步
      stage: parseInt(this.queryParams.stage, 10),

      // 名称
      brandName: this.queryParams.brandName,
      groupName: this.queryParams.groupName,
      seriesName: this.queryParams.seriesName,
      typeName: this.queryParams.typeName,

      // 是通过库存还是epc进来的品牌选车
      queryCategory: this.queryParams.queryCategory,

      // 品牌, 车型, 车组, 车型数据
      brands: [],
      series: [],
      groups: [],
      models: [],

      // 选择的品牌首字母
      activeLetterIndex: this.queryParams.activeLetterIndex || 0,
      // 当前选择的品牌id
      activeIndex1: this.queryParams.activeIndex1,
      // 当前选择的车系id
      activeIndex2: this.queryParams.activeIndex2,
      // 当前选择的车组id
      activeIndex3: this.queryParams.activeIndex3,
    };
  }

  componentDidMount() {
    this.getDataByStage();
    const { history } = this.props;
    // 首次进入后，进入选择品牌
    if (!location.search) {
      history.push('select-car?activeLetterIndex=0&stage=1');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { location } = this.props;
    if (location.search !== nextProps.location.search) {
      this.queryParams = queryString.parse(nextProps.location.search);
      // 通过url参数更新state
      this.setState(
        Object.assign(
          {
            activeIndex2: null,
            activeIndex3: null,
            brandName: null,
            groupName: null,
            seriesName: null,
          },
          this.queryParams,
          { stage: Number(this.queryParams.stage) },
        ),
      );
      this.getDataByStage();
    }
  }

  // 根据步骤来获取对应的品牌，车组，车系，车型数据
  getDataByStage = () => {
    switch (Number(this.queryParams.stage)) {
      case 1:
        this.getBrandList();
        break;
      case 2:
        this.getCarSeries(this.queryParams.activeIndex1);
        break;
      case 3:
        this.getCarGroup(this.queryParams.activeIndex2);
        break;
      case 4:
        // 进入车型选择时，清空所有的筛选项
        this.setState({
          year: '',
          engine: '',
          transmission: '',
          fuel: '',
          drive: '',
        });
        this.getCarModel(this.queryParams.activeIndex3);
        break;
      default:
        break;
    }
  };

  getBrandList() {
    axios.get('/api/query/brand_list').then(res => {
      this.setState({
        brands: res.result,
      });
    });
  }

  getCarSeries(id) {
    // SelectCarApi.getCarSeries({ id }).then(data => {
    //   this.setState({
    //     series: data.result,
    //   });
    // });
    axios
      .get(selectCarApi.carSeries, {
        params: { id },
      })
      .then(data => {
        this.setState({
          series: data.result,
        });
      });
  }

  getCarGroup(id) {
    // SelectCarApi.getCarGroup({ id }).then(data => {
    //   this.setState({
    //     groups: data.result,
    //   });
    // });
    axios
      .get(selectCarApi.carGroup, {
        params: { id },
      })
      .then(data => {
        this.setState({
          groups: data.result,
        });
      });
  }

  getCarModel(id) {
    // SelectCarApi.getCarModel({ id }).then(data => {
    //   this.setState({
    //     models: data.result,
    //   });
    // });
    axios
      .get(selectCarApi.carModel, {
        params: { id },
      })
      .then(data => {
        this.setState({
          models: data.result,
        });
      });
  }

  handleBrandChange = ({ activeIndex1, brandName }) => {
    const { queryCategory } = this.state;
    const { history } = this.props;
    if (Number(this.queryParams.stage) !== 2) {
      const search = queryString.stringify({
        stage: 2,
        activeIndex1,
        brandName,
        queryCategory,
      });
      history.push(`${ROUTES.BRANDS}?${search}`);
    }
  };

  handleSeriesChange = ({ activeIndex2, seriesName }) => {
    const { queryCategory } = this.state;
    const { history } = this.props;
    const { activeIndex1, brandName } = this.queryParams;

    if (Number(this.queryParams.stage) !== 3) {
      const search = queryString.stringify({
        stage: 3,
        activeIndex1,
        activeIndex2,
        brandName,
        seriesName,
        queryCategory,
      });
      history.push(`${ROUTES.BRANDS}?${search}`);
    }
  };

  handleGroupChange = ({ activeIndex3, groupName }) => {
    const { queryCategory } = this.state;
    const { history } = this.props;

    const {
      activeIndex1,
      brandName,
      activeIndex2,
      seriesName,
    } = this.queryParams;
    if (Number(this.queryParams.stage) !== 4) {
      const search = queryString.stringify({
        stage: 4,
        activeIndex1,
        activeIndex2,
        activeIndex3,
        groupName,
        brandName,
        seriesName,
        queryCategory,
      });
      history.push(`${ROUTES.BRANDS}?${search}`);
    }
  };

  handleCarModelChange = vehicle => {
    const { queryCategory } = this.state;
    const { changeCurrentVehicleList, history, dispatch } = this.props;
    let route;

    if (queryCategory === 'epc') {
      route = ROUTES.EPC_RESULT;
    } else if (queryCategory === 'order') {
      changeCurrentVehicleList([vehicle]);
      route = ROUTES.QUICK_OPEN;
    } else {
      route = ROUTES.STORE_RESULT;
    }
    axios
      .get('/api/vehicleById', {
        params: {
          vin: '',
          id: vehicle.vehicleId,
          flag: 1,
        },
      })
      .then(res => {
        dispatch(addCar({ ...vehicle, historyId: res.historyId }));
        history.push('/price/vin');
      });
  };

  // 在上面的步骤条上改变步骤数，进入对应的url
  handleStageChange = stage => {
    const { stage: oldStage } = this.state;
    const { history } = this.props;

    if (Number(stage) >= Number(oldStage)) return;
    const {
      activeIndex1,
      brandName,
      activeIndex2,
      seriesName,
      activeLetterIndex,
      queryCategory,
    } = this.state;

    let search;

    if (stage === 1) {
      search = queryString.stringify({
        stage,
        activeLetterIndex,
        queryCategory,
      });
    } else if (stage === 2) {
      search = queryString.stringify({
        stage,
        activeIndex1,
        queryCategory,
        brandName,
      });
    } else if (stage === 3) {
      search = queryString.stringify({
        stage,
        activeIndex1,
        activeIndex2,
        queryCategory,
        brandName,
        seriesName,
      });
    }
    history.push(`${ROUTES.BRANDS}?${search}`);
  };

  // 渲染车型筛选
  renderSelect() {
    const { Option } = Select;
    const { models } = this.state;
    const activeDetailList = models;

    const currentYearList = uniq(
      activeDetailList.map(item => item.year).filter(Boolean),
    );
    const currentDisplacementList = uniq(
      activeDetailList.map(item => item.engine).filter(Boolean),
    );
    const currentTransmissionList = uniq(
      activeDetailList.map(item => item.transmission).filter(Boolean),
    );
    const currentFuelTypeList = uniq(
      activeDetailList.map(item => item.fuel).filter(Boolean),
    );
    const currentDrivingModeList = uniq(
      activeDetailList.map(item => item.drive).filter(Boolean),
    );

    const OptionCreator = (item, index) => (
      <Option value={item} key={index}>
        {item}
      </Option>
    );

    const yearList = currentYearList.map(OptionCreator);
    const displacementList = currentDisplacementList.map(OptionCreator);
    const transmissionList = currentTransmissionList.map(OptionCreator);
    const fuelTypeList = currentFuelTypeList.map(OptionCreator);
    const drivingModeList = currentDrivingModeList.map(OptionCreator);

    return (
      <div className="type-select-container clearfix">
        <div className="select-item">
          <Select
            className="spec-select"
            defaultValue="年款"
            onChange={value => {
              this.setState({ year: value });
            }}
            style={{ width: 185 }}
          >
            {yearList}
          </Select>
          <span className="arrow" />
        </div>
        <div className="select-item">
          <Select
            className="spec-select"
            defaultValue="发动机"
            onChange={value => {
              this.setState({ engine: value });
            }}
            style={{ width: 185 }}
          >
            {displacementList}
          </Select>
          <span className="arrow" />
        </div>
        <div className="select-item">
          <Select
            className="spec-select"
            defaultValue="变速箱"
            onChange={value => {
              this.setState({ transmission: value });
            }}
            style={{ width: 185 }}
          >
            {transmissionList}
          </Select>
          <span className="arrow" />
        </div>
        <div className="select-item">
          <Select
            className="spec-select"
            defaultValue="燃油类型"
            onChange={value => {
              this.setState({ fuel: value });
            }}
            style={{ width: 185 }}
          >
            {fuelTypeList}
          </Select>
          <span className="arrow" />
        </div>
        <div className="select-item">
          <Select
            className="spec-select"
            defaultValue="驱动方式"
            onChange={value => {
              this.setState({ drive: value });
            }}
            style={{ width: 185 }}
          >
            {drivingModeList}
          </Select>
          <span className="arrow" />
        </div>
      </div>
    );
  }

  render() {
    const {
      stage,
      brands,
      series,
      groups,
      models,
      activeLetterIndex,
      brandName,
      seriesName,
      groupName,
      typeName,
    } = this.state;

    // 首字母列表
    this.indexArr = uniq(brands.map(item => item.capital));

    // 当前选择的首字母高亮品牌

    const activeBrands = // eslint-disable-line
      brands.length > 0
        ? brands.filter((item, index) => {
            item.index = index; // eslint-disable-line
            return this.indexArr[activeLetterIndex] === item.capital; // eslint-disable-line
          })[0] // eslint-disable-line
        : { data: [] };

    const activeSeriesList = series;
    const activeGroupList = groups;
    let activeModelList = models;

    // 通过筛选条件过滤车型列表
    ['year', 'engine', 'transmission', 'fuel', 'drive'].forEach(selectKey => {
      if (this.state[selectKey]) {
        // eslint-disable-line
        // eslint-disable-line
        activeModelList = activeModelList.filter(
          item => item[selectKey] === this.state[selectKey], // eslint-disable-line
        );
      }
    });

    return (
      <Wrap>
        <BreadcrumbTool routeList={routeList} />

        <div className="brands-container">
          <Flow
            stage={stage}
            handleStageChange={this.handleStageChange}
            brandName={brandName}
            seriesName={seriesName}
            groupName={groupName}
            typeName={typeName}
          />
          {stage === 1 && (
            <div className="choose-brand-container">
              <ul className="letters clearfix">
                {this.indexArr.map((index, arrIndex) => (
                  // eslint-disable-next-line
                  <li
                    key={index}
                    data-index={arrIndex}
                    onClick={() =>
                      this.setState({
                        // eslint-disable-line
                        activeLetterIndex: arrIndex,
                      })
                    }
                    className={classNames({
                      active: parseInt(activeLetterIndex, 10) === arrIndex,
                    })}
                  >
                    {index}
                  </li>
                ))}
              </ul>
              <ul className="brands clearfix">
                {activeBrands.data.map(activeBrand => (
                  // eslint-disable-next-line
                  <li
                    className="index-item"
                    title={activeBrand.name}
                    key={activeBrand.id}
                    onClick={() =>
                      this.handleBrandChange({
                        // eslint-disable-line
                        activeIndex1: activeBrand.id,
                        brandName: activeBrand.name,
                      })
                    }
                  >
                    {activeBrand.icon && (
                      <img src={activeBrand.icon} alt="当前品牌" />
                    )}
                    <span>{activeBrand.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {stage === 2 && (
            <div className="choose-brand-container choose-cat-container">
              <div className="car-category">
                <div className="index-scroll-content">
                  <div className="brands clearfix">
                    {activeSeriesList.map(item => (
                      <div className="brands-item" key={item.brandName}>
                        <div className="brand-name">{item.brandName}</div>
                        <ul>
                          {item.brandList.map(itemBrand => (
                            // eslint-disable-next-line
                            <li
                              className="index-item car-cate-item"
                              key={itemBrand.name}
                              title={itemBrand.name}
                              onClick={() =>
                                this.handleSeriesChange({
                                  // eslint-disable-line
                                  activeIndex2: itemBrand.seriesId,
                                  seriesName: itemBrand.name,
                                })
                              }
                            >
                              <span>{itemBrand.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {stage === 3 && (
            <div className="choose-brand-container choose-cat-container">
              <div className="car-type">
                <ul className="index-scroll-content">
                  <ul className="brands clearfix">
                    {activeGroupList.length > 0 ? (
                      activeGroupList.map(child => (
                        // eslint-disable-next-line
                        <li
                          className={classNames('index-item', 'car-group-item')}
                          title={child.groupName}
                          key={child.groupName}
                          onClick={() => {
                            this.handleGroupChange({
                              groupName: child.groupName,
                              activeIndex3: child.groupId,
                            });
                          }}
                        >
                          <span>{child.groupName}</span>
                        </li>
                      ))
                    ) : (
                      <p className="no-data-text">暂无数据</p>
                    )}
                  </ul>
                </ul>
              </div>
            </div>
          )}

          {stage === 4 && (
            <div className="choose-brand-container">
              {this.renderSelect()}
              <div className="car-type">
                <ul className="index-scroll-content">
                  <ul className="brands clearfix">
                    {activeModelList.length > 0 ? (
                      activeModelList.map((model, index) => (
                        // eslint-disable-next-line
                        <li
                          className={classNames('index-item', 'car-type-item')}
                          title={model.name}
                          key={index} // eslint-disable-line
                          onClick={() => {
                            this.handleCarModelChange(model);
                          }}
                        >
                          <span>{model.name}</span>
                        </li>
                      ))
                    ) : (
                      <p className="no-data-text">暂无数据</p>
                    )}
                  </ul>
                </ul>
              </div>
            </div>
          )}
        </div>
      </Wrap>
    );
  }
}

export default Brand;
