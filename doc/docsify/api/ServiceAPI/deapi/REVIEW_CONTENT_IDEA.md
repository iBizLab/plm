# 产品需求评审内容(REVIEW_CONTENT_IDEA) :id=REVIEW_CONTENT_IDEA
## 创建产品需求评审内容

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_content_ideas" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



##### 请求示例： {docsify-ignore}
```json
{
  "change_type" : null,
  "principal_id" : null,
  "change_version" : null,
  "owner_type" : null,
  "principal_type" : null,
  "stage_results" : null,
  "final_stage_results" : null,
  "target_type" : null,
  "parent_version_id" : null,
  "target_version_id" : null,
  "id" : null,
  "name" : null,
  "create_time" : null,
  "update_time" : null,
  "create_man" : null,
  "update_man" : null,
  "review_data" : null,
  "idea" : null,
  "cur_version_id" : null,
  "target_identifier" : null,
  "target_title" : null,
  "target_state" : null,
  "target_assignee" : null,
  "target_version" : null,
  "target_priority" : null,
  "target_parent_id" : null,
  "target_id" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "change_type" : null,
  "principal_id" : null,
  "change_version" : null,
  "owner_type" : null,
  "principal_type" : null,
  "stage_results" : null,
  "final_stage_results" : null,
  "target_type" : null,
  "parent_version_id" : null,
  "target_version_id" : null,
  "id" : null,
  "name" : null,
  "create_time" : null,
  "update_time" : null,
  "create_man" : null,
  "update_man" : null,
  "review_data" : null,
  "idea" : null,
  "cur_version_id" : null,
  "target_identifier" : null,
  "target_title" : null,
  "target_state" : null,
  "target_assignee" : null,
  "target_version" : null,
  "target_priority" : null,
  "target_parent_id" : null,
  "target_id" : null,
}

```

## 获取产品需求评审内容

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_content_ideas/{key}" type="info" :closable="false" ></el-alert>
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
  "change_type" : null,
  "principal_id" : null,
  "change_version" : null,
  "owner_type" : null,
  "principal_type" : null,
  "stage_results" : null,
  "final_stage_results" : null,
  "target_type" : null,
  "parent_version_id" : null,
  "target_version_id" : null,
  "id" : null,
  "name" : null,
  "create_time" : null,
  "update_time" : null,
  "create_man" : null,
  "update_man" : null,
  "review_data" : null,
  "idea" : null,
  "cur_version_id" : null,
  "target_identifier" : null,
  "target_title" : null,
  "target_state" : null,
  "target_assignee" : null,
  "target_version" : null,
  "target_priority" : null,
  "target_parent_id" : null,
  "target_id" : null,
}

```

## 删除产品需求评审内容

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_content_ideas/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|





## 更新产品需求评审内容

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_content_ideas/{key}" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



##### 请求示例： {docsify-ignore}
```json
{
  "change_type" : null,
  "principal_id" : null,
  "change_version" : null,
  "owner_type" : null,
  "principal_type" : null,
  "stage_results" : null,
  "final_stage_results" : null,
  "target_type" : null,
  "parent_version_id" : null,
  "target_version_id" : null,
  "id" : null,
  "name" : null,
  "create_time" : null,
  "update_time" : null,
  "create_man" : null,
  "update_man" : null,
  "review_data" : null,
  "idea" : null,
  "cur_version_id" : null,
  "target_identifier" : null,
  "target_title" : null,
  "target_state" : null,
  "target_assignee" : null,
  "target_version" : null,
  "target_priority" : null,
  "target_parent_id" : null,
  "target_id" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "change_type" : null,
  "principal_id" : null,
  "change_version" : null,
  "owner_type" : null,
  "principal_type" : null,
  "stage_results" : null,
  "final_stage_results" : null,
  "target_type" : null,
  "parent_version_id" : null,
  "target_version_id" : null,
  "id" : null,
  "name" : null,
  "create_time" : null,
  "update_time" : null,
  "create_man" : null,
  "update_man" : null,
  "review_data" : null,
  "idea" : null,
  "cur_version_id" : null,
  "target_identifier" : null,
  "target_title" : null,
  "target_state" : null,
  "target_assignee" : null,
  "target_version" : null,
  "target_priority" : null,
  "target_parent_id" : null,
  "target_id" : null,
}

