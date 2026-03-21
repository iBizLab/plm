# 知识库(ai_knowledge_base) :id=ai_knowledge_base
## 创建知识库

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">enable</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|逻辑有效标识|
|<el-row justify="space-between"><el-col :span="20">visibility</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|可见范围|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">meta_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|元数据|
|<el-row justify="space-between"><el-col :span="20">tag_sets</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标签集|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|引导提示词|
|<el-row justify="space-between"><el-col :span="20">rerank_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">chat_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">use_copy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|从已有知识库克隆|
|<el-row justify="space-between"><el-col :span="20">copy_target</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标知识库|
|<el-row justify="space-between"><el-col :span="20">cur_temp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前知识库模版|
|<el-row justify="space-between"><el-col :span="20">description_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|描述向量|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|引导词向量|
|<el-row justify="space-between"><el-col :span="20">similarity_threshold</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|召回相似度阈值|
|<el-row justify="space-between"><el-col :span="20">vector_similarity_weight</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|向量相似度权重|
|<el-row justify="space-between"><el-col :span="20">top_k</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大召回数量|
|<el-row justify="space-between"><el-col :span="20">rerank</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|召回重排|
|<el-row justify="space-between"><el-col :span="20">use_kg</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|使用知识图谱|
|<el-row justify="space-between"><el-col :span="20">pageindex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|智能目录索引|
|<el-row justify="space-between"><el-col :span="20">chat_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型标识|
|<el-row justify="space-between"><el-col :span="20">chunk_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">embedding_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">embedding_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">parser_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|解析配置|
|<el-row justify="space-between"><el-col :span="20">rerank_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">source_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源标识|
|<el-row justify="space-between"><el-col :span="20">source_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">kb_members</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|null|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "enable" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "visibility" : null,
  "is_deleted" : null,
  "meta_data" : null,
  "tag_sets" : null,
  "guidance_prompt" : null,
  "rerank_model" : null,
  "chat_model" : null,
  "use_copy" : null,
  "copy_target" : null,
  "cur_temp" : null,
  "description_vector" : null,
  "guidance_prompt_vector" : null,
  "similarity_threshold" : null,
  "vector_similarity_weight" : null,
  "top_k" : null,
  "rerank" : null,
  "use_kg" : null,
  "pageindex" : null,
  "chat_model_id" : null,
  "chunk_method" : null,
  "description" : null,
  "embedding_model" : null,
  "embedding_model_id" : null,
  "parser_config" : null,
  "rerank_model_id" : null,
  "source_id" : null,
  "source_name" : null,
  "kb_members" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "enable" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "visibility" : null,
  "is_deleted" : null,
  "meta_data" : null,
  "tag_sets" : null,
  "guidance_prompt" : null,
  "rerank_model" : null,
  "chat_model" : null,
  "use_copy" : null,
  "copy_target" : null,
  "cur_temp" : null,
  "description_vector" : null,
  "guidance_prompt_vector" : null,
  "similarity_threshold" : null,
  "vector_similarity_weight" : null,
  "top_k" : null,
  "rerank" : null,
  "use_kg" : null,
  "pageindex" : null,
  "chat_model_id" : null,
  "chunk_method" : null,
  "description" : null,
  "embedding_model" : null,
  "embedding_model_id" : null,
  "parser_config" : null,
  "rerank_model_id" : null,
  "source_id" : null,
  "source_name" : null,
  "kb_members" : null,
}

```

## 获取知识库

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|知识库标识|




##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "enable" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "visibility" : null,
  "is_deleted" : null,
  "meta_data" : null,
  "tag_sets" : null,
  "guidance_prompt" : null,
  "rerank_model" : null,
  "chat_model" : null,
  "use_copy" : null,
  "copy_target" : null,
  "cur_temp" : null,
  "description_vector" : null,
  "guidance_prompt_vector" : null,
  "similarity_threshold" : null,
  "vector_similarity_weight" : null,
  "top_k" : null,
  "rerank" : null,
  "use_kg" : null,
  "pageindex" : null,
  "chat_model_id" : null,
  "chunk_method" : null,
  "description" : null,
  "embedding_model" : null,
  "embedding_model_id" : null,
  "parser_config" : null,
  "rerank_model_id" : null,
  "source_id" : null,
  "source_name" : null,
  "kb_members" : null,
}

```

## 删除知识库

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|知识库标识|





