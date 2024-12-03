# 执行用例(run) :id=run
## 创建执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 获取执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/{key}" type="info" :closable="false" ></el-alert>
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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 删除执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|





## 更新执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 添加计划执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/{key}/add_plan_run" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 批设置执行结果

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/{key}/batch_save_run_history" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 检查执行用例主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取实际工时

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/{key}/get_actual_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|




##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 获取执行用例草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 其他实体关联执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/{key}/other_relation_run" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 规划计划

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/program_plan" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 通过发布规划计划

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/program_plan_by_release" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 通过迭代规划计划

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/program_plan_by_sprint" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 通过工作项规划计划

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/program_plan_by_workitem" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 重置为未测

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/{key}/reset_not_test" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 执行结果获取

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/run_history_get" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 执行用例关联分页计数器

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/{key}/run_re_counters" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 保存执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 保存执行结果

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/{key}/save_run_history" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 设置执行人

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/{key}/set_executor" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 当前执行用例详情

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/{key}/this_run_details" type="info" :closable="false" ></el-alert>
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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "parent_version_id" : null,
  "level" : null,
  "type" : null,
  "executed_at" : null,
  "status" : null,
  "remark" : null,
  "steps" : null,
  "plan_name" : null,
  "test_type" : null,
  "cur_version_id" : null,
  "maintenance_name" : null,
  "executor_id" : null,
  "executor_name" : null,
  "suite_id" : null,
  "suite_name" : null,
  "precondition" : null,
  "suites" : null,
  "relation_total_bug" : null,
  "library_name" : null,
  "library_id" : null,
  "show_identifier" : null,
  "attentions" : null,
  "estimated_workload" : null,
  "workload_schedule" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
  "run_attachment" : null,
  "relation_total_history" : null,
  "priority" : null,
  "is_newest" : null,
  "library_identifier" : null,
  "bi_plan_name" : null,
  "attention_count" : null,
  "comment_count" : null,
  "library_is_deleted" : null,
  "library_is_archived" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "case_id" : null,
  "case_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "plan_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## BI反查

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/fetch_bi_detail" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_executed_at_eq" : null,
  "n_executed_at_gtandeq" : null,
  "n_executed_at_ltandeq" : null,
  "n_executor_id_eq" : null,
  "n_executor_id_in" : null,
  "n_executor_id_isnotnull" : null,
  "n_executor_id_isnull" : null,
  "n_executor_id_noteq" : null,
  "n_executor_id_notin" : null,
  "n_executor_name_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_maintenance_name_eq" : null,
  "n_maintenance_name_isnotnull" : null,
  "n_maintenance_name_isnull" : null,
  "n_maintenance_name_noteq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_priority_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
  "n_title_eq" : null,
  "n_title_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "parent_version_id" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "cur_version_id" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "relation_total_bug" : null,
    "library_name" : null,
    "library_id" : null,
    "show_identifier" : null,
    "attentions" : null,
    "estimated_workload" : null,
    "workload_schedule" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "run_attachment" : null,
    "relation_total_history" : null,
    "priority" : null,
    "is_newest" : null,
    "library_identifier" : null,
    "bi_plan_name" : null,
    "attention_count" : null,
    "comment_count" : null,
    "library_is_deleted" : null,
    "library_is_archived" : null,
    "attentions_imp" : null,
    "recent_create_days" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## BI查询

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/fetch_bi_search" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_executed_at_eq" : null,
  "n_executed_at_gtandeq" : null,
  "n_executed_at_ltandeq" : null,
  "n_executor_id_eq" : null,
  "n_executor_id_in" : null,
  "n_executor_id_isnotnull" : null,
  "n_executor_id_isnull" : null,
  "n_executor_id_noteq" : null,
  "n_executor_id_notin" : null,
  "n_executor_name_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_maintenance_name_eq" : null,
  "n_maintenance_name_isnotnull" : null,
  "n_maintenance_name_isnull" : null,
  "n_maintenance_name_noteq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_priority_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
  "n_title_eq" : null,
  "n_title_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "is_newest" : null,
    "executed_at" : null,
    "create_time" : null,
    "update_time" : null,
    "executor_name" : null,
    "update_man" : null,
    "name" : null,
    "create_man" : null,
    "executor_id" : null,
    "cur_version_id" : null,
    "workload_schedule" : null,
    "remaining_workload" : null,
    "relation_total_history" : null,
    "relation_total_bug" : null,
    "estimated_workload" : null,
    "actual_workload" : null,
    "library_name" : null,
    "type" : null,
    "level" : null,
    "state" : null,
    "maintenance_name" : null,
    "test_type" : null,
    "identifier" : null,
    "library_id" : null,
    "title" : null,
    "suite_name" : null,
    "case_name" : null,
    "plan_name" : null,
    "plan_id" : null,
    "case_id" : null,
    "status" : null,
    "priority" : null,
    "id" : null,
    "bi_plan_name" : null,
    "library_is_deleted" : null,
  }
]
```

## 测试用例获取最新执行结果

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/fetch_case_latest_executed" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_executed_at_eq" : null,
  "n_executed_at_gtandeq" : null,
  "n_executed_at_ltandeq" : null,
  "n_executor_id_eq" : null,
  "n_executor_id_in" : null,
  "n_executor_id_isnotnull" : null,
  "n_executor_id_isnull" : null,
  "n_executor_id_noteq" : null,
  "n_executor_id_notin" : null,
  "n_executor_name_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_maintenance_name_eq" : null,
  "n_maintenance_name_isnotnull" : null,
  "n_maintenance_name_isnull" : null,
  "n_maintenance_name_noteq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_priority_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
  "n_title_eq" : null,
  "n_title_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "parent_version_id" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "cur_version_id" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "relation_total_bug" : null,
    "library_name" : null,
    "library_id" : null,
    "show_identifier" : null,
    "attentions" : null,
    "estimated_workload" : null,
    "workload_schedule" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "run_attachment" : null,
    "relation_total_history" : null,
    "priority" : null,
    "is_newest" : null,
    "library_identifier" : null,
    "bi_plan_name" : null,
    "attention_count" : null,
    "comment_count" : null,
    "library_is_deleted" : null,
    "library_is_archived" : null,
    "attentions_imp" : null,
    "recent_create_days" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 用例成员分布

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/fetch_case_person" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_executed_at_eq" : null,
  "n_executed_at_gtandeq" : null,
  "n_executed_at_ltandeq" : null,
  "n_executor_id_eq" : null,
  "n_executor_id_in" : null,
  "n_executor_id_isnotnull" : null,
  "n_executor_id_isnull" : null,
  "n_executor_id_noteq" : null,
  "n_executor_id_notin" : null,
  "n_executor_name_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_maintenance_name_eq" : null,
  "n_maintenance_name_isnotnull" : null,
  "n_maintenance_name_isnull" : null,
  "n_maintenance_name_noteq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_priority_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
  "n_title_eq" : null,
  "n_title_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "parent_version_id" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "cur_version_id" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "relation_total_bug" : null,
    "library_name" : null,
    "library_id" : null,
    "show_identifier" : null,
    "attentions" : null,
    "estimated_workload" : null,
    "workload_schedule" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "run_attachment" : null,
    "relation_total_history" : null,
    "priority" : null,
    "is_newest" : null,
    "library_identifier" : null,
    "bi_plan_name" : null,
    "attention_count" : null,
    "comment_count" : null,
    "library_is_deleted" : null,
    "library_is_archived" : null,
    "attentions_imp" : null,
    "recent_create_days" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 评论通知执行人

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/fetch_comment_notify_executor" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_executed_at_eq" : null,
  "n_executed_at_gtandeq" : null,
  "n_executed_at_ltandeq" : null,
  "n_executor_id_eq" : null,
  "n_executor_id_in" : null,
  "n_executor_id_isnotnull" : null,
  "n_executor_id_isnull" : null,
  "n_executor_id_noteq" : null,
  "n_executor_id_notin" : null,
  "n_executor_name_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_maintenance_name_eq" : null,
  "n_maintenance_name_isnotnull" : null,
  "n_maintenance_name_isnull" : null,
  "n_maintenance_name_noteq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_priority_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
  "n_title_eq" : null,
  "n_title_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "executor_id" : null,
    "executor_name" : null,
    "id" : null,
  }
]
```

