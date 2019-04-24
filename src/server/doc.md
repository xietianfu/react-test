
 ##### #回收站 

 **接口名称：** 企业详情 

 **请求方式：** GET 

 **接口名：** /api/company/detail_1 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| id | Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
| data | object  |  | 
| data.basicInfo | object  | 基本信息 | 
|  data.basicInfo.companyName |  string  | 企业名称 | 
|  data.basicInfo.linkman |  string  | 联系人 | 
|  data.basicInfo.belongsToOutlet |  string  | 所属网点 | 
|  data.basicInfo.belongsToBranch |  string  | 所属支行 | 
|  data.basicInfo.code |  string  | 编号 | 
|  data.basicInfo.contact |  string  | 联系方式 | 
| data.financialProduct | array  | 理财产品信息 | 
|  data.financialProduct[].deadline |  number  | 截止日期(时间戳) | 
|  data.financialProduct[].name |  string  | 理财产品名 | 
|  data.financialProduct[].share |  number  | 持有份额 | 
|  data.financialProduct[].risk |  string  | 风险 | 
|  data.financialProduct[].term |  string  | 期限 | 
|  data.financialProduct[].instructionId |  string  | 产品说明书Id | 
|  data.financialProduct[].interestRate |  string  | 利率 | 
| data.allTradeStream | object  | 总交易流水信息 | 
| data.allTradeStream.hourBalance | object  | 时点余额 | 
| data.allTradeStream.hourBalance.balance | array  | 时点余额(最大,最小,平均) | 
|  data.allTradeStream.hourBalance.balance[] |  number  |  | 
|  data.allTradeStream.hourBalance.fluctuationDegree |  string  | 波动程度 | 
|  data.allTradeStream.hourBalance.rank |  number  | 时点余额排名 | 
|  data.allTradeStream.hourBalance.level |  number  | 时点余额等级 | 
| data.allTradeStream.monthBalance | object  | 月日均余额 | 
| data.allTradeStream.monthBalance.balance | array  | 月日均余额(最大,最小,平均) | 
|  data.allTradeStream.monthBalance.balance[] |  string  |  | 
|  data.allTradeStream.monthBalance.fluctuationDegree |  string  | 波动程度 | 
|  data.allTradeStream.monthBalance.level |  number  | 月日均余额等级 | 
|  data.allTradeStream.monthBalance.rank |  number  | 月日均余额排名 | 
| data.allTradeStream.trade | object  | 交易金额 | 
|  data.allTradeStream.trade.amountFluctuationDegree |  string  | 交易金额波动程度 | 
|  data.allTradeStream.trade.level |  number  | 交易等级 | 
| data.allTradeStream.trade.quantity | array  | 交易笔数(最大,最小, 平均) | 
|  data.allTradeStream.trade.quantity[] |  number  |  | 
|  data.allTradeStream.trade.quantityFluctuationDegree |  string  | 交易笔数波动程度 | 
|  data.allTradeStream.trade.rank |  number  | 交易排名 | 
| data.allTradeStream.trade.amount | array  | 交易金额(最大,最小,平均) | 
|  data.allTradeStream.trade.amount[] |  number  |  | 
| data.innerScale | object  | 行内交易流水信息(行内交易占比情况) | 
|  data.innerScale.lendTrade |  number  | 贷方向交易金额行内占比 | 
|  data.innerScale.trade |  number  | 交易金额行内占比 | 
|  data.innerScale.lendQuantity |  number  | 贷方向交易笔数行内占比 | 
|  data.innerScale.quantity |  number  | 交易笔数行内占比 | 
|  data.innerScale.borrowQuantity |  number  | 借方向交易笔数行内占比 | 
|  data.innerScale.borrowTrade |  number  | 借方向交易金额行内占比 | 
| data.borrowTradeStream | object  | 借方向交易流水信息 | 
| data.borrowTradeStream.trade | object  | 交易金额 | 
|  data.borrowTradeStream.trade.level |  number  | 交易等级 | 
|  data.borrowTradeStream.trade.rank |  number  | 交易排名 | 
| data.borrowTradeStream.trade.quantity | array  | 交易笔数(最大,最小, 平均) | 
|  data.borrowTradeStream.trade.quantity[] |  number  |  | 
|  data.borrowTradeStream.trade.quantityFluctuationDegree |  number  | 交易笔数波动程度 | 
|  data.borrowTradeStream.trade.amountFluctuationDegree |  string  | 交易金额波动程度 | 
| data.borrowTradeStream.trade.amount | array  | 交易金额(最大,最小,平均) | 
|  data.borrowTradeStream.trade.amount[] |  number  |  | 
| data.borrowTradeStream.monthBalance | object  | 月日均余额 | 
|  data.borrowTradeStream.monthBalance.fluctuationDegree |  string  | 波动程度 | 
|  data.borrowTradeStream.monthBalance.rank |  number  | 月日均余额排名 | 
|  data.borrowTradeStream.monthBalance.level |  number  | 月日均余额等级 | 
| data.borrowTradeStream.monthBalance.balance | array  | 月日均余额(最大,最小,平均) | 
|  data.borrowTradeStream.monthBalance.balance[] |  number  |  | 
| data.borrowTradeStream.hourBalance | object  | 时点余额 | 
|  data.borrowTradeStream.hourBalance.level |  number  | 时点余额等级 | 
| data.borrowTradeStream.hourBalance.balance | array  | 时点余额(最大,最小,平均) | 
|  data.borrowTradeStream.hourBalance.balance[] |  number  |  | 
|  data.borrowTradeStream.hourBalance.fluctuationDegree |  string  | 波动程度 | 
|  data.borrowTradeStream.hourBalance.rank |  number  | 时点余额排名 | 
| data.preference | object  | 理财偏好信息 | 
|  data.preference.risk |  number  | 投资风险偏好 | 
| data.preference.features | array  | 理财特征 | 
|  data.preference.features[] |  string  |  | 
|  data.preference.channel |  string  | 推荐触达渠道 | 
|  data.preference.category |  string  | 企业分类 | 
|  data.preference.amount |  string  | 金额偏好 | 
| data.preference.interestRate | object  | 投资利率偏好 | 
|  data.preference.cycle |  string  | 周期偏好 | 
| data.recommand | array  | 推荐产品 | 
|  data.recommand[].interestRate |  string  | 利率 | 
|  data.recommand[].risk |  string  | 风险 | 
|  data.recommand[].downloadUri |  string  | 下载链接 | 
|  data.recommand[].instructionId |  string  | 产品说明书Id | 
|  data.recommand[].term |  string  | 期限 | 
|  data.recommand[].name |  string  | 理财产品名 | 
| data.lendTradeStream | object  | 贷方向流水信息 | 
| data.lendTradeStream.trade | object  | 交易金额 | 
|  data.lendTradeStream.trade.level |  number  | 交易等级 | 
|  data.lendTradeStream.trade.rank |  number  | 交易排名 | 
|  data.lendTradeStream.trade.quantityFluctuationDegree |  string  | 交易笔数波动程度 | 
| data.lendTradeStream.trade.quantity | array  | 交易笔数(最大,最小, 平均) | 
|  data.lendTradeStream.trade.quantity[] |  number  |  | 
| data.lendTradeStream.trade.amount | array  | 交易金额(最大,最小,平均) | 
|  data.lendTradeStream.trade.amount[] |  number  |  | 
|  data.lendTradeStream.trade.amountFluctuationDegree |  string  | 交易金额波动程度 | 
| data.lendTradeStream.monthBalance | object  | 月日均余额 | 
|  data.lendTradeStream.monthBalance.level |  number  | 月日均余额等级 | 
| data.lendTradeStream.monthBalance.balance | array  | 月日均余额(最大,最小,平均) | 
|  data.lendTradeStream.monthBalance.balance[] |  number  |  | 
|  data.lendTradeStream.monthBalance.fluctuationDegree |  string  | 波动程度 | 
|  data.lendTradeStream.monthBalance.rank |  number  | 月日均余额排名 | 
| data.lendTradeStream.hourBalance | object  | 时点余额 | 
| data.lendTradeStream.hourBalance.balance | array  | 时点余额(最大,最小,平均) | 
|  data.lendTradeStream.hourBalance.balance[] |  number  |  | 
|  data.lendTradeStream.hourBalance.fluctuationDegree |  string  | 波动程度 | 
|  data.lendTradeStream.hourBalance.level |  number  | 时点余额等级 | 
|  data.lendTradeStream.hourBalance.rank |  number  | 时点余额排名 | 
|  code |  number  |  | 

 **接口名称：** 现有在售产品库/TOP5产品 

 **接口说明：** 搜索筛选 

 **请求方式：** GET 

 **接口名：** /api/products_1 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| limit | N |  | 
