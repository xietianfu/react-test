// 引入模块 
 import { axios } from './index'; 
// 定义api接口 
export const apiFetch = {}; 
 
/* 上传数据 */ 

/** 
* POST--上传文件
* @param {Object} params -请求对象 
*/
apiFetch.postUploadUpdateData = (params={}) => {
 return axios.post('/api/upload_update_data',params); 
}; 

/** 
* GET--全部更新状态
* @param {Object} params -请求对象 
*/
apiFetch.getUpdatedatastatusAll = (params={}) => {
 return axios.get('/api/updatedatastatus/all',{params}); 
}; 

/** 
* POST--初始化上传
* @param {Object} params -请求对象 
*/
apiFetch.postUpdatedatainitialize = (params={}) => {
 return axios.post('/api/updatedatainitialize',params); 
}; 

/** 
* POST--更新数据
* @param {Object} params -请求对象 
* @param {String} params.type - 
* @param {Object[]} params.ids[] - 文件ID的列表，不用区分type直接给我就行了 
*/
apiFetch.postUpdatedatabutton = (params={}) => {
 return axios.post('/api/updatedatabutton',params); 
}; 
/* 下载数据 */ 

/** 
* GET--下载
* @param {Object} params -请求对象 
* @param {String} params.taskId - ID
*/
apiFetch.getDownloadGetDownload = (params={}) => {
 return axios.get('/api/download/get_download',{params}); 
}; 

/** 
* GET--下载列表
* @param {Object} params -请求对象 
* @param {String} params.page - 
* @param {String} params.count - 
*/
apiFetch.getDownloadDownloadList = (params={}) => {
 return axios.get('/api/download/download_list',{params}); 
}; 

/** 
* POST--创建下载
* @param {Object} params -请求对象 
* @param {Number} params.type - 1:已购买价值客户 2:未购买潜力客户 3:产品推荐客户 4:理财到期预警  5:持有产品查询 6:流水交易查询 7:今日在售理财产品 8:我行在售理财产品 9:同行在售理财产品 10:当前持有产品统计 11:历史购买产品统计 12:转化率统计 13:登录数据统计 14:未登录详情 15: 上市企业  16: 转化率统计-导出本月新增  17: 转化率统计-导出本年新增 18:搜索客户 19:营销按月 20：营销按年 21：登录详情
* @param {Object} params.info - 具体的字段同各个接口定义 
* @param {Number} params.info.xiba - 
*/
apiFetch.postDownloadCreateDownload = (params={}) => {
 return axios.post('/api/download/create_download',params); 
}; 
/* 在售产品库-在售产品 */ 
/* 搜索-搜索筛选 */ 

/** 
* POST--搜索筛选
* @param {Object} params -请求对象 
* @param {Number} params.outletId - 网点id
* @param {Object[]} params.riskPreferences[] - 投资风险偏好 
* @param {Boolean} params.riskPreferences[].selected - 
* @param {Number} params.riskPreferences[].id - 
* @param {String} params.riskPreferences[].name - 
* @param {Number} params.boughtFlag - 是否已购买
* @param {Number} params.count - 每页数量
* @param {Object} params.cyclePreference - 投资周期范围 
* @param {Number} params.cyclePreference.end - 
* @param {Number} params.cyclePreference.start - 
* @param {Object} params.interestRatePreference - 投资利率偏好 
* @param {Number} params.interestRatePreference.end - 
* @param {Number} params.interestRatePreference.start - 
* @param {Number} params.page - 页码
* @param {Object} params.amountPreference - 投资金额范围 
* @param {Number} params.amountPreference.start - 
* @param {Number} params.amountPreference.end - 
* @param {Number} params.branchId - 支行id
* @param {Object[]} params.categories[] - 企业分类 
* @param {Boolean} params.categories[].selected - 
* @param {String} params.categories[].name - 
* @param {Number} params.categories[].id - 
* @param {Object[]} params.features[] - 理财特征 
* @param {Boolean} params.features[].selected - 
* @param {Number} params.features[].id - 
* @param {String} params.features[].name - 
*/
apiFetch.postCompanyRecommand = (params={}) => {
 return axios.post('/api/company/recommand',params); 
}; 