## 更新知识库

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|知识库标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">enable</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|逻辑有效标识|
|<el-row justify="space-between"><el-col :span="20">visibility</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|可见范围|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">meta_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|元数据|
|<el-row justify="space-between"><el-col :span="20">tag_sets</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标签集|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|引导提示词|
|<el-row justify="space-between"><el-col :span="20">rerank_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">chat_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">use_copy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|从已有知识库克隆|
|<el-row justify="space-between"><el-col :span="20">copy_target</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标知识库|
|<el-row justify="space-between"><el-col :span="20">cur_temp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前知识库模版|
|<el-row justify="space-between"><el-col :span="20">description_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|描述向量|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|引导词向量|
|<el-row justify="space-between"><el-col :span="20">similarity_threshold</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|召回相似度阈值|
|<el-row justify="space-between"><el-col :span="20">vector_similarity_weight</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|向量相似度权重|
|<el-row justify="space-between"><el-col :span="20">top_k</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大召回数量|
|<el-row justify="space-between"><el-col :span="20">rerank</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|召回重排|
|<el-row justify="space-between"><el-col :span="20">use_kg</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|使用知识图谱|
|<el-row justify="space-between"><el-col :span="20">pageindex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|智能目录索引|
|<el-row justify="space-between"><el-col :span="20">chat_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型标识|
|<el-row justify="space-between"><el-col :span="20">chunk_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">embedding_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">embedding_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">parser_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|解析配置|
|<el-row justify="space-between"><el-col :span="20">rerank_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">source_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源标识|
|<el-row justify="space-between"><el-col :span="20">source_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">kb_members</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|null|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "enable" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "visibility" : null,
  "is_deleted" : null,
  "meta_data" : null,
  "tag_sets" : null,
  "guidance_prompt" : null,
  "rerank_model" : null,
  "chat_model" : null,
  "use_copy" : null,
  "copy_target" : null,
  "cur_temp" : null,
  "description_vector" : null,
  "guidance_prompt_vector" : null,
  "similarity_threshold" : null,
  "vector_similarity_weight" : null,
  "top_k" : null,
  "rerank" : null,
  "use_kg" : null,
  "pageindex" : null,
  "chat_model_id" : null,
  "chunk_method" : null,
  "description" : null,
  "embedding_model" : null,
  "embedding_model_id" : null,
  "parser_config" : null,
  "rerank_model_id" : null,
  "source_id" : null,
  "source_name" : null,
  "kb_members" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "enable" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "visibility" : null,
  "is_deleted" : null,
  "meta_data" : null,
  "tag_sets" : null,
  "guidance_prompt" : null,
  "rerank_model" : null,
  "chat_model" : null,
  "use_copy" : null,
  "copy_target" : null,
  "cur_temp" : null,
  "description_vector" : null,
  "guidance_prompt_vector" : null,
  "similarity_threshold" : null,
  "vector_similarity_weight" : null,
  "top_k" : null,
  "rerank" : null,
  "use_kg" : null,
  "pageindex" : null,
  "chat_model_id" : null,
  "chunk_method" : null,
  "description" : null,
  "embedding_model" : null,
  "embedding_model_id" : null,
  "parser_config" : null,
  "rerank_model_id" : null,
  "source_id" : null,
  "source_name" : null,
  "kb_members" : null,
}

```

## 变更管理员角色

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/{key}/change_admin_role" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|知识库标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">enable</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|逻辑有效标识|
|<el-row justify="space-between"><el-col :span="20">visibility</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|可见范围|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">meta_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|元数据|
|<el-row justify="space-between"><el-col :span="20">tag_sets</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标签集|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|引导提示词|
|<el-row justify="space-between"><el-col :span="20">rerank_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">chat_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">use_copy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|从已有知识库克隆|
|<el-row justify="space-between"><el-col :span="20">copy_target</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标知识库|
|<el-row justify="space-between"><el-col :span="20">cur_temp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前知识库模版|
|<el-row justify="space-between"><el-col :span="20">description_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|描述向量|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|引导词向量|
|<el-row justify="space-between"><el-col :span="20">similarity_threshold</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|召回相似度阈值|
|<el-row justify="space-between"><el-col :span="20">vector_similarity_weight</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|向量相似度权重|
|<el-row justify="space-between"><el-col :span="20">top_k</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大召回数量|
|<el-row justify="space-between"><el-col :span="20">rerank</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|召回重排|
|<el-row justify="space-between"><el-col :span="20">use_kg</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|使用知识图谱|
|<el-row justify="space-between"><el-col :span="20">pageindex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|智能目录索引|
|<el-row justify="space-between"><el-col :span="20">chat_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型标识|
|<el-row justify="space-between"><el-col :span="20">chunk_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">embedding_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">embedding_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">parser_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|解析配置|
|<el-row justify="space-between"><el-col :span="20">rerank_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">source_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源标识|
|<el-row justify="space-between"><el-col :span="20">source_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">kb_members</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|null|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "enable" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "visibility" : null,
  "is_deleted" : null,
  "meta_data" : null,
  "tag_sets" : null,
  "guidance_prompt" : null,
  "rerank_model" : null,
  "chat_model" : null,
  "use_copy" : null,
  "copy_target" : null,
  "cur_temp" : null,
  "description_vector" : null,
  "guidance_prompt_vector" : null,
  "similarity_threshold" : null,
  "vector_similarity_weight" : null,
  "top_k" : null,
  "rerank" : null,
  "use_kg" : null,
  "pageindex" : null,
  "chat_model_id" : null,
  "chunk_method" : null,
  "description" : null,
  "embedding_model" : null,
  "embedding_model_id" : null,
  "parser_config" : null,
  "rerank_model_id" : null,
  "source_id" : null,
  "source_name" : null,
  "kb_members" : null,
}
```