| comanyId | N | 企业ID | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
|  msg |  string  |  | 
| data | object  |  | 
|  data.updateTime |  number  | 更新时间戳 | 
| data.products | array  |  | 
|  data.products[].productName |  string  | 理财产品名称 | 
|  data.products[].investmentPeriod |  string  | 投资期限 | 
|  data.products[].deadline |  string  | 赎回/到期日 | 
|  data.products[].createTime |  string  | 成立日期 | 
|  data.products[].riskLevel |  string  | 风险评级 | 
|  data.products[].productCode |  string  | 产品代码 | 
|  data.products[].interestRate |  number  | 业绩基准 | 
|  data.products[].remark |  string  | 备注 | 
|  data.products[].tradeTime |  string  | 交易时间 | 
|  data.products[].applyTime |  string  | 申购期 | 
|  data.products[].downloadUri |  string  | 下载链接 | 
|  data.products[].amount |  string  | 金额（期限）分段 | 
|  data.products[].bankName |  string  | 银行名称 | 

 **接口名称：** 获取推荐企业 

 **请求方式：** GET 

 **接口名：** /api/company/match_1 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| code | N | 产品编号 | 
| count | N |  | 
| page | N |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
| data | object  |  | 
| data.companies | array  |  | 
|  data.companies[].amountPreference |  string  | 投资金额偏好 | 
|  data.companies[].belongsToBranch |  string  | 所属支行 | 
|  data.companies[].belongsToOutlet |  string  | 所属网点 | 
|  data.companies[].category |  string  | 企业分类 | 
|  data.companies[].companyName |  string  | 企业名称 | 
|  data.companies[].cyclePreference |  string  | 投资周期偏好 | 
|  data.companies[].id |  string  | 企业编号 | 
|  data.companies[].interestRatePreference |  string  | 投资利率偏好 | 
| data.companies[].riskPreference | array  | 投资风险偏好 | 
|  data.companies[].riskPreference[] |  number  |  | 
|  data.total |  number  |  | 
|  code |  number  |  | 

 ##### 上传数据 

 **接口名称：** 上传文件 

 **请求方式：** POST 

 **接口名：** /api/upload_update_data 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
|  data.status |  number  | 失败了是0，成功了是一个文件的ID | 

 **接口名称：** 全部更新状态 

 **请求方式：** GET 

 **接口名：** /api/updatedatastatus/all 

 **请求参数：** 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
| data | object  |  | 
| data.statusList | array  |  | 
|  data.statusList[].type |  string  |  | 
|  data.statusList[].updateStatus |  number  |  | 
| data.statusList[].uploadStatus | object  |  | 
| data.statusList[].uploadStatus.wrongList | array  | 失败文件的名字 | 
|  data.statusList[].uploadStatus.right |  number  |  | 
|  data.statusList[].uploadStatus.wrong |  number  |  | 
| data.statusList[].uploadStatus.rightList | array  | 成功文件的ID | 
|  data.statusList[].uploadTime |  mixed  |  | 
|  data.statusList[].updateTime |  mixed  |  | 
|  code |  number  |  | 

 **接口名称：** 初始化上传 

 **请求方式：** POST 

 **接口名：** /api/updatedatainitialize 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| type | Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 

 **接口名称：** 更新数据 

 **请求方式：** POST 

 **接口名：** /api/updatedatabutton 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| type |  Y |  | 
| ids |  Y | 文件ID的列表，不用区分type直接给我就行了 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
| data | object  |  | 
|  data.status |  number  |  | 
|  code |  number  |  | 

 ##### 下载数据 

 **接口名称：** 下载 

 **请求方式：** GET 

 **接口名：** /api/download/get_download 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| taskId | Y | ID | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 

 **接口名称：** 下载列表 

 **请求方式：** GET 

 **接口名：** /api/download/download_list 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| page | N |  | 
| count | N |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
| data | object  |  | 
| data.downloadList | array  |  | 
|  data.downloadList[].name |  string  |  | 
|  data.downloadList[].taskId |  string  |  | 
|  data.downloadList[].createTime |  number  |  | 
|  data.downloadList[].filename |  string  |  | 
|  data.downloadList[].username |  string  |  | 
|  data.total |  number  |  | 
|  code |  number  |  | 

 **接口名称：** 创建下载 

 **请求方式：** POST 

 **接口名：** /api/download/create_download 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| type |  Y | 1:已购买价值客户 2:未购买潜力客户 3:产品推荐客户 4:理财到期预警  5:持有产品查询 6:流水交易查询 7:今日在售理财产品 8:我行在售理财产品 9:同行在售理财产品 10:当前持有产品统计 11:历史购买产品统计 12:转化率统计 13:登录数据统计 14:未登录详情 15: 上市企业  16: 转化率统计-导出本月新增  17: 转化率统计-导出本年新增 18:搜索客户 19:营销按月 20：营销按年 21：登录详情 | 
| info |  Y | 具体的字段同各个接口定义 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
|  data.taskId |  string  |  | 

 ##### 在售产品库-在售产品 

 ##### 搜索-搜索筛选 

 **接口名称：** 搜索筛选 

 **接口说明：** 搜索筛选 

 **请求方式：** POST 

 **接口名：** /api/company/recommand 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
|  |  Y |  | 
| outletId |  Y | 网点id | 
| riskPreferences |  Y | 投资风险偏好 | 
| boughtFlag |  Y | 是否已购买 | 
| count |  Y | 每页数量 | 
| cyclePreference |  Y | 投资周期范围 | 
| interestRatePreference |  Y | 投资利率偏好 | 
| page |  Y | 页码 | 
| amountPreference |  Y | 投资金额范围 | 
| branchId |  Y | 支行id | 
| categories |  Y | 企业分类 | 
| features |  Y | 理财特征 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
| data | object  |  | 
| data.companies | array  |  | 
|  data.companies[].belongsToBranch |  string  | 所属支行 | 
|  data.companies[].amountPreference |  string  | 投资金额偏好 | 
|  data.companies[].belongsToOutlet |  string  | 所属网点 | 
|  data.companies[].category |  string  | 企业分类 | 
|  data.companies[].cyclePreference |  string  | 投资周期偏好 | 
|  data.companies[].interestRatePreference |  string  | 投资利率偏好 | 
|  data.companies[].riskPreference |  string  | 投资风险偏好 | 
|  data.companies[].companyName |  string  | 企业名称 | 
|  data.companies[].id |  string  | 企业id | 
|  data.companies[].code |  string  | 企业编号 | 
|  data.total |  number  |  | 
|  msg |  string  |  | 
|  code |  number  |  | 

 **接口名称：** 获取特征筛选参数 

 **接口说明：** 获取特征筛选参数 

 **请求方式：** GET 

 **接口名：** /api/params 

 **请求参数：** 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
