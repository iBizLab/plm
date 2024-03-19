# 执行用例(Run)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|编号|IDENTIFIER|外键值附加数据|100|[默认规则](module/TestMgmt/Run/value_rule/Identifier#default)||√||
|标题|TITLE|外键值附加数据|500|[默认规则](module/TestMgmt/Run/value_rule/TITLE#default)||√||
|评审状态|STATE|[外键值附加数据](index/dictionary_index#Test_case_state "用例评审状态")|60|[默认规则](module/TestMgmt/Run/value_rule/STATE#default)||||
|重要程度|LEVEL|[外键值附加数据](index/dictionary_index#Test_case_level "用例重要程度")|60|[默认规则](module/TestMgmt/Run/value_rule/Level#default)||||
|用例类型|TYPE|[外键值附加数据](index/dictionary_index#Test_case_type "用例类型")|60|[默认规则](module/TestMgmt/Run/value_rule/Type#default)||||
|执行时间|EXECUTED_AT|日期时间型|0|||||
|执行结果|STATUS|[单项选择(文本值)](index/dictionary_index#Run_status "执行用例状态")|60|[默认规则](module/TestMgmt/Run/value_rule/Status#default)||||
|备注|REMARK|长文本，长度1000|2000|[默认规则](module/TestMgmt/Run/value_rule/Remark#default)||||
|步骤|STEPS|一对多关系数据集合|1048576|[默认规则](module/TestMgmt/Run/value_rule/Steps#default)||||
|测试计划|PLAN_NAME|外键值文本|200|[默认规则](module/TestMgmt/Run/value_rule/PLAN_NAME#default)||||
|测试类型|TEST_TYPE|[外键值附加数据](index/dictionary_index#Test_case_test_type "测试类型")|60|[默认规则](module/TestMgmt/Run/value_rule/TEST_TYPE#default)||||
|维护人|MAINTENANCE_NAME|外键值附加数据|200|[默认规则](module/TestMgmt/Run/value_rule/Maintenance_name#default)||||
|执行人标识|EXECUTOR_ID|文本，可指定长度|100|[默认规则](module/TestMgmt/Run/value_rule/Executor_id#default)||||
|执行人|EXECUTOR_NAME|文本，可指定长度|100|[默认规则](module/TestMgmt/Run/value_rule/Executor_name#default)||||
|用例模块标识|SUITE_ID|外键值附加数据|100|[默认规则](module/TestMgmt/Run/value_rule/Suite_id#default)||||
|所属模块|SUITE_NAME|外键值附加数据|200|[默认规则](module/TestMgmt/Run/value_rule/Suite_name#default)||||
|前置条件|PRECONDITION|外键值附加数据|2000|[默认规则](module/TestMgmt/Run/value_rule/Precondition#default)||||
|模块路径|SUITES|外键值附加数据|500|[默认规则](module/TestMgmt/Run/value_rule/Suites#default)||||
|附件|ATTACHMENTS|一对多关系数据集合|1048576|[默认规则](module/TestMgmt/Run/value_rule/Attachments#default)||||
|所属测试库|LIBRARY_NAME|外键值附加数据|200|[默认规则](module/TestMgmt/Run/value_rule/Library_name#default)||||
|测试库标识|LIBRARY_ID|外键值附加数据|100|[默认规则](module/TestMgmt/Run/value_rule/Library_id#default)||||
|关注|ATTENTIONS|一对多关系数据集合|1048576|[默认规则](module/TestMgmt/Run/value_rule/Attentions#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/TestMgmt/Run/value_rule/Id#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Run/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Run/value_rule/Update_man#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/TestMgmt/Run/value_rule/Name#default)||||
|测试计划标识|PLAN_ID|外键值|100|[默认规则](module/TestMgmt/Run/value_rule/Plan_id#default)||||
|测试用例标识|CASE_ID|外键值|100|[默认规则](module/TestMgmt/Run/value_rule/Case_id#default)||||
|名称|CASE_NAME|外键值文本|200|[默认规则](module/TestMgmt/Run/value_rule/Case_name#default)||||


<p class="panel-title"><b>联合主键</b></p>

  * `测试计划标识(PLAN_ID)`
  * `测试用例标识(CASE_ID)`

## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_RUN_HISTORY_RUN_RUN_ID](der/DER1N_RUN_HISTORY_RUN_RUN_ID)|[执行结果(RUN_HISTORY)](module/TestMgmt/Run_history)|1:N关系||
|[DER1N_STEP_RUN_RUN_ID](der/DER1N_STEP_RUN_RUN_ID)|[用例步骤(STEP)](module/TestMgmt/Step)|1:N关系||
|[DERCOSTOM_COMMENT_RUN_PRINCIPAL_ID](der/DERCOSTOM_COMMENT_RUN_PRINCIPAL_ID)|[评论(COMMENT)](module/Base/Comment)|自定义关系||
|[DERCUSTOM_ATTENTION_RUN_OWNER_ID](der/DERCUSTOM_ATTENTION_RUN_OWNER_ID)|[关注(ATTENTION)](module/Base/Attention)|自定义关系||
|[DERCUSTOM_RUN_ATTACHMENT](der/DERCUSTOM_RUN_ATTACHMENT)|[附件(ATTACHMENT)](module/Base/Attachment)|自定义关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_RUN_TEST_CASE_CASE_ID](der/DER1N_RUN_TEST_CASE_CASE_ID)|[用例(TEST_CASE)](module/TestMgmt/Test_case)|1:N关系||
|[DER1N_RUN_TEST_PLAN_PLAN_ID](der/DER1N_RUN_TEST_PLAN_PLAN_ID)|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持|[附加操作](index/action_logic_index#Run_Remove)|||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|添加计划执行用例|Add_plan_run|[实体处理逻辑](module/TestMgmt/Run/logic/create_plan_run "添加计划执行用例")|默认|不支持||||
|批设置执行结果|Batch_save_run_history|[实体处理逻辑](module/TestMgmt/Run/logic/batch_save_run_history "批设置执行结果")|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|移除用例|Delete_run_info|[实体处理逻辑](module/TestMgmt/Run/logic/delete_run_info "移除用例相关信息")|默认|不支持||||
|无操作|Nothing|[实体处理逻辑](module/TestMgmt/Run/logic/nothing "无操作")|默认|不支持||||
|规划计划|Program_plan|[实体处理逻辑](module/TestMgmt/Run/logic/program_plan "规划计划")|默认|不支持||||
|重置为未测|Reset_not_test|[实体处理逻辑](module/TestMgmt/Run/logic/reset_not_test "重置为未测")|默认|不支持||||
|执行结果获取|Run_history_get|[实体处理逻辑](module/TestMgmt/Run/logic/run_history_get "执行结果获取")|默认|不支持||||
|执行用例关联分页计数器|Run_re_counters|[实体处理逻辑](module/TestMgmt/Run/logic/run_re_counters "执行用例关联分页计数器")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||
|保存执行结果|Save_run_history|[实体处理逻辑](module/TestMgmt/Run/logic/create_result "记录执行结果")|默认|不支持||||
|设置执行人|Set_executor|[实体处理逻辑](module/TestMgmt/Run/logic/set_executor "设置执行人")|默认|不支持||||
|当前执行用例详情|This_run_details|[实体处理逻辑](module/TestMgmt/Run/logic/this_run_details "获取当前用例详情")|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[附加用例步骤](module/TestMgmt/Run/logic/add_steps)|add_steps|无|||
|[批设置执行结果](module/TestMgmt/Run/logic/batch_save_run_history)|batch_save_run_history|无|||
|[添加计划执行用例](module/TestMgmt/Run/logic/create_plan_run)|create_plan_run|无|||
|[记录执行结果](module/TestMgmt/Run/logic/create_result)|create_result|无|||
|[移除用例相关信息](module/TestMgmt/Run/logic/delete_run_info)|delete_run_info|无|||
|[执行人变更附加逻辑](module/TestMgmt/Run/logic/executor_onchange)|executor_onchange|属性逻辑|||
|[无操作](module/TestMgmt/Run/logic/nothing)|nothing|无|||
|[规划计划](module/TestMgmt/Run/logic/program_plan)|program_plan|无|||
|[重置为未测](module/TestMgmt/Run/logic/reset_not_test)|reset_not_test|无|||
|[执行结果获取](module/TestMgmt/Run/logic/run_history_get)|run_history_get|无|||
|[执行用例关联分页计数器](module/TestMgmt/Run/logic/run_re_counters)|run_re_counters|无||计算分页下关联事项的条数|
|[设置执行人](module/TestMgmt/Run/logic/set_executor)|set_executor|无|||
|[获取当前用例详情](module/TestMgmt/Run/logic/this_run_details)|this_run_details|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[评论通知执行人(comment_notify_executor)](module/TestMgmt/Run/query/Comment_notify_executor)|comment_notify_executor|否|否 |否 ||
|[数据查询(DEFAULT)](module/TestMgmt/Run/query/Default)|DEFAULT|是|否 |否 ||
|[当前模块下用例(normal)](module/TestMgmt/Run/query/Normal)|normal|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/Run/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[评论通知执行人(comment_notify_executor)](module/TestMgmt/Run/dataset/Comment_notify_executor)|comment_notify_executor|数据查询|否|||
|[数据集(DEFAULT)](module/TestMgmt/Run/dataset/Default)|DEFAULT|数据查询|是|||
|[当前模块下用例(normal)](module/TestMgmt/Run/dataset/Normal)|normal|数据查询|否|||


## 数据权限

##### 全部数据（读写） :id=Run-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `UPDATE`
* `CREATE`
* `DELETE`




## 消息通知

|    名称   | 代码名       |  消息队列   |  消息模板 |  通知目标     |  备注  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[设置执行人通知](module/TestMgmt/Run/notify/executor_notify)|executor_notify|[默认消息队列](index/notify_index)|[执行用例通知模板(设置执行人)](index/notify_index#run_executor)|执行人 ||


## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_STATUS_EQ|执行结果|EQ|
|N_STATUS_ISNOTNULL|执行结果|ISNOTNULL|
|N_PLAN_NAME_EQ|测试计划|EQ|
|N_PLAN_NAME_LIKE|测试计划|LIKE|
|N_SUITE_ID_EQ|用例模块标识|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_PLAN_ID_EQ|测试计划标识|EQ|
|N_CASE_ID_EQ|测试用例标识|EQ|
|N_CASE_NAME_EQ|名称|EQ|
|N_CASE_NAME_LIKE|名称|LIKE|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 记录执行结果 | add_run_history | 保存执行结果 |单项数据|<details><summary>后台调用</summary>[Save_run_history](#行为)|是|引用视图或树节点||
| 全部通过 | all_pass | 全部通过 |无数据|用户自定义|否|无||
| 打开关联用例 | open_re_run | 打开关联用例 |无数据|<details><summary>打开视图或向导（模态）</summary>[用例](app/view/test_casemain_view)</details>|否|无||
| 移出 | delete_run | 移出 |多项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)|是|引用视图或树节点||
| 添加附件数据 | add_attachments | 添加附件 |无数据|用户自定义|否|无||
| 选择用例 | choose_test_case | 选择用例 |无数据|<details><summary>后台调用</summary>[Program_plan](#行为)|是|引用视图或树节点||
| 设置执行人 | open_setting_actual_executor | 设置执行人 |多项数据（主键）|<details><summary>后台调用</summary>[Set_executor](#行为)|是|引用视图或树节点||
| 设置执行结果 | update_run_status | 设置执行结果 |多项数据（主键）|<details><summary>后台调用</summary>[Batch_save_run_history](#行为)|是|引用视图或树节点||
| 重置为未测 | reset_not_test | 重置为未测 |多项数据（主键）|<details><summary>后台调用</summary>[Reset_not_test](#行为)|是|引用视图或树节点||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[添加附件数据](module/TestMgmt/Run/uilogic/add_attachment)|add_attachment|
|[打开关联用例](module/TestMgmt/Run/uilogic/open_re_run)|open_re_run|
|[刷新用例表格](module/TestMgmt/Run/uilogic/refresh_run_grid)|refresh_run_grid|
|[触发计数器刷新(run)](module/TestMgmt/Run/uilogic/refresh_counter_run)|refresh_counter_run|