## 检查知识库主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">enable</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|逻辑有效标识|
|<el-row justify="space-between"><el-col :span="20">visibility</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|可见范围|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">meta_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|元数据|
|<el-row justify="space-between"><el-col :span="20">tag_sets</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标签集|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|引导提示词|
|<el-row justify="space-between"><el-col :span="20">rerank_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">chat_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">use_copy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|从已有知识库克隆|
|<el-row justify="space-between"><el-col :span="20">copy_target</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标知识库|
|<el-row justify="space-between"><el-col :span="20">cur_temp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前知识库模版|
|<el-row justify="space-between"><el-col :span="20">description_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|描述向量|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|引导词向量|
|<el-row justify="space-between"><el-col :span="20">similarity_threshold</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|召回相似度阈值|
|<el-row justify="space-between"><el-col :span="20">vector_similarity_weight</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|向量相似度权重|
|<el-row justify="space-between"><el-col :span="20">top_k</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大召回数量|
|<el-row justify="space-between"><el-col :span="20">rerank</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|召回重排|
|<el-row justify="space-between"><el-col :span="20">use_kg</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|使用知识图谱|
|<el-row justify="space-between"><el-col :span="20">pageindex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|智能目录索引|
|<el-row justify="space-between"><el-col :span="20">chat_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型标识|
|<el-row justify="space-between"><el-col :span="20">chunk_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">embedding_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">embedding_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">parser_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|解析配置|
|<el-row justify="space-between"><el-col :span="20">rerank_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">source_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源标识|
|<el-row justify="space-between"><el-col :span="20">source_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">kb_members</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|null|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "enable" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "visibility" : null,
  "is_deleted" : null,
  "meta_data" : null,
  "tag_sets" : null,
  "guidance_prompt" : null,
  "rerank_model" : null,
  "chat_model" : null,
  "use_copy" : null,
  "copy_target" : null,
  "cur_temp" : null,
  "description_vector" : null,
  "guidance_prompt_vector" : null,
  "similarity_threshold" : null,
  "vector_similarity_weight" : null,
  "top_k" : null,
  "rerank" : null,
  "use_kg" : null,
  "pageindex" : null,
  "chat_model_id" : null,
  "chunk_method" : null,
  "description" : null,
  "embedding_model" : null,
  "embedding_model_id" : null,
  "parser_config" : null,
  "rerank_model_id" : null,
  "source_id" : null,
  "source_name" : null,
  "kb_members" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 删除

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/{key}/delete" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|知识库标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">enable</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|逻辑有效标识|
|<el-row justify="space-between"><el-col :span="20">visibility</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|可见范围|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">meta_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|元数据|
|<el-row justify="space-between"><el-col :span="20">tag_sets</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标签集|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|引导提示词|
|<el-row justify="space-between"><el-col :span="20">rerank_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">chat_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">use_copy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|从已有知识库克隆|
|<el-row justify="space-between"><el-col :span="20">copy_target</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标知识库|
|<el-row justify="space-between"><el-col :span="20">cur_temp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前知识库模版|
|<el-row justify="space-between"><el-col :span="20">description_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|描述向量|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|引导词向量|
|<el-row justify="space-between"><el-col :span="20">similarity_threshold</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|召回相似度阈值|
|<el-row justify="space-between"><el-col :span="20">vector_similarity_weight</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|向量相似度权重|
|<el-row justify="space-between"><el-col :span="20">top_k</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大召回数量|
|<el-row justify="space-between"><el-col :span="20">rerank</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|召回重排|
|<el-row justify="space-between"><el-col :span="20">use_kg</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|使用知识图谱|
|<el-row justify="space-between"><el-col :span="20">pageindex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|智能目录索引|
|<el-row justify="space-between"><el-col :span="20">chat_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型标识|
|<el-row justify="space-between"><el-col :span="20">chunk_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">embedding_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">embedding_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">parser_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|解析配置|
|<el-row justify="space-between"><el-col :span="20">rerank_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">source_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源标识|
|<el-row justify="space-between"><el-col :span="20">source_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">kb_members</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|null|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "enable" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "visibility" : null,
  "is_deleted" : null,
  "meta_data" : null,
  "tag_sets" : null,
  "guidance_prompt" : null,
  "rerank_model" : null,
  "chat_model" : null,
  "use_copy" : null,
  "copy_target" : null,
  "cur_temp" : null,
  "description_vector" : null,
  "guidance_prompt_vector" : null,
  "similarity_threshold" : null,
  "vector_similarity_weight" : null,
  "top_k" : null,
  "rerank" : null,
  "use_kg" : null,
  "pageindex" : null,
  "chat_model_id" : null,
  "chunk_method" : null,
  "description" : null,
  "embedding_model" : null,
  "embedding_model_id" : null,
  "parser_config" : null,
  "rerank_model_id" : null,
  "source_id" : null,
  "source_name" : null,
  "kb_members" : null,
}
```



## 填充拷贝数据

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/fill_temp" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">enable</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|逻辑有效标识|
|<el-row justify="space-between"><el-col :span="20">visibility</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|可见范围|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">meta_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|元数据|
|<el-row justify="space-between"><el-col :span="20">tag_sets</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标签集|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|引导提示词|
|<el-row justify="space-between"><el-col :span="20">rerank_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">chat_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">use_copy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|从已有知识库克隆|
|<el-row justify="space-between"><el-col :span="20">copy_target</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标知识库|
|<el-row justify="space-between"><el-col :span="20">cur_temp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前知识库模版|
|<el-row justify="space-between"><el-col :span="20">description_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|描述向量|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|引导词向量|
|<el-row justify="space-between"><el-col :span="20">similarity_threshold</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|召回相似度阈值|
|<el-row justify="space-between"><el-col :span="20">vector_similarity_weight</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|向量相似度权重|
|<el-row justify="space-between"><el-col :span="20">top_k</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大召回数量|
|<el-row justify="space-between"><el-col :span="20">rerank</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|召回重排|
|<el-row justify="space-between"><el-col :span="20">use_kg</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|使用知识图谱|
|<el-row justify="space-between"><el-col :span="20">pageindex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|智能目录索引|
|<el-row justify="space-between"><el-col :span="20">chat_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型标识|
|<el-row justify="space-between"><el-col :span="20">chunk_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">embedding_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">embedding_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">parser_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|解析配置|
|<el-row justify="space-between"><el-col :span="20">rerank_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">source_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源标识|
|<el-row justify="space-between"><el-col :span="20">source_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">kb_members</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|null|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "enable" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "visibility" : null,
  "is_deleted" : null,
  "meta_data" : null,
  "tag_sets" : null,
  "guidance_prompt" : null,
  "rerank_model" : null,
  "chat_model" : null,
  "use_copy" : null,
  "copy_target" : null,
  "cur_temp" : null,
  "description_vector" : null,
  "guidance_prompt_vector" : null,
  "similarity_threshold" : null,
  "vector_similarity_weight" : null,
  "top_k" : null,
  "rerank" : null,
  "use_kg" : null,
  "pageindex" : null,
  "chat_model_id" : null,
  "chunk_method" : null,
  "description" : null,
  "embedding_model" : null,
  "embedding_model_id" : null,
  "parser_config" : null,
  "rerank_model_id" : null,
  "source_id" : null,
  "source_name" : null,
  "kb_members" : null,
}
```



