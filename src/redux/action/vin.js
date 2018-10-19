import { HOME } from './actionType';
import { axios } from '../../services';
import { searchApi } from '../../services/search';

// eslint-disable-next-line
export const addVinList = data => ({ type: HOME.ADD_VINLIST, data });

export const addCar = data => ({ type: HOME.ADD_CAR, data });

export const addHistoryPic = data => ({ type: HOME.ADD_HISTORYPIC, data });

export const closePicModal = (data = false) => ({
  type: HOME.CLOSE_PICMODAL,
  data,
});

export const fetchHistoryPic = id => {
  return dispatch => {
    return axios
      .get(searchApi.PartsHistoryPic, { params: { id } })
      .then(res => {
        dispatch(addHistoryPic(res.pic));
      });
  };
};

export const closeImgDiscern = () => ({
  type: HOME.CLOSE_IMGDISCERN,
});

export const openImgDiscern = () => ({
  type: HOME.OPEN_IMGDISCERN,
});

export const initImgDiscern = () => ({
  type: HOME.INIT_IMGDISCERN,
});

export const addImgtoImgDiscern = data => ({
  type: HOME.ADD_IMG_IMGDISCERN,
  data,
});

export const addVINtoImgDiscern = data => ({
  type: HOME.ADD_VIN_IMGDISCERN,
  data,
});
