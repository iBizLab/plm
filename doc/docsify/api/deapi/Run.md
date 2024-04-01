# 执行用例(Run)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/runs` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/runs/{key}` <i class="fa fa-key"></i>`READ`


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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/runs/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/runs/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Add_plan_run `POST` `/runs/{key}/add_plan_run` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Batch_save_run_history `POST` `/runs/{key}/batch_save_run_history` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
CheckKey `POST` `/runs/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Delete_run_info `POST` `/runs/{key}/delete_run_info` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
GetDraft `GET` `/runs/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Program_plan `POST` `/runs/program_plan` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Reset_not_test `POST` `/runs/{key}/reset_not_test` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Run_history_get `GET` `/runs/run_history_get` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Run_re_counters `POST` `/runs/{key}/run_re_counters` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Save `POST` `/runs/{key}/save` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Save_run_history `POST` `/runs/{key}/save_run_history` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Set_executor `POST` `/runs/{key}/set_executor` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
This_run_details `GET` `/runs/{key}/this_run_details` <i class="fa fa-key"></i>`READ`


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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchComment_notify_executor `POST` `/runs/fetchcomment_notify_executor` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_case_id_eq` - 测试用例标识
 * `n_case_name_eq` - 名称
 * `n_case_name_like` - 名称
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_plan_id_eq` - 测试计划标识
 * `n_plan_name_eq` - 测试计划
 * `n_plan_name_like` - 测试计划
 * `n_status_eq` - 执行结果
 * `n_status_isnotnull` - 执行结果
 * `n_suite_id_eq` - 用例模块标识




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "executor_id" : null,
    "executor_name" : null,
    "id" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchDefault `POST` `/runs/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_case_id_eq` - 测试用例标识
 * `n_case_name_eq` - 名称
 * `n_case_name_like` - 名称
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_plan_id_eq` - 测试计划标识
 * `n_plan_name_eq` - 测试计划
 * `n_plan_name_like` - 测试计划
 * `n_status_eq` - 执行结果
 * `n_status_isnotnull` - 执行结果
 * `n_suite_id_eq` - 用例模块标识




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "attachments" : null,
    "library_name" : null,
    "library_id" : null,
    "attentions" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
    "run_histories" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/runs/fetchnormal` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_case_id_eq` - 测试用例标识
 * `n_case_name_eq` - 名称
 * `n_case_name_like` - 名称
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_plan_id_eq` - 测试计划标识
 * `n_plan_name_eq` - 测试计划
 * `n_plan_name_like` - 测试计划
 * `n_status_eq` - 执行结果
 * `n_status_isnotnull` - 执行结果
 * `n_suite_id_eq` - 用例模块标识




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "attachments" : null,
    "library_name" : null,
    "library_id" : null,
    "attentions" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
    "run_histories" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/runs/importtemplate`

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
数据导出 `POST` `/runs/exportdata/{param},/runs/exportdata/{param}/{key}`

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
数据导入 `POST` `/runs/importdata`

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
数据导入（返回错误excel） `POST` `/runs/importdata2`

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
自定义表头导入（异步） `GET` `/runs/asyncimportdata2`

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
数据打印 `GET` `/runs/printdata/{key}`

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
实体报表 `POST` `/runs/report`

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


### TEST_CASE

<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/test_cases/{pkey}/runs` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/test_cases/{pkey}/runs/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键
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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/test_cases/{pkey}/runs/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键
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
Update `PUT` `/test_cases/{pkey}/runs/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Add_plan_run `POST` `/test_cases/{pkey}/runs/{key}/add_plan_run` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Batch_save_run_history `POST` `/test_cases/{pkey}/runs/{key}/batch_save_run_history` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
CheckKey `POST` `/test_cases/{pkey}/runs/checkkey` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Delete_run_info `POST` `/test_cases/{pkey}/runs/{key}/delete_run_info` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
GetDraft `GET` `/test_cases/{pkey}/runs/getdraft` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Program_plan `POST` `/test_cases/{pkey}/runs/program_plan` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Reset_not_test `POST` `/test_cases/{pkey}/runs/{key}/reset_not_test` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Run_history_get `GET` `/test_cases/{pkey}/runs/run_history_get` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Run_re_counters `POST` `/test_cases/{pkey}/runs/{key}/run_re_counters` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Save `POST` `/test_cases/{pkey}/runs/{key}/save` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Save_run_history `POST` `/test_cases/{pkey}/runs/{key}/save_run_history` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Set_executor `POST` `/test_cases/{pkey}/runs/{key}/set_executor` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
This_run_details `GET` `/test_cases/{pkey}/runs/{key}/this_run_details` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键
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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchComment_notify_executor `POST` `/test_cases/{pkey}/runs/fetchcomment_notify_executor` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键



<p class="panel-title"><b>Body</b></p>

 * `n_case_id_eq` - 测试用例标识
 * `n_case_name_eq` - 名称
 * `n_case_name_like` - 名称
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_plan_id_eq` - 测试计划标识
 * `n_plan_name_eq` - 测试计划
 * `n_plan_name_like` - 测试计划
 * `n_status_eq` - 执行结果
 * `n_status_isnotnull` - 执行结果
 * `n_suite_id_eq` - 用例模块标识




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "executor_id" : null,
    "executor_name" : null,
    "id" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchDefault `POST` `/test_cases/{pkey}/runs/fetchdefault` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键



