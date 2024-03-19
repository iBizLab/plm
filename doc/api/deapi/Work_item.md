# 工作项(Work_item)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/work_items` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/work_items/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识





<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```




#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/work_items/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识





<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```




#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Update `PUT` `/work_items/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Activate `POST` `/work_items/{key}/activate` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Archive `POST` `/work_items/{key}/archive` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Change_assignee `POST` `/work_items/{key}/change_assignee` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Change_parent `POST` `/work_items/{key}/change_parent` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Change_state `POST` `/work_items/{key}/change_state` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Change_time `POST` `/work_items/{key}/change_time` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/work_items/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
INT


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Child_del_relation `POST` `/work_items/{key}/child_del_relation` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Choose_child `POST` `/work_items/{key}/choose_child` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Copy `POST` `/work_items/{key}/copy` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Del_relation `POST` `/work_items/{key}/del_relation` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Delete `POST` `/work_items/{key}/delete` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Estimated_updateform `PUT` `/work_items/{key}/estimated_updateform` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
GetDraft `GET` `/work_items/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get_attention `GET` `/work_items/{key}/get_attention` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识





<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```




#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Move_work_item `POST` `/work_items/move_work_item` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Others_relation_work_item `POST` `/work_items/others_relation_work_item` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Plan_work_item `POST` `/work_items/plan_work_item` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Recover `POST` `/work_items/{key}/recover` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remaining_updateform `PUT` `/work_items/{key}/remaining_updateform` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/work_items/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Set_default_entry `POST` `/work_items/set_default_entry` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Set_type_bug `POST` `/work_items/set_type_bug` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Shift_in_sprint `POST` `/work_items/{key}/shift_in_sprint` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Shift_in_version `POST` `/work_items/{key}/shift_in_version` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Work_item_re_counters `POST` `/work_items/{key}/work_item_re_counters` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Work_item_test_plan_project `POST` `/work_items/{key}/work_item_test_plan_project` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchArchived `POST` `/work_items/fetcharchived` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchBug `POST` `/work_items/fetchbug` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchBug_state_group_grid `POST` `/work_items/fetchbug_state_group_grid` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchChange_parent `POST` `/work_items/fetchchange_parent` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchChoose_child `POST` `/work_items/fetchchoose_child` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchComment_notify_assignee `POST` `/work_items/fetchcomment_notify_assignee` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "assignee_id" : null,
    "assignee_name" : null,
    "id" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchCommon `POST` `/work_items/fetchcommon` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
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
    "end_at" : null,
    "pid" : null,
    "start_at" : null,
    "top_id" : null,
    "project_id" : null,
    "is_archived" : null,
    "ptitle" : null,
    "reappear_probability" : null,
    "severity" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchCommon_bug `POST` `/work_items/fetchcommon_bug` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
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
    "end_at" : null,
    "pid" : null,
    "start_at" : null,
    "top_id" : null,
    "project_id" : null,
    "is_archived" : null,
    "ptitle" : null,
    "reappear_probability" : null,
    "severity" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchDefault `POST` `/work_items/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchDeleted `POST` `/work_items/fetchdeleted` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchIdea_relation_work_item `POST` `/work_items/fetchidea_relation_work_item` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchIdea_tree_grid `POST` `/work_items/fetchidea_tree_grid` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMilestone `POST` `/work_items/fetchmilestone` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_assignee `POST` `/work_items/fetchmy_assignee` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_assignee_count `POST` `/work_items/fetchmy_assignee_count` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_attention `POST` `/work_items/fetchmy_attention` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_created `POST` `/work_items/fetchmy_created` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_filter `POST` `/work_items/fetchmy_filter` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_todo `POST` `/work_items/fetchmy_todo` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNo_bug_work_item `POST` `/work_items/fetchno_bug_work_item` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/work_items/fetchnormal` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNot_exsists_bug_relation `POST` `/work_items/fetchnot_exsists_bug_relation` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNot_exsists_relation `POST` `/work_items/fetchnot_exsists_relation` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNotbug_exsists_relation `POST` `/work_items/fetchnotbug_exsists_relation` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchOverview_chart `POST` `/work_items/fetchoverview_chart` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchPlan `POST` `/work_items/fetchplan` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchProperty_distribution `POST` `/work_items/fetchproperty_distribution` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_work_item `POST` `/work_items/fetchrecent_work_item` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRequirement `POST` `/work_items/fetchrequirement` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRun_relation_bug `POST` `/work_items/fetchrun_relation_bug` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRun_relation_work_item `POST` `/work_items/fetchrun_relation_work_item` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchTest_case_relation_bug `POST` `/work_items/fetchtest_case_relation_bug` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchTest_case_relation_work_item `POST` `/work_items/fetchtest_case_relation_work_item` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchTest_plan_relation_bug `POST` `/work_items/fetchtest_plan_relation_bug` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchTicket_relation_work_item `POST` `/work_items/fetchticket_relation_work_item` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchTop `POST` `/work_items/fetchtop` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchTree_grid `POST` `/work_items/fetchtree_grid` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchTree_tile_grid_query `POST` `/work_items/fetchtree_tile_grid_query` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchUnder_work `POST` `/work_items/fetchunder_work` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchWork_item_relation_work_item `POST` `/work_items/fetchwork_item_relation_work_item` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/work_items/importtemplate`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入模板标识`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

