# 知识库文档分块(ai_kb_chunk) :id=ai_kb_chunk
## 创建知识库文档分块

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_chunks" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|分块标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块名称|
|<el-row justify="space-between"><el-col :span="20">content_preview</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|块内容（预览）|
|<el-row justify="space-between"><el-col :span="20">content</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|块内容|
|<el-row justify="space-between"><el-col :span="20">positions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档位置|
|<el-row justify="space-between"><el-col :span="20">keywords</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关键词|
|<el-row justify="space-between"><el-col :span="20">key_questions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关键问题|
|<el-row justify="space-between"><el-col :span="20">tags</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标签|
|<el-row justify="space-between"><el-col :span="20">key_questions_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关键问题向量|
|<el-row justify="space-between"><el-col :span="20">content_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|块内容向量|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块路径|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|文档索引顺序|
|<el-row justify="space-between"><el-col :span="20">document_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档类型|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块类型|
|<el-row justify="space-between"><el-col :span="20">source_indices</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源分块索引|
|<el-row justify="space-between"><el-col :span="20">source_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|源分块计数|
|<el-row justify="space-between"><el-col :span="20">kb_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|
|<el-row justify="space-between"><el-col :span="20">document_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档标识|
|<el-row justify="space-between"><el-col :span="20">document_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">pid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父分块标识|
|<el-row justify="space-between"><el-col :span="20">user_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">user_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "content_preview" : null,
  "content" : null,
  "positions" : null,
  "keywords" : null,
  "key_questions" : null,
  "tags" : null,
  "key_questions_vector" : null,
  "content_vector" : null,
  "path" : null,
  "sequence" : null,
  "document_type" : null,
  "type" : null,
  "source_indices" : null,
  "source_count" : null,
  "kb_id" : null,
  "active" : null,
  "document_id" : null,
  "document_name" : null,
  "pid" : null,
  "user_tag" : null,
  "user_tag2" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "content_preview" : null,
  "content" : null,
  "positions" : null,
  "keywords" : null,
  "key_questions" : null,
  "tags" : null,
  "key_questions_vector" : null,
  "content_vector" : null,
  "path" : null,
  "sequence" : null,
  "document_type" : null,
  "type" : null,
  "source_indices" : null,
  "source_count" : null,
  "kb_id" : null,
  "active" : null,
  "document_id" : null,
  "document_name" : null,
  "pid" : null,
  "user_tag" : null,
  "user_tag2" : null,
}

```

## 获取知识库文档分块

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_chunks/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|分块标识|




##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "content_preview" : null,
  "content" : null,
  "positions" : null,
  "keywords" : null,
  "key_questions" : null,
  "tags" : null,
  "key_questions_vector" : null,
  "content_vector" : null,
  "path" : null,
  "sequence" : null,
  "document_type" : null,
  "type" : null,
  "source_indices" : null,
  "source_count" : null,
  "kb_id" : null,
  "active" : null,
  "document_id" : null,
  "document_name" : null,
  "pid" : null,
  "user_tag" : null,
  "user_tag2" : null,
}

```

## 删除知识库文档分块

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_chunks/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|分块标识|