| data.branches | array  |  | 
|  data.branches[].id |  string  | 支行id | 
| data.branches[].outlets | array  | 支行下网点 | 
|  data.branches[].outlets[].id |  string  | 网点id | 
|  data.branches[].outlets[].name |  string  | 网点名 | 
|  data.branches[].name |  string  | 支行名 | 
| data.bought | object  |  | 
| data.bought.categories | array  | 企业分类 | 
|  data.bought.categories[].name |  string  |  | 
|  data.bought.categories[].id |  string  |  | 
| data.bought.features | array  | 理财特征 | 
|  data.bought.features[].id |  string  |  | 
|  data.bought.features[].name |  string  |  | 
| data.bought.riskPreferences | array  | 投资风险偏好 | 
|  data.bought.riskPreferences[].name |  string  |  | 
|  data.bought.riskPreferences[].id |  string  |  | 
| data.notBought | object  |  | 
| data.notBought.categories | array  | 企业分类 | 
|  data.notBought.categories[].name |  string  |  | 
|  data.notBought.categories[].id |  string  |  | 
| data.notBought.riskPreferences | array  | 投资风险偏好 | 
|  data.notBought.riskPreferences[].id |  string  |  | 
|  data.notBought.riskPreferences[].name |  string  |  | 
| data.notBought.features | array  | 理财特征 | 
|  data.notBought.features[].name |  string  |  | 
|  data.notBought.features[].id |  string  |  | 
|  msg |  string  |  | 

 ##### 数据管理 

 **接口名称：** 历史购买产品-top20 

 **请求方式：** GET 

 **接口名：** /api/statistics/history_top 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| page | N |  | 
| count | N |  | 
| branchId | N | 支行id | 
| outletId | N | 网点id | 
| limit | N | top前多少，默认为20 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
| data.products | array  |  | 
|  data.products[].productName |  string  | 产品名称 | 
|  data.products[].productCode |  string  | 产品代码 | 
|  data.products[].investmentPeriod |  string  | 投资期限 | 
|  data.products[].startingPurchaseAmount |  string  | 起购金额（万元） | 
|  data.products[].expectedInterestRate |  string  | 预期收益率 | 
|  data.products[].riskLevel |  string  | 风险等级 | 
|  data.products[].productManual |  string  | 产品说明书 | 
|  msg |  string  |  | 

 **接口名称：** 历史购买产品-统计列表 

 **请求方式：** GET 

 **接口名：** /api/statistics/history_list 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| page | N |  | 
| count | N |  | 
| starttime | N | 开始时间戳 | 
| endtime | N | 截止时间戳 | 
| keyword | N |  | 
| branchId | N | 支行id | 
| outletId | N | 网点id | 
| sortType | N | 1:购买总份额  （万元）   2:网银购买总份额  （万元）   3:柜台购买总份额  （万元）  4: 赎回总份额  （万元）   5:网银赎回总份额  （万元）  6: 柜台赎回总份额 | 
| sort | N | 1:降序 0:升序 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
| data.organizations | array  |  | 
|  data.organizations[].boughtBalance |  number  | 购买总份额  （万元） | 
|  data.organizations[].onlineBoughtBalance |  number  | 网银购买总份额  （万元） | 
|  data.organizations[].counterBoughtBalance |  number  | 柜台购买总份额  （万元 | 
|  data.organizations[].redeemBalance |  number  | 赎回总份额  （万元） | 
|  data.organizations[].onlineRedeemBalance |  number  | 网银赎回总份额  （万元） | 
|  data.organizations[].counterRedeemBalance |  number  |  柜台赎回总份额  （万元 | 
|  data.organizations[].organizationName |  string  |  机构名称 | 
|  data.organizations[].organizationId |  number  | 机构id（支行id或者网点id） | 
|  data.total |  string  |  | 
| data.branchRank | object  |  | 
|  data.branchRank.boughtBalanceRank |  number  | 购买总份额  （万元） | 
|  data.branchRank.total |  number  |  | 
|  data.branchRank.onlineBoughtBalanceRank |  number  | 网银购买总份额  （万元） | 
|  data.branchRank.counterBoughtBalanceRank |  number  | 柜台购买总份额  （万元 | 
|  data.branchRank.redeemBalanceRank |  number  | 赎回总份额  （万元） | 
|  data.branchRank.onlineRedeemBalanceRank |  number  | 网银赎回总份额  （万元） | 
|  data.branchRank.counterRedeemBalanceRank |  number  |  柜台赎回总份额  （万元 | 
| data.outletRank | object  |  | 
|  data.outletRank.boughtBalanceRank |  number  | 购买总份额  （万元） | 
|  data.outletRank.total |  number  |  | 
|  data.outletRank.onlineBoughtBalanceRank |  number  | 网银购买总份额  （万元） | 
|  data.outletRank.counterBoughtBalanceRank |  number  | 柜台购买总份额  （万元 | 
|  data.outletRank.redeemBalanceRank |  number  | 赎回总份额  （万元） | 
|  data.outletRank.onlineRedeemBalanceRank |  number  | 网银赎回总份额  （万元） | 
|  data.outletRank.counterRedeemBalanceRank |  number  |  柜台赎回总份额  （万元 | 
|  msg |  string  |  | 

 **接口名称：** 当前持有产品-top20 

 **请求方式：** GET 

 **接口名：** /api/statistics/hold_top 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| page | N |  | 
| count | N |  | 
| branchId | N | 支行id | 
| outletId | N | 网点id | 
| limit | N | top前多少，默认为20 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
| data.products | array  |  | 
|  data.products[].productName |  string  | 产品名称 | 
|  data.products[].productCode |  string  | 产品代码 | 
|  data.products[].investmentPeriod |  string  | 投资期限 | 
|  data.products[].startingPurchaseAmount |  string  | 起购金额（万元） | 
|  data.products[].expectedInterestRate |  string  | 预期收益率 | 
|  data.products[].riskLevel |  string  | 风险等级 | 
|  data.products[].productManual |  string  | 产品说明书 | 
|  msg |  string  |  | 

 **接口名称：** 当前持有产品-统计列表 

 **请求方式：** GET 

 **接口名：** /api/statistics/hold_list 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| keyword | N | 机构名称 | 
| page | N |  | 
| count | N |  | 
| branchId | N | 支行id | 
| outletId | N | 网点id | 
| sortType | N | 1:总持有份额（万元）     2:保本理财份额（万元）     3:非保本理财份额（万元）     4:结构性理财份额（万元） | 
| sort | N | 1:降序 0:升序 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
| data.organizations | array  |  | 
|  data.organizations[].balance |  number  | 总持有份额（万元） | 
|  data.organizations[].guaranteedBalance |  number  | 保本理财份额（万元） | 
|  data.organizations[].nonGuaranteedBalance |  number  | 非保本理财份额（万元） | 
|  data.organizations[].structuralBalance |  number  | 结构性理财份额（万元） | 
|  data.organizations[].organizationName |  string  | 机构名称（支行名或者网点名） | 
|  data.organizations[].organizationId |  number  | 机构id（支行id或者网点id） | 
|  data.total |  number  |  | 
| data.branchRank | object  | 全分行排名 | 
|  data.branchRank.balanceRank |  number  | 总持有份额 | 
|  data.branchRank.guaranteedBalanceRank |  number  | 保本理财份额 | 
|  data.branchRank.nonGuaranteedBalanceRank |  number  | 非保本理财份额 | 
|  data.branchRank.structuralBalanceRank |  number  | 结构性理财份额 | 
| data.outletRank | object  | 所在支行排名 | 
|  data.outletRank.balanceRank |  number  | 总持有份额 | 
|  data.outletRank.guaranteedBalanceRank |  number  | 保本理财份额 | 
|  data.outletRank.nonGuaranteedBalanceRank |  number  | 非保本理财份额 | 
|  data.outletRank.structuralBalanceRank |  number  | 结构性理财份额 | 
|  msg |  string  |  | 

 **接口名称：** 登录情况统计列表 

 **请求方式：** GET 

 **接口名：** /api/statistics/login 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| page | N |  | 
