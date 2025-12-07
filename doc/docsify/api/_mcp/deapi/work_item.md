# 工作项(work_item) :id=work_item
## 获取工作项

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/work_items/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|




##### 响应示例： {docsify-ignore}
```json

{
  "show_identifier" : null,
  "identifier" : null,
  "format_type" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "title" : null,
  "start_at" : null,
  "end_at" : null,
  "state" : null,
  "priority" : null,
  "is_leaf" : null,
  "backlog_type" : null,
  "backlog_from" : null,
  "assignee_name" : null,
  "description" : null,
  "assignee_id" : null,
  "cur_version_id" : null,
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "solution_way" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "review_result_state" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "attention_count" : null,
  "p_work_item_type_id" : null,
  "comment_count" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value1" : null,
  "rep_value3" : null,
  "rep_value2" : null,
  "state_type" : null,
  "cur_version_name" : null,
  "choose_version_id" : null,
  "choose_version_name" : null,
  "attentions_imp" : null,
  "sprint_status" : null,
  "release_status" : null,
  "work_item_sub_type" : null,
  "rep_date" : null,
  "recent_create_days" : null,
  "sequence" : null,
  "relation_total_idea" : null,
  "relation_total_test_case" : null,
  "relation_total_ticket" : null,
  "relation_total_work_item" : null,
  "work_item_origin_state" : null,
  "is_overtime" : null,
  "executors" : null,
  "multiple_people" : null,
  "actual_start_at" : null,
  "actual_end_at" : null,
  "finisher" : null,
  "overdue_time" : null,
  "deliverable_imp" : null,
  "project_is_deleted" : null,
  "project_is_archived" : null,
  "dependencies" : null,
  "board_id" : null,
  "board_name" : null,
  "create_man" : null,
  "create_time" : null,
  "entry_id" : null,
  "entry_name" : null,
  "id" : null,
  "pid" : null,
  "project_id" : null,
  "project_name" : null,
  "ptitle" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
  "user_tag" : null,
  "user_tag2" : null,
}

```

