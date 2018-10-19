/**
 * 通过权限数组过滤菜单
 * @param {Array} menuData 菜单数据
 * @param {Array} authorityArr 权限数组
 * @returns {Array} 过滤后的菜单
 * @author xietf
 */
export function filterMenuData(menuData, authorityArr = ['01', '02']) {
  /**
   * 生成带有undifind的菜单数组
   * @param {Array} _menuData 菜单数组
   * @param {Array} _authorityArr 权限数组
   * @returns {Array}
   * @author xietf
   */
  function _filterMenuData(_menuData, _authorityArr) {
    return _menuData.map(item => {
      // 当层级能匹配，后续所有层级都通过
      if (_authorityArr.some(val => val === item.authority)) {
        return item;
      }
      if (item.children) {
        return {
          ...item,
          children: _filterMenuData(item.children, _authorityArr),
        };
      }
      return undefined;
    });
  }
  /**
   * 去除菜单中的undifind
   * @param {Array} inputData 带有undifind的菜单数组
   * @returns {Array}
   * @author xietf
   */
  function _removeUndifind(inputData) {
    let result = []; // eslint-disable-line
    if (Array.isArray(inputData)) {
      inputData.forEach(item => {
        // 判断是否为空
        if (item) {
          // 判断是否有子元素
          if (item.children) {
            // 如果所有子元素不全为undifind
            if (item.children.some(val => val)) {
              const cash = _removeUndifind(item.children);
              result.push({ ...item, children: cash });
            }
          } else {
            result.push(item);
          }
        }
      });
    }
    return result;
  }
  const result = _filterMenuData(menuData, authorityArr);
  return _removeUndifind(result);
}
