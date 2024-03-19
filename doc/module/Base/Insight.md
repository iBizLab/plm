# 洞察力(Insight)  <!-- {docsify-ignore-all} -->

用于存储报表标识类型等，通过重定向视图导向对应的报表视图，可使用view://机制

## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|报表类型|TYPE|单项选择(文本值)|60|[默认规则](module/Base/Insight/value_rule/Type#default)||||
|描述|DESC|长文本，没有长度限制|1048576|[默认规则](module/Base/Insight/value_rule/Desc#default)||||
|组别|GROUP|单项选择(文本值)|60|[默认规则](module/Base/Insight/value_rule/Group#default)||||
|报表呈现视图|VIEW_URL|长文本，没有长度限制|1048576|[默认规则](module/Base/Insight/value_rule/View_url#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Insight/value_rule/Create_man#default)||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Insight/value_rule/Update_man#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Insight/value_rule/Id#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/Insight/value_rule/Name#default)||√||


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
|[数据查询(DEFAULT)](module/Base/Insight/query/Default)|DEFAULT|是|否 |否 ||
|[工作项分布(property_distribution)](module/Base/Insight/query/Property_distribution)|property_distribution|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/Insight/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/Insight/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_TYPE_EQ|报表类型|EQ|
|N_GROUP_EQ|组别|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|