## 获取知识库草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">enable</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|逻辑有效标识|
|<el-row justify="space-between"><el-col :span="20">visibility</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|可见范围|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">meta_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|元数据|
|<el-row justify="space-between"><el-col :span="20">tag_sets</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标签集|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|引导提示词|
|<el-row justify="space-between"><el-col :span="20">rerank_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">chat_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">use_copy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|从已有知识库克隆|
|<el-row justify="space-between"><el-col :span="20">copy_target</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标知识库|
|<el-row justify="space-between"><el-col :span="20">cur_temp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前知识库模版|
|<el-row justify="space-between"><el-col :span="20">description_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|描述向量|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|引导词向量|
|<el-row justify="space-between"><el-col :span="20">similarity_threshold</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|召回相似度阈值|
|<el-row justify="space-between"><el-col :span="20">vector_similarity_weight</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|向量相似度权重|
|<el-row justify="space-between"><el-col :span="20">top_k</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大召回数量|
|<el-row justify="space-between"><el-col :span="20">rerank</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|召回重排|
|<el-row justify="space-between"><el-col :span="20">use_kg</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|使用知识图谱|
|<el-row justify="space-between"><el-col :span="20">pageindex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|智能目录索引|
|<el-row justify="space-between"><el-col :span="20">chat_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型标识|
|<el-row justify="space-between"><el-col :span="20">chunk_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">embedding_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">embedding_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">parser_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|解析配置|
|<el-row justify="space-between"><el-col :span="20">rerank_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">source_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源标识|
|<el-row justify="space-between"><el-col :span="20">source_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">kb_members</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|null|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "enable" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "visibility" : null,
  "is_deleted" : null,
  "meta_data" : null,
  "tag_sets" : null,
  "guidance_prompt" : null,
  "rerank_model" : null,
  "chat_model" : null,
  "use_copy" : null,
  "copy_target" : null,
  "cur_temp" : null,
  "description_vector" : null,
  "guidance_prompt_vector" : null,
  "similarity_threshold" : null,
  "vector_similarity_weight" : null,
  "top_k" : null,
  "rerank" : null,
  "use_kg" : null,
  "pageindex" : null,
  "chat_model_id" : null,
  "chunk_method" : null,
  "description" : null,
  "embedding_model" : null,
  "embedding_model_id" : null,
  "parser_config" : null,
  "rerank_model_id" : null,
  "source_id" : null,
  "source_name" : null,
  "kb_members" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "enable" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "visibility" : null,
  "is_deleted" : null,
  "meta_data" : null,
  "tag_sets" : null,
  "guidance_prompt" : null,
  "rerank_model" : null,
  "chat_model" : null,
  "use_copy" : null,
  "copy_target" : null,
  "cur_temp" : null,
  "description_vector" : null,
  "guidance_prompt_vector" : null,
  "similarity_threshold" : null,
  "vector_similarity_weight" : null,
  "top_k" : null,
  "rerank" : null,
  "use_kg" : null,
  "pageindex" : null,
  "chat_model_id" : null,
  "chunk_method" : null,
  "description" : null,
  "embedding_model" : null,
  "embedding_model_id" : null,
  "parser_config" : null,
  "rerank_model_id" : null,
  "source_id" : null,
  "source_name" : null,
  "kb_members" : null,
}