| count | N |  | 
| starttime | N | 开始时间戳 | 
| endtime | N | 截止时间戳 | 
| branchId | N |  | 
| outletId | N |  | 
| sort | N | 1:降序 0:升序 | 
| sortType | N | 1:总账号数   2:已登录账号数   3:未登录账号数 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
| data.organizations | array  |  | 
|  data.organizations[].totalAcountQuantity |  number  | 总账号数 | 
|  data.organizations[].loginQuantity |  number  | 已登录账号数 | 
|  data.organizations[].notLoginQuantity |  number  | 未登录账号数 | 
|  data.organizations[].organizationName |  string  |  机构名称 | 
|  data.organizations[].organizationId |  number  | 机构id（支行id或者网点id） | 
|  data.total |  string  |  | 
|  msg |  string  |  | 

 **接口名称：** 转化率统计列表 

 **请求方式：** GET 

 **接口名：** /api/statistics/conversion_rate 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| page | N |  | 
| count | N |  | 
| branchId | N |  | 
| outletId | N |  | 
| sort | N | 1:降序 0:升序 | 
| sortType | N | 1:本月推荐客户数   2:本月转化客户数   3:本月转化率   4:本年累积转换客户数   5:本年累计转化率 | 
| keyword | N |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
| data.organizations | array  |  | 
|  data.organizations[].recommandQuantityThisMonth |  number  | 本月推荐客户数 | 
|  data.organizations[].conversionQuantityThisMonth |  number  | 本月转化客户数 | 
|  data.organizations[].conversionRateThisMonth |  number  | 本月转化率 | 
|  data.organizations[].conversionQuantityThisYear |  number  | 本年累积转换客户数 | 
|  data.organizations[].conversionRateThisYear |  number  | 本年累计转化率 | 
|  data.organizations[].organizationName |  string  |  机构名称 | 
|  data.organizations[].organizationId |  number  | 机构id（支行id或者网点id） | 
|  data.total |  string  |  | 
| data.branchRank | object  | 分行排名 | 
|  data.branchRank.recommandQuantityThisMonthRank |  number  | 本月推荐客户数 | 
|  data.branchRank.conversionQuantityThisMonthRank |  number  | 本月转化客户数 | 
|  data.branchRank.conversionRateThisMonthRank |  number  | 本月转化率 | 
|  data.branchRank.conversionQuantityThisYearRank |  number  | 本年累积转换客户数 | 
|  data.branchRank.conversionRateThisYearRank |  number  | 本年累计转化率 | 
|  data.branchRank.total |  string  |  | 
| data.outletRank | object  | 支行排名 | 
|  data.outletRank.recommandQuantityThisMonthRank |  number  | 本月推荐客户数 | 
|  data.outletRank.conversionQuantityThisMonthRank |  number  | 本月转化客户数 | 
|  data.outletRank.conversionRateThisMonthRank |  number  | 本月转化率 | 
|  data.outletRank.conversionQuantityThisYearRank |  number  | 本年累积转换客户数 | 
|  data.outletRank.conversionRateThisYearRank |  number  | 本年累计转化率 | 
|  data.outletRank.total |  string  |  | 
|  msg |  string  |  | 

 ##### 机构管理 

 **接口名称：** 修改归属 

 **请求方式：** POST 

 **接口名：** /api/organ/change_branch 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| outletCode |  Y |  | 
| branchCode |  Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  | 10000 | 

 **接口名称：** 修改机构名字 

 **请求方式：** POST 

 **接口名：** /api/organ/change_name 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| outletCode |  Y |  | 
| outletName |  Y |  | 
| branchName |  Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  | 10000 | 

 **接口名称：** 删除 

 **请求方式：** POST 

 **接口名：** /api/organ/delete 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| code |  Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 

 **接口名称：** 合并 

 **请求方式：** POST 

 **接口名：** /api/organ/merge 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| outletCode |  Y |  | 
| newOutletCode |  Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  | 10000 | 

 **接口名称：** 数据更新状态 

 **请求方式：** GET 

 **接口名：** /api/organ/status 

 **请求参数：** 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
|  data.status |  number  |  | 

 **接口名称：** 新增机构 

 **请求方式：** POST 

 **接口名：** /api/organ/add 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| outletName |  Y |  | 
| outletCode |  Y |  | 
| branchCode |  Y |  | 
| branchName |  Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 

 **接口名称：** 机构列表 

 **请求方式：** GET 

 **接口名：** /api/organ/list 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| page | N |  | 
| count | N |  | 
| keyword | N |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
|  data.total |  number  |  | 
| data.outletList | array  |  | 
|  data.outletList[].outletName |  string  | 网点名称 | 
|  data.outletList[].outletCode |  string  | 网点编号 | 
|  data.outletList[].branchName |  string  | 归属支行名称 | 
|  data.outletList[].branchCode |  string  | 归属支行编号 | 

 **接口名称：** 机构详情 

 **请求方式：** GET 

 **接口名：** /api/organ/detail 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| code | Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
|  data.branchCode |  string  | 支行编号 | 
|  data.branchName |  string  | 支行名称 | 
|  data.createTime |  string  |  | 
|  data.createUser |  string  | 创建用户编号 | 
|  data.createUserName |  string  | 创建用户名称 | 
|  data.outletCode |  string  |  | 
|  data.outletId |  number  |  | 
|  data.outletName |  string  |  | 
|  data.updateTime |  string  |  | 
|  data.updateUser |  string  | 修改用户编号 | 
|  data.updateUserName |  string  | 修改用户名称 | 

 **接口名称：** 计算并更新 

 **请求方式：** POST 

 **接口名：** /api/organ/update 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  | 不能更新的话是30004 | 

 ##### 理财产品信息 

 **接口名称：** 交易流水查询 

 **请求方式：** GET 

 **接口名：** /api/financial/trade_flow 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| keyword | N | 关键词 | 
| branchId | N | 支行id | 
| outletid | N | 网点id | 
| page | N | 页数 | 
| count | N | 每页数量 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
| data.products | array  | 产品列表 | 
|  data.products[].basicInfoCode |  string  | 企业编号 | 
|  data.products[].companyName |  string  | 企业名称 | 
|  data.products[].belongsToBranch |  string  | 理财客户所属支行名称 | 
|  data.products[].belongsToOutlet |  string  | 理财客户所属网点名称 | 
|  data.products[].productCode |  string  | 产品代码 | 
|  data.products[].productName |  string  | 产品名称 | 
|  data.products[].tradeTime |  number  | 交易时间 | 
|  data.products[].valueTime |  number  | 起息日 | 
|  data.products[].expiryTime |  number  | 到期日 | 
|  data.products[].businessType |  string  | 业务种类 | 
|  data.products[].interestRate |  number  | 收益率 | 
|  data.products[].tradeChannel |  string  | 渠道 | 
|  data.products[].financialTradeAmount |  string  | 金额（万元） | 
|  data.products[].companyId |  number  | 企业id | 
|  data.total |  number  |  | 
|  msg |  string  |  | 

 **接口名称：** 今日在售理财产品 

 **请求方式：** GET 

 **接口名：** /api/financial/today_products 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| keyword | N | 关键词 | 
