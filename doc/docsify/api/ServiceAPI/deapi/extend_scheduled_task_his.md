# 扩展计划任务历史(extend_scheduled_task_his) :id=extend_scheduled_task_his
## 创建扩展计划任务历史

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/extend_scheduled_task_his" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">enable</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|逻辑有效标识|
|<el-row justify="space-between"><el-col :span="20">task_type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务类型|
|<el-row justify="space-between"><el-col :span="20">task_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务类型|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|任务状态|
|<el-row justify="space-between"><el-col :span="20">retry_count</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|已重试次数|
|<el-row justify="space-between"><el-col :span="20">max_retry</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|最大重试次数|
|<el-row justify="space-between"><el-col :span="20">payload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务执行参数|
|<el-row justify="space-between"><el-col :span="20">result_message</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行信息|
|<el-row justify="space-between"><el-col :span="20">result</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">scheduled_at</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|计划执行时间|
|<el-row justify="space-between"><el-col :span="20">finished_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行完成时间|
|<el-row justify="space-between"><el-col :span="20">started_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|实际开始时间|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务主体标识|
|<el-row justify="space-between"><el-col :span="20">principal_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务主体名称|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务主体类型|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "enable" : null,
  "task_type_name" : null,
  "task_type" : null,
  "status" : null,
  "retry_count" : null,
  "max_retry" : null,
  "payload" : null,
  "result_message" : null,
  "result" : null,
  "scheduled_at" : null,
  "finished_at" : null,
  "started_at" : null,
  "description" : null,
  "principal_id" : null,
  "principal_name" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "enable" : null,
  "task_type_name" : null,
  "task_type" : null,
  "status" : null,
  "retry_count" : null,
  "max_retry" : null,
  "payload" : null,
  "result_message" : null,
  "result" : null,
  "scheduled_at" : null,
  "finished_at" : null,
  "started_at" : null,
  "description" : null,
  "principal_id" : null,
  "principal_name" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 获取扩展计划任务历史

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/extend_scheduled_task_his/{key}" type="info" :closable="false" ></el-alert>
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
  "id" : null,
  "name" : null,
  "enable" : null,
  "task_type_name" : null,
  "task_type" : null,
  "status" : null,
  "retry_count" : null,
  "max_retry" : null,
  "payload" : null,
  "result_message" : null,
  "result" : null,
  "scheduled_at" : null,
  "finished_at" : null,
  "started_at" : null,
  "description" : null,
  "principal_id" : null,
  "principal_name" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 删除扩展计划任务历史

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/extend_scheduled_task_his/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|





## 更新扩展计划任务历史

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/extend_scheduled_task_his/{key}" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">enable</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|逻辑有效标识|
|<el-row justify="space-between"><el-col :span="20">task_type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务类型|
|<el-row justify="space-between"><el-col :span="20">task_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务类型|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|任务状态|
|<el-row justify="space-between"><el-col :span="20">retry_count</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|已重试次数|
|<el-row justify="space-between"><el-col :span="20">max_retry</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|最大重试次数|
|<el-row justify="space-between"><el-col :span="20">payload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务执行参数|
|<el-row justify="space-between"><el-col :span="20">result_message</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行信息|
|<el-row justify="space-between"><el-col :span="20">result</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">scheduled_at</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|计划执行时间|
|<el-row justify="space-between"><el-col :span="20">finished_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行完成时间|
|<el-row justify="space-between"><el-col :span="20">started_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|实际开始时间|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务主体标识|
|<el-row justify="space-between"><el-col :span="20">principal_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务主体名称|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务主体类型|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "enable" : null,
  "task_type_name" : null,
  "task_type" : null,
  "status" : null,
  "retry_count" : null,
  "max_retry" : null,
  "payload" : null,
  "result_message" : null,
  "result" : null,
  "scheduled_at" : null,
  "finished_at" : null,
  "started_at" : null,
  "description" : null,
  "principal_id" : null,
  "principal_name" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "enable" : null,
  "task_type_name" : null,
  "task_type" : null,
  "status" : null,
  "retry_count" : null,
  "max_retry" : null,
  "payload" : null,
  "result_message" : null,
  "result" : null,
  "scheduled_at" : null,
  "finished_at" : null,
  "started_at" : null,
  "description" : null,
  "principal_id" : null,
  "principal_name" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 检查扩展计划任务历史主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/extend_scheduled_task_his/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">enable</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|逻辑有效标识|
|<el-row justify="space-between"><el-col :span="20">task_type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务类型|
|<el-row justify="space-between"><el-col :span="20">task_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务类型|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|任务状态|
|<el-row justify="space-between"><el-col :span="20">retry_count</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|已重试次数|
|<el-row justify="space-between"><el-col :span="20">max_retry</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|最大重试次数|
|<el-row justify="space-between"><el-col :span="20">payload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务执行参数|
|<el-row justify="space-between"><el-col :span="20">result_message</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行信息|
|<el-row justify="space-between"><el-col :span="20">result</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">scheduled_at</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|计划执行时间|
|<el-row justify="space-between"><el-col :span="20">finished_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行完成时间|
|<el-row justify="space-between"><el-col :span="20">started_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|实际开始时间|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务主体标识|
|<el-row justify="space-between"><el-col :span="20">principal_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务主体名称|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务主体类型|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "enable" : null,
  "task_type_name" : null,
  "task_type" : null,
  "status" : null,
  "retry_count" : null,
  "max_retry" : null,
  "payload" : null,
  "result_message" : null,
  "result" : null,
  "scheduled_at" : null,
  "finished_at" : null,
  "started_at" : null,
  "description" : null,
  "principal_id" : null,
  "principal_name" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取扩展计划任务历史草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/extend_scheduled_task_his/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">enable</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|逻辑有效标识|