/** 
* GET--获取特征筛选参数
* @param {Object} params -请求对象 
*/
apiFetch.getParams = (params={}) => {
 return axios.get('/api/params',{params}); 
}; 
/* 数据管理 */ 

/** 
* GET--历史购买产品-top20
* @param {Object} params -请求对象 
* @param {String} params.page - 
* @param {String} params.count - 
* @param {String} params.branchId - 支行id
* @param {String} params.outletId - 网点id
* @param {String} params.limit - top前多少，默认为20
*/
apiFetch.getStatisticsHistoryTop = (params={}) => {
 return axios.get('/api/statistics/history_top',{params}); 
}; 

/** 
* GET--历史购买产品-统计列表
* @param {Object} params -请求对象 
* @param {String} params.page - 
* @param {String} params.count - 
* @param {String} params.starttime - 开始时间戳
* @param {String} params.endtime - 截止时间戳
* @param {String} params.keyword - 
* @param {String} params.branchId - 支行id
* @param {String} params.outletId - 网点id
* @param {String} params.sortType - 1:购买总份额  （万元）   2:网银购买总份额  （万元）   3:柜台购买总份额  （万元）  4: 赎回总份额  （万元）   5:网银赎回总份额  （万元）  6: 柜台赎回总份额
* @param {String} params.sort - 1:降序 0:升序
*/
apiFetch.getStatisticsHistoryList = (params={}) => {
 return axios.get('/api/statistics/history_list',{params}); 
}; 

/** 
* GET--当前持有产品-top20
* @param {Object} params -请求对象 
* @param {String} params.page - 
* @param {String} params.count - 
* @param {String} params.branchId - 支行id
* @param {String} params.outletId - 网点id
* @param {String} params.limit - top前多少，默认为20
*/
apiFetch.getStatisticsHoldTop = (params={}) => {
 return axios.get('/api/statistics/hold_top',{params}); 
}; 

/** 
* GET--当前持有产品-统计列表
* @param {Object} params -请求对象 
* @param {String} params.keyword - 机构名称
* @param {String} params.page - 
* @param {String} params.count - 
* @param {String} params.branchId - 支行id
* @param {String} params.outletId - 网点id
* @param {String} params.sortType - 1:总持有份额（万元）     2:保本理财份额（万元）     3:非保本理财份额（万元）     4:结构性理财份额（万元）
* @param {String} params.sort - 1:降序 0:升序
*/
apiFetch.getStatisticsHoldList = (params={}) => {
 return axios.get('/api/statistics/hold_list',{params}); 
}; 

/** 
* GET--登录情况统计列表
* @param {Object} params -请求对象 
* @param {String} params.page - 
* @param {String} params.count - 
* @param {String} params.starttime - 开始时间戳
* @param {String} params.endtime - 截止时间戳
* @param {String} params.branchId - 
* @param {String} params.outletId - 
* @param {String} params.sort - 1:降序 0:升序
* @param {String} params.sortType - 1:总账号数   2:已登录账号数   3:未登录账号数
*/
apiFetch.getStatisticsLogin = (params={}) => {
 return axios.get('/api/statistics/login',{params}); 
}; 

/** 
* GET--转化率统计列表
* @param {Object} params -请求对象 
* @param {String} params.page - 
* @param {String} params.count - 
* @param {String} params.branchId - 
* @param {String} params.outletId - 
* @param {String} params.sort - 1:降序 0:升序
* @param {String} params.sortType - 1:本月推荐客户数   2:本月转化客户数   3:本月转化率   4:本年累积转换客户数   5:本年累计转化率
* @param {String} params.keyword - 
*/
apiFetch.getStatisticsConversionRate = (params={}) => {
 return axios.get('/api/statistics/conversion_rate',{params}); 
}; 
/* 机构管理 */ 

/** 
* POST--修改归属
* @param {Object} params -请求对象 
* @param {String} params.outletCode - 
* @param {String} params.branchCode - 
*/
apiFetch.postOrganChangeBranch = (params={}) => {
 return axios.post('/api/organ/change_branch',params); 
}; 

/** 
* POST--修改机构名字
* @param {Object} params -请求对象 
* @param {String} params.outletCode - 
* @param {String} params.outletName - 
* @param {String} params.branchName - 
*/
apiFetch.postOrganChangeName = (params={}) => {
 return axios.post('/api/organ/change_name',params); 
}; 