| page | N | 页数，默认1 | 
| count | N | 每页条数，默认10 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
| data.products | array  | 产品名称 | 
|  data.products[].productName |  string  | 产品名称 | 
|  data.products[].productCode |  string  | 产品代码 | 
|  data.products[].riskLevel |  string  | 风险等级 | 
|  data.products[].investmentPeriod |  string  | 投资期限 | 
|  data.products[].startingPurchaseAmount |  string  | 起购金额（万元） | 
|  data.products[].expectedInterestRate |  number  | 预期收益率 | 
|  data.products[].salesStartTime |  number  | 销售起日 | 
|  data.products[].salesEndTime |  number  | 销售止日 | 
|  data.products[].valueTime |  number  | 起息日 | 
|  data.products[].expiryTime |  number  | 到期日 | 
|  data.products[].productManual |  string  | 产品说明书链接 | 
|  data.products[].productId |  number  | 产品id | 
|  data.total |  number  |  | 
|  msg |  string  |  | 

 **接口名称：** 同业在售理财产品 

 **请求方式：** GET 

 **接口名：** /api/financial/peer_products 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| keyword | N | 关键词 | 
| page | N | 页数，默认1 | 
| count | N | 每页条数，默认10 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
| data.products | array  | 产品名称 | 
|  data.products[].productName |  string  | 产品名称 | 
|  data.products[].productCode |  string  | 产品代码 | 
|  data.products[].riskLevel |  string  | 风险等级 | 
|  data.products[].investmentPeriod |  string  | 投资期限 | 
|  data.products[].startingPurchaseAmount |  string  | 起购金额（万元） | 
|  data.products[].expectedInterestRate |  string  | 预期收益率 | 
|  data.products[].salesStartTime |  number  | 销售起日 | 
|  data.products[].salesEndTime |  number  | 销售止日 | 
|  data.products[].valueTime |  number  | 起息日 | 
|  data.products[].expiryTime |  number  | 到期日 | 
|  data.products[].productManual |  string  | 产品说明书链接 | 
|  data.products[].productId |  number  | 产品id | 
|  data.products[].bankName |  string  | 银行名陈 | 
|  data.total |  number  |  | 
|  msg |  string  |  | 

 **接口名称：** 持有产品查询 

 **请求方式：** GET 

 **接口名：** /api/financial/hold_products 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| keyword | N | 搜索关键词 | 
| branchId | N | 支行id | 
| outletId | N | 网点id | 
| page | N | 页数 | 
| count | N | 每页数量 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
| data.products | array  | 产品列表 | 
|  data.products[].basicInfoCode |  string  | 企业编号 | 
|  data.products[].companyName |  string  | 企业名称 | 
|  data.products[].belongsToBranch |  string  | 理财客户所属支行名称 | 
|  data.products[].belongsToOutlet |  string  | 理财客户所属网点名称 | 
|  data.products[].productCode |  string  | 产品代码 | 
|  data.products[].productName |  string  | 产品名称 | 
|  data.products[].valueTime |  number  | 起息日(时间戳，ms) | 
|  data.products[].expiryTime |  number  | 到期日（时间戳ms） | 
|  data.products[].balance |  string  | 金额（万元） | 
|  data.products[].companyId |  number  | 企业id | 
|  data.total |  number  |  | 

 **接口名称：** 本行在售产品库 

 **接口说明：** 搜索筛选 

 **请求方式：** GET 

 **接口名：** /api/products 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| page | N |  | 
| count | N |  | 
| keyword | N |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
|  msg |  string  |  | 
| data | object  |  | 
|  data.updateTime |  number  | 更新时间戳 | 
|  data.total |  number  |  | 
| data.products | array  |  | 
|  data.products[].productName |  string  | 理财产品名称 | 
|  data.products[].investmentPeriod |  string  | 投资期限 | 
|  data.products[].deadline |  string  | 赎回/到期日 | 
|  data.products[].createTime |  string  | 成立日期 | 
|  data.products[].riskLevel |  string  | 风险评级 | 
|  data.products[].productCode |  string  | 产品代码 | 
|  data.products[].interestRate |  number  | 业绩基准 | 
|  data.products[].remark |  string  | 备注 | 
|  data.products[].tradeTime |  string  | 交易时间 | 
|  data.products[].applyTime |  string  | 申购期 | 
|  data.products[].downloadUri |  string  | 下载链接 | 
|  data.products[].amount |  string  | 金额（期限）分段 | 

 ##### 理财到期预警 

 **接口名称：** 获取近40天持有到期产品 

 **接口说明：** 获取近30天持有产品 

 **请求方式：** GET 

 **接口名：** /api/company/recent_products 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| count | Y |  | 
| page | Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  msg |  string  |  | 
|  code |  number  |  | 
| data | object  |  | 
| data.companies | array  |  | 
|  data.companies[].basicInfoCode |  string  | 企业编号 | 
|  data.companies[].companyName |  string  | 企业名称 | 
|  data.companies[].belongsToBranch |  string  | 理财客户所属支行名称 | 
|  data.companies[].belongsToOutlet |  string  | 理财客户所属网点名称 | 
|  data.companies[].productCode |  string  | 产品代码 | 
|  data.companies[].productName |  string  | 产品名称 | 
|  data.companies[].valueTime |  number  | 起息日(时间戳，ms) | 
|  data.companies[].expiryTime |  number  | 到期日（时间戳ms） | 
|  data.companies[].balance |  string  | 金额（万元） | 
|  data.companies[].companyId |  number  | 企业id | 
|  data.total |  number  |  | 

 **接口名称：** 获取预警设置 

 **请求方式：** GET 

 **接口名：** /api/company/configrecent 

 **请求参数：** 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
|  data.start |  number  | 前 | 
|  data.end |  string  | 后 | 

 **接口名称：** 设置到期预警时间 

 **请求方式：** POST 

 **接口名：** /api/company/configrecent 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| start |  Y | 前 | 
| end |  Y | 后 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 

 ##### 用户画像 

 **接口名称：** 企业画像详情 

 **请求方式：** GET 

 **接口名：** /api/company/detail 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| id | Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