<p class="panel-title"><b>Body</b></p>

 * `n_case_id_eq` - 测试用例标识
 * `n_case_name_eq` - 名称
 * `n_case_name_like` - 名称
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_plan_id_eq` - 测试计划标识
 * `n_plan_name_eq` - 测试计划
 * `n_plan_name_like` - 测试计划
 * `n_status_eq` - 执行结果
 * `n_status_isnotnull` - 执行结果
 * `n_suite_id_eq` - 用例模块标识




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "attachments" : null,
    "library_name" : null,
    "library_id" : null,
    "attentions" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
    "run_histories" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/test_cases/{pkey}/runs/fetchnormal` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 用例主键



<p class="panel-title"><b>Body</b></p>

 * `n_case_id_eq` - 测试用例标识
 * `n_case_name_eq` - 名称
 * `n_case_name_like` - 名称
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_plan_id_eq` - 测试计划标识
 * `n_plan_name_eq` - 测试计划
 * `n_plan_name_like` - 测试计划
 * `n_status_eq` - 执行结果
 * `n_status_isnotnull` - 执行结果
 * `n_suite_id_eq` - 用例模块标识




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "attachments" : null,
    "library_name" : null,
    "library_id" : null,
    "attentions" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
    "run_histories" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/test_cases/{pkey}/runs/importtemplate`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `用例主键标识`

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
数据导出 `POST` `/test_cases/{pkey}/runs/exportdata/{param},/test_cases/{pkey}/runs/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `用例主键标识`
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
数据导入 `POST` `/test_cases/{pkey}/runs/importdata`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `用例主键标识`

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
数据导入（返回错误excel） `POST` `/test_cases/{pkey}/runs/importdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `用例主键标识`

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
自定义表头导入（异步） `GET` `/test_cases/{pkey}/runs/asyncimportdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `用例主键标识`

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
数据打印 `GET` `/test_cases/{pkey}/runs/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `用例主键标识`
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
实体报表 `POST` `/test_cases/{pkey}/runs/report`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `用例主键标识`

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
### TEST_PLAN

