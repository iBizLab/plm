# 活动(Activitiy)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Activitiy/value_rule/Id#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/Activitiy/value_rule/Name#default)||√||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Activitiy/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Activitiy/value_rule/Update_man#default)||||
|审计信息|AUDITINFO|长文本，没有长度限制|1048576|[默认规则](module/Base/Activitiy/value_rule/AuditInfo#default)||||
|对象标识|OBJECTID|文本，可指定长度|100|[默认规则](module/Base/Activitiy/value_rule/ObjectId#default)||||
|操作人|OPPERSONID|文本，可指定长度|100|[默认规则](module/Base/Activitiy/value_rule/OPPersonId#default)||||
|操作人|OPPERSONNAME|文本，可指定长度|100|[默认规则](module/Base/Activitiy/value_rule/OPPersonName#default)||||
|访问地址|IPADDRESS|文本，可指定长度|500|[默认规则](module/Base/Activitiy/value_rule/IPAddress#default)||||
|审计类型|AUDITTYPE|文本，可指定长度|100|[默认规则](module/Base/Activitiy/value_rule/AuditType#default)||||
|对象类型|OBJECTTYPE|文本，可指定长度|100|[默认规则](module/Base/Activitiy/value_rule/ObjectType#default)||||


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
|[数据查询(DEFAULT)](module/Base/Activitiy/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/Activitiy/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[全部数据(ALL)](module/Base/Activitiy/dataset/ALL)|ALL|数据查询|否|||
|[数据集(DEFAULT)](module/Base/Activitiy/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读写） :id=Activitiy-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `CREATE`
* `READ`
* `UPDATE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_AUDITINFO_ISNOTNULL|审计信息|ISNOTNULL|
|N_OBJECTID_EQ|对象标识|EQ|