| data | object  |  | 
| data.basicInfo | object  | 基本信息 | 
|  data.basicInfo.companyName |  string  | 企业名称 | 
|  data.basicInfo.linkman |  string  | 联系人 | 
|  data.basicInfo.belongsToOutlet |  string  | 所属网点 | 
|  data.basicInfo.belongsToBranch |  string  | 所属支行 | 
|  data.basicInfo.code |  string  | 编号 | 
|  data.basicInfo.contact |  string  | 联系电话 | 
| data.financialProduct | array  | 理财产品信息 | 
|  data.financialProduct[].productName |  string  | 理财产品名称 | 
|  data.financialProduct[].investmentPeriod |  string  | 投资期限 | 
|  data.financialProduct[].deadline |  number  | 赎回/到期日 | 
|  data.financialProduct[].riskLevel |  string  | 风险评级 | 
|  data.financialProduct[].productCode |  string  | 产品代码 | 
|  data.financialProduct[].interestRate |  number  | 业绩基准 | 
|  data.financialProduct[].share |  string  | 持有份额 | 
| data.allTradeStream | object  | 总交易流水信息 | 
| data.allTradeStream.hourBalance | object  | 时点余额 | 
| data.allTradeStream.hourBalance.balance | array  | 时点余额(最大,最小,平均) | 
|  data.allTradeStream.hourBalance.balance[] |  number  |  | 
|  data.allTradeStream.hourBalance.fluctuationDegree |  string  | 波动程度 | 
|  data.allTradeStream.hourBalance.rank |  number  | 时点余额排名 | 
|  data.allTradeStream.hourBalance.level |  number  | 时点余额等级 | 
|  data.allTradeStream.hourBalance.branchRank |  number  | 支行排名 | 
|  data.allTradeStream.hourBalance.outletRank |  number  | 网点排名 | 
| data.allTradeStream.monthBalance | object  | 月日均余额 | 
| data.allTradeStream.monthBalance.balance | array  | 月日均余额(最大,最小,平均) | 
|  data.allTradeStream.monthBalance.balance[] |  string  |  | 
|  data.allTradeStream.monthBalance.fluctuationDegree |  string  | 波动程度 | 
|  data.allTradeStream.monthBalance.level |  number  | 月日均余额等级 | 
|  data.allTradeStream.monthBalance.rank |  number  | 月日均余额排名 | 
|  data.allTradeStream.monthBalance.branchRank |  number  | 支行排名 | 
|  data.allTradeStream.monthBalance.outletRank |  number  | 网点排名 | 
| data.allTradeStream.trade | object  | 交易金额 | 
|  data.allTradeStream.trade.amountFluctuationDegree |  string  | 交易金额波动程度 | 
|  data.allTradeStream.trade.level |  number  | 交易等级 | 
| data.allTradeStream.trade.quantity | array  | 交易笔数(最大,最小, 平均) | 
|  data.allTradeStream.trade.quantity[] |  number  |  | 
|  data.allTradeStream.trade.quantityFluctuationDegree |  string  | 交易笔数波动程度 | 
|  data.allTradeStream.trade.rank |  number  | 交易排名 | 
|  data.allTradeStream.trade.branchRank |  number  | 支行排名 | 
|  data.allTradeStream.trade.outletRank |  number  | 网点排名 | 
| data.allTradeStream.trade.amount | array  | 交易金额(最大,最小,平均) | 
|  data.allTradeStream.trade.amount[] |  number  |  | 
| data.innerScale | object  | 行内交易流水信息(行内交易占比情况) | 
|  data.innerScale.lendTrade |  number  | 贷方向交易金额行内占比 | 
|  data.innerScale.trade |  number  | 交易金额行内占比 | 
|  data.innerScale.lendQuantity |  number  | 贷方向交易笔数行内占比 | 
|  data.innerScale.quantity |  number  | 交易笔数行内占比 | 
|  data.innerScale.borrowQuantity |  number  | 借方向交易笔数行内占比 | 
|  data.innerScale.borrowTrade |  number  | 借方向交易金额行内占比 | 
| data.borrowTradeStream | object  | 借方向交易流水信息 | 
| data.borrowTradeStream.trade | object  | 交易金额 | 
|  data.borrowTradeStream.trade.level |  number  | 交易等级 | 
|  data.borrowTradeStream.trade.rank |  number  | 交易排名 | 
| data.borrowTradeStream.trade.quantity | array  | 交易笔数(最大,最小, 平均) | 
|  data.borrowTradeStream.trade.quantity[] |  number  |  | 
|  data.borrowTradeStream.trade.quantityFluctuationDegree |  number  | 交易笔数波动程度 | 
|  data.borrowTradeStream.trade.amountFluctuationDegree |  string  | 交易金额波动程度 | 
|  data.borrowTradeStream.trade.branchRank |  number  | 支行排名 | 
|  data.borrowTradeStream.trade.outletRank |  number  | 网点排名 | 
| data.borrowTradeStream.trade.amount | array  | 交易金额(最大,最小,平均) | 
|  data.borrowTradeStream.trade.amount[] |  number  |  | 
| data.borrowTradeStream.monthBalance | object  | 月日均余额 | 
|  data.borrowTradeStream.monthBalance.fluctuationDegree |  string  | 波动程度 | 
|  data.borrowTradeStream.monthBalance.rank |  number  | 月日均余额排名 | 
|  data.borrowTradeStream.monthBalance.level |  number  | 月日均余额等级 | 
|  data.borrowTradeStream.monthBalance.branchRank |  number  | 支行排名 | 
|  data.borrowTradeStream.monthBalance.outletRank |  number  | 网点排名 | 
| data.borrowTradeStream.monthBalance.balance | array  | 月日均余额(最大,最小,平均) | 
|  data.borrowTradeStream.monthBalance.balance[] |  number  |  | 
| data.borrowTradeStream.hourBalance | object  | 时点余额 | 
|  data.borrowTradeStream.hourBalance.level |  number  | 时点余额等级 | 
| data.borrowTradeStream.hourBalance.balance | array  | 时点余额(最大,最小,平均) | 
|  data.borrowTradeStream.hourBalance.balance[] |  number  |  | 
|  data.borrowTradeStream.hourBalance.fluctuationDegree |  string  | 波动程度 | 
|  data.borrowTradeStream.hourBalance.rank |  number  | 时点余额排名 | 
|  data.borrowTradeStream.hourBalance.branchRank |  number  | 支行排名 | 
|  data.borrowTradeStream.hourBalance.outletRank |  number  | 网点排名 | 
| data.preference | object  | 理财偏好信息 | 
|  data.preference.risk |  number  | 投资风险偏好 | 
| data.preference.features | array  | 理财特征 | 
|  data.preference.features[] |  string  |  | 
|  data.preference.channel |  string  | 推荐触达渠道 | 
|  data.preference.category |  string  | 企业分类 | 
|  data.preference.amount |  string  | 金额偏好 | 
| data.preference.interestRate | object  | 投资利率偏好 | 
|  data.preference.cycle |  string  | 周期偏好 | 
| data.recommand | array  | 推荐产品 | 
|  data.recommand[].productName |  string  | 理财产品名称 | 
|  data.recommand[].investmentPeriod |  string  | 投资期限 | 
|  data.recommand[].deadline |  string  | 赎回/到期日 | 
|  data.recommand[].createTime |  string  | 成立日期 | 
|  data.recommand[].riskLevel |  string  | 风险评级 | 
|  data.recommand[].productCode |  string  | 产品代码 | 
|  data.recommand[].interestRate |  number  | 业绩基准 | 
|  data.recommand[].remark |  string  | 备注 | 
|  data.recommand[].tradeTime |  string  | 交易时间 | 
|  data.recommand[].applyTime |  string  | 申购期 | 
|  data.recommand[].downloadUri |  string  | 下载链接 | 
|  data.recommand[].downloadUriFlag |  bool  | 下载链接是否存在 | 
|  data.recommand[].amount |  string  | 金额（期限）分段 | 
| data.lendTradeStream | object  | 贷方向流水信息 | 
| data.lendTradeStream.trade | object  | 交易金额 | 
|  data.lendTradeStream.trade.level |  number  | 交易等级 | 
|  data.lendTradeStream.trade.rank |  number  | 交易排名 | 
|  data.lendTradeStream.trade.quantityFluctuationDegree |  string  | 交易笔数波动程度 | 
| data.lendTradeStream.trade.quantity | array  | 交易笔数(最大,最小, 平均) | 
|  data.lendTradeStream.trade.quantity[] |  number  |  | 
| data.lendTradeStream.trade.amount | array  | 交易金额(最大,最小,平均) | 
|  data.lendTradeStream.trade.amount[] |  number  |  | 
|  data.lendTradeStream.trade.amountFluctuationDegree |  string  | 交易金额波动程度 | 
|  data.lendTradeStream.trade.branchRank |  number  | 支行排名 | 
|  data.lendTradeStream.trade.outletRank |  number  | 网点排名 | 
| data.lendTradeStream.monthBalance | object  | 月日均余额 | 
|  data.lendTradeStream.monthBalance.level |  number  | 月日均余额等级 | 
| data.lendTradeStream.monthBalance.balance | array  | 月日均余额(最大,最小,平均) | 
|  data.lendTradeStream.monthBalance.balance[] |  number  |  | 
|  data.lendTradeStream.monthBalance.fluctuationDegree |  string  | 波动程度 | 
|  data.lendTradeStream.monthBalance.rank |  number  | 月日均余额排名 | 
|  data.lendTradeStream.monthBalance.branchRank |  number  | 支行排名 | 
|  data.lendTradeStream.monthBalance.outletRank |  number  | 网点排名 | 
| data.lendTradeStream.hourBalance | object  | 时点余额 | 
| data.lendTradeStream.hourBalance.balance | array  | 时点余额(最大,最小,平均) | 
|  data.lendTradeStream.hourBalance.balance[] |  number  |  | 
|  data.lendTradeStream.hourBalance.fluctuationDegree |  string  | 波动程度 | 
|  data.lendTradeStream.hourBalance.level |  number  | 时点余额等级 | 
|  data.lendTradeStream.hourBalance.rank |  number  | 时点余额排名 | 
|  data.lendTradeStream.hourBalance.branchRank |  number  | 支行排名 | 
|  data.lendTradeStream.hourBalance.outletRank |  number  | 网点排名 | 
| data.top5Product | array  | top5产品 | 
|  data.top5Product[].productName |  string  | 理财产品名称 | 
|  data.top5Product[].investmentPeriod |  string  | 投资期限 | 
|  data.top5Product[].deadline |  string  | 赎回/到期日 | 
|  data.top5Product[].createTime |  string  | 成立日期 | 
|  data.top5Product[].riskLevel |  string  | 风险评级 | 
|  data.top5Product[].productCode |  string  | 产品代码 | 
|  data.top5Product[].interestRate |  number  | 业绩基准 | 
|  data.top5Product[].remark |  string  | 备注 | 
|  data.top5Product[].tradeTime |  string  | 交易时间 | 
|  data.top5Product[].applyTime |  string  | 申购期 | 
|  data.top5Product[].downloadUri |  string  | 下载链接 | 
|  data.top5Product[].amount |  string  | 金额（期限）分段 | 
|  data.top5Product[].marketingSkills |  string  | 销售话术 | 
|  data.top5Product[].downloadUriFlag |  bool  | 是否有下载说明书 | 
|  code |  number  |  | 

 **接口名称：** 删除营销记录 

 **请求方式：** DELETE 

 **接口名：** /api/company/marketing 

 **请求参数：** 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  | 返回码 | 

 **接口名称：** 搜索理财客户信息 

 **接口说明：** 搜索理财客户信息 

 **请求方式：** GET 

 **接口名：** /api/company/search 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| count | N |  | 