<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/test_plans/{pkey}/runs` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/test_plans/{pkey}/runs/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键
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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/test_plans/{pkey}/runs/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键
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
Update `PUT` `/test_plans/{pkey}/runs/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Add_plan_run `POST` `/test_plans/{pkey}/runs/{key}/add_plan_run` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Batch_save_run_history `POST` `/test_plans/{pkey}/runs/{key}/batch_save_run_history` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
CheckKey `POST` `/test_plans/{pkey}/runs/checkkey` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Delete_run_info `POST` `/test_plans/{pkey}/runs/{key}/delete_run_info` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
GetDraft `GET` `/test_plans/{pkey}/runs/getdraft` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Program_plan `POST` `/test_plans/{pkey}/runs/program_plan` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Reset_not_test `POST` `/test_plans/{pkey}/runs/{key}/reset_not_test` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Run_history_get `GET` `/test_plans/{pkey}/runs/run_history_get` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Run_re_counters `POST` `/test_plans/{pkey}/runs/{key}/run_re_counters` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Save `POST` `/test_plans/{pkey}/runs/{key}/save` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Save_run_history `POST` `/test_plans/{pkey}/runs/{key}/save_run_history` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
Set_executor `POST` `/test_plans/{pkey}/runs/{key}/set_executor` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 评审状态
 * `level` - 重要程度
 * `type` - 用例类型
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `remark` - 备注
 * `steps` - 步骤
 * `plan_name` - 测试计划
 * `test_type` - 测试类型
 * `maintenance_name` - 维护人
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `suite_id` - 用例模块标识
 * `suite_name` - 所属模块
 * `precondition` - 前置条件
 * `suites` - 模块路径
 * `attachments` - 附件
 * `library_name` - 所属测试库
 * `library_id` - 测试库标识
 * `attentions` - 关注
 * `case_id` - 测试用例标识
 * `case_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `plan_id` - 测试计划标识
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `run_histories` - null




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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
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
This_run_details `GET` `/test_plans/{pkey}/runs/{key}/this_run_details` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键
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
  "state" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "attachments" : null,
  "library_name" : null,
  "library_id" : null,
  "attentions" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
  "run_histories" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchComment_notify_executor `POST` `/test_plans/{pkey}/runs/fetchcomment_notify_executor` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键



<p class="panel-title"><b>Body</b></p>

 * `n_case_id_eq` - 测试用例标识
 * `n_case_name_eq` - 名称
 * `n_case_name_like` - 名称
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_plan_id_eq` - 测试计划标识
 * `n_plan_name_eq` - 测试计划
 * `n_plan_name_like` - 测试计划
 * `n_status_eq` - 执行结果
 * `n_status_isnotnull` - 执行结果
 * `n_suite_id_eq` - 用例模块标识




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "executor_id" : null,
    "executor_name" : null,
    "id" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchDefault `POST` `/test_plans/{pkey}/runs/fetchdefault` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键



<p class="panel-title"><b>Body</b></p>

 * `n_case_id_eq` - 测试用例标识
 * `n_case_name_eq` - 名称
 * `n_case_name_like` - 名称
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_plan_id_eq` - 测试计划标识
 * `n_plan_name_eq` - 测试计划
 * `n_plan_name_like` - 测试计划
 * `n_status_eq` - 执行结果
 * `n_status_isnotnull` - 执行结果
 * `n_suite_id_eq` - 用例模块标识




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "attachments" : null,
    "library_name" : null,
    "library_id" : null,
    "attentions" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
    "run_histories" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/test_plans/{pkey}/runs/fetchnormal` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试计划主键



<p class="panel-title"><b>Body</b></p>

 * `n_case_id_eq` - 测试用例标识
 * `n_case_name_eq` - 名称
 * `n_case_name_like` - 名称
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_plan_id_eq` - 测试计划标识
 * `n_plan_name_eq` - 测试计划
 * `n_plan_name_like` - 测试计划
 * `n_status_eq` - 执行结果
 * `n_status_isnotnull` - 执行结果
 * `n_suite_id_eq` - 用例模块标识




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "attachments" : null,
    "library_name" : null,
    "library_id" : null,
    "attentions" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
    "run_histories" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/test_plans/{pkey}/runs/importtemplate`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试计划主键标识`

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
数据导出 `POST` `/test_plans/{pkey}/runs/exportdata/{param},/test_plans/{pkey}/runs/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试计划主键标识`
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
数据导入 `POST` `/test_plans/{pkey}/runs/importdata`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试计划主键标识`

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
数据导入（返回错误excel） `POST` `/test_plans/{pkey}/runs/importdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试计划主键标识`

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
自定义表头导入（异步） `GET` `/test_plans/{pkey}/runs/asyncimportdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试计划主键标识`

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
数据打印 `GET` `/test_plans/{pkey}/runs/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试计划主键标识`
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
实体报表 `POST` `/test_plans/{pkey}/runs/report`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试计划主键标识`

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
