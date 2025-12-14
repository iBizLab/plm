# 知识库文档(ai_kb_document) :id=ai_kb_document
## 创建知识库文档

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_documents" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|知识库文档标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">sync_frequency</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|同步频率|
|<el-row justify="space-between"><el-col :span="20">source_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源类型|
|<el-row justify="space-between"><el-col :span="20">source_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源标识|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档类型|
|<el-row justify="space-between"><el-col :span="20">file</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上传文件|
|<el-row justify="space-between"><el-col :span="20">meta_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档元数据|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">chunk_num</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|切片数量|
|<el-row justify="space-between"><el-col :span="20">size</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|内容大小|
|<el-row justify="space-between"><el-col :span="20">file_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文件类型|
|<el-row justify="space-between"><el-col :span="20">custom_chunk</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|自定义切片|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|
|<el-row justify="space-between"><el-col :span="20">chunk_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">kb_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">kb_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">parser_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|解析配置|
|<el-row justify="space-between"><el-col :span="20">sync_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档同步标识|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "sync_frequency" : null,
  "source_type" : null,
  "source_id" : null,
  "type" : null,
  "file" : null,
  "meta_data" : null,
  "status" : null,
  "chunk_num" : null,
  "size" : null,
  "file_type" : null,
  "custom_chunk" : null,
  "active" : null,
  "chunk_method" : null,
  "kb_id" : null,
  "kb_name" : null,
  "parser_config" : null,
  "sync_id" : null,
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
  "sync_frequency" : null,
  "source_type" : null,
  "source_id" : null,
  "type" : null,
  "file" : null,
  "meta_data" : null,
  "status" : null,
  "chunk_num" : null,
  "size" : null,
  "file_type" : null,
  "custom_chunk" : null,
  "active" : null,
  "chunk_method" : null,
  "kb_id" : null,
  "kb_name" : null,
  "parser_config" : null,
  "sync_id" : null,
}

```

## 获取知识库文档

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_documents/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|知识库文档标识|




##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "sync_frequency" : null,
  "source_type" : null,
  "source_id" : null,
  "type" : null,
  "file" : null,
  "meta_data" : null,
  "status" : null,
  "chunk_num" : null,
  "size" : null,
  "file_type" : null,
  "custom_chunk" : null,
  "active" : null,
  "chunk_method" : null,
  "kb_id" : null,
  "kb_name" : null,
  "parser_config" : null,
  "sync_id" : null,
}

```

## 删除知识库文档

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_documents/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|知识库文档标识|





## 更新知识库文档

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_documents/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|知识库文档标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|知识库文档标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">sync_frequency</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|同步频率|
|<el-row justify="space-between"><el-col :span="20">source_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源类型|
|<el-row justify="space-between"><el-col :span="20">source_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源标识|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档类型|
|<el-row justify="space-between"><el-col :span="20">file</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上传文件|
|<el-row justify="space-between"><el-col :span="20">meta_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档元数据|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">chunk_num</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|切片数量|
|<el-row justify="space-between"><el-col :span="20">size</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|内容大小|
|<el-row justify="space-between"><el-col :span="20">file_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文件类型|
|<el-row justify="space-between"><el-col :span="20">custom_chunk</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|自定义切片|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|
|<el-row justify="space-between"><el-col :span="20">chunk_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">kb_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">kb_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">parser_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|解析配置|
|<el-row justify="space-between"><el-col :span="20">sync_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档同步标识|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "sync_frequency" : null,
  "source_type" : null,
  "source_id" : null,
  "type" : null,
  "file" : null,
  "meta_data" : null,
  "status" : null,
  "chunk_num" : null,
  "size" : null,
  "file_type" : null,
  "custom_chunk" : null,
  "active" : null,
  "chunk_method" : null,
  "kb_id" : null,
  "kb_name" : null,
  "parser_config" : null,
  "sync_id" : null,
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
  "sync_frequency" : null,
  "source_type" : null,
  "source_id" : null,
  "type" : null,
  "file" : null,
  "meta_data" : null,
  "status" : null,
  "chunk_num" : null,
  "size" : null,
  "file_type" : null,
  "custom_chunk" : null,
  "active" : null,
  "chunk_method" : null,
  "kb_id" : null,
  "kb_name" : null,
  "parser_config" : null,
  "sync_id" : null,
}