#### **Response**
```file
数据导入模板.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导出 `POST` `/work_items/exportdata/{param},/work_items/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* param - `导出集合方法名称`
* key - `数据主键`

<p class="panel-title"><b>RequestParam</b></p>

* srfexporttag - `导出模板标识`

<p class="panel-title"><b>Body</b></p>

* page - `page`
* size - `分页大小`
* n_xxx_eq - `过滤参数`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>PathVariable</b></p>

```json
fetchdefult
```

<p class="panel-title"><b>RequestParam</b></p>

```json
srfexporttag=EXPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```json
参考param对应的集合请求参数
```

#### **Response**
```file
数据导出.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导入 `POST` `/work_items/importdata`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`

<p class="panel-title"><b>Body</b></p>

* file - `导入数据.xlsx`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```
file=导入数据.xlsx
```

#### **Response**
```json
{
  1:导入错误信息,
  2:导入错误信息,
  3:导入错误信息,
  ...
}
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导入（返回错误excel） `POST` `/work_items/importdata2`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`

<p class="panel-title"><b>Body</b></p>

* file - `导入数据.xlsx`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```
file=导入数据.xlsx
```

#### **Response**
```file
导入错误.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
自定义表头导入（异步） `GET` `/work_items/asyncimportdata2`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`
* srfossfileid - `导入文件`
* srfimportschemaid - `表头定义`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
srfossfileid=b87cee52cfb88072b5733d9a796d8dca
srfimportschemaid=81593a65e81b7a07fcf84bd3e93cf3b8
```

#### **Response**
```json
{
  "actiontype": "DEIMPORTDATA2",
  "srfdcid": null,
  "updateman": null,
  "fulltopictag": null,
  "actionstate": 10,
  "dcsystemid": null,
  "createdate": null,
  "asyncacitonid": "1ea54b415c09d459de668eff641aa9aa",
  "asyncacitonname": "[导入]数据导入作业[dataimport]",
  "actionparam2": "dataimport",
  "createman": null,
  "updatedate": null,
  "actionparam": null
}
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据打印 `GET` `/work_items/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* key - `打印数据key`

<p class="panel-title"><b>RequestParam</b></p>

* srfprinttag - `打印标识`
* srfcontenttype - `报表类型`


<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>PathVariable</b></p>

```json
key
```

<p class="panel-title"><b>RequestParam</b></p>

```
srfprinttag=PRINTTAG
srfcontenttype=PDF
```

#### **Response**
```file

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
实体报表 `POST` `/work_items/report`

<p class="panel-title"><b>RequestParam</b></p>

* srfreporttag - `报表标识`
* srfcontenttype - `报表类型`


<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```
srfreporttag=DRX
srfcontenttype=PDF
```

<p class="panel-title"><b>Body</b></p>

```json
{
  "":"",
  "":"",
  ...
}
```

#### **Response**
```

```
<!-- tabs:end -->
<!-- panels:end -->


### PROJECT

<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/projects/{pkey}/work_items` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/projects/{pkey}/work_items/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识





<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```




#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/projects/{pkey}/work_items/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识





<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```