| page | N |  | 
| keyword | N | 搜索关键词 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  msg |  string  |  | 
|  code |  number  |  | 
| data | object  |  | 
| data.companies | array  |  | 
|  data.companies[].riskPreference |  string  | 投资风险偏好 | 
|  data.companies[].belongsToOutlet |  string  | 所属网点 | 
|  data.companies[].category |  number  | 企业分类 | 
|  data.companies[].belongsToBranch |  string  | 所属支行 | 
|  data.companies[].cyclePreference |  string  | 投资周期偏好 | 
|  data.companies[].id |  string  | 企业编号 | 
|  data.companies[].companyName |  string  | 企业名称 | 
|  data.companies[].interestRatePreference |  string  | 投资利率偏好 | 
|  data.companies[].amountPreference |  string  | 投资金额偏好 | 
|  data.total |  number  |  | 

 **接口名称：** 更新企业联系人 

 **请求方式：** POST 

 **接口名：** /api/company/contact 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| linkman | Y | 联系人 | 
| contact | Y | 联系电话 | 
| companyId | Y | 企业ID | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  msg |  string  |  | 
|  code |  number  |  | 

 **接口名称：** 查看历史交易记录 

 **请求方式：** GET 

 **接口名：** /api/company/trade_history 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| companyId | Y | 企业ID | 
| count | N |  | 
| page | N |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
| data | object  |  | 
| data.trade_histories | array  |  | 
|  data.trade_histories[].tradeTime |  number  | 交易日期 | 
|  data.trade_histories[].valueTime |  number  | 起息日期 | 
|  data.trade_histories[].expiryTime |  number  | 到期日期 | 
|  data.trade_histories[].businessType |  string  | 业务种类 | 
|  data.trade_histories[].productCode |  string  | 理财产品代码 | 
|  data.trade_histories[].productName |  string  | 理财产品名称 | 
|  data.trade_histories[].interestRate |  number  | 收益率 | 
|  data.trade_histories[].balance |  number  | 理财余额 | 
|  data.trade_histories[].allRedeemFlag |  number  | 全部赎回标志 | 
|  data.trade_histories[].tradeChannel |  string  | 交易渠道 | 
|  data.trade_histories[].financialTradeAmount |  number  | 理财交易金额 | 
|  data.trade_histories[].id |  string  | 交易id | 
|  data.total |  number  |  | 
|  code |  number  |  | 
|  msg |  string  |  | 

 **接口名称：** 模糊搜索产品代码 

 **请求方式：** GET 

 **接口名：** /api/product/suggestion 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| keyword | N |  | 
| limit | N |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  string  |  | 
| data | object  |  | 
| data.products | array  |  | 
|  data.products[].code |  string  | 产品代码 | 
|  data.products[].id |  string  | 产品唯一标识 | 

 **接口名称：** 模糊搜索企业编号或名称 

 **请求方式：** GET 

 **接口名：** /api/company/suggestion 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| keyword | Y | 搜索词 | 
| limit | N | 限制条数，默认10 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
| data | object  |  | 
| data.companies | array  |  | 
|  data.companies[].riskPreference |  string  | 投资风险偏好 | 
|  data.companies[].belongsToOutlet |  string  | 所属网点 | 
|  data.companies[].category |  number  | 企业分类 | 
|  data.companies[].belongsToBranch |  string  | 所属支行 | 
|  data.companies[].cyclePreference |  string  | 投资周期偏好 | 
|  data.companies[].id |  string  | 企业编号 | 
|  data.companies[].companyName |  string  | 企业名称 | 
|  data.companies[].interestRatePreference |  string  | 投资利率偏好 | 
|  data.companies[].amountPreference |  string  | 投资金额偏好 | 
|  data.companies[].code |  string  | 企业编号 | 
|  data.total |  number  |  | 

 **接口名称：** 添加营销记录 

 **请求方式：** POST 

 **接口名：** /api/company/marketing 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| createTime |  Y | 营销时间 | 
| type |  Y | 营销情况#012345 | 
| remark |  Y | 详细 | 
| code |  Y | 企业编码 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  | 返回码 | 

 **接口名称：** 编辑营销记录 

 **请求方式：** PUT 

 **接口名：** /api/company/marketing 

 **请求参数：** 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  | 返回码 | 

 **接口名称：** 编辑重点关注客户 

 **请求方式：** POST 

 **接口名：** /api/company/focus 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| code |  Y | 企业编号 | 
| type |  Y | 编辑类型#0/1 取关/关注 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  | 返回码 | 

 **接口名称：** 获取上市企业客户列表 

 **请求方式：** GET 

 **接口名：** /api/listed_company 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| keyword | Y | 企业名称 | 
| page | N |  | 
| count | N |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
| data | object  |  | 
| data.companies | array  |  | 
|  data.companies[].companyName |  string  | 企业名称 | 
|  data.companies[].companyId |  string  | 企业ID | 
|  data.companies[].boughtOtherProductStatus |  string  | 是否购买他行理财 | 
|  data.companies[].ourCustomerStatus |  string  | 是否为我行客户 | 
|  data.companies[].boughtOurProductStatus |  string  | 是否购买我行理财产品 | 
|  data.total |  number  |  | 
|  code |  number  |  | 

 **接口名称：** 获取上市企业详情 

 **请求方式：** GET 

 **接口名：** /api/listed_company/detail 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| listedCompanyId | N | 上市企业ID | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
