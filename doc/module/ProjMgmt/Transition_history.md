# 流转记录(Transition_history)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|所属数据标识|OWNER_ID|文本，可指定长度|100|[默认规则](module/ProjMgmt/Transition_history/value_rule/Owner_id#default)||||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|[默认规则](module/ProjMgmt/Transition_history/value_rule/Owner_type#default)||||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|[默认规则](module/ProjMgmt/Transition_history/value_rule/Owner_subtype#default)||||
|源状态|FROM_STATE|单项选择(文本值)|100|[默认规则](module/ProjMgmt/Transition_history/value_rule/From_state#default)||||
|目标状态|TO_STATE|单项选择(文本值)|100|[默认规则](module/ProjMgmt/Transition_history/value_rule/To_state#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/ProjMgmt/Transition_history/value_rule/Name#default)||√||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProjMgmt/Transition_history/value_rule/Id#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Transition_history/value_rule/Update_man#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Transition_history/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||


## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_TRANSITION_HISTORY_WORK_ITEM](der/DERCUSTOM_TRANSITION_HISTORY_WORK_ITEM)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|自定义关系||
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
|[数据查询(DEFAULT)](module/ProjMgmt/Transition_history/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/Transition_history/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/Transition_history/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读写） :id=Transition_history-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `CREATE`
* `DELETE`
* `READ`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_OWNER_ID_EQ|所属数据标识|EQ|
|N_FROM_STATE_EQ|源状态|EQ|
|N_TO_STATE_EQ|目标状态|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_ID_EQ|标识|EQ|