```

## 恢复

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/{key}/recover" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|知识库标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">enable</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|逻辑有效标识|
|<el-row justify="space-between"><el-col :span="20">visibility</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|可见范围|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">meta_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|元数据|
|<el-row justify="space-between"><el-col :span="20">tag_sets</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标签集|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|引导提示词|
|<el-row justify="space-between"><el-col :span="20">rerank_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">chat_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">use_copy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|从已有知识库克隆|
|<el-row justify="space-between"><el-col :span="20">copy_target</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标知识库|
|<el-row justify="space-between"><el-col :span="20">cur_temp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前知识库模版|
|<el-row justify="space-between"><el-col :span="20">description_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|描述向量|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|引导词向量|
|<el-row justify="space-between"><el-col :span="20">similarity_threshold</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|召回相似度阈值|
|<el-row justify="space-between"><el-col :span="20">vector_similarity_weight</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|向量相似度权重|
|<el-row justify="space-between"><el-col :span="20">top_k</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大召回数量|
|<el-row justify="space-between"><el-col :span="20">rerank</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|召回重排|
|<el-row justify="space-between"><el-col :span="20">use_kg</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|使用知识图谱|
|<el-row justify="space-between"><el-col :span="20">pageindex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|智能目录索引|
|<el-row justify="space-between"><el-col :span="20">chat_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型标识|
|<el-row justify="space-between"><el-col :span="20">chunk_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">embedding_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">embedding_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">parser_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|解析配置|
|<el-row justify="space-between"><el-col :span="20">rerank_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">source_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源标识|
|<el-row justify="space-between"><el-col :span="20">source_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">kb_members</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|null|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "enable" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "visibility" : null,
  "is_deleted" : null,
  "meta_data" : null,
  "tag_sets" : null,
  "guidance_prompt" : null,
  "rerank_model" : null,
  "chat_model" : null,
  "use_copy" : null,
  "copy_target" : null,
  "cur_temp" : null,
  "description_vector" : null,
  "guidance_prompt_vector" : null,
  "similarity_threshold" : null,
  "vector_similarity_weight" : null,
  "top_k" : null,
  "rerank" : null,
  "use_kg" : null,
  "pageindex" : null,
  "chat_model_id" : null,
  "chunk_method" : null,
  "description" : null,
  "embedding_model" : null,
  "embedding_model_id" : null,
  "parser_config" : null,
  "rerank_model_id" : null,
  "source_id" : null,
  "source_name" : null,
  "kb_members" : null,
}
```



