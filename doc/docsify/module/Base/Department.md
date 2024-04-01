# 部门(Department)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/Department/value_rule/Name#default)||√||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Department/value_rule/Create_man#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Department/value_rule/Id#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Department/value_rule/Update_man#default)||||
|部门负责人标识|HEAD_ID|外键值|100|[默认规则](module/Base/Department/value_rule/Head_id#default)||||
|父部门标识|PARENT_ID|外键值|100|[默认规则](module/Base/Department/value_rule/Parent_id#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_DEPARTMENT_DEPARTMENT_PARENT_ID](der/DER1N_DEPARTMENT_DEPARTMENT_PARENT_ID)|[部门(DEPARTMENT)](module/Base/Department)|1:N关系||
|[DER1N_USER_DEPARTMENT_DEPARTMENT_ID](der/DER1N_USER_DEPARTMENT_DEPARTMENT_ID)|[企业用户(USER)](module/Base/User)|1:N关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_DEPARTMENT_DEPARTMENT_PARENT_ID](der/DER1N_DEPARTMENT_DEPARTMENT_PARENT_ID)|[部门(DEPARTMENT)](module/Base/Department)|1:N关系||
|[DER1N_DEPARTMENT_USER_HEAD_ID](der/DER1N_DEPARTMENT_USER_HEAD_ID)|[企业用户(USER)](module/Base/User)|1:N关系||
<!-- tabs:end -->

## 映射
| 名称    | 映射实体   | 备注  |
| -------- |----------  |----- |
|[ebsx_mapping](module/Base/Department/demap/ebsx_mapping)|[部门(SYS_DEPT)](module/ebsx/SysDepartment)||
|[ibizsysmgr部门映射](module/Base/Department/demap/ibizsysmgr)|[部门(SYS_DEPARTMENT)](module/ibizsysmgr/Sys_department)||

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
|[数据查询(DEFAULT)](module/Base/Department/query/Default)|DEFAULT|是|否 |否 ||
|[根部门(root)](module/Base/Department/query/Root)|root|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/Department/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/Department/dataset/Default)|DEFAULT|数据查询|是|||
|[根部门(root)](module/Base/Department/dataset/Root)|root|数据查询|否|||


## 数据权限

##### 全部数据（读） :id=Department-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=Department-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `DELETE`
* `CREATE`
* `READ`



##### 当前部门（读） :id=Department-CURDEPT_R

<p class="panel-title"><b>数据范围</b></p>

* `部门范围` ： <i class="fa fa-check-square"/></i> 当前部门

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 当前部门（读写） :id=Department-CURDEPT_RW

<p class="panel-title"><b>数据范围</b></p>

* `部门范围` ： <i class="fa fa-check-square"/></i> 当前部门

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `UPDATE`
* `READ`
* `CREATE`



##### 当前组织（读） :id=Department-CURORG_R

<p class="panel-title"><b>数据范围</b></p>

* `组织范围` ： <i class="fa fa-check-square"/></i> 当前组织

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 当前组织（读写） :id=Department-CURORG_RW

<p class="panel-title"><b>数据范围</b></p>

* `组织范围` ： <i class="fa fa-check-square"/></i> 当前组织

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `READ`
* `CREATE`
* `UPDATE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_NAME_LIKE|名称|LIKE|
|N_ID_EQ|标识|EQ|
|N_HEAD_ID_EQ|部门负责人标识|EQ|
|N_PARENT_ID_EQ|父部门标识|EQ|




