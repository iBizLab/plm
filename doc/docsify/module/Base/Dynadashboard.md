# 动态数据看板(Dynadashboard)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Dynadashboard/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|用户标识|USERID|文本，可指定长度|100|[默认规则](module/Base/Dynadashboard/value_rule/UserId#default)||||
|模型标识|MODELID|文本，可指定长度|100|[默认规则](module/Base/Dynadashboard/value_rule/ModelId#default)||||
|应用标识|APPID|文本，可指定长度|100|[默认规则](module/Base/Dynadashboard/value_rule/AppId#default)||||
|模型|MODEL|长文本，没有长度限制|1048576|[默认规则](module/Base/Dynadashboard/value_rule/Model#default)||||
|动态数据看板标识|DYNADASHBOARDID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Dynadashboard/value_rule/DynaDashboardId#default)||||
|建立人|CREATEMAN|文本，可指定长度|60|[默认规则](module/Base/Dynadashboard/value_rule/CreateMan#default)||||
|动态数据看板名称|DYNADASHBOARDNAME|文本，可指定长度|200|[默认规则](module/Base/Dynadashboard/value_rule/DynaDashboardName#default)||√||
|建立时间|CREATEDATE|日期时间型|8|||||


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
|[数据查询(DEFAULT)](module/Base/Dynadashboard/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/Dynadashboard/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/Dynadashboard/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_DYNADASHBOARDID_EQ|动态数据看板标识|EQ|