## 普通工作项

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/work_items/fetch_common" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`
未删除



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">f_end_at_datediffnow_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|截止时间|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_attentions_notexists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_attentions_notexists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_backlog_from_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求来源|
|<el-row justify="space-between"><el-col :span="20">n_backlog_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求类型|
|<el-row justify="space-between"><el-col :span="20">n_board_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|看板标识|
|<el-row justify="space-between"><el-col :span="20">n_board_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|看板名称|
|<el-row justify="space-between"><el-col :span="20">n_board_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|看板名称|
|<el-row justify="space-between"><el-col :span="20">n_description_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">n_end_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|截止时间|
|<el-row justify="space-between"><el-col :span="20">n_end_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|截止时间|
|<el-row justify="space-between"><el-col :span="20">n_entry_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|看板栏标识|
|<el-row justify="space-between"><el-col :span="20">n_entry_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|看板栏名称|
|<el-row justify="space-between"><el-col :span="20">n_entry_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|看板栏名称|
|<el-row justify="space-between"><el-col :span="20">n_executors_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_exists_n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">n_is_archived_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">n_is_deleted_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">n_is_deleted_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">n_job_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务类别|
|<el-row justify="space-between"><el-col :span="20">n_overdue_time_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逾期天数|
|<el-row justify="space-between"><el-col :span="20">n_overdue_time_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逾期天数|
|<el-row justify="space-between"><el-col :span="20">n_overdue_time_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逾期天数|
|<el-row justify="space-between"><el-col :span="20">n_overdue_time_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逾期天数|
|<el-row justify="space-between"><el-col :span="20">n_pid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">n_pid_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目|
|<el-row justify="space-between"><el-col :span="20">n_project_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目|
|<el-row justify="space-between"><el-col :span="20">n_project_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|项目是否归档|
|<el-row justify="space-between"><el-col :span="20">n_project_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属项目|
|<el-row justify="space-between"><el-col :span="20">n_project_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属项目|
|<el-row justify="space-between"><el-col :span="20">n_ptitle_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父工作项|
|<el-row justify="space-between"><el-col :span="20">n_ptitle_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父工作项|
|<el-row justify="space-between"><el-col :span="20">n_reappear_probability_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|复现概率|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_release_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布标识|
|<el-row justify="space-between"><el-col :span="20">n_release_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布名称|
|<el-row justify="space-between"><el-col :span="20">n_release_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布名称|
|<el-row justify="space-between"><el-col :span="20">n_review_result_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审结果|
|<el-row justify="space-between"><el-col :span="20">n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|风险|
|<el-row justify="space-between"><el-col :span="20">n_severity_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|严重程度|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_sprint_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|迭代标识|
|<el-row justify="space-between"><el-col :span="20">n_sprint_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|迭代标识|
|<el-row justify="space-between"><el-col :span="20">n_sprint_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|迭代名称|
|<el-row justify="space-between"><el-col :span="20">n_sprint_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|迭代名称|
|<el-row justify="space-between"><el-col :span="20">n_start_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|开始时间|
|<el-row justify="space-between"><el-col :span="20">n_start_at_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|开始时间|
|<el-row justify="space-between"><el-col :span="20">n_start_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|开始时间|
|<el-row justify="space-between"><el-col :span="20">n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_state_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_state_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_state_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项状态类型|
|<el-row justify="space-between"><el-col :span="20">n_state_type_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项状态类型|
|<el-row justify="space-between"><el-col :span="20">n_swimlane_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|泳道标识|
|<el-row justify="space-between"><el-col :span="20">n_tags_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标签|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_top_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|顶级工作项标识|
|<el-row justify="space-between"><el-col :span="20">n_top_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|顶级工作项标识|
|<el-row justify="space-between"><el-col :span="20">n_top_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|顶级工作项标题|
|<el-row justify="space-between"><el-col :span="20">n_top_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|顶级工作项标题|
|<el-row justify="space-between"><el-col :span="20">n_user_tag2_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">n_user_tag2_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">n_user_tag_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">n_user_tag_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">n_work_item_origin_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|原始状态|
|<el-row justify="space-between"><el-col :span="20">n_work_item_type_group_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项类型分组|
|<el-row justify="space-between"><el-col :span="20">n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项类型|
|<el-row justify="space-between"><el-col :span="20">n_work_item_type_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项类型|
|<el-row justify="space-between"><el-col :span="20">n_work_item_type_id_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项类型|
|<el-row justify="space-between"><el-col :span="20">n_work_item_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项类型|
|<el-row justify="space-between"><el-col :span="20">n_work_item_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项类型|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "f_end_at_datediffnow_gtandeq" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_id_in" : null,
  "n_assignee_id_isnotnull" : null,
  "n_assignee_id_isnull" : null,
  "n_assignee_id_noteq" : null,
  "n_assignee_id_notin" : null,
  "n_attentions_exists_n_owner_id_eq" : null,
  "n_attentions_exists_n_type_eq" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_attentions_notexists_n_type_eq" : null,
  "n_attentions_notexists_n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_noteq" : null,
  "n_create_man_notin" : null,
  "n_create_time_eq" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_description_eq" : null,
  "n_description_like" : null,
  "n_end_at_gtandeq" : null,
  "n_end_at_ltandeq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_executors_exists_n_user_id_eq" : null,
  "n_id_eq" : null,
  "n_id_exists_n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_id_notin" : null,
  "n_identifier_eq" : null,
  "n_identifier_like" : null,
  "n_is_archived_eq" : null,
  "n_is_archived_in" : null,
  "n_is_deleted_eq" : null,
  "n_is_deleted_in" : null,
  "n_job_type_eq" : null,
  "n_overdue_time_eq" : null,
  "n_overdue_time_gt" : null,
  "n_overdue_time_gtandeq" : null,
  "n_overdue_time_lt" : null,
  "n_pid_eq" : null,
  "n_pid_isnull" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_id_in" : null,
  "n_project_is_archived_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_release_id_eq" : null,
  "n_release_name_eq" : null,
  "n_release_name_like" : null,
  "n_review_result_state_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_start_at_gtandeq" : null,
  "n_start_at_lt" : null,
  "n_start_at_ltandeq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_state_type_eq" : null,
  "n_state_type_noteq" : null,
  "n_swimlane_id_eq" : null,
  "n_tags_like" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_update_time_gtandeq" : null,
  "n_update_time_ltandeq" : null,
  "n_user_tag2_eq" : null,
  "n_user_tag2_isnull" : null,
  "n_user_tag_eq" : null,
  "n_user_tag_isnull" : null,
  "n_work_item_origin_state_eq" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_in" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "title" : null,
    "identifier" : null,
    "is_deleted" : null,
    "state" : null,
    "work_item_type_id" : null,
    "assignee_id" : null,
    "assignee_name" : null,
    "priority" : null,
    "pid" : null,
    "top_id" : null,
    "project_id" : null,
    "is_archived" : null,
    "ptitle" : null,
    "reappear_probability" : null,
    "severity" : null,
    "create_time" : null,
    "show_identifier" : null,
    "project_name" : null,
    "sprint_id" : null,
    "backlog_type" : null,
    "backlog_from" : null,
    "risk" : null,
    "sprint_name" : null,
    "cur_version_id" : null,
    "end_at" : null,
    "start_at" : null,
    "state_type" : null,
    "create_man" : null,
    "update_time" : null,
    "update_man" : null,
    "is_overtime" : null,
    "multiple_people" : null,
    "overdue_time" : null,
    "finisher" : null,
    "actual_end_at" : null,
    "actual_start_at" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/work_items/importtemplate" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |



## 数据导出

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/work_items/exportdata/{param},/work_items/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|param|String|导出集合方法名称|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|srfexporttag|String|导出模板标识|

##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|page|Integer|page|
|size|Integer|分页大小|
|n_xxx_eq|String|过滤参数|


## 数据导入

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/work_items/importdata" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 数据导入（返回错误excel）

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/work_items/importdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 自定义表头导入（异步）
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/work_items/asyncimportdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |
| srfossfileid | String | 导入文件 |
| srfimportschemaid | String | 表头定义 |


## 数据打印
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/work_items/printdata/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfprinttag | String | 打印标识 |
| srfcontenttype | String | 打印类型 |



## 报表打印

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/work_items/report" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfreporttag | String | 报表标识 |
| srfcontenttype | String | 报表类型 |




<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    },
    methods: {

    }
  }).use(ElementPlus).mount('#app')
</script>