/** 
* POST--删除
* @param {Object} params -请求对象 
* @param {String} params.code - 
*/
apiFetch.postOrganDelete = (params={}) => {
 return axios.post('/api/organ/delete',params); 
}; 

/** 
* POST--合并
* @param {Object} params -请求对象 
* @param {String} params.outletCode - 
* @param {String} params.newOutletCode - 
*/
apiFetch.postOrganMerge = (params={}) => {
 return axios.post('/api/organ/merge',params); 
}; 

/** 
* GET--数据更新状态
* @param {Object} params -请求对象 
*/
apiFetch.getOrganStatus = (params={}) => {
 return axios.get('/api/organ/status',{params}); 
}; 

/** 
* POST--新增机构
* @param {Object} params -请求对象 
* @param {String} params.outletName - 
* @param {String} params.outletCode - 
* @param {String} params.branchCode - 
* @param {String} params.branchName - 
*/
apiFetch.postOrganAdd = (params={}) => {
 return axios.post('/api/organ/add',params); 
}; 

/** 
* GET--机构列表
* @param {Object} params -请求对象 
* @param {String} params.page - 
* @param {String} params.count - 
* @param {String} params.keyword - 
*/
apiFetch.getOrganList = (params={}) => {
 return axios.get('/api/organ/list',{params}); 
}; 

/** 
* GET--机构详情
* @param {Object} params -请求对象 
* @param {String} params.code - 
*/
apiFetch.getOrganDetail = (params={}) => {
 return axios.get('/api/organ/detail',{params}); 
}; 

/** 
* POST--计算并更新
* @param {Object} params -请求对象 
*/
apiFetch.postOrganUpdate = (params={}) => {
 return axios.post('/api/organ/update',params); 
}; 
/* 理财产品信息 */ 

/** 
* GET--交易流水查询
* @param {Object} params -请求对象 
* @param {String} params.keyword - 关键词
* @param {String} params.branchId - 支行id
* @param {String} params.outletid - 网点id
* @param {String} params.page - 页数
* @param {String} params.count - 每页数量
*/
apiFetch.getFinancialTradeFlow = (params={}) => {
 return axios.get('/api/financial/trade_flow',{params}); 
}; 

/** 
* GET--今日在售理财产品
* @param {Object} params -请求对象 
* @param {String} params.keyword - 关键词
* @param {String} params.page - 页数，默认1
* @param {String} params.count - 每页条数，默认10
*/
apiFetch.getFinancialTodayProducts = (params={}) => {
 return axios.get('/api/financial/today_products',{params}); 
}; 

/** 
* GET--同业在售理财产品
* @param {Object} params -请求对象 
* @param {String} params.keyword - 关键词
* @param {String} params.page - 页数，默认1
* @param {String} params.count - 每页条数，默认10
*/
apiFetch.getFinancialPeerProducts = (params={}) => {
 return axios.get('/api/financial/peer_products',{params}); 
}; 

/** 
* GET--持有产品查询
* @param {Object} params -请求对象 
* @param {String} params.keyword - 搜索关键词
* @param {String} params.branchId - 支行id
* @param {String} params.outletId - 网点id
* @param {String} params.page - 页数
* @param {String} params.count - 每页数量
*/
apiFetch.getFinancialHoldProducts = (params={}) => {
 return axios.get('/api/financial/hold_products',{params}); 
}; 

/** 
* GET--本行在售产品库
* @param {Object} params -请求对象 
* @param {String} params.page - 
* @param {String} params.count - 
* @param {String} params.keyword - 
*/
apiFetch.getProducts = (params={}) => {
 return axios.get('/api/products',{params}); 
}; 
/* 理财到期预警 */ 

/** 
* GET--获取近40天持有到期产品
* @param {Object} params -请求对象 
* @param {String} params.count - 
* @param {String} params.page - 
*/
apiFetch.getCompanyRecentProducts = (params={}) => {
 return axios.get('/api/company/recent_products',{params}); 
}; 

/** 
* GET--获取预警设置
* @param {Object} params -请求对象 
*/
apiFetch.getCompanyConfigrecent = (params={}) => {
 return axios.get('/api/company/configrecent',{params}); 
}; 

