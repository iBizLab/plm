# 知识库检索记录(ai_kb_search_query) :id=ai_kb_search_query
## 创建知识库检索记录

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_search_queries" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">raw_query</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|原始问题|
|<el-row justify="space-between"><el-col :span="20">normalized_query</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标准化问题|
|<el-row justify="space-between"><el-col :span="20">embedding</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|查询向量|
|<el-row justify="space-between"><el-col :span="20">is_answered</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|有效回答|
|<el-row justify="space-between"><el-col :span="20">user_satisfaction</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|满意度评分|
|<el-row justify="space-between"><el-col :span="20">is_knowledge_gap</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|知识缺口|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">tags</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|检索标签|
|<el-row justify="space-between"><el-col :span="20">feedback</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户反馈信息|
|<el-row justify="space-between"><el-col :span="20">retrieval_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|召回配置|
|<el-row justify="space-between"><el-col :span="20">total_duration</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|总耗时|
|<el-row justify="space-between"><el-col :span="20">source</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|来源|
|<el-row justify="space-between"><el-col :span="20">source_metadata</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|来源元数据|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "raw_query" : null,
  "normalized_query" : null,
  "embedding" : null,
  "is_answered" : null,
  "user_satisfaction" : null,
  "is_knowledge_gap" : null,
  "user_id" : null,
  "tags" : null,
  "feedback" : null,
  "retrieval_config" : null,
  "total_duration" : null,
  "source" : null,
  "source_metadata" : null,
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
  "raw_query" : null,
  "normalized_query" : null,
  "embedding" : null,
  "is_answered" : null,
  "user_satisfaction" : null,
  "is_knowledge_gap" : null,
  "user_id" : null,
  "tags" : null,
  "feedback" : null,
  "retrieval_config" : null,
  "total_duration" : null,
  "source" : null,
  "source_metadata" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 获取知识库检索记录

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_search_queries/{key}" type="info" :closable="false" ></el-alert>
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
  "raw_query" : null,
  "normalized_query" : null,
  "embedding" : null,
  "is_answered" : null,
  "user_satisfaction" : null,
  "is_knowledge_gap" : null,
  "user_id" : null,
  "tags" : null,
  "feedback" : null,
  "retrieval_config" : null,
  "total_duration" : null,
  "source" : null,
  "source_metadata" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 删除知识库检索记录

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_search_queries/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|





## 更新知识库检索记录

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_search_queries/{key}" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">raw_query</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|原始问题|
|<el-row justify="space-between"><el-col :span="20">normalized_query</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标准化问题|
|<el-row justify="space-between"><el-col :span="20">embedding</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|查询向量|
|<el-row justify="space-between"><el-col :span="20">is_answered</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|有效回答|
|<el-row justify="space-between"><el-col :span="20">user_satisfaction</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|满意度评分|
|<el-row justify="space-between"><el-col :span="20">is_knowledge_gap</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|知识缺口|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">tags</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|检索标签|
|<el-row justify="space-between"><el-col :span="20">feedback</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户反馈信息|
|<el-row justify="space-between"><el-col :span="20">retrieval_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|召回配置|
|<el-row justify="space-between"><el-col :span="20">total_duration</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|总耗时|
|<el-row justify="space-between"><el-col :span="20">source</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|来源|
|<el-row justify="space-between"><el-col :span="20">source_metadata</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|来源元数据|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "raw_query" : null,
  "normalized_query" : null,
  "embedding" : null,
  "is_answered" : null,
  "user_satisfaction" : null,
  "is_knowledge_gap" : null,
  "user_id" : null,
  "tags" : null,
  "feedback" : null,
  "retrieval_config" : null,
  "total_duration" : null,
  "source" : null,
  "source_metadata" : null,
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
  "raw_query" : null,
  "normalized_query" : null,
  "embedding" : null,
  "is_answered" : null,
  "user_satisfaction" : null,
  "is_knowledge_gap" : null,
  "user_id" : null,
  "tags" : null,
  "feedback" : null,
  "retrieval_config" : null,
  "total_duration" : null,
  "source" : null,
  "source_metadata" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 检查知识库检索记录主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_search_queries/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">raw_query</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|原始问题|
|<el-row justify="space-between"><el-col :span="20">normalized_query</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标准化问题|
|<el-row justify="space-between"><el-col :span="20">embedding</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|查询向量|
|<el-row justify="space-between"><el-col :span="20">is_answered</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|有效回答|
|<el-row justify="space-between"><el-col :span="20">user_satisfaction</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|满意度评分|
|<el-row justify="space-between"><el-col :span="20">is_knowledge_gap</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|知识缺口|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">tags</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|检索标签|
|<el-row justify="space-between"><el-col :span="20">feedback</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户反馈信息|
|<el-row justify="space-between"><el-col :span="20">retrieval_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|召回配置|
|<el-row justify="space-between"><el-col :span="20">total_duration</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|总耗时|
|<el-row justify="space-between"><el-col :span="20">source</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|来源|
|<el-row justify="space-between"><el-col :span="20">source_metadata</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|来源元数据|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "raw_query" : null,
  "normalized_query" : null,
  "embedding" : null,
  "is_answered" : null,
  "user_satisfaction" : null,
  "is_knowledge_gap" : null,
  "user_id" : null,
  "tags" : null,
  "feedback" : null,
  "retrieval_config" : null,
  "total_duration" : null,
  "source" : null,
  "source_metadata" : null,
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

