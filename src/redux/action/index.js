import { HOME } from './actionType';

export const openSearchFullModal = (params = {}) => ({
  type: HOME.USER_DATA.OPEN_SEARCH_FULL_MODAL,
  data: params,
});

export const closeSearchFullModal = (type = false, data = {}) => ({
  type: HOME.USER_DATA.CLOSE_SEARCH_FULL_MODAL,
  data: { type, data },
});

export const openShopFormModal = (params = {}) => ({
  type: HOME.USER_DATA.OPEN_SHOP_FORM_MODAL,
  data: params,
});

export const closeShopFormModal = (type = false, data = {}) => ({
  type: HOME.USER_DATA.CLOSE_SHOP_FORM_MODAL,
  data: { type, data },
});