## 测试用例计划对比分析

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/fetch_comparative_analysis" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_executed_at_eq" : null,
  "n_executed_at_gtandeq" : null,
  "n_executed_at_ltandeq" : null,
  "n_executor_id_eq" : null,
  "n_executor_id_in" : null,
  "n_executor_id_isnotnull" : null,
  "n_executor_id_isnull" : null,
  "n_executor_id_noteq" : null,
  "n_executor_id_notin" : null,
  "n_executor_name_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_maintenance_name_eq" : null,
  "n_maintenance_name_isnotnull" : null,
  "n_maintenance_name_isnull" : null,
  "n_maintenance_name_noteq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_priority_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
  "n_title_eq" : null,
  "n_title_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "parent_version_id" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "cur_version_id" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "relation_total_bug" : null,
    "library_name" : null,
    "library_id" : null,
    "show_identifier" : null,
    "attentions" : null,
    "estimated_workload" : null,
    "workload_schedule" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "run_attachment" : null,
    "relation_total_history" : null,
    "priority" : null,
    "is_newest" : null,
    "library_identifier" : null,
    "bi_plan_name" : null,
    "attention_count" : null,
    "comment_count" : null,
    "library_is_deleted" : null,
    "library_is_archived" : null,
    "attentions_imp" : null,
    "recent_create_days" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 每日执行用例趋势

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/fetch_daily_tendencies" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_executed_at_eq" : null,
  "n_executed_at_gtandeq" : null,
  "n_executed_at_ltandeq" : null,
  "n_executor_id_eq" : null,
  "n_executor_id_in" : null,
  "n_executor_id_isnotnull" : null,
  "n_executor_id_isnull" : null,
  "n_executor_id_noteq" : null,
  "n_executor_id_notin" : null,
  "n_executor_name_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_maintenance_name_eq" : null,
  "n_maintenance_name_isnotnull" : null,
  "n_maintenance_name_isnull" : null,
  "n_maintenance_name_noteq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_priority_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
  "n_title_eq" : null,
  "n_title_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "parent_version_id" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "cur_version_id" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "relation_total_bug" : null,
    "library_name" : null,
    "library_id" : null,
    "show_identifier" : null,
    "attentions" : null,
    "estimated_workload" : null,
    "workload_schedule" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "run_attachment" : null,
    "relation_total_history" : null,
    "priority" : null,
    "is_newest" : null,
    "library_identifier" : null,
    "bi_plan_name" : null,
    "attention_count" : null,
    "comment_count" : null,
    "library_is_deleted" : null,
    "library_is_archived" : null,
    "attentions_imp" : null,
    "recent_create_days" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_executed_at_eq" : null,
  "n_executed_at_gtandeq" : null,
  "n_executed_at_ltandeq" : null,
  "n_executor_id_eq" : null,
  "n_executor_id_in" : null,
  "n_executor_id_isnotnull" : null,
  "n_executor_id_isnull" : null,
  "n_executor_id_noteq" : null,
  "n_executor_id_notin" : null,
  "n_executor_name_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_maintenance_name_eq" : null,
  "n_maintenance_name_isnotnull" : null,
  "n_maintenance_name_isnull" : null,
  "n_maintenance_name_noteq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_priority_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
  "n_title_eq" : null,
  "n_title_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "parent_version_id" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "cur_version_id" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "relation_total_bug" : null,
    "library_name" : null,
    "library_id" : null,
    "show_identifier" : null,
    "attentions" : null,
    "estimated_workload" : null,
    "workload_schedule" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "run_attachment" : null,
    "relation_total_history" : null,
    "priority" : null,
    "is_newest" : null,
    "library_identifier" : null,
    "bi_plan_name" : null,
    "attention_count" : null,
    "comment_count" : null,
    "library_is_deleted" : null,
    "library_is_archived" : null,
    "attentions_imp" : null,
    "recent_create_days" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 每日测试次数统计

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/fetch_everyday_test" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_executed_at_eq" : null,
  "n_executed_at_gtandeq" : null,
  "n_executed_at_ltandeq" : null,
  "n_executor_id_eq" : null,
  "n_executor_id_in" : null,
  "n_executor_id_isnotnull" : null,
  "n_executor_id_isnull" : null,
  "n_executor_id_noteq" : null,
  "n_executor_id_notin" : null,
  "n_executor_name_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_maintenance_name_eq" : null,
  "n_maintenance_name_isnotnull" : null,
  "n_maintenance_name_isnull" : null,
  "n_maintenance_name_noteq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_priority_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
  "n_title_eq" : null,
  "n_title_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "parent_version_id" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "cur_version_id" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "relation_total_bug" : null,
    "library_name" : null,
    "library_id" : null,
    "show_identifier" : null,
    "attentions" : null,
    "estimated_workload" : null,
    "workload_schedule" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "run_attachment" : null,
    "relation_total_history" : null,
    "priority" : null,
    "is_newest" : null,
    "library_identifier" : null,
    "bi_plan_name" : null,
    "attention_count" : null,
    "comment_count" : null,
    "library_is_deleted" : null,
    "library_is_archived" : null,
    "attentions_imp" : null,
    "recent_create_days" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 执行结果分布

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/fetch_implementation_results" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_executed_at_eq" : null,
  "n_executed_at_gtandeq" : null,
  "n_executed_at_ltandeq" : null,
  "n_executor_id_eq" : null,
  "n_executor_id_in" : null,
  "n_executor_id_isnotnull" : null,
  "n_executor_id_isnull" : null,
  "n_executor_id_noteq" : null,
  "n_executor_id_notin" : null,
  "n_executor_name_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_maintenance_name_eq" : null,
  "n_maintenance_name_isnotnull" : null,
  "n_maintenance_name_isnull" : null,
  "n_maintenance_name_noteq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_priority_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
  "n_title_eq" : null,
  "n_title_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "parent_version_id" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "cur_version_id" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "relation_total_bug" : null,
    "library_name" : null,
    "library_id" : null,
    "show_identifier" : null,
    "attentions" : null,
    "estimated_workload" : null,
    "workload_schedule" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "run_attachment" : null,
    "relation_total_history" : null,
    "priority" : null,
    "is_newest" : null,
    "library_identifier" : null,
    "bi_plan_name" : null,
    "attention_count" : null,
    "comment_count" : null,
    "library_is_deleted" : null,
    "library_is_archived" : null,
    "attentions_imp" : null,
    "recent_create_days" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 过滤器默认查询

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/fetch_my_filter" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_executed_at_eq" : null,
  "n_executed_at_gtandeq" : null,
  "n_executed_at_ltandeq" : null,
  "n_executor_id_eq" : null,
  "n_executor_id_in" : null,
  "n_executor_id_isnotnull" : null,
  "n_executor_id_isnull" : null,
  "n_executor_id_noteq" : null,
  "n_executor_id_notin" : null,
  "n_executor_name_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_maintenance_name_eq" : null,
  "n_maintenance_name_isnotnull" : null,
  "n_maintenance_name_isnull" : null,
  "n_maintenance_name_noteq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_priority_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
  "n_title_eq" : null,
  "n_title_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "parent_version_id" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "cur_version_id" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "relation_total_bug" : null,
    "library_name" : null,
    "library_id" : null,
    "show_identifier" : null,
    "attentions" : null,
    "estimated_workload" : null,
    "workload_schedule" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "run_attachment" : null,
    "relation_total_history" : null,
    "priority" : null,
    "is_newest" : null,
    "library_identifier" : null,
    "bi_plan_name" : null,
    "attention_count" : null,
    "comment_count" : null,
    "library_is_deleted" : null,
    "library_is_archived" : null,
    "attentions_imp" : null,
    "recent_create_days" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 当前模块下用例

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/fetch_normal" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_executed_at_eq" : null,
  "n_executed_at_gtandeq" : null,
  "n_executed_at_ltandeq" : null,
  "n_executor_id_eq" : null,
  "n_executor_id_in" : null,
  "n_executor_id_isnotnull" : null,
  "n_executor_id_isnull" : null,
  "n_executor_id_noteq" : null,
  "n_executor_id_notin" : null,
  "n_executor_name_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_maintenance_name_eq" : null,
  "n_maintenance_name_isnotnull" : null,
  "n_maintenance_name_isnull" : null,
  "n_maintenance_name_noteq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_priority_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
  "n_title_eq" : null,
  "n_title_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "parent_version_id" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "cur_version_id" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "relation_total_bug" : null,
    "library_name" : null,
    "library_id" : null,
    "show_identifier" : null,
    "attentions" : null,
    "estimated_workload" : null,
    "workload_schedule" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "run_attachment" : null,
    "relation_total_history" : null,
    "priority" : null,
    "is_newest" : null,
    "library_identifier" : null,
    "bi_plan_name" : null,
    "attention_count" : null,
    "comment_count" : null,
    "library_is_deleted" : null,
    "library_is_archived" : null,
    "attentions_imp" : null,
    "recent_create_days" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 测试计划内执行历史

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/fetch_plan_run_history" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_executed_at_eq" : null,
  "n_executed_at_gtandeq" : null,
  "n_executed_at_ltandeq" : null,
  "n_executor_id_eq" : null,
  "n_executor_id_in" : null,
  "n_executor_id_isnotnull" : null,
  "n_executor_id_isnull" : null,
  "n_executor_id_noteq" : null,
  "n_executor_id_notin" : null,
  "n_executor_name_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_maintenance_name_eq" : null,
  "n_maintenance_name_isnotnull" : null,
  "n_maintenance_name_isnull" : null,
  "n_maintenance_name_noteq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_priority_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
  "n_title_eq" : null,
  "n_title_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "parent_version_id" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "cur_version_id" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "relation_total_bug" : null,
    "library_name" : null,
    "library_id" : null,
    "show_identifier" : null,
    "attentions" : null,
    "estimated_workload" : null,
    "workload_schedule" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "run_attachment" : null,
    "relation_total_history" : null,
    "priority" : null,
    "is_newest" : null,
    "library_identifier" : null,
    "bi_plan_name" : null,
    "attention_count" : null,
    "comment_count" : null,
    "library_is_deleted" : null,
    "library_is_archived" : null,
    "attentions_imp" : null,
    "recent_create_days" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 优先级分布

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/fetch_priority_distributions" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_executed_at_eq" : null,
  "n_executed_at_gtandeq" : null,
  "n_executed_at_ltandeq" : null,
  "n_executor_id_eq" : null,
  "n_executor_id_in" : null,
  "n_executor_id_isnotnull" : null,
  "n_executor_id_isnull" : null,
  "n_executor_id_noteq" : null,
  "n_executor_id_notin" : null,
  "n_executor_name_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_maintenance_name_eq" : null,
  "n_maintenance_name_isnotnull" : null,
  "n_maintenance_name_isnull" : null,
  "n_maintenance_name_noteq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_priority_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
  "n_title_eq" : null,
  "n_title_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "parent_version_id" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "cur_version_id" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "relation_total_bug" : null,
    "library_name" : null,
    "library_id" : null,
    "show_identifier" : null,
    "attentions" : null,
    "estimated_workload" : null,
    "workload_schedule" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "run_attachment" : null,
    "relation_total_history" : null,
    "priority" : null,
    "is_newest" : null,
    "library_identifier" : null,
    "bi_plan_name" : null,
    "attention_count" : null,
    "comment_count" : null,
    "library_is_deleted" : null,
    "library_is_archived" : null,
    "attentions_imp" : null,
    "recent_create_days" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 只读用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/fetch_reader" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_case_id_eq" : null,
  "n_case_name_eq" : null,
  "n_case_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_executed_at_eq" : null,
  "n_executed_at_gtandeq" : null,
  "n_executed_at_ltandeq" : null,
  "n_executor_id_eq" : null,
  "n_executor_id_in" : null,
  "n_executor_id_isnotnull" : null,
  "n_executor_id_isnull" : null,
  "n_executor_id_noteq" : null,
  "n_executor_id_notin" : null,
  "n_executor_name_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_maintenance_name_eq" : null,
  "n_maintenance_name_isnotnull" : null,
  "n_maintenance_name_isnull" : null,
  "n_maintenance_name_noteq" : null,
  "n_name_like" : null,
  "n_plan_id_eq" : null,
  "n_plan_name_eq" : null,
  "n_plan_name_like" : null,
  "n_priority_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_show_identifier_eq" : null,
  "n_show_identifier_like" : null,
  "n_status_eq" : null,
  "n_status_isnotnull" : null,
  "n_suite_id_eq" : null,
  "n_title_eq" : null,
  "n_title_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "parent_version_id" : null,
    "level" : null,
    "type" : null,
    "executed_at" : null,
    "status" : null,
    "remark" : null,
    "steps" : null,
    "plan_name" : null,
    "test_type" : null,
    "cur_version_id" : null,
    "maintenance_name" : null,
    "executor_id" : null,
    "executor_name" : null,
    "suite_id" : null,
    "suite_name" : null,
    "precondition" : null,
    "suites" : null,
    "relation_total_bug" : null,
    "library_name" : null,
    "library_id" : null,
    "show_identifier" : null,
    "attentions" : null,
    "estimated_workload" : null,
    "workload_schedule" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
    "run_attachment" : null,
    "relation_total_history" : null,
    "priority" : null,
    "is_newest" : null,
    "library_identifier" : null,
    "bi_plan_name" : null,
    "attention_count" : null,
    "comment_count" : null,
    "library_is_deleted" : null,
    "library_is_archived" : null,
    "attentions_imp" : null,
    "recent_create_days" : null,
    "case_id" : null,
    "case_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "plan_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/runs/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/runs/exportdata/{param},/runs/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/runs/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/runs/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/runs/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/runs/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/runs/report" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfreporttag | String | 报表标识 |