## 保存知识库

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">enable</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|逻辑有效标识|
|<el-row justify="space-between"><el-col :span="20">visibility</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|可见范围|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">meta_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|元数据|
|<el-row justify="space-between"><el-col :span="20">tag_sets</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标签集|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|引导提示词|
|<el-row justify="space-between"><el-col :span="20">rerank_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">chat_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">use_copy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|从已有知识库克隆|
|<el-row justify="space-between"><el-col :span="20">copy_target</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|目标知识库|
|<el-row justify="space-between"><el-col :span="20">cur_temp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前知识库模版|
|<el-row justify="space-between"><el-col :span="20">description_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|描述向量|
|<el-row justify="space-between"><el-col :span="20">guidance_prompt_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|引导词向量|
|<el-row justify="space-between"><el-col :span="20">similarity_threshold</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|召回相似度阈值|
|<el-row justify="space-between"><el-col :span="20">vector_similarity_weight</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|向量相似度权重|
|<el-row justify="space-between"><el-col :span="20">top_k</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大召回数量|
|<el-row justify="space-between"><el-col :span="20">rerank</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|召回重排|
|<el-row justify="space-between"><el-col :span="20">use_kg</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|使用知识图谱|
|<el-row justify="space-between"><el-col :span="20">pageindex</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|智能目录索引|
|<el-row justify="space-between"><el-col :span="20">chat_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型标识|
|<el-row justify="space-between"><el-col :span="20">chunk_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">embedding_model</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">embedding_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">parser_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|解析配置|
|<el-row justify="space-between"><el-col :span="20">rerank_model_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">source_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源标识|
|<el-row justify="space-between"><el-col :span="20">source_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">kb_members</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|null|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "enable" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "visibility" : null,
  "is_deleted" : null,
  "meta_data" : null,
  "tag_sets" : null,
  "guidance_prompt" : null,
  "rerank_model" : null,
  "chat_model" : null,
  "use_copy" : null,
  "copy_target" : null,
  "cur_temp" : null,
  "description_vector" : null,
  "guidance_prompt_vector" : null,
  "similarity_threshold" : null,
  "vector_similarity_weight" : null,
  "top_k" : null,
  "rerank" : null,
  "use_kg" : null,
  "pageindex" : null,
  "chat_model_id" : null,
  "chunk_method" : null,
  "description" : null,
  "embedding_model" : null,
  "embedding_model_id" : null,
  "parser_config" : null,
  "rerank_model_id" : null,
  "source_id" : null,
  "source_name" : null,
  "kb_members" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "enable" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "visibility" : null,
  "is_deleted" : null,
  "meta_data" : null,
  "tag_sets" : null,
  "guidance_prompt" : null,
  "rerank_model" : null,
  "chat_model" : null,
  "use_copy" : null,
  "copy_target" : null,
  "cur_temp" : null,
  "description_vector" : null,
  "guidance_prompt_vector" : null,
  "similarity_threshold" : null,
  "vector_similarity_weight" : null,
  "top_k" : null,
  "rerank" : null,
  "use_kg" : null,
  "pageindex" : null,
  "chat_model_id" : null,
  "chunk_method" : null,
  "description" : null,
  "embedding_model" : null,
  "embedding_model_id" : null,
  "parser_config" : null,
  "rerank_model_id" : null,
  "source_id" : null,
  "source_name" : null,
  "kb_members" : null,
}

```

## 管理员

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/fetch_admin" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型标识|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">n_chunk_method_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">n_source_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源标识|
|<el-row justify="space-between"><el-col :span="20">n_source_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">n_source_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">n_visibility_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|可见范围|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_chat_model_eq" : null,
  "n_chat_model_id_eq" : null,
  "n_chat_model_like" : null,
  "n_chunk_method_eq" : null,
  "n_embedding_model_eq" : null,
  "n_embedding_model_id_eq" : null,
  "n_embedding_model_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_rerank_model_eq" : null,
  "n_rerank_model_id_eq" : null,
  "n_rerank_model_like" : null,
  "n_source_id_eq" : null,
  "n_source_name_eq" : null,
  "n_source_name_like" : null,
  "n_visibility_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "name" : null,
    "create_man" : null,
    "enable" : null,
    "create_time" : null,
    "update_man" : null,
    "update_time" : null,
    "visibility" : null,
    "is_deleted" : null,
    "meta_data" : null,
    "tag_sets" : null,
    "guidance_prompt" : null,
    "rerank_model" : null,
    "chat_model" : null,
    "use_copy" : null,
    "copy_target" : null,
    "cur_temp" : null,
    "description_vector" : null,
    "guidance_prompt_vector" : null,
    "similarity_threshold" : null,
    "vector_similarity_weight" : null,
    "top_k" : null,
    "rerank" : null,
    "use_kg" : null,
    "pageindex" : null,
    "chat_model_id" : null,
    "chunk_method" : null,
    "description" : null,
    "embedding_model" : null,
    "embedding_model_id" : null,
    "parser_config" : null,
    "rerank_model_id" : null,
    "source_id" : null,
    "source_name" : null,
    "kb_members" : null,
  }
]
```

## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型标识|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">n_chunk_method_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">n_source_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源标识|
|<el-row justify="space-between"><el-col :span="20">n_source_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">n_source_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">n_visibility_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|可见范围|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_chat_model_eq" : null,
  "n_chat_model_id_eq" : null,
  "n_chat_model_like" : null,
  "n_chunk_method_eq" : null,
  "n_embedding_model_eq" : null,
  "n_embedding_model_id_eq" : null,
  "n_embedding_model_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_rerank_model_eq" : null,
  "n_rerank_model_id_eq" : null,
  "n_rerank_model_like" : null,
  "n_source_id_eq" : null,
  "n_source_name_eq" : null,
  "n_source_name_like" : null,
  "n_visibility_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "name" : null,
    "create_man" : null,
    "enable" : null,
    "create_time" : null,
    "update_man" : null,
    "update_time" : null,
    "visibility" : null,
    "is_deleted" : null,
    "meta_data" : null,
    "tag_sets" : null,
    "guidance_prompt" : null,
    "rerank_model" : null,
    "chat_model" : null,
    "use_copy" : null,
    "copy_target" : null,
    "cur_temp" : null,
    "description_vector" : null,
    "guidance_prompt_vector" : null,
    "similarity_threshold" : null,
    "vector_similarity_weight" : null,
    "top_k" : null,
    "rerank" : null,
    "use_kg" : null,
    "pageindex" : null,
    "chat_model_id" : null,
    "chunk_method" : null,
    "description" : null,
    "embedding_model" : null,
    "embedding_model_id" : null,
    "parser_config" : null,
    "rerank_model_id" : null,
    "source_id" : null,
    "source_name" : null,
    "kb_members" : null,
  }
]
```

## 已删除

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/fetch_deleted" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型标识|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">n_chunk_method_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">n_source_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源标识|
|<el-row justify="space-between"><el-col :span="20">n_source_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">n_source_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">n_visibility_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|可见范围|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_chat_model_eq" : null,
  "n_chat_model_id_eq" : null,
  "n_chat_model_like" : null,
  "n_chunk_method_eq" : null,
  "n_embedding_model_eq" : null,
  "n_embedding_model_id_eq" : null,
  "n_embedding_model_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_rerank_model_eq" : null,
  "n_rerank_model_id_eq" : null,
  "n_rerank_model_like" : null,
  "n_source_id_eq" : null,
  "n_source_name_eq" : null,
  "n_source_name_like" : null,
  "n_visibility_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "name" : null,
    "create_man" : null,
    "enable" : null,
    "create_time" : null,
    "update_man" : null,
    "update_time" : null,
    "visibility" : null,
    "is_deleted" : null,
    "meta_data" : null,
    "tag_sets" : null,
    "guidance_prompt" : null,
    "rerank_model" : null,
    "chat_model" : null,
    "use_copy" : null,
    "copy_target" : null,
    "cur_temp" : null,
    "description_vector" : null,
    "guidance_prompt_vector" : null,
    "similarity_threshold" : null,
    "vector_similarity_weight" : null,
    "top_k" : null,
    "rerank" : null,
    "use_kg" : null,
    "pageindex" : null,
    "chat_model_id" : null,
    "chunk_method" : null,
    "description" : null,
    "embedding_model" : null,
    "embedding_model_id" : null,
    "parser_config" : null,
    "rerank_model_id" : null,
    "source_id" : null,
    "source_name" : null,
    "kb_members" : null,
  }
]
```

