# 工作项(work_item)  <!-- {docsify-ignore-all} -->


项目管理中的基本单元，可包含不同类型的工作项如任务、需求、缺陷等。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|实际结束时间|ACTUAL_END_AT|日期时间型||是||
|实际开始时间|ACTUAL_START_AT|日期时间型||是||
|实际工时|ACTUAL_WORKLOAD|数值||是||
|负责人|ASSIGNEE_ID|外键值|100|是||
|负责人|ASSIGNEE_NAME|外键值文本|100|是||
|附件|ATTACHMENTS|一对多关系数据集合|1048576|是||
|关注|ATTENTIONS|一对多关系数据集合|1048576|是||
|关注人|ATTENTIONS_IMP|文本，可指定长度|100|是||
|关注数|ATTENTION_COUNT|文本，可指定长度|200|是||
|需求来源|BACKLOG_FROM|单项选择(文本值)|60|是||
|需求类型|BACKLOG_TYPE|单项选择(文本值)|60|是||
|看板标识|BOARD_ID|外键值|100|是||
|看板名称|BOARD_NAME|外键值文本|200|是||
|选择版本标识|CHOOSE_VERSION_ID|文本，可指定长度|100|是||
|选择版本名称|CHOOSE_VERSION_NAME|文本，可指定长度|100|是||
|评论数|COMMENT_COUNT|文本，可指定长度|200|是||
|完成时间|COMPLETED_AT|日期时间型||是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|当前版本标识|CUR_VERSION_ID|文本，可指定长度|100|是||
|当前版本名称|CUR_VERSION_NAME|文本，可指定长度|100|是||
|交付物|DELIVERABLE|一对多关系数据集合|1048576|是||
|交付物|DELIVERABLE_IMP|文本，可指定长度|100|是||
|依赖|DEPENDENCIES|一对多关系数据集合|1048576|是||
|描述|DESCRIPTION|长文本，没有长度限制|1048576|是||
|截止时间|END_AT|日期型||是||
|看板栏标识|ENTRY_ID|外键值|100|是||
|看板栏名称|ENTRY_NAME|外键值文本|200|是||
|所在看板栏位置|ENTRY_POSITION|整型||是||
|看板栏状态|ENTRY_STATUS|文本，可指定长度|100|是||
|预估工时|ESTIMATED_WORKLOAD|数值||是||
|执行人|EXECUTORS|一对多关系数据集合|1048576|是||
|完成人|FINISHER|文本，可指定长度|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_work_item_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|是否已删除|IS_DELETED|是否逻辑||是||
|是否叶子节点|IS_LEAF|是否逻辑||是||
|是否超时|IS_OVERTIME|整型||是||
|任务类别|JOB_TYPE|单项选择(文本值)|60|是||
|多人任务|MULTIPLE_PEOPLE|是否逻辑||是||
|逾期天数|OVERDUE_TIME|文本，可指定长度|200|是||
|父标识|PID|外键值|100|是||
|优先级|PRIORITY|单项选择(文本值)|100|是||
|项目|PROJECT_ID|外键值|100|否||
|项目标识|PROJECT_IDENTIFIER|外键值附加数据|15|是||
|项目是否归档|PROJECT_IS_ARCHIVED|外键值附加数据||是||
|项目是否删除|PROJECT_IS_DELETED|外键值附加数据||是||
|所属项目|PROJECT_NAME|外键值文本|200|是||
|项目类型|PROJECT_TYPE|[外键值附加数据](index/dictionary_index#project_type "项目类型")|60|是||
|父工作项|PTITLE|外键值文本|500|是||
|父工作项类型|P_WORK_ITEM_TYPE_ID|外键值附加数据|100|是||
|复现概率|REAPPEAR_PROBABILITY|单项选择(文本值)|60|是||
|最近创建日期|RECENT_CREATE_DAYS|整型||是||
|关联产品需求数|RELATION_TOTAL_IDEA|数值||是||
|关联测试用例数|RELATION_TOTAL_TEST_CASE|数值||是||
|关联工单数|RELATION_TOTAL_TICKET|数值||是||
|关联工作项数|RELATION_TOTAL_WORK_ITEM|数值||是||
|项目发布标识|RELEASE_ID|外键值|100|是||
|项目发布名称|RELEASE_NAME|外键值文本|200|是||
|发布阶段|RELEASE_STATUS|外键值附加数据|60|是||
|剩余工时|REMAINING_WORKLOAD|数值||是||
|统计日期字段|REP_DATE|日期型||是||
|报表分组属性|REP_GROUP_VALUE|文本，可指定长度|100|是||
|统计数|REP_NUM|数值||是||
|报表百分值|REP_PERCENT_VALUE|浮点||是||
|报表值1|REP_VALUE_1|整型||是||
|报表值2|REP_VALUE_2|整型||是||
|报表值3|REP_VALUE_3|整型||是||
|风险|RISK|单项选择(文本值)|60|是||
|序号|SEQUENCE|数值||是||
|严重程度|SEVERITY|单项选择(文本值)|60|是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|解决办法|SOLUTION_WAY|长文本，长度1000|2000|是||
|迭代标识|SPRINT_ID|外键值|100|是||
|迭代名称|SPRINT_NAME|外键值文本|200|是||
|迭代状态|SPRINT_STATUS|[外键值附加数据](index/dictionary_index#sprint_status "迭代状态")|60|是||
|开始时间|START_AT|日期型||是||
|状态|STATE|外键值|100|否||
|工作项状态类型|STATE_TYPE|[外键值附加数据](index/dictionary_index#state_type "工作项状态类型")|60|是||
|泳道标识|SWIMLANE_ID|外键值|100|是||
|标签|TAGS|长文本，长度1000|2000|是||
|测试计划ID|TEST_PLAN_ID|文本，可指定长度|100|是||
|标题|TITLE|文本，可指定长度|500|否||
|顶级工作项标识|TOP_ID|外键值|100|是||
|顶级工作项标题|TOP_TITLE|外键值文本|500|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|工时进度|WORKLOAD_SCHEDULE|数值||是||
|原始状态|WORK_ITEM_ORIGIN_STATE|外键值附加数据|100|是||
|工作项下级类型|WORK_ITEM_SUB_TYPE|外键值附加数据|200|是||
|工作项类型分组|WORK_ITEM_TYPE_GROUP|[外键值附加数据](index/dictionary_index#work_item_type_group "工作项类型分组")|60|是||
|工作项类型|WORK_ITEM_TYPE_ID|外键值|100|否||
|工作项类型|WORK_ITEM_TYPE_NAME|外键值文本|200|是||
|工作项类型序号|WORK_ITEM_TYPE_SEQUENCE|外键值附加数据||是||


###### 索引

<el-row>
<el-tabs v-model="show_index">

<el-tab-pane label="WORK_ITEM" name="index_WORK_ITEM">

|    中文名col150 | 属性名称col200           | 包含属性col100 | 排序方向col100 | 索引长度col100 | 备注col600 |
| --------   |------------| -----  | -----  | :----: | -------- |
|是否已归档|IS_ARCHIVED|false|升序|-1||
|是否已删除|IS_DELETED|false|升序|-1||
|项目|PROJECT_ID|false|升序|-1||

</el-tab-pane>

</el-tabs>
</el-row>

###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="长文本" name="field_group_DEFGroup">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_work_item_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|标题|TITLE|文本，可指定长度|500|否||
|描述|DESCRIPTION|长文本，没有长度限制|1048576|是||
|工作项类型|WORK_ITEM_TYPE_ID|外键值|100|否||

</el-tab-pane>
<el-tab-pane label="高级搜索" name="field_group_advanced_search">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|所属项目|PROJECT_NAME|外键值文本|200|是||
|状态|STATE|外键值|100|否||
|标题|TITLE|文本，可指定长度|500|否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|项目|PROJECT_ID|外键值|100|否||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|项目标识|PROJECT_IDENTIFIER|外键值附加数据|15|是||
|工作项类型|WORK_ITEM_TYPE_ID|外键值|100|否||
|完成人|FINISHER|文本，可指定长度|100|是||

</el-tab-pane>
<el-tab-pane label="负责人" name="field_group_assignee">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|负责人|ASSIGNEE_ID|外键值|100|是||
|负责人|ASSIGNEE_NAME|外键值文本|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||

</el-tab-pane>
<el-tab-pane label="基线选择规划工作项" name="field_group_baseline_choose">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|工作项类型|WORK_ITEM_TYPE_ID|外键值|100|否||
|当前版本标识|CUR_VERSION_ID|文本，可指定长度|100|是||
|负责人|ASSIGNEE_ID|外键值|100|是||
|项目|PROJECT_ID|外键值|100|否||
|优先级|PRIORITY|单项选择(文本值)|100|是||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_work_item_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|标题|TITLE|文本，可指定长度|500|否||
|工作项类型|WORK_ITEM_TYPE_NAME|外键值文本|200|是||
|状态|STATE|外键值|100|否||
|负责人|ASSIGNEE_NAME|外键值文本|100|是||

</el-tab-pane>
<el-tab-pane label="BI查询属性组" name="field_group_bi_search_group">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|是否已删除|IS_DELETED|是否逻辑||是||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|完成时间|COMPLETED_AT|日期时间型||是||
|建立时间|CREATE_TIME|日期时间型||否||
|更新时间|UPDATE_TIME|日期时间型||否||
|开始时间|START_AT|日期型||是||
|截止时间|END_AT|日期型||是||
|标题|TITLE|文本，可指定长度|500|否||
|报表分组属性|REP_GROUP_VALUE|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|关注人|ATTENTIONS_IMP|文本，可指定长度|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_work_item_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|关联工单数|RELATION_TOTAL_TICKET|数值||是||
|关联工作项数|RELATION_TOTAL_WORK_ITEM|数值||是||
|工时进度|WORKLOAD_SCHEDULE|数值||是||
|剩余工时|REMAINING_WORKLOAD|数值||是||
|关联测试用例数|RELATION_TOTAL_TEST_CASE|数值||是||
|关联产品需求数|RELATION_TOTAL_IDEA|数值||是||
|项目类型|PROJECT_TYPE|[外键值附加数据](index/dictionary_index#project_type "项目类型")|60|是||
|所属项目|PROJECT_NAME|外键值文本|200|是||
|工作项类型|WORK_ITEM_TYPE_NAME|外键值文本|200|是||
|负责人|ASSIGNEE_NAME|外键值文本|100|是||
|工作项类型|WORK_ITEM_TYPE_ID|外键值|100|否||
|负责人|ASSIGNEE_ID|外键值|100|是||
|状态|STATE|外键值|100|否||
|项目|PROJECT_ID|外键值|100|否||
|任务类别|JOB_TYPE|单项选择(文本值)|60|是||
|需求来源|BACKLOG_FROM|单项选择(文本值)|60|是||
|复现概率|REAPPEAR_PROBABILITY|单项选择(文本值)|60|是||
|优先级|PRIORITY|单项选择(文本值)|100|是||
|需求类型|BACKLOG_TYPE|单项选择(文本值)|60|是||
|严重程度|SEVERITY|单项选择(文本值)|60|是||
|风险|RISK|单项选择(文本值)|60|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|工作项状态类型|STATE_TYPE|[外键值附加数据](index/dictionary_index#state_type "工作项状态类型")|60|是||
|迭代标识|SPRINT_ID|外键值|100|是||
|工作项类型分组|WORK_ITEM_TYPE_GROUP|[外键值附加数据](index/dictionary_index#work_item_type_group "工作项类型分组")|60|是||
|迭代名称|SPRINT_NAME|外键值文本|200|是||
|实际工时|ACTUAL_WORKLOAD|数值||是||
|预估工时|ESTIMATED_WORKLOAD|数值||是||
|项目发布名称|RELEASE_NAME|外键值文本|200|是||
|项目发布标识|RELEASE_ID|外键值|100|是||
|标签|TAGS|长文本，长度1000|2000|是||
|看板栏名称|ENTRY_NAME|外键值文本|200|是||
|看板栏标识|ENTRY_ID|外键值|100|是||
|原始状态|WORK_ITEM_ORIGIN_STATE|外键值附加数据|100|是||
|看板名称|BOARD_NAME|外键值文本|200|是||
|看板标识|BOARD_ID|外键值|100|是||
|项目是否删除|PROJECT_IS_DELETED|外键值附加数据||是||

</el-tab-pane>
<el-tab-pane label="子工作项" name="field_group_child">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|顶级工作项标识|TOP_ID|外键值|100|是||
|父标识|PID|外键值|100|是||
|项目|PROJECT_ID|外键值|100|否||

</el-tab-pane>
<el-tab-pane label="新建规划快照" name="field_group_create_plan_snapshot">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|当前版本标识|CUR_VERSION_ID|文本，可指定长度|100|是||

</el-tab-pane>
<el-tab-pane label="日期检查" name="field_group_date_check">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|开始时间|START_AT|日期型||是||
|截止时间|END_AT|日期型||是||

</el-tab-pane>
<el-tab-pane label="规划" name="field_group_plan">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|看板标识|BOARD_ID|外键值|100|是||
|项目是否归档|PROJECT_IS_ARCHIVED|外键值附加数据||是||
|项目是否删除|PROJECT_IS_DELETED|外键值附加数据||是||
|交付物|DELIVERABLE_IMP|文本，可指定长度|100|是||
|逾期天数|OVERDUE_TIME|文本，可指定长度|200|是||
|完成人|FINISHER|文本，可指定长度|100|是||
|实际结束时间|ACTUAL_END_AT|日期时间型||是||
|实际开始时间|ACTUAL_START_AT|日期时间型||是||
|多人任务|MULTIPLE_PEOPLE|是否逻辑||是||
|执行人|EXECUTORS|一对多关系数据集合|1048576|是||
|是否超时|IS_OVERTIME|整型||是||
|解决办法|SOLUTION_WAY|长文本，长度1000|2000|是||
|标签|TAGS|长文本，长度1000|2000|是||
|父工作项类型|P_WORK_ITEM_TYPE_ID|外键值附加数据|100|是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_work_item_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|关注|ATTENTIONS|一对多关系数据集合|1048576|是||
|原始状态|WORK_ITEM_ORIGIN_STATE|外键值附加数据|100|是||
|状态|STATE|外键值|100|否||
|发布阶段|RELEASE_STATUS|外键值附加数据|60|是||
|工作项状态类型|STATE_TYPE|[外键值附加数据](index/dictionary_index#state_type "工作项状态类型")|60|是||
|序号|SEQUENCE|数值||是||
|所在看板栏位置|ENTRY_POSITION|整型||是||
|统计日期字段|REP_DATE|日期型||是||
|截止时间|END_AT|日期型||是||
|报表值3|REP_VALUE_3|整型||是||
|最近创建日期|RECENT_CREATE_DAYS|整型||是||
|报表值2|REP_VALUE_2|整型||是||
|工作项类型序号|WORK_ITEM_TYPE_SEQUENCE|外键值附加数据||是||
|工作项类型|WORK_ITEM_TYPE_ID|外键值|100|否||
|工作项类型分组|WORK_ITEM_TYPE_GROUP|[外键值附加数据](index/dictionary_index#work_item_type_group "工作项类型分组")|60|是||
|工作项下级类型|WORK_ITEM_SUB_TYPE|外键值附加数据|200|是||
|顶级工作项标题|TOP_TITLE|外键值文本|500|是||
|顶级工作项标识|TOP_ID|外键值|100|是||
|测试计划ID|TEST_PLAN_ID|文本，可指定长度|100|是||
|泳道标识|SWIMLANE_ID|外键值|100|是||
|迭代标识|SPRINT_ID|外键值|100|是||
|报表值1|REP_VALUE_1|整型||是||
|报表百分值|REP_PERCENT_VALUE|浮点||是||
|报表分组属性|REP_GROUP_VALUE|文本，可指定长度|100|是||
|项目发布标识|RELEASE_ID|外键值|100|是||
|项目标识|PROJECT_IDENTIFIER|外键值附加数据|15|是||
|项目|PROJECT_ID|外键值|100|否||
|父标识|PID|外键值|100|是||
|是否叶子节点|IS_LEAF|是否逻辑||是||
|是否已删除|IS_DELETED|是否逻辑||是||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|看板栏状态|ENTRY_STATUS|文本，可指定长度|100|是||
|看板栏标识|ENTRY_ID|外键值|100|是||
|交付物|DELIVERABLE|一对多关系数据集合|1048576|是||
|当前版本名称|CUR_VERSION_NAME|文本，可指定长度|100|是||
|当前版本标识|CUR_VERSION_ID|文本，可指定长度|100|是||
|选择版本名称|CHOOSE_VERSION_NAME|文本，可指定长度|100|是||
|选择版本标识|CHOOSE_VERSION_ID|文本，可指定长度|100|是||
|关注人|ATTENTIONS_IMP|文本，可指定长度|100|是||
|负责人|ASSIGNEE_ID|外键值|100|是||
|统计数|REP_NUM|数值||是||
|看板栏名称|ENTRY_NAME|外键值文本|200|是||
|迭代状态|SPRINT_STATUS|[外键值附加数据](index/dictionary_index#sprint_status "迭代状态")|60|是||
|迭代名称|SPRINT_NAME|外键值文本|200|是||
|项目发布名称|RELEASE_NAME|外键值文本|200|是||
|剩余工时|REMAINING_WORKLOAD|数值||是||
|风险|RISK|单项选择(文本值)|60|是||
|建立时间|CREATE_TIME|日期时间型||否||
|严重程度|SEVERITY|单项选择(文本值)|60|是||
|开始时间|START_AT|日期型||是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|标题|TITLE|文本，可指定长度|500|否||
|需求来源|BACKLOG_FROM|单项选择(文本值)|60|是||
|任务类别|JOB_TYPE|单项选择(文本值)|60|是||
|附件|ATTACHMENTS|一对多关系数据集合|1048576|是||
|实际工时|ACTUAL_WORKLOAD|数值||是||
|项目类型|PROJECT_TYPE|[外键值附加数据](index/dictionary_index#project_type "项目类型")|60|是||
|完成时间|COMPLETED_AT|日期时间型||是||
|复现概率|REAPPEAR_PROBABILITY|单项选择(文本值)|60|是||
|需求类型|BACKLOG_TYPE|单项选择(文本值)|60|是||
|负责人|ASSIGNEE_NAME|外键值文本|100|是||
|优先级|PRIORITY|单项选择(文本值)|100|是||
|看板名称|BOARD_NAME|外键值文本|200|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|预估工时|ESTIMATED_WORKLOAD|数值||是||
|工时进度|WORKLOAD_SCHEDULE|数值||是||
|所属项目|PROJECT_NAME|外键值文本|200|是||
|工作项类型|WORK_ITEM_TYPE_NAME|外键值文本|200|是||
|父工作项|PTITLE|外键值文本|500|是||
|依赖|DEPENDENCIES|一对多关系数据集合|1048576|是||

</el-tab-pane>
<el-tab-pane label="资源分配" name="field_group_resource_assignment">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|负责人|ASSIGNEE_NAME|外键值文本|100|是||
|标题|TITLE|文本，可指定长度|500|否||
|项目标识|PROJECT_IDENTIFIER|外键值附加数据|15|是||
|项目类型|PROJECT_TYPE|[外键值附加数据](index/dictionary_index#project_type "项目类型")|60|是||
|所属项目|PROJECT_NAME|外键值文本|200|是||
|项目|PROJECT_ID|外键值|100|否||
|工作项类型|WORK_ITEM_TYPE_ID|外键值|100|否||
|工作项类型|WORK_ITEM_TYPE_NAME|外键值文本|200|是||
|截止时间|END_AT|日期型||是||
|开始时间|START_AT|日期型||是||
|状态|STATE|外键值|100|否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_work_item_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|负责人|ASSIGNEE_ID|外键值|100|是||
|剩余工时|REMAINING_WORKLOAD|数值||是||
|预估工时|ESTIMATED_WORKLOAD|数值||是||

</el-tab-pane>
<el-tab-pane label="通常属性组" name="field_group_usually">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|标题|TITLE|文本，可指定长度|500|否||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_work_item_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|是否已删除|IS_DELETED|是否逻辑||是||
|状态|STATE|外键值|100|否||
|工作项类型|WORK_ITEM_TYPE_ID|外键值|100|否||
|负责人|ASSIGNEE_ID|外键值|100|是||
|负责人|ASSIGNEE_NAME|外键值文本|100|是||
|优先级|PRIORITY|单项选择(文本值)|100|是||
|父标识|PID|外键值|100|是||
|顶级工作项标识|TOP_ID|外键值|100|是||
|项目|PROJECT_ID|外键值|100|否||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|父工作项|PTITLE|外键值文本|500|是||
|复现概率|REAPPEAR_PROBABILITY|单项选择(文本值)|60|是||
|严重程度|SEVERITY|单项选择(文本值)|60|是||
|建立时间|CREATE_TIME|日期时间型||否||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|所属项目|PROJECT_NAME|外键值文本|200|是||
|迭代标识|SPRINT_ID|外键值|100|是||
|需求类型|BACKLOG_TYPE|单项选择(文本值)|60|是||
|需求来源|BACKLOG_FROM|单项选择(文本值)|60|是||
|风险|RISK|单项选择(文本值)|60|是||
|迭代名称|SPRINT_NAME|外键值文本|200|是||
|当前版本标识|CUR_VERSION_ID|文本，可指定长度|100|是||
|截止时间|END_AT|日期型||是||
|开始时间|START_AT|日期型||是||
|工作项状态类型|STATE_TYPE|[外键值附加数据](index/dictionary_index#state_type "工作项状态类型")|60|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|是否超时|IS_OVERTIME|整型||是||
|多人任务|MULTIPLE_PEOPLE|是否逻辑||是||
|逾期天数|OVERDUE_TIME|文本，可指定长度|200|是||
|完成人|FINISHER|文本，可指定长度|100|是||
|实际结束时间|ACTUAL_END_AT|日期时间型||是||
|实际开始时间|ACTUAL_START_AT|日期时间型||是||

</el-tab-pane>
<el-tab-pane label="工作项类型" name="field_group_work_item_type_id">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|工作项类型|WORK_ITEM_TYPE_ID|外键值|100|否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||

</el-tab-pane>
<el-tab-pane label="工时日历" name="field_group_workload_calendar">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|项目|PROJECT_ID|外键值|100|否||
|实际工时|ACTUAL_WORKLOAD|数值||是||
|标题|TITLE|文本，可指定长度|500|否||
|工作项类型|WORK_ITEM_TYPE_ID|外键值|100|否||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_SPRINT_ALTERATION_WORK_ITEM_WORK_ITEM_ID](der/DER1N_SPRINT_ALTERATION_WORK_ITEM_WORK_ITEM_ID)|[迭代变更(SPRINT_ALTERATION)](module/ProjMgmt/sprint_alteration)|1:N关系||
|[DER1N_WORK_ITEM_WORK_ITEM_PID](der/DER1N_WORK_ITEM_WORK_ITEM_PID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|1:N关系||
|[DER1N_WORK_ITEM_WORK_ITEM_TOP_ID](der/DER1N_WORK_ITEM_WORK_ITEM_TOP_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|1:N关系||
|[DERCUSTOM_APP_VIEW_THEME_WORK_ITEM](der/DERCUSTOM_APP_VIEW_THEME_WORK_ITEM)|[应用视图主题(APP_VIEW_THEME)](module/ebsx/app_view_theme)|自定义关系||
|[DERCUSTOM_ATTENTION_WORK_ITEM_OWNER_ID](der/DERCUSTOM_ATTENTION_WORK_ITEM_OWNER_ID)|[关注(ATTENTION)](module/Base/attention)|自定义关系||
|[DERCUSTOM_COMMENT_WORK_ITEM_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_WORK_ITEM_PRINCIPAL_ID)|[评论(COMMENT)](module/Base/comment)|自定义关系||
|[DERCUSTOM_DEPENDENCY_WORK_ITEM](der/DERCUSTOM_DEPENDENCY_WORK_ITEM)|[依赖(DEPENDENCY)](module/Base/dependency)|自定义关系||
|[DERCUSTOM_EXECUTOR_WORK_ITEM_OWNER_ID](der/DERCUSTOM_EXECUTOR_WORK_ITEM_OWNER_ID)|[执行人(EXECUTOR)](module/Base/executor)|自定义关系||
|[DERCUSTOM_RECENT_WORK_ITEM](der/DERCUSTOM_RECENT_WORK_ITEM)|[最近访问(RECENT)](module/Base/recent)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_WORK_ITEM](der/DERCUSTOM_RELATION_TARGET_WORK_ITEM)|[关联(RELATION)](module/Base/relation)|自定义关系||
|[DERCUSTOM_RELATION_WORK_ITEM](der/DERCUSTOM_RELATION_WORK_ITEM)|[关联(RELATION)](module/Base/relation)|自定义关系||
|[DERCUSTOM_TRANSITION_HISTORY_WORK_ITEM](der/DERCUSTOM_TRANSITION_HISTORY_WORK_ITEM)|[流转记录(TRANSITION_HISTORY)](module/ProjMgmt/transition_history)|自定义关系||
|[DERCUSTOM_VERSION_WORK_ITEM](der/DERCUSTOM_VERSION_WORK_ITEM)|[版本(VERSION)](module/Base/version)|自定义关系||
|[DERCUSTOM_VIEW_THEME_SETTING_WORK_ITEM](der/DERCUSTOM_VIEW_THEME_SETTING_WORK_ITEM)|[视图主题设置(VIEW_THEME_SETTING)](module/Base/view_theme_setting)|自定义关系||
|[DERCUSTOM_WORK_ITEM_ATTACHMENT](der/DERCUSTOM_WORK_ITEM_ATTACHMENT)|[附件(ATTACHMENT)](module/Base/attachment)|自定义关系||
|[DERCUSTOM_WORK_ITEM_DELIVERABLE](der/DERCUSTOM_WORK_ITEM_DELIVERABLE)|[交付物(DELIVERABLE)](module/Base/deliverable)|自定义关系||
|[DERCUSTOM_WORK_ITEM_SEARCH_ATTACHMENT](der/DERCUSTOM_WORK_ITEM_SEARCH_ATTACHMENT)|[附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment)|自定义关系||
|[DERCUSTOM_WORK_ITEM_SEARCH_COMMENT](der/DERCUSTOM_WORK_ITEM_SEARCH_COMMENT)|[评论搜索(SEARCH_COMMENT)](module/Base/search_comment)|自定义关系||
|[DERCUSTOM_WORK_ITEM_WORKLOAD](der/DERCUSTOM_WORK_ITEM_WORKLOAD)|[工时(WORKLOAD)](module/Base/workload)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_WORK_ITEM_BOARD_BOARD_ID](der/DER1N_WORK_ITEM_BOARD_BOARD_ID)|[看板(BOARD)](module/ProjMgmt/board)|1:N关系||
|[DER1N_WORK_ITEM_ENTRY_ENTRY_ID](der/DER1N_WORK_ITEM_ENTRY_ENTRY_ID)|[看板栏(ENTRY)](module/ProjMgmt/entry)|1:N关系||
|[DER1N_WORK_ITEM_PROJECT_PROJECT_ID](der/DER1N_WORK_ITEM_PROJECT_PROJECT_ID)|[项目(PROJECT)](module/ProjMgmt/project)|1:N关系||
|[DER1N_WORK_ITEM_RELEASE_RELEASE_ID](der/DER1N_WORK_ITEM_RELEASE_RELEASE_ID)|[项目发布(RELEASE)](module/ProjMgmt/release)|1:N关系||
|[DER1N_WORK_ITEM_SPRINT_SPRINT_ID](der/DER1N_WORK_ITEM_SPRINT_SPRINT_ID)|[迭代(SPRINT)](module/ProjMgmt/sprint)|1:N关系||
|[DER1N_WORK_ITEM_SWIMLANE_SWIMLANE_ID](der/DER1N_WORK_ITEM_SWIMLANE_SWIMLANE_ID)|[泳道(SWIMLANE)](module/ProjMgmt/swimlane)|1:N关系||
|[DER1N_WORK_ITEM_USER_ASSIGNEE_ID](der/DER1N_WORK_ITEM_USER_ASSIGNEE_ID)|[企业用户(USER)](module/Base/user)|1:N关系||
|[DER1N_WORK_ITEM_WORK_ITEM_PID](der/DER1N_WORK_ITEM_WORK_ITEM_PID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|1:N关系||
|[DER1N_WORK_ITEM_WORK_ITEM_STATE_STATE](der/DER1N_WORK_ITEM_WORK_ITEM_STATE_STATE)|[工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/work_item_state)|1:N关系||
|[DER1N_WORK_ITEM_WORK_ITEM_TOP_ID](der/DER1N_WORK_ITEM_WORK_ITEM_TOP_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|1:N关系||
|[DER1N_WORK_ITEM_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID](der/DER1N_WORK_ITEM_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID)|[工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type)|1:N关系||
|[DERCUSTOM_WORK_ITEM_COMMON_FLOW](der/DERCUSTOM_WORK_ITEM_COMMON_FLOW)|[通用规则(COMMON_FLOW)](module/Base/common_flow)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#work_item_Create)|||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#work_item_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持|[附加操作](index/action_logic_index#work_item_GetDraft)|||
|GetTemp|GetTemp|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#work_item_Update)|||
|激活|activate|[实体处理逻辑](module/ProjMgmt/work_item/logic/activate "激活")|默认|不支持||||
|归档|archive|[实体处理逻辑](module/ProjMgmt/work_item/logic/archive "归档")|默认|不支持||||
|看板工作项移动位置|board_move_position|用户自定义|默认|不支持||[BoardMovePositionDEActionRuntime](index/plugin_index#UsrSFPlugin0618803950)||
|分配负责人|change_assignee|[实体处理逻辑](module/ProjMgmt/work_item/logic/change_assignee "分配负责人")|默认|不支持||||
|变更父工作项|change_parent|[实体处理逻辑](module/ProjMgmt/work_item/logic/change_parent "变更父工作项")|默认|不支持||||
|变更状态|change_state|[实体处理逻辑](module/ProjMgmt/work_item/logic/change_state "变更状态")|默认|不支持||||
|修改时间|change_time|[实体处理逻辑](module/ProjMgmt/work_item/logic/change_time "修改时间")|默认|不支持||||
|子工作项取消关联|child_del_relation|[实体处理逻辑](module/ProjMgmt/work_item/logic/child_del_relation "子工作项取消关联")|默认|不支持||||
|选择子工作项|choose_child|[实体处理逻辑](module/ProjMgmt/work_item/logic/choose_child "选择子工作项")|默认|不支持||||
|复制|copy|[实体处理逻辑](module/ProjMgmt/work_item/logic/copy_work_item "复制工作项")|默认|不支持||||
|首页待完成项计数器|count_my_todo|[实体处理逻辑](module/ProjMgmt/work_item/logic/count_my_todo "首页待完成项计数器")|默认|不支持||||
|新建规划快照|create_plan_snapshot|[实体处理逻辑](module/ProjMgmt/work_item/logic/create_plan_snapshot "新建规划快照")|默认|不支持||||
|自定义draft|custom_draft|[实体处理逻辑](module/ProjMgmt/work_item/logic/custom_draft "获取草稿")|默认|不支持||||
|删除|delete|[实体处理逻辑](module/ProjMgmt/work_item/logic/delete "删除")|默认|不支持||||
|填充BI报表默认值|fill_bi_form_default|[实体处理逻辑](module/ProjMgmt/work_item/logic/fill_bi_form_default "填充BI报表默认值")|默认|不支持||||
|填充待完成事项数量|fill_not_completed_num|[实体处理逻辑](module/ProjMgmt/work_item/logic/fill_not_completed_num "填充待完成事项数量")|默认|不支持||||
|填充状态的类型|fill_type_of_state|[实体处理逻辑](module/ProjMgmt/work_item/logic/fill_type_of_state "填充状态的类型")|默认|不支持||||
|修复版本|fix_commit|[实体处理逻辑](module/ProjMgmt/work_item/logic/fix_commit "修复版本数据")|默认|不支持||||
|获取关注人|get_attention|内置方法|默认|不支持||||
|获取基线名称|get_baseline_name|[实体处理逻辑](module/ProjMgmt/work_item/logic/get_baseline_name "获取基线名称")|默认|不支持||||
|移动排序工作项|move_order|用户自定义|默认|不支持||||
|移动工作项|move_work_item|[实体处理逻辑](module/ProjMgmt/work_item/logic/move_work_item "移动工作项")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/ProjMgmt/work_item/logic/nothing "无操作")|默认|不支持||||
|其他实体关联工作项|others_relation_work_item|[实体处理逻辑](module/ProjMgmt/work_item/logic/others_relation_work_item "其他实体关联工作项")|默认|不支持||||
|规划工作项|plan_work_item|[实体处理逻辑](module/ProjMgmt/work_item/logic/plan_work_item "规划工作项")|默认|不支持||||
|项目资源成员设置|project_resource_setting|[实体处理逻辑](module/ProjMgmt/work_item/logic/project_resource_setting "项目资源成员设置")|默认|不支持||||
|恢复|recover|[实体处理逻辑](module/ProjMgmt/work_item/logic/recover "恢复")|默认|不支持||||
|资源成员设置|resource_member_setting|[实体处理逻辑](module/ProjMgmt/work_item/logic/resource_member_setting "资源成员设置（全局）")|默认|不支持||||
|恢复到历史版本|restore_version|[实体处理逻辑](module/ProjMgmt/work_item/logic/restore_version "恢复历史版本")|默认|不支持||||
|选择看板后填充默认看板栏|set_default_entry|[实体处理逻辑](module/ProjMgmt/work_item/logic/set_default_entry "设置默认看板栏")|默认|不支持||||
|设置缺陷类型|set_type_bug|[实体处理逻辑](module/ProjMgmt/work_item/logic/set_type_bug "设置缺陷类型")|默认|不支持||||
|移入看板|shift_in_kanban|[实体处理逻辑](module/ProjMgmt/work_item/logic/shift_in_kanban "移入看板")|默认|不支持||||
|移入发布|shift_in_release|[实体处理逻辑](module/ProjMgmt/work_item/logic/shift_in_release "移入发布")|默认|不支持||||
|移入迭代|shift_in_sprint|[实体处理逻辑](module/ProjMgmt/work_item/logic/shift_in_sprint "移入迭代")|默认|不支持||||
|移出发布|shift_out_release|[实体处理逻辑](module/ProjMgmt/work_item/logic/shift_out_release "移出发布")|默认|不支持||||
|移出迭代|shift_out_sprint|[实体处理逻辑](module/ProjMgmt/work_item/logic/shift_out_sprint "移出迭代")|默认|不支持||||
|工作项关联分页计数器|work_item_re_counters|[实体处理逻辑](module/ProjMgmt/work_item/logic/work_item_re_counters "工作项关联分页计数器")|默认|不支持||||
|工作项只读用户判断|work_item_readonly_recognize|[实体处理逻辑](module/ProjMgmt/work_item/logic/get_project_member "获取项目成员")|默认|不支持||||
|获取测试计划对应项目|work_item_test_plan_project|[实体处理逻辑](module/ProjMgmt/work_item/logic/work_item_test_plan_project "获取测试计划对应项目")|默认|不支持||||
|获取工作项类型|work_item_type_id|[实体处理逻辑](module/ProjMgmt/work_item/logic/get_work_item_type "获取工作项类型")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[修复版本数据](module/ProjMgmt/work_item/logic/fix_commit)|fix_commit|无||修复初始版本数据|
|[修改时间](module/ProjMgmt/work_item/logic/change_time)|change_time|无||修改工作项的开始、结束时间|
|[其他实体关联工作项](module/ProjMgmt/work_item/logic/others_relation_work_item)|others_relation_work_item|无||工作项实体的关联操作，生成正向，反向关联数据|
|[分配负责人](module/ProjMgmt/work_item/logic/change_assignee)|change_assignee|无||工作项分配负责人|
|[删除](module/ProjMgmt/work_item/logic/delete)|delete|无||工作项数据的逻辑删除，修改产品的是否删除属性值；并递归删除所有下级工作项|
|[变更父工作项](module/ProjMgmt/work_item/logic/change_parent)|change_parent|无||变更父工作项|
|[变更状态](module/ProjMgmt/work_item/logic/change_state)|change_state|无||变更工作项状态|
|[团队速度](module/ProjMgmt/work_item/logic/project_team_speed)|project_team_speed|无||团队速度报表数据源|
|[基线规划工作项数据查询](module/ProjMgmt/work_item/logic/baseline_plan_work_item)|baseline_plan_work_item|无||基线规划工作项时，填充工作项当前版本名称|
|[填充BI报表默认值](module/ProjMgmt/work_item/logic/fill_bi_form_default)|fill_bi_form_default|无||填充BI报表默认值|
|[填充实际开始/完成时间](module/ProjMgmt/work_item/logic/fill_actual_time)|fill_actual_time|无|||
|[填充待完成事项数量](module/ProjMgmt/work_item/logic/fill_not_completed_num)|fill_not_completed_num|无||移动端工作台首页：获取待完成事项数量|
|[填充状态的类型](module/ProjMgmt/work_item/logic/fill_type_of_state)|fill_type_of_state|无||根据工作项状态的id获取对应的type值|
|[填充用例信息](module/ProjMgmt/work_item/logic/fill_test_case_info)|fill_test_case_info|无|||
|[填充表单](module/ProjMgmt/work_item/logic/fill_idea_form)|fill_idea_form|无|||
|[复制子工作项](module/ProjMgmt/work_item/logic/copy_child_work_item)|copy_child_work_item|无||复制工作项时，同时复制子工作项|
|[复制工作项](module/ProjMgmt/work_item/logic/copy_work_item)|copy_work_item|无||复制工作项到其他的同类型项目|
|[子工作项取消关联](module/ProjMgmt/work_item/logic/child_del_relation)|child_del_relation|无||工作项取消关联子工作项|
|[工作项关联分页计数器](module/ProjMgmt/work_item/logic/work_item_re_counters)|work_item_re_counters|无||计算分页下关联事项的条数|
|[工作项分布](module/ProjMgmt/work_item/logic/kanban_work_item_distribution)|kanban_work_item_distribution|无||工作项分布数据源|
|[工作项删除变更附加逻辑](module/ProjMgmt/work_item/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||工作项删除或恢复时触发相应的通知消息，判断并标记上级是否为叶子节点|
|[工作项完成趋势](module/ProjMgmt/work_item/logic/complete_trend)|complete_trend|无||工作项完成趋势|
|[工作项归档变更附加逻辑](module/ProjMgmt/work_item/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||工作项归档或激活时触发相应的通知消息，判断并标记上级是否为叶子节点|
|[工作项树状或平铺表格查询](module/ProjMgmt/work_item/logic/tree_or_tile_query)|tree_or_tile_query|无||工作项树状或平铺表格查询|
|[工作项状态变更附加逻辑](module/ProjMgmt/work_item/logic/state_onchange)|state_onchange|属性逻辑||工作项状态变更时触发相应的通知消息，同时生成流转记录|
|[工作项负责人变更附加逻辑](module/ProjMgmt/work_item/logic/assignee_onchange)|assignee_onchange|属性逻辑||工作项负责人变更时触发相应的通知消息|
|[归档](module/ProjMgmt/work_item/logic/archive)|archive|无||未归档工作项数据的归档处理，修改工作项的归档状态为已归档，递归所有下级工作项|
|[恢复](module/ProjMgmt/work_item/logic/recover)|recover|无||递归所有下级工作项，恢复已删除状态工作项数据，修改工作项的是否删除属性值，并恢复访问记录，标记上级为非叶子节点|
|[恢复历史版本](module/ProjMgmt/work_item/logic/restore_version)|restore_version|无||恢复工作项版本至某一指定历史版本|
|[成员负荷报告](module/ProjMgmt/work_item/logic/sprint_user_stat)|sprint_user_stat|无||成员负荷报告数据源|
|[新建工作项前校验父子工作项类型](module/ProjMgmt/work_item/logic/before_create_check_type)|before_create_check_type|无||新建工作项前校验父子工作项类型|
|[新建规划快照](module/ProjMgmt/work_item/logic/create_plan_snapshot)|create_plan_snapshot|无||新建规划快照|
|[无操作](module/ProjMgmt/work_item/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[汇聚实际工时](module/ProjMgmt/work_item/logic/aggregate_actual_workload)|aggregate_actual_workload|无||实际工时属性变更触发，未使用，暂时废弃|
|[汇聚实际开始时间](module/ProjMgmt/work_item/logic/aggregate_actual_start_at)|aggregate_actual_start_at|属性逻辑||实际开始时间变更时触发|
|[汇聚实际结束时间](module/ProjMgmt/work_item/logic/aggregate_actual_end_at)|aggregate_actual_end_at|属性逻辑||实际结束时间变更时触发|
|[汇聚开始时间](module/ProjMgmt/work_item/logic/aggregate_start_at)|aggregate_start_at|属性逻辑||开始时间变更时触发|
|[汇聚结束时间](module/ProjMgmt/work_item/logic/aggregate_end_at)|aggregate_end_at|属性逻辑||结束时间变更时触发|
|[汇聚预估工时](module/ProjMgmt/work_item/logic/aggregate_estimated_work_load)|aggregate_estimated_work_load|属性逻辑||预估工时属性变更触发|
|[激活](module/ProjMgmt/work_item/logic/activate)|activate|无||激活已归档状态工作项，工作项存在子工作项，递归激活所有下级工作项，标记上级为非叶子节点|
|[状态类型变更附加逻辑](module/ProjMgmt/work_item/logic/state_type_onchange)|state_type_onchange|属性逻辑||已完成时，填充完成时间|
|[生成最近访问](module/ProjMgmt/work_item/logic/create_recent)|create_recent|无||在用户对工作项数据进行了get或update操作时生成相应的访问记录|
|[移入发布](module/ProjMgmt/work_item/logic/shift_in_release)|shift_in_release|无||将工作项移入对应发布|
|[移入看板](module/ProjMgmt/work_item/logic/shift_in_kanban)|shift_in_kanban|无||将工作项移入对应看板|
|[移入迭代](module/ProjMgmt/work_item/logic/shift_in_sprint)|shift_in_sprint|无||将工作项移入对应迭代|
|[移出发布](module/ProjMgmt/work_item/logic/shift_out_release)|shift_out_release|无||工作项移出发布|
|[移出迭代](module/ProjMgmt/work_item/logic/shift_out_sprint)|shift_out_sprint|无||工作项移出迭代|
|[移动工作项](module/ProjMgmt/work_item/logic/move_work_item)|move_work_item|无||工作项移动至其他的同类型项目|
|[移动时子工作项的处理](module/ProjMgmt/work_item/logic/move_child_work_item)|move_child_work_item|无||父工作项移动; 子工作项也移动;并对Top_id进行更新|
|[缺陷年龄报告](module/ProjMgmt/work_item/logic/defect_age_report)|defect_age_report|无||报表缺陷年龄报告数据源<br>|
|[缺陷每日趋势](module/ProjMgmt/work_item/logic/defect_daily_trend)|defect_daily_trend|无||报表缺陷每日趋势数据源|
|[缺陷累计趋势查询](module/ProjMgmt/work_item/logic/defect_total_trend)|defect_total_trend|无||报表缺陷累计趋势报表数据源|
|[获取基线名称](module/ProjMgmt/work_item/logic/get_baseline_name)|get_baseline_name|无||工作项主视图获取所属基线|
|[获取工作项类型](module/ProjMgmt/work_item/logic/get_work_item_type)|get_work_item_type|无||链接跳转工作项主视图前，获取工作项类型|
|[获取测试计划对应项目](module/ProjMgmt/work_item/logic/work_item_test_plan_project)|work_item_test_plan_project|无||获取测试计划对应项目|
|[获取草稿](module/ProjMgmt/work_item/logic/custom_draft)|custom_draft|无|||
|[获取项目成员](module/ProjMgmt/work_item/logic/get_project_member)|get_project_member|无||获取项目成员信息，用于判断当前用户权限|
|[规划工作项](module/ProjMgmt/work_item/logic/plan_work_item)|plan_work_item|无||规划选中工作项至指定发布|
|[设置初始排序值](module/ProjMgmt/work_item/logic/set_sequence)|set_sequence|无||设置初始排序值|
|[设置执行人](module/ProjMgmt/work_item/logic/setting_executors)|setting_executors|无||设置执行人|
|[设置缺陷类型](module/ProjMgmt/work_item/logic/set_type_bug)|set_type_bug|无||设置当前工作项为缺陷类型|
|[设置默认看板栏](module/ProjMgmt/work_item/logic/set_default_entry)|set_default_entry|无||选择看板后，自动填充所属看板下的的首个看板栏|
|[资源分配](module/ProjMgmt/work_item/logic/resource_assignment)|resource_assignment|无||资源分配下的工作项|
|[资源成员设置（全局）](module/ProjMgmt/work_item/logic/resource_member_setting)|resource_member_setting|无||资源成员设置（全局），默认设置容量/工作日|
|[迭代变更触发逻辑](module/ProjMgmt/work_item/logic/sprint_id_onchange)|sprint_id_onchange|属性逻辑||迭代变更触发逻辑，记录迭代移入移出记录|
|[迭代成员工作项图表查询](module/ProjMgmt/work_item/logic/sprint_member_chart)|sprint_member_chart|无||迭代成员工作项图表查询|
|[迭代成员贡献度](module/ProjMgmt/work_item/logic/sprint_contribution)|sprint_contribution|无||迭代成员贡献度|
|[选择子工作项](module/ProjMgmt/work_item/logic/choose_child)|choose_child|无||选择子工作项|
|[需求年龄报告](module/ProjMgmt/work_item/logic/backlog_age_report)|backlog_age_report|无||报表需求年龄报告数据源|
|[需求数量燃尽图](module/ProjMgmt/work_item/logic/require_burn_out)|require_burn_out|无||需求数量燃尽图|
|[需求树状或平铺表格查询](module/ProjMgmt/work_item/logic/requirement_tree_or_tile_query)|requirement_tree_or_tile_query|无||需求树状或平铺表格查询|
|[需求每日趋势](module/ProjMgmt/work_item/logic/backlog_daily_trend)|backlog_daily_trend|无||报表需求每日趋势数据源|
|[需求累计流图](module/ProjMgmt/work_item/logic/backlog_accumulate_flow)|backlog_accumulate_flow|无||报表需求累计流图数据源|
|[项目资源成员设置](module/ProjMgmt/work_item/logic/project_resource_setting)|project_resource_setting|无||项目资源成员设置，默认设置容量/工作日|
|[首页待完成项计数器](module/ProjMgmt/work_item/logic/count_my_todo)|count_my_todo|无||首页待完成项计数器|

## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `工作项类型(WORK_ITEM_TYPE_ID)` 
* `状态(STATE)` 



> 控制属性未配置代码表，或者代码表未配置代码项

## 主状态迁移
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[Hybrid项目-事务-状态迁移](module/ProjMgmt/work_item/mslogic/hybrid_issue)|hybrid_issue||||
|[Hybrid项目-任务-状态迁移](module/ProjMgmt/work_item/mslogic/hybrid_task)|hybrid_task||||
|[Hybrid项目-史诗-状态迁移](module/ProjMgmt/work_item/mslogic/hybrid_epic)|hybrid_epic||||
|[Hybrid项目-特性-状态迁移](module/ProjMgmt/work_item/mslogic/hybrid_feature)|hybrid_feature||||
|[Hybrid项目-用户故事-状态迁移](module/ProjMgmt/work_item/mslogic/hybrid_story)|hybrid_story||||
|[Hybrid项目-缺陷-状态迁移](module/ProjMgmt/work_item/mslogic/hybrid_bug)|hybrid_bug||||
|[Hybrid项目-里程碑-状态迁移](module/ProjMgmt/work_item/mslogic/hybrid_milestone)|hybrid_milestone||||
|[Hybrid项目-阶段-状态迁移](module/ProjMgmt/work_item/mslogic/hybrid_stage)|hybrid_stage||||
|[Hybrid项目-需求-状态迁移](module/ProjMgmt/work_item/mslogic/hybrid_requirement)|hybrid_requirement||||
|[Kanban项目-事务-状态迁移](module/ProjMgmt/work_item/mslogic/kanban_issue)|kanban_issue||||
|[Kanban项目-任务-状态迁移](module/ProjMgmt/work_item/mslogic/kanban_task)|kanban_task||||
|[Kanban项目-史诗-状态迁移](module/ProjMgmt/work_item/mslogic/kanban_epic)|kanban_epic||||
|[Kanban项目-特性-状态迁移](module/ProjMgmt/work_item/mslogic/kanban_feature)|kanban_feature||||
|[Kanban项目-用户故事-状态迁移](module/ProjMgmt/work_item/mslogic/kanban_story)|kanban_story||||
|[Kanban项目-缺陷-状态迁移](module/ProjMgmt/work_item/mslogic/kanban_bug)|kanban_bug||||
|[Scrum项目-任务-状态迁移](module/ProjMgmt/work_item/mslogic/scrum_task)|scrum_task||||
|[Scrum项目-史诗-状态迁移](module/ProjMgmt/work_item/mslogic/scrum_epic)|scrum_epic||||
|[Scrum项目-特性-状态迁移](module/ProjMgmt/work_item/mslogic/scrum_feature)|scrum_feature||||
|[Scrum项目-用户故事-状态迁移](module/ProjMgmt/work_item/mslogic/scrum_story)|scrum_story||||
|[Scrum项目-缺陷-状态迁移](module/ProjMgmt/work_item/mslogic/scrum_bug)|scrum_bug||||
|[Waterfall项目-任务-状态迁移](module/ProjMgmt/work_item/mslogic/waterfall_task)|waterfall_task||||
|[Waterfall项目-缺陷-状态迁移](module/ProjMgmt/work_item/mslogic/waterfall_bug)|waterfall_bug||||
|[Waterfall项目-里程碑-状态迁移](module/ProjMgmt/work_item/mslogic/waterfall_milestone)|waterfall_milestone||||
|[Waterfall项目-阶段-状态迁移](module/ProjMgmt/work_item/mslogic/waterfall_stage)|waterfall_stage||||
|[Waterfall项目-需求-状态迁移](module/ProjMgmt/work_item/mslogic/waterfall_requirement)|waterfall_requirement||||

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|version|版本控制|[版本(VERSION)](module/Base/version)||
|审计|数据审计|[活动(ACTIVITY)](module/Base/activity)||
|存储扩展|动态存储|[扩展存储(EXTEND_STORAGE)](module/Base/extend_storage)||
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProjMgmt/work_item/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/work_item/query/View)|VIEW|否|否 |否 ||
|[高级搜索(advanced_search)](module/ProjMgmt/work_item/query/advanced_search)|advanced_search|否|否 |否 ||
|[已归档(archived)](module/ProjMgmt/work_item/query/archived)|archived|否|否 |否 ||
|[基线选择工作项(baseline_choose_work_item)](module/ProjMgmt/work_item/query/baseline_choose_work_item)|baseline_choose_work_item|否|否 |否 ||
|[BI反查(bi_detail)](module/ProjMgmt/work_item/query/bi_detail)|bi_detail|否|否 |否 ||
|[BI查询(bi_search)](module/ProjMgmt/work_item/query/bi_search)|bi_search|否|否 |否 ||
|[缺陷工作项(bug)](module/ProjMgmt/work_item/query/bug)|bug|否|否 |否 ||
|[缺陷工作项(bug_work_item)](module/ProjMgmt/work_item/query/bug_work_item)|bug_work_item|否|否 |否 ||
|[变更父工作项(change_parent)](module/ProjMgmt/work_item/query/change_parent)|change_parent|否|否 |否 ||
|[查询子工作项(child)](module/ProjMgmt/work_item/query/child)|child|否|否 |否 ||
|[选择工作项(choose)](module/ProjMgmt/work_item/query/choose)|choose|否|否 |否 ||
|[选择子工作项(choose_child)](module/ProjMgmt/work_item/query/choose_child)|choose_child|否|否 |否 ||
|[选择依赖(choose_dependency)](module/ProjMgmt/work_item/query/choose_dependency)|choose_dependency|否|否 |否 ||
|[选择父工作项(choose_parent_work_item)](module/ProjMgmt/work_item/query/choose_parent_work_item)|choose_parent_work_item|否|否 |否 ||
|[评论通知负责人(comment_notify_assignee)](module/ProjMgmt/work_item/query/comment_notify_assignee)|comment_notify_assignee|否|否 |否 ||
|[普通工作项(common)](module/ProjMgmt/work_item/query/common)|common|否|否 |否 |未删除|
|[普通状态缺陷(common_bug)](module/ProjMgmt/work_item/query/common_bug)|common_bug|否|否 |否 ||
|[已删除(deleted)](module/ProjMgmt/work_item/query/deleted)|deleted|否|否 |否 ||
|[需求关联工作项(idea_relation_work_item)](module/ProjMgmt/work_item/query/idea_relation_work_item)|idea_relation_work_item|否|否 |否 ||
|[看板工作项(kanban_work_item)](module/ProjMgmt/work_item/query/kanban_work_item)|kanban_work_item|否|否 |否 ||
|[里程碑(milestone)](module/ProjMgmt/work_item/query/milestone)|milestone|否|否 |否 ||
|[移动工作项(move_work_item)](module/ProjMgmt/work_item/query/move_work_item)|move_work_item|否|否 |否 ||
|[我负责的(my_assignee)](module/ProjMgmt/work_item/query/my_assignee)|my_assignee|否|否 |否 ||
|[我关注的(my_attention)](module/ProjMgmt/work_item/query/my_attention)|my_attention|否|否 |否 ||
|[我创建的(my_created)](module/ProjMgmt/work_item/query/my_created)|my_created|否|否 |否 ||
|[过滤器默认查询(my_filter)](module/ProjMgmt/work_item/query/my_filter)|my_filter|否|否 |否 ||
|[我的事项_缺陷数(my_summary_bug)](module/ProjMgmt/work_item/query/my_summary_bug)|my_summary_bug|否|否 |否 ||
|[我的事项_其他工作项数(my_summary_other)](module/ProjMgmt/work_item/query/my_summary_other)|my_summary_other|否|否 |否 ||
|[我的事项_任务数(my_summary_task)](module/ProjMgmt/work_item/query/my_summary_task)|my_summary_task|否|否 |否 ||
|[我待完成的(my_todo)](module/ProjMgmt/work_item/query/my_todo)|my_todo|否|否 |否 ||
|[排除缺陷类型的工作项(no_bug_work_item)](module/ProjMgmt/work_item/query/no_bug_work_item)|no_bug_work_item|否|否 |否 ||
|[未完成(no_completed)](module/ProjMgmt/work_item/query/no_completed)|no_completed|否|否 |否 ||
|[正常状态(normal)](module/ProjMgmt/work_item/query/normal)|normal|否|否 |否 ||
|[未关联的缺陷(not_exsists_bug_relation)](module/ProjMgmt/work_item/query/not_exsists_bug_relation)|not_exsists_bug_relation|否|否 |否 |仅缺陷|
|[未关联的工作项(not_exsists_relation)](module/ProjMgmt/work_item/query/not_exsists_relation)|not_exsists_relation|否|否 |否 ||
|[未关联且不为缺陷工作项(notbug_exsists_relation)](module/ProjMgmt/work_item/query/notbug_exsists_relation)|notbug_exsists_relation|否|否 |否 |未关联且不为缺陷工作项|
|[工作项通知负责人(notify_assignee)](module/ProjMgmt/work_item/query/notify_assignee)|notify_assignee|否|否 |否 ||
|[逾期工作项(overdue_work_item)](module/ProjMgmt/work_item/query/overdue_work_item)|overdue_work_item|否|否 |否 ||
|[项目概览-工作项统计(overview_chart)](module/ProjMgmt/work_item/query/overview_chart)|overview_chart|否|否 |否 ||
|[新建规划快照时查询工作项(plan_snapshot)](module/ProjMgmt/work_item/query/plan_snapshot)|plan_snapshot|否|否 |否 ||
|[项目资源分配(project_resource)](module/ProjMgmt/work_item/query/project_resource)|project_resource|否|否 |否 ||
|[公开(public)](module/ProjMgmt/work_item/query/public)|public|否|否 |否 ||
|[只读用户(reader)](module/ProjMgmt/work_item/query/reader)|reader|否|否 |否 ||
|[最近浏览(recent_work_item)](module/ProjMgmt/work_item/query/recent_work_item)|recent_work_item|否|否 |否 ||
|[关联工作项(relation_work_item)](module/ProjMgmt/work_item/query/relation_work_item)|relation_work_item|否|否 |否 ||
|[项目发布下工作项(release)](module/ProjMgmt/work_item/query/release)|release|否|否 |否 ||
|[项目发布规划工作项(release_plan)](module/ProjMgmt/work_item/query/release_plan)|release_plan|否|否 |否 ||
|[发布工作项统计(release_work_item_chart)](module/ProjMgmt/work_item/query/release_work_item_chart)|release_work_item_chart|否|否 |否 ||
|[需求工作项(requirement)](module/ProjMgmt/work_item/query/requirement)|requirement|否|否 |否 ||
|[资源分配(resource)](module/ProjMgmt/work_item/query/resource)|resource|否|否 |否 ||
|[用户故事（normal）(scrum_story_normal)](module/ProjMgmt/work_item/query/scrum_story_normal)|scrum_story_normal|否|否 |否 ||
|[七天内创建或完成的工作项(seven_days)](module/ProjMgmt/work_item/query/seven_days)|seven_days|否|否 |否 |工作项完成趋势逻辑中使用|
|[迭代下完成的工作项(sprint_completed)](module/ProjMgmt/work_item/query/sprint_completed)|sprint_completed|否|否 |否 ||
|[迭代工作项统计(sprint_work_item_chart)](module/ProjMgmt/work_item/query/sprint_work_item_chart)|sprint_work_item_chart|否|否 |否 ||
|[测试计划关联缺陷(test_plan_relation_bug)](module/ProjMgmt/work_item/query/test_plan_relation_bug)|test_plan_relation_bug|否|否 |否 ||
|[顶层数据查询(top)](module/ProjMgmt/work_item/query/top)|top|否|否 |否 ||
|[未删除的(un_deletd)](module/ProjMgmt/work_item/query/un_deletd)|un_deletd|否|否 |否 ||
|[项目集工作下的工作项(under_work)](module/ProjMgmt/work_item/query/under_work)|under_work|否|否 |否 ||
|[项目集工作下的资源工作项(under_work_resource)](module/ProjMgmt/work_item/query/under_work_resource)|under_work_resource|否|否 |否 ||
|[获取指定工作项的类型(work_item_type)](module/ProjMgmt/work_item/query/work_item_type)|work_item_type|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/work_item/dataset/Default)|DEFAULT|数据查询|是|||
|[高级搜索(advanced_search)](module/ProjMgmt/work_item/dataset/advanced_search)|advanced_search|数据查询|否|||
|[已归档(archived)](module/ProjMgmt/work_item/dataset/archived)|archived|数据查询|否|||
|[需求累计流图(backlog_accumulate_flow)](module/ProjMgmt/work_item/dataset/backlog_accumulate_flow)|backlog_accumulate_flow|[实体逻辑](module/ProjMgmt/work_item/logic/backlog_accumulate_flow)|否|||
|[需求年龄报告(backlog_age_report)](module/ProjMgmt/work_item/dataset/backlog_age_report)|backlog_age_report|[实体逻辑](module/ProjMgmt/work_item/logic/backlog_age_report)|否|||
|[需求每日趋势(backlog_daily_trend)](module/ProjMgmt/work_item/dataset/backlog_daily_trend)|backlog_daily_trend|[实体逻辑](module/ProjMgmt/work_item/logic/backlog_daily_trend)|否|||
|[需求属性分布(backlog_property_distribution)](module/ProjMgmt/work_item/dataset/backlog_property_distribution)|backlog_property_distribution|数据查询|否|||
|[需求状态分布(backlog_state_distribution)](module/ProjMgmt/work_item/dataset/backlog_state_distribution)|backlog_state_distribution|数据查询|否|||
|[基线选择工作项(baseline_choose_work_item)](module/ProjMgmt/work_item/dataset/baseline_choose_work_item)|baseline_choose_work_item|数据查询|否|||
|[基线规划工作项(baseline_plan_work_item)](module/ProjMgmt/work_item/dataset/baseline_plan_work_item)|baseline_plan_work_item|[实体逻辑](module/ProjMgmt/work_item/logic/baseline_plan_work_item)|否|||
|[BI反查(bi_detail)](module/ProjMgmt/work_item/dataset/bi_detail)|bi_detail|数据查询|否|||
|[BI查询(bi_search)](module/ProjMgmt/work_item/dataset/bi_search)|bi_search|数据查询|否|||
|[缺陷工作项(bug)](module/ProjMgmt/work_item/dataset/bug)|bug|数据查询|否|||
|[缺陷每日趋势(bug_daily_tide)](module/ProjMgmt/work_item/dataset/bug_daily_tide)|bug_daily_tide|[实体逻辑](module/ProjMgmt/work_item/logic/defect_daily_trend)|否|||
|[缺陷状态分布表格(bug_state_group_grid)](module/ProjMgmt/work_item/dataset/bug_state_group_grid)|bug_state_group_grid|数据查询|否|||
|[变更父工作项(change_parent)](module/ProjMgmt/work_item/dataset/change_parent)|change_parent|数据查询|否|||
|[查询子工作项(child)](module/ProjMgmt/work_item/dataset/child)|child|数据查询|否|||
|[选择工作项(规划计划)(choose)](module/ProjMgmt/work_item/dataset/choose)|choose|数据查询|否|||
|[选择子工作项(choose_child)](module/ProjMgmt/work_item/dataset/choose_child)|choose_child|数据查询|否|||
|[选择依赖(choose_dependency)](module/ProjMgmt/work_item/dataset/choose_dependency)|choose_dependency|数据查询|否|||
|[选择父工作项(choose_parent_work_item)](module/ProjMgmt/work_item/dataset/choose_parent_work_item)|choose_parent_work_item|数据查询|否|||
|[评论通知负责人(comment_notify_assignee)](module/ProjMgmt/work_item/dataset/comment_notify_assignee)|comment_notify_assignee|数据查询|否|||
|[普通工作项(common)](module/ProjMgmt/work_item/dataset/common)|common|数据查询|否||未删除|
|[普通状态缺陷(common_bug)](module/ProjMgmt/work_item/dataset/common_bug)|common_bug|数据查询|否|||
|[工作项完成趋势(complete_trend)](module/ProjMgmt/work_item/dataset/complete_trend)|complete_trend|[实体逻辑](module/ProjMgmt/work_item/logic/complete_trend)|否|||
|[缺陷年龄报告(defect_age_report)](module/ProjMgmt/work_item/dataset/defect_age_report)|defect_age_report|[实体逻辑](module/ProjMgmt/work_item/logic/defect_age_report)|否|||
|[缺陷属性分布(defect_property_distribution)](module/ProjMgmt/work_item/dataset/defect_property_distribution)|defect_property_distribution|数据查询|否|||
|[缺陷累计趋势(defect_total_trend)](module/ProjMgmt/work_item/dataset/defect_total_trend)|defect_total_trend|[实体逻辑](module/ProjMgmt/work_item/logic/defect_total_trend)|否|||
|[已删除(deleted)](module/ProjMgmt/work_item/dataset/deleted)|deleted|数据查询|否|||
|[需求关联工作项(idea_relation_work_item)](module/ProjMgmt/work_item/dataset/idea_relation_work_item)|idea_relation_work_item|数据查询|否|||
|[kanban成员负荷报告(kanban_user_stat)](module/ProjMgmt/work_item/dataset/kanban_user_stat)|kanban_user_stat|数据查询|否|||
|[里程碑(milestone)](module/ProjMgmt/work_item/dataset/milestone)|milestone|数据查询|否|||
|[移动工作项数据(move_work_item)](module/ProjMgmt/work_item/dataset/move_work_item)|move_work_item|数据查询|否|||
|[我负责的(my_assignee)](module/ProjMgmt/work_item/dataset/my_assignee)|my_assignee|数据查询|否|||
|[我负责的（统计）(my_assignee_count)](module/ProjMgmt/work_item/dataset/my_assignee_count)|my_assignee_count|数据查询|否|||
|[我关注的(my_attention)](module/ProjMgmt/work_item/dataset/my_attention)|my_attention|数据查询|否|||
|[我创建的(my_created)](module/ProjMgmt/work_item/dataset/my_created)|my_created|数据查询|否|||
|[过滤器默认查询(my_filter)](module/ProjMgmt/work_item/dataset/my_filter)|my_filter|数据查询|否|||
|[我的事项_缺陷数(my_summary_bug)](module/ProjMgmt/work_item/dataset/my_summary_bug)|my_summary_bug|数据查询|否|||
|[我的事项_其他工作项数(my_summary_other)](module/ProjMgmt/work_item/dataset/my_summary_other)|my_summary_other|数据查询|否|||
|[我的事项_任务数(my_summary_task)](module/ProjMgmt/work_item/dataset/my_summary_task)|my_summary_task|数据查询|否|||
|[我待完成的(my_todo)](module/ProjMgmt/work_item/dataset/my_todo)|my_todo|数据查询|否|||
|[排除缺陷类型的工作项(no_bug_work_item)](module/ProjMgmt/work_item/dataset/no_bug_work_item)|no_bug_work_item|数据查询|否|||
|[未完成(no_completed)](module/ProjMgmt/work_item/dataset/no_completed)|no_completed|数据查询|否|||
|[正常状态(normal)](module/ProjMgmt/work_item/dataset/normal)|normal|数据查询|否|||
|[未关联的缺陷(not_exsists_bug_relation)](module/ProjMgmt/work_item/dataset/not_exsists_bug_relation)|not_exsists_bug_relation|数据查询|否||仅缺陷|
|[未关联的工作项(not_exsists_relation)](module/ProjMgmt/work_item/dataset/not_exsists_relation)|not_exsists_relation|数据查询|否|||
|[未关联工作项且不为缺陷(notbug_exsists_relation)](module/ProjMgmt/work_item/dataset/notbug_exsists_relation)|notbug_exsists_relation|数据查询|否||未关联且不为缺陷工作项|
|[工作项通知负责人(notify_assignee)](module/ProjMgmt/work_item/dataset/notify_assignee)|notify_assignee|数据查询|否|||
|[逾期工作项(overdue_work_item)](module/ProjMgmt/work_item/dataset/overdue_work_item)|overdue_work_item|数据查询|否|||
|[项目概览-工作项统计(overview_chart)](module/ProjMgmt/work_item/dataset/overview_chart)|overview_chart|数据查询|否|||
|[新建规划快照时查询工作项(plan_snapshot)](module/ProjMgmt/work_item/dataset/plan_snapshot)|plan_snapshot|数据查询|否|||
|[项目资源分配(project_resource)](module/ProjMgmt/work_item/dataset/project_resource)|project_resource|数据查询|否|||
|[需求分组过滤(property_distribution)](module/ProjMgmt/work_item/dataset/property_distribution)|property_distribution|数据查询|否|||
|[只读用户(reader)](module/ProjMgmt/work_item/dataset/reader)|reader|数据查询|否|||
|[最近浏览(recent_work_item)](module/ProjMgmt/work_item/dataset/recent_work_item)|recent_work_item|数据查询|否|||
|[关联工作项(relation_work_item)](module/ProjMgmt/work_item/dataset/relation_work_item)|relation_work_item|数据查询|否|||
|[项目发布下工作项(release)](module/ProjMgmt/work_item/dataset/release)|release|数据查询|否|||
|[项目发布规划工作项(release_plan)](module/ProjMgmt/work_item/dataset/release_plan)|release_plan|数据查询|否|||
|[发布工作项统计(release_work_item_chart)](module/ProjMgmt/work_item/dataset/release_work_item_chart)|release_work_item_chart|数据查询|否|||
|[需求数量燃尽图(require_burn_out)](module/ProjMgmt/work_item/dataset/require_burn_out)|require_burn_out|[实体逻辑](module/ProjMgmt/work_item/logic/require_burn_out)|否|||
|[需求工作项(requirement)](module/ProjMgmt/work_item/dataset/requirement)|requirement|数据查询|否|||
|[需求树表查询(requirement_tree)](module/ProjMgmt/work_item/dataset/requirement_tree)|requirement_tree|数据查询|否|[TreeGridDEDataSetRuntime](index/plugin_index#UsrSFPlugin0407757309)||
|[需求工作项树状或平铺(requirement_tree_or_tile)](module/ProjMgmt/work_item/dataset/requirement_tree_or_tile)|requirement_tree_or_tile|[实体逻辑](module/ProjMgmt/work_item/logic/requirement_tree_or_tile_query)|否|||
|[资源分配(resource)](module/ProjMgmt/work_item/dataset/resource)|resource|数据查询|否|||
|[七天内创建或完成的工作项(seven_days)](module/ProjMgmt/work_item/dataset/seven_days)|seven_days|数据查询|否||工作项完成趋势逻辑中使用|
|[迭代下完成的工作项(sprint_completed)](module/ProjMgmt/work_item/dataset/sprint_completed)|sprint_completed|数据查询|否|||
|[迭代贡献度(sprint_contribution)](module/ProjMgmt/work_item/dataset/sprint_contribution)|sprint_contribution|[实体逻辑](module/ProjMgmt/work_item/logic/sprint_contribution)|否|||
|[项目迭代成员查询(sprint_member_chart)](module/ProjMgmt/work_item/dataset/sprint_member_chart)|sprint_member_chart|[实体逻辑](module/ProjMgmt/work_item/logic/sprint_member_chart)|否|||
|[成员负荷报告（Scrum）(sprint_user_stat)](module/ProjMgmt/work_item/dataset/sprint_user_stat)|sprint_user_stat|[实体逻辑](module/ProjMgmt/work_item/logic/sprint_user_stat)|否|||
|[项目迭代工作项统计(sprint_work_item_chart)](module/ProjMgmt/work_item/dataset/sprint_work_item_chart)|sprint_work_item_chart|数据查询|否|||
|[团队速度(temp_speed_report)](module/ProjMgmt/work_item/dataset/temp_speed_report)|temp_speed_report|[实体逻辑](module/ProjMgmt/work_item/logic/project_team_speed)|否|||
|[测试计划关联缺陷(test_plan_relation_bug)](module/ProjMgmt/work_item/dataset/test_plan_relation_bug)|test_plan_relation_bug|数据查询|否|||
|[顶层工作项(top)](module/ProjMgmt/work_item/dataset/top)|top|数据查询|否|||
|[树表数据集合(tree)](module/ProjMgmt/work_item/dataset/tree)|tree|数据查询|否|[TreeGridDEDataSetRuntime](index/plugin_index#UsrSFPlugin0407757309)|未删除|
|[工作项树状或平铺表格查询(tree_or_tile)](module/ProjMgmt/work_item/dataset/tree_or_tile)|tree_or_tile|[实体逻辑](module/ProjMgmt/work_item/logic/tree_or_tile_query)|否|||
|[项目集工作下的工作项(under_work)](module/ProjMgmt/work_item/dataset/under_work)|under_work|数据查询|否|||
|[项目集工作下的资源工作项(under_work_resource)](module/ProjMgmt/work_item/dataset/under_work_resource)|under_work_resource|数据查询|否|||
|[工作项分布(work_item_distribution)](module/ProjMgmt/work_item/dataset/work_item_distribution)|work_item_distribution|[实体逻辑](module/ProjMgmt/work_item/logic/kanban_work_item_distribution)|否|||
|[获取指定工作项的类型(work_item_type)](module/ProjMgmt/work_item/dataset/work_item_type)|work_item_type|数据查询|否|||

## 数据权限

##### 全部数据（读写） :id=work_item-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `UPDATE`
* `READ`
* `CREATE(项目(SUBDATA))`



##### 操作用户(读) :id=work_item-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/ProjMgmt/work_item#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ(项目(READ))`



##### 操作用户(写) :id=work_item-USER_W

<p class="panel-title"><b>数据范围</b></p>

* `无`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE(项目(SUBDATA))`



## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[工作项分配负责人通知](module/ProjMgmt/work_item/notify/allocation_notify)|allocation_notify|[默认消息队列](index/notify_index)|[工作项通知模板(分配负责人)](index/notify_index#work_item_assignee)|负责人 ||
|[工作项负责人变更通知](module/ProjMgmt/work_item/notify/assignee_onchange_notify)|assignee_onchange_notify|[默认消息队列](index/notify_index)|[工作项通知模板(变更负责人)](index/notify_index#work_item_assignee_onchange)|关注人员 ||
|[工作项取消负责人通知](module/ProjMgmt/work_item/notify/cancel_assignee_notify)|cancel_assignee_notify|[默认消息队列](index/notify_index)|[工作项通知模板(取消分配负责人)](index/notify_index#work_item_assignee_cancel)|负责人 ||
|[工作项创建时分配通知](module/ProjMgmt/work_item/notify/create_notify)|create_notify|[默认消息队列](index/notify_index)|[工作项通知模板(分配负责人)](index/notify_index#work_item_assignee)|负责人 ||
|[工作项归档/激活通知](module/ProjMgmt/work_item/notify/is_archived_notify)|is_archived_notify|[默认消息队列](index/notify_index)|[工作项通知模板(归档/激活工作项)](index/notify_index#work_item_archived_or_activate)|关注对象 负责人 ||
|[工作项删除/恢复通知](module/ProjMgmt/work_item/notify/is_deleted_notify)|is_deleted_notify|[默认消息队列](index/notify_index)|[工作项通知模板(删除/恢复工作项)](index/notify_index#work_item_remove_or_recover)|关注人员 负责人 ||
|[工作项状态变换通知](module/ProjMgmt/work_item/notify/state_notify)|state_notify|[默认消息队列](index/notify_index)|[工作项通知模板（状态变更）](index/notify_index#work_item_state_onchange)|执行人 负责人 关注人员 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ASSIGNEE_ID_EQ|负责人|EQ||
|N_ASSIGNEE_ID_IN|负责人|IN||
|N_ASSIGNEE_ID_ISNOTNULL|负责人|ISNOTNULL||
|N_ASSIGNEE_ID_ISNULL|负责人|ISNULL||
|N_ASSIGNEE_ID_NOTEQ|负责人|NOTEQ||
|N_ASSIGNEE_ID_NOTIN|负责人|NOTIN||
|N_ATTENTIONS_EXISTS__N_OWNER_ID_EQ|关注|EXISTS||
|N_ATTENTIONS_EXISTS__N_TYPE_EQ|关注|EXISTS||
|N_ATTENTIONS_EXISTS__N_USER_ID_EQ|关注|EXISTS||
|N_ATTENTIONS_NOTEXISTS__N_TYPE_EQ|关注|NOTEXISTS||
|N_ATTENTIONS_NOTEXISTS__N_USER_ID_EQ|关注|NOTEXISTS||
|N_BACKLOG_FROM_EQ|需求来源|EQ||
|N_BACKLOG_TYPE_EQ|需求类型|EQ||
|N_BOARD_ID_EQ|看板标识|EQ||
|N_BOARD_NAME_EQ|看板名称|EQ||
|N_BOARD_NAME_LIKE|看板名称|LIKE||
|N_CREATE_MAN_EQ|建立人|EQ||
|N_CREATE_MAN_IN|建立人|IN||
|N_CREATE_MAN_ISNOTNULL|建立人|ISNOTNULL||
|N_CREATE_MAN_ISNULL|建立人|ISNULL||
|N_CREATE_MAN_NOTEQ|建立人|NOTEQ||
|N_CREATE_MAN_NOTIN|建立人|NOTIN||
|N_CREATE_TIME_EQ|建立时间|EQ||
|N_CREATE_TIME_GTANDEQ|建立时间|GTANDEQ||
|N_CREATE_TIME_LTANDEQ|建立时间|LTANDEQ||
|N_DESCRIPTION_EQ|描述|EQ||
|N_DESCRIPTION_LIKE|描述|LIKE||
|F_END_AT_DATEDIFFNOW_GTANDEQ|截止时间|GTANDEQ||
|N_END_AT_GTANDEQ|截止时间|GTANDEQ||
|N_END_AT_LTANDEQ|截止时间|LTANDEQ||
|N_ENTRY_ID_EQ|看板栏标识|EQ||
|N_ENTRY_NAME_EQ|看板栏名称|EQ||
|N_ENTRY_NAME_LIKE|看板栏名称|LIKE||
|N_EXECUTORS_EXISTS__N_USER_ID_EQ|执行人|EXISTS||
|N_ID_EQ|标识|EQ||
|N_ID_EXISTS__N_ID_EQ|标识|EXISTS||
|N_ID_IN|标识|IN||
|N_ID_NOTEQ|标识|NOTEQ||
|N_ID_NOTIN|标识|NOTIN||
|N_IDENTIFIER_EQ|编号|EQ||
|N_IDENTIFIER_LIKE|编号|LIKE||
|N_IS_ARCHIVED_EQ|是否已归档|EQ||
|N_IS_ARCHIVED_IN|是否已归档|IN||
|N_IS_DELETED_EQ|是否已删除|EQ||
|N_IS_DELETED_IN|是否已删除|IN||
|N_JOB_TYPE_EQ|任务类别|EQ||
|N_OVERDUE_TIME_EQ|逾期天数|EQ||
|N_OVERDUE_TIME_GT|逾期天数|GT||
|N_OVERDUE_TIME_GTANDEQ|逾期天数|GTANDEQ||
|N_OVERDUE_TIME_LT|逾期天数|LT||
|N_PID_EQ|父标识|EQ||
|N_PRIORITY_EQ|优先级|EQ||
|N_PROJECT_ID_EQ|项目|EQ||
|N_PROJECT_ID_IN|项目|IN||
|N_PROJECT_NAME_EQ|所属项目|EQ||
|N_PROJECT_NAME_LIKE|所属项目|LIKE||
|N_PTITLE_EQ|父工作项|EQ||
|N_PTITLE_LIKE|父工作项|LIKE||
|N_REAPPEAR_PROBABILITY_EQ|复现概率|EQ||
|N_RECENT_CREATE_DAYS_LTANDEQ|最近创建日期|LTANDEQ||
|N_RELEASE_ID_EQ|项目发布标识|EQ||
|N_RELEASE_NAME_EQ|项目发布名称|EQ||
|N_RELEASE_NAME_LIKE|项目发布名称|LIKE||
|N_RISK_EQ|风险|EQ||
|N_SEVERITY_EQ|严重程度|EQ||
|N_SHOW_IDENTIFIER_EQ|编号|EQ||
|N_SHOW_IDENTIFIER_LIKE|编号|LIKE||
|N_SPRINT_ID_EQ|迭代标识|EQ||
|N_SPRINT_ID_ISNULL|迭代标识|ISNULL||
|N_SPRINT_NAME_EQ|迭代名称|EQ||
|N_SPRINT_NAME_LIKE|迭代名称|LIKE||
|N_START_AT_GTANDEQ|开始时间|GTANDEQ||
|N_START_AT_LT|开始时间|LT||
|N_START_AT_LTANDEQ|开始时间|LTANDEQ||
|N_STATE_EQ|状态|EQ||
|N_STATE_NOTEQ|状态|NOTEQ||
|N_STATE_NOTIN|状态|NOTIN||
|N_STATE_TYPE_EQ|工作项状态类型|EQ||
|N_STATE_TYPE_NOTEQ|工作项状态类型|NOTEQ||
|N_SWIMLANE_ID_EQ|泳道标识|EQ||
|N_TAGS_LIKE|标签|LIKE||
|N_TITLE_LIKE|标题|LIKE||
|N_TOP_ID_EQ|顶级工作项标识|EQ||
|N_TOP_ID_IN|顶级工作项标识|IN||
|N_TOP_TITLE_EQ|顶级工作项标题|EQ||
|N_TOP_TITLE_LIKE|顶级工作项标题|LIKE||
|N_UPDATE_TIME_GTANDEQ|更新时间|GTANDEQ||
|N_UPDATE_TIME_LTANDEQ|更新时间|LTANDEQ||
|N_WORK_ITEM_ORIGIN_STATE_EQ|原始状态|EQ||
|N_WORK_ITEM_TYPE_GROUP_EQ|工作项类型分组|EQ||
|N_WORK_ITEM_TYPE_ID_EQ|工作项类型|EQ||
|N_WORK_ITEM_TYPE_ID_IN|工作项类型|IN||
|N_WORK_ITEM_TYPE_ID_LIKE|工作项类型|LIKE||
|N_WORK_ITEM_TYPE_NAME_EQ|工作项类型|EQ||
|N_WORK_ITEM_TYPE_NAME_LIKE|工作项类型|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 复制编号 | copy_identifier | 复制编号 |单项数据|用户自定义||
| BI编辑 | bi_report_view | 编辑 |无数据|用户自定义||
| 新建任务（kanban动态） | new_dyna_kanban_task | 新建任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_kanban_quick_create_view)</details>||
| 分配负责人(单项) | change_work_item_assignee | 分配负责人 |单项数据（主键）|<details><summary>打开编辑表单</summary></details>||
| 新建特性（移动端scrum） | mob_create_scrum_feature | 新建特性 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 新建史诗（hybrid动态） | dyna_new_hybrid_epic | 新建史诗 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_hybrid_quick_create_view)</details>||
| 新建用户故事（移动端scrum） | mob_create_scrum_story | 新建用户故事 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 打开评论列表（移动端） | open_comment_list | 打开评论列表 |单项数据|<details><summary>打开视图或向导（模态）</summary>[评论](app/view/comment_mob_comment_md_view)</details>||
| 删除（移动端工具栏） | mob_toolbar_delete | 删除 |多项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 查看预估工时明细（移动端） | mob_check_forecast_workload_detail | 查看工时明细 |无数据|<details><summary>打开视图或向导（模态）</summary>[工时记录](app/view/workload_mob_forecast_detail_view)</details>||
| 打开更多我创建的工作项 | open_more_my_create | 打开更多我创建的工作项 |无数据|用户自定义||
| 新建缺陷（测试计划关联） | new_test_plan_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_quick_create_bug_view)</details>|测试计划分页导航 → 缺陷分页 → 表格工具栏 「 新建缺陷 」|
| 新建任务（移动端waterfall） | mob_create_waterfall_task | 新建任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 新建并添加子工作项（移动端） | create_and_child_work_item | 新建子工作项 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_mob_create_option_view)</details>||
| 打开我的事项其他工作项 | open_summary_other_item | 其他工作项 |无数据|<details><summary>打开视图或向导（模态）</summary>[其他工作项](app/view/work_item_summary_other_grid_view)</details>||
| 打开更多我负责的工作项 | query_more_my_assignee | 打开更多我负责的工作项 |无数据|用户自定义||
| 新建缺陷（scrum动态） | new_dyna_scrum_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_scrum_quick_create_view)</details>|SRFNAVPARAM.work_item_type_group_bug=bug|
| 项目资源成员设置(设置回显数据) | project_resource_member_pre | 成员管理 |无数据|用户自定义||
| 新建事务（hybrid） | new_hybrid_issue | 新建事务 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建特性（移动端hybrid） | mob_create_hybrid_feature | 新建特性 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 新建史诗（scrum） | new_scrum_epic | 新建史诗 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建阶段（移动端waterfall） | mob_create_waterfall_stage | 新建阶段 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| Scrum工作项导入 | scrum_upload | 导入工作项 |无数据|<details><summary>打开数据导入视图</summary>[敏捷工作项导入]()</details>||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义||
| 新建执行后（建立关联数据) | after_new_test_plan_bug | 新建缺陷执行后（测试计划关联) |单项数据（主键）|用户自定义||
| 刷新子工作项列表（移动端） | mob_refresh_work_item | 刷新子工作项列表（移动端） |无数据|用户自定义||
| 新建计划（waterfall） | new_waterfall_plan | 新建计划 |单项数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 全局资源成员设置 | resource_member | 成员设置 |无数据|<details><summary>后台调用</summary>[resource_member_setting](#行为)||
| 跳转进行中的工作项 | jump_in_progress_work_item | 跳转进行中的工作项 |无数据|<details><summary>打开视图或向导（模态）</summary>[个人工作项](app/view/work_item_my_assignee_gird_view_show)</details>||
| 新建用户故事（scrum） | new_scrum_story | 新建用户故事 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 关联工单（工具栏） | toolbar_link_ticket | 关联工单 |无数据|用户自定义||
| 导出为图片（甘特图） | export_gantt_image | 导出为图片 |无数据|用户自定义||
| 新建工作项（无参数） | new_work_item | 新建工作项 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建特性（hybrid）（工具栏） | new_hybrid_feature_toolbar | 新建特性 |无数据|用户自定义||
| 新建用户故事（kanban动态） | new_dyna_kanban_story | 新建用户故事 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_kanban_quick_create_view)</details>||
| null | toolbar_grid_view_toolbar_deuiaction1_click | 工作项 |单项数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_test_follow_edit_view)</details>||
| 关联测试用例（工具栏） | toolbar_link_test_case | 关联测试用例 |无数据|用户自定义||
| 打开执行人设置视图 | open_executors | 打开执行人 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_executors_edit_form)</details>||
| 新建任务（kanban）（工具栏） | new_kanban_task_toolbar | 新建工作项 |无数据|用户自定义||
| 打开BI报表设计界面 | open_bi_report_design | 打开BI报表设计界面 |无数据|用户自定义|后续需删除|
| 新建需求（hybrid） | new_hybrid_requirement | 新建需求 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建事务（hybrid）（工具栏） | new_hybrid_issue_toolbar | 新建事务 |无数据|用户自定义||
| 刷新 | refresh | 刷新 |无数据|用户自定义||
| 移出迭代 | shift_out_sprint | 移出迭代 |单项数据（主键）|<details><summary>后台调用</summary>[shift_out_sprint](#行为)||
| 瀑布缺陷导入 | waterfall_upload_bug | 导入缺陷 |无数据|<details><summary>打开数据导入视图</summary>[瀑布缺陷导入]()</details>||
| 新建史诗（hybrid） | new_hybrid_epic | 新建史诗 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建史诗（hybrid）（工具栏） | new_hybrid_epic_toolbar | 新建史诗 |无数据|用户自定义||
| 新建特性（hybrid动态） | dyna_new_hybrid_feature | 新建特性 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_hybrid_quick_create_view)</details>||
| 新建任务（waterfall动态） | new_dyna_waterfall_task | 新建任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_waterfall_quick_create_view)</details>||
| 移入发布 | shift_in_release | 移入发布 |多项数据（主键）|<details><summary>后台调用</summary>[shift_in_release](#行为)||
| 新建缺陷（hybrid） | new_hybrid_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 计算子工作项类型 | clac_children_work_item_type | 计算子工作项类型 |单项数据|用户自定义||
| 新建缺陷（移动端kanban） | mob_create_kanban_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 关联工作项 | relation_work_item | 关联工作项 |单项数据（主键）|<details><summary>后台调用</summary>[others_relation_work_item](#行为)||
| 新建事务（hybrid动态） | dyna_new_hybrid_issue | 新建事务 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_hybrid_quick_create_view)</details>||
| kanban工作项导入 | kanban_work_item_import_data | 导入工作项 |无数据|<details><summary>打开数据导入视图</summary>[看板工作项导入]()</details>||
| 新建缺陷（waterfall动态） | new_dyna_waterfall_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_waterfall_quick_create_view)</details>||
| 变更父工作项 | change_parent | 变更父工作项 |单项数据（主键）|<details><summary>后台调用</summary>[change_parent](#行为)||
| 修改时间 | change_time | 修改时间 |多项数据（主键）|<details><summary>后台调用</summary>[change_time](#行为)||
| 新建史诗（kanban动态） | new_dyna_kanban_epic | 新建史诗 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_kanban_quick_create_view)</details>||
| 新建里程碑（移动端hybrid） | mob_create_hybrid_milestone | 新建里程碑 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 新建用户故事（移动端hybrid） | mob_create_hybrid_story | 新建用户故事 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 打开BI报表配置表单_工作项_time | open_bi_form_time | 配置 |无数据|<details><summary>打开快捷编辑</summary></details>|只含有"含截止时间为空"|
| 添加工作项重复关系（移动端） | mob_add_duplicates | 重复 |无数据|<details><summary>后台调用</summary>[others_relation_work_item](#行为)||
| 新建需求（hybrid动态） | dyna_new_hybrid_requirement | 新建需求 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_hybrid_quick_create_view)</details>||
| 新建用户故事（kanban） | new_kanban_story | 新建用户故事 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建缺陷（移动端hybrid） | mob_create_hybrid_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 添加预估工时 | add_estimated_workload | 添加预估工时 |无数据|<details><summary>打开视图或向导（模态）</summary>[登记预估工时](app/view/workload_forecast_quick_create_view)</details>||
| 工作项关联产品需求（移动端） | mob_relation_idea | 添加关联 |无数据|<details><summary>后台调用</summary>[others_relation_work_item](#行为)||
| 新建阶段（移动端hybrid） | mob_create_hybrid_stage | 新建阶段 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 新建任务（移动端scrum） | mob_create_scrum_task | 新建任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 新建特性（scrum） | new_scrum_feature | 新建特性 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建任务（hybrid动态） | dyna_new_hybrid_task | 新建任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_hybrid_quick_create_view)</details>||
| 添加控件显示 | show_add_input | 添加工作项 |无数据|用户自定义||
| 添加工作项原因关系（移动端） | mob_add_causes | 原因 |无数据|<details><summary>后台调用</summary>[others_relation_work_item](#行为)||
| 新建需求（waterfall） | new_waterfall_requirement | 新建需求 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建特性（移动端kanban） | mob_create_kanban_feature | 新建特性 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 显示下拉并展开数据（嵌入视图） | show_dorpdown_data | 显示下拉并展开数据 |无数据|用户自定义||
| 添加实际工时 | add_actual_workload | 添加实际工时 |无数据|<details><summary>打开视图或向导（模态）</summary>[登记工时](app/view/workload_quick_create_view)</details>||
| 新建史诗（scrum动态） | new_dyna_scrum_epic | 新建史诗 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_scrum_quick_create_view)</details>||
| 新建任务（移动端kanban） | mob_create_kanban_task | 新建任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 新建子工作项 | newrow_test | 新建子工作项 |单项数据|用户自定义||
| 新建缺陷（移动端scrum） | mob_create_scrum_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 新建事务（kanban动态） | new_dyna_kanban_issue | 新建事务 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_kanban_quick_create_view)</details>||
| 新建用户故事（scrum动态） | new_dyna_scrum_story | 新建用户故事 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_scrum_quick_create_view)</details>||
| 新建缺陷（waterfall） | new_waterfall_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 跳转未开始的工作项 | jump_pending_work_item | 跳转未开始的工作项 |无数据|<details><summary>打开视图或向导（模态）</summary>[个人工作项](app/view/work_item_my_assignee_gird_view_show)</details>||
| 新建任务（hybrid） | new_hybrid_task | 新建任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建特性（kanban动态） | new_dyna_kanban_feature | 新建特性 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_kanban_quick_create_view)</details>||
| 新建用户故事（hybrid） | new_hybrid_story | 新建用户故事 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 取消关联（子工作项） | child_del_relation | 取消关联 |单项数据（主键）|<details><summary>后台调用</summary>[child_del_relation](#行为)||
| 全局资源成员设置(设置回显数据) | resource_member_pre | 成员管理 |无数据|用户自定义||
| 新建阶段（hybrid） | new_hybrid_stage | 新建阶段 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建任务（hybrid）（工具栏） | new_hybrid_task_toolbar | 新建任务 |无数据|用户自定义||
| 打开人员选择视图（移动端） | open_mob_choose_assignee | 打开人员选择视图（移动端） |无数据|<details><summary>打开视图或向导（模态）</summary>[项目成员](app/view/project_member_mob_select_tap_exp_view)</details>||
| Scrum需求导入 | scrum_backlog_import_data | 自定义导入需求 |无数据|<details><summary>打开数据导入视图</summary>[Scrum工作项需求导入]()</details>||
| 跳转已关闭的工作项 | jump_closed_work_item | 跳转已关闭的工作项 |无数据|<details><summary>打开视图或向导（模态）</summary>[个人工作项](app/view/work_item_my_assignee_gird_view_show)</details>||
| 打开我的事项缺陷 | open_summary_bug | 缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[缺陷](app/view/work_item_summary_bug_grid_view)</details>||
| 移入迭代 | shift_in_sprint | 移入迭代 |多项数据（主键）|<details><summary>后台调用</summary>[shift_in_sprint](#行为)||
| 导出报表excel | export_report_excel | 导出表格 |无数据|用户自定义||
| 变更工作项类型 | change_type | 变更工作项类型 |多项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[变更工作项类型](app/view/work_item_wizard_change_view)</details>||
| 新建特性（scrum动态） | new_dyna_scrum_feature | 新建特性 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_scrum_quick_create_view)</details>||
| 新建需求（移动端hybrid） | mob_create_hybrid_requirement | 新建需求 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 新建用户故事（hybrid动态） | dyna_new_hybrid_story | 新建用户故事 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_hybrid_quick_create_view)</details>||
| 新建缺陷（scrum） | new_scrum_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_create_view)</details>||
| 新建史诗（kanban） | new_kanban_epic | 新建史诗 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建史诗（移动端scrum） | mob_create_scrum_epic | 新建史诗 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 删除（工具栏） | toolbar_delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 新建阶段（hybrid动态） | dyna_new_hybrid_stage | 新建阶段 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_hybrid_quick_create_view)</details>||
| 切换显示模式 | switch_show_mode | 切换模式 |无数据|用户自定义||
| 新建事务（移动端kanban） | mob_create_kanban_issue | 新建事务 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 新建工作项（测试） | new_work_item_test | 新建工作项 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_test_follow_edit_view)</details>||
| 新建任务（scrum动态） | new_dyna_scrum_task | 新建任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_scrum_quick_create_view)</details>||
| 打开我的事项任务 | open_summary_task | 任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[任务](app/view/work_item_summary_task_grid_view)</details>||
| 新建任务（移动端hybrid） | mob_create_hybrid_task | 新建任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 新建工作项（快速新建） | quick_new_work_item | 新建工作项 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>|SRFNAVPARAM.srfdatatype=%srfdatatype%<br>SRFNAVPARAM.work_item_type_id=%srfdatatype%<br>SRFNAVPARAM.srfparentdename=%srfparentdename%<br>SRFNAVPARAM.srfparentkey=%srfparentkey%<br>SRFNAVPARAM.project_name=%project_name%<br>SRFNAVPARAM.need_fill_form=true|
| 查看预估工时明细 | check_estimated_workload_detail | 查看预估工时明细 |无数据|用户自定义||
| 分配负责人 | change_assignee | 分配负责人 |多项数据（主键）|<details><summary>后台调用</summary>[change_assignee](#行为)||
| 复制链接 | copy_link | 复制链接 |单项数据|用户自定义||
| 添加预估工时（移动端） | mob_add_forecast_workload | 添加预估工时 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[登记预估工时](app/view/workload_mob_forecast_edit_view)</details>||
| 新建缺陷（kanban动态） | new_dyna_kanban_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_kanban_quick_create_view)</details>||
| 新建里程碑（waterfall） | new_waterfall_milestone | 新建里程碑 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 更改工作项状态 | change_work_item_state | 更改状态 |单项数据（主键）|<details><summary>打开编辑表单</summary></details>||
| 新建需求（hybrid）（工具栏） | new_hybrid_requirement_toolbar | 新建需求 |无数据|用户自定义||
| 新建史诗（移动端kanban） | mob_create_kanban_epic | 新建史诗 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 添加工作项被阻塞关系（移动端） | mob_add_is_blocked_by | 被阻塞 |无数据|<details><summary>后台调用</summary>[others_relation_work_item](#行为)||
| 添加子工作项（移动端） | mob_add_child | 添加子工作项 |无数据|<details><summary>后台调用</summary>[choose_child](#行为)||
| BI全屏 | bi_full_screen | 全屏 |无数据|用户自定义||
| 打开执行人设置视图（新建工作项时） | create_open_executors | 打开执行人 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_executors_edit_form)</details>||
| 复制工作项 | copy | 复制 |多项数据（主键）|<details><summary>后台调用</summary>[copy](#行为)||
| 新建缺陷（hybrid）（工具栏） | new_hybrid_bug_toolbar | 新建缺陷 |无数据|用户自定义||
| 移出发布 | shift_out_release | 移出发布 |单项数据（主键）|<details><summary>后台调用</summary>[shift_out_release](#行为)||
| 跳转已完成的工作项 | jump_completed_work_item | 跳转已完成的工作项 |无数据|<details><summary>打开视图或向导（模态）</summary>[个人工作项](app/view/work_item_my_assignee_gird_view_show)</details>||
| 打开BI报表配置表单_工作项_all | open_bi_form_all | 配置 |无数据|<details><summary>打开快捷编辑</summary></details>|含有状态类型、状态和"含截止时间为空"|
| Scrum缺陷导入 | scrum_bug_import_data | 自定义缺陷导入 |无数据|<details><summary>打开数据导入视图</summary>[Scrum工作项缺陷导入]()</details>||
| 移入看板 | shift_in_kanban | 移入看板 |单项数据（主键）|<details><summary>打开编辑表单</summary></details>||
| 打开关注列表（移动端） | open_attention_list | 打开关注列表 |单项数据|<details><summary>打开视图或向导（模态）</summary>[工作项关注](app/view/attention_mob_work_item_md_view)</details>||
| 打开BI报表配置表单_工作项_state | open_bi_form_state | 配置 |无数据|<details><summary>打开快捷编辑</summary></details>|只含有状态类型和状态|
| 新建里程碑（hybrid） | new_hybrid_milestone | 新建里程碑 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建用户故事（移动端kanban） | mob_create_kanban_story | 新建用户故事 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 新建任务（kanban） | new_kanban_task | 新建任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建缺陷（kanban）（工具栏） | new_kanban_bug_toolbar | 新建工作项 |无数据|用户自定义||
| 新建用户故事（kanban）（工具栏） | new_kanban_story_toolbar | 新建工作项 |无数据|用户自定义||
| 显示更多_我创建的工作项(移动端仪表盘) | show_more_created_item | 显示更多 |无数据|<details><summary>打开视图或向导（模态）</summary>[我创建的工作项](app/view/work_item_my_created_mobdash)</details>||
| 新建里程碑（移动端waterfall） | mob_create_waterfall_milestone | 新建里程碑 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| waterfall工作项导入 | waterfall_work_item_import_data | 导入工作项 |无数据|<details><summary>打开数据导入视图</summary>[瀑布工作项导入]()</details>||
| 新建缺陷（移动端waterfall） | mob_create_waterfall_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 激活（工具栏） | toolbar_activate | 激活 |多项数据（主键）|<details><summary>后台调用</summary>[activate](#行为)||
| BI刷新 | bi_refresh | 刷新 |无数据|用户自定义||
| 添加工作项关联关系（移动端） | mob_add_relates | 关联 |无数据|<details><summary>后台调用</summary>[others_relation_work_item](#行为)||
| 打开工作项主视图 | open_main_view | 打开工作项主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_main_view)</details>||
| 新建阶段（hybrid）（工具栏） | new_hybrid_stage_toolbar | 新建阶段 |无数据|用户自定义||
| 新建任务（waterfall） | new_waterfall_task | 新建任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 打开项目主视图 | open_index_view | 打开项目主视图 |单项数据|用户自定义||
| 查看工时明细 | check_workload_detail | 查看工时明细 |无数据|用户自定义||
| 新建用户故事（hybrid）（工具栏） | new_hybrid_story_toolbar | 新建用户故事 |无数据|用户自定义||
| 新建缺陷（hybrid动态） | dyna_new_hybrid_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_hybrid_quick_create_view)</details>|SRFNAVPARAM.work_item_type_group_bug=bug|
| 新建史诗（移动端hybrid） | mob_create_hybrid_epic | 新建史诗 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 新建里程碑（hybrid动态） | dyna_new_hybrid_milestone | 新建里程碑 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_hybrid_quick_create_view)</details>||
| 归档 | archive | 归档 |多项数据（主键）|<details><summary>后台调用</summary>[archive](#行为)||
| 变更状态 | change_state | 变更状态 |多项数据（主键）|<details><summary>后台调用</summary>[change_state](#行为)||
| 查看工时明细（移动端） | mob_check_workload_detail | 查看工时明细 |无数据|<details><summary>打开视图或向导（模态）</summary>[工时记录](app/view/workload_mob_detail_view)</details>||
| 导出报表PDF | export_report_pdf | 导出为PDF |无数据|用户自定义||
| 显示更多_我负责的工作项(移动端仪表盘) | show_more_assignee_item | 显示更多 |无数据|<details><summary>打开视图或向导（模态）</summary>[我负责的工作项](app/view/work_item_my_assignee_mobboard)</details>||
| 激活 | activate | 激活 |多项数据（主键）|<details><summary>后台调用</summary>[activate](#行为)||
| 新建里程碑（waterfall动态） | new_dyna_waterfall_milestone | 新建里程碑 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_waterfall_quick_create_view)</details>||
| 新建任务（scrum） | new_scrum_task | 新建任务 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_create_view)</details>||
| 恢复(工具栏) | recover_toolbar | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)||
| 关联工作项（工具栏） | toolbar_link_work_item | 关联工作项 |无数据|用户自定义||
| 添加附件 | add_attachments | 添加附件 |无数据|用户自定义||
| 设置执行人 | setting_executors | 设置执行人 |无数据|用户自定义||
| 删除 | delete | 删除 |多项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 工具栏上传附件 | toolbar_update_file | 工具栏上传附件 |无数据|用户自定义||
| 归档(工具栏) | toolbar_archive | 归档 |多项数据（主键）|<details><summary>后台调用</summary>[archive](#行为)||
| 新建需求（waterfall动态） | new_dyna_waterfall_requirement | 新建需求 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_waterfall_quick_create_view)</details>||
| 新建阶段（waterfall） | new_waterfall_stage | 新建阶段 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 添加工作项结果关系（移动端） | mob_add_is_caused_by | 结果 |无数据|<details><summary>后台调用</summary>[others_relation_work_item](#行为)||
| 新建缺陷（kanban） | new_kanban_bug | 新建缺陷 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 打开更多工作项 | query_more_work_item | 打开更多工作项 |无数据|<details><summary>打开视图或向导（模态）</summary>[更多工作项](app/view/work_item_more_work_item_unit)</details>||
| 新建事务（移动端hybrid） | mob_create_hybrid_issue | 新建事务 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 项目资源成员设置 | project_resource_member | 成员设置 |无数据|<details><summary>后台调用</summary>[project_resource_setting](#行为)||
| 移动 | move | 移动 |多项数据（主键）|<details><summary>后台调用</summary>[move_work_item](#行为)||
| 恢复 | recover | 恢复 |多项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)||
| 打开BI报表配置表单_工作项缺陷 | open_bi_form_item_bug | 配置 |无数据|<details><summary>打开快捷编辑</summary></details>|缺陷占比专用|
| 新建事务（kanban） | new_kanban_issue | 新建事务 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建特性（hybrid） | new_hybrid_feature | 新建特性 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建需求（移动端waterfall） | mob_create_waterfall_requirement | 新建需求 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/work_item_mob_create_view)</details>||
| 添加工作项阻塞关系（移动端） | mob_add_blocks | 阻塞 |无数据|<details><summary>后台调用</summary>[others_relation_work_item](#行为)||
| 新建里程碑（hybrid）（工具栏） | new_hybrid_milestone_toolbar | 新建里程碑 |无数据|用户自定义||
| 工作项关联产品工单（移动端） | mob_add_ticket | 添加工单 |无数据|<details><summary>后台调用</summary>[others_relation_work_item](#行为)||
| 瀑布需求导入 | waterfall_upload_back | 导入需求 |无数据|<details><summary>打开数据导入视图</summary>[瀑布需求导入]()</details>||
| 移动（表单中） | move_in_form | 移动 |单项数据（主键）|<details><summary>后台调用</summary>[move_work_item](#行为)||
| 添加实际工时（移动端） | mob_add_actual_workload | 添加实际工时 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[登记工时](app/view/workload_register_mob_edit_view)</details>||
| 删除计划 | remove_waterfall_plan | 删除计划 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 新建特性（kanban） | new_kanban_feature | 新建特性 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工作项](app/view/work_item_quick_create_view)</details>||
| 新建阶段（waterfall动态） | new_dyna_waterfall_stage | 新建阶段 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_dyna_waterfall_quick_create_view)</details>||
| 关联需求（工具栏） | toolbar_link_idea | 关联需求 |无数据|用户自定义||
| 全屏展示（移动端） | full_screen | 全屏 |无数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[BI报表_工作项状态默认值](module/ProjMgmt/work_item/uilogic/bi_form_state_default)|bi_form_state_default|BI报表_工作项状态默认值|
|[上传附件（工具栏）](module/ProjMgmt/work_item/uilogic/toolbar_add_attachment)|toolbar_add_attachment|工具栏按钮触发上传附件功能|
|[关注人员更新](module/ProjMgmt/work_item/uilogic/attention_personnel_update)|attention_personnel_update|获取关注人员信息，并根据类别更新|
|[关联子工作项表格行为列状态](module/ProjMgmt/work_item/uilogic/relation_child_grid_action)|relation_child_grid_action|关联子工作项表格根据上下文srfreadonly判断行为列是否启用|
|[关联工作项（工具栏）](module/ProjMgmt/work_item/uilogic/toolbar_link_work_item)|toolbar_link_work_item|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联工单（工具栏）](module/ProjMgmt/work_item/uilogic/toolbar_link_ticket)|toolbar_link_ticket|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联用例（工具栏）](module/ProjMgmt/work_item/uilogic/toolbar_link_test_case)|toolbar_link_test_case|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联需求（工具栏）](module/ProjMgmt/work_item/uilogic/toolbar_link_idea)|toolbar_link_idea|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[切换显示模式](module/ProjMgmt/work_item/uilogic/switch_show_mode)|switch_show_mode|切换表格的显示模式|
|[刷新](module/ProjMgmt/work_item/uilogic/refresh)|refresh||
|[刷新关联子工作项列表（移动端）](module/ProjMgmt/work_item/uilogic/mob_refresh_child_list)|mob_refresh_child_list||
|[图表全屏（移动端）](module/ProjMgmt/work_item/uilogic/mob_full_screen)|mob_full_screen||
|[图表显示总数](module/ProjMgmt/work_item/uilogic/chart_show_count)|chart_show_count|仪表盘图表显示总数<br>|
|[子工作项刷新计数器](module/ProjMgmt/work_item/uilogic/child_refresh_counter)|child_refresh_counter|关联数据变更后，触发计数器刷新|
|[导出为图片（甘特图）](module/ProjMgmt/work_item/uilogic/export_gantt_image)|export_gantt_image|甘特图导出为图片|
|[导出报表PDF](module/ProjMgmt/work_item/uilogic/export_report_pdf)|export_report_pdf||
|[导出报表excel](module/ProjMgmt/work_item/uilogic/export_report_excel)|export_report_excel||
|[工作项关联工作项值变更](module/ProjMgmt/work_item/uilogic/relation_self_change)|relation_self_change|工作项关联工作项值变更时，调用处理逻辑，生成正反向关联数据|
|[工单关联工作项](module/ProjMgmt/work_item/uilogic/ticket_relation_work_item)|ticket_relation_work_item|值变更时触发，工单关联工作项，调用处理逻辑生成正反向数据|
|[已归档或已删除工作项显示隐藏](module/ProjMgmt/work_item/uilogic/archived_or_deleted_visible)|archived_or_deleted_visible|已归档或已删除工作项显示隐藏|
|[建立关联数据](module/ProjMgmt/work_item/uilogic/create_relation)|create_relation|新建执行后触发，建立关联数据|
|[我负责的工作项图表跳转](module/ProjMgmt/work_item/uilogic/my_assign_chart_jump)|my_assign_chart_jump||
|[打开BI报表设计界面](module/ProjMgmt/work_item/uilogic/open_bi_report_design)|open_bi_report_design|打开bi报表设计界面，后续需删除|
|[执行用例关联工作项(缺陷)](module/ProjMgmt/work_item/uilogic/run_relation_work_item_bug)|run_relation_work_item_bug|值变更时触发，执行用例关联缺陷类工作项，调用处理逻辑生成正反向数据，同时为测试用例生成正反向数据（特殊业务）|
|[新建事务（hybrid）工具栏](module/ProjMgmt/work_item/uilogic/new_hybrid_kanban_issue_toolbar)|new_hybrid_kanban_issue_toolbar|在混合看板新建工作项时，添加entry_id|
|[新建任务（hybrid）工具栏](module/ProjMgmt/work_item/uilogic/new_hybrid_kanban_task_toolbar)|new_hybrid_kanban_task_toolbar|在混合看板新建工作项时，添加entry_id|
|[新建任务（kanban）（工具栏）](module/ProjMgmt/work_item/uilogic/new_kanban_task_toolbar)|new_kanban_task_toolbar|看板项目工作项分页新建任务类型工作项|
|[新建史诗（hybrid）工具栏](module/ProjMgmt/work_item/uilogic/new_hybrid_kanban_epic_toolbar)|new_hybrid_kanban_epic_toolbar|在混合看板新建工作项时，添加entry_id|
|[新建特性（hybrid）工具栏](module/ProjMgmt/work_item/uilogic/new_hybrid_kanban_feature_toolbar)|new_hybrid_kanban_feature_toolbar|在混合看板新建工作项时，添加entry_id|
|[新建用户故事（hybrid）工具栏](module/ProjMgmt/work_item/uilogic/new_hybrid_kanban_story_toolbar)|new_hybrid_kanban_story_toolbar|在混合看板新建工作项时，添加entry_id|
|[新建用户故事（kanban）（工具栏）](module/ProjMgmt/work_item/uilogic/new_kanban_story_toolbar)|new_kanban_story_toolbar|获取首个代码表标识，并新建看板用户故事|
|[新建缺陷（hybrid）工具栏](module/ProjMgmt/work_item/uilogic/new_hybrid_kanban_bug_toolbar)|new_hybrid_kanban_bug_toolbar|在混合看板新建工作项时，添加entry_id|
|[新建缺陷（kanban）（工具栏）](module/ProjMgmt/work_item/uilogic/new_kanban_bug_toolbar)|new_kanban_bug_toolbar|看板项目中新建缺陷类型的工作项|
|[新建行](module/ProjMgmt/work_item/uilogic/newrow_test)|newrow_test|树状表格新建子工作项|
|[新建里程碑（hybrid）工具栏](module/ProjMgmt/work_item/uilogic/new_hybrid_kanban_milestone_toolbar)|new_hybrid_kanban_milestone_toolbar|在混合看板新建工作项时，添加entry_id|
|[新建阶段（hybrid）工具栏](module/ProjMgmt/work_item/uilogic/new_hybrid_kanban_stage_toolbar)|new_hybrid_kanban_stage_toolbar|在混合看板新建工作项时，添加entry_id|
|[新建需求（hybrid）工具栏](module/ProjMgmt/work_item/uilogic/new_hybrid_kanban_requirement_toolbar)|new_hybrid_kanban_requirement_toolbar|在混合看板新建工作项时，添加entry_id|
|[显示下拉并展开选项（嵌入视图）](module/ProjMgmt/work_item/uilogic/toolbar_show_dorpdown_data)|toolbar_show_dorpdown_data|显示下拉区域并展开选项（工具栏）|
|[显示表单侧边栏](module/ProjMgmt/work_item/uilogic/show_form_sidebar)|show_form_sidebar|每次工作项主表单刷新时，将右侧侧边栏默认显示出来。|
|[查看工时明细](module/ProjMgmt/work_item/uilogic/check_workload_detail)|check_workload_detail|按钮触发，通过脚本切换显示组件|
|[查看预估工时明细](module/ProjMgmt/work_item/uilogic/check_estimated_workload_detail)|check_estimated_workload_detail|按钮触发，通过脚本切换显示组件|
|[添加子工作项值变更](module/ProjMgmt/work_item/uilogic/add_child_change)|add_child_change|子工作项值变更触发更新父标识|
|[添加附件数据](module/ProjMgmt/work_item/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[状态变更前逻辑](module/ProjMgmt/work_item/uilogic/before_state_change)|before_state_change|检测变更状态前选中的数据是否为同一类型，不同则禁用|
|[状态变更前逻辑——表格](module/ProjMgmt/work_item/uilogic/before_state_change_grid)|before_state_change_grid|检测变更状态前选中的数据是否为同一类型，不同则禁用|
|[用例关联工作项](module/ProjMgmt/work_item/uilogic/test_case_relation_work_item)|test_case_relation_work_item|值变更时触发，用例关联工作项，调用处理逻辑生成正反向数据|
|[获取工作项工时进度](module/ProjMgmt/work_item/uilogic/get_workload_schedule)|get_workload_schedule|获取工时信息，并计算工时进度|
|[获取工作项工时进度（移动端）](module/ProjMgmt/work_item/uilogic/mob_get_workload_schedule)|mob_get_workload_schedule|获取工时信息，并计算工时进度（移动端）|
|[获取工作项总条数](module/ProjMgmt/work_item/uilogic/get_work_item_total)|get_work_item_total|获取工作项的总条数信息|
|[计算子工作项类型](module/ProjMgmt/work_item/uilogic/calc_children_work_item_type)|calc_children_work_item_type|获取项目类型，并根据类型计算当前工作项子类型|
|[计算子工作项类型(上下文)](module/ProjMgmt/work_item/uilogic/calc_children_work_item_type_context)|calc_children_work_item_type_context|根据工作项类型，判断此工作项可变更的父工作项/子工作项类型|
|[计算父工作项类型](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type)|calc_parent_work_item_type|获取当前工作项类型，并计算父工作项类型|
|[计算父工作项类型（表单）](module/ProjMgmt/work_item/uilogic/calc_parent_work_item_type_form)|calc_parent_work_item_type_form|获取工作项类型，并计算父工作项类型|
|[计算表格列行为状态](module/ProjMgmt/work_item/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制归档和激活行为的禁用状态|
|[计算表格列行为状态(需求树表格)](module/ProjMgmt/work_item/uilogic/calc_requirement_column_action)|calc_requirement_column_action|用于动态控制归档和激活行为的禁用状态|
|[计算资源成员（全局）](module/ProjMgmt/work_item/uilogic/calc_resouce_member)|calc_resouce_member|计算资源甘特部件当前人员，打开选择视图时回显simplelist|
|[计算项目资源成员](module/ProjMgmt/work_item/uilogic/calc_project_resouce_member)|calc_project_resouce_member|计算资源甘特部件当前人员，打开选择视图时回显simplelist|
|[设置执行人](module/ProjMgmt/work_item/uilogic/setting_executors)|setting_executors|设置执行人|
|[设置默认关注人](module/ProjMgmt/work_item/uilogic/set_default_attention)|set_default_attention|新建工作项时，默认将创建人添加到此工作项的关注列表|
|[选择下拉框区域展示](module/ProjMgmt/work_item/uilogic/show_choose_area)|show_choose_area|逻辑控制关联表格下方选项区域动态显示|
|[通知刷新（移动端）](module/ProjMgmt/work_item/uilogic/notify_refresh)|notify_refresh|通知页面刷新|
|[门户全屏](module/ProjMgmt/work_item/uilogic/full_screen)|full_screen|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户刷新](module/ProjMgmt/work_item/uilogic/portlet_refresh)|portlet_refresh|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户编辑](module/ProjMgmt/work_item/uilogic/edit_to_design)|edit_to_design|所有门户部件配置该逻辑触发跳转至编辑页|
|[需求关联工作项](module/ProjMgmt/work_item/uilogic/idea_relation_work_item)|idea_relation_work_item|需求关联工作项，生成关联数据|

## 导入模式

* **瀑布需求导入**


项目管理中的基本单元，可包含不同类型的工作项如任务、需求、缺陷等。


<el-descriptions direction="vertical" :column="17" :size="size" border>
<el-descriptions-item label="工作项类型">-</el-descriptions-item>
<el-descriptions-item label="标题">-</el-descriptions-item>
<el-descriptions-item label="状态">-</el-descriptions-item>
<el-descriptions-item label="负责人">-</el-descriptions-item>
<el-descriptions-item label="开始时间">-</el-descriptions-item>
<el-descriptions-item label="结束时间">-</el-descriptions-item>
<el-descriptions-item label="描述">-</el-descriptions-item>
<el-descriptions-item label="关注人">-</el-descriptions-item>
<el-descriptions-item label="优先级">-</el-descriptions-item>
<el-descriptions-item label="标签">-</el-descriptions-item>
<el-descriptions-item label="需求来源">-</el-descriptions-item>
<el-descriptions-item label="需求类型">-</el-descriptions-item>
<el-descriptions-item label="严重程度">-</el-descriptions-item>
<el-descriptions-item label="复现概率">-</el-descriptions-item>
<el-descriptions-item label="交付物">-</el-descriptions-item>
<el-descriptions-item label="父标识">-</el-descriptions-item>
<el-descriptions-item label="标识">-</el-descriptions-item>
</el-descriptions>

* **Scrum工作项缺陷导入**


项目管理中的基本单元，可包含不同类型的工作项如任务、需求、缺陷等。


<el-descriptions direction="vertical" :column="15" :size="size" border>
<el-descriptions-item label="标题">-</el-descriptions-item>
<el-descriptions-item label="工作项类型">-</el-descriptions-item>
<el-descriptions-item label="状态">-</el-descriptions-item>
<el-descriptions-item label="负责人">-</el-descriptions-item>
<el-descriptions-item label="开始时间">-</el-descriptions-item>
<el-descriptions-item label="结束时间">-</el-descriptions-item>
<el-descriptions-item label="描述">-</el-descriptions-item>
<el-descriptions-item label="关注人">-</el-descriptions-item>
<el-descriptions-item label="优先级">-</el-descriptions-item>
<el-descriptions-item label="标签">-</el-descriptions-item>
<el-descriptions-item label="严重程度">-</el-descriptions-item>
<el-descriptions-item label="复现概率">-</el-descriptions-item>
<el-descriptions-item label="迭代">-</el-descriptions-item>
<el-descriptions-item label="父标识">-</el-descriptions-item>
<el-descriptions-item label="标识">-</el-descriptions-item>
</el-descriptions>

* **Scrum工作项需求导入**


项目管理中的基本单元，可包含不同类型的工作项如任务、需求、缺陷等。


<el-descriptions direction="vertical" :column="16" :size="size" border>
<el-descriptions-item label="工作项类型">-</el-descriptions-item>
<el-descriptions-item label="标题">-</el-descriptions-item>
<el-descriptions-item label="状态">-</el-descriptions-item>
<el-descriptions-item label="负责人">-</el-descriptions-item>
<el-descriptions-item label="开始时间">-</el-descriptions-item>
<el-descriptions-item label="结束时间">-</el-descriptions-item>
<el-descriptions-item label="描述">-</el-descriptions-item>
<el-descriptions-item label="关注人">-</el-descriptions-item>
<el-descriptions-item label="优先级">-</el-descriptions-item>
<el-descriptions-item label="标签">-</el-descriptions-item>
<el-descriptions-item label="风险">-</el-descriptions-item>
<el-descriptions-item label="需求来源">-</el-descriptions-item>
<el-descriptions-item label="需求类型">-</el-descriptions-item>
<el-descriptions-item label="迭代">-</el-descriptions-item>
<el-descriptions-item label="父标识">-</el-descriptions-item>
<el-descriptions-item label="标识">-</el-descriptions-item>
</el-descriptions>

* **瀑布缺陷导入**


项目管理中的基本单元，可包含不同类型的工作项如任务、需求、缺陷等。


<el-descriptions direction="vertical" :column="16" :size="size" border>
<el-descriptions-item label="工作项类型">-</el-descriptions-item>
<el-descriptions-item label="标题">-</el-descriptions-item>
<el-descriptions-item label="状态">-</el-descriptions-item>
<el-descriptions-item label="负责人">-</el-descriptions-item>
<el-descriptions-item label="开始时间">-</el-descriptions-item>
<el-descriptions-item label="结束时间">-</el-descriptions-item>
<el-descriptions-item label="描述">-</el-descriptions-item>
<el-descriptions-item label="关注人">-</el-descriptions-item>
<el-descriptions-item label="优先级">-</el-descriptions-item>
<el-descriptions-item label="标签">-</el-descriptions-item>
<el-descriptions-item label="需求来源">-</el-descriptions-item>
<el-descriptions-item label="需求类型">-</el-descriptions-item>
<el-descriptions-item label="严重程度">-</el-descriptions-item>
<el-descriptions-item label="复现概率">-</el-descriptions-item>
<el-descriptions-item label="父标识">-</el-descriptions-item>
<el-descriptions-item label="标识">-</el-descriptions-item>
</el-descriptions>

* **看板工作项导入**


项目管理中的基本单元，可包含不同类型的工作项如任务、需求、缺陷等。


<el-descriptions direction="vertical" :column="19" :size="size" border>
<el-descriptions-item label="工作项类型">-</el-descriptions-item>
<el-descriptions-item label="标题">-</el-descriptions-item>
<el-descriptions-item label="状态">-</el-descriptions-item>
<el-descriptions-item label="负责人">-</el-descriptions-item>
<el-descriptions-item label="开始时间">-</el-descriptions-item>
<el-descriptions-item label="结束时间">-</el-descriptions-item>
<el-descriptions-item label="描述">-</el-descriptions-item>
<el-descriptions-item label="关注人">-</el-descriptions-item>
<el-descriptions-item label="优先级">-</el-descriptions-item>
<el-descriptions-item label="标签">-</el-descriptions-item>
<el-descriptions-item label="看板">-</el-descriptions-item>
<el-descriptions-item label="需求来源">-</el-descriptions-item>
<el-descriptions-item label="需求类型">-</el-descriptions-item>
<el-descriptions-item label="风险">-</el-descriptions-item>
<el-descriptions-item label="严重程度">-</el-descriptions-item>
<el-descriptions-item label="复现概率">-</el-descriptions-item>
<el-descriptions-item label="任务类别">-</el-descriptions-item>
<el-descriptions-item label="父标识">-</el-descriptions-item>
<el-descriptions-item label="标识">-</el-descriptions-item>
</el-descriptions>

* **敏捷工作项导入**


项目管理中的基本单元，可包含不同类型的工作项如任务、需求、缺陷等。


<el-descriptions direction="vertical" :column="16" :size="size" border>
<el-descriptions-item label="工作项类型">-</el-descriptions-item>
<el-descriptions-item label="标题">-</el-descriptions-item>
<el-descriptions-item label="状态">-</el-descriptions-item>
<el-descriptions-item label="负责人">-</el-descriptions-item>
<el-descriptions-item label="开始时间">-</el-descriptions-item>
<el-descriptions-item label="结束时间">-</el-descriptions-item>
<el-descriptions-item label="描述">-</el-descriptions-item>
<el-descriptions-item label="关注人">-</el-descriptions-item>
<el-descriptions-item label="优先级">-</el-descriptions-item>
<el-descriptions-item label="标签">-</el-descriptions-item>
<el-descriptions-item label="需求来源">-</el-descriptions-item>
<el-descriptions-item label="需求类型">-</el-descriptions-item>
<el-descriptions-item label="严重程度">-</el-descriptions-item>
<el-descriptions-item label="复现概率">-</el-descriptions-item>
<el-descriptions-item label="父标识">-</el-descriptions-item>
<el-descriptions-item label="标识">-</el-descriptions-item>
</el-descriptions>

* **瀑布工作项导入**


项目管理中的基本单元，可包含不同类型的工作项如任务、需求、缺陷等。


<el-descriptions direction="vertical" :column="17" :size="size" border>
<el-descriptions-item label="工作项类型">-</el-descriptions-item>
<el-descriptions-item label="标题">-</el-descriptions-item>
<el-descriptions-item label="状态">-</el-descriptions-item>
<el-descriptions-item label="负责人">-</el-descriptions-item>
<el-descriptions-item label="开始时间">-</el-descriptions-item>
<el-descriptions-item label="结束时间">-</el-descriptions-item>
<el-descriptions-item label="描述">-</el-descriptions-item>
<el-descriptions-item label="关注人">-</el-descriptions-item>
<el-descriptions-item label="优先级">-</el-descriptions-item>
<el-descriptions-item label="标签">-</el-descriptions-item>
<el-descriptions-item label="需求来源">-</el-descriptions-item>
<el-descriptions-item label="需求类型">-</el-descriptions-item>
<el-descriptions-item label="严重程度">-</el-descriptions-item>
<el-descriptions-item label="复现概率">-</el-descriptions-item>
<el-descriptions-item label="交付目标">-</el-descriptions-item>
<el-descriptions-item label="父标识">-</el-descriptions-item>
<el-descriptions-item label="标识">-</el-descriptions-item>
</el-descriptions>

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProjMgmt/work_item?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item?id=主状态控制`">
  主状态控制
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item?id=主状态迁移`">
  主状态迁移
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item?id=界面逻辑`">
  界面逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item?id=导入模式`">
  导入模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'major',
show_field_group:'field_group_DEFGroup',
show_index:'index_WORK_ITEM',
      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>