| srfcontenttype | String | 报表类型 |




## 根据用例创建执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例获取执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|
|key|String|标识|




## 根据用例删除执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|
|key|String|标识|




## 根据用例更新执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例添加计划执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/{key}/add_plan_run" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例批设置执行结果

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/{key}/batch_save_run_history" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例检查执行用例主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例获取实际工时

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/{key}/get_actual_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|
|key|String|标识|




## 根据用例获取执行用例草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例其他实体关联执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/{key}/other_relation_run" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例规划计划

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/program_plan" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例通过发布规划计划

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/program_plan_by_release" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例通过迭代规划计划

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/program_plan_by_sprint" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例通过工作项规划计划

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/program_plan_by_workitem" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例重置为未测

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/{key}/reset_not_test" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例执行结果获取

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/run_history_get" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例执行用例关联分页计数器

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/{key}/run_re_counters" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例保存执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例保存执行结果

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/{key}/save_run_history" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例设置执行人

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/{key}/set_executor" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据用例当前执行用例详情

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/{key}/this_run_details" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|
|key|String|标识|




## 根据用例BI反查

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/fetch_bi_detail" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据用例BI查询

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/fetch_bi_search" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据用例测试用例获取最新执行结果

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/fetch_case_latest_executed" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据用例用例成员分布

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/fetch_case_person" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据用例评论通知执行人

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/fetch_comment_notify_executor" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据用例测试用例计划对比分析

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/fetch_comparative_analysis" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据用例每日执行用例趋势

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/fetch_daily_tendencies" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据用例数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据用例每日测试次数统计

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/fetch_everyday_test" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据用例执行结果分布

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/fetch_implementation_results" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据用例过滤器默认查询

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/fetch_my_filter" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据用例当前模块下用例

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/fetch_normal" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据用例测试计划内执行历史

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/fetch_plan_run_history" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据用例优先级分布

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/fetch_priority_distributions" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据用例只读用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/fetch_reader" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|用例主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|