|<el-row justify="space-between"><el-col :span="20">task_type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务类型|
|<el-row justify="space-between"><el-col :span="20">task_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务类型|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|任务状态|
|<el-row justify="space-between"><el-col :span="20">retry_count</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|已重试次数|
|<el-row justify="space-between"><el-col :span="20">max_retry</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|最大重试次数|
|<el-row justify="space-between"><el-col :span="20">payload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务执行参数|
|<el-row justify="space-between"><el-col :span="20">result_message</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行信息|
|<el-row justify="space-between"><el-col :span="20">result</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">scheduled_at</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|计划执行时间|
|<el-row justify="space-between"><el-col :span="20">finished_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行完成时间|
|<el-row justify="space-between"><el-col :span="20">started_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|实际开始时间|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务主体标识|
|<el-row justify="space-between"><el-col :span="20">principal_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务主体名称|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务主体类型|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "enable" : null,
  "task_type_name" : null,
  "task_type" : null,
  "status" : null,
  "retry_count" : null,
  "max_retry" : null,
  "payload" : null,
  "result_message" : null,
  "result" : null,
  "scheduled_at" : null,
  "finished_at" : null,
  "started_at" : null,
  "description" : null,
  "principal_id" : null,
  "principal_name" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "enable" : null,
  "task_type_name" : null,
  "task_type" : null,
  "status" : null,
  "retry_count" : null,
  "max_retry" : null,
  "payload" : null,
  "result_message" : null,
  "result" : null,
  "scheduled_at" : null,
  "finished_at" : null,
  "started_at" : null,
  "description" : null,
  "principal_id" : null,
  "principal_name" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 保存扩展计划任务历史

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/extend_scheduled_task_his/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">enable</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|逻辑有效标识|
|<el-row justify="space-between"><el-col :span="20">task_type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务类型|
|<el-row justify="space-between"><el-col :span="20">task_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务类型|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|任务状态|
|<el-row justify="space-between"><el-col :span="20">retry_count</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|已重试次数|
|<el-row justify="space-between"><el-col :span="20">max_retry</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|最大重试次数|
|<el-row justify="space-between"><el-col :span="20">payload</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务执行参数|
|<el-row justify="space-between"><el-col :span="20">result_message</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行信息|
|<el-row justify="space-between"><el-col :span="20">result</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|执行结果|
|<el-row justify="space-between"><el-col :span="20">scheduled_at</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|计划执行时间|
|<el-row justify="space-between"><el-col :span="20">finished_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|执行完成时间|
|<el-row justify="space-between"><el-col :span="20">started_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|实际开始时间|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务主体标识|
|<el-row justify="space-between"><el-col :span="20">principal_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务主体名称|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务主体类型|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "enable" : null,
  "task_type_name" : null,
  "task_type" : null,
  "status" : null,
  "retry_count" : null,
  "max_retry" : null,
  "payload" : null,
  "result_message" : null,
  "result" : null,
  "scheduled_at" : null,
  "finished_at" : null,
  "started_at" : null,
  "description" : null,
  "principal_id" : null,
  "principal_name" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "enable" : null,
  "task_type_name" : null,
  "task_type" : null,
  "status" : null,
  "retry_count" : null,
  "max_retry" : null,
  "payload" : null,
  "result_message" : null,
  "result" : null,
  "scheduled_at" : null,
  "finished_at" : null,
  "started_at" : null,
  "description" : null,
  "principal_id" : null,
  "principal_name" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/extend_scheduled_task_his/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务状态|
|<el-row justify="space-between"><el-col :span="20">n_task_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务类型|
|<el-row justify="space-between"><el-col :span="20">n_task_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务类型|
|<el-row justify="space-between"><el-col :span="20">n_task_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|任务类型|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_status_eq" : null,
  "n_task_type_eq" : null,
  "n_task_type_name_eq" : null,
  "n_task_type_name_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "name" : null,
    "enable" : null,
    "task_type_name" : null,
    "task_type" : null,
    "status" : null,
    "retry_count" : null,
    "max_retry" : null,
    "payload" : null,
    "result_message" : null,
    "result" : null,
    "scheduled_at" : null,
    "finished_at" : null,
    "started_at" : null,
    "description" : null,
    "principal_id" : null,
    "principal_name" : null,
    "principal_type" : null,
    "create_man" : null,
    "create_time" : null,
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
<el-alert title="/extend_scheduled_task_his/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/extend_scheduled_task_his/exportdata/{param},/extend_scheduled_task_his/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/extend_scheduled_task_his/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/extend_scheduled_task_his/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/extend_scheduled_task_his/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/extend_scheduled_task_his/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/extend_scheduled_task_his/report" type="info" :closable="false" ></el-alert>
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