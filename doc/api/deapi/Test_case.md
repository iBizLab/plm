# 用例(Test_case)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/test_cases` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/test_cases/{key}` <i class="fa fa-key"></i>`READ`


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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/test_cases/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/test_cases/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Case_move_plan `POST` `/test_cases/{key}/case_move_plan` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
CheckKey `POST` `/test_cases/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Copy_case `POST` `/test_cases/{key}/copy_case` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Del_relation `POST` `/test_cases/{key}/del_relation` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Delete `POST` `/test_cases/{key}/delete` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
GetDraft `GET` `/test_cases/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Move_case `POST` `/test_cases/{key}/move_case` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Newest_run `GET` `/test_cases/{key}/newest_run` <i class="fa fa-key"></i>`READ`


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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Others_relation_case `POST` `/test_cases/others_relation_case` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Recover `POST` `/test_cases/{key}/recover` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Save `POST` `/test_cases/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Set_level `POST` `/test_cases/{key}/set_level` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Set_maintenance `POST` `/test_cases/{key}/set_maintenance` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Set_state `POST` `/test_cases/{key}/set_state` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Test_case_re_counters `POST` `/test_cases/{key}/test_case_re_counters` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
FetchComment_notify_maintenance `POST` `/test_cases/fetchcomment_notify_maintenance` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "id" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchDefault `POST` `/test_cases/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchDeleted `POST` `/test_cases/fetchdeleted` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchIdea_relation_test_case `POST` `/test_cases/fetchidea_relation_test_case` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_assign `POST` `/test_cases/fetchmy_assign` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_assignee_count_test_case `POST` `/test_cases/fetchmy_assignee_count_test_case` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_attention `POST` `/test_cases/fetchmy_attention` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_created `POST` `/test_cases/fetchmy_created` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/test_cases/fetchnormal` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNosuite_test_case `POST` `/test_cases/fetchnosuite_test_case` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNot_add_case `POST` `/test_cases/fetchnot_add_case` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNot_exsists_relation `POST` `/test_cases/fetchnot_exsists_relation` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_test_case `POST` `/test_cases/fetchrecent_test_case` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchSuites_test_case `POST` `/test_cases/fetchsuites_test_case` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchWork_item_relation_test_case `POST` `/test_cases/fetchwork_item_relation_test_case` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/test_cases/importtemplate`

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
数据导出 `POST` `/test_cases/exportdata/{param},/test_cases/exportdata/{param}/{key}`

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
数据导入 `POST` `/test_cases/importdata`

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
数据导入（返回错误excel） `POST` `/test_cases/importdata2`

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
自定义表头导入（异步） `GET` `/test_cases/asyncimportdata2`

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
数据打印 `GET` `/test_cases/printdata/{key}`

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
实体报表 `POST` `/test_cases/report`

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


### LIBRARY