#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Update `PUT` `/projects/{pkey}/work_items/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Activate `POST` `/projects/{pkey}/work_items/{key}/activate` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Archive `POST` `/projects/{pkey}/work_items/{key}/archive` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Change_assignee `POST` `/projects/{pkey}/work_items/{key}/change_assignee` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Change_parent `POST` `/projects/{pkey}/work_items/{key}/change_parent` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Change_state `POST` `/projects/{pkey}/work_items/{key}/change_state` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Change_time `POST` `/projects/{pkey}/work_items/{key}/change_time` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/projects/{pkey}/work_items/checkkey` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
INT


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Child_del_relation `POST` `/projects/{pkey}/work_items/{key}/child_del_relation` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Choose_child `POST` `/projects/{pkey}/work_items/{key}/choose_child` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Copy `POST` `/projects/{pkey}/work_items/{key}/copy` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Del_relation `POST` `/projects/{pkey}/work_items/{key}/del_relation` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Delete `POST` `/projects/{pkey}/work_items/{key}/delete` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Estimated_updateform `PUT` `/projects/{pkey}/work_items/{key}/estimated_updateform` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
GetDraft `GET` `/projects/{pkey}/work_items/getdraft` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get_attention `GET` `/projects/{pkey}/work_items/{key}/get_attention` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识





