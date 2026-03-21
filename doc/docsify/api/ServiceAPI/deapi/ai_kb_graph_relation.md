# 知识库图谱关系(ai_kb_graph_relation) :id=ai_kb_graph_relation
## 创建知识库图谱关系

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_graph_relations" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|关系标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关系名称|
|<el-row justify="space-between"><el-col :span="20">subject_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体标识|
|<el-row justify="space-between"><el-col :span="20">object_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体标识|
|<el-row justify="space-between"><el-col :span="20">predicate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关系谓词|
|<el-row justify="space-between"><el-col :span="20">confidence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|置信度|
|<el-row justify="space-between"><el-col :span="20">kb_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">subject_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体名称|
|<el-row justify="space-between"><el-col :span="20">object_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体名称|
|<el-row justify="space-between"><el-col :span="20">kb_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">description_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|描述向量|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|



##### 请求示例： {docsify-ignore}
```json
{
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "id" : null,
  "name" : null,
  "subject_id" : null,
  "object_id" : null,
  "predicate" : null,
  "confidence" : null,
  "kb_id" : null,
  "subject_name" : null,
  "object_name" : null,
  "kb_name" : null,
  "description_vector" : null,
  "active" : null,
  "description" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "id" : null,
  "name" : null,
  "subject_id" : null,
  "object_id" : null,
  "predicate" : null,
  "confidence" : null,
  "kb_id" : null,
  "subject_name" : null,
  "object_name" : null,
  "kb_name" : null,
  "description_vector" : null,
  "active" : null,
  "description" : null,
}

```

## 获取知识库图谱关系

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_graph_relations/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|关系标识|




##### 响应示例： {docsify-ignore}
```json

{
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "id" : null,
  "name" : null,
  "subject_id" : null,
  "object_id" : null,
  "predicate" : null,
  "confidence" : null,
  "kb_id" : null,
  "subject_name" : null,
  "object_name" : null,
  "kb_name" : null,
  "description_vector" : null,
  "active" : null,
  "description" : null,
}

```

## 删除知识库图谱关系

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_graph_relations/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|关系标识|





## 更新知识库图谱关系

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_graph_relations/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|关系标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|关系标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关系名称|
|<el-row justify="space-between"><el-col :span="20">subject_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体标识|
|<el-row justify="space-between"><el-col :span="20">object_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体标识|
|<el-row justify="space-between"><el-col :span="20">predicate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关系谓词|
|<el-row justify="space-between"><el-col :span="20">confidence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|置信度|
|<el-row justify="space-between"><el-col :span="20">kb_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">subject_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体名称|
|<el-row justify="space-between"><el-col :span="20">object_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体名称|
|<el-row justify="space-between"><el-col :span="20">kb_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">description_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|描述向量|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|



##### 请求示例： {docsify-ignore}
```json
{
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "id" : null,
  "name" : null,
  "subject_id" : null,
  "object_id" : null,
  "predicate" : null,
  "confidence" : null,
  "kb_id" : null,
  "subject_name" : null,
  "object_name" : null,
  "kb_name" : null,
  "description_vector" : null,
  "active" : null,
  "description" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "id" : null,
  "name" : null,
  "subject_id" : null,
  "object_id" : null,
  "predicate" : null,
  "confidence" : null,
  "kb_id" : null,
  "subject_name" : null,
  "object_name" : null,
  "kb_name" : null,
  "description_vector" : null,
  "active" : null,
  "description" : null,
}

```

## 检查知识库图谱关系主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_graph_relations/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|关系标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关系名称|
|<el-row justify="space-between"><el-col :span="20">subject_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体标识|
|<el-row justify="space-between"><el-col :span="20">object_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体标识|
|<el-row justify="space-between"><el-col :span="20">predicate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关系谓词|
|<el-row justify="space-between"><el-col :span="20">confidence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|置信度|
|<el-row justify="space-between"><el-col :span="20">kb_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">subject_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体名称|
|<el-row justify="space-between"><el-col :span="20">object_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体名称|
|<el-row justify="space-between"><el-col :span="20">kb_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">description_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|描述向量|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|



##### 请求示例： {docsify-ignore}
```json
{
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "id" : null,
  "name" : null,
  "subject_id" : null,
  "object_id" : null,
  "predicate" : null,
  "confidence" : null,
  "kb_id" : null,
  "subject_name" : null,
  "object_name" : null,
  "kb_name" : null,
  "description_vector" : null,
  "active" : null,
  "description" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取知识库图谱关系草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_graph_relations/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|关系标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关系名称|
|<el-row justify="space-between"><el-col :span="20">subject_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体标识|
|<el-row justify="space-between"><el-col :span="20">object_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体标识|
|<el-row justify="space-between"><el-col :span="20">predicate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关系谓词|
|<el-row justify="space-between"><el-col :span="20">confidence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|置信度|
|<el-row justify="space-between"><el-col :span="20">kb_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">subject_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体名称|
|<el-row justify="space-between"><el-col :span="20">object_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体名称|
|<el-row justify="space-between"><el-col :span="20">kb_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">description_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|描述向量|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|



##### 请求示例： {docsify-ignore}
```json
{
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "id" : null,
  "name" : null,
  "subject_id" : null,
  "object_id" : null,
  "predicate" : null,
  "confidence" : null,
  "kb_id" : null,
  "subject_name" : null,
  "object_name" : null,
  "kb_name" : null,
  "description_vector" : null,
  "active" : null,
  "description" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "id" : null,
  "name" : null,
  "subject_id" : null,
  "object_id" : null,
  "predicate" : null,
  "confidence" : null,
  "kb_id" : null,
  "subject_name" : null,
  "object_name" : null,
  "kb_name" : null,
  "description_vector" : null,
  "active" : null,
  "description" : null,
}

