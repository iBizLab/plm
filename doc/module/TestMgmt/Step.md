# 用例步骤(Step)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|步骤描述|DESCRIPTION|长文本，长度1000|2000|[默认规则](module/TestMgmt/Step/value_rule/Description#default)||||
|预期结果|EXPECTED_VALUE|长文本，长度1000|2000|[默认规则](module/TestMgmt/Step/value_rule/Expected_value#default)||||
|分组标识|GROUP_ID|文本，可指定长度|100|[默认规则](module/TestMgmt/Step/value_rule/Group_id#default)||||
|实际|ACTUAL_VALUE|长文本，长度1000|2000|[默认规则](module/TestMgmt/Step/value_rule/Actual_value#default)||||
|是否分组|IS_GROUP|是否逻辑|0|||||
|执行结果|STATUS|单项选择(文本值)|60|[默认规则](module/TestMgmt/Step/value_rule/Status#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/TestMgmt/Step/value_rule/Id#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/TestMgmt/Step/value_rule/Name#default)||√||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Step/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Step/value_rule/Update_man#default)||||
|用例标识|CASE_ID|外键值|100|[默认规则](module/TestMgmt/Step/value_rule/Case_id#default)||||
|执行用例标识|RUN_ID|外键值|100|[默认规则](module/TestMgmt/Step/value_rule/Run_id#default)||||


## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_STEP_RUN_RUN_ID](der/DER1N_STEP_RUN_RUN_ID)|[执行用例(RUN)](module/TestMgmt/Run)|1:N关系||
|[DER1N_STEP_TEST_CASE_CASE_ID](der/DER1N_STEP_TEST_CASE_CASE_ID)|[用例(TEST_CASE)](module/TestMgmt/Test_case)|1:N关系||
|[run_history_re_step](der/run_history_re_step)|[执行结果(RUN_HISTORY)](module/TestMgmt/Run_history)|自定义关系||
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
|[数据查询(DEFAULT)](module/TestMgmt/Step/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/Step/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/Step/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_STATUS_EQ|执行结果|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_CASE_ID_EQ|用例标识|EQ|
|N_RUN_ID_EQ|执行用例标识|EQ|