<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```




#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Move_work_item `POST` `/projects/{pkey}/work_items/move_work_item` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Others_relation_work_item `POST` `/projects/{pkey}/work_items/others_relation_work_item` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Plan_work_item `POST` `/projects/{pkey}/work_items/plan_work_item` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Recover `POST` `/projects/{pkey}/work_items/{key}/recover` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Remaining_updateform `PUT` `/projects/{pkey}/work_items/{key}/remaining_updateform` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/projects/{pkey}/work_items/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Set_default_entry `POST` `/projects/{pkey}/work_items/set_default_entry` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Set_type_bug `POST` `/projects/{pkey}/work_items/set_type_bug` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Shift_in_sprint `POST` `/projects/{pkey}/work_items/{key}/shift_in_sprint` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Shift_in_version `POST` `/projects/{pkey}/work_items/{key}/shift_in_version` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Work_item_re_counters `POST` `/projects/{pkey}/work_items/{key}/work_item_re_counters` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Work_item_test_plan_project `POST` `/projects/{pkey}/work_items/{key}/work_item_test_plan_project` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `title` - 标题
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `state` - 状态
 * `priority` - 优先级
 * `is_leaf` - 是否叶子节点
 * `backlog_type` - 需求类型
 * `backlog_from` - 需求来源
 * `assignee_name` - 负责人
 * `description` - 描述
 * `assignee_id` - 负责人标识
 * `reappear_probability` - 复现概率
 * `severity` - 严重程度
 * `risk` - 风险
 * `project_type` - 项目类型
 * `work_item_type_group` - 工作项类型分组
 * `tags` - 标签
 * `entry_status` - 看板栏状态
 * `entry_position` - 所在看板栏位置
 * `rep_num` - 统计数
 * `work_item_type_sequence` - 工作项类型序号
 * `completed_at` - 完成时间
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `job_type` - 任务类别
 * `test_plan_id` - 测试计划ID
 * `remaining_workload` - 剩余工时
 * `attachments` - 附件
 * `actual_workload` - 实际工时
 * `deliverable` - 交付物
 * `show_identifier` - 编号
 * `project_identifier` - 项目标识
 * `attentions` - 关注
 * `rep_group_value` - 报表分组属性
 * `rep_percent_value` - 报表百分值
 * `rep_value_1` - 报表值1
 * `rep_value_2` - 报表值2
 * `board_id` - 看板标识
 * `board_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `entry_id` - 看板栏标识
 * `entry_name` - 看板栏名称
 * `id` - 标识
 * `pid` - 父标识
 * `project_id` - 项目标识
 * `project_name` - 所属项目
 * `ptitle` - 父工作项
 * `release_id` - 项目发布标识
 * `sprint_id` - 迭代标识
 * `sprint_name` - 迭代名称
 * `swimlane_id` - 泳道标识
 * `top_id` - 顶级工作项标识
 * `top_title` - 顶级工作项标题
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 项目发布标识
 * `version_name` - 发布名称
 * `work_item_type_id` - 工作项类型
 * `work_item_type_name` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "identifier" : null,
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
  "reappear_probability" : null,
  "severity" : null,
  "risk" : null,
  "project_type" : null,
  "work_item_type_group" : null,
  "tags" : null,
  "entry_status" : null,
  "entry_position" : null,
  "rep_num" : null,
  "work_item_type_sequence" : null,
  "completed_at" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "job_type" : null,
  "test_plan_id" : null,
  "remaining_workload" : null,
  "attachments" : null,
  "actual_workload" : null,
  "deliverable" : null,
  "show_identifier" : null,
  "project_identifier" : null,
  "attentions" : null,
  "rep_group_value" : null,
  "rep_percent_value" : null,
  "rep_value_1" : null,
  "rep_value_2" : null,
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
  "sprint_id" : null,
  "sprint_name" : null,
  "swimlane_id" : null,
  "top_id" : null,
  "top_title" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
  "work_item_type_id" : null,
  "work_item_type_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchArchived `POST` `/projects/{pkey}/work_items/fetcharchived` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchBug `POST` `/projects/{pkey}/work_items/fetchbug` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchBug_state_group_grid `POST` `/projects/{pkey}/work_items/fetchbug_state_group_grid` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchChange_parent `POST` `/projects/{pkey}/work_items/fetchchange_parent` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchChoose_child `POST` `/projects/{pkey}/work_items/fetchchoose_child` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchComment_notify_assignee `POST` `/projects/{pkey}/work_items/fetchcomment_notify_assignee` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "assignee_id" : null,
    "assignee_name" : null,
    "id" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchCommon `POST` `/projects/{pkey}/work_items/fetchcommon` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
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
    "end_at" : null,
    "pid" : null,
    "start_at" : null,
    "top_id" : null,
    "project_id" : null,
    "is_archived" : null,
    "ptitle" : null,
    "reappear_probability" : null,
    "severity" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchCommon_bug `POST` `/projects/{pkey}/work_items/fetchcommon_bug` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
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
    "end_at" : null,
    "pid" : null,
    "start_at" : null,
    "top_id" : null,
    "project_id" : null,
    "is_archived" : null,
    "ptitle" : null,
    "reappear_probability" : null,
    "severity" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchDefault `POST` `/projects/{pkey}/work_items/fetchdefault` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchDeleted `POST` `/projects/{pkey}/work_items/fetchdeleted` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchIdea_relation_work_item `POST` `/projects/{pkey}/work_items/fetchidea_relation_work_item` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchIdea_tree_grid `POST` `/projects/{pkey}/work_items/fetchidea_tree_grid` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMilestone `POST` `/projects/{pkey}/work_items/fetchmilestone` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_assignee `POST` `/projects/{pkey}/work_items/fetchmy_assignee` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_assignee_count `POST` `/projects/{pkey}/work_items/fetchmy_assignee_count` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_attention `POST` `/projects/{pkey}/work_items/fetchmy_attention` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_created `POST` `/projects/{pkey}/work_items/fetchmy_created` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_filter `POST` `/projects/{pkey}/work_items/fetchmy_filter` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_todo `POST` `/projects/{pkey}/work_items/fetchmy_todo` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNo_bug_work_item `POST` `/projects/{pkey}/work_items/fetchno_bug_work_item` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/projects/{pkey}/work_items/fetchnormal` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNot_exsists_bug_relation `POST` `/projects/{pkey}/work_items/fetchnot_exsists_bug_relation` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNot_exsists_relation `POST` `/projects/{pkey}/work_items/fetchnot_exsists_relation` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNotbug_exsists_relation `POST` `/projects/{pkey}/work_items/fetchnotbug_exsists_relation` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchOverview_chart `POST` `/projects/{pkey}/work_items/fetchoverview_chart` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchPlan `POST` `/projects/{pkey}/work_items/fetchplan` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchProperty_distribution `POST` `/projects/{pkey}/work_items/fetchproperty_distribution` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_work_item `POST` `/projects/{pkey}/work_items/fetchrecent_work_item` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchRequirement `POST` `/projects/{pkey}/work_items/fetchrequirement` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchRun_relation_bug `POST` `/projects/{pkey}/work_items/fetchrun_relation_bug` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchRun_relation_work_item `POST` `/projects/{pkey}/work_items/fetchrun_relation_work_item` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchTest_case_relation_bug `POST` `/projects/{pkey}/work_items/fetchtest_case_relation_bug` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchTest_case_relation_work_item `POST` `/projects/{pkey}/work_items/fetchtest_case_relation_work_item` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchTest_plan_relation_bug `POST` `/projects/{pkey}/work_items/fetchtest_plan_relation_bug` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchTicket_relation_work_item `POST` `/projects/{pkey}/work_items/fetchticket_relation_work_item` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchTop `POST` `/projects/{pkey}/work_items/fetchtop` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchTree_grid `POST` `/projects/{pkey}/work_items/fetchtree_grid` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchTree_tile_grid_query `POST` `/projects/{pkey}/work_items/fetchtree_tile_grid_query` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchUnder_work `POST` `/projects/{pkey}/work_items/fetchunder_work` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchWork_item_relation_work_item `POST` `/projects/{pkey}/work_items/fetchwork_item_relation_work_item` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_attentions_exists__n_user_id_eq` - 关注
 * `n_backlog_from_eq` - 需求来源
 * `n_backlog_type_eq` - 需求类型
 * `n_board_id_eq` - 看板标识
 * `n_board_name_eq` - 名称
 * `n_board_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_entry_id_eq` - 看板栏标识
 * `n_entry_name_eq` - 看板栏名称
 * `n_entry_name_like` - 看板栏名称
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_exists__n_id_eq` - 标识
 * `n_id_in` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_job_type_eq` - 任务类别
 * `n_pid_eq` - 父标识
 * `n_priority_eq` - 优先级
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 所属项目
 * `n_project_name_like` - 所属项目
 * `n_ptitle_eq` - 父工作项
 * `n_ptitle_like` - 父工作项
 * `n_reappear_probability_eq` - 复现概率
 * `n_release_id_eq` - 项目发布标识
 * `n_risk_eq` - 风险
 * `n_severity_eq` - 严重程度
 * `n_show_identifier_like` - 编号
 * `n_sprint_id_eq` - 迭代标识
 * `n_sprint_id_isnull` - 迭代标识
 * `n_sprint_name_eq` - 迭代名称
 * `n_sprint_name_like` - 迭代名称
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
 * `n_swimlane_id_eq` - 泳道标识
 * `n_title_like` - 标题
 * `n_top_id_eq` - 顶级工作项标识
 * `n_top_id_in` - 顶级工作项标识
 * `n_top_title_eq` - 顶级工作项标题
 * `n_top_title_like` - 顶级工作项标题
 * `n_version_id_eq` - 项目发布标识
 * `n_version_name_eq` - 发布名称
 * `n_version_name_like` - 发布名称
 * `n_work_item_type_group_eq` - 工作项类型分组
 * `n_work_item_type_id_eq` - 工作项类型
 * `n_work_item_type_id_like` - 工作项类型
 * `n_work_item_type_name_eq` - 工作项类型
 * `n_work_item_type_name_like` - 工作项类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_attentions_exists__n_user_id_eq" : null,
  "n_backlog_from_eq" : null,
  "n_backlog_type_eq" : null,
  "n_board_id_eq" : null,
  "n_board_name_eq" : null,
  "n_board_name_like" : null,
  "n_create_man_eq" : null,
  "n_entry_id_eq" : null,
  "n_entry_name_eq" : null,
  "n_entry_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_exists__n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_job_type_eq" : null,
  "n_pid_eq" : null,
  "n_priority_eq" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_ptitle_eq" : null,
  "n_ptitle_like" : null,
  "n_reappear_probability_eq" : null,
  "n_release_id_eq" : null,
  "n_risk_eq" : null,
  "n_severity_eq" : null,
  "n_show_identifier_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_id_isnull" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_swimlane_id_eq" : null,
  "n_title_like" : null,
  "n_top_id_eq" : null,
  "n_top_id_in" : null,
  "n_top_title_eq" : null,
  "n_top_title_like" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
  "n_work_item_type_group_eq" : null,
  "n_work_item_type_id_eq" : null,
  "n_work_item_type_id_like" : null,
  "n_work_item_type_name_eq" : null,
  "n_work_item_type_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
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
    "reappear_probability" : null,
    "severity" : null,
    "risk" : null,
    "project_type" : null,
    "work_item_type_group" : null,
    "tags" : null,
    "entry_status" : null,
    "entry_position" : null,
    "rep_num" : null,
    "work_item_type_sequence" : null,
    "completed_at" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "job_type" : null,
    "test_plan_id" : null,
    "remaining_workload" : null,
    "attachments" : null,
    "actual_workload" : null,
    "deliverable" : null,
    "show_identifier" : null,
    "project_identifier" : null,
    "attentions" : null,
    "rep_group_value" : null,
    "rep_percent_value" : null,
    "rep_value_1" : null,
    "rep_value_2" : null,
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
    "sprint_id" : null,
    "sprint_name" : null,
    "swimlane_id" : null,
    "top_id" : null,
    "top_title" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
    "work_item_type_id" : null,
    "work_item_type_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/projects/{pkey}/work_items/importtemplate`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `项目主键标识`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入模板标识`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

