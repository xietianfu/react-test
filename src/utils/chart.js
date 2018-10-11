/**
 *构建图表所需Series
 * @param {string} type 图表类型
 * @param {array} series 后端传递的标准格式数组
 * @author xietf
 */
export function buildSeries(type, series) {
  return series.map(item => ({
    type,
    ...item,
  }));
}
