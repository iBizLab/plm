# 工作项(Work_item)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|编号|IDENTIFIER|文本，可指定长度|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Identifier#default)|[工作项编号](index/sequence_index#seq_work_item_id)|√||
|是否已归档|IS_ARCHIVED|是否逻辑|0|||||
|标题|TITLE|文本，可指定长度|500|[默认规则](module/ProjMgmt/Work_item/value_rule/Title#default)||√||
|是否已删除|IS_DELETED|是否逻辑|0|||||
|开始时间|START_AT|日期型|0|||||
|结束时间|END_AT|日期型|0|[结束时间大于等于开始时间](module/ProjMgmt/Work_item/value_rule/End_at#date_value_rule)<br>[默认规则](module/ProjMgmt/Work_item/value_rule/End_at#default)||||
|状态|STATE|单项选择(文本值)|100|[默认规则](module/ProjMgmt/Work_item/value_rule/State#default)||||
|优先级|PRIORITY|[单项选择(文本值)](index/dictionary_index#Work_item_priority "优先级")|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Priority#default)||||
|是否叶子节点|IS_LEAF|是否逻辑|0|||||
|需求类型|BACKLOG_TYPE|[单项选择(文本值)](index/dictionary_index#Requirement_type "需求类型")|60|[默认规则](module/ProjMgmt/Work_item/value_rule/Backlog_type#default)||||
|需求来源|BACKLOG_FROM|[单项选择(文本值)](index/dictionary_index#Demand_sources "需求来源")|60|[默认规则](module/ProjMgmt/Work_item/value_rule/Backlog_from#default)||||
|描述|DESCRIPTION|长文本，没有长度限制|1048576|[默认规则](module/ProjMgmt/Work_item/value_rule/Description#default)||||
|负责人|ASSIGNEE_NAME|外键值文本|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Assignee_name#default)||||
|复现概率|REAPPEAR_PROBABILITY|[单项选择(文本值)](index/dictionary_index#Reproduction_probability "复现概率")|60|[默认规则](module/ProjMgmt/Work_item/value_rule/Reappear_probability#default)||||
|负责人标识|ASSIGNEE_ID|外键值|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Assignee_id#default)||||
|严重程度|SEVERITY|[单项选择(文本值)](index/dictionary_index#Severity "严重程度")|60|[默认规则](module/ProjMgmt/Work_item/value_rule/Severity#default)||||
|风险|RISK|[单项选择(文本值)](index/dictionary_index#Risk "风险")|60|[默认规则](module/ProjMgmt/Work_item/value_rule/Risk#default)||||
|项目类型|PROJECT_TYPE|[外键值附加数据](index/dictionary_index#Project_type "项目类型")|60|[默认规则](module/ProjMgmt/Work_item/value_rule/Project_type#default)||||
|工作项类型分组|WORK_ITEM_TYPE_GROUP|[外键值附加数据](index/dictionary_index#Work_item_type_group "工作项类型分组")|60|[默认规则](module/ProjMgmt/Work_item/value_rule/Work_item_type_group#default)||||
|标签|TAGS|长文本，长度1000|2000|[默认规则](module/ProjMgmt/Work_item/value_rule/Tags#default)||||
|看板栏状态|ENTRY_STATUS|文本，可指定长度|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Entry_status#default)||||
|所在看板栏位置|ENTRY_POSITION|整型|0|||||
|统计数|REP_NUM|数值|0|||||
|工作项类型序号|WORK_ITEM_TYPE_SEQUENCE|外键值附加数据|0|||||
|完成时间|COMPLETED_AT|日期时间型|0|||||
|工时进度|WORKLOAD_SCHEDULE|数值|0|||||
|预估工时|ESTIMATED_WORKLOAD|数值|0|||||
|任务类别|JOB_TYPE|[单项选择(文本值)](index/dictionary_index#Task_category "任务类别")|60|[默认规则](module/ProjMgmt/Work_item/value_rule/Job_type#default)||||
|测试计划ID|TEST_PLAN_ID|文本，可指定长度|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Test_plan_id#default)||||
|剩余工时|REMAINING_WORKLOAD|数值|0|||||
|附件|ATTACHMENTS|一对多关系数据集合|1048576|[默认规则](module/ProjMgmt/Work_item/value_rule/Attachments#default)||||
|实际工时|ACTUAL_WORKLOAD|数值|0|||||
|交付物|DELIVERABLE|一对多关系数据集合|1048576|[默认规则](module/ProjMgmt/Work_item/value_rule/Deliverable#default)||||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|[默认规则](module/ProjMgmt/Work_item/value_rule/Show_identifier#default)||||
|项目标识|PROJECT_IDENTIFIER|外键值附加数据|15|[默认规则](module/ProjMgmt/Work_item/value_rule/Project_identifier#default)||||
|关注|ATTENTIONS|一对多关系数据集合|1048576|[默认规则](module/ProjMgmt/Work_item/value_rule/Attentions#default)||||
|报表分组属性|REP_GROUP_VALUE|文本，可指定长度|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Rep_group_value#default)||||
|报表百分值|REP_PERCENT_VALUE|浮点|0|||||
|报表值1|REP_VALUE_1|整型|0|||||
|报表值2|REP_VALUE_2|整型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Update_man#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Create_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|项目标识|PROJECT_ID|外键值|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Project_id#default)||||
|工作项类型|WORK_ITEM_TYPE_ID|外键值|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Work_item_type_id#default)||||
|所属项目|PROJECT_NAME|外键值文本|200|[默认规则](module/ProjMgmt/Work_item/value_rule/Project_name#default)||||
|工作项类型|WORK_ITEM_TYPE_NAME|外键值文本|200|[默认规则](module/ProjMgmt/Work_item/value_rule/Work_item_type_name#default)||||
|父标识|PID|外键值|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Pid#default)||||
|父工作项|PTITLE|外键值文本|500|[默认规则](module/ProjMgmt/Work_item/value_rule/Ptitle#default)||||
|迭代标识|SPRINT_ID|外键值|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Sprint_id#default)||||
|项目发布标识|VERSION_ID|外键值|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Version_id#default)||||
|看板标识|BOARD_ID|外键值|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Board_id#default)||||
|看板栏标识|ENTRY_ID|外键值|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Entry_id#default)||||
|泳道标识|SWIMLANE_ID|外键值|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Swimlane_id#default)||||
|看板栏名称|ENTRY_NAME|外键值文本|200|[默认规则](module/ProjMgmt/Work_item/value_rule/Entry_name#default)||||
|名称|BOARD_NAME|外键值文本|200|[默认规则](module/ProjMgmt/Work_item/value_rule/Board_name#default)||||
|顶级工作项标识|TOP_ID|外键值|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Top_id#default)||||
|顶级工作项标题|TOP_TITLE|外键值文本|500|[默认规则](module/ProjMgmt/Work_item/value_rule/Top_title#default)||||
|发布名称|VERSION_NAME|外键值文本|200|[默认规则](module/ProjMgmt/Work_item/value_rule/Version_name#default)||||
|迭代名称|SPRINT_NAME|外键值文本|200|[默认规则](module/ProjMgmt/Work_item/value_rule/Sprint_name#default)||||
|项目发布标识|RELEASE_ID|外键值|100|[默认规则](module/ProjMgmt/Work_item/value_rule/Release_id#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_WORK_ITEM_WORK_ITEM_PID](der/DER1N_WORK_ITEM_WORK_ITEM_PID)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|1:N关系||
|[DER1N_WORK_ITEM_WORK_ITEM_TOP_ID](der/DER1N_WORK_ITEM_WORK_ITEM_TOP_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|1:N关系||
|[DERCUSTOM_ATTENTION_WORK_ITEM_OWNER_ID](der/DERCUSTOM_ATTENTION_WORK_ITEM_OWNER_ID)|[关注(ATTENTION)](module/Base/Attention)|自定义关系||
|[DERCUSTOM_COMMENT_WORK_ITEM_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_WORK_ITEM_PRINCIPAL_ID)|[评论(COMMENT)](module/Base/Comment)|自定义关系||
|[DERCUSTOM_RECENT_WORK_ITEM](der/DERCUSTOM_RECENT_WORK_ITEM)|[最近访问(RECENT)](module/Base/Recent)|自定义关系||
|[DERCUSTOM_RELATION_WORK_ITEM](der/DERCUSTOM_RELATION_WORK_ITEM)|[关联(RELATION)](module/Base/Relation)|自定义关系||
|[DERCUSTOM_TRANSITION_HISTORY_WORK_ITEM](der/DERCUSTOM_TRANSITION_HISTORY_WORK_ITEM)|[流转记录(TRANSITION_HISTORY)](module/ProjMgmt/Transition_history)|自定义关系||
|[DERCUSTOM_WORK_ITEM_ATTACHMENT](der/DERCUSTOM_WORK_ITEM_ATTACHMENT)|[附件(ATTACHMENT)](module/Base/Attachment)|自定义关系||
|[DERCUSTOM_WORK_ITEM_DELIVERABLE](der/DERCUSTOM_WORK_ITEM_DELIVERABLE)|[交付物(DELIVERABLE)](module/Base/Deliverable)|自定义关系||
|[DERCUSTOM_WORK_ITEM_WORKLOAD](der/DERCUSTOM_WORK_ITEM_WORKLOAD)|[工时(WORKLOAD)](module/Base/Workload)|自定义关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_WORK_ITEM_BOARD_BOARD_ID](der/DER1N_WORK_ITEM_BOARD_BOARD_ID)|[看板(BOARD)](module/ProjMgmt/Board)|1:N关系||
|[DER1N_WORK_ITEM_ENTRY_ENTRY_ID](der/DER1N_WORK_ITEM_ENTRY_ENTRY_ID)|[看板栏(ENTRY)](module/ProjMgmt/Entry)|1:N关系||
|[DER1N_WORK_ITEM_PROJECT_PROJECT_ID](der/DER1N_WORK_ITEM_PROJECT_PROJECT_ID)|[项目(PROJECT)](module/ProjMgmt/Project)|1:N关系||
|[DER1N_WORK_ITEM_RELEASE_RELEASE_ID](der/DER1N_WORK_ITEM_RELEASE_RELEASE_ID)|[项目发布(RELEASE)](module/ProjMgmt/Release)|1:N关系||
|[DER1N_WORK_ITEM_SPRINT_SPRINT_ID](der/DER1N_WORK_ITEM_SPRINT_SPRINT_ID)|[迭代(SPRINT)](module/ProjMgmt/Sprint)|1:N关系||
|[DER1N_WORK_ITEM_SWIMLANE_SWIMLANE_ID](der/DER1N_WORK_ITEM_SWIMLANE_SWIMLANE_ID)|[泳道(SWIMLANE)](module/ProjMgmt/Swimlane)|1:N关系||
|[DER1N_WORK_ITEM_USER_ASSIGNEE_ID](der/DER1N_WORK_ITEM_USER_ASSIGNEE_ID)|[企业用户(USER)](module/Base/User)|1:N关系||
|[DER1N_WORK_ITEM_VERSION_VERSION_ID](der/DER1N_WORK_ITEM_VERSION_VERSION_ID)|[版本（temp）(VERSION)](module/ProjMgmt/Version)|1:N关系||
|[DER1N_WORK_ITEM_WORK_ITEM_PID](der/DER1N_WORK_ITEM_WORK_ITEM_PID)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|1:N关系||
|[DER1N_WORK_ITEM_WORK_ITEM_TOP_ID](der/DER1N_WORK_ITEM_WORK_ITEM_TOP_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|1:N关系||
|[DER1N_WORK_ITEM_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID](der/DER1N_WORK_ITEM_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID)|[工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/Work_item_type)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#Work_item_Create)|||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#Work_item_Update)|||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#Work_item_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持|[附加操作](index/action_logic_index#Work_item_GetDraft)|||
|激活|Activate|[实体处理逻辑](module/ProjMgmt/Work_item/logic/activate "激活")|默认|不支持||||
|归档|Archive|[实体处理逻辑](module/ProjMgmt/Work_item/logic/archive "归档")|默认|不支持||||
|分配负责人|Change_assignee|[实体处理逻辑](module/ProjMgmt/Work_item/logic/change_assignee "分配负责人")|默认|不支持||||
|变更父工作项|Change_parent|[实体处理逻辑](module/ProjMgmt/Work_item/logic/change_parent "变更父工作项")|默认|不支持||||
|变更状态|Change_state|[实体处理逻辑](module/ProjMgmt/Work_item/logic/change_state "变更状态")|默认|不支持||||
|修改时间|Change_time|[实体处理逻辑](module/ProjMgmt/Work_item/logic/change_time "修改时间")|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|子工作项取消关联|Child_del_relation|[实体处理逻辑](module/ProjMgmt/Work_item/logic/child_del_relation "子工作项取消关联")|默认|不支持||||
|选择子工作项|Choose_child|[实体处理逻辑](module/ProjMgmt/Work_item/logic/choose_child "选择子工作项")|默认|不支持||||
|复制|Copy|[实体处理逻辑](module/ProjMgmt/Work_item/logic/copy_work_item "复制工作项")|默认|不支持||||
|取消关联|Del_relation|[实体处理逻辑](module/ProjMgmt/Work_item/logic/del_relation "取消关联")|默认|不支持||||
|删除|Delete|[实体处理逻辑](module/ProjMgmt/Work_item/logic/delete "删除")|默认|不支持||||
|预计工时表单项更新|Estimated_updateform|[实体处理逻辑](module/ProjMgmt/Work_item/logic/estimated_updateform "预计工时表单项更新")|默认|不支持||||
|获取关注人|Get_attention|内置方法|默认|不支持||||
|移动工作项|Move_work_item|[实体处理逻辑](module/ProjMgmt/Work_item/logic/move_work_item "移动工作项")|默认|不支持||||
|无操作|Nothing|[实体处理逻辑](module/ProjMgmt/Work_item/logic/nothing "无操作")|默认|不支持||||
|其他实体关联工单|Others_relation_work_item|[实体处理逻辑](module/ProjMgmt/Work_item/logic/others_relation_work_item "其他实体关联工作项")|默认|不支持||||
|规划工作项|Plan_work_item|[实体处理逻辑](module/ProjMgmt/Work_item/logic/plan_work_item "规划工作项")|默认|不支持||||
|恢复|Recover|[实体处理逻辑](module/ProjMgmt/Work_item/logic/recover "恢复")|默认|不支持||||
|剩余工时表单项更新|Remaining_updateform|[实体处理逻辑](module/ProjMgmt/Work_item/logic/remaining_updateform "剩余工时表单项更新")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||
|选择看板后填充默认看板栏|Set_default_entry|[实体处理逻辑](module/ProjMgmt/Work_item/logic/set_default_entry "设置默认看板栏")|默认|不支持||||
|设置缺陷类型|Set_type_bug|[实体处理逻辑](module/ProjMgmt/Work_item/logic/set_type_bug "设置缺陷类型")|默认|不支持||||
|移入迭代|Shift_in_sprint|[实体处理逻辑](module/ProjMgmt/Work_item/logic/shift_in_sprint "移入迭代")|默认|不支持||||
|移入发布|Shift_in_version|[实体处理逻辑](module/ProjMgmt/Work_item/logic/shift_in_version "移入发布")|默认|不支持||||
|工作项关联分页计数器|Work_item_re_counters|[实体处理逻辑](module/ProjMgmt/Work_item/logic/work_item_re_counters "工作项关联分页计数器")|默认|不支持||||
|获取测试计划对应项目|Work_item_test_plan_project|[实体处理逻辑](module/ProjMgmt/Work_item/logic/work_item_test_plan_project "获取测试计划对应项目")|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[激活](module/ProjMgmt/Work_item/logic/activate)|activate|无||递归所有下级工作项|
|[归档](module/ProjMgmt/Work_item/logic/archive)|archive|无||递归所有下级工作项|
|[工作项负责人变更附加逻辑](module/ProjMgmt/Work_item/logic/assignee_onchange)|assignee_onchange|属性逻辑|||
|[分配负责人](module/ProjMgmt/Work_item/logic/change_assignee)|change_assignee|无|||
|[变更父工作项](module/ProjMgmt/Work_item/logic/change_parent)|change_parent|无|||
|[变更状态](module/ProjMgmt/Work_item/logic/change_state)|change_state|无|||
|[修改时间](module/ProjMgmt/Work_item/logic/change_time)|change_time|无|||
|[变更顶级工作项](module/ProjMgmt/Work_item/logic/change_top)|change_top|无|||
|[子工作项取消关联](module/ProjMgmt/Work_item/logic/child_del_relation)|child_del_relation|无|||
|[选择子工作项](module/ProjMgmt/Work_item/logic/choose_child)|choose_child|无|||
|[复制子工作项](module/ProjMgmt/Work_item/logic/copy_child_work_item)|copy_child_work_item|无|||
|[复制工作项](module/ProjMgmt/Work_item/logic/copy_work_item)|copy_work_item|无|||
|[生成最近访问](module/ProjMgmt/Work_item/logic/create_recent)|create_recent|无|||
|[取消关联](module/ProjMgmt/Work_item/logic/del_relation)|del_relation|无|||
|[删除](module/ProjMgmt/Work_item/logic/delete)|delete|无||递归所有下级工作项|
|[预计工时表单项更新](module/ProjMgmt/Work_item/logic/estimated_updateform)|estimated_updateform|无|||
|[需求树表新建时填充类型](module/ProjMgmt/Work_item/logic/fill_type)|fill_type|无||需求树表 新建行操作 根据父级类型判断 填充子的类型|
|[获取工时进度](module/ProjMgmt/Work_item/logic/get_workload_schedule)|get_workload_schedule|无||get行为附加逻辑|
|[需求树表数据查询](module/ProjMgmt/Work_item/logic/idea_tree_grid)|idea_tree_grid|无|||
|[工作项归档变更附加逻辑](module/ProjMgmt/Work_item/logic/is_archived_onchange)|is_archived_onchange|属性逻辑|||
|[工作项删除变更附加逻辑](module/ProjMgmt/Work_item/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑|||
|[移动时子工作项的处理](module/ProjMgmt/Work_item/logic/move_child_work_item)|move_child_work_item|无||父工作项移动; 子工作项也移动;并对Top_id进行更新|
|[移动工作项](module/ProjMgmt/Work_item/logic/move_work_item)|move_work_item|无|||
|[无操作](module/ProjMgmt/Work_item/logic/nothing)|nothing|无|||
|[其他实体关联工作项](module/ProjMgmt/Work_item/logic/others_relation_work_item)|others_relation_work_item|无|||
|[规划工作项](module/ProjMgmt/Work_item/logic/plan_work_item)|plan_work_item|无|||
|[恢复](module/ProjMgmt/Work_item/logic/recover)|recover|无||递归所有下级工作项|
|[剩余工时表单项更新](module/ProjMgmt/Work_item/logic/remaining_updateform)|remaining_updateform|无|||
|[设置默认看板栏](module/ProjMgmt/Work_item/logic/set_default_entry)|set_default_entry|无|||
|[设置缺陷类型](module/ProjMgmt/Work_item/logic/set_type_bug)|set_type_bug|无|||
|[移入迭代](module/ProjMgmt/Work_item/logic/shift_in_sprint)|shift_in_sprint|无|||
|[移入发布](module/ProjMgmt/Work_item/logic/shift_in_version)|shift_in_version|无|||
|[工作项状态变更附加逻辑](module/ProjMgmt/Work_item/logic/state_onchange)|state_onchange|属性逻辑|||
|[顶级工作项](module/ProjMgmt/Work_item/logic/top_work_item)|top_work_item|无||创建时继承父工作项的顶级工作项|
|[树状或平铺表格数据查询](module/ProjMgmt/Work_item/logic/tree_tile_grid_query)|tree_tile_grid_query|无|||
|[工作项关联分页计数器](module/ProjMgmt/Work_item/logic/work_item_re_counters)|work_item_re_counters|无||计算分页下关联事项的条数|
|[获取测试计划对应项目](module/ProjMgmt/Work_item/logic/work_item_test_plan_project)|work_item_test_plan_project|无|||


## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `工作项类型(WORK_ITEM_TYPE_ID)` 
* `状态(STATE)` 



> 控制属性未配置代码表，或者代码表未配置代码项



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[已归档(archived)](module/ProjMgmt/Work_item/query/Archived)|archived|否|否 |否 ||
|[缺陷工作项(bug)](module/ProjMgmt/Work_item/query/Bug)|bug|否|否 |否 ||
|[缺陷状态分布表格(bug_state_group_grid)](module/ProjMgmt/Work_item/query/Bug_state_group_grid)|bug_state_group_grid|否|否 |否 ||
|[变更父工作项(change_parent)](module/ProjMgmt/Work_item/query/Change_parent)|change_parent|否|否 |否 ||
|[选择子工作项(choose_child)](module/ProjMgmt/Work_item/query/Choose_child)|choose_child|否|否 |否 ||
|[评论通知负责人(comment_notify_assignee)](module/ProjMgmt/Work_item/query/Comment_notify_assignee)|comment_notify_assignee|否|否 |否 ||
|[普通工作项(common)](module/ProjMgmt/Work_item/query/Common)|common|否|否 |否 |未删除|
|[普通状态缺陷(common_bug)](module/ProjMgmt/Work_item/query/Common_bug)|common_bug|否|否 |否 ||
|[数据查询(DEFAULT)](module/ProjMgmt/Work_item/query/Default)|DEFAULT|是|否 |否 ||
|[已删除(deleted)](module/ProjMgmt/Work_item/query/Deleted)|deleted|否|否 |否 ||
|[需求关联工作项(idea_relation_work_item)](module/ProjMgmt/Work_item/query/Idea_relation_work_item)|idea_relation_work_item|否|否 |否 ||
|[里程碑(milestone)](module/ProjMgmt/Work_item/query/Milestone)|milestone|否|否 |否 ||
|[我负责的(my_assignee)](module/ProjMgmt/Work_item/query/My_assignee)|my_assignee|否|否 |否 ||
|[我关注的(my_attention)](module/ProjMgmt/Work_item/query/My_attention)|my_attention|否|否 |否 ||
|[我创建的(my_created)](module/ProjMgmt/Work_item/query/My_created)|my_created|否|否 |否 ||
|[过滤器默认查询(my_filter)](module/ProjMgmt/Work_item/query/My_filter)|my_filter|否|否 |否 ||
|[我待完成的(my_todo)](module/ProjMgmt/Work_item/query/My_todo)|my_todo|否|否 |否 ||
|[排除缺陷类型的工作项(no_bug_work_item)](module/ProjMgmt/Work_item/query/No_bug_work_item)|no_bug_work_item|否|否 |否 ||
|[正常状态(normal)](module/ProjMgmt/Work_item/query/Normal)|normal|否|否 |否 ||
|[未关联的缺陷(not_exsists_bug_relation)](module/ProjMgmt/Work_item/query/Not_exsists_bug_relation)|not_exsists_bug_relation|否|否 |否 |仅缺陷|
|[未关联的工作项(not_exsists_relation)](module/ProjMgmt/Work_item/query/Not_exsists_relation)|not_exsists_relation|否|否 |否 ||
|[未关联且不为缺陷工作项(notbug_exsists_relation)](module/ProjMgmt/Work_item/query/Notbug_exsists_relation)|notbug_exsists_relation|否|否 |否 |未关联且不为缺陷工作项|
|[项目概览-工作项统计(overview_chart)](module/ProjMgmt/Work_item/query/Overview_chart)|overview_chart|否|否 |否 ||
|[规划工作项(plan)](module/ProjMgmt/Work_item/query/Plan)|plan|否|否 |否 ||
|[最近浏览(recent_work_item)](module/ProjMgmt/Work_item/query/Recent_work_item)|recent_work_item|否|否 |否 ||
|[需求工作项(requirement)](module/ProjMgmt/Work_item/query/Requirement)|requirement|否|否 |否 ||
|[执行用例关联缺陷(run_relation_bug)](module/ProjMgmt/Work_item/query/Run_relation_bug)|run_relation_bug|否|否 |否 ||
|[执行用例关联缺陷(run_relation_work_item)](module/ProjMgmt/Work_item/query/Run_relation_work_item)|run_relation_work_item|否|否 |否 ||
|[测试用例关联缺陷(test_case_relation_bug)](module/ProjMgmt/Work_item/query/Test_case_relation_bug)|test_case_relation_bug|否|否 |否 ||
|[测试用例关联工作项(test_case_relation_work_item)](module/ProjMgmt/Work_item/query/Test_case_relation_work_item)|test_case_relation_work_item|否|否 |否 ||
|[测试计划关联缺陷(test_plan_relation_bug)](module/ProjMgmt/Work_item/query/Test_plan_relation_bug)|test_plan_relation_bug|否|否 |否 ||
|[工单关联工作项(ticket_relation_work_item)](module/ProjMgmt/Work_item/query/Ticket_relation_work_item)|ticket_relation_work_item|否|否 |否 ||
|[顶层数据查询(top)](module/ProjMgmt/Work_item/query/Top)|top|否|否 |否 ||
|[树表查询(tree_grid)](module/ProjMgmt/Work_item/query/Tree_grid)|tree_grid|否|否 |否 ||
|[项目集工作下的工作项(under_work)](module/ProjMgmt/Work_item/query/Under_work)|under_work|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/Work_item/query/View)|VIEW|否|否 |否 ||
|[工作项关联工作项(work_item_relation_work_item)](module/ProjMgmt/Work_item/query/Work_item_relation_work_item)|work_item_relation_work_item|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[已归档(archived)](module/ProjMgmt/Work_item/dataset/Archived)|archived|数据查询|否|||
|[缺陷工作项(bug)](module/ProjMgmt/Work_item/dataset/Bug)|bug|数据查询|否|||
|[缺陷状态分布表格(bug_state_group_grid)](module/ProjMgmt/Work_item/dataset/Bug_state_group_grid)|bug_state_group_grid|数据查询|否|||
|[变更父工作项(change_parent)](module/ProjMgmt/Work_item/dataset/Change_parent)|change_parent|数据查询|否|||
|[选择子工作项(choose_child)](module/ProjMgmt/Work_item/dataset/Choose_child)|choose_child|数据查询|否|||
|[评论通知负责人(comment_notify_assignee)](module/ProjMgmt/Work_item/dataset/Comment_notify_assignee)|comment_notify_assignee|数据查询|否|||
|[普通工作项(common)](module/ProjMgmt/Work_item/dataset/Common)|common|数据查询|否|||
|[普通状态缺陷(common_bug)](module/ProjMgmt/Work_item/dataset/Common_bug)|common_bug|数据查询|否|||
|[数据集(DEFAULT)](module/ProjMgmt/Work_item/dataset/Default)|DEFAULT|数据查询|是|||
|[已删除(deleted)](module/ProjMgmt/Work_item/dataset/Deleted)|deleted|数据查询|否|||
|[需求关联工作项(idea_relation_work_item)](module/ProjMgmt/Work_item/dataset/Idea_relation_work_item)|idea_relation_work_item|数据查询|否|||
|[需求树表数据查询(idea_tree_grid)](module/ProjMgmt/Work_item/dataset/Idea_tree_grid)|idea_tree_grid|[实体逻辑](module/ProjMgmt/Work_item/logic/idea_tree_grid)|否|||
|[里程碑(milestone)](module/ProjMgmt/Work_item/dataset/Milestone)|milestone|数据查询|否|||
|[我负责的(my_assignee)](module/ProjMgmt/Work_item/dataset/My_assignee)|my_assignee|数据查询|否|||
|[我负责的（统计）(my_assignee_count)](module/ProjMgmt/Work_item/dataset/My_assignee_count)|my_assignee_count|数据查询|否|||
|[我关注的(my_attention)](module/ProjMgmt/Work_item/dataset/My_attention)|my_attention|数据查询|否|||
|[我创建的(my_created)](module/ProjMgmt/Work_item/dataset/My_created)|my_created|数据查询|否|||
|[过滤器默认查询(my_filter)](module/ProjMgmt/Work_item/dataset/My_filter)|my_filter|数据查询|否|||
|[我待完成的(my_todo)](module/ProjMgmt/Work_item/dataset/My_todo)|my_todo|数据查询|否|||
|[排除缺陷类型的工作项(no_bug_work_item)](module/ProjMgmt/Work_item/dataset/No_bug_work_item)|no_bug_work_item|数据查询|否|||
|[正常状态(normal)](module/ProjMgmt/Work_item/dataset/Normal)|normal|数据查询|否|||
|[未关联的缺陷(not_exsists_bug_relation)](module/ProjMgmt/Work_item/dataset/Not_exsists_bug_relation)|not_exsists_bug_relation|数据查询|否|||
|[未关联的工作项(not_exsists_relation)](module/ProjMgmt/Work_item/dataset/Not_exsists_relation)|not_exsists_relation|数据查询|否|||
|[未关联工作项且不为缺陷(notbug_exsists_relation)](module/ProjMgmt/Work_item/dataset/Notbug_exsists_relation)|notbug_exsists_relation|数据查询|否|||
|[项目概览-工作项统计(overview_chart)](module/ProjMgmt/Work_item/dataset/Overview_chart)|overview_chart|数据查询|否|||
|[规划工作项(plan)](module/ProjMgmt/Work_item/dataset/Plan)|plan|数据查询|否|||
|[需求分组过滤(property_distribution)](module/ProjMgmt/Work_item/dataset/Property_distribution)|property_distribution|数据查询|否|||
|[最近浏览(recent_work_item)](module/ProjMgmt/Work_item/dataset/Recent_work_item)|recent_work_item|数据查询|否|||
|[需求工作项(requirement)](module/ProjMgmt/Work_item/dataset/Requirement)|requirement|数据查询|否|||
|[执行用例关联缺陷(run_relation_bug)](module/ProjMgmt/Work_item/dataset/Run_relation_bug)|run_relation_bug|数据查询|否|||
|[执行用例关联缺陷(run_relation_work_item)](module/ProjMgmt/Work_item/dataset/Run_relation_work_item)|run_relation_work_item|数据查询|否|||
|[测试用例关联缺陷(test_case_relation_bug)](module/ProjMgmt/Work_item/dataset/Test_case_relation_bug)|test_case_relation_bug|数据查询|否|||
|[测试用例关联工作项(test_case_relation_work_item)](module/ProjMgmt/Work_item/dataset/Test_case_relation_work_item)|test_case_relation_work_item|数据查询|否|||
|[测试计划关联缺陷(test_plan_relation_bug)](module/ProjMgmt/Work_item/dataset/Test_plan_relation_bug)|test_plan_relation_bug|数据查询|否|||
|[工单关联工作项(ticket_relation_work_item)](module/ProjMgmt/Work_item/dataset/Ticket_relation_work_item)|ticket_relation_work_item|数据查询|否|||
|[顶层工作项(top)](module/ProjMgmt/Work_item/dataset/Top)|top|数据查询|否|||
|[树表查询(tree_grid)](module/ProjMgmt/Work_item/dataset/Tree_grid)|tree_grid|数据查询|否|||
|[树状或平铺表格数据查询(tree_tile_grid_query)](module/ProjMgmt/Work_item/dataset/Tree_tile_grid_query)|tree_tile_grid_query|[实体逻辑](module/ProjMgmt/Work_item/logic/tree_tile_grid_query)|否|||
|[项目集工作下的工作项(under_work)](module/ProjMgmt/Work_item/dataset/Under_work)|under_work|数据查询|否|||
|[工作项关联工作项(work_item_relation_work_item)](module/ProjMgmt/Work_item/dataset/Work_item_relation_work_item)|work_item_relation_work_item|数据查询|否|||


## 数据权限

##### 操作用户(写) :id=Work_item-USER_W

<p class="panel-title"><b>数据范围</b></p>


<p class="panel-title"><b>数据能力</b></p>

* `CREATE`




## 消息通知

|    名称   | 代码名       |  消息队列   |  消息模板 |  通知目标     |  备注  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[工作项分配负责人通知](module/ProjMgmt/Work_item/notify/allocation_notify)|allocation_notify|[默认消息队列](index/notify_index)|[工作项通知模板(分配负责人)](index/notify_index#work_item_assignee)|负责人 ||
|[工作项负责人变更通知](module/ProjMgmt/Work_item/notify/assignee_onchange_notify)|assignee_onchange_notify|[默认消息队列](index/notify_index)|[工作项通知模板(变更负责人)](index/notify_index#work_item_assignee_onchange)|关注人员 ||
|[工作项取消负责人通知](module/ProjMgmt/Work_item/notify/cancel_assignee_notify)|cancel_assignee_notify|[默认消息队列](index/notify_index)|[工作项通知模板(取消分配负责人)](index/notify_index#work_item_assignee_cancel)|负责人 ||
|[工作项创建时分配通知](module/ProjMgmt/Work_item/notify/create_notify)|create_notify|[默认消息队列](index/notify_index)|[工作项通知模板(分配负责人)](index/notify_index#work_item_assignee)|负责人 ||
|[工作项归档/激活通知](module/ProjMgmt/Work_item/notify/is_archived_notify)|is_archived_notify|[默认消息队列](index/notify_index)|[工作项通知模板(归档/激活工作项)](index/notify_index#work_item_archive)|负责人 关注对象 ||
|[工作项删除/恢复通知](module/ProjMgmt/Work_item/notify/is_deleted_notify)|is_deleted_notify|[默认消息队列](index/notify_index)|[工作项通知模板(删除/恢复工作项)](index/notify_index#work_item_remove)|负责人 关注人员 ||
|[工作项状态变换通知](module/ProjMgmt/Work_item/notify/state_notify)|state_notify|[默认消息队列](index/notify_index)|[工作项通知模板（状态变更）](index/notify_index#work_item_state_onchange)|负责人 关注人员 ||


## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_IDENTIFIER_LIKE|编号|LIKE|
|N_IS_ARCHIVED_EQ|是否已归档|EQ|
|N_TITLE_LIKE|标题|LIKE|
|N_IS_DELETED_EQ|是否已删除|EQ|
|N_STATE_EQ|状态|EQ|
|N_STATE_NOTEQ|状态|NOTEQ|
|N_STATE_NOTIN|状态|NOTIN|
|N_PRIORITY_EQ|优先级|EQ|
|N_BACKLOG_TYPE_EQ|需求类型|EQ|
|N_BACKLOG_FROM_EQ|需求来源|EQ|
|N_REAPPEAR_PROBABILITY_EQ|复现概率|EQ|
|N_ASSIGNEE_ID_EQ|负责人标识|EQ|
|N_SEVERITY_EQ|严重程度|EQ|
|N_RISK_EQ|风险|EQ|
|N_WORK_ITEM_TYPE_GROUP_EQ|工作项类型分组|EQ|
|N_JOB_TYPE_EQ|任务类别|EQ|
|N_SHOW_IDENTIFIER_LIKE|编号|LIKE|
|N_ATTENTIONS_EXISTS__N_USER_ID_EQ|关注|EXISTS|
|N_ID_EQ|标识|EQ|
|N_ID_EXISTS__N_ID_EQ|标识|EXISTS|
|N_ID_IN|标识|IN|
|N_ID_NOTEQ|标识|NOTEQ|
|N_CREATE_MAN_EQ|建立人|EQ|
|N_PROJECT_ID_EQ|项目标识|EQ|
|N_WORK_ITEM_TYPE_ID_EQ|工作项类型|EQ|
|N_WORK_ITEM_TYPE_ID_LIKE|工作项类型|LIKE|
|N_PROJECT_NAME_EQ|所属项目|EQ|
|N_PROJECT_NAME_LIKE|所属项目|LIKE|
|N_WORK_ITEM_TYPE_NAME_EQ|工作项类型|EQ|
|N_WORK_ITEM_TYPE_NAME_LIKE|工作项类型|LIKE|
|N_PID_EQ|父标识|EQ|
|N_PTITLE_EQ|父工作项|EQ|
|N_PTITLE_LIKE|父工作项|LIKE|
|N_SPRINT_ID_EQ|迭代标识|EQ|
|N_SPRINT_ID_ISNULL|迭代标识|ISNULL|
|N_VERSION_ID_EQ|项目发布标识|EQ|
|N_BOARD_ID_EQ|看板标识|EQ|
|N_ENTRY_ID_EQ|看板栏标识|EQ|
|N_SWIMLANE_ID_EQ|泳道标识|EQ|
|N_ENTRY_NAME_EQ|看板栏名称|EQ|
|N_ENTRY_NAME_LIKE|看板栏名称|LIKE|
|N_BOARD_NAME_EQ|名称|EQ|
|N_BOARD_NAME_LIKE|名称|LIKE|
|N_TOP_ID_EQ|顶级工作项标识|EQ|
|N_TOP_ID_IN|顶级工作项标识|IN|
|N_TOP_TITLE_EQ|顶级工作项标题|EQ|
|N_TOP_TITLE_LIKE|顶级工作项标题|LIKE|
|N_VERSION_NAME_EQ|发布名称|EQ|
|N_VERSION_NAME_LIKE|发布名称|LIKE|
|N_SPRINT_NAME_EQ|迭代名称|EQ|
|N_SPRINT_NAME_LIKE|迭代名称|LIKE|
|N_RELEASE_ID_EQ|项目发布标识|EQ|


## 导入模式
* 工作项导入

|编号|标题|工作项类型|状态|负责人|开始时间|结束时间|优先级|发布名称|需求类型|需求来源|标签|描述|任务类别|严重程度|复现概率|迭代|
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |
* 工作项缺陷导入

|编号|标题|状态|负责人标识|开始时间|结束时间|关注|剩余工时|预估工时|优先级|严重程度|迭代标识|复现概率|描述|标签|项目发布标识|项目标识|
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |
* 工作项需求导入

|编号|标题|工作项类型|状态|负责人标识|开始时间|结束时间|关注|剩余工时|预估工时|优先级|发布|风险|需求类型|需求来源|标签|描述|迭代|项目|
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |



## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 复制编号 | copy_identifier | 复制编号 |单项数据|用户自定义|否|无||
| 移入迭代 | shift_in_sprint | 移入迭代 |多项数据（主键）|<details><summary>后台调用</summary>[Shift_in_sprint](#行为)|是|引用视图或树节点||
| 表格 | change_grid_mode | 表格 |无数据|用户自定义|否|无||
| 新建缺陷（scrum） | new_scrum_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 关联工作项 | relation_work_item | 关联工作项 |单项数据（主键）|<details><summary>后台调用</summary>[Others_relation_work_item](#行为)|是|引用视图或树节点||
| 新建史诗（kanban） | new_kanban_epic | 新建史诗 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 新建缺陷（测试计划关联） | new_test_plan_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|引用视图或树节点||
| 切换显示模式 | switch_show_mode | 切换模式 |无数据|用户自定义|否|无||
| 新建任务（waterfall） | new_waterfall_task | 新建任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 变更父工作项 | change_parent | 变更父工作项 |单项数据（主键）|<details><summary>后台调用</summary>[Change_parent](#行为)|是|引用视图或树节点||
| 修改时间 | change_time | 修改时间 |多项数据（主键）|<details><summary>后台调用</summary>[Change_time](#行为)|是|引用视图或树节点||
| 查看工时明细 | check_workload_detail | 查看工时明细 |无数据|用户自定义|否|无||
| 移入发布 | shift_in_version | 移入发布 |多项数据（主键）|<details><summary>后台调用</summary>[Shift_in_version](#行为)|是|引用视图或树节点||
| 新建工作项（测试） | new_work_item_test | 新建工作项 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_itemtest_follow_edit_view)</details>|否|无||
| 新建史诗（scrum） | new_scrum_epic | 新建史诗 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 归档 | archive | 归档 |多项数据（主键）|<details><summary>后台调用</summary>[Archive](#行为)|是|引用视图或树节点||
| 新建用户故事（kanban） | new_kanban_story | 新建用户故事 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 甘特删除行测试 | removerow_gantt | 删除 |单项数据|用户自定义|否|无||
| 变更状态 | change_state | 变更状态 |多项数据（主键）|<details><summary>后台调用</summary>[Change_state](#行为)|是|引用视图或树节点||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义|否|无||
| 新建特性（scrum） | new_scrum_feature | 新建特性 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 新建执行后（建立关联数据) | after_new_test_plan_bug | 新建缺陷执行后（测试计划关联) |单项数据（主键）|用户自定义|否|引用视图或树节点||
| 添加控件显示 | show_add_input | 添加工作项 |无数据|用户自定义|否|无||
| 激活 | activate | 激活 |多项数据（主键）|<details><summary>后台调用</summary>[Activate](#行为)|是|引用视图或树节点||
| 新建需求（waterfall） | new_waterfall_requirement | 新建需求 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 新建计划（waterfall） | new_waterfall_plan | 新建计划 |单项数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|引用视图或树节点||
| 分配负责人 | change_assignee | 分配负责人 |多项数据（主键）|<details><summary>后台调用</summary>[Change_assignee](#行为)|是|引用视图或树节点||
| 新建任务（scrum） | new_scrum_task | 新建任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 复制链接 | copy_link | 复制链接 |单项数据|用户自定义|否|无||
| 新建用户故事（scrum） | new_scrum_story | 新建用户故事 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 新建里程碑（waterfall） | new_waterfall_milestone | 新建里程碑 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 取消关联 | del_relation | 取消关联 |单项数据（主键）|<details><summary>后台调用</summary>[Del_relation](#行为)|是|引用视图或树节点||
| 甘特新建行测试 | newrow_gantt | 新建 |单项数据|用户自定义|否|无||
| 添加附件 | add_attachments | 添加附件 |无数据|用户自定义|否|无||
| 添加实际工时 | add_actual_workload | 添加实际工时 |无数据|<details><summary>打开视图或向导（模态）</summary>[登记工时](app/view/workloadquick_create_view_work_item)</details>|否|引用视图或树节点||
| 新建工作项（无参数） | new_work_item | 新建工作项 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 添加缺陷（执行用例） | run_add_bug | 添加缺陷 |无数据|<details><summary>后台调用</summary>[Others_relation_work_item](#行为)|是|引用视图或树节点||
| 删除 | delete | 删除 |多项数据（主键）|<details><summary>后台调用</summary>[Delete](#行为)|是|引用视图或树节点||
| 新建阶段（waterfall） | new_waterfall_stage | 新建阶段 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 复制工作项 | copy | 复制 |多项数据（主键）|<details><summary>后台调用</summary>[Copy](#行为)|是|引用视图或树节点||
| 新建任务（kanban）（工具栏） | new_kanban_task_toolbar | 新建工作项 |无数据|用户自定义|否|无||
| 新建缺陷（kanban） | new_kanban_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 新建行测试 | newrow_test | 新建行测试 |单项数据|用户自定义|否|无||
| 移入看板 | shift_in_kanban | 移入看板 |单项数据（主键）|用户自定义|否|无||
| 移动 | move | 移动 |多项数据（主键）|<details><summary>后台调用</summary>[Move_work_item](#行为)|是|引用视图或树节点||
| 恢复 | recover | 恢复 |多项数据（主键）|<details><summary>后台调用</summary>[Recover](#行为)|是|引用视图或树节点||
| 新建事务（kanban） | new_kanban_issue | 新建事务 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 新建缺陷（waterfall） | new_waterfall_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 树状 | change_tree_mode | 树状 |无数据|用户自定义|否|无||
| 新建任务（kanban） | new_kanban_task | 新建任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||
| 新建缺陷（kanban）（工具栏） | new_kanban_bug_toolbar | 新建工作项 |无数据|用户自定义|否|无||
| 新建用户故事（kanban）（工具栏） | new_kanban_story_toolbar | 新建工作项 |无数据|用户自定义|否|无||
| 取消关联（子工作项） | child_del_relation | 取消关联 |单项数据（主键）|<details><summary>后台调用</summary>[Child_del_relation](#行为)|是|引用视图或树节点||
| 规划工作项 | plan_work_item | 规划工作项 |无数据|<details><summary>后台调用</summary>[Plan_work_item](#行为)|是|引用视图或树节点||
| null | toolbar_GridViewtoolbar_deuiaction1_click | 工作项 |单项数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_itemtest_follow_edit_view)</details>|否|无||
| 删除计划 | remove_waterfall_plan | 删除计划 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)|是|引用树节点父节点||
| 新建特性（kanban） | new_kanban_feature | 新建特性 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_itemquick_create_view)</details>|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[计算表格列行为状态](module/ProjMgmt/Work_item/uilogic/calc_column_action_state)|calc_column_action_state|
|[添加子工作项值变更](module/ProjMgmt/Work_item/uilogic/add_child_change)|add_child_change|
|[关注人员更新](module/ProjMgmt/Work_item/uilogic/attention_personnel_update)|attention_personnel_update|
|[甘特新建行测试](module/ProjMgmt/Work_item/uilogic/newrow_gantt)|newrow_gantt|
|[切换表格模式](module/ProjMgmt/Work_item/uilogic/change_grid_mode)|change_grid_mode|
|[建立关联数据](module/ProjMgmt/Work_item/uilogic/create_relation)|create_relation|
|[获取工作项总条数](module/ProjMgmt/Work_item/uilogic/get_work_item_total)|get_work_item_total|
|[切换显示模式](module/ProjMgmt/Work_item/uilogic/switch_show_mode)|switch_show_mode|
|[新建任务（kanban）（工具栏）](module/ProjMgmt/Work_item/uilogic/new_kanban_task_toolbar)|new_kanban_task_toolbar|
|[新建行测试](module/ProjMgmt/Work_item/uilogic/newrow_test)|newrow_test|
|[查看工时明细](module/ProjMgmt/Work_item/uilogic/check_workload_detail)|check_workload_detail|
|[选择下拉框区域展示](module/ProjMgmt/Work_item/uilogic/show_choose_area)|show_choose_area|
|[切换树模式](module/ProjMgmt/Work_item/uilogic/change_tree_mode)|change_tree_mode|
|[建立双向关联数据](module/ProjMgmt/Work_item/uilogic/create_double_relation)|create_double_relation|
|[设置表单状态](module/ProjMgmt/Work_item/uilogic/set_form_readonly)|set_form_readonly|
|[触发计数器刷新](module/ProjMgmt/Work_item/uilogic/refresh_counter)|refresh_counter|
|[甘特删除行测试](module/ProjMgmt/Work_item/uilogic/removerow_gantt)|removerow_gantt|
|[控制评论按钮隐藏](module/ProjMgmt/Work_item/uilogic/comment_icon_hidden)|comment_icon_hidden|
|[新建缺陷（kanban）（工具栏）](module/ProjMgmt/Work_item/uilogic/new_kanban_bug_toolbar)|new_kanban_bug_toolbar|
|[关联工作项值变更](module/ProjMgmt/Work_item/uilogic/relation_work_item_change)|relation_work_item_change|
|[控制评论按钮显示](module/ProjMgmt/Work_item/uilogic/comment_icon_show)|comment_icon_show|
|[新建用户故事（kanban）（工具栏）](module/ProjMgmt/Work_item/uilogic/new_kanban_story_toolbar)|new_kanban_story_toolbar|
|[添加附件数据](module/ProjMgmt/Work_item/uilogic/add_attachment)|add_attachment|
|[子工作项刷新计数器](module/ProjMgmt/Work_item/uilogic/child_refresh_counter)|child_refresh_counter|
|[计算父工作项类型](module/ProjMgmt/Work_item/uilogic/calc_parent_work_item_type)|calc_parent_work_item_type|