#### **Response**
```file
数据导入模板.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导出 `POST` `/projects/{pkey}/work_items/exportdata/{param},/projects/{pkey}/work_items/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `项目主键标识`
* param - `导出集合方法名称`
* key - `数据主键`

<p class="panel-title"><b>RequestParam</b></p>

* srfexporttag - `导出模板标识`

<p class="panel-title"><b>Body</b></p>

* page - `page`
* size - `分页大小`
* n_xxx_eq - `过滤参数`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>PathVariable</b></p>

```json
fetchdefult
```

<p class="panel-title"><b>RequestParam</b></p>

```json
srfexporttag=EXPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```json
参考param对应的集合请求参数
```

#### **Response**
```file
数据导出.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导入 `POST` `/projects/{pkey}/work_items/importdata`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `项目主键标识`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`

<p class="panel-title"><b>Body</b></p>

* file - `导入数据.xlsx`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```
file=导入数据.xlsx
```

#### **Response**
```json
{
  1:导入错误信息,
  2:导入错误信息,
  3:导入错误信息,
  ...
}
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导入（返回错误excel） `POST` `/projects/{pkey}/work_items/importdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `项目主键标识`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`

<p class="panel-title"><b>Body</b></p>

* file - `导入数据.xlsx`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```
file=导入数据.xlsx
```

