function IsAccess(WrapComponet, chartType, accessChartTypeLists) {
  if (accessChartTypeLists.include(chartType)) {
    return WrapComponet;
  }
  return false;
}

export default IsAccess;