/** 
* POST--设置到期预警时间
* @param {Object} params -请求对象 
* @param {Number} params.start - 前
* @param {Number} params.end - 后
*/
apiFetch.postCompanyConfigrecent = (params={}) => {
 return axios.post('/api/company/configrecent',params); 
}; 
/* 用户画像 */ 

/** 
* GET--企业画像详情
* @param {Object} params -请求对象 
* @param {String} params.id - 
*/
apiFetch.getCompanyDetail = (params={}) => {
 return axios.get('/api/company/detail',{params}); 
}; 

/** 
* DELETE--删除营销记录
* @param {Object} params -请求对象 
* @param {String} params.id - 营销记录id
*/
apiFetch.deleteCompanyMarketing = (params={}) => {
 return axios.delete("/api/company/marketing", { params }); 
}; 

/** 
* GET--搜索理财客户信息
* @param {Object} params -请求对象 
* @param {String} params.count - 
* @param {String} params.page - 
* @param {String} params.keyword - 搜索关键词
*/
apiFetch.getCompanySearch = (params={}) => {
 return axios.get('/api/company/search',{params}); 
}; 

/** 
* POST--更新企业联系人
* @param {Object} params -请求对象 
*/
apiFetch.postCompanyContact = (params={}) => {
 return axios.post('/api/company/contact',params); 
}; 

/** 
* GET--查看历史交易记录
* @param {Object} params -请求对象 
* @param {String} params.companyId - 企业ID
* @param {String} params.count - 
* @param {String} params.page - 
*/
apiFetch.getCompanyTradeHistory = (params={}) => {
 return axios.get('/api/company/trade_history',{params}); 
}; 

/** 
* GET--模糊搜索产品代码
* @param {Object} params -请求对象 
* @param {String} params.keyword - 
* @param {String} params.limit - 
*/
apiFetch.getProductSuggestion = (params={}) => {
 return axios.get('/api/product/suggestion',{params}); 
}; 

/** 
* GET--模糊搜索企业编号或名称
* @param {Object} params -请求对象 
* @param {String} params.keyword - 搜索词
* @param {String} params.limit - 限制条数，默认10
*/
apiFetch.getCompanySuggestion = (params={}) => {
 return axios.get('/api/company/suggestion',{params}); 
}; 

/** 
* POST--添加营销记录
* @param {Object} params -请求对象 
* @param {String} params.createTime - 营销时间
* @param {Number} params.type - 营销情况#012345
* @param {String} params.remark - 详细
* @param {String} params.code - 企业编码
*/
apiFetch.postCompanyMarketing = (params={}) => {
 return axios.post('/api/company/marketing',params); 
}; 

/** 
* PUT--编辑营销记录
* @param {Object} params -请求对象 
* @param {String} params.id - 营销记录id
* @param {Number} params.type - 营销情况
* @param {String} params.remark - 详细描述
* @param {String} params.createTime - 营销时间
*/
apiFetch.putCompanyMarketing = (params={}) => {
 return axios.put("/api/company/marketing", params); 
}; 

/** 
* POST--编辑重点关注客户
* @param {Object} params -请求对象 
* @param {String} params.code - 企业编号
* @param {Number} params.type - 编辑类型#0/1 取关/关注
*/
apiFetch.postCompanyFocus = (params={}) => {
 return axios.post('/api/company/focus',params); 
}; 

/** 
* GET--获取上市企业客户列表
* @param {Object} params -请求对象 
* @param {String} params.keyword - 企业名称
* @param {String} params.page - 
* @param {String} params.count - 
*/
apiFetch.getListedCompany = (params={}) => {
 return axios.get('/api/listed_company',{params}); 
}; 

/** 
* GET--获取上市企业详情
* @param {Object} params -请求对象 
* @param {String} params.listedCompanyId - 上市企业ID
*/
apiFetch.getListedCompanyDetail = (params={}) => {
 return axios.get('/api/listed_company/detail',{params}); 
}; 

/** 
* GET--获取营销记录
* @param {Object} params -请求对象 
* @param {String} params.code - 企业编号
* @param {String} params.page - 页数
* @param {String} params.count - 数量
*/
apiFetch.getCompanyMarketing = (params={}) => {
 return axios.get('/api/company/marketing',{params}); 
}; 

