# 用例(Test_case)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|编号|IDENTIFIER|文本，可指定长度|100|[默认规则](module/TestMgmt/Test_case/value_rule/Identifier#default)|[用例编号](index/sequence_index#seq_test_case_id)|√||
|标题|TITLE|文本，可指定长度|500|[默认规则](module/TestMgmt/Test_case/value_rule/Title#default)||√||
|重要程度|LEVEL|[单项选择(文本值)](index/dictionary_index#Test_case_level "用例重要程度")|60|[默认规则](module/TestMgmt/Test_case/value_rule/Level#default)||||
|用例类型|TYPE|[单项选择(文本值)](index/dictionary_index#Test_case_type "用例类型")|60|[默认规则](module/TestMgmt/Test_case/value_rule/Type#default)||||
|测试类型|TEST_TYPE|[单项选择(文本值)](index/dictionary_index#Test_case_test_type "测试类型")|60|[默认规则](module/TestMgmt/Test_case/value_rule/Test_type#default)||||
|描述|DESCRIPTION|长文本，长度1000|2000|[默认规则](module/TestMgmt/Test_case/value_rule/Description#default)||||
|前置条件|PRECONDITION|长文本，长度1000|2000|[默认规则](module/TestMgmt/Test_case/value_rule/Precondition#default)||||
|是否已归档|IS_ARCHIVED|是否逻辑|0|||||
|是否已删除|IS_DELETED|是否逻辑|0|||||
|评审状态|STATE|[单项选择(文本值)](index/dictionary_index#Test_case_state "用例评审状态")|60|[默认规则](module/TestMgmt/Test_case/value_rule/State#default)||||
|步骤|STEPS|一对多关系数据集合|1048576|[默认规则](module/TestMgmt/Test_case/value_rule/Steps#default)||||
|维护人标识|MAINTENANCE_ID|外键值|100|[默认规则](module/TestMgmt/Test_case/value_rule/Maintenance_id#default)||||
|维护人|MAINTENANCE_NAME|外键值文本|100|[默认规则](module/TestMgmt/Test_case/value_rule/Maintenance_name#default)||||
|测试计划名称|TEST_PLAN_NAME|文本，可指定长度|100|[默认规则](module/TestMgmt/Test_case/value_rule/Test_plan_name#default)||||
|执行时间|EXECUTED_AT|日期时间型|0|||||
|执行人|EXECUTOR_NAME|文本，可指定长度|100|[默认规则](module/TestMgmt/Test_case/value_rule/Executor_name#default)||||
|执行结果|RUN_STATUS|[单项选择(文本值)](index/dictionary_index#Run_status "执行用例状态")|200|[默认规则](module/TestMgmt/Test_case/value_rule/Run_status#default)||||
|附件|ATTACHMENTS|一对多关系数据集合|1048576|[默认规则](module/TestMgmt/Test_case/value_rule/Attachments#default)||||
|模块路径|SUITES|外键值附加数据|500|[默认规则](module/TestMgmt/Test_case/value_rule/Suites#default)||||
|目标测试库|TARGET_LIBRARY_ID|文本，可指定长度|100|[默认规则](module/TestMgmt/Test_case/value_rule/Target_library_id#default)||||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|[默认规则](module/TestMgmt/Test_case/value_rule/Show_identifier#default)||||
|测试库标识|LIBRARY_IDENTIFIER|外键值附加数据|15|[默认规则](module/TestMgmt/Test_case/value_rule/Library_identifier#default)||||
|关注|ATTENTIONS|一对多关系数据集合|1048576|[默认规则](module/TestMgmt/Test_case/value_rule/Attentions#default)||||
|工时进度|WORKLOAD_SCHEDULE|数值|0|||||
|预估工时|ESTIMATED_WORKLOAD|数值|0|||||
|剩余工时|REMAINING_WORKLOAD|数值|0|||||
|实际工时|ACTUAL_WORKLOAD|数值|0|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/TestMgmt/Test_case/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Test_case/value_rule/Create_man#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/TestMgmt/Test_case/value_rule/Name#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Test_case/value_rule/Update_man#default)||||
|测试库标识|TEST_LIBRARY_ID|外键值|100|[默认规则](module/TestMgmt/Test_case/value_rule/Test_library_id#default)||||
|用例模块标识|SUITE_ID|外键值|100|[默认规则](module/TestMgmt/Test_case/value_rule/Suite_id#default)||||
|所属模块|SUITE_NAME|外键值文本|200|[默认规则](module/TestMgmt/Test_case/value_rule/Suite_name#default)||||
|所属测试库|TEST_LIBRARY_NAME|外键值文本|200|[默认规则](module/TestMgmt/Test_case/value_rule/Test_library_name#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_CASE_HISTORY_TEST_CASE_CASE_ID](der/DER1N_CASE_HISTORY_TEST_CASE_CASE_ID)|[用例执行历史(CASE_HISTORY)](module/TestMgmt/Case_history)|1:N关系||
|[DER1N_RUN_TEST_CASE_CASE_ID](der/DER1N_RUN_TEST_CASE_CASE_ID)|[执行用例(RUN)](module/TestMgmt/Run)|1:N关系||
|[DER1N_STEP_TEST_CASE_CASE_ID](der/DER1N_STEP_TEST_CASE_CASE_ID)|[用例步骤(STEP)](module/TestMgmt/Step)|1:N关系||
|[DERCUSTOM_ATTENTION_TEST_CASE_OWNER_ID](der/DERCUSTOM_ATTENTION_TEST_CASE_OWNER_ID)|[关注(ATTENTION)](module/Base/Attention)|自定义关系||
|[DERCUSTOM_COMMENT_TEST_CASE_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_TEST_CASE_PRINCIPAL_ID)|[评论(COMMENT)](module/Base/Comment)|自定义关系||
|[DERCUSTOM_RELATION_TEST_CASE](der/DERCUSTOM_RELATION_TEST_CASE)|[关联(RELATION)](module/Base/Relation)|自定义关系||
|[DERCUSTOM_TEST_CASE_ATTACHMENT](der/DERCUSTOM_TEST_CASE_ATTACHMENT)|[附件(ATTACHMENT)](module/Base/Attachment)|自定义关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_TEST_CASE_LIBRARY_TEST_LIBRARY_ID](der/DER1N_TEST_CASE_LIBRARY_TEST_LIBRARY_ID)|[测试库(LIBRARY)](module/TestMgmt/Library)|1:N关系||
|[DER1N_TEST_CASE_TEST_SUITE_SUITE_ID](der/DER1N_TEST_CASE_TEST_SUITE_SUITE_ID)|[用例模块(TEST_SUITE)](module/TestMgmt/Test_suite)|1:N关系||
|[DER1N_TEST_CASE_USER_MAINTENANCE_ID](der/DER1N_TEST_CASE_USER_MAINTENANCE_ID)|[企业用户(USER)](module/Base/User)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#Test_case_Create)|||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#Test_case_Update)|||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#Test_case_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|移入计划|Case_move_plan|[实体处理逻辑](module/TestMgmt/Test_case/logic/case_move_plan "移入计划")|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|复制用例|Copy_case|[实体处理逻辑](module/TestMgmt/Test_case/logic/copy_test_case "复制用例")|默认|不支持||||
|取消关联|Del_relation|[实体处理逻辑](module/TestMgmt/Test_case/logic/del_relation "取消关联")|默认|不支持||||
|删除|Delete|[实体处理逻辑](module/TestMgmt/Test_case/logic/delete "删除")|默认|不支持||||
|移动用例|Move_case|[实体处理逻辑](module/TestMgmt/Test_case/logic/move_test_case "移动用例")|默认|不支持||||
|获取最近执行|Newest_run|[实体处理逻辑](module/TestMgmt/Test_case/logic/newest_run "获取最近执行")|默认|不支持||||
|无操作|Nothing|[实体处理逻辑](module/TestMgmt/Test_case/logic/nothing "无操作")|默认|不支持||||
|其他实体关联用例|Others_relation_case|[实体处理逻辑](module/TestMgmt/Test_case/logic/others_relation_itest_case "其他实体关联用例")|默认|不支持||||
|恢复|Recover|[实体处理逻辑](module/TestMgmt/Test_case/logic/recover "恢复")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||
|设置重要程度|Set_level|[实体处理逻辑](module/TestMgmt/Test_case/logic/set_level "设置重要程度")|默认|不支持||||
|设置维护人|Set_maintenance|[实体处理逻辑](module/TestMgmt/Test_case/logic/set_maintenance "设置维护人")|默认|不支持||||
|设置评审状态|Set_state|[实体处理逻辑](module/TestMgmt/Test_case/logic/set_state "设置评审状态")|默认|不支持||||
|测试用例关联分页计数器|Test_case_re_counters|[实体处理逻辑](module/TestMgmt/Test_case/logic/test_case_re_counters "测试用例关联分页计数器")|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[移入计划](module/TestMgmt/Test_case/logic/case_move_plan)|case_move_plan|无|||
|[复制用例](module/TestMgmt/Test_case/logic/copy_test_case)|copy_test_case|无|||
|[生成最近访问](module/TestMgmt/Test_case/logic/create_recent)|create_recent|无|||
|[取消关联](module/TestMgmt/Test_case/logic/del_relation)|del_relation|无|||
|[删除](module/TestMgmt/Test_case/logic/delete)|delete|无|||
|[是否删除变更附加逻辑](module/TestMgmt/Test_case/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑|||
|[维护人变更附加逻辑](module/TestMgmt/Test_case/logic/maintenance_onchange)|maintenance_onchange|属性逻辑|||
|[移动用例](module/TestMgmt/Test_case/logic/move_test_case)|move_test_case|无|||
|[获取最近执行](module/TestMgmt/Test_case/logic/newest_run)|newest_run|无|||
|[无操作](module/TestMgmt/Test_case/logic/nothing)|nothing|无|||
|[其他实体关联用例](module/TestMgmt/Test_case/logic/others_relation_itest_case)|others_relation_itest_case|无|||
|[规划计划](module/TestMgmt/Test_case/logic/program_plan)|program_plan|无|||
|[恢复](module/TestMgmt/Test_case/logic/recover)|recover|无|||
|[设置重要程度](module/TestMgmt/Test_case/logic/set_level)|set_level|无|||
|[设置维护人](module/TestMgmt/Test_case/logic/set_maintenance)|set_maintenance|无|||
|[设置评审状态](module/TestMgmt/Test_case/logic/set_state)|set_state|无|||
|[测试用例关联分页计数器](module/TestMgmt/Test_case/logic/test_case_re_counters)|test_case_re_counters|无||计算分页下关联事项的条数|



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[评论通知维护人(comment_notify_maintenance)](module/TestMgmt/Test_case/query/Comment_notify_maintenance)|comment_notify_maintenance|否|否 |否 ||
|[数据查询(DEFAULT)](module/TestMgmt/Test_case/query/Default)|DEFAULT|是|否 |否 ||
|[已删除(deleted)](module/TestMgmt/Test_case/query/Deleted)|deleted|否|否 |否 ||
|[需求关联测试用例(idea_relation_test_case)](module/TestMgmt/Test_case/query/Idea_relation_test_case)|idea_relation_test_case|否|否 |否 ||
|[我负责的测试用例(my_assign)](module/TestMgmt/Test_case/query/My_assign)|my_assign|否|否 |否 ||
|[我关注的测试用例(my_attention)](module/TestMgmt/Test_case/query/My_attention)|my_attention|否|否 |否 ||
|[我创建的测试用例(my_created)](module/TestMgmt/Test_case/query/My_created)|my_created|否|否 |否 ||
|[正常状态(normal)](module/TestMgmt/Test_case/query/Normal)|normal|否|否 |否 ||
|[无模块用例(nosuite_test_case)](module/TestMgmt/Test_case/query/Nosuite_test_case)|nosuite_test_case|否|否 |否 ||
|[未添加过的用例(not_add_case)](module/TestMgmt/Test_case/query/Not_add_case)|not_add_case|否|否 |否 ||
|[未关联的用例(not_exsists_relation)](module/TestMgmt/Test_case/query/Not_exsists_relation)|not_exsists_relation|否|否 |否 ||
|[最近浏览(recent_test_case)](module/TestMgmt/Test_case/query/Recent_test_case)|recent_test_case|否|否 |否 ||
|[当前模块下用例(suites_test_case)](module/TestMgmt/Test_case/query/Suites_test_case)|suites_test_case|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/Test_case/query/View)|VIEW|否|否 |否 ||
|[工作项关联测试用例(work_item_relation_test_case)](module/TestMgmt/Test_case/query/Work_item_relation_test_case)|work_item_relation_test_case|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[评论通知维护人(comment_notify_maintenance)](module/TestMgmt/Test_case/dataset/Comment_notify_maintenance)|comment_notify_maintenance|数据查询|否|||
|[数据集(DEFAULT)](module/TestMgmt/Test_case/dataset/Default)|DEFAULT|数据查询|是|||
|[已删除(deleted)](module/TestMgmt/Test_case/dataset/Deleted)|deleted|数据查询|否|||
|[需求关联测试用例(idea_relation_test_case)](module/TestMgmt/Test_case/dataset/Idea_relation_test_case)|idea_relation_test_case|数据查询|否|||
|[我负责的测试用例(my_assign)](module/TestMgmt/Test_case/dataset/My_assign)|my_assign|数据查询|否|||
|[我负责的用例(my_assignee_count_test_case)](module/TestMgmt/Test_case/dataset/My_assignee_count_test_case)|my_assignee_count_test_case|数据查询|否|||
|[我关注的测试用例(my_attention)](module/TestMgmt/Test_case/dataset/My_attention)|my_attention|数据查询|否|||
|[我创建的测试用例(my_created)](module/TestMgmt/Test_case/dataset/My_created)|my_created|数据查询|否|||
|[正常状态(normal)](module/TestMgmt/Test_case/dataset/Normal)|normal|数据查询|否|||
|[无模块用例(nosuite_test_case)](module/TestMgmt/Test_case/dataset/Nosuite_test_case)|nosuite_test_case|数据查询|否|||
|[未添加过的用例(not_add_case)](module/TestMgmt/Test_case/dataset/Not_add_case)|not_add_case|数据查询|否|||
|[未关联的用例(not_exsists_relation)](module/TestMgmt/Test_case/dataset/Not_exsists_relation)|not_exsists_relation|数据查询|否|||
|[最近浏览(recent_test_case)](module/TestMgmt/Test_case/dataset/Recent_test_case)|recent_test_case|数据查询|否|||
|[当前模块下用例(this_suite_test_case)](module/TestMgmt/Test_case/dataset/Suites_test_case)|this_suite_test_case|数据查询|否|||
|[工作项关联测试用例(work_item_relation_test_case)](module/TestMgmt/Test_case/dataset/Work_item_relation_test_case)|work_item_relation_test_case|数据查询|否|||


## 数据权限

##### 操作用户(写) :id=Test_case-USER_W

<p class="panel-title"><b>数据范围</b></p>


<p class="panel-title"><b>数据能力</b></p>

* `CREATE`




## 消息通知

|    名称   | 代码名       |  消息队列   |  消息模板 |  通知目标     |  备注  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[取消分配维护人通知](module/TestMgmt/Test_case/notify/maintainer_cancel_notify)|maintainer_cancel_notify|[默认消息队列](index/notify_index)|[测试用例通知模板(取消分配维护人)](index/notify_index#test_case_maintainer_cancel)|维护人 ||
|[分配维护人通知](module/TestMgmt/Test_case/notify/maintainer_notify)|maintainer_notify|[默认消息队列](index/notify_index)|[测试用例通知模板(分配维护人)](index/notify_index#test_case_maintainer)|维护人 ||
|[维护人变更通知](module/TestMgmt/Test_case/notify/maintainer_onchange_notify)|maintainer_onchange_notify|[默认消息队列](index/notify_index)|[测试用例通知模板(维护人变更)](index/notify_index#test_case_maintainer_onchange)|关注人员 ||
|[删除/恢复测试用例通知](module/TestMgmt/Test_case/notify/remove_notify)|remove_notify|[默认消息队列](index/notify_index)|[测试用例通知模板(删除/恢复测试用例)](index/notify_index#test_case_remove)|关注人员 维护人 ||


## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_IDENTIFIER_LIKE|编号|LIKE|
|N_TITLE_LIKE|标题|LIKE|
|N_LEVEL_EQ|重要程度|EQ|
|N_TYPE_EQ|用例类型|EQ|
|N_TEST_TYPE_EQ|测试类型|EQ|
|N_IS_ARCHIVED_EQ|是否已归档|EQ|
|N_IS_DELETED_EQ|是否已删除|EQ|
|N_STATE_EQ|评审状态|EQ|
|N_STATE_NOTIN|评审状态|NOTIN|
|N_MAINTENANCE_ID_EQ|维护人标识|EQ|
|N_RUN_STATUS_EQ|执行结果|EQ|
|N_SUITES_LIKE|模块路径|LIKE|
|N_SHOW_IDENTIFIER_LIKE|编号|LIKE|
|N_ID_EQ|标识|EQ|
|N_CREATE_MAN_EQ|建立人|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_TEST_LIBRARY_ID_EQ|测试库标识|EQ|
|N_SUITE_ID_EQ|用例模块标识|EQ|
|N_SUITE_ID_ISNULL|用例模块标识|ISNULL|
|N_SUITE_NAME_EQ|所属模块|EQ|
|N_SUITE_NAME_LIKE|所属模块|LIKE|
|N_TEST_LIBRARY_NAME_EQ|所属测试库|EQ|
|N_TEST_LIBRARY_NAME_LIKE|所属测试库|LIKE|


## 导入模式
* 测试用例导入

|用例模块标识|编号|标题|维护人|用例类型|重要程度|测试类型|前置条件|步骤|关注|
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| - | - | - | - | - | - | - | - | - | - |



## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 添加测试用例（其他实体关联） | others_add_relation_test_case | 添加用例 |无数据|用户自定义|否|无||
| 移动 | move | 移动 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[移动用例](app/view/test_casemove_case_view)</details>|否|无||
| 设置重要程度 | set_level | 设置重要程度 |多项数据（主键）|<details><summary>后台调用</summary>[Set_level](#行为)|是|引用视图或树节点||
| 恢复 | recover | 恢复 |多项数据（主键）|<details><summary>后台调用</summary>[Recover](#行为)|是|引用视图或树节点||
| 取消关联 | del_relation | 取消关联 |单项数据（主键）|<details><summary>后台调用</summary>[Del_relation](#行为)|是|引用视图或树节点||
| 添加附件 | add_attachments | 添加附件 |无数据|用户自定义|否|无||
| 移入计划（气泡） | case_move_plan | 移入计划 |多项数据（主键）|<details><summary>后台调用</summary>[Case_move_plan](#行为)|是|引用视图或树节点||
| 删除 | delete | 删除 |多项数据（主键）|<details><summary>后台调用</summary>[Delete](#行为)|是|引用视图或树节点||
| 移动用例 | move_idea | 移动 |多项数据（主键）|<details><summary>后台调用</summary>[Move_case](#行为)|是|引用视图或树节点||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义|否|无||
| 复制用例 | copy_test_case | 复制用例 |多项数据（主键）|<details><summary>后台调用</summary>[Copy_case](#行为)|是|引用视图或树节点||
| 设置评审状态 | set_state | 设置评审状态 |多项数据（主键）|<details><summary>后台调用</summary>[Set_state](#行为)|是|引用视图或树节点||
| 设置维护人 | set_maintenance | 设置维护人 |多项数据（主键）|<details><summary>后台调用</summary>[Set_maintenance](#行为)|是|引用视图或树节点||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[新建类别](module/TestMgmt/Test_case/uilogic/create_category)|create_category|
|[新建分组](module/TestMgmt/Test_case/uilogic/create_section)|create_section|
|[删除类别或分组](module/TestMgmt/Test_case/uilogic/remove_section_or_category)|remove_section_or_category|
|[添加附件数据（通用）](module/TestMgmt/Test_case/uilogic/add_attachment)|add_attachment|
|[编辑类别或分组](module/TestMgmt/Test_case/uilogic/edit_section_or_category)|edit_section_or_category|
|[获取测试用例总条数](module/TestMgmt/Test_case/uilogic/get_test_case_total)|get_test_case_total|
|[触发计数器刷新](module/TestMgmt/Test_case/uilogic/refresh_counter)|refresh_counter|
|[关联测试用例值变更](module/TestMgmt/Test_case/uilogic/relation_test_case_change)|relation_test_case_change|
|[选择下拉框区域展示](module/TestMgmt/Test_case/uilogic/show_choose_area)|show_choose_area|