```

## 保存知识库图谱关系

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_graph_relations/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|关系标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关系名称|
|<el-row justify="space-between"><el-col :span="20">subject_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体标识|
|<el-row justify="space-between"><el-col :span="20">object_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体标识|
|<el-row justify="space-between"><el-col :span="20">predicate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关系谓词|
|<el-row justify="space-between"><el-col :span="20">confidence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|置信度|
|<el-row justify="space-between"><el-col :span="20">kb_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">subject_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体名称|
|<el-row justify="space-between"><el-col :span="20">object_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体名称|
|<el-row justify="space-between"><el-col :span="20">kb_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">description_vector</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|描述向量|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|



##### 请求示例： {docsify-ignore}
```json
{
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "id" : null,
  "name" : null,
  "subject_id" : null,
  "object_id" : null,
  "predicate" : null,
  "confidence" : null,
  "kb_id" : null,
  "subject_name" : null,
  "object_name" : null,
  "kb_name" : null,
  "description_vector" : null,
  "active" : null,
  "description" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "id" : null,
  "name" : null,
  "subject_id" : null,
  "object_id" : null,
  "predicate" : null,
  "confidence" : null,
  "kb_id" : null,
  "subject_name" : null,
  "object_name" : null,
  "kb_name" : null,
  "description_vector" : null,
  "active" : null,
  "description" : null,
}

```

## 当前数据库

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_graph_relations/fetch_cur_kb" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关系标识|
|<el-row justify="space-between"><el-col :span="20">n_kb_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">n_kb_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">n_kb_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关系名称|
|<el-row justify="space-between"><el-col :span="20">n_object_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体标识|
|<el-row justify="space-between"><el-col :span="20">n_object_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体名称|
|<el-row justify="space-between"><el-col :span="20">n_object_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体名称|
|<el-row justify="space-between"><el-col :span="20">n_subject_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体标识|
|<el-row justify="space-between"><el-col :span="20">n_subject_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体名称|
|<el-row justify="space-between"><el-col :span="20">n_subject_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体名称|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_kb_id_eq" : null,
  "n_kb_name_eq" : null,
  "n_kb_name_like" : null,
  "n_name_like" : null,
  "n_object_id_eq" : null,
  "n_object_name_eq" : null,
  "n_object_name_like" : null,
  "n_subject_id_eq" : null,
  "n_subject_name_eq" : null,
  "n_subject_name_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "create_man" : null,
    "create_time" : null,
    "update_man" : null,
    "update_time" : null,
    "id" : null,
    "name" : null,
    "subject_id" : null,
    "object_id" : null,
    "predicate" : null,
    "confidence" : null,
    "kb_id" : null,
    "subject_name" : null,
    "object_name" : null,
    "kb_name" : null,
    "description_vector" : null,
    "active" : null,
    "description" : null,
  }
]
```

## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_graph_relations/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关系标识|
|<el-row justify="space-between"><el-col :span="20">n_kb_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库标识|
|<el-row justify="space-between"><el-col :span="20">n_kb_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">n_kb_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|知识库名称|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关系名称|
|<el-row justify="space-between"><el-col :span="20">n_object_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体标识|
|<el-row justify="space-between"><el-col :span="20">n_object_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体名称|
|<el-row justify="space-between"><el-col :span="20">n_object_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客体名称|
|<el-row justify="space-between"><el-col :span="20">n_subject_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体标识|
|<el-row justify="space-between"><el-col :span="20">n_subject_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体名称|
|<el-row justify="space-between"><el-col :span="20">n_subject_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主体名称|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_kb_id_eq" : null,
  "n_kb_name_eq" : null,
  "n_kb_name_like" : null,
  "n_name_like" : null,
  "n_object_id_eq" : null,
  "n_object_name_eq" : null,
  "n_object_name_like" : null,
  "n_subject_id_eq" : null,
  "n_subject_name_eq" : null,
  "n_subject_name_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "create_man" : null,
    "create_time" : null,
    "update_man" : null,
    "update_time" : null,
    "id" : null,
    "name" : null,
    "subject_id" : null,
    "object_id" : null,
    "predicate" : null,
    "confidence" : null,
    "kb_id" : null,
    "subject_name" : null,
    "object_name" : null,
    "kb_name" : null,
    "description_vector" : null,
    "active" : null,
    "description" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_kb_graph_relations/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_graph_relations/exportdata/{param},/ai_kb_graph_relations/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_graph_relations/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_graph_relations/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_graph_relations/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_graph_relations/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_kb_graph_relations/report" type="info" :closable="false" ></el-alert>
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