/** 
* GET--通过产品id获取推荐企业客户
* @param {Object} params -请求对象 
* @param {String} params.count - 
* @param {String} params.code - 产品id
* @param {String} params.page - 
*/
apiFetch.getCompanyMatch = (params={}) => {
 return axios.get('/api/company/match',{params}); 
}; 

/** 
* GET--重点关注客户列表
* @param {Object} params -请求对象 
* @param {String} params.page - 页数
* @param {String} params.count - 数量
*/
apiFetch.getCompanyFocus = (params={}) => {
 return axios.get('/api/company/focus',{params}); 
}; 
/* 账户-登录 */ 

/** 
* POST--修改密码
* @param {Object} params -请求对象 
* @param {String} params.pwd - 
* @param {String} params.newPwd - 
* @param {String} params.newPwdConfirm - 
*/
apiFetch.postUsermanagePasswordModify = (params={}) => {
 return axios.post('/api/usermanage/password_modify',params); 
}; 

/** 
* POST--创建用户
* @param {Object} params -请求对象 
* @param {String} params.username - 账号
* @param {String} params.name - 用户姓名
* @param {Number} params.role - 角色 1/2/3/4/5 分行管理员/分行客户经理/支行管理员/网点客户经理/支行客户经理
* @param {Number} params.subbranchId - 支行ID
* @param {Number} params.outletId - 网点ID
*/
apiFetch.postUsermanageCreateUser = (params={}) => {
 return axios.post('/api/usermanage/create_user',params); 
}; 

/** 
* POST--初始化修改密码
* @param {Object} params -请求对象 
* @param {String} params.pwd - 
* @param {String} params.newPwd - 
* @param {String} params.newPwdConfirm - 
*/
apiFetch.postUsermanageInitializeUser = (params={}) => {
 return axios.post('/api/usermanage/initialize_user',params); 
}; 

/** 
* POST--删除用户
* @param {Object} params -请求对象 
* @param {Number} params.userId - 1
*/
apiFetch.postUsermanageDeleteUser = (params={}) => {
 return axios.post('/api/usermanage/delete_user',params); 
}; 

/** 
* GET--支行列表
* @param {Object} params -请求对象 
*/
apiFetch.getNewParams = (params={}) => {
 return axios.get('/api/new_params',{params}); 
}; 

/** 
* GET--用户列表
* @param {Object} params -请求对象 
* @param {String} params.keyword - 员工编号或姓名
* @param {String} params.page - 
* @param {String} params.count - 
*/
apiFetch.getUsermanageUserList = (params={}) => {
 return axios.get('/api/usermanage/user_list',{params}); 
}; 

/** 
* GET--用户详情
* @param {Object} params -请求对象 
* @param {String} params.userId - 用户ID
*/
apiFetch.getUsermanageUserDetail = (params={}) => {
 return axios.get('/api/usermanage/user_detail',{params}); 
}; 

/** 
* POST--登录
* @param {Object} params -请求对象 
* @param {String} params.password - 
* @param {String} params.username - 
*/
apiFetch.postSignIn = (params={}) => {
 return axios.post('/api/sign_in',params); 
}; 

/** 
* POST--编辑用户信息
* @param {Object} params -请求对象 
* @param {String} params.userId - 
* @param {String} params.name - 
* @param {Number} params.role - 角色 1/2/3/4/5 分行管理员/分行客户经理/支行管理员/网点客户经理/支行客户经理
* @param {Number} params.subbranchId - 
* @param {Number} params.outletId - 
*/
apiFetch.postUsermanageUserDetail = (params={}) => {
 return axios.post('/api/usermanage/user_detail',params); 
}; 

/** 
* GET--退出登录
* @param {Object} params -请求对象 
*/
apiFetch.getLogout = (params={}) => {
 return axios.get('/api/logout',{params}); 
}; 

/** 
* POST--重置密码
* @param {Object} params -请求对象 
* @param {Number} params.userId - 
*/
apiFetch.postUsermanageResetPassword = (params={}) => {
 return axios.post('/api/usermanage/reset_password',params); 
}; 
