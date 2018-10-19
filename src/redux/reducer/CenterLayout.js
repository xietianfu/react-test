import { HOME } from '../action/actionType';

const initialState = {
  vinList: [],
  detailVisble: false,
  modal: {
    searchFull: {
      visible: false,
    },
    shopFrom: {
      visible: false,
    },
  },
};

export default (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case HOME.ADD_VINLIST:
      return { ...state, vinList: data };
    case HOME.ADD_CAR:
      return { ...state, car: data };
    case HOME.ADD_HISTORYPIC:
      return { ...state, picModal: { historyPic: data, visible: true } };
    case HOME.CLOSE_PICMODAL:
      return { ...state, picModal: { visible: false } };
    case HOME.ADD_OELIST:
      return { ...state, oeList: { ...state.oeList, list: data } };
    case HOME.ADD_OEID:
      return { ...state, oeList: { ...state.oeList, id: data } };
    case HOME.OPEN_OFFERDETAIL:
      // return { ...state, detailVisble: true };
      return { ...state, offerDatail: { ...state.offerDatail, visible: true } };
    case HOME.CLOSE_OFFERDETAIL:
      // return { ...state, detailVisble: false };
      return {
        ...state,
        offerDatail: { ...state.offerDatail, visible: false },
      };
    case HOME.ADD_OFFERDETAILQR:
      return {
        ...state,
        offerDatail: { ...state.offerDatail, QR: data },
      };

    case HOME.OPEN_IMGDISCERN:
      return { ...state, imgDiscern: { ...state.imgDiscern, visible: true } };
    case HOME.CLOSE_IMGDISCERN:
      return { ...state, imgDiscern: { ...state.imgDiscern, visible: false } };
    case HOME.INIT_IMGDISCERN: {
      return { ...state, imgDiscern: { ...state.imgDiscern, vin: 0, img: '' } };
    }
    case HOME.ADD_IMG_IMGDISCERN: {
      return { ...state, imgDiscern: { ...state.imgDiscern, img: data } };
    }
    case HOME.ADD_VIN_IMGDISCERN: {
      return { ...state, imgDiscern: { ...state.imgDiscern, vin: data } };
    }
    case HOME.USER_DATA.OPEN_SEARCH_FULL_MODAL: {
      console.log(state.modal);
      return {
        ...state,
        modal: {
          ...state.modal,
          searchFull: {
            visible: true,
            type: true,
            data,
          },
        },
      };
    }
    case HOME.USER_DATA.CLOSE_SEARCH_FULL_MODAL: {
      return {
        ...state,
        modal: {
          ...state.modal,
          searchFull: {
            visible: false,
            type: data.type,
            data: data.data,
          },
        },
      };
    }
    case HOME.USER_DATA.OPEN_SHOP_FORM_MODAL: {
      return {
        ...state,
        modal: {
          ...state.modal,
          shopForm: {
            visible: true,
            type: true,
            data,
          },
        },
      };
    }
    case HOME.USER_DATA.CLOSE_SHOP_FORM_MODAL: {
      return {
        ...state,
        modal: {
          ...state.modal,
          shopForm: {
            visible: false,
            type: data.type,
            data: data.data,
          },
        },
      };
    }
    default:
      return state;
  }
};
