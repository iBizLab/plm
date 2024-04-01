# 部门(Sys_department)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Id#default)||||
|部门名称|DEPARTMENT_NAME|文本，可指定长度|200|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Department_name#default)||√||
|逻辑有效标记|ENABLED|是否逻辑|1|||||
|创建人|CREATOR|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Creator#default)||||
|创建时间|CREATE_TIME|日期时间型|0|||||
|最后更新人|UPDATER|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Updater#default)||||
|最后更新时间|UPDATE_TIME|日期时间型|0|||||
|DC|DC|文本，可指定长度|200|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Dc#default)||||
|部门编号|DEPARTMENT_NUMBER|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Department_number#default)||||
|备注|DESCRIPTION|长文本，长度1000|2000|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Description#default)||||
|简称|SHORT_NAME|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Short_name#default)||||
|排序|SORT|大整型|20|||||
|业务类别|BUSINESS_CATEGORY|文本数组|2000|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Business_category#default)||||
|上级标识|PARENT_UNIT_ID|文本，可指定长度|200|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Parent_unit_id#default)||||
|上级部门标识|PARENT_ID|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Parent_id#default)||||
|上级名称|PARENT_UNIT_NAME|文本，可指定长度|200|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Parent_unit_name#default)||||
|DN|DN|文本，可指定长度|200|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Dn#default)||||
|上级部门名称|PARENT_NAME|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Parent_name#default)||||
|组织机构标识|ORGANIZATION_ID|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Organization_id#default)||||
|组织机构名称|ORGANIZATION_NAME|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Organization_name#default)||||
|机构编号|ORGANIZATION_NUMBER|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_department/value_rule/Organization_number#default)||||


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
|[数据查询(DEFAULT)](module/ibizsysmgr/Sys_department/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ibizsysmgr/Sys_department/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/ibizsysmgr/Sys_department/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_ID_EQ|标识|EQ|
|N_DEPARTMENT_NAME_LIKE|部门名称|LIKE|




