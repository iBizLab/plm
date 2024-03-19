# 工时(Workload)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|编号|IDENTIFIER|文本，可指定长度|100|[默认规则](module/Base/Workload/value_rule/Identifier#default)|[工作项编号](index/sequence_index#seq_work_item_id)|||
|工时主体标识|PRINCIPAL_ID|文本，可指定长度|100|[默认规则](module/Base/Workload/value_rule/Principal_id#default)||||
|工时主体类型|PRINCIPAL_TYPE|文本，可指定长度|100|[默认规则](module/Base/Workload/value_rule/Principal_type#default)||||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|[默认规则](module/Base/Workload/value_rule/Owner_type#default)||||
|时长|DURATION|数值|0|||||
|描述|DESCRIPTION|长文本，没有长度限制|1048576|[默认规则](module/Base/Workload/value_rule/Description#default)||||
|工作日期|REGISTER_DATE|日期型|0|||||
|访问父类名称|RECENT_PARENT_NAME|文本，可指定长度|100|[默认规则](module/Base/Workload/value_rule/Recent_parent_name#default)||||
|访问父类|RECENT_PARENT|文本，可指定长度|100|[默认规则](module/Base/Workload/value_rule/Recent_parent#default)||||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|[默认规则](module/Base/Workload/value_rule/Show_identifier#default)||√||
|访问父类编号|RECENT_PARENT_IDENTIFIER|文本，可指定长度|100|[默认规则](module/Base/Workload/value_rule/Recent_parent_identifier#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Workload/value_rule/Id#default)||||
|名称|NAME|文本，可指定长度|500|[默认规则](module/Base/Workload/value_rule/Name#default)||√||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Workload/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Workload/value_rule/Update_man#default)||||
|类别|TYPE_ID|外键值|100|[默认规则](module/Base/Workload/value_rule/Type_id#default)||||
|名称|TYPE_NAME|外键值文本|200|[默认规则](module/Base/Workload/value_rule/Type_name#default)||||


## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_WORKLOAD_WORKLOAD_TYPE_TYPE_ID](der/DER1N_WORKLOAD_WORKLOAD_TYPE_TYPE_ID)|[工时类别(WORKLOAD_TYPE)](module/Base/Workload_type)|1:N关系||
|[DERCUSTOM_WORK_ITEM_WORKLOAD](der/DERCUSTOM_WORK_ITEM_WORKLOAD)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|自定义关系||
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
|工作时长表单项更新|Duration_updateform|[实体处理逻辑](module/Base/Workload/logic/duration_updateform "工作时长表单项更新")|默认|不支持||||
|获取数据（工作项）|Get_workload_workitem|[实体处理逻辑](module/Base/Workload/logic/get_workload_workitem "获取数据（工作项）")|默认|不支持||||
|获取草稿（工作项）|Getdraft_workload_workitem|[实体处理逻辑](module/Base/Workload/logic/getdraft_workload_workitem "获取草稿（工作项）")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||
|保存工时并更新工作项剩余工时|Save_workload_workitem|[实体处理逻辑](module/Base/Workload/logic/save_workload_workitem "保存工时并更新工作项剩余工时")|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[工作时长表单项更新](module/Base/Workload/logic/duration_updateform)|duration_updateform|无|||
|[获取数据（工作项）](module/Base/Workload/logic/get_workload_workitem)|get_workload_workitem|无|||
|[获取草稿（工作项）](module/Base/Workload/logic/getdraft_workload_workitem)|getdraft_workload_workitem|无|||
|[保存工时并更新工作项剩余工时](module/Base/Workload/logic/save_workload_workitem)|save_workload_workitem|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/Base/Workload/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/Workload/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/Workload/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读写） :id=Workload-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `DELETE`
* `UPDATE`
* `CREATE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_PRINCIPAL_ID_EQ|工时主体标识|EQ|
|N_REGISTER_DATE_GTANDEQ|工作日期|GTANDEQ|
|N_REGISTER_DATE_IN|工作日期|IN|
|N_REGISTER_DATE_LTANDEQ|工作日期|LTANDEQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_TYPE_ID_EQ|类别|EQ|
|N_TYPE_NAME_EQ|名称|EQ|
|N_TYPE_NAME_LIKE|名称|LIKE|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 工时明细返回主表单 | back | 返回 |无数据|用户自定义|否|无||
| 删除工时 | delere | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)|是|引用视图或树节点||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[返回](module/Base/Workload/uilogic/back)|back|