#### **Response**
```file
导入错误.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
自定义表头导入（异步） `GET` `/projects/{pkey}/work_items/asyncimportdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `项目主键标识`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`
* srfossfileid - `导入文件`
* srfimportschemaid - `表头定义`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
srfossfileid=b87cee52cfb88072b5733d9a796d8dca
srfimportschemaid=81593a65e81b7a07fcf84bd3e93cf3b8
```

#### **Response**
```json
{
  "actiontype": "DEIMPORTDATA2",
  "srfdcid": null,
  "updateman": null,
  "fulltopictag": null,
  "actionstate": 10,
  "dcsystemid": null,
  "createdate": null,
  "asyncacitonid": "1ea54b415c09d459de668eff641aa9aa",
  "asyncacitonname": "[导入]数据导入作业[dataimport]",
  "actionparam2": "dataimport",
  "createman": null,
  "updatedate": null,
  "actionparam": null
}
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据打印 `GET` `/projects/{pkey}/work_items/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `项目主键标识`
* key - `打印数据key`

<p class="panel-title"><b>RequestParam</b></p>

* srfprinttag - `打印标识`
* srfcontenttype - `报表类型`


<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>PathVariable</b></p>

```json
key
```

<p class="panel-title"><b>RequestParam</b></p>

```
srfprinttag=PRINTTAG
srfcontenttype=PDF
```

#### **Response**
```file

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
实体报表 `POST` `/projects/{pkey}/work_items/report`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `项目主键标识`

<p class="panel-title"><b>RequestParam</b></p>

* srfreporttag - `报表标识`
* srfcontenttype - `报表类型`


<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```
srfreporttag=DRX
srfcontenttype=PDF
```

<p class="panel-title"><b>Body</b></p>

```json
{
  "":"",
  "":"",
  ...
}
```

#### **Response**
```

```
<!-- tabs:end -->
<!-- panels:end -->
