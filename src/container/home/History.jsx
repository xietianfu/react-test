import React from 'react';
import styled from 'styled-components';
import Empty from '../../components/Load/Empty';
import HistoryItem from './HistoryItem';
import { ROUTE_PATH_LIST } from '../../constants/menu';

const Wrap = styled.div`
  box-shadow: 0 2px 10px 2px rgba(33, 53, 95, 0.13);

  margin: 52px 0 2em;
  padding: 3em 4em;
  border-radius: 10px;
  min-height: 500px;
  background: white;
  h3 {
    margin-bottom: 1em;
    font-size: 2em;
  }
`;

const ViewMore = styled.a`
  float: right;
  text-align: right;
  cursor: pointer;
  font-size: 16px;
  color: #00a2ff;
  transition: all 0.5s;
  border: 0.5em solid rgba(0, 0, 0, 0);
  &:hover {
    margin-right: -0.5em;
  }
`;

const History = ({ historyList = [], history }) => {
  const gotorecord = () => {
    history.push(ROUTE_PATH_LIST.record.path);
  };
  return (
    <Wrap>
      <h3>
        报价记录
        <ViewMore onClick={() => gotorecord()}>
          查看全部报价记录&ensp;&raquo;
        </ViewMore>
      </h3>
      {historyList.length === 0 ? (
        <Empty height="400px" placeholder="暂无报价记录" />
      ) : (
        historyList.map(item => (
          <HistoryItem key={item.id} data={item} history={history} />
        ))
      )}
    </Wrap>
  );
};

export default History;
