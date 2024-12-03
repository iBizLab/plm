# 执行用例(run)  <!-- {docsify-ignore-all} -->


用于记录测试库中测试用例的执行情况，包括测试类型、执行者和执行时间。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|实际工时|ACTUAL_WORKLOAD|数值||是||
|关注|ATTENTIONS|一对多关系数据集合|1048576|是||
|关注人|ATTENTIONS_IMP|文本，可指定长度|100|是||
|关注数|ATTENTION_COUNT|文本，可指定长度|200|是||
|bi测试计划名称|BI_PLAN_NAME|文本，可指定长度|200|是||
|测试用例标识|CASE_ID|外键值|100|是||
|名称|CASE_NAME|外键值文本|200|是||
|评论数|COMMENT_COUNT|文本，可指定长度|200|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|当前版本标识|CUR_VERSION_ID|文本，可指定长度|100|是||
|预估工时|ESTIMATED_WORKLOAD|数值||是||
|执行时间|EXECUTED_AT|日期时间型||是||
|执行人标识|EXECUTOR_ID|文本，可指定长度|100|是||
|执行人|EXECUTOR_NAME|文本，可指定长度|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号|IDENTIFIER|外键值附加数据|100|是||
|是否最新|IS_NEWEST|是否逻辑||是||
|重要程度|LEVEL|[外键值附加数据](index/dictionary_index#test_case_level "用例重要程度")|60|是||
|测试库标识|LIBRARY_ID|外键值附加数据|100|是||
|测试库编号|LIBRARY_IDENTIFIER|外键值附加数据|15|是||
|测试库是否归档|LIBRARY_IS_ARCHIVED|外键值附加数据||是||
|测试库是否删除|LIBRARY_IS_DELETED|外键值附加数据||是||
|所属测试库|LIBRARY_NAME|外键值附加数据|200|是||
|维护人|MAINTENANCE_NAME|外键值附加数据|200|是||
|名称|NAME|文本，可指定长度|200|是||
|父对象版本标识|PARENT_VERSION_ID|文本，可指定长度|100|是||
|测试计划标识|PLAN_ID|外键值|100|是||
|测试计划|PLAN_NAME|外键值文本|200|是||
|前置条件|PRECONDITION|外键值附加数据|1048576|是||
|优先级|PRIORITY|[单项选择(文本值)](index/dictionary_index#work_item_priority "优先级")|60|是||
|最近创建日期|RECENT_CREATE_DAYS|整型||是||
|关联缺陷数|RELATION_TOTAL_BUG|数值||是||
|关联执行结果数|RELATION_TOTAL_HISTORY|数值||是||
|剩余工时|REMAINING_WORKLOAD|数值||是||
|备注|REMARK|长文本，长度1000|2000|是||
|结果附件|RUN_ATTACHMENT|一对多关系数据集合|1048576|是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|评审状态|STATE|[外键值附加数据](index/dictionary_index#case_state "用例状态")|60|是||
|执行结果|STATUS|[单项选择(文本值)](index/dictionary_index#run_status "执行用例状态")|60|是||
|步骤|STEPS|一对多关系数据集合|1048576|是||
|模块路径|SUITES|外键值附加数据|500|是||
|用例模块标识|SUITE_ID|外键值附加数据|100|是||
|所属模块|SUITE_NAME|外键值附加数据|200|是||
|测试类型|TEST_TYPE|[外键值附加数据](index/dictionary_index#test_case_test_type "测试类型")|60|是||
|标题|TITLE|外键值附加数据|500|是||
|用例类型|TYPE|[外键值附加数据](index/dictionary_index#test_case_type "用例类型")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|工时进度|WORKLOAD_SCHEDULE|数值||是||

<p class="panel-title"><b>联合主键</b></p>

  * `测试计划标识(PLAN_ID)`
  * `测试用例标识(CASE_ID)`

###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="BI查询属性组" name="field_group_bi_search_group">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|是否最新|IS_NEWEST|是否逻辑||是||
|执行时间|EXECUTED_AT|日期时间型||是||
|建立时间|CREATE_TIME|日期时间型||否||
|更新时间|UPDATE_TIME|日期时间型||否||
|执行人|EXECUTOR_NAME|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|名称|NAME|文本，可指定长度|200|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|执行人标识|EXECUTOR_ID|文本，可指定长度|100|是||
|当前版本标识|CUR_VERSION_ID|文本，可指定长度|100|是||
|工时进度|WORKLOAD_SCHEDULE|数值||是||
|剩余工时|REMAINING_WORKLOAD|数值||是||
|关联执行结果数|RELATION_TOTAL_HISTORY|数值||是||
|关联缺陷数|RELATION_TOTAL_BUG|数值||是||
|预估工时|ESTIMATED_WORKLOAD|数值||是||
|实际工时|ACTUAL_WORKLOAD|数值||是||
|所属测试库|LIBRARY_NAME|外键值附加数据|200|是||
|用例类型|TYPE|[外键值附加数据](index/dictionary_index#test_case_type "用例类型")|60|是||
|重要程度|LEVEL|[外键值附加数据](index/dictionary_index#test_case_level "用例重要程度")|60|是||
|评审状态|STATE|[外键值附加数据](index/dictionary_index#case_state "用例状态")|60|是||
|维护人|MAINTENANCE_NAME|外键值附加数据|200|是||
|测试类型|TEST_TYPE|[外键值附加数据](index/dictionary_index#test_case_test_type "测试类型")|60|是||
|编号|IDENTIFIER|外键值附加数据|100|是||
|测试库标识|LIBRARY_ID|外键值附加数据|100|是||
|标题|TITLE|外键值附加数据|500|是||
|所属模块|SUITE_NAME|外键值附加数据|200|是||
|名称|CASE_NAME|外键值文本|200|是||
|测试计划|PLAN_NAME|外键值文本|200|是||
|测试计划标识|PLAN_ID|外键值|100|是||
|测试用例标识|CASE_ID|外键值|100|是||
|执行结果|STATUS|[单项选择(文本值)](index/dictionary_index#run_status "执行用例状态")|60|是||
|优先级|PRIORITY|[单项选择(文本值)](index/dictionary_index#work_item_priority "优先级")|60|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|bi测试计划名称|BI_PLAN_NAME|文本，可指定长度|200|是||
|测试库是否删除|LIBRARY_IS_DELETED|外键值附加数据||是||

</el-tab-pane>
<el-tab-pane label="执行人" name="field_group_executor">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|执行人标识|EXECUTOR_ID|文本，可指定长度|100|是||
|执行人|EXECUTOR_NAME|文本，可指定长度|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_RUN_HISTORY_RUN_RUN_ID](der/DER1N_RUN_HISTORY_RUN_RUN_ID)|[执行结果(RUN_HISTORY)](module/TestMgmt/run_history)|1:N关系||
|[DER1N_STEP_RUN_RUN_ID](der/DER1N_STEP_RUN_RUN_ID)|[用例步骤(STEP)](module/TestMgmt/step)|1:N关系||
|[DERCOSTOM_COMMENT_RUN_PRINCIPAL_ID](der/DERCOSTOM_COMMENT_RUN_PRINCIPAL_ID)|[评论(COMMENT)](module/Base/comment)|自定义关系||
|[DERCUSTOM_ATTENTION_RUN_OWNER_ID](der/DERCUSTOM_ATTENTION_RUN_OWNER_ID)|[关注(ATTENTION)](module/Base/attention)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_RUN](der/DERCUSTOM_RELATION_TARGET_RUN)|[关联(RELATION)](module/Base/relation)|自定义关系||
|[DERCUSTOM_RUN_RUN_ATTACHMENT](der/DERCUSTOM_RUN_RUN_ATTACHMENT)|[执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment)|自定义关系||
|[DERCUSTOM_RUN_SEARCH_COMMENT](der/DERCUSTOM_RUN_SEARCH_COMMENT)|[评论搜索(SEARCH_COMMENT)](module/Base/search_comment)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_RUN_TEST_CASE_CASE_ID](der/DER1N_RUN_TEST_CASE_CASE_ID)|[用例(TEST_CASE)](module/TestMgmt/test_case)|1:N关系||
|[DER1N_RUN_TEST_PLAN_PLAN_ID](der/DER1N_RUN_TEST_PLAN_PLAN_ID)|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#run_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持|[附加操作](index/action_logic_index#run_Remove)|||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|添加计划执行用例|add_plan_run|[实体处理逻辑](module/TestMgmt/run/logic/create_plan_run "添加计划执行用例")|默认|不支持||||
|批设置执行结果|batch_save_run_history|[实体处理逻辑](module/TestMgmt/run/logic/batch_save_run_history "批设置执行结果")|默认|不支持||||
|获取实际工时|get_actual_workload|[实体处理逻辑](module/TestMgmt/run/logic/get_actual_workload "获取实际工时")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/TestMgmt/run/logic/nothing "无操作")|默认|不支持||||
|其他实体关联执行用例|other_relation_run|[实体处理逻辑](module/TestMgmt/run/logic/others_relation_run "其他实体关联执行用例")|默认|不支持||||
|规划计划|program_plan|[实体处理逻辑](module/TestMgmt/run/logic/program_plan "规划计划")|默认|不支持||||
|通过发布规划计划|program_plan_by_release|[实体处理逻辑](module/TestMgmt/run/logic/program_plan_by_release "通过发布规划计划")|默认|不支持||||
|通过迭代规划计划|program_plan_by_sprint|[实体处理逻辑](module/TestMgmt/run/logic/program_plan_by_sprint "通过迭代规划计划")|默认|不支持||||
|通过工作项规划计划|program_plan_by_workitem|[实体处理逻辑](module/TestMgmt/run/logic/program_plan_by_workitem "通过工作项规划计划")|默认|不支持||||
|重置为未测|reset_not_test|[实体处理逻辑](module/TestMgmt/run/logic/reset_not_test "重置为未测")|默认|不支持||||
|执行结果获取|run_history_get|[实体处理逻辑](module/TestMgmt/run/logic/run_history_get "执行结果获取")|默认|不支持||||
|执行用例关联分页计数器|run_re_counters|[实体处理逻辑](module/TestMgmt/run/logic/run_re_counters "执行用例关联分页计数器")|默认|不支持||||
|保存执行结果|save_run_history|[实体处理逻辑](module/TestMgmt/run/logic/create_result "记录执行结果")|默认|不支持||||
|设置执行人|set_executor|[实体处理逻辑](module/TestMgmt/run/logic/set_executor "设置执行人")|默认|不支持||||
|当前执行用例详情|this_run_details|[实体处理逻辑](module/TestMgmt/run/logic/this_run_details "获取当前用例详情")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[其他实体关联执行用例](module/TestMgmt/run/logic/others_relation_run)|others_relation_run|无||执行用例实体的关联操作，生成正向，反向关联数据|
|[执行人变更附加逻辑](module/TestMgmt/run/logic/executor_onchange)|executor_onchange|属性逻辑||执行用例执行人变更时触发相应的通知消息|
|[执行用例关联分页计数器](module/TestMgmt/run/logic/run_re_counters)|run_re_counters|无||计算分页下关联事项的条数|
|[执行结果获取](module/TestMgmt/run/logic/run_history_get)|run_history_get|无||执行用例中，获取执行结果数据|
|[批设置执行结果](module/TestMgmt/run/logic/batch_save_run_history)|batch_save_run_history|无||批量设置执行用例的执行结果|
|[无操作](module/TestMgmt/run/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[每日执行用例趋势](module/TestMgmt/run/logic/run_daily_tendencies)|run_daily_tendencies|无||报表每日执行用例趋势数据源|
|[每日测试次数统计](module/TestMgmt/run/logic/run_everyday_test)|run_everyday_test|无||报表每日测试次数统计数据源|
|[测试用例最新执行结果](module/TestMgmt/run/logic/case_latest_executed)|case_latest_executed|无||测试用例最新执行结果|
|[测试计划对比分析](module/TestMgmt/run/logic/plan_compar_ative_analysis)|plan_compar_ative_analysis|无||报表测试计划对比分析数据源|
|[添加计划执行用例](module/TestMgmt/run/logic/create_plan_run)|create_plan_run|无||将测试计划主键置空并生成执行用例|
|[移除用例相关信息](module/TestMgmt/run/logic/delete_run_info)|delete_run_info|无||在执行remove操作之前，移除相关的执行用例信息|
|[获取实际工时](module/TestMgmt/run/logic/get_actual_workload)|get_actual_workload|无||获取用例的实际工时|
|[获取当前用例详情](module/TestMgmt/run/logic/this_run_details)|this_run_details|无||获取当前执行用例详情信息|
|[获取测试库成员](module/TestMgmt/run/logic/get_library_member)|get_library_member|无||获取测试库成员信息，用于判断当前用户权限|
|[规划计划](module/TestMgmt/run/logic/program_plan)|program_plan|无||规划当前计划内用例（添加用例至测试计划内）|
|[记录执行结果](module/TestMgmt/run/logic/create_result)|create_result|无||记录当前执行用例的执行结果|
|[设置执行人](module/TestMgmt/run/logic/set_executor)|set_executor|无||设置当前执行用例执行人|
|[通过发布规划计划](module/TestMgmt/run/logic/program_plan_by_release)|program_plan_by_release|无||通过发布规划计划|
|[通过工作项规划计划](module/TestMgmt/run/logic/program_plan_by_workitem)|program_plan_by_workitem|无||通过工作项规划计划|
|[通过迭代规划计划](module/TestMgmt/run/logic/program_plan_by_sprint)|program_plan_by_sprint|无||通过迭代规划计划|
|[重置为未测](module/TestMgmt/run/logic/reset_not_test)|reset_not_test|无||重置当前执行用例的执行状态为初始未测状态|
|[附加用例步骤](module/TestMgmt/run/logic/add_steps)|add_steps|无||获取用例步骤，并返回|

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|版本数据存储|版本数据存储|[附加数据版本(VERSION_DATA)](module/Base/version_data)||
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||
|审计|数据审计|[活动(ACTIVITY)](module/Base/activity)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/TestMgmt/run/query/Default)|DEFAULT|是|否 |否 ||
|[执行结果分布(ImplementationResults)](module/TestMgmt/run/query/ImplementationResults)|ImplementationResults|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/run/query/View)|VIEW|否|否 |否 ||
|[BI反查(bi_detail)](module/TestMgmt/run/query/bi_detail)|bi_detail|否|否 |否 ||
|[BI查询(bi_search)](module/TestMgmt/run/query/bi_search)|bi_search|否|否 |否 ||
|[评论通知执行人(comment_notify_executor)](module/TestMgmt/run/query/comment_notify_executor)|comment_notify_executor|否|否 |否 ||
|[当前项目用例(cur_library)](module/TestMgmt/run/query/cur_library)|cur_library|否|否 |否 ||
|[每日执行用例趋势(dailyTendencies)](module/TestMgmt/run/query/dailyTendencies)|dailyTendencies|否|否 |否 ||
|[每日测试次数统计(everydayTest)](module/TestMgmt/run/query/everydayTest)|everydayTest|否|否 |否 ||
|[过滤器默认查询(my_filter)](module/TestMgmt/run/query/my_filter)|my_filter|否|否 |否 ||
|[当前模块下用例(normal)](module/TestMgmt/run/query/normal)|normal|否|否 |否 ||
|[测试计划内执行历史(plan_run_history)](module/TestMgmt/run/query/plan_run_history)|plan_run_history|否|否 |否 ||
|[优先级分布(priorityDistributions)](module/TestMgmt/run/query/priorityDistributions)|priorityDistributions|否|否 |否 ||
|[公开(public)](module/TestMgmt/run/query/public)|public|否|否 |否 ||
|[只读用户(reader)](module/TestMgmt/run/query/reader)|reader|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/run/dataset/Default)|DEFAULT|数据查询|是|||
|[执行结果分布(ImplementationResults)](module/TestMgmt/run/dataset/ImplementationResults)|ImplementationResults|数据查询|否|||
|[BI反查(bi_detail)](module/TestMgmt/run/dataset/bi_detail)|bi_detail|数据查询|否|||
|[BI查询(bi_search)](module/TestMgmt/run/dataset/bi_search)|bi_search|数据查询|否|||
|[用例成员分布(casePerson)](module/TestMgmt/run/dataset/casePerson)|casePerson|数据查询|否|||
|[测试用例获取最新执行结果(case_latest_executed)](module/TestMgmt/run/dataset/case_latest_executed)|case_latest_executed|[实体逻辑](module/TestMgmt/run/logic/case_latest_executed)|否|||
|[评论通知执行人(comment_notify_executor)](module/TestMgmt/run/dataset/comment_notify_executor)|comment_notify_executor|数据查询|否|||
|[测试用例计划对比分析(comparativeAnalysis)](module/TestMgmt/run/dataset/comparativeAnalysis)|comparativeAnalysis|[实体逻辑](module/TestMgmt/run/logic/plan_compar_ative_analysis)|否|||
|[每日执行用例趋势(dailyTendencies)](module/TestMgmt/run/dataset/dailyTendencies)|dailyTendencies|[实体逻辑](module/TestMgmt/run/logic/run_daily_tendencies)|否|||
|[每日测试次数统计(everydayTest)](module/TestMgmt/run/dataset/everydayTest)|everydayTest|[实体逻辑](module/TestMgmt/run/logic/run_everyday_test)|否|||
|[过滤器默认查询(my_filter)](module/TestMgmt/run/dataset/my_filter)|my_filter|数据查询|否|||
|[当前模块下用例(normal)](module/TestMgmt/run/dataset/normal)|normal|数据查询|否|||
|[测试计划内执行历史(plan_run_history)](module/TestMgmt/run/dataset/plan_run_history)|plan_run_history|数据查询|否|||
|[优先级分布(priorityDistributions)](module/TestMgmt/run/dataset/priorityDistributions)|priorityDistributions|数据查询|否|||
|[只读用户(reader)](module/TestMgmt/run/dataset/reader)|reader|数据查询|否|||

## 数据权限

##### 全部数据（读写） :id=run-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `UPDATE`
* `CREATE`
* `DELETE`



##### 操作角色(读) :id=run-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/TestMgmt/run#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`



## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[执行用例设置执行人通知](module/TestMgmt/run/notify/executor_notify)|executor_notify|[默认消息队列](index/notify_index)|[执行用例通知模板(设置执行人)](index/notify_index#run_executor)|执行人 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ATTENTIONS_EXISTS__N_USER_ID_EQ|关注|EXISTS||
|N_CASE_ID_EQ|测试用例标识|EQ||
|N_CASE_NAME_EQ|名称|EQ||
|N_CASE_NAME_LIKE|名称|LIKE||
|N_CREATE_MAN_EQ|建立人|EQ||
|N_CREATE_MAN_IN|建立人|IN||
|N_CREATE_MAN_ISNOTNULL|建立人|ISNOTNULL||
|N_CREATE_MAN_ISNULL|建立人|ISNULL||
|N_CREATE_MAN_NOTIN|建立人|NOTIN||
|N_CREATE_TIME_GTANDEQ|建立时间|GTANDEQ||
|N_CREATE_TIME_LTANDEQ|建立时间|LTANDEQ||
|N_EXECUTED_AT_EQ|执行时间|EQ||
|N_EXECUTED_AT_GTANDEQ|执行时间|GTANDEQ||
|N_EXECUTED_AT_LTANDEQ|执行时间|LTANDEQ||
|N_EXECUTOR_ID_EQ|执行人标识|EQ||
|N_EXECUTOR_ID_IN|执行人标识|IN||
|N_EXECUTOR_ID_ISNOTNULL|执行人标识|ISNOTNULL||
|N_EXECUTOR_ID_ISNULL|执行人标识|ISNULL||
|N_EXECUTOR_ID_NOTEQ|执行人标识|NOTEQ||
|N_EXECUTOR_ID_NOTIN|执行人标识|NOTIN||
|N_EXECUTOR_NAME_EQ|执行人|EQ||
|N_ID_EQ|标识|EQ||
|N_LIBRARY_ID_EQ|测试库标识|EQ||
|N_LIBRARY_NAME_EQ|所属测试库|EQ||
|N_LIBRARY_NAME_LIKE|所属测试库|LIKE||
|N_MAINTENANCE_NAME_EQ|维护人|EQ||
|N_MAINTENANCE_NAME_ISNOTNULL|维护人|ISNOTNULL||
|N_MAINTENANCE_NAME_ISNULL|维护人|ISNULL||
|N_MAINTENANCE_NAME_NOTEQ|维护人|NOTEQ||
|N_NAME_LIKE|名称|LIKE||
|N_PLAN_ID_EQ|测试计划标识|EQ||
|N_PLAN_NAME_EQ|测试计划|EQ||
|N_PLAN_NAME_LIKE|测试计划|LIKE||
|N_PRIORITY_EQ|优先级|EQ||
|N_RECENT_CREATE_DAYS_LTANDEQ|最近创建日期|LTANDEQ||
|N_SHOW_IDENTIFIER_EQ|编号|EQ||
|N_SHOW_IDENTIFIER_LIKE|编号|LIKE||
|N_STATUS_EQ|执行结果|EQ||
|N_STATUS_ISNOTNULL|执行结果|ISNOTNULL||
|N_SUITE_ID_EQ|用例模块标识|EQ||
|N_TITLE_EQ|标题|EQ||
|N_TITLE_LIKE|标题|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 全部通过 | all_pass | 全部通过 |无数据|用户自定义||
| 选择用例（发布） | program_plan_by_release | 选择发布 |无数据|<details><summary>后台调用</summary>[program_plan_by_release](#行为)||
| 移出 | delete_run | 移出 |多项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 移出（移动端） | mob_delete_run | 移出(移动端) |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| BI编辑 | bi_report_view | 编辑 |无数据|用户自定义||
| 打开选项操作视图（门户）（测试） | open_optview_portlet | 编辑 |无数据|<details><summary>打开视图或向导（模态）</summary>[编辑部件](app/view/run_daily_test_option_view)</details>||
| 设置执行人 | open_setting_actual_executor | 设置执行人 |多项数据（主键）|<details><summary>后台调用</summary>[set_executor](#行为)||
| 重置为未测 | reset_not_test | 重置为未测 |多项数据（主键）|<details><summary>后台调用</summary>[reset_not_test](#行为)||
| 打开选项操作视图（门户）（执行结果） | open_optview_Implementationresults | 编辑 |无数据|<details><summary>打开视图或向导（模态）</summary>[编辑部件](app/view/run_implementationresults_option_view)</details>||
| BI全屏 | bi_full_screen | 全屏 |无数据|用户自定义||
| BI刷新 | bi_refresh | 刷新 |无数据|用户自定义||
| 查看工时明细（移动端） | mob_check_workload_detail | 查看工时明细 |无数据|<details><summary>打开视图或向导（模态）</summary>[工时记录](app/view/workload_mob_detail_view)</details>||
| 打开关联用例 | open_re_run | 打开关联用例 |无数据|<details><summary>打开视图或向导（模态）</summary>[用例](app/view/test_case_re_run_main_view)</details>||
| 移出（主视图） | delete_run_main | 移出 |多项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 打开选项操作视图（门户）（每日执行用例趋势） | open_optview_portlet_daily_tendencies | 编辑 |无数据|<details><summary>打开视图或向导（模态）</summary>[编辑部件](app/view/run_daily_tendencies_option_view)</details>|打开选项操作视图（门户）（每日执行用例趋势）|
| 选择用例 | choose_test_case | 选择用例 |无数据|<details><summary>后台调用</summary>[program_plan](#行为)||
| 选择用例（迭代） | sprint_choose_case | 选择迭代 |无数据|<details><summary>后台调用</summary>[program_plan_by_sprint](#行为)||
| 打开选项操作视图（门户）（成员执行） | open_optview_members_distribution | 编辑 |无数据|<details><summary>打开视图或向导（模态）</summary>[编辑部件](app/view/run_members_distribution_option_view)</details>||
| 记录执行结果 | save_run_history | 保存执行结果 |单项数据|<details><summary>后台调用</summary>[save_run_history](#行为)||
| 设置执行结果 | update_run_status | 设置执行结果 |多项数据（主键）|<details><summary>后台调用</summary>[batch_save_run_history](#行为)||
| 执行用例关联缺陷（移动端） | mob_add_bug | 执行用例关联缺陷 |无数据|<details><summary>后台调用</summary>[other_relation_run](#行为)||
| 记录执行结果并开启下一条 | save_run_history_and_next | 保存执行结果 |单项数据|<details><summary>后台调用</summary>[save_run_history](#行为)||
| 选择用例（工作项） | work_item_choose_case | 选择工作项 |无数据|<details><summary>后台调用</summary>[program_plan_by_workitem](#行为)||
| 查看工时明细 | check_workload_detail | 查看工时明细 |无数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[刷新用例表格](module/TestMgmt/run/uilogic/refresh_run_grid)|refresh_run_grid|内置脚本，刷新用例表格|
|[填充并刷新门户数据（测试）](module/TestMgmt/run/uilogic/fill_and_refresh_portlet)|fill_and_refresh_portlet|门户界面行为打开选项操作视图后，计算需要填充到视图上的数据|
|[打开关联用例](module/TestMgmt/run/uilogic/open_re_run)|open_re_run|调用界面行为，打开关联用例|
|[查看工时明细](module/TestMgmt/run/uilogic/check_workload_detail)|check_workload_detail|按钮触发，通过脚本切换显示组件|
|[获取实际工时](module/TestMgmt/run/uilogic/get_actual_workload)|get_actual_workload|获取工时信息，并计算实际工时|
|[通知刷新（移动端）](module/TestMgmt/run/uilogic/send_refresh)|send_refresh||
|[门户全屏](module/TestMgmt/run/uilogic/full_screen)|full_screen|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户刷新](module/TestMgmt/run/uilogic/portlet_refresh)|portlet_refresh|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户编辑](module/TestMgmt/run/uilogic/edit_to_design)|edit_to_design|所有门户部件配置该逻辑触发跳转至编辑页|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/TestMgmt/run?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run?id=界面逻辑`">
  界面逻辑
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'major',
show_field_group:'field_group_bi_search_group',

      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>