# 扩展存储(Extend_storage)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|所属数据标识|OWNER_ID|文本，可指定长度|100|[默认规则](module/Base/Extend_storage/value_rule/Owner_id#default)||||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|[默认规则](module/Base/Extend_storage/value_rule/Owner_type#default)||||
|文本值|STRING_VALUE|文本，可指定长度|4000|[默认规则](module/Base/Extend_storage/value_rule/String_value#default)||||
|长文本值|LONGSTRING_VALUE|长文本，没有长度限制|1048576|[默认规则](module/Base/Extend_storage/value_rule/Longstring_value#default)||||
|浮点值|DOUBLE_VALUE|浮点|0|||||
|时间值|DATETIME_VALUE|日期时间型|0|||||
|数值值|DECIMAL_VALUE|数值|0|||||
|整形值|INT_VALUE|整型|0|||||
|大整形值|BIGINT_VALUE|大整型|20|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Extend_storage/value_rule/Id#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/Extend_storage/value_rule/Name#default)||√||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Extend_storage/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Extend_storage/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||


<p class="panel-title"><b>联合主键</b></p>

  * `所属数据对象(OWNER_TYPE)`
  * `所属数据标识(OWNER_ID)`
  * `名称(NAME)`

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
|[数据查询(DEFAULT)](module/Base/Extend_storage/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/Extend_storage/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/Extend_storage/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_OWNER_ID_EQ|所属数据标识|EQ|
|N_OWNER_TYPE_EQ|所属数据对象|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_NAME_EQ|名称|EQ|