```

## 检查产品需求评审内容主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_content_ideas/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



##### 请求示例： {docsify-ignore}
```json
{
  "change_type" : null,
  "principal_id" : null,
  "change_version" : null,
  "owner_type" : null,
  "principal_type" : null,
  "stage_results" : null,
  "final_stage_results" : null,
  "target_type" : null,
  "parent_version_id" : null,
  "target_version_id" : null,
  "id" : null,
  "name" : null,
  "create_time" : null,
  "update_time" : null,
  "create_man" : null,
  "update_man" : null,
  "review_data" : null,
  "idea" : null,
  "cur_version_id" : null,
  "target_identifier" : null,
  "target_title" : null,
  "target_state" : null,
  "target_assignee" : null,
  "target_version" : null,
  "target_priority" : null,
  "target_parent_id" : null,
  "target_id" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取产品需求评审内容草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_content_ideas/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



##### 请求示例： {docsify-ignore}
```json
{
  "change_type" : null,
  "principal_id" : null,
  "change_version" : null,
  "owner_type" : null,
  "principal_type" : null,
  "stage_results" : null,
  "final_stage_results" : null,
  "target_type" : null,
  "parent_version_id" : null,
  "target_version_id" : null,
  "id" : null,
  "name" : null,
  "create_time" : null,
  "update_time" : null,
  "create_man" : null,
  "update_man" : null,
  "review_data" : null,
  "idea" : null,
  "cur_version_id" : null,
  "target_identifier" : null,
  "target_title" : null,
  "target_state" : null,
  "target_assignee" : null,
  "target_version" : null,
  "target_priority" : null,
  "target_parent_id" : null,
  "target_id" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "change_type" : null,
  "principal_id" : null,
  "change_version" : null,
  "owner_type" : null,
  "principal_type" : null,
  "stage_results" : null,
  "final_stage_results" : null,
  "target_type" : null,
  "parent_version_id" : null,
  "target_version_id" : null,
  "id" : null,
  "name" : null,
  "create_time" : null,
  "update_time" : null,
  "create_man" : null,
  "update_man" : null,
  "review_data" : null,
  "idea" : null,
  "cur_version_id" : null,
  "target_identifier" : null,
  "target_title" : null,
  "target_state" : null,
  "target_assignee" : null,
  "target_version" : null,
  "target_priority" : null,
  "target_parent_id" : null,
  "target_id" : null,
}

```

## 评审内容条数

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_content_ideas/review_content_total" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



##### 请求示例： {docsify-ignore}
```json
{
  "change_type" : null,
  "principal_id" : null,
  "change_version" : null,
  "owner_type" : null,
  "principal_type" : null,
  "stage_results" : null,
  "final_stage_results" : null,
  "target_type" : null,
  "parent_version_id" : null,
  "target_version_id" : null,
  "id" : null,
  "name" : null,
  "create_time" : null,
  "update_time" : null,
  "create_man" : null,
  "update_man" : null,
  "review_data" : null,
  "idea" : null,
  "cur_version_id" : null,
  "target_identifier" : null,
  "target_title" : null,
  "target_state" : null,
  "target_assignee" : null,
  "target_version" : null,
  "target_priority" : null,
  "target_parent_id" : null,
  "target_id" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "change_type" : null,
  "principal_id" : null,
  "change_version" : null,
  "owner_type" : null,
  "principal_type" : null,
  "stage_results" : null,
  "final_stage_results" : null,
  "target_type" : null,
  "parent_version_id" : null,
  "target_version_id" : null,
  "id" : null,
  "name" : null,
  "create_time" : null,
  "update_time" : null,
  "create_man" : null,
  "update_man" : null,
  "review_data" : null,
  "idea" : null,
  "cur_version_id" : null,
  "target_identifier" : null,
  "target_title" : null,
  "target_state" : null,
  "target_assignee" : null,
  "target_version" : null,
  "target_priority" : null,
  "target_parent_id" : null,
  "target_id" : null,
}

```

## 保存产品需求评审内容

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_content_ideas/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



##### 请求示例： {docsify-ignore}
```json
{
  "change_type" : null,
  "principal_id" : null,
  "change_version" : null,
  "owner_type" : null,
  "principal_type" : null,
  "stage_results" : null,
  "final_stage_results" : null,
  "target_type" : null,
  "parent_version_id" : null,
  "target_version_id" : null,
  "id" : null,
  "name" : null,
  "create_time" : null,
  "update_time" : null,
  "create_man" : null,
  "update_man" : null,
  "review_data" : null,
  "idea" : null,
  "cur_version_id" : null,
  "target_identifier" : null,
  "target_title" : null,
  "target_state" : null,
  "target_assignee" : null,
  "target_version" : null,
  "target_priority" : null,
  "target_parent_id" : null,
  "target_id" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "change_type" : null,
  "principal_id" : null,
  "change_version" : null,
  "owner_type" : null,
  "principal_type" : null,
  "stage_results" : null,
  "final_stage_results" : null,
  "target_type" : null,
  "parent_version_id" : null,
  "target_version_id" : null,
  "id" : null,
  "name" : null,
  "create_time" : null,
  "update_time" : null,
  "create_man" : null,
  "update_man" : null,
  "review_data" : null,
  "idea" : null,
  "cur_version_id" : null,
  "target_identifier" : null,
  "target_title" : null,
  "target_state" : null,
  "target_assignee" : null,
  "target_version" : null,
  "target_priority" : null,
  "target_parent_id" : null,
  "target_id" : null,
}

```

## 全部数据

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_content_ideas/fetch_all" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">n_target_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|
|<el-row justify="space-between"><el-col :span="20">n_target_version_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_principal_id_eq" : null,
  "n_target_id_eq" : null,
  "n_target_version_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "change_type" : null,
    "principal_id" : null,
    "change_version" : null,
    "owner_type" : null,
    "principal_type" : null,
    "stage_results" : null,
    "final_stage_results" : null,
    "target_type" : null,
    "parent_version_id" : null,
    "target_version_id" : null,
    "id" : null,
    "name" : null,
    "create_time" : null,
    "update_time" : null,
    "create_man" : null,
    "update_man" : null,
    "review_data" : null,
    "idea" : null,
    "cur_version_id" : null,
    "target_identifier" : null,
    "target_title" : null,
    "target_state" : null,
    "target_assignee" : null,
    "target_version" : null,
    "target_priority" : null,
    "target_parent_id" : null,
    "target_id" : null,
  }
]
```

## 当前评审历史

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_content_ideas/fetch_cur_history" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">n_target_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|
|<el-row justify="space-between"><el-col :span="20">n_target_version_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_principal_id_eq" : null,
  "n_target_id_eq" : null,
  "n_target_version_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "change_type" : null,
    "principal_id" : null,
    "change_version" : null,
    "owner_type" : null,
    "principal_type" : null,
    "stage_results" : null,
    "final_stage_results" : null,
    "target_type" : null,
    "parent_version_id" : null,
    "target_version_id" : null,
    "id" : null,
    "name" : null,
    "create_time" : null,
    "update_time" : null,
    "create_man" : null,
    "update_man" : null,
    "review_data" : null,
    "idea" : null,
    "cur_version_id" : null,
    "target_identifier" : null,
    "target_title" : null,
    "target_state" : null,
    "target_assignee" : null,
    "target_version" : null,
    "target_priority" : null,
    "target_parent_id" : null,
    "target_id" : null,
  }
]
```

## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_content_ideas/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">n_target_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|
|<el-row justify="space-between"><el-col :span="20">n_target_version_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_principal_id_eq" : null,
  "n_target_id_eq" : null,
  "n_target_version_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "change_type" : null,
    "principal_id" : null,
    "change_version" : null,
    "owner_type" : null,
    "principal_type" : null,
    "stage_results" : null,
    "final_stage_results" : null,
    "target_type" : null,
    "parent_version_id" : null,
    "target_version_id" : null,
    "id" : null,
    "name" : null,
    "create_time" : null,
    "update_time" : null,
    "create_man" : null,
    "update_man" : null,
    "review_data" : null,
    "idea" : null,
    "cur_version_id" : null,
    "target_identifier" : null,
    "target_title" : null,
    "target_state" : null,
    "target_assignee" : null,
    "target_version" : null,
    "target_priority" : null,
    "target_parent_id" : null,
    "target_id" : null,
  }
]
```

## 评审历史列表

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_content_ideas/fetch_history_list" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">n_target_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|
|<el-row justify="space-between"><el-col :span="20">n_target_version_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_principal_id_eq" : null,
  "n_target_id_eq" : null,
  "n_target_version_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "change_type" : null,
    "principal_id" : null,
    "change_version" : null,
    "owner_type" : null,
    "principal_type" : null,
    "stage_results" : null,
    "final_stage_results" : null,
    "target_type" : null,
    "parent_version_id" : null,
    "target_version_id" : null,
    "id" : null,
    "name" : null,
    "create_time" : null,
    "update_time" : null,
    "create_man" : null,
    "update_man" : null,
    "review_data" : null,
    "idea" : null,
    "cur_version_id" : null,
    "target_identifier" : null,
    "target_title" : null,
    "target_state" : null,
    "target_assignee" : null,
    "target_version" : null,
    "target_priority" : null,
    "target_parent_id" : null,
    "target_id" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_content_ideas/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/review_content_ideas/exportdata/{param},/review_content_ideas/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/review_content_ideas/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/review_content_ideas/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/review_content_ideas/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/review_content_ideas/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/review_content_ideas/report" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfreporttag | String | 报表标识 |
| srfcontenttype | String | 报表类型 |




## 根据评审创建产品需求评审内容

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



## 根据评审获取产品需求评审内容

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审主键|
|key|String|标识|




## 根据评审删除产品需求评审内容

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审主键|
|key|String|标识|




## 根据评审更新产品需求评审内容

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



## 根据评审检查产品需求评审内容主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



## 根据评审获取产品需求评审内容草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



## 根据评审评审内容条数

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/review_content_total" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



## 根据评审保存产品需求评审内容

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



## 根据评审全部数据

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/fetch_all" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">n_target_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|
|<el-row justify="space-between"><el-col :span="20">n_target_version_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|



## 根据评审当前评审历史

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/fetch_cur_history" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">n_target_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|
|<el-row justify="space-between"><el-col :span="20">n_target_version_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|



## 根据评审数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">n_target_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|
|<el-row justify="space-between"><el-col :span="20">n_target_version_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|



## 根据评审评审历史列表

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/fetch_history_list" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">n_target_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|
|<el-row justify="space-between"><el-col :span="20">n_target_version_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|




## 根据评审下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/importtemplate" type="info" :closable="false" ></el-alert>
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



## 根据评审数据导出

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/exportdata/{param},/reviews/{pkey}/review_content_ideas/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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


## 根据评审数据导入

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/importdata" type="info" :closable="false" ></el-alert>
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

## 根据评审数据导入（返回错误excel）

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/importdata2" type="info" :closable="false" ></el-alert>
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

## 根据评审自定义表头导入（异步）
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/asyncimportdata2" type="info" :closable="false" ></el-alert>
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


## 根据评审数据打印
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/printdata/{key}" type="info" :closable="false" ></el-alert>
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



## 根据评审报表打印

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/reviews/{pkey}/review_content_ideas/report" type="info" :closable="false" ></el-alert>
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



## 根据评审向导创建产品需求评审内容

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审向导主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



## 根据评审向导获取产品需求评审内容

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审向导主键|
|key|String|标识|




## 根据评审向导删除产品需求评审内容

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审向导主键|
|key|String|标识|




## 根据评审向导更新产品需求评审内容

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审向导主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



## 根据评审向导检查产品需求评审内容主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审向导主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



## 根据评审向导获取产品需求评审内容草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审向导主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



## 根据评审向导评审内容条数

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/review_content_total" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审向导主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



## 根据评审向导保存产品需求评审内容

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审向导主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">change_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更类型|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">change_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|变更版本|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体类型|
|<el-row justify="space-between"><el-col :span="20">stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审结果|
|<el-row justify="space-between"><el-col :span="20">final_stage_results</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最终评审结果|
|<el-row justify="space-between"><el-col :span="20">target_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标类型|
|<el-row justify="space-between"><el-col :span="20">parent_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父对象版本标识|
|<el-row justify="space-between"><el-col :span="20">target_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">review_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|评审数据|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|产品需求|
|<el-row justify="space-between"><el-col :span="20">cur_version_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本标识|
|<el-row justify="space-between"><el-col :span="20">target_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象编号|
|<el-row justify="space-between"><el-col :span="20">target_title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象标题|
|<el-row justify="space-between"><el-col :span="20">target_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象状态|
|<el-row justify="space-between"><el-col :span="20">target_assignee</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象负责人|
|<el-row justify="space-between"><el-col :span="20">target_version</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关联目标版本|
|<el-row justify="space-between"><el-col :span="20">target_priority</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象优先级|
|<el-row justify="space-between"><el-col :span="20">target_parent_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象父标识|
|<el-row justify="space-between"><el-col :span="20">target_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|



## 根据评审向导全部数据

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/fetch_all" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审向导主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">n_target_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|
|<el-row justify="space-between"><el-col :span="20">n_target_version_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|



## 根据评审向导当前评审历史

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/fetch_cur_history" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审向导主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">n_target_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|
|<el-row justify="space-between"><el-col :span="20">n_target_version_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|



## 根据评审向导数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审向导主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">n_target_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|
|<el-row justify="space-between"><el-col :span="20">n_target_version_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|



## 根据评审向导评审历史列表

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/fetch_history_list" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|评审向导主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联主体标识|
|<el-row justify="space-between"><el-col :span="20">n_target_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关联目标标识|
|<el-row justify="space-between"><el-col :span="20">n_target_version_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标对象版本标识|




## 根据评审向导下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/importtemplate" type="info" :closable="false" ></el-alert>
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



## 根据评审向导数据导出

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/exportdata/{param},/review_wizards/{pkey}/review_content_ideas/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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


## 根据评审向导数据导入

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/importdata" type="info" :closable="false" ></el-alert>
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

## 根据评审向导数据导入（返回错误excel）

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/importdata2" type="info" :closable="false" ></el-alert>
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

## 根据评审向导自定义表头导入（异步）
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/asyncimportdata2" type="info" :closable="false" ></el-alert>
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


## 根据评审向导数据打印
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/printdata/{key}" type="info" :closable="false" ></el-alert>
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



## 根据评审向导报表打印

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/review_wizards/{pkey}/review_content_ideas/report" type="info" :closable="false" ></el-alert>
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