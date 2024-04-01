# 实体通知(PSDENotify)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/Update_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/Create_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|结束时间属性|ENDPSDEFNAME|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/EndPSDEFName#default)||||
|开始时间属性|BEGINPSDEFID|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/BeginPSDEFId#default)||||
|开始时间属性|BEGINPSDEFNAME|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/BeginPSDEFName#default)||||
|实体|PSDENAME|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/PSDEName#default)||||
|结束时间属性|ENDPSDEFID|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/EndPSDEFId#default)||||
|附加任务模式|TASKMODE|单项选择(数值)|0|||||
|实体数据集|PSDEDSID|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/PSDEDSId#default)||||
|实体数据集|PSDEDSNAME|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/PSDEDSName#default)||||
|实体|PSDEID|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/PSDEId#default)||||
|用户标识2|USERTAG2|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/UserTag2#default)||||
|用户标识|USERTAG|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/UserTag#default)||||
|通知消息类型|MSGTYPE|[多项选择(数值)](index/dictionary_index#WFInfomMsgType "通知消息类型")|0|||||
|用户标识3|USERTAG3|文本，可指定长度|50|[默认规则](module/extension/PSDENotify/value_rule/UserTag3#default)||||
|通知标记2|NOTIFYTAG2|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/NotifyTag2#default)||||
|通知标记|NOTIFYTAG|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/NotifyTag#default)||||
|代码名称|CODENAME|文本，可指定长度|50|[默认规则](module/extension/PSDENotify/value_rule/CodeName#default)||||
|启用|VALIDFLAG|是否逻辑|0|||||
|定时触发模式|TIMERMODE|是否逻辑|0|||||
|自定义条件|CUSTOMCOND|长文本，长度1000|2000|[默认规则](module/extension/PSDENotify/value_rule/CustomCond#default)||||
|检查间隔|CHECKTIMER|整型|0|[默认规则](module/extension/PSDENotify/value_rule/CheckTimer#default)||||
|用户标识4|USERTAG4|文本，可指定长度|50|[默认规则](module/extension/PSDENotify/value_rule/UserTag4#default)||||
|延后通知间隔|NOTIFYEND|整型|0|[默认规则](module/extension/PSDENotify/value_rule/NotifyEnd#default)||||
|提前通知间隔|NOTIFYSTART|整型|0|[默认规则](module/extension/PSDENotify/value_rule/NotifyStart#default)||||
|实体通知名称|PSDENOTIFYNAME|文本，可指定长度|200|[默认规则](module/extension/PSDENotify/value_rule/PSDENotifyName#default)||√||
|实体通知标识|PSDENOTIFYID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/extension/PSDENotify/value_rule/PSDENotifyId#default)||||
|通知子类|NOTIFYSUBTYPE|[单项选择(文本值)](index/dictionary_index#DENotifySubType "通知子类")|30|[默认规则](module/extension/PSDENotify/value_rule/NotifySubType#default)||||
|系统消息模板|PSSYSMSGTEMPLID|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/PSSysMsgTemplId#default)||||
|系统消息模板|PSSYSMSGTEMPLNAME|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/PSSysMsgTemplName#default)||||
|系统消息队列|PSSYSMSGQUEUEID|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/PSSysMsgQueueId#default)||||
|系统消息队列|PSSYSMSGQUEUENAME|文本，可指定长度|100|[默认规则](module/extension/PSDENotify/value_rule/PSSysMsgQueueName#default)||||
|监控事件集|EVENTS|长文本，没有长度限制|1048576|[默认规则](module/extension/PSDENotify/value_rule/Events#default)||||
|监控变化属性集|FIELDS|长文本，没有长度限制|1048576|[默认规则](module/extension/PSDENotify/value_rule/Fields#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_PSDENOTIFYTARGET_PSDENOTIFY_PSDENOTIFYID](der/DER1N_PSDENOTIFYTARGET_PSDENOTIFY_PSDENOTIFYID)|[消息通知目标(PSDENOTIFYTARGET)](module/extension/PSDENotifyTarget)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|应用|Apply|用户自定义|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||




## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/extension/PSDENotify/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSDENotify/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSDENotify/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_TASKMODE_EQ|附加任务模式|EQ|
|N_PSDEID_EQ|实体|EQ|
|N_PSDENOTIFYNAME_LIKE|实体通知名称|LIKE|
|N_PSDENOTIFYID_EQ|实体通知标识|EQ|
|N_NOTIFYSUBTYPE_EQ|通知子类|EQ|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 应用扩展模型 | apply | 应用 |单项数据（主键）|<details><summary>后台调用</summary>[Apply](#行为)|是|引用视图或树节点||

