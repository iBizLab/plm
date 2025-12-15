# 模型扩展(extension) <!-- {docsify-ignore-all} -->

主要包含模型扩展类实体。

### 实体

|    名称col200   | 代码名col150      |  实体类型col150   | 存储模式col100 | 表名称col200   |    联合主键col100   |  主状态col100   |  权限控制col150  |  启用审计col100    |  备注col500  |
| --------  |------------| -----   |  --------|  --------|  --------|    -------- | -------- | -------- |-------- |
|[主状态值代理(MSVALUEPROXY)](module/extension/MSValueProxy)|MSValueProxy|主实体|无存储||否|否|自控制|否|用于主状态流转设计工具代理业务数据。|
|[应用门户部件(PSAPPPORTLET)](module/extension/PSAppPortlet)|PSAppPortlet|主实体|无存储||否|否|自控制|否|应用门户部件|
|[核心产品(PSCOREPRD)](module/extension/PSCorePrd)|PSCorePrd|主实体|无存储||否|否|自控制|否|管理查看应用市场产品|
|[核心产品分类(PSCOREPRDCAT)](module/extension/PSCorePrdCat)|PSCorePrdCat|主实体|无存储||否|否|自控制|否|管理查看应用市场产品目录|
|[核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc)|PSCorePrdFunc|主实体|无存储||否|是|自控制|否|插件管理|
|[实体数据流逻辑(PSDEDATAFLOW)](module/extension/PSDEDataflow)|PSDEDataflow|主实体|无存储||否|否|自控制|否|实体数据流逻辑|
|[实体属性(PSDEFIELD)](module/extension/PSDEField)|PSDEField|主实体|无存储||否|否|自控制|否|实体属性|
|[实体表单(PSDEFORM)](module/extension/PSDEForm)|PSDEForm|主实体|无存储||否|否|自控制|否|实体表单|
|[实体表格(PSDEGRID)](module/extension/PSDEGrid)|PSDEGrid|主实体|无存储||否|否|自控制|否|实体表格|
|[实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic)|PSDELogic|主实体|无存储||否|否|自控制|否|实体处理逻辑|
|[实体处理逻辑链接(PSDELOGICLINK)](module/extension/PSDELogicLink)|PSDELogicLink|主实体|无存储||否|否|自控制|否|实体处理逻辑链接|
|[实体处理逻辑节点(PSDELOGICNODE)](module/extension/PSDELogicNode)|PSDELogicNode|主实体|无存储||否|否|自控制|否|实体处理逻辑节点|
|[实体逻辑参数(PSDELOGICPARAM)](module/extension/PSDELogicParam)|PSDELogicParam|主实体|无存储||否|否|自控制|否||
|[实体主状态迁移逻辑(PSDEMSLOGIC)](module/extension/PSDEMSLogic)|PSDEMSLogic|主实体|无存储||否|否|自控制|否|实体主状态迁移逻辑|
|[实体通知(PSDENOTIFY)](module/extension/PSDENotify)|PSDENotify|主实体|无存储||否|否|自控制|否|实体通知|
|[消息通知目标(PSDENOTIFYTARGET)](module/extension/PSDENotifyTarget)|PSDENotifyTarget|主实体|无存储||否|否|自控制|否|消息通知目标|
|[智能报表立方体(PSSYSBICUBE)](module/extension/PSSysBICube)|PSSysBICube|主实体|无存储||否|否|自控制|否|智能报表立方体|
|[智能报表立方体维度(PSSYSBICUBEDIMENSION)](module/extension/PSSysBICubeDimension)|PSSysBICubeDimension|主实体|无存储||否|否|自控制|否|智能报表立方体维度|
|[智能报表立方体指标(PSSYSBICUBEMEASURE)](module/extension/PSSysBICubeMeasure)|PSSysBICubeMeasure|主实体|无存储||否|否|自控制|否|智能报表立方体指标|
|[智能报表(PSSYSBIREPORT)](module/extension/PSSysBIReport)|PSSysBIReport|主实体|无存储||否|否|自控制|否|智能报表|
|[智能报表项(PSSYSBIREPORTITEM)](module/extension/PSSysBIReportItem)|PSSysBIReportItem|主实体|无存储||否|否|自控制|否|智能报表项|
|[工作流版本(PSWFVERSION)](module/extension/PSWFVersion)|PSWFVersion|主实体|无存储||否|否|自控制|否|工作流版本|
|[工作流(PSWORKFLOW)](module/extension/PSWorkflow)|PSWorkflow|主实体|无存储||否|否|自控制|否|工作流|
|[通知事件(NOTIFY_EVENT)](module/extension/notify_event)|notify_event|主实体|无存储||否|否|自控制|否|通知事件|
|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)|system_extension_notify_setting|主实体|ServiceAPI||否|否|自控制|否|通知设置信息|