## 根据用例下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/importtemplate" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |



## 根据用例数据导出

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/exportdata/{param},/test_cases/{pkey}/runs/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|
|param|String|导出集合方法名称|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|
|srfexporttag|String|导出模板标识|

##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|page|Integer|page|
|size|Integer|分页大小|
|n_xxx_eq|String|过滤参数|


## 根据用例数据导入

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/importdata" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 根据用例数据导入（返回错误excel）

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/importdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 根据用例自定义表头导入（异步）
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/asyncimportdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |
| srfossfileid | String | 导入文件 |
| srfimportschemaid | String | 表头定义 |


## 根据用例数据打印
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/printdata/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfprinttag | String | 打印标识 |
| srfcontenttype | String | 打印类型 |



## 根据用例报表打印

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_cases/{pkey}/runs/report" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfreporttag | String | 报表标识 |
| srfcontenttype | String | 报表类型 |



## 根据测试计划创建执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划获取执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|
|key|String|标识|




## 根据测试计划删除执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|
|key|String|标识|




## 根据测试计划更新执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划添加计划执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/{key}/add_plan_run" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划批设置执行结果

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/{key}/batch_save_run_history" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划检查执行用例主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划获取实际工时

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/{key}/get_actual_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|
|key|String|标识|




## 根据测试计划获取执行用例草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划其他实体关联执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/{key}/other_relation_run" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划规划计划

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/program_plan" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划通过发布规划计划

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/program_plan_by_release" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划通过迭代规划计划

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/program_plan_by_sprint" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划通过工作项规划计划

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/program_plan_by_workitem" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划重置为未测

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/{key}/reset_not_test" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划执行结果获取

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/run_history_get" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划执行用例关联分页计数器

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/{key}/run_re_counters" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划保存执行用例

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划保存执行结果

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/{key}/save_run_history" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划设置执行人

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/{key}/set_executor" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审状态|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">level</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|重要程度|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例类型|
|<el-row justify="space-between"><el-col :span="20">executed_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">remark</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">steps</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|步骤|
|<el-row justify="space-between"><el-col :span="20">plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">test_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试类型|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">maintenance_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">executor_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">executor_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">suite_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">suite_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属模块|
|<el-row justify="space-between"><el-col :span="20">precondition</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|前置条件|
|<el-row justify="space-between"><el-col :span="20">suites</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块路径|
|<el-row justify="space-between"><el-col :span="20">relation_total_bug</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联缺陷数|
|<el-row justify="space-between"><el-col :span="20">library_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">library_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">estimated_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|预估工时|
|<el-row justify="space-between"><el-col :span="20">workload_schedule</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|工时进度|
|<el-row justify="space-between"><el-col :span="20">remaining_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|剩余工时|
|<el-row justify="space-between"><el-col :span="20">actual_workload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|实际工时|
|<el-row justify="space-between"><el-col :span="20">run_attachment</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|结果附件|
|<el-row justify="space-between"><el-col :span="20">relation_total_history</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|关联执行结果数|
|<el-row justify="space-between"><el-col :span="20">priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">is_newest</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否最新|
|<el-row justify="space-between"><el-col :span="20">library_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库编号|
|<el-row justify="space-between"><el-col :span="20">bi_plan_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|bi测试计划名称|
|<el-row justify="space-between"><el-col :span="20">attention_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注数|
|<el-row justify="space-between"><el-col :span="20">comment_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评论数|
|<el-row justify="space-between"><el-col :span="20">library_is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否删除|
|<el-row justify="space-between"><el-col :span="20">library_is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|测试库是否归档|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">recent_create_days</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">case_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">case_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">plan_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|



