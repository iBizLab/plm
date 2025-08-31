# 用例(test_case)  <!-- {docsify-ignore-all} -->


具体描述测试操作步骤、预期结果的文档。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|实际工时|ACTUAL_WORKLOAD|数值||是||
|附件|ATTACHMENTS|一对多关系数据集合|1048576|是||
|关注|ATTENTIONS|一对多关系数据集合|1048576|是||
|关注人|ATTENTIONS_IMP|文本，可指定长度|100|是||
|关注数|ATTENTION_COUNT|文本，可指定长度|200|是||
|选择版本标识|CHOOSE_VERSION_ID|文本，可指定长度|100|是||
|选择版本名称|CHOOSE_VERSION_NAME|文本，可指定长度|100|是||
|评论数|COMMENT_COUNT|文本，可指定长度|200|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|当前版本标识|CUR_VERSION_ID|文本，可指定长度|100|是||
|当前版本名称|CUR_VERSION_NAME|文本，可指定长度|100|是||
|描述|DESCRIPTION|长文本，没有长度限制|1048576|是||
|预估工时|ESTIMATED_WORKLOAD|数值||是||
|执行时间|EXECUTED_AT|日期时间型||是||
|执行人|EXECUTOR_NAME|文本，可指定长度|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_test_case_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|是否已删除|IS_DELETED|是否逻辑||是||
|最新执行结果|LATEST_EXECUTED|一对多动态对象|1048576|是||
|重要程度|LEVEL|单项选择(文本值)|60|是||
|测试库标识|LIBRARY_IDENTIFIER|外键值附加数据|15|是||
|测试库是否归档|LIBRARY_IS_ARCHIVED|外键值附加数据||是||
|测试库是否删除|LIBRARY_IS_DELETED|外键值附加数据||是||
|维护人|MAINTENANCE_ID|外键值|100|是||
|维护人|MAINTENANCE_NAME|外键值文本|100|是||
|名称|NAME|文本，可指定长度|200|是||
|前置条件|PRECONDITION|长文本，没有长度限制|1048576|是||
|最近创建日期|RECENT_CREATE_DAYS|整型||是||
|剩余工时|REMAINING_WORKLOAD|数值||是||
|评审结果|REVIEW_RESULT_STATE|[单项选择(文本值)](index/dictionary_index#review_result "评审结果")|60|是||
|执行结果|RUN_STATUS|[单项选择(文本值)](index/dictionary_index#run_status "执行用例状态")|200|是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|状态|STATE|单项选择(文本值)|60|否||
|步骤|STEPS|一对多关系数据集合|1048576|是||
|步骤|STEPS_IMP|文本，可指定长度|100|是||
|步骤描述|STEP_DESC_IMP|文本，可指定长度|100|是||
|预期结果|STEP_VALUE_IMP|文本，可指定长度|100|是||
|模块路径|SUITES|外键值附加数据|500|是||
|用例模块标识|SUITE_ID|外键值|100|是||
|所属模块|SUITE_NAME|外键值文本|200|是||
|目标测试库|TARGET_LIBRARY_ID|文本，可指定长度|100|是||
|目标模板|TARGET_TEMPLATE|文本，可指定长度|100|是||
|测试库|TEST_LIBRARY_ID|外键值|100|是||
|所属测试库|TEST_LIBRARY_NAME|外键值文本|200|是||
|测试计划名称|TEST_PLAN_NAME|文本，可指定长度|100|是||
|测试类型|TEST_TYPE|单项选择(文本值)|60|是||
|标题|TITLE|文本，可指定长度|500|否||
|用例类型|TYPE|单项选择(文本值)|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|工时进度|WORKLOAD_SCHEDULE|数值||是||


###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="高级搜索" name="field_group_advanced_search">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|测试库|TEST_LIBRARY_ID|外键值|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|所属测试库|TEST_LIBRARY_NAME|外键值文本|200|是||
|标题|TITLE|文本，可指定长度|500|否||
|状态|STATE|单项选择(文本值)|60|否||

</el-tab-pane>
<el-tab-pane label="BI查询属性组" name="field_group_bi_search_group">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|执行人|EXECUTOR_NAME|文本，可指定长度|100|是||
|标题|TITLE|文本，可指定长度|500|否||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|目标测试库|TARGET_LIBRARY_ID|文本，可指定长度|100|是||
|目标模板|TARGET_TEMPLATE|文本，可指定长度|100|是||
|实际工时|ACTUAL_WORKLOAD|数值||是||
|预估工时|ESTIMATED_WORKLOAD|数值||是||
|剩余工时|REMAINING_WORKLOAD|数值||是||
|工时进度|WORKLOAD_SCHEDULE|数值||是||
|测试库标识|LIBRARY_IDENTIFIER|外键值附加数据|15|是||
|所属测试库|TEST_LIBRARY_NAME|外键值文本|200|是||
|维护人|MAINTENANCE_NAME|外键值文本|100|是||
|维护人|MAINTENANCE_ID|外键值|100|是||
|测试库|TEST_LIBRARY_ID|外键值|100|是||
|用例模块标识|SUITE_ID|外键值|100|是||
|执行结果|RUN_STATUS|[单项选择(文本值)](index/dictionary_index#run_status "执行用例状态")|200|是||
|用例类型|TYPE|单项选择(文本值)|60|是||
|重要程度|LEVEL|单项选择(文本值)|60|是||
|测试类型|TEST_TYPE|单项选择(文本值)|60|是||
|状态|STATE|单项选择(文本值)|60|否||
|评审结果|REVIEW_RESULT_STATE|[单项选择(文本值)](index/dictionary_index#review_result "评审结果")|60|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|最新执行结果|LATEST_EXECUTED|一对多动态对象|1048576|是||
|是否已删除|IS_DELETED|是否逻辑||是||
|建立时间|CREATE_TIME|日期时间型||否||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|测试库是否删除|LIBRARY_IS_DELETED|外键值附加数据||是||

</el-tab-pane>
<el-tab-pane label="维护人" name="field_group_maintenance">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|维护人|MAINTENANCE_ID|外键值|100|是||
|维护人|MAINTENANCE_NAME|外键值文本|100|是||

</el-tab-pane>
<el-tab-pane label="工时日历" name="field_group_workload_calendar">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|测试库|TEST_LIBRARY_ID|外键值|100|是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|标题|TITLE|文本，可指定长度|500|否||
|实际工时|ACTUAL_WORKLOAD|数值||是||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_CASE_HISTORY_TEST_CASE_CASE_ID](der/DER1N_CASE_HISTORY_TEST_CASE_CASE_ID)|[用例执行历史(CASE_HISTORY)](module/TestMgmt/case_history)|1:N关系||
|[DER1N_RUN_TEST_CASE_CASE_ID](der/DER1N_RUN_TEST_CASE_CASE_ID)|[执行用例(RUN)](module/TestMgmt/run)|1:N关系||
|[DER1N_STEP_TEST_CASE_CASE_ID](der/DER1N_STEP_TEST_CASE_CASE_ID)|[用例步骤(STEP)](module/TestMgmt/step)|1:N关系||
|[DERCUSTOM_ATTENTION_TEST_CASE_OWNER_ID](der/DERCUSTOM_ATTENTION_TEST_CASE_OWNER_ID)|[关注(ATTENTION)](module/Base/attention)|自定义关系||
|[DERCUSTOM_COMMENT_TEST_CASE_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_TEST_CASE_PRINCIPAL_ID)|[评论(COMMENT)](module/Base/comment)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_TEST_CASE](der/DERCUSTOM_RELATION_TARGET_TEST_CASE)|[关联(RELATION)](module/Base/relation)|自定义关系||
|[DERCUSTOM_RELATION_TEST_CASE](der/DERCUSTOM_RELATION_TEST_CASE)|[关联(RELATION)](module/Base/relation)|自定义关系||
|[DERCUSTOM_TEST_CASE_ATTACHMENT](der/DERCUSTOM_TEST_CASE_ATTACHMENT)|[附件(ATTACHMENT)](module/Base/attachment)|自定义关系||
|[DERCUSTOM_TEST_CASE_REVIEW_CONTENT](der/DERCUSTOM_TEST_CASE_REVIEW_CONTENT)|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)|自定义关系||
|[DERCUSTOM_TEST_CASE_SEARCH_ATTACHMENT](der/DERCUSTOM_TEST_CASE_SEARCH_ATTACHMENT)|[附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment)|自定义关系||
|[DERCUSTOM_TEST_CASE_SEARCH_COMMENT](der/DERCUSTOM_TEST_CASE_SEARCH_COMMENT)|[评论搜索(SEARCH_COMMENT)](module/Base/search_comment)|自定义关系||
|[DERCUSTOM_TEST_CASE_WORKLOAD](der/DERCUSTOM_TEST_CASE_WORKLOAD)|[工时(WORKLOAD)](module/Base/workload)|自定义关系||
|[DERCUSTOM_VERSION_TEST_CASE](der/DERCUSTOM_VERSION_TEST_CASE)|[版本(VERSION)](module/Base/version)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_TEST_CASE_LIBRARY_TEST_LIBRARY_ID](der/DER1N_TEST_CASE_LIBRARY_TEST_LIBRARY_ID)|[测试库(LIBRARY)](module/TestMgmt/library)|1:N关系||
|[DER1N_TEST_CASE_TEST_SUITE_SUITE_ID](der/DER1N_TEST_CASE_TEST_SUITE_SUITE_ID)|[用例模块(TEST_SUITE)](module/TestMgmt/test_suite)|1:N关系||
|[DER1N_TEST_CASE_USER_MAINTENANCE_ID](der/DER1N_TEST_CASE_USER_MAINTENANCE_ID)|[企业用户(USER)](module/Base/user)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#test_case_Create)|||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#test_case_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#test_case_Update)|||
|移入计划|case_move_plan|[实体处理逻辑](module/TestMgmt/test_case/logic/case_move_plan "移入计划")|默认|不支持||||
|选择用例模板|choose_case_template|[实体处理逻辑](module/TestMgmt/test_case/logic/choose_case_template "选择用例模板")|默认|不支持||||
|复制用例|copy_case|[实体处理逻辑](module/TestMgmt/test_case/logic/copy_test_case "复制用例")|默认|不支持||||
|删除|delete|[实体处理逻辑](module/TestMgmt/test_case/logic/delete "删除")|默认|不支持||||
|填充BI报表默认值|fill_bi_form_default|[实体处理逻辑](module/TestMgmt/test_case/logic/fill_bi_form_default "填充BI报表默认值")|默认|不支持||||
|完成关注|finish_add_attention|[实体处理逻辑](module/TestMgmt/test_case/logic/finish_add_attention "完成关注")|默认|不支持||||
|获取关注人|get_attention|内置方法|默认|不支持||||
|获取基线名称|get_baseline_name|[实体处理逻辑](module/TestMgmt/test_case/logic/get_baseline_name "获取基线名称")|默认|不支持||||
|移动用例|move_case|[实体处理逻辑](module/TestMgmt/test_case/logic/move_test_case "移动用例")|默认|不支持||||
|获取最近执行|newest_run|[实体处理逻辑](module/TestMgmt/test_case/logic/newest_run "获取最近执行")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/TestMgmt/test_case/logic/nothing "无操作")|默认|不支持||||
|其他实体关联用例|others_relation_case|[实体处理逻辑](module/TestMgmt/test_case/logic/others_relation_test_case "其他实体关联用例")|默认|不支持||||
|规划用例|program_test_case|[实体处理逻辑](module/TestMgmt/test_case/logic/program_test_case "规划用例")|默认|不支持||||
|恢复|recover|[实体处理逻辑](module/TestMgmt/test_case/logic/recover "恢复")|默认|不支持||||
|设置重要程度|set_level|[实体处理逻辑](module/TestMgmt/test_case/logic/set_level "设置重要程度")|默认|不支持||||
|设置维护人|set_maintenance|[实体处理逻辑](module/TestMgmt/test_case/logic/set_maintenance "设置维护人")|默认|不支持||||
|设置评审状态|set_state|[实体处理逻辑](module/TestMgmt/test_case/logic/set_state "设置评审状态")|默认|不支持||||
|测试用例关联分页计数器|test_case_re_counters|[实体处理逻辑](module/TestMgmt/test_case/logic/test_case_re_counters "测试用例关联分页计数器")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[其他实体关联用例](module/TestMgmt/test_case/logic/others_relation_test_case)|others_relation_test_case|无||测试用例实体的关联操作，生成正向，反向关联数据|
|[删除](module/TestMgmt/test_case/logic/delete)|delete|无||测试用例数据的逻辑删除，修改产品的是否删除属性值|
|[基线规划用例数据查询](module/TestMgmt/test_case/logic/baseline_plan_case)|baseline_plan_case|无||基线规划用例时，填充用例当前版本名称|
|[填充BI报表默认值](module/TestMgmt/test_case/logic/fill_bi_form_default)|fill_bi_form_default|无||填充BI报表默认值|
|[填充最近执行](module/TestMgmt/test_case/logic/fill_latest_executed)|fill_latest_executed|无||填充最近执行|
|[复制用例](module/TestMgmt/test_case/logic/copy_test_case)|copy_test_case|无||复制测试用例|
|[完成关注](module/TestMgmt/test_case/logic/finish_add_attention)|finish_add_attention|无|||
|[恢复](module/TestMgmt/test_case/logic/recover)|recover|无||恢复已删除状态测试用例数据，修改测试用例的是否删除属性值，并恢复访问记录|
|[无操作](module/TestMgmt/test_case/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[是否删除变更附加逻辑](module/TestMgmt/test_case/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||测试用例删除或恢复时触发相应的通知消息|
|[检查更新数据](module/TestMgmt/test_case/logic/check_refresh_data)|check_refresh_data|无|||
|[测试用例](module/TestMgmt/test_case/logic/common)|common|无|||
|[测试用例关联分页计数器](module/TestMgmt/test_case/logic/test_case_re_counters)|test_case_re_counters|无||计算分页下关联事项的条数|
|[测试用例活动情况](module/TestMgmt/test_case/logic/test_case_maneuver_context)|test_case_maneuver_context|无||报表测试用例活动情况数据源|
|[测试用例规划分析](module/TestMgmt/test_case/logic/program_analyze)|program_analyze|无||报表测试用例规划分析数据源|
|[测试计划对比分析](module/TestMgmt/test_case/logic/plan_compar_ative_analysis)|plan_compar_ative_analysis|无||报表测试计划对比分析数据源|
|[生成最近访问](module/TestMgmt/test_case/logic/create_recent)|create_recent|无||在用户对测试用例数据进行了get或update操作时生成相应的访问记录|
|[移入计划](module/TestMgmt/test_case/logic/case_move_plan)|case_move_plan|无||将选中测试用例移入执行计划（在指定的执行用例内生成执行用例）|
|[移动用例](module/TestMgmt/test_case/logic/move_test_case)|move_test_case|无||移动用例至其他位置（修改用例的所属测试库，重新生成编号）|
|[维护人变更附加逻辑](module/TestMgmt/test_case/logic/maintenance_onchange)|maintenance_onchange|属性逻辑||测试用例维护人变更时触发相应的通知消息|
|[获取变更类型与变更版本](module/TestMgmt/test_case/logic/set_change_type)|set_change_type|无||获取测试用例变更类型与变更版本|
|[获取基线名称](module/TestMgmt/test_case/logic/get_baseline_name)|get_baseline_name|无||用例主视图获取所属基线|
|[获取最近执行](module/TestMgmt/test_case/logic/newest_run)|newest_run|无||获取当前测试用例的最近执行记录|
|[获取测试库成员](module/TestMgmt/test_case/logic/get_library_member)|get_library_member|无||获取测试库成员信息，用于判断当前用户权限|
|[规划用例](module/TestMgmt/test_case/logic/program_test_case)|program_test_case|无||规划用例|
|[规划计划](module/TestMgmt/test_case/logic/program_plan)|program_plan|无||将测试用例规划进测试计划内，生成执行用例|
|[设置维护人](module/TestMgmt/test_case/logic/set_maintenance)|set_maintenance|无||设置当前测试用例维护人|
|[设置评审状态](module/TestMgmt/test_case/logic/set_state)|set_state|无||设置测试用例的评审状态属性|
|[设置重要程度](module/TestMgmt/test_case/logic/set_level)|set_level|无||设置测试用例的重要程度属性|
|[选择用例模板](module/TestMgmt/test_case/logic/choose_case_template)|choose_case_template|无||获取选中模板并返回详情|

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|存储扩展|动态存储|[扩展存储(EXTEND_STORAGE)](module/Base/extend_storage)||
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||
|version|版本控制|[版本(VERSION)](module/Base/version)||
|审计|数据审计|[活动(ACTIVITY)](module/Base/activity)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/TestMgmt/test_case/query/Default)|DEFAULT|是|否 |否 ||
|[执行结果分布(ImplementationResults)](module/TestMgmt/test_case/query/ImplementationResults)|ImplementationResults|否|否 |否 ||
|[用例维护人分布(PersonDistributions)](module/TestMgmt/test_case/query/PersonDistributions)|PersonDistributions|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/test_case/query/View)|VIEW|否|否 |否 ||
|[高级搜索(advanced_search)](module/TestMgmt/test_case/query/advanced_search)|advanced_search|否|否 |否 ||
|[评审结果分布(assessmentResult)](module/TestMgmt/test_case/query/assessmentResult)|assessmentResult|否|否 |否 ||
|[基线选择用例(baseline_choose_case)](module/TestMgmt/test_case/query/baseline_choose_case)|baseline_choose_case|否|否 |否 |基线选择用例|
|[基线用例(baseline_test_case)](module/TestMgmt/test_case/query/baseline_test_case)|baseline_test_case|否|否 |否 ||
|[BI反查(bi_detail)](module/TestMgmt/test_case/query/bi_detail)|bi_detail|否|否 |否 ||
|[BI查询(bi_search)](module/TestMgmt/test_case/query/bi_search)|bi_search|否|否 |否 ||
|[用例成员分布(casePerson)](module/TestMgmt/test_case/query/casePerson)|casePerson|否|否 |否 ||
|[用例类型分布(caseType)](module/TestMgmt/test_case/query/caseType)|caseType|否|否 |否 ||
|[评论通知维护人(comment_notify_maintenance)](module/TestMgmt/test_case/query/comment_notify_maintenance)|comment_notify_maintenance|否|否 |否 ||
|[每日执行用例趋势(dailyTendencies)](module/TestMgmt/test_case/query/dailyTendencies)|dailyTendencies|否|否 |否 ||
|[测试用例重要程度分布(degreeImportance)](module/TestMgmt/test_case/query/degreeImportance)|degreeImportance|否|否 |否 ||
|[已删除(deleted)](module/TestMgmt/test_case/query/deleted)|deleted|否|否 |否 ||
|[每日测试次数统计(everydayTest)](module/TestMgmt/test_case/query/everydayTest)|everydayTest|否|否 |否 ||
|[需求关联测试用例(idea_relation_test_case)](module/TestMgmt/test_case/query/idea_relation_test_case)|idea_relation_test_case|否|否 |否 ||
|[关联测试用例（多需求）(ideas_relation_test_case)](module/TestMgmt/test_case/query/ideas_relation_test_case)|ideas_relation_test_case|否|否 |是 ||
|[我负责的测试用例(my_assign)](module/TestMgmt/test_case/query/my_assign)|my_assign|否|否 |否 ||
|[我关注的测试用例(my_attention)](module/TestMgmt/test_case/query/my_attention)|my_attention|否|否 |否 ||
|[我创建的测试用例(my_created)](module/TestMgmt/test_case/query/my_created)|my_created|否|否 |否 ||
|[过滤器默认查询(my_filter)](module/TestMgmt/test_case/query/my_filter)|my_filter|否|否 |否 ||
|[我的事项测试用例(my_summary_case)](module/TestMgmt/test_case/query/my_summary_case)|my_summary_case|否|否 |否 ||
|[正常状态(normal)](module/TestMgmt/test_case/query/normal)|normal|否|否 |否 ||
|[无模块用例(nosuite_test_case)](module/TestMgmt/test_case/query/nosuite_test_case)|nosuite_test_case|否|否 |否 ||
|[未添加过的用例(not_add_case)](module/TestMgmt/test_case/query/not_add_case)|not_add_case|否|否 |否 ||
|[未关联的用例(not_exsists_relation)](module/TestMgmt/test_case/query/not_exsists_relation)|not_exsists_relation|否|否 |否 ||
|[用例通知维护人(notify_assignee)](module/TestMgmt/test_case/query/notify_assignee)|notify_assignee|否|否 |否 ||
|[优先级分布(priorityDistributions)](module/TestMgmt/test_case/query/priorityDistributions)|priorityDistributions|否|否 |否 ||
|[测试用例规划分析(program_analyze)](module/TestMgmt/test_case/query/program_analyze)|program_analyze|否|否 |否 ||
|[公开(public)](module/TestMgmt/test_case/query/public)|public|否|否 |否 ||
|[只读用户(reader)](module/TestMgmt/test_case/query/reader)|reader|否|否 |否 ||
|[最近浏览(recent_test_case)](module/TestMgmt/test_case/query/recent_test_case)|recent_test_case|否|否 |否 ||
|[关联测试用例(relation_test_case)](module/TestMgmt/test_case/query/relation_test_case)|relation_test_case|否|否 |否 ||
|[当前模块下用例(suites_test_case)](module/TestMgmt/test_case/query/suites_test_case)|suites_test_case|否|否 |否 ||
|[测试用例活动情况(test_case_maneuver_context)](module/TestMgmt/test_case/query/test_case_maneuver_context)|test_case_maneuver_context|否|否 |否 ||
|[测试计划用例(test_plan_test_case)](module/TestMgmt/test_case/query/test_plan_test_case)|test_plan_test_case|否|否 |否 ||
|[工作项关联测试用例(work_item_relation_test_case)](module/TestMgmt/test_case/query/work_item_relation_test_case)|work_item_relation_test_case|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/test_case/dataset/Default)|DEFAULT|数据查询|是|||
|[执行结果分布(ImplementationResults)](module/TestMgmt/test_case/dataset/ImplementationResults)|ImplementationResults|数据查询|否|||
|[用例维护人分布(PersonDistributions)](module/TestMgmt/test_case/dataset/PersonDistributions)|PersonDistributions|数据查询|否|||
|[高级搜索(advanced_search)](module/TestMgmt/test_case/dataset/advanced_search)|advanced_search|数据查询|否|||
|[评审结果分布(assessmentResult)](module/TestMgmt/test_case/dataset/assessmentResult)|assessmentResult|数据查询|否|||
|[基线选择用例(baseline_choose_case)](module/TestMgmt/test_case/dataset/baseline_choose_case)|baseline_choose_case|数据查询|否||基线选择用例|
|[基线规划用例(baseline_plan_case)](module/TestMgmt/test_case/dataset/baseline_plan_case)|baseline_plan_case|[实体逻辑](module/TestMgmt/test_case/logic/baseline_plan_case)|否|||
|[基线用例(baseline_test_case)](module/TestMgmt/test_case/dataset/baseline_test_case)|baseline_test_case|数据查询|否|||
|[BI反查(bi_detail)](module/TestMgmt/test_case/dataset/bi_detail)|bi_detail|数据查询|否|||
|[BI查询(bi_search)](module/TestMgmt/test_case/dataset/bi_search)|bi_search|数据查询|否|||
|[用例成员分布(casePerson)](module/TestMgmt/test_case/dataset/casePerson)|casePerson|数据查询|否|||
|[用例类型分布(caseType)](module/TestMgmt/test_case/dataset/caseType)|caseType|数据查询|否|||
|[检查更新数据(check_refresh_data)](module/TestMgmt/test_case/dataset/check_refresh_data)|check_refresh_data|[实体逻辑](module/TestMgmt/test_case/logic/check_refresh_data)|否|||
|[评论通知维护人(comment_notify_maintenance)](module/TestMgmt/test_case/dataset/comment_notify_maintenance)|comment_notify_maintenance|数据查询|否|||
|[测试用例(common)](module/TestMgmt/test_case/dataset/common)|common|[实体逻辑](module/TestMgmt/test_case/logic/common)|否|||
|[每日执行用例趋势(dailyTendencies)](module/TestMgmt/test_case/dataset/dailyTendencies)|dailyTendencies|数据查询|否|||
|[测试用例重要程度分布(degreeImportance)](module/TestMgmt/test_case/dataset/degreeImportance)|degreeImportance|数据查询|否|||
|[已删除(deleted)](module/TestMgmt/test_case/dataset/deleted)|deleted|数据查询|否|||
|[每日测试次数统计(everydayTest)](module/TestMgmt/test_case/dataset/everydayTest)|everydayTest|数据查询|否|||
|[需求关联测试用例(idea_relation_test_case)](module/TestMgmt/test_case/dataset/idea_relation_test_case)|idea_relation_test_case|数据查询|否|||
|[关联测试用例（多需求）(ideas_relation_test_case)](module/TestMgmt/test_case/dataset/ideas_relation_test_case)|ideas_relation_test_case|数据查询|否|||
|[我负责的测试用例(my_assign)](module/TestMgmt/test_case/dataset/my_assign)|my_assign|数据查询|否|||
|[我负责的用例(my_assignee_count_test_case)](module/TestMgmt/test_case/dataset/my_assignee_count_test_case)|my_assignee_count_test_case|数据查询|否|||
|[我关注的测试用例(my_attention)](module/TestMgmt/test_case/dataset/my_attention)|my_attention|数据查询|否|||
|[我创建的测试用例(my_created)](module/TestMgmt/test_case/dataset/my_created)|my_created|数据查询|否|||
|[过滤器默认查询(my_filter)](module/TestMgmt/test_case/dataset/my_filter)|my_filter|数据查询|否|||
|[我的事项测试用例(my_summary_case)](module/TestMgmt/test_case/dataset/my_summary_case)|my_summary_case|数据查询|否|||
|[正常状态(normal)](module/TestMgmt/test_case/dataset/normal)|normal|数据查询|否|||
|[无模块用例(nosuite_test_case)](module/TestMgmt/test_case/dataset/nosuite_test_case)|nosuite_test_case|数据查询|否|||
|[未添加过的用例(not_add_case)](module/TestMgmt/test_case/dataset/not_add_case)|not_add_case|数据查询|否|||
|[未关联的用例(not_exsists_relation)](module/TestMgmt/test_case/dataset/not_exsists_relation)|not_exsists_relation|数据查询|否|||
|[用例通知维护人(notify_assignee)](module/TestMgmt/test_case/dataset/notify_assignee)|notify_assignee|数据查询|否|||
|[优先级分布(priorityDistributions)](module/TestMgmt/test_case/dataset/priorityDistributions)|priorityDistributions|数据查询|否|||
|[测试用例规划分析(program_analyze)](module/TestMgmt/test_case/dataset/program_analyze)|program_analyze|[实体逻辑](module/TestMgmt/test_case/logic/program_analyze)|否|||
|[只读用户(reader)](module/TestMgmt/test_case/dataset/reader)|reader|数据查询|否|||
|[最近浏览(recent_test_case)](module/TestMgmt/test_case/dataset/recent_test_case)|recent_test_case|数据查询|否|||
|[关联测试用例(relation_test_case)](module/TestMgmt/test_case/dataset/relation_test_case)|relation_test_case|数据查询|否|||
|[评审数据(review_data)](module/TestMgmt/test_case/dataset/review_data)|review_data|[实体逻辑](module/TestMgmt/test_case/logic/set_change_type)|否|||
|[当前模块下用例(this_suite_test_case)](module/TestMgmt/test_case/dataset/suites_test_case)|this_suite_test_case|数据查询|否|||
|[测试用例活动情况(test_case_maneuver_context)](module/TestMgmt/test_case/dataset/test_case_maneuver_context)|test_case_maneuver_context|[实体逻辑](module/TestMgmt/test_case/logic/test_case_maneuver_context)|否|||
|[测试计划用例(test_plan_test_case)](module/TestMgmt/test_case/dataset/test_plan_test_case)|test_plan_test_case|数据查询|否|||
|[工作项关联测试用例(work_item_relation_test_case)](module/TestMgmt/test_case/dataset/work_item_relation_test_case)|work_item_relation_test_case|数据查询|否|||