<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/libraries/{pkey}/test_cases` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/libraries/{pkey}/test_cases/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/libraries/{pkey}/test_cases/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
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
Update `PUT` `/libraries/{pkey}/test_cases/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Case_move_plan `POST` `/libraries/{pkey}/test_cases/{key}/case_move_plan` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
CheckKey `POST` `/libraries/{pkey}/test_cases/checkkey` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Copy_case `POST` `/libraries/{pkey}/test_cases/{key}/copy_case` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Del_relation `POST` `/libraries/{pkey}/test_cases/{key}/del_relation` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Delete `POST` `/libraries/{pkey}/test_cases/{key}/delete` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
GetDraft `GET` `/libraries/{pkey}/test_cases/getdraft` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Move_case `POST` `/libraries/{pkey}/test_cases/{key}/move_case` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Newest_run `GET` `/libraries/{pkey}/test_cases/{key}/newest_run` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Others_relation_case `POST` `/libraries/{pkey}/test_cases/others_relation_case` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Recover `POST` `/libraries/{pkey}/test_cases/{key}/recover` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Save `POST` `/libraries/{pkey}/test_cases/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Set_level `POST` `/libraries/{pkey}/test_cases/{key}/set_level` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Set_maintenance `POST` `/libraries/{pkey}/test_cases/{key}/set_maintenance` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Set_state `POST` `/libraries/{pkey}/test_cases/{key}/set_state` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
Test_case_re_counters `POST` `/libraries/{pkey}/test_cases/{key}/test_case_re_counters` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `level` - 重要程度
 * `type` - 用例类型
 * `test_type` - 测试类型
 * `description` - 描述
 * `precondition` - 前置条件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `state` - 评审状态
 * `steps` - 步骤
 * `maintenance_id` - 维护人标识
 * `maintenance_name` - 维护人
 * `test_plan_name` - 测试计划名称
 * `executed_at` - 执行时间
 * `executor_name` - 执行人
 * `run_status` - 执行结果
 * `attachments` - 附件
 * `suites` - 模块路径
 * `target_library_id` - 目标测试库
 * `show_identifier` - 编号
 * `library_identifier` - 测试库标识
 * `attentions` - 关注
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `test_library_id` - 测试库标识
 * `test_library_name` - 所属测试库
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "title" : null,
  "level" : null,
  "type" : null,
  "test_type" : null,
  "description" : null,
  "precondition" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "state" : null,
  "steps" : null,
  "maintenance_id" : null,
  "maintenance_name" : null,
  "test_plan_name" : null,
  "executed_at" : null,
  "executor_name" : null,
  "run_status" : null,
  "attachments" : null,
  "suites" : null,
  "target_library_id" : null,
  "show_identifier" : null,
  "library_identifier" : null,
  "attentions" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "test_library_id" : null,
  "test_library_name" : null,
  "update_man" : null,
  "update_time" : null,
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
FetchComment_notify_maintenance `POST` `/libraries/{pkey}/test_cases/fetchcomment_notify_maintenance` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "id" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchDefault `POST` `/libraries/{pkey}/test_cases/fetchdefault` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchDeleted `POST` `/libraries/{pkey}/test_cases/fetchdeleted` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchIdea_relation_test_case `POST` `/libraries/{pkey}/test_cases/fetchidea_relation_test_case` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_assign `POST` `/libraries/{pkey}/test_cases/fetchmy_assign` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_assignee_count_test_case `POST` `/libraries/{pkey}/test_cases/fetchmy_assignee_count_test_case` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_attention `POST` `/libraries/{pkey}/test_cases/fetchmy_attention` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_created `POST` `/libraries/{pkey}/test_cases/fetchmy_created` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/libraries/{pkey}/test_cases/fetchnormal` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNosuite_test_case `POST` `/libraries/{pkey}/test_cases/fetchnosuite_test_case` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNot_add_case `POST` `/libraries/{pkey}/test_cases/fetchnot_add_case` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNot_exsists_relation `POST` `/libraries/{pkey}/test_cases/fetchnot_exsists_relation` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_test_case `POST` `/libraries/{pkey}/test_cases/fetchrecent_test_case` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchSuites_test_case `POST` `/libraries/{pkey}/test_cases/fetchsuites_test_case` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchWork_item_relation_test_case `POST` `/libraries/{pkey}/test_cases/fetchwork_item_relation_test_case` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_level_eq` - 重要程度
 * `n_maintenance_id_eq` - 维护人标识
 * `n_name_like` - 名称
 * `n_run_status_eq` - 执行结果
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 评审状态
 * `n_state_notin` - 评审状态
 * `n_suites_like` - 模块路径
 * `n_suite_id_eq` - 用例模块标识
 * `n_suite_id_isnull` - 用例模块标识
 * `n_suite_name_eq` - 所属模块
 * `n_suite_name_like` - 所属模块
 * `n_test_library_id_eq` - 测试库标识
 * `n_test_library_name_eq` - 所属测试库
 * `n_test_library_name_like` - 所属测试库
 * `n_test_type_eq` - 测试类型
 * `n_title_like` - 标题
 * `n_type_eq` - 用例类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_level_eq" : null,
  "n_maintenance_id_eq" : null,
  "n_name_like" : null,
  "n_run_status_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suites_like" : null,
  "n_suite_id_eq" : null,
  "n_suite_id_isnull" : null,
  "n_suite_name_eq" : null,
  "n_suite_name_like" : null,
  "n_test_library_id_eq" : null,
  "n_test_library_name_eq" : null,
  "n_test_library_name_like" : null,
  "n_test_type_eq" : null,
  "n_title_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "level" : null,
    "type" : null,
    "test_type" : null,
    "description" : null,
    "precondition" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "state" : null,
    "steps" : null,
    "maintenance_id" : null,
    "maintenance_name" : null,
    "test_plan_name" : null,
    "executed_at" : null,
    "executor_name" : null,
    "run_status" : null,
    "attachments" : null,
    "suites" : null,
    "target_library_id" : null,
    "show_identifier" : null,
    "library_identifier" : null,
    "attentions" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "test_library_id" : null,
    "test_library_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/libraries/{pkey}/test_cases/importtemplate`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`

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
数据导出 `POST` `/libraries/{pkey}/test_cases/exportdata/{param},/libraries/{pkey}/test_cases/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`
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
数据导入 `POST` `/libraries/{pkey}/test_cases/importdata`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`

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
数据导入（返回错误excel） `POST` `/libraries/{pkey}/test_cases/importdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`

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
自定义表头导入（异步） `GET` `/libraries/{pkey}/test_cases/asyncimportdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`

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
数据打印 `GET` `/libraries/{pkey}/test_cases/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`
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
实体报表 `POST` `/libraries/{pkey}/test_cases/report`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`

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
