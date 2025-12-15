# AI大模型(ai_model) :id=ai_model
## 创建AI大模型

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_models" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型名称|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用该模型|
|<el-row justify="space-between"><el-col :span="20">provider</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型提供商|
|<el-row justify="space-between"><el-col :span="20">api_base_url</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型 API 地址|
|<el-row justify="space-between"><el-col :span="20">model_category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型类别|
|<el-row justify="space-between"><el-col :span="20">model_capability</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型能力|
|<el-row justify="space-between"><el-col :span="20">max_context_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大上下文长度（token）|
|<el-row justify="space-between"><el-col :span="20">max_output_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大输出长度|
|<el-row justify="space-between"><el-col :span="20">extra_params</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型额外参数|
|<el-row justify="space-between"><el-col :span="20">desc_oss_image</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|多模态图片解析|
|<el-row justify="space-between"><el-col :span="20">ai_credential_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI凭证标识|
|<el-row justify="space-between"><el-col :span="20">ai_credential_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI凭证名称|
|<el-row justify="space-between"><el-col :span="20">code_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型标识|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "active" : null,
  "provider" : null,
  "api_base_url" : null,
  "model_category" : null,
  "model_capability" : null,
  "max_context_tokens" : null,
  "max_output_tokens" : null,
  "extra_params" : null,
  "desc_oss_image" : null,
  "ai_credential_id" : null,
  "ai_credential_name" : null,
  "code_name" : null,
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
  "active" : null,
  "provider" : null,
  "api_base_url" : null,
  "model_category" : null,
  "model_capability" : null,
  "max_context_tokens" : null,
  "max_output_tokens" : null,
  "extra_params" : null,
  "desc_oss_image" : null,
  "ai_credential_id" : null,
  "ai_credential_name" : null,
  "code_name" : null,
}

```

## 获取AI大模型

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_models/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|模型标识|




##### 响应示例： {docsify-ignore}
```json

{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "active" : null,
  "provider" : null,
  "api_base_url" : null,
  "model_category" : null,
  "model_capability" : null,
  "max_context_tokens" : null,
  "max_output_tokens" : null,
  "extra_params" : null,
  "desc_oss_image" : null,
  "ai_credential_id" : null,
  "ai_credential_name" : null,
  "code_name" : null,
}

```

## 删除AI大模型

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_models/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|模型标识|





## 更新AI大模型

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_models/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|模型标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型名称|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用该模型|
|<el-row justify="space-between"><el-col :span="20">provider</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型提供商|
|<el-row justify="space-between"><el-col :span="20">api_base_url</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型 API 地址|
|<el-row justify="space-between"><el-col :span="20">model_category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型类别|
|<el-row justify="space-between"><el-col :span="20">model_capability</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型能力|
|<el-row justify="space-between"><el-col :span="20">max_context_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大上下文长度（token）|
|<el-row justify="space-between"><el-col :span="20">max_output_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大输出长度|
|<el-row justify="space-between"><el-col :span="20">extra_params</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型额外参数|
|<el-row justify="space-between"><el-col :span="20">desc_oss_image</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|多模态图片解析|
|<el-row justify="space-between"><el-col :span="20">ai_credential_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI凭证标识|
|<el-row justify="space-between"><el-col :span="20">ai_credential_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI凭证名称|
|<el-row justify="space-between"><el-col :span="20">code_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型标识|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "active" : null,
  "provider" : null,
  "api_base_url" : null,
  "model_category" : null,
  "model_capability" : null,
  "max_context_tokens" : null,
  "max_output_tokens" : null,
  "extra_params" : null,
  "desc_oss_image" : null,
  "ai_credential_id" : null,
  "ai_credential_name" : null,
  "code_name" : null,
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
  "active" : null,
  "provider" : null,
  "api_base_url" : null,
  "model_category" : null,
  "model_capability" : null,
  "max_context_tokens" : null,
  "max_output_tokens" : null,
  "extra_params" : null,
  "desc_oss_image" : null,
  "ai_credential_id" : null,
  "ai_credential_name" : null,
  "code_name" : null,
}

```

## 检查AI大模型主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_models/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型名称|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用该模型|
|<el-row justify="space-between"><el-col :span="20">provider</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型提供商|
|<el-row justify="space-between"><el-col :span="20">api_base_url</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型 API 地址|
|<el-row justify="space-between"><el-col :span="20">model_category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型类别|
|<el-row justify="space-between"><el-col :span="20">model_capability</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型能力|
|<el-row justify="space-between"><el-col :span="20">max_context_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大上下文长度（token）|
|<el-row justify="space-between"><el-col :span="20">max_output_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大输出长度|
|<el-row justify="space-between"><el-col :span="20">extra_params</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型额外参数|
|<el-row justify="space-between"><el-col :span="20">desc_oss_image</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|多模态图片解析|
|<el-row justify="space-between"><el-col :span="20">ai_credential_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI凭证标识|
|<el-row justify="space-between"><el-col :span="20">ai_credential_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI凭证名称|
|<el-row justify="space-between"><el-col :span="20">code_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型标识|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "active" : null,
  "provider" : null,
  "api_base_url" : null,
  "model_category" : null,
  "model_capability" : null,
  "max_context_tokens" : null,
  "max_output_tokens" : null,
  "extra_params" : null,
  "desc_oss_image" : null,
  "ai_credential_id" : null,
  "ai_credential_name" : null,
  "code_name" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取AI大模型草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_models/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型名称|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用该模型|
