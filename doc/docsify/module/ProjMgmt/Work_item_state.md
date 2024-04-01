# 工作项状态(Work_item_state)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|序号|SEQUENCE|数值|0|||||
|颜色|COLOR|文本，可指定长度|100|[默认规则](module/ProjMgmt/Work_item_state/value_rule/Color#default)||||
|样式表|STYLE|文本，可指定长度|100|[默认规则](module/ProjMgmt/Work_item_state/value_rule/Style#default)||||
|状态类型|TYPE|[单项选择(文本值)](index/dictionary_index#State_type "状态类型")|60|[默认规则](module/ProjMgmt/Work_item_state/value_rule/Type#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProjMgmt/Work_item_state/value_rule/Id#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Work_item_state/value_rule/Create_man#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/ProjMgmt/Work_item_state/value_rule/Name#default)||√||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Work_item_state/value_rule/Update_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|工作项类型标识|WORK_ITEM_TYPE_ID|外键值|100|[默认规则](module/ProjMgmt/Work_item_state/value_rule/Work_item_type_id#default)||||


## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_WORK_ITEM_STATE_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID](der/DER1N_WORK_ITEM_STATE_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID)|[工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/Work_item_type)|1:N关系||
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
|[数据查询(DEFAULT)](module/ProjMgmt/Work_item_state/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/Work_item_state/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/Work_item_state/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读） :id=Work_item_state-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=Work_item_state-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `READ`
* `CREATE`
* `UPDATE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_TYPE_EQ|状态类型|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_WORK_ITEM_TYPE_ID_EQ|工作项类型标识|EQ|