## 更新知识库文档分块

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_chunks/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|分块标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|分块标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块名称|
|<el-row justify="space-between"><el-col :span="20">content_preview</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|块内容（预览）|
|<el-row justify="space-between"><el-col :span="20">content</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|块内容|
|<el-row justify="space-between"><el-col :span="20">positions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档位置|
|<el-row justify="space-between"><el-col :span="20">keywords</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关键词|
|<el-row justify="space-between"><el-col :span="20">key_questions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关键问题|
|<el-row justify="space-between"><el-col :span="20">tags</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标签|
|<el-row justify="space-between"><el-col :span="20">key_questions_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关键问题向量|
|<el-row justify="space-between"><el-col :span="20">content_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|块内容向量|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块路径|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|文档索引顺序|
|<el-row justify="space-between"><el-col :span="20">document_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档类型|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块类型|
|<el-row justify="space-between"><el-col :span="20">source_indices</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源分块索引|
|<el-row justify="space-between"><el-col :span="20">source_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|源分块计数|
|<el-row justify="space-between"><el-col :span="20">kb_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|
|<el-row justify="space-between"><el-col :span="20">document_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档标识|
|<el-row justify="space-between"><el-col :span="20">document_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">pid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父分块标识|
|<el-row justify="space-between"><el-col :span="20">user_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">user_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "content_preview" : null,
  "content" : null,
  "positions" : null,
  "keywords" : null,
  "key_questions" : null,
  "tags" : null,
  "key_questions_vector" : null,
  "content_vector" : null,
  "path" : null,
  "sequence" : null,
  "document_type" : null,
  "type" : null,
  "source_indices" : null,
  "source_count" : null,
  "kb_id" : null,
  "active" : null,
  "document_id" : null,
  "document_name" : null,
  "pid" : null,
  "user_tag" : null,
  "user_tag2" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "content_preview" : null,
  "content" : null,
  "positions" : null,
  "keywords" : null,
  "key_questions" : null,
  "tags" : null,
  "key_questions_vector" : null,
  "content_vector" : null,
  "path" : null,
  "sequence" : null,
  "document_type" : null,
  "type" : null,
  "source_indices" : null,
  "source_count" : null,
  "kb_id" : null,
  "active" : null,
  "document_id" : null,
  "document_name" : null,
  "pid" : null,
  "user_tag" : null,
  "user_tag2" : null,
}

```

## 检查知识库文档分块主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_chunks/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|分块标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块名称|
|<el-row justify="space-between"><el-col :span="20">content_preview</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|块内容（预览）|
|<el-row justify="space-between"><el-col :span="20">content</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|块内容|
|<el-row justify="space-between"><el-col :span="20">positions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档位置|
|<el-row justify="space-between"><el-col :span="20">keywords</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关键词|
|<el-row justify="space-between"><el-col :span="20">key_questions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关键问题|
|<el-row justify="space-between"><el-col :span="20">tags</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标签|
|<el-row justify="space-between"><el-col :span="20">key_questions_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关键问题向量|
|<el-row justify="space-between"><el-col :span="20">content_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|块内容向量|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块路径|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|文档索引顺序|
|<el-row justify="space-between"><el-col :span="20">document_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档类型|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块类型|
|<el-row justify="space-between"><el-col :span="20">source_indices</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源分块索引|
|<el-row justify="space-between"><el-col :span="20">source_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|源分块计数|
|<el-row justify="space-between"><el-col :span="20">kb_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|
|<el-row justify="space-between"><el-col :span="20">document_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档标识|
|<el-row justify="space-between"><el-col :span="20">document_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">pid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父分块标识|
|<el-row justify="space-between"><el-col :span="20">user_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">user_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "content_preview" : null,
  "content" : null,
  "positions" : null,
  "keywords" : null,
  "key_questions" : null,
  "tags" : null,
  "key_questions_vector" : null,
  "content_vector" : null,
  "path" : null,
  "sequence" : null,
  "document_type" : null,
  "type" : null,
  "source_indices" : null,
  "source_count" : null,
  "kb_id" : null,
  "active" : null,
  "document_id" : null,
  "document_name" : null,
  "pid" : null,
  "user_tag" : null,
  "user_tag2" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取知识库文档分块草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_chunks/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|分块标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块名称|
|<el-row justify="space-between"><el-col :span="20">content_preview</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|块内容（预览）|
|<el-row justify="space-between"><el-col :span="20">content</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|块内容|
|<el-row justify="space-between"><el-col :span="20">positions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档位置|
|<el-row justify="space-between"><el-col :span="20">keywords</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关键词|
|<el-row justify="space-between"><el-col :span="20">key_questions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关键问题|
|<el-row justify="space-between"><el-col :span="20">tags</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标签|
|<el-row justify="space-between"><el-col :span="20">key_questions_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关键问题向量|
|<el-row justify="space-between"><el-col :span="20">content_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|块内容向量|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块路径|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|文档索引顺序|
|<el-row justify="space-between"><el-col :span="20">document_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档类型|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块类型|
|<el-row justify="space-between"><el-col :span="20">source_indices</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源分块索引|
|<el-row justify="space-between"><el-col :span="20">source_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|源分块计数|
|<el-row justify="space-between"><el-col :span="20">kb_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|
|<el-row justify="space-between"><el-col :span="20">document_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档标识|
|<el-row justify="space-between"><el-col :span="20">document_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">pid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父分块标识|
|<el-row justify="space-between"><el-col :span="20">user_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">user_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "content_preview" : null,
  "content" : null,
  "positions" : null,
  "keywords" : null,
  "key_questions" : null,
  "tags" : null,
  "key_questions_vector" : null,
  "content_vector" : null,
  "path" : null,
  "sequence" : null,
  "document_type" : null,
  "type" : null,
  "source_indices" : null,
  "source_count" : null,
  "kb_id" : null,
  "active" : null,
  "document_id" : null,
  "document_name" : null,
  "pid" : null,
  "user_tag" : null,
  "user_tag2" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "content_preview" : null,
  "content" : null,
  "positions" : null,
  "keywords" : null,
  "key_questions" : null,
  "tags" : null,
  "key_questions_vector" : null,
  "content_vector" : null,
  "path" : null,
  "sequence" : null,
  "document_type" : null,
  "type" : null,
  "source_indices" : null,
  "source_count" : null,
  "kb_id" : null,
  "active" : null,
  "document_id" : null,
  "document_name" : null,
  "pid" : null,
  "user_tag" : null,
  "user_tag2" : null,
}

```

