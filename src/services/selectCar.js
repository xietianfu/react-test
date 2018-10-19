import { makeApiService } from '../utils/service';

// eslint-disable-next-line
export const SelectCarApi = makeApiService([
  '/api/query/brand_list', // 获取品牌
  '/api/query/car_group', // 根据车系选车组
  '/api/query/car_series', // 根据品牌选车系
  '/api/query/car_model', // 根据车组选车型
]);

export const selectCarApi = {
  brandList: '/api/query/brand_list', // 获取品牌
  carGroup: '/api/query/car_group', // 根据车系选车组
  carSeries: '/api/query/car_series', // 根据品牌选车系
  carModel: '/api/query/car_model', // 根据车组选车型
};