## 根据测试计划当前执行用例详情

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/{key}/this_run_details" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|
|key|String|标识|




## 根据测试计划BI反查

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/fetch_bi_detail" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据测试计划BI查询

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/fetch_bi_search" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据测试计划测试用例获取最新执行结果

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/fetch_case_latest_executed" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据测试计划用例成员分布

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/fetch_case_person" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据测试计划评论通知执行人

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/fetch_comment_notify_executor" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据测试计划测试用例计划对比分析

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/fetch_comparative_analysis" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据测试计划每日执行用例趋势

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/fetch_daily_tendencies" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据测试计划数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据测试计划每日测试次数统计

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/fetch_everyday_test" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据测试计划执行结果分布

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/fetch_implementation_results" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据测试计划过滤器默认查询

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/fetch_my_filter" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据测试计划当前模块下用例

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/fetch_normal" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据测试计划测试计划内执行历史

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/fetch_plan_run_history" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据测试计划优先级分布

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/fetch_priority_distributions" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|



## 根据测试计划只读用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/fetch_reader" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|测试计划主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_case_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试用例标识|
|<el-row justify="space-between"><el-col :span="20">n_case_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_case_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executed_at_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行时间|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人标识|
|<el-row justify="space-between"><el-col :span="20">n_executor_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行人|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_library_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试库标识|
|<el-row justify="space-between"><el-col :span="20">n_library_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_library_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属测试库|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_maintenance_name_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维护人|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划标识|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_plan_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|测试计划|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_status_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">n_suite_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例模块标识|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|




## 根据测试计划下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/importtemplate" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |



## 根据测试计划数据导出

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/exportdata/{param},/test_plans/{pkey}/runs/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|
|param|String|导出集合方法名称|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|
|srfexporttag|String|导出模板标识|

##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|page|Integer|page|
|size|Integer|分页大小|
|n_xxx_eq|String|过滤参数|


## 根据测试计划数据导入

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/importdata" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 根据测试计划数据导入（返回错误excel）

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/importdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 根据测试计划自定义表头导入（异步）
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/asyncimportdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |
| srfossfileid | String | 导入文件 |
| srfimportschemaid | String | 表头定义 |


## 根据测试计划数据打印
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/printdata/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfprinttag | String | 打印标识 |
| srfcontenttype | String | 打印类型 |



## 根据测试计划报表打印

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/test_plans/{pkey}/runs/report" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

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