## 只读用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/fetch_reader" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型标识|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">n_chunk_method_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">n_source_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源标识|
|<el-row justify="space-between"><el-col :span="20">n_source_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">n_source_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">n_visibility_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|可见范围|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_chat_model_eq" : null,
  "n_chat_model_id_eq" : null,
  "n_chat_model_like" : null,
  "n_chunk_method_eq" : null,
  "n_embedding_model_eq" : null,
  "n_embedding_model_id_eq" : null,
  "n_embedding_model_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_rerank_model_eq" : null,
  "n_rerank_model_id_eq" : null,
  "n_rerank_model_like" : null,
  "n_source_id_eq" : null,
  "n_source_name_eq" : null,
  "n_source_name_like" : null,
  "n_visibility_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "name" : null,
    "create_man" : null,
    "enable" : null,
    "create_time" : null,
    "update_man" : null,
    "update_time" : null,
    "visibility" : null,
    "is_deleted" : null,
    "meta_data" : null,
    "tag_sets" : null,
    "guidance_prompt" : null,
    "rerank_model" : null,
    "chat_model" : null,
    "use_copy" : null,
    "copy_target" : null,
    "cur_temp" : null,
    "description_vector" : null,
    "guidance_prompt_vector" : null,
    "similarity_threshold" : null,
    "vector_similarity_weight" : null,
    "top_k" : null,
    "rerank" : null,
    "use_kg" : null,
    "pageindex" : null,
    "chat_model_id" : null,
    "chunk_method" : null,
    "description" : null,
    "embedding_model" : null,
    "embedding_model_id" : null,
    "parser_config" : null,
    "rerank_model_id" : null,
    "source_id" : null,
    "source_name" : null,
    "kb_members" : null,
  }
]
```

## 操作用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/fetch_user" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型标识|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">n_chunk_method_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">n_source_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源标识|
|<el-row justify="space-between"><el-col :span="20">n_source_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">n_source_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">n_visibility_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|可见范围|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_chat_model_eq" : null,
  "n_chat_model_id_eq" : null,
  "n_chat_model_like" : null,
  "n_chunk_method_eq" : null,
  "n_embedding_model_eq" : null,
  "n_embedding_model_id_eq" : null,
  "n_embedding_model_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_rerank_model_eq" : null,
  "n_rerank_model_id_eq" : null,
  "n_rerank_model_like" : null,
  "n_source_id_eq" : null,
  "n_source_name_eq" : null,
  "n_source_name_like" : null,
  "n_visibility_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "name" : null,
    "create_man" : null,
    "enable" : null,
    "create_time" : null,
    "update_man" : null,
    "update_time" : null,
    "visibility" : null,
    "is_deleted" : null,
    "meta_data" : null,
    "tag_sets" : null,
    "guidance_prompt" : null,
    "rerank_model" : null,
    "chat_model" : null,
    "use_copy" : null,
    "copy_target" : null,
    "cur_temp" : null,
    "description_vector" : null,
    "guidance_prompt_vector" : null,
    "similarity_threshold" : null,
    "vector_similarity_weight" : null,
    "top_k" : null,
    "rerank" : null,
    "use_kg" : null,
    "pageindex" : null,
    "chat_model_id" : null,
    "chunk_method" : null,
    "description" : null,
    "embedding_model" : null,
    "embedding_model_id" : null,
    "parser_config" : null,
    "rerank_model_id" : null,
    "source_id" : null,
    "source_name" : null,
    "kb_members" : null,
  }
]
```

## 启用数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/fetch_valid" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型标识|
|<el-row justify="space-between"><el-col :span="20">n_chat_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|交谈模型|
|<el-row justify="space-between"><el-col :span="20">n_chunk_method_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_embedding_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|embedding模型|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_rerank_model_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|召回重排模型|
|<el-row justify="space-between"><el-col :span="20">n_source_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源标识|
|<el-row justify="space-between"><el-col :span="20">n_source_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">n_source_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库源名称|
|<el-row justify="space-between"><el-col :span="20">n_visibility_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|可见范围|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_chat_model_eq" : null,
  "n_chat_model_id_eq" : null,
  "n_chat_model_like" : null,
  "n_chunk_method_eq" : null,
  "n_embedding_model_eq" : null,
  "n_embedding_model_id_eq" : null,
  "n_embedding_model_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_rerank_model_eq" : null,
  "n_rerank_model_id_eq" : null,
  "n_rerank_model_like" : null,
  "n_source_id_eq" : null,
  "n_source_name_eq" : null,
  "n_source_name_like" : null,
  "n_visibility_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "name" : null,
    "create_man" : null,
    "enable" : null,
    "create_time" : null,
    "update_man" : null,
    "update_time" : null,
    "visibility" : null,
    "is_deleted" : null,
    "meta_data" : null,
    "tag_sets" : null,
    "guidance_prompt" : null,
    "rerank_model" : null,
    "chat_model" : null,
    "use_copy" : null,
    "copy_target" : null,
    "similarity_threshold" : null,
    "vector_similarity_weight" : null,
    "top_k" : null,
    "rerank" : null,
    "use_kg" : null,
    "chat_model_id" : null,
    "chunk_method" : null,
    "description" : null,
    "embedding_model" : null,
    "embedding_model_id" : null,
    "parser_config" : null,
    "rerank_model_id" : null,
    "source_id" : null,
    "source_name" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_knowledge_bases/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_knowledge_bases/exportdata/{param},/ai_knowledge_bases/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_knowledge_bases/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_knowledge_bases/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_knowledge_bases/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_knowledge_bases/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_knowledge_bases/report" type="info" :closable="false" ></el-alert>
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