## 数据权限

##### 全部数据（读写） :id=test_case-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `DELETE(测试库(SUBDATA))`
* `UPDATE`
* `READ`



##### 操作角色(读) :id=test_case-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/TestMgmt/test_case#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 操作用户(写) :id=test_case-USER_W

<p class="panel-title"><b>数据范围</b></p>

* `无`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`



## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[测试用例取消分配维护人通知](module/TestMgmt/test_case/notify/maintainer_cancel_notify)|maintainer_cancel_notify|[默认消息队列](index/notify_index)|[测试用例通知模板(取消分配维护人)](index/notify_index#test_case_maintainer_cancel)|维护人 ||
|[测试用例分配维护人通知](module/TestMgmt/test_case/notify/maintainer_notify)|maintainer_notify|[默认消息队列](index/notify_index)|[测试用例通知模板(分配维护人)](index/notify_index#test_case_maintainer)|维护人 ||
|[测试用例维护人变更通知](module/TestMgmt/test_case/notify/maintainer_onchange_notify)|maintainer_onchange_notify|[默认消息队列](index/notify_index)|[测试用例通知模板(维护人变更)](index/notify_index#test_case_maintainer_onchange)|负责人 关注人员 ||
|[测试用例删除/恢复通知](module/TestMgmt/test_case/notify/remove_notify)|remove_notify|[默认消息队列](index/notify_index)|[测试用例通知模板(删除/恢复测试用例)](index/notify_index#test_case_remove_or_recover)|关注人员 维护人 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ATTENTIONS_EXISTS__N_USER_ID_EQ|关注|EXISTS||
|N_CREATE_MAN_EQ|建立人|EQ||
|N_CREATE_TIME_EQ|建立时间|EQ||
|N_CREATE_TIME_GTANDEQ|建立时间|GTANDEQ||
|N_CREATE_TIME_LTANDEQ|建立时间|LTANDEQ||
|N_DESCRIPTION_LIKE|描述|LIKE||
|N_EXECUTOR_NAME_EQ|执行人|EQ||
|N_ID_IN|标识|IN||
|N_ID_NOTEQ|标识|NOTEQ||
|N_ID_EQ|标识|EQ||
|N_IDENTIFIER_EQ|编号|EQ||
|N_IDENTIFIER_ISNULL|编号|ISNULL||
|N_IDENTIFIER_LIKE|编号|LIKE||
|N_IS_ARCHIVED_EQ|是否已归档|EQ||
|N_IS_DELETED_EQ|是否已删除|EQ||
|N_LEVEL_EQ|重要程度|EQ||
|N_MAINTENANCE_ID_EQ|维护人|EQ||
|N_MAINTENANCE_ID_IN|维护人|IN||
|N_MAINTENANCE_ID_NOTEQ|维护人|NOTEQ||
|N_MAINTENANCE_ID_NOTIN|维护人|NOTIN||
|N_MAINTENANCE_NAME_EQ|维护人|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_RECENT_CREATE_DAYS_LTANDEQ|最近创建日期|LTANDEQ||
|N_REVIEW_RESULT_STATE_EQ|评审结果|EQ||
|N_RUN_STATUS_EQ|执行结果|EQ||
|N_SHOW_IDENTIFIER_LIKE|编号|LIKE||
|N_STATE_EQ|状态|EQ||
|N_STATE_NOTIN|状态|NOTIN||
|N_SUITES_LIKE|模块路径|LIKE||
|N_SUITE_ID_EQ|用例模块标识|EQ||
|N_SUITE_ID_ISNOTNULL|用例模块标识|ISNOTNULL||
|N_SUITE_ID_ISNULL|用例模块标识|ISNULL||
|N_SUITE_NAME_EQ|所属模块|EQ||
|N_SUITE_NAME_LIKE|所属模块|LIKE||
|N_TEST_LIBRARY_ID_EQ|测试库|EQ||
|N_TEST_LIBRARY_ID_ISNULL|测试库|ISNULL||
|N_TEST_LIBRARY_NAME_EQ|所属测试库|EQ||
|N_TEST_LIBRARY_NAME_LIKE|所属测试库|LIKE||
|N_TEST_PLAN_NAME_EQ|测试计划名称|EQ||
|N_TEST_TYPE_EQ|测试类型|EQ||
|N_TITLE_LIKE|标题|LIKE||
|N_TYPE_EQ|用例类型|EQ||
|N_UPDATE_TIME_GTANDEQ|更新时间|GTANDEQ||
|N_UPDATE_TIME_LTANDEQ|更新时间|LTANDEQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 添加预估工时（移动端） | mob_add_forecast_workload | 添加预估工时 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[登记预估工时](app/view/workload_mob_forecast_edit_view)</details>||
| 新建测试用例（快速新建） | quick_new_test_case | 新建测试用例 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建用例](app/view/test_case_quick_create_view)</details>||
| 设置重要程度 | set_level | 设置重要程度 |多项数据（主键）|<details><summary>后台调用</summary>[set_level](#行为)||
| 关联工作项（工具栏） | toolbar_link_work_item | 关联工作项 |无数据|用户自定义||
| 添加附件 | add_attachments | 添加附件 |无数据|用户自定义||
| BI编辑 | bi_report_view | 编辑 |无数据|用户自定义||
| 添加实际工时 | add_actual_workload | 添加实际工时 |无数据|<details><summary>打开视图或向导（模态）</summary>[登记工时](app/view/workload_quick_create_view)</details>||
| 删除 | delete | 删除 |多项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 配置 | panel_usr1022245764_button_calluilogic_click | 测试用例表单动态设计 |单项数据|<details><summary>打开视图或向导（模态）</summary>[测试用例表单动态设计](app/view/test_case_library_dyna_tab_exp_view)</details>||
| 打开评论列表 | open_comment_list | 打开评论列表 |单项数据|<details><summary>打开视图或向导（模态）</summary>[评论](app/view/comment_mob_comment_md_view)</details>||
| 查看已规划基线 | check_baseline_version | 已规划基线 |单项数据|用户自定义||
| 移动用例 | move_idea | 移动 |多项数据（主键）|<details><summary>后台调用</summary>[move_case](#行为)||
| 删除（移动端工具栏） | mob_toolbar_delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| BI全屏 | bi_full_screen | 全屏 |无数据|用户自定义||
| 打开BI报表配置表单_用例_用例占比 | open_bi_form_case_case_ratio | 配置 |无数据|<details><summary>打开快捷编辑</summary></details>||
| 移动（工具栏） | toolbar_move | 移动 |单项数据（主键）|<details><summary>后台调用</summary>[move_case](#行为)||
| 查看预估工时明细（移动端） | mob_check_forecast_workload_detail | 查看工时明细 |无数据|<details><summary>打开视图或向导（模态）</summary>[工时记录](app/view/workload_mob_forecast_detail_view)</details>||
| 关联缺陷（工具栏） | toolbar_link_bug | 关联缺陷 |无数据|用户自定义||
| 工具栏上传附件 | toolbar_update_file | 工具栏上传附件 |无数据|用户自定义||
| BI刷新 | bi_refresh | 刷新 |无数据|用户自定义||
| 打开我的事项用例表格视图 | open_summary_case | 测试用例 |无数据|<details><summary>打开视图或向导（模态）</summary>[测试用例](app/view/test_case_summary_case_grid_view)</details>||
| 测试用例关联需求（移动端） | mob_add_idea | 测试用例关联需求 |无数据|<details><summary>后台调用</summary>[others_relation_case](#行为)||
| 配置 | panel_usr1022211556_button_calluilogic_click | 测试用例表单设计 |单项数据|<details><summary>打开视图或向导（模态）</summary>[测试用例表单设计](app/view/test_case_dyna_tab_exp_view)</details>||
| 删除（工具栏） | toolbar_delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 测试用例关联缺陷（移动端） | mob_add_bug | 测试用例关联缺陷 |无数据|<details><summary>后台调用</summary>[others_relation_case](#行为)||
| 查看工时明细 | check_workload_detail | 查看工时明细 |无数据|用户自定义||
| 测试用例关联工作项（移动端） | mob_add_work_item | 测试用例关联工作项 |无数据|<details><summary>后台调用</summary>[others_relation_case](#行为)||
| 打开更多测试用例 | open_more_test_case | 打开更多测试用例 |无数据|用户自定义||
| 打开关注列表 | open_attention_list | 打开关注列表 |无数据|<details><summary>打开视图或向导（模态）</summary>[关注](app/view/attention_mob_md_view)</details>||
| 移动 | move | 移动 |单项数据（主键）|<details><summary>后台调用</summary>[move_case](#行为)||
| 恢复 | recover | 恢复 |多项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)||
| 打开测试用例（动态） | open_case_main | 打开测试用例 |单项数据|<details><summary>打开视图或向导（模态）</summary>[用例](app/view/test_case_main_view)</details>||
| 移入计划（气泡） | case_move_plan | 移入计划 |多项数据（主键）|<details><summary>后台调用</summary>[case_move_plan](#行为)||
| 查看评审历史 | check_review_history | 查看评审历史 |无数据|用户自定义||
| 添加预估工时 | add_estimated_workload | 添加预估工时 |无数据|<details><summary>打开视图或向导（模态）</summary>[登记预估工时](app/view/workload_forecast_quick_create_view)</details>||
| 自定义测试用例导入 | test_case_import_data | 导入测试用例 |无数据|<details><summary>打开数据导入视图</summary>[测试用例导入]()</details>||
| 恢复_视图消息 | recover_message | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)||
| 新建测试用例（移动端） | mob_create_case | 新建测试用例 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/test_case_mob_create_view)</details>||
| 选择模板 | choose_case_template | 选择模板 |无数据|<details><summary>打开编辑表单</summary></details>||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义||
| 复制 | copy_test_case | 复制 |多项数据（主键）|<details><summary>后台调用</summary>[copy_case](#行为)||
| 查看工时明细（移动端） | mob_check_workload_detail | 查看工时明细 |无数据|<details><summary>打开视图或向导（模态）</summary>[工时记录](app/view/workload_mob_detail_view)</details>||
| 添加实际工时（移动端） | mob_add_actual_workload | 添加实际工时 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[登记工时](app/view/workload_register_mob_edit_view)</details>||
| 查看预估工时明细 | check_estimated_workload_detail | 查看预估工时明细 |无数据|用户自定义||
| 设置状态 | set_state | 设置状态 |多项数据（主键）|<details><summary>后台调用</summary>[set_state](#行为)||
| 设置维护人 | set_maintenance | 设置维护人 |多项数据（主键）|<details><summary>后台调用</summary>[set_maintenance](#行为)||
| 关联需求（工具栏） | toolbar_link_idea | 关联需求 |无数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[上传附件（工具栏）](module/TestMgmt/test_case/uilogic/toolbar_add_attachment)|toolbar_add_attachment|工具栏按钮触发上传附件功能|
|[关联工作项（工具栏）](module/TestMgmt/test_case/uilogic/toolbar_link_work_item)|toolbar_link_work_item|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联缺陷（工具栏）](module/TestMgmt/test_case/uilogic/toolbar_link_bug)|toolbar_link_bug|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联需求（工具栏）](module/TestMgmt/test_case/uilogic/toolbar_link_idea)|toolbar_link_idea|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[工作项关联用例](module/TestMgmt/test_case/uilogic/work_item_relation_test_case)|work_item_relation_test_case|值变更时触发，工作项关联用例，调用处理逻辑生成正反向数据|
|[已删除用例显示隐藏](module/TestMgmt/test_case/uilogic/deleted_visible)|deleted_visible|已删除用例显示隐藏|
|[显示表单侧边栏](module/TestMgmt/test_case/uilogic/show_form_sidebar)|show_form_sidebar|每次需求主表单刷新时，将右侧侧边栏默认显示出来。|
|[查看工时明细](module/TestMgmt/test_case/uilogic/check_workload_detail)|check_workload_detail|按钮触发，通过脚本切换显示组件|
|[查看已规划基线](module/TestMgmt/test_case/uilogic/check_baseline_version)|check_baseline_version|按钮触发，通过脚本切换显示组件|
|[查看评审历史](module/TestMgmt/test_case/uilogic/check_review_history)|check_review_history|按钮触发，通过脚本切换显示组件|
|[查看预估工时明细](module/TestMgmt/test_case/uilogic/check_estimated_workload_detail)|check_estimated_workload_detail|按钮触发，通过脚本切换显示组件|
|[添加附件数据（通用）](module/TestMgmt/test_case/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[清空表单关注人](module/TestMgmt/test_case/uilogic/clean_attentions)|clean_attentions|清空表单关注人|
|[获取关注人与评论数](module/TestMgmt/test_case/uilogic/fill_att_com_count)|fill_att_com_count||
|[获取用例工时进度](module/TestMgmt/test_case/uilogic/get_workload_schedule)|get_workload_schedule|获取工时信息，并计算工时进度|
|[选择用例模板](module/TestMgmt/test_case/uilogic/choose_case_template)|choose_case_template|选择用例模板后回填所选模板数据至表单|
|[通知刷新（移动端）](module/TestMgmt/test_case/uilogic/send_refresh)|send_refresh||
|[门户全屏](module/TestMgmt/test_case/uilogic/full_screen)|full_screen|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户刷新](module/TestMgmt/test_case/uilogic/portlet_refresh)|portlet_refresh|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户编辑](module/TestMgmt/test_case/uilogic/edit_to_design)|edit_to_design|所有门户部件配置该逻辑触发跳转至编辑页|
|[需求关联用例](module/TestMgmt/test_case/uilogic/idea_relation_test_case)|idea_relation_test_case|值变更时触发，需求关联用例，调用处理逻辑生成正反向数据|

## 导入模式

* **测试用例导入**


具体描述测试操作步骤、预期结果的文档。


<el-descriptions direction="vertical" :column="12" :size="size" border>
<el-descriptions-item label="模块">-</el-descriptions-item>
<el-descriptions-item label="标题">-</el-descriptions-item>
<el-descriptions-item label="维护人">-</el-descriptions-item>
<el-descriptions-item label="用例类型">-</el-descriptions-item>
<el-descriptions-item label="重要程度">-</el-descriptions-item>
<el-descriptions-item label="测试类型">-</el-descriptions-item>
<el-descriptions-item label="预估工时">-</el-descriptions-item>
<el-descriptions-item label="剩余工时">-</el-descriptions-item>
<el-descriptions-item label="前置条件">-</el-descriptions-item>
<el-descriptions-item label="步骤描述">-</el-descriptions-item>
<el-descriptions-item label="预期结果">-</el-descriptions-item>
<el-descriptions-item label="关注人">-</el-descriptions-item>
</el-descriptions>

## 导出模式

* **用例导出**


具体描述测试操作步骤、预期结果的文档。


<el-descriptions direction="vertical" :column="11" :size="size" border>
<el-descriptions-item label="编号">-</el-descriptions-item>
<el-descriptions-item label="标题">-</el-descriptions-item>
<el-descriptions-item label="状态">-</el-descriptions-item>
<el-descriptions-item label="维护人">-</el-descriptions-item>
<el-descriptions-item label="重要程度">-</el-descriptions-item>
<el-descriptions-item label="用例类型">-</el-descriptions-item>
<el-descriptions-item label="所属模块">-</el-descriptions-item>
<el-descriptions-item label="更新时间">-</el-descriptions-item>
<el-descriptions-item label="前置条件">-</el-descriptions-item>
<el-descriptions-item label="步骤描述">-</el-descriptions-item>
<el-descriptions-item label="预期结果">-</el-descriptions-item>
</el-descriptions>

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/TestMgmt/test_case?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case?id=界面逻辑`">
  界面逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case?id=导入模式`">
  导入模式
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case?id=导出模式`">
  导出模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'major',
show_field_group:'field_group_advanced_search',

      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>