## 保存知识库文档分块

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_chunks/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|分块标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块名称|
|<el-row justify="space-between"><el-col :span="20">content_preview</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|块内容（预览）|
|<el-row justify="space-between"><el-col :span="20">content</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|块内容|
|<el-row justify="space-between"><el-col :span="20">positions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档位置|
|<el-row justify="space-between"><el-col :span="20">keywords</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关键词|
|<el-row justify="space-between"><el-col :span="20">key_questions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关键问题|
|<el-row justify="space-between"><el-col :span="20">tags</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标签|
|<el-row justify="space-between"><el-col :span="20">key_questions_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关键问题向量|
|<el-row justify="space-between"><el-col :span="20">content_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|块内容向量|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块路径|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|文档索引顺序|
|<el-row justify="space-between"><el-col :span="20">document_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档类型|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块类型|
|<el-row justify="space-between"><el-col :span="20">source_indices</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源分块索引|
|<el-row justify="space-between"><el-col :span="20">source_count</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|源分块计数|
|<el-row justify="space-between"><el-col :span="20">kb_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|
|<el-row justify="space-between"><el-col :span="20">document_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档标识|
|<el-row justify="space-between"><el-col :span="20">document_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">pid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父分块标识|
|<el-row justify="space-between"><el-col :span="20">user_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">user_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "content_preview" : null,
  "content" : null,
  "positions" : null,
  "keywords" : null,
  "key_questions" : null,
  "tags" : null,
  "key_questions_vector" : null,
  "content_vector" : null,
  "path" : null,
  "sequence" : null,
  "document_type" : null,
  "type" : null,
  "source_indices" : null,
  "source_count" : null,
  "kb_id" : null,
  "active" : null,
  "document_id" : null,
  "document_name" : null,
  "pid" : null,
  "user_tag" : null,
  "user_tag2" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "content_preview" : null,
  "content" : null,
  "positions" : null,
  "keywords" : null,
  "key_questions" : null,
  "tags" : null,
  "key_questions_vector" : null,
  "content_vector" : null,
  "path" : null,
  "sequence" : null,
  "document_type" : null,
  "type" : null,
  "source_indices" : null,
  "source_count" : null,
  "kb_id" : null,
  "active" : null,
  "document_id" : null,
  "document_name" : null,
  "pid" : null,
  "user_tag" : null,
  "user_tag2" : null,
}

