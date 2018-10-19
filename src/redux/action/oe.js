import { HOME } from './actionType';
import { axios } from '../../services';
import { searchApi } from '../../services/search';
import { ERROR_CODE } from '../../constants/errCode';
import { message } from 'antd';

export const addOeList = data => ({ type: HOME.ADD_OELIST, data });
export const addOeId = data => ({ type: HOME.ADD_OEID, data });

export const openOfferDetail = () => ({
  type: HOME.OPEN_OFFERDETAIL,
  data: true,
});
export const closeOfferDetail = () => ({
  type: HOME.CLOSE_OFFERDETAIL,
  data: false,
});

export const addOfferDetailQR = img => ({
  type: HOME.ADD_OFFERDETAILQR,
  data: img,
});

export const fetchOfferDetailQR = id => {
  return dispatch => {
    return axios
      .get(searchApi.GetOfferDetail, {
        params: { inquiryId: id },
      })
      .then(res => {
        dispatch(openOfferDetail());
        dispatch(addOfferDetailQR(res.pic));
      })
      .catch(err => {
        message.error('获取价格详情失败，请稍后再试！');
      });
  };
};
