# 人员(Sys_person)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|创建人|CREATOR|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Creator#default)||||
|最后更新人|UPDATER|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Updater#default)||||
|DC|DC|文本，可指定长度|200|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Dc#default)||||
|名称|DISPLAY_NAME|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Display_name#default)||||
|密码|USER_PASSWORD|文本，可指定长度|512|[默认规则](module/ibizsysmgr/Sys_person/value_rule/User_password#default)||||
|人员编号|EMPLOYEE_NUMBER|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Employee_number#default)||||
|类型|EMPLOYEE_TYPE|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Employee_type#default)||||
|职位|TITLE|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Title#default)||||
|电子邮箱|MAIL|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Mail#default)||||
|联系电话|TELEPHONE_NUMBER|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Telephone_number#default)||||
|移动电话|MOBILE|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Mobile#default)||||
|证件号|IDENTIFICATION_NUMBER|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Identification_number#default)||||
|地址|POSTAL_ADDRESS|文本，可指定长度|500|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Postal_address#default)||||
|描述|DESCRIPTION|长文本，长度1000|2000|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Description#default)||||
|主部门|MDEPARTMENT_NAME|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Mdepartment_name#default)||||
|DN|DN|文本，可指定长度|200|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Dn#default)||||
|主部门|MDEPARTMENT_ID|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Mdepartment_id#default)||||
|uid/loginname|UID|文本，可指定长度|100|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Uid#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|逻辑有效标志|ENABLE|是否逻辑|8|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ibizsysmgr/Sys_person/value_rule/Id#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||


<p class="panel-title"><b>联合主键</b></p>

  * `DC(DC)`

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
|[数据查询(DEFAULT)](module/ibizsysmgr/Sys_person/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ibizsysmgr/Sys_person/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/ibizsysmgr/Sys_person/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_DC_EQ|DC|EQ|
|N_ID_EQ|标识|EQ|