## 获取知识库检索记录草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_search_queries/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">raw_query</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|原始问题|
|<el-row justify="space-between"><el-col :span="20">normalized_query</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标准化问题|
|<el-row justify="space-between"><el-col :span="20">embedding</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|查询向量|
|<el-row justify="space-between"><el-col :span="20">is_answered</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|有效回答|
|<el-row justify="space-between"><el-col :span="20">user_satisfaction</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|满意度评分|
|<el-row justify="space-between"><el-col :span="20">is_knowledge_gap</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|知识缺口|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">tags</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|检索标签|
|<el-row justify="space-between"><el-col :span="20">feedback</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户反馈信息|
|<el-row justify="space-between"><el-col :span="20">retrieval_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|召回配置|
|<el-row justify="space-between"><el-col :span="20">total_duration</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|总耗时|
|<el-row justify="space-between"><el-col :span="20">source</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|来源|
|<el-row justify="space-between"><el-col :span="20">source_metadata</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|来源元数据|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "raw_query" : null,
  "normalized_query" : null,
  "embedding" : null,
  "is_answered" : null,
  "user_satisfaction" : null,
  "is_knowledge_gap" : null,
  "user_id" : null,
  "tags" : null,
  "feedback" : null,
  "retrieval_config" : null,
  "total_duration" : null,
  "source" : null,
  "source_metadata" : null,
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
  "raw_query" : null,
  "normalized_query" : null,
  "embedding" : null,
  "is_answered" : null,
  "user_satisfaction" : null,
  "is_knowledge_gap" : null,
  "user_id" : null,
  "tags" : null,
  "feedback" : null,
  "retrieval_config" : null,
  "total_duration" : null,
  "source" : null,
  "source_metadata" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 保存知识库检索记录

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_search_queries/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">raw_query</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|原始问题|
|<el-row justify="space-between"><el-col :span="20">normalized_query</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标准化问题|
|<el-row justify="space-between"><el-col :span="20">embedding</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|查询向量|
|<el-row justify="space-between"><el-col :span="20">is_answered</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|有效回答|
|<el-row justify="space-between"><el-col :span="20">user_satisfaction</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|满意度评分|
|<el-row justify="space-between"><el-col :span="20">is_knowledge_gap</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|知识缺口|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">tags</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|检索标签|
|<el-row justify="space-between"><el-col :span="20">feedback</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户反馈信息|
|<el-row justify="space-between"><el-col :span="20">retrieval_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|召回配置|
|<el-row justify="space-between"><el-col :span="20">total_duration</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|总耗时|
|<el-row justify="space-between"><el-col :span="20">source</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|来源|
|<el-row justify="space-between"><el-col :span="20">source_metadata</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|来源元数据|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "raw_query" : null,
  "normalized_query" : null,
  "embedding" : null,
  "is_answered" : null,
  "user_satisfaction" : null,
  "is_knowledge_gap" : null,
  "user_id" : null,
  "tags" : null,
  "feedback" : null,
  "retrieval_config" : null,
  "total_duration" : null,
  "source" : null,
  "source_metadata" : null,
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
  "raw_query" : null,
  "normalized_query" : null,
  "embedding" : null,
  "is_answered" : null,
  "user_satisfaction" : null,
  "is_knowledge_gap" : null,
  "user_id" : null,
  "tags" : null,
  "feedback" : null,
  "retrieval_config" : null,
  "total_duration" : null,
  "source" : null,
  "source_metadata" : null,
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
<el-alert title="/ai_kb_search_queries/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_source_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|来源|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_source_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "name" : null,
    "raw_query" : null,
    "normalized_query" : null,
    "embedding" : null,
    "is_answered" : null,
    "user_satisfaction" : null,
    "is_knowledge_gap" : null,
    "user_id" : null,
    "tags" : null,
    "feedback" : null,
    "retrieval_config" : null,
    "total_duration" : null,
    "source" : null,
    "source_metadata" : null,
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
<el-alert title="/ai_kb_search_queries/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_search_queries/exportdata/{param},/ai_kb_search_queries/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_search_queries/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_search_queries/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_search_queries/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_search_queries/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_search_queries/report" type="info" :closable="false" ></el-alert>
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