# 执行结果(Run_history)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|测试用例|CASE_ID|外键值附加数据|100|[默认规则](module/TestMgmt/Run_history/value_rule/Case_id#default)||||
|备注|REMARK|长文本，长度1000|2000|[默认规则](module/TestMgmt/Run_history/value_rule/Remark#default)||||
|执行时间|EXECUTED_AT|日期时间型|0|||||
|执行结果|STATUS|[单项选择(文本值)](index/dictionary_index#Run_status "执行用例状态")|60|[默认规则](module/TestMgmt/Run_history/value_rule/Status#default)||||
|步骤|STEPS|一对多关系数据集合|1048576|[默认规则](module/TestMgmt/Run_history/value_rule/Steps#default)||||
|执行人标识|EXECUTOR_ID|文本，可指定长度|100|[默认规则](module/TestMgmt/Run_history/value_rule/Executor_id#default)||||
|执行人|EXECUTOR_NAME|文本，可指定长度|100|[默认规则](module/TestMgmt/Run_history/value_rule/Executor_name#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/TestMgmt/Run_history/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Run_history/value_rule/Create_man#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/TestMgmt/Run_history/value_rule/Name#default)||√||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Run_history/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|执行用例标识|RUN_ID|外键值|100|[默认规则](module/TestMgmt/Run_history/value_rule/Run_id#default)||||
|标题|RUN_TITLE|外键值文本|500|[默认规则](module/TestMgmt/Run_history/value_rule/Run_title#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[run_history_re_step](der/run_history_re_step)|[用例步骤(STEP)](module/TestMgmt/Step)|自定义关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_RUN_HISTORY_RUN_RUN_ID](der/DER1N_RUN_HISTORY_RUN_RUN_ID)|[执行用例(RUN)](module/TestMgmt/Run)|1:N关系||
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
|执行结果获取|Run_history_get|[实体处理逻辑](module/TestMgmt/Run_history/logic/run_history_get "执行结果获取")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[获取执行结果数据（废弃）](module/TestMgmt/Run_history/logic/get_run_history_list)|get_run_history_list|无|||
|[执行结果获取](module/TestMgmt/Run_history/logic/run_history_get)|run_history_get|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/TestMgmt/Run_history/query/Default)|DEFAULT|是|否 |否 ||
|[当前用例执行结果(this)](module/TestMgmt/Run_history/query/This)|this|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/Run_history/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/Run_history/dataset/Default)|DEFAULT|数据查询|是|||
|[当前用例执行结果(this)](module/TestMgmt/Run_history/dataset/This)|this|数据查询|否|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_STATUS_EQ|执行结果|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_RUN_ID_EQ|执行用例标识|EQ|
|N_RUN_TITLE_EQ|标题|EQ|
|N_RUN_TITLE_LIKE|标题|LIKE|