```

## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_chunks/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_document_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档标识|
|<el-row justify="space-between"><el-col :span="20">n_document_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">n_document_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块标识|
|<el-row justify="space-between"><el-col :span="20">n_kb_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块名称|
|<el-row justify="space-between"><el-col :span="20">n_pid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父分块标识|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_document_id_eq" : null,
  "n_document_name_eq" : null,
  "n_document_name_like" : null,
  "n_id_eq" : null,
  "n_kb_id_eq" : null,
  "n_name_like" : null,
  "n_pid_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "name" : null,
    "create_man" : null,
    "create_time" : null,
    "update_man" : null,
    "update_time" : null,
    "content_preview" : null,
    "content" : null,
    "positions" : null,
    "keywords" : null,
    "key_questions" : null,
    "tags" : null,
    "key_questions_vector" : null,
    "content_vector" : null,
    "path" : null,
    "sequence" : null,
    "document_type" : null,
    "type" : null,
    "source_indices" : null,
    "source_count" : null,
    "kb_id" : null,
    "active" : null,
    "document_id" : null,
    "document_name" : null,
    "pid" : null,
    "user_tag" : null,
    "user_tag2" : null,
  }
]
```

## 检索测试

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_chunks/fetch_retrieval_test" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_document_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档标识|
|<el-row justify="space-between"><el-col :span="20">n_document_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">n_document_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块标识|
|<el-row justify="space-between"><el-col :span="20">n_kb_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块名称|
|<el-row justify="space-between"><el-col :span="20">n_pid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父分块标识|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_document_id_eq" : null,
  "n_document_name_eq" : null,
  "n_document_name_like" : null,
  "n_id_eq" : null,
  "n_kb_id_eq" : null,
  "n_name_like" : null,
  "n_pid_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "name" : null,
    "create_man" : null,
    "create_time" : null,
    "update_man" : null,
    "update_time" : null,
    "content_preview" : null,
    "content" : null,
    "positions" : null,
    "keywords" : null,
    "key_questions" : null,
    "tags" : null,
    "key_questions_vector" : null,
    "content_vector" : null,
    "path" : null,
    "sequence" : null,
    "document_type" : null,
    "type" : null,
    "source_indices" : null,
    "source_count" : null,
    "kb_id" : null,
    "active" : null,
    "document_id" : null,
    "document_name" : null,
    "pid" : null,
    "user_tag" : null,
    "user_tag2" : null,
  }
]
```

## 树表数据集合

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_chunks/fetch_tree" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_document_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档标识|
|<el-row justify="space-between"><el-col :span="20">n_document_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">n_document_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块标识|
|<el-row justify="space-between"><el-col :span="20">n_kb_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块名称|
|<el-row justify="space-between"><el-col :span="20">n_pid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父分块标识|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_document_id_eq" : null,
  "n_document_name_eq" : null,
  "n_document_name_like" : null,
  "n_id_eq" : null,
  "n_kb_id_eq" : null,
  "n_name_like" : null,
  "n_pid_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "name" : null,
    "positions" : null,
    "tags" : null,
    "path" : null,
    "sequence" : null,
    "document_type" : null,
    "type" : null,
    "source_indices" : null,
    "source_count" : null,
    "document_name" : null,
    "pid" : null,
  }
]
```

## 启用

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_chunks/fetch_valid" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_document_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档标识|
|<el-row justify="space-between"><el-col :span="20">n_document_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">n_document_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块标识|
|<el-row justify="space-between"><el-col :span="20">n_kb_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|分块名称|
|<el-row justify="space-between"><el-col :span="20">n_pid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父分块标识|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_document_id_eq" : null,
  "n_document_name_eq" : null,
  "n_document_name_like" : null,
  "n_id_eq" : null,
  "n_kb_id_eq" : null,
  "n_name_like" : null,
  "n_pid_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "name" : null,
    "create_man" : null,
    "create_time" : null,
    "update_man" : null,
    "update_time" : null,
    "content_preview" : null,
    "content" : null,
    "positions" : null,
    "keywords" : null,
    "key_questions" : null,
    "tags" : null,
    "key_questions_vector" : null,
    "content_vector" : null,
    "path" : null,
    "sequence" : null,
    "document_type" : null,
    "type" : null,
    "source_indices" : null,
    "source_count" : null,
    "kb_id" : null,
    "active" : null,
    "document_id" : null,
    "document_name" : null,
    "pid" : null,
    "user_tag" : null,
    "user_tag2" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_chunks/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_chunks/exportdata/{param},/ai_kb_chunks/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_chunks/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_chunks/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_chunks/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_chunks/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_chunks/report" type="info" :closable="false" ></el-alert>
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