```

## 检查知识库文档主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_documents/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|知识库文档标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">sync_frequency</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|同步频率|
|<el-row justify="space-between"><el-col :span="20">source_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源类型|
|<el-row justify="space-between"><el-col :span="20">source_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源标识|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档类型|
|<el-row justify="space-between"><el-col :span="20">file</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上传文件|
|<el-row justify="space-between"><el-col :span="20">meta_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档元数据|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">chunk_num</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|切片数量|
|<el-row justify="space-between"><el-col :span="20">size</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|内容大小|
|<el-row justify="space-between"><el-col :span="20">file_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文件类型|
|<el-row justify="space-between"><el-col :span="20">custom_chunk</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|自定义切片|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|
|<el-row justify="space-between"><el-col :span="20">chunk_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">kb_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">kb_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">parser_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|解析配置|
|<el-row justify="space-between"><el-col :span="20">sync_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档同步标识|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "sync_frequency" : null,
  "source_type" : null,
  "source_id" : null,
  "type" : null,
  "file" : null,
  "meta_data" : null,
  "status" : null,
  "chunk_num" : null,
  "size" : null,
  "file_type" : null,
  "custom_chunk" : null,
  "active" : null,
  "chunk_method" : null,
  "kb_id" : null,
  "kb_name" : null,
  "parser_config" : null,
  "sync_id" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取知识库文档草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_documents/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|知识库文档标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">sync_frequency</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|同步频率|
|<el-row justify="space-between"><el-col :span="20">source_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源类型|
|<el-row justify="space-between"><el-col :span="20">source_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源标识|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档类型|
|<el-row justify="space-between"><el-col :span="20">file</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上传文件|
|<el-row justify="space-between"><el-col :span="20">meta_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档元数据|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">chunk_num</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|切片数量|
|<el-row justify="space-between"><el-col :span="20">size</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|内容大小|
|<el-row justify="space-between"><el-col :span="20">file_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文件类型|
|<el-row justify="space-between"><el-col :span="20">custom_chunk</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|自定义切片|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|
|<el-row justify="space-between"><el-col :span="20">chunk_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">kb_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">kb_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">parser_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|解析配置|
|<el-row justify="space-between"><el-col :span="20">sync_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档同步标识|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "sync_frequency" : null,
  "source_type" : null,
  "source_id" : null,
  "type" : null,
  "file" : null,
  "meta_data" : null,
  "status" : null,
  "chunk_num" : null,
  "size" : null,
  "file_type" : null,
  "custom_chunk" : null,
  "active" : null,
  "chunk_method" : null,
  "kb_id" : null,
  "kb_name" : null,
  "parser_config" : null,
  "sync_id" : null,
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
  "sync_frequency" : null,
  "source_type" : null,
  "source_id" : null,
  "type" : null,
  "file" : null,
  "meta_data" : null,
  "status" : null,
  "chunk_num" : null,
  "size" : null,
  "file_type" : null,
  "custom_chunk" : null,
  "active" : null,
  "chunk_method" : null,
  "kb_id" : null,
  "kb_name" : null,
  "parser_config" : null,
  "sync_id" : null,
}

```

## 保存知识库文档

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_documents/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|知识库文档标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">sync_frequency</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|同步频率|
|<el-row justify="space-between"><el-col :span="20">source_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源类型|
|<el-row justify="space-between"><el-col :span="20">source_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源标识|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档类型|
|<el-row justify="space-between"><el-col :span="20">file</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上传文件|
|<el-row justify="space-between"><el-col :span="20">meta_data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档元数据|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">chunk_num</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|切片数量|
|<el-row justify="space-between"><el-col :span="20">size</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|内容大小|
|<el-row justify="space-between"><el-col :span="20">file_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文件类型|
|<el-row justify="space-between"><el-col :span="20">custom_chunk</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|自定义切片|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|
|<el-row justify="space-between"><el-col :span="20">chunk_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|切片方法|
|<el-row justify="space-between"><el-col :span="20">kb_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">kb_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">parser_config</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|解析配置|
|<el-row justify="space-between"><el-col :span="20">sync_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档同步标识|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "sync_frequency" : null,
  "source_type" : null,
  "source_id" : null,
  "type" : null,
  "file" : null,
  "meta_data" : null,
  "status" : null,
  "chunk_num" : null,
  "size" : null,
  "file_type" : null,
  "custom_chunk" : null,
  "active" : null,
  "chunk_method" : null,
  "kb_id" : null,
  "kb_name" : null,
  "parser_config" : null,
  "sync_id" : null,
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
  "sync_frequency" : null,
  "source_type" : null,
  "source_id" : null,
  "type" : null,
  "file" : null,
  "meta_data" : null,
  "status" : null,
  "chunk_num" : null,
  "size" : null,
  "file_type" : null,
  "custom_chunk" : null,
  "active" : null,
  "chunk_method" : null,
  "kb_id" : null,
  "kb_name" : null,
  "parser_config" : null,
  "sync_id" : null,
}

```

## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_documents/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_file_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文件类型|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档标识|
|<el-row justify="space-between"><el-col :span="20">n_kb_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">n_kb_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">n_kb_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库文档名称|
|<el-row justify="space-between"><el-col :span="20">n_source_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|源标识|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_sync_frequency_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|同步频率|
|<el-row justify="space-between"><el-col :span="20">n_sync_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档同步标识|
|<el-row justify="space-between"><el-col :span="20">n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|文档类型|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_file_type_eq" : null,
  "n_id_eq" : null,
  "n_kb_id_eq" : null,
  "n_kb_name_eq" : null,
  "n_kb_name_like" : null,
  "n_name_like" : null,
  "n_source_id_eq" : null,
  "n_status_eq" : null,
  "n_sync_frequency_eq" : null,
  "n_sync_id_eq" : null,
  "n_type_eq" : null,
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
    "sync_frequency" : null,
    "source_type" : null,
    "source_id" : null,
    "type" : null,
    "file" : null,
    "meta_data" : null,
    "status" : null,
    "chunk_num" : null,
    "size" : null,
    "file_type" : null,
    "custom_chunk" : null,
    "active" : null,
    "chunk_method" : null,
    "kb_id" : null,
    "kb_name" : null,
    "parser_config" : null,
    "sync_id" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_documents/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_documents/exportdata/{param},/ai_kb_documents/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_documents/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_documents/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_documents/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_documents/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_documents/report" type="info" :closable="false" ></el-alert>
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