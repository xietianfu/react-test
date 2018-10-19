import { Input, Select } from 'antd';
import classnames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import camera from '../../assets/svgs/camera.svg';
import Icon from '../../components/Icon';
import { ROUTE_PATH_LIST } from '../../constants/menu';
import { openImgDiscern } from '../../redux/action/vin';
import { searchMenuList, searchTypeList } from './constants';

const SearchInput = Input.Search;
const { Option } = Select;

const Menu = styled.span`
  margin: 0.5em 21px 1em 21px;
  padding: 0.5em 0;
  color: #b6bbc5;
  font-size: 1.5em;
  cursor: pointer;
  &.active {
    color: white;
    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      width: 100%;
      left: 0;
      right: 100%;
      bottom: 0;
      background: @activeColor;
      height: 4px;
    }
  }
`;

const InputWrap = styled.div`
  position: relative;

  /* 调整搜索框 */

  .ant-input-search {
    margin-bottom: 1em;
    .ant-input {
      padding-left: 5.5em;
      border-radius: 100px;
      letter-spacing: 0.1em;
      height: 56px;
      font-size: 18px;
    }
    .ant-btn {
      border-radius: 0 100px 100px 0;
      width: 118px;
      height: 56px;
      font-size: 20px;
    }
  }

  /* 调整下拉选择 */
  .ant-select-focused {
    border: none;
  }
  .ant-select {
    position: absolute;
    z-index: 1;
    left: 15px;
    top: 13px;
    .ant-select-selection {
      border: none;
      font-size: 18px;
      color: #333333;
      &:focus {
        box-shadow: none;
      }
    }
    .ant-select-arrow {
      color: #333333;
      /* font-size: 18px; */
    }
  }

  .camera {
    position: absolute;
    z-index: 10;
    font-size: 3em;
    cursor: pointer;
    right: 3.6em;
    top: 0.35em;
    color: #cad1da;
    width: 30px;
    height: 30px;
    fill: #cad1da;
  }
  a {
    display: block;
    margin-right: 1.5em;
    float: right;
  }
`;

const ErrMeg = styled.p`
  margin-left: 1.5em;
  float: left;
  color: #f50505;
  font-size: 16px;
`;

const Search = ({
  selectedType,
  selectMenu,
  changeMenu,
  getSearchValue,
  toggleModal,
  errMsg,
  onchange,
}) => {
  return (
    <div>
      <div>
        {searchTypeList.map(item => (
          <Menu
            key={item.id}
            className={classnames('hvr-underline-from-left', {
              active: selectedType.id === item.id,
            })}
            onClick={() => changeMenu({ selectedType: item })}
          >
            {item.name}
          </Menu>
        ))}
      </div>
      <InputWrap>
        <Select
          defaultValue={searchMenuList[0].id}
          dropdownClassName="selectMenu"
          suffixIcon={<Icon type="caret-down" theme="outlined" />}
          onChange={value => {
            changeMenu({
              selectMenu: searchMenuList.find(item => item.id === value),
            });
          }}
        >
          {searchMenuList.map(item => (
            <Option
              value={item.id}
              key={item.id}
              // 在查保养时，禁用oe号
              disabled={
                item.id === searchMenuList[1].id && // eslint-disable-line
                selectedType.id === searchTypeList[1].id
              }
            >
              {item.name}
            </Option>
          ))}
        </Select>
        <SearchInput
          placeholder={selectMenu.placeholder}
          enterButton="查询"
          size="large"
          onSearch={value => getSearchValue(value)}
          onChange={onchange}
        />
        <ErrMeg>{errMsg}</ErrMeg>
        <Link
          to={ROUTE_PATH_LIST.selectCar.path}
          style={{ fontSize: '16px' }}
          // className="hvr-wobble-horizontal"
        >
          手动选择车型&ensp;&raquo;
        </Link>
        <Icon
          onClick={() => toggleModal()}
          className="camera"
          svg={camera}
          style={{ width: '20px', height: '20px' }}
        />
      </InputWrap>
      {/* 图片识别vin码 */}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => {
      dispatch(openImgDiscern());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Search);
