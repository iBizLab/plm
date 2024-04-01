# 消息通知目标(PSDENotifyTarget)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/extension/PSDENotifyTarget/value_rule/Create_man#default)||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/extension/PSDENotifyTarget/value_rule/Update_man#default)||||
|实体通知目标名称|PSDENOTIFYTARGETNAME|文本，可指定长度|200|[默认规则](module/extension/PSDENotifyTarget/value_rule/PSDENotifyTargetName#default)||√||
|实体通知目标标识|PSDENOTIFYTARGETID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/extension/PSDENotifyTarget/value_rule/PSDENotifyTargetId#default)||||
|目标数据|DATA|长文本，没有长度限制|1048576|[默认规则](module/extension/PSDENotifyTarget/value_rule/Data#default)||||
|目标类型|TARGETTYPE|[单项选择(文本值)](index/dictionary_index#DENotifyTargetType "实体通知目标类型")|20|[默认规则](module/extension/PSDENotifyTarget/value_rule/TargetType#default)||||
|过滤项|FILTER|文本，可指定长度|50|[默认规则](module/extension/PSDENotifyTarget/value_rule/Filter#default)||||
|实体通知|PSDENOTIFYID|外键值|100|[默认规则](module/extension/PSDENotifyTarget/value_rule/PSDENotifyId#default)||||
|实体通知|PSDENOTIFYNAME|外键值文本|200|[默认规则](module/extension/PSDENotifyTarget/value_rule/PSDENotifyName#default)||||


## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_PSDENOTIFYTARGET_PSDENOTIFY_PSDENOTIFYID](der/DER1N_PSDENOTIFYTARGET_PSDENOTIFY_PSDENOTIFYID)|[实体通知(PSDENOTIFY)](module/extension/PSDENotify)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||




## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/extension/PSDENotifyTarget/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSDENotifyTarget/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSDENotifyTarget/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_PSDENOTIFYTARGETNAME_LIKE|实体通知目标名称|LIKE|
|N_PSDENOTIFYTARGETID_EQ|实体通知目标标识|EQ|
|N_TARGETTYPE_EQ|目标类型|EQ|
|N_PSDENOTIFYID_EQ|实体通知|EQ|
|N_PSDENOTIFYNAME_EQ|实体通知|EQ|
|N_PSDENOTIFYNAME_LIKE|实体通知|LIKE|