| data | object  |  | 
|  data.name |  string  | 企业名称 | 
|  data.contact |  string  | 企业电话 | 
|  data.email |  string  | 企业邮箱 | 
|  data.registeredCapital |  string  | 注册资本 | 
|  data.createTime |  string  | 成立时间 | 
|  data.RA |  string  | 登记机关 | 
|  data.ourCustomerStatus |  string  | 是否我行客户 | 
|  data.belongsToBranch |  string  | 所属支行 | 
|  data.belongsToOutlet |  string  | 所属网点 | 
|  data.registeredLocation |  string  | 注册地址 | 
|  data.description |  string  | 简介 | 
|  data.businessScope |  string  | 经营范围 | 
|  data.statement |  string  | 上市公告 | 
|  data.statementFlag |  bool  | 上市公告是否存在 | 
|  data.financialManagementNotice |  string  | 上市理财公告 | 
|  data.financialManagementNoticeFlag |  string  | 上市理财公告是否存在 | 
|  data.basicInfoCode |  string  | 企业编号 | 
|  data.companyId |  string  | 企业id | 
| data.shareholders | array  |  | 
|  data.shareholders[].name |  string  | 股东姓名 | 
|  data.shareholders[].holdQuantity |  number  | 持有数量 | 
|  data.shareholders[].equityProportion |  number  | 占股本比例 | 
|  data.shareholders[].shareType |  number  | 股份类型 | 
|  data.boughtOurProductStatus |  bool  | 是否购买我行产品（false则无历史交易） | 
|  code |  number  |  | 

 **接口名称：** 获取营销记录 

 **请求方式：** GET 

 **接口名：** /api/company/marketing 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| code | Y | 企业编号 | 
| page | Y | 页数 | 
| count | Y | 数量 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  | 返回码 | 
| data | object  |  | 
| data.result | array  |  | 
|  data.result[].id |  string  | 营销记录id | 
|  data.result[].type |  number  | 营销情况 | 
|  data.result[].name |  string  | 营销人员 | 
|  data.result[].remark |  string  | 详细 | 
|  data.result[].createTime |  string  | 营销时间 | 
|  data.total |  number  | 数量 | 

 **接口名称：** 通过产品id获取推荐企业客户 

 **请求方式：** GET 

 **接口名：** /api/company/match 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| count | Y |  | 
| code | Y | 产品id | 
| page | Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
|  msg |  string  |  | 
| data | object  |  | 
| data.companies | array  |  | 
|  data.companies[].cyclePreference |  string  | 投资周期偏好 | 
|  data.companies[].amountPreference |  string  | 投资金额偏好 | 
|  data.companies[].interestRatePreference |  string  | 投资利率偏好 | 
|  data.companies[].belongsToOutlet |  string  | 所属网点 | 
|  data.companies[].belongsToBranch |  string  | 所属支行 | 
|  data.companies[].id |  string  | 企业id | 
| data.companies[].riskPreference | array  | 投资风险偏好 | 
|  data.companies[].riskPreference[] |  number  |  | 
|  data.companies[].category |  number  | 企业分类 | 
|  data.companies[].companyName |  string  | 企业名称 | 
|  data.companies[].code |  string  | 企业编号 | 
|  data.total |  number  |  | 

 **接口名称：** 重点关注客户列表 

 **请求方式：** GET 

 **接口名：** /api/company/focus 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| page | Y | 页数 | 
| count | Y | 数量 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  msg |  string  |  | 
|  code |  number  |  | 
| data | object  |  | 
| data.result | array  |  | 
|  data.result[].riskPreference |  string  | 投资风险偏好 | 
|  data.result[].belongsToOutlet |  string  | 所属网点 | 
|  data.result[].category |  number  | 企业分类 | 
|  data.result[].belongsToBranch |  string  | 所属支行 | 
|  data.result[].cyclePreference |  string  | 投资周期偏好 | 
|  data.result[].id |  string  | 企业编号 | 
|  data.result[].companyName |  string  | 企业名称 | 
|  data.result[].interestRatePreference |  string  | 投资利率偏好 | 
|  data.result[].amountPreference |  string  | 投资金额偏好 | 
|  data.total |  number  | 总数 | 

 ##### 账户-登录 

 **接口名称：** 修改密码 

 **请求方式：** POST 

 **接口名：** /api/usermanage/password_modify 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| pwd |  Y |  | 
| newPwd |  Y |  | 
| newPwdConfirm |  Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
|  msg |  string  |  | 

 **接口名称：** 创建用户 

 **请求方式：** POST 

 **接口名：** /api/usermanage/create_user 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| username |  Y | 账号 | 
| name |  Y | 用户姓名 | 
| role |  Y | 角色 1/2/3/4/5 分行管理员/分行客户经理/支行管理员/网点客户经理/支行客户经理 | 
| subbranchId |  Y | 支行ID | 
| outletId |  Y | 网点ID | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  string  |  | 

 **接口名称：** 初始化修改密码 

 **请求方式：** POST 

 **接口名：** /api/usermanage/initialize_user 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| pwd |  Y |  | 
| newPwd |  Y |  | 
| newPwdConfirm |  Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 

 **接口名称：** 删除用户 

 **请求方式：** POST 

 **接口名：** /api/usermanage/delete_user 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| userId |  Y | 1 | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 

 **接口名称：** 支行列表 

 **请求方式：** GET 

 **接口名：** /api/new_params 

 **请求参数：** 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
| data.branches | array  |  | 
|  data.branches[].id |  number  |  | 
|  data.branches[].name |  string  |  | 
| data.branches[].outlets | array  |  | 
|  data.branches[].outlets[].id |  number  |  | 
|  data.branches[].outlets[].name |  string  |  | 

 **接口名称：** 用户列表 

 **请求方式：** GET 

 **接口名：** /api/usermanage/user_list 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| keyword | N | 员工编号或姓名 | 
| page | N |  | 
| count | N |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
|  data.total |  number  |  | 
| data.userList | array  |  | 
|  data.userList[].creatorName |  string  |  | 
|  data.userList[].role |  number  |  | 
|  data.userList[].creatorUsername |  string  |  | 
|  data.userList[].createTime |  number  |  | 
|  data.userList[].username |  string  |  | 
|  data.userList[].name |  mixed  |  | 
|  data.userList[].organ |  number  |  | 

 **接口名称：** 用户详情 

 **请求方式：** GET 

 **接口名：** /api/usermanage/user_detail 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| userId | N | 用户ID | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
| data | object  |  | 
|  data.organ |  string  |  | 
|  data.name |  string  |  | 
|  data.username |  string  |  | 
|  data.role |  number  |  | 
|  code |  number  |  | 

 **接口名称：** 登录 

 **请求方式：** POST 

 **接口名：** /api/sign_in 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
|  |  Y |  | 
| password |  Y |  | 
| username |  Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
| data | object  |  | 
|  data.username |  string  |  | 
|  data.name |  string  |  | 
|  data.role |  number  |  | 
|  data.organ |  string  |  | 
|  data.outletId |  number  |  | 
|  data.branchId |  number  |  | 
|  data.createTime |  number  |  | 
|  data.creatorUsername |  string  |  | 
|  data.creatorName |  string  |  | 
|  data.userId |  number  |  | 
|  data.status |  number  |  | 
|  data.initialized |  number  |  | 

 **接口名称：** 编辑用户信息 

 **请求方式：** POST 

 **接口名：** /api/usermanage/user_detail 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| userId |  Y |  | 
| name |  Y |  | 
| role |  Y | 角色 1/2/3/4/5 分行管理员/分行客户经理/支行管理员/网点客户经理/支行客户经理 | 
| subbranchId |  Y |  | 
| outletId |  Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 

 **接口名称：** 退出登录 

 **请求方式：** GET 

 **接口名：** /api/logout 

 **请求参数：** 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
|  msg |  string  |  | 

 **接口名称：** 重置密码 

 **请求方式：** POST 

 **接口名：** /api/usermanage/reset_password 

 **请求参数：** 
| 参数名称 | 是否必传 | 参数说明 | 
| :------| :------| :------| 
| userId |  Y |  | 

 **响应数据：** 
| 参数名称 | 参数类型 | 参数说明 | 
| :------| :------| :------| 
|  code |  number  |  | 