|<el-row justify="space-between"><el-col :span="20">provider</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型提供商|
|<el-row justify="space-between"><el-col :span="20">api_base_url</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型 API 地址|
|<el-row justify="space-between"><el-col :span="20">model_category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型类别|
|<el-row justify="space-between"><el-col :span="20">model_capability</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型能力|
|<el-row justify="space-between"><el-col :span="20">max_context_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大上下文长度（token）|
|<el-row justify="space-between"><el-col :span="20">max_output_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大输出长度|
|<el-row justify="space-between"><el-col :span="20">extra_params</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型额外参数|
|<el-row justify="space-between"><el-col :span="20">desc_oss_image</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|多模态图片解析|
|<el-row justify="space-between"><el-col :span="20">ai_credential_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI凭证标识|
|<el-row justify="space-between"><el-col :span="20">ai_credential_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI凭证名称|
|<el-row justify="space-between"><el-col :span="20">code_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型标识|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "active" : null,
  "provider" : null,
  "api_base_url" : null,
  "model_category" : null,
  "model_capability" : null,
  "max_context_tokens" : null,
  "max_output_tokens" : null,
  "extra_params" : null,
  "desc_oss_image" : null,
  "ai_credential_id" : null,
  "ai_credential_name" : null,
  "code_name" : null,
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
  "active" : null,
  "provider" : null,
  "api_base_url" : null,
  "model_category" : null,
  "model_capability" : null,
  "max_context_tokens" : null,
  "max_output_tokens" : null,
  "extra_params" : null,
  "desc_oss_image" : null,
  "ai_credential_id" : null,
  "ai_credential_name" : null,
  "code_name" : null,
}

```

## 保存AI大模型

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_models/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型名称|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用该模型|
|<el-row justify="space-between"><el-col :span="20">provider</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型提供商|
|<el-row justify="space-between"><el-col :span="20">api_base_url</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型 API 地址|
|<el-row justify="space-between"><el-col :span="20">model_category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型类别|
|<el-row justify="space-between"><el-col :span="20">model_capability</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型能力|
|<el-row justify="space-between"><el-col :span="20">max_context_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大上下文长度（token）|
|<el-row justify="space-between"><el-col :span="20">max_output_tokens</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最大输出长度|
|<el-row justify="space-between"><el-col :span="20">extra_params</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型额外参数|
|<el-row justify="space-between"><el-col :span="20">desc_oss_image</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|多模态图片解析|
|<el-row justify="space-between"><el-col :span="20">ai_credential_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI凭证标识|
|<el-row justify="space-between"><el-col :span="20">ai_credential_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI凭证名称|
|<el-row justify="space-between"><el-col :span="20">code_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型标识|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "active" : null,
  "provider" : null,
  "api_base_url" : null,
  "model_category" : null,
  "model_capability" : null,
  "max_context_tokens" : null,
  "max_output_tokens" : null,
  "extra_params" : null,
  "desc_oss_image" : null,
  "ai_credential_id" : null,
  "ai_credential_name" : null,
  "code_name" : null,
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
  "active" : null,
  "provider" : null,
  "api_base_url" : null,
  "model_category" : null,
  "model_capability" : null,
  "max_context_tokens" : null,
  "max_output_tokens" : null,
  "extra_params" : null,
  "desc_oss_image" : null,
  "ai_credential_id" : null,
  "ai_credential_name" : null,
  "code_name" : null,
}

```

## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_models/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_ai_credential_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI凭证标识|
|<el-row justify="space-between"><el-col :span="20">n_ai_credential_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI凭证名称|
|<el-row justify="space-between"><el-col :span="20">n_ai_credential_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI凭证名称|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模型名称|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_ai_credential_id_eq" : null,
  "n_ai_credential_name_eq" : null,
  "n_ai_credential_name_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
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
    "active" : null,
    "provider" : null,
    "api_base_url" : null,
    "model_category" : null,
    "model_capability" : null,
    "max_context_tokens" : null,
    "max_output_tokens" : null,
    "extra_params" : null,
    "desc_oss_image" : null,
    "ai_credential_id" : null,
    "ai_credential_name" : null,
    "code_name" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_models/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_models/exportdata/{param},/ai_models/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_models/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_models/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_models/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_models/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_models/report" type="info" :closable="false" ></el-alert>
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