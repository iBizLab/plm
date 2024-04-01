# 部门(SysDepartment)  <!-- {docsify-ignore-all} -->

ebsx

## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|部门标识|DEPTID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ebsx/SysDepartment/value_rule/DeptId#default)||||
|部门代码|DEPTCODE|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/DeptCode#default)||||
|部门名称|DEPTNAME|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/DeptName#default)||√||
|上级部门|PDEPTID|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/ParentDeptId#default)||||
|部门简称|SHORTNAME|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/ShortName#default)||||
|部门级别|DEPTLEVEL|整型|0|||||
|区属|DOMAINS|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/Domains#default)||||
|排序|SHOWORDER|整型|0|||||
|业务编码|BCODE|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/BCode#default)||||
|分管领导标识|LEADERID|文本，可指定长度|500|[默认规则](module/ebsx/SysDepartment/value_rule/LeaderId#default)||||
|分管领导|LEADERNAME|文本，可指定长度|500|[默认规则](module/ebsx/SysDepartment/value_rule/LeaderName#default)||||
|单位|ORGID|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/OrgId#default)||||
|逻辑有效|ENABLE|是否逻辑|0|||||
|单位名称|ORGNAME|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/OrgName#default)||||
|上级部门|PDEPTNAME|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/ParentDeptName#default)||||
|创建时间|CREATEDATE|日期时间型|0|||||
|更新时间|UPDATEDATE|日期时间型|0|||||
|保留18|RESERVER18|大数值|0|||||
|保留17|RESERVER17|大数值|0|||||
|保留16|RESERVER16|数值|0|||||
|保留12|RESERVER12|整型|0|||||
|保留15|RESERVER15|数值|0|||||
|保留14|RESERVER14|整型|0|||||
|保留13|RESERVER13|整型|0|||||
|保留6|RESERVER6|文本，可指定长度|200|[默认规则](module/ebsx/SysDepartment/value_rule/Reserver6#default)||||
|保留11|RESERVER11|整型|0|||||
|保留3|RESERVER3|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/Reserver3#default)||||
|保留7|RESERVER7|文本，可指定长度|1000|[默认规则](module/ebsx/SysDepartment/value_rule/Reserver7#default)||||
|保留4|RESERVER4|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/Reserver4#default)||||
|保留8|RESERVER8|文本，可指定长度|1000|[默认规则](module/ebsx/SysDepartment/value_rule/Reserver8#default)||||
|保留|RESERVER|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/Reserver#default)||||
|保留5|RESERVER5|文本，可指定长度|200|[默认规则](module/ebsx/SysDepartment/value_rule/Reserver5#default)||||
|保留2|RESERVER2|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/Reserver2#default)||||
|保留20|RESERVER20|日期时间型|0|||||
|保留19|RESERVER19|日期时间型|0|||||
|保留9|RESERVER9|长文本，没有长度限制|1048576|[默认规则](module/ebsx/SysDepartment/value_rule/Reserver9#default)||||
|保留10|RESERVER10|长文本，没有长度限制|1048576|[默认规则](module/ebsx/SysDepartment/value_rule/Reserver10#default)||||
|企业微信部门标识|WXWORKDEPTID|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/WXWorkDeptId#default)||||
|部门全称|DEPTFULLNAME|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/DeptFullName#default)||||
|部门领导|DEPTLEADER|文本，可指定长度|500|[默认规则](module/ebsx/SysDepartment/value_rule/DeptLeader#default)||||
|部门领导标识|DEPTLEADERID|文本，可指定长度|500|[默认规则](module/ebsx/SysDepartment/value_rule/DeptLeaderId#default)||||
|钉钉部门标识|DDDEPTID|文本，可指定长度|100|[默认规则](module/ebsx/SysDepartment/value_rule/DDDeptId#default)||||
|启用标志|ISVALID|是否逻辑|0|||||


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
|[数据查询(DEFAULT)](module/ebsx/SysDepartment/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ebsx/SysDepartment/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/ebsx/SysDepartment/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读） :id=SysDepartment-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=SysDepartment-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `UPDATE`
* `DELETE`
* `CREATE`



##### 当前部门（读） :id=SysDepartment-CURDEPT_R

<p class="panel-title"><b>数据范围</b></p>

* `部门范围` ： <i class="fa fa-check-square"/></i> 当前部门

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 当前部门（读写） :id=SysDepartment-CURDEPT_RW

<p class="panel-title"><b>数据范围</b></p>

* `部门范围` ： <i class="fa fa-check-square"/></i> 当前部门

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `CREATE`
* `DELETE`
* `READ`



##### 当前组织（读） :id=SysDepartment-CURORG_R

<p class="panel-title"><b>数据范围</b></p>

* `组织范围` ： <i class="fa fa-check-square"/></i> 当前组织

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 当前组织（读写） :id=SysDepartment-CURORG_RW

<p class="panel-title"><b>数据范围</b></p>

* `组织范围` ： <i class="fa fa-check-square"/></i> 当前组织

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `CREATE`
* `UPDATE`
* `READ`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_DEPTID_EQ|部门标识|EQ|
|N_DEPTNAME_LIKE|部门名称|LIKE|




