# 关联(Relation)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|关联主体标识|PRINCIPAL_ID|文本，可指定长度|100|[默认规则](module/Base/Relation/value_rule/Principal_id#default)||||
|关联主体类型|PRINCIPAL_TYPE|文本，可指定长度|100|[默认规则](module/Base/Relation/value_rule/Principal_type#default)||||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|[默认规则](module/Base/Relation/value_rule/Owner_type#default)||||
|关联目标类型|TARGET_TYPE|文本，可指定长度|100|[默认规则](module/Base/Relation/value_rule/Target_type#default)||||
|关联目标标识|TARGET_ID|文本，可指定长度|100|[默认规则](module/Base/Relation/value_rule/Target_id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/Relation/value_rule/Name#default)||√||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Relation/value_rule/Update_man#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Relation/value_rule/Id#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Relation/value_rule/Create_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||


<p class="panel-title"><b>联合主键</b></p>

  * `关联主体标识(PRINCIPAL_ID)`
  * `关联目标标识(TARGET_ID)`

## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_RELATION_CUSTOMER](der/DERCUSTOM_RELATION_CUSTOMER)|[客户(CUSTOMER)](module/ProdMgmt/Customer)|自定义关系||
|[DERCUSTOM_RELATION_IDEA](der/DERCUSTOM_RELATION_IDEA)|[需求(IDEA)](module/ProdMgmt/Idea)|自定义关系||
|[DERCUSTOM_RELATION_PRODUCT_PLAN](der/DERCUSTOM_RELATION_PRODUCT_PLAN)|[排期(PRODUCT_PLAN)](module/ProdMgmt/Product_plan)|自定义关系||
|[DERCUSTOM_RELATION_SPACE](der/DERCUSTOM_RELATION_SPACE)|[空间(SPACE)](module/Wiki/Space)|自定义关系||
|[DERCUSTOM_RELATION_TEST_CASE](der/DERCUSTOM_RELATION_TEST_CASE)|[用例(TEST_CASE)](module/TestMgmt/Test_case)|自定义关系||
|[DERCUSTOM_RELATION_TEST_PLAN](der/DERCUSTOM_RELATION_TEST_PLAN)|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|自定义关系||
|[DERCUSTOM_RELATION_TICKET](der/DERCUSTOM_RELATION_TICKET)|[工单(TICKET)](module/ProdMgmt/Ticket)|自定义关系||
|[DERCUSTOM_RELATION_WORK_ITEM](der/DERCUSTOM_RELATION_WORK_ITEM)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|自定义关系||
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
|[数据查询(DEFAULT)](module/Base/Relation/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/Relation/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/Relation/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读写） :id=Relation-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `DELETE`
* `READ`
* `CREATE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_PRINCIPAL_ID_EQ|关联主体标识|EQ|
|N_TARGET_ID_EQ|关联目标标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_ID_EQ|标识|EQ|





## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[建立关联数据](module/Base/Relation/uilogic/create_relation)|create_relation|
