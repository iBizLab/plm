# AI凭证(ai_credential) :id=ai_credential
## 创建AI凭证

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_credentials" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">api_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|api密钥|
|<el-row justify="space-between"><el-col :span="20">access_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问密钥|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用凭证|
|<el-row justify="space-between"><el-col :span="20">bearer_token</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Bearer令牌|
|<el-row justify="space-between"><el-col :span="20">client_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端ID|
|<el-row justify="space-between"><el-col :span="20">client_secret</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端密钥|
|<el-row justify="space-between"><el-col :span="20">code_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">credential_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|凭证类型|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用途说明|
|<el-row justify="space-between"><el-col :span="20">provider</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型提供商|
|<el-row justify="space-between"><el-col :span="20">region</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|区域|
|<el-row justify="space-between"><el-col :span="20">scope</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|权限范围|
|<el-row justify="space-between"><el-col :span="20">secret_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|安全密钥|
|<el-row justify="space-between"><el-col :span="20">token_url</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|令牌地址|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "api_key" : null,
  "access_key" : null,
  "active" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "code_name" : null,
  "credential_type" : null,
  "description" : null,
  "provider" : null,
  "region" : null,
  "scope" : null,
  "secret_key" : null,
  "token_url" : null,
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
  "api_key" : null,
  "access_key" : null,
  "active" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "code_name" : null,
  "credential_type" : null,
  "description" : null,
  "provider" : null,
  "region" : null,
  "scope" : null,
  "secret_key" : null,
  "token_url" : null,
}

```

## 获取AI凭证

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_credentials/{key}" type="info" :closable="false" ></el-alert>
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
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "api_key" : null,
  "access_key" : null,
  "active" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "code_name" : null,
  "credential_type" : null,
  "description" : null,
  "provider" : null,
  "region" : null,
  "scope" : null,
  "secret_key" : null,
  "token_url" : null,
}

```

## 删除AI凭证

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_credentials/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|





## 更新AI凭证

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_credentials/{key}" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">api_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|api密钥|
|<el-row justify="space-between"><el-col :span="20">access_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问密钥|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用凭证|
|<el-row justify="space-between"><el-col :span="20">bearer_token</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Bearer令牌|
|<el-row justify="space-between"><el-col :span="20">client_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端ID|
|<el-row justify="space-between"><el-col :span="20">client_secret</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端密钥|
|<el-row justify="space-between"><el-col :span="20">code_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">credential_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|凭证类型|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用途说明|
|<el-row justify="space-between"><el-col :span="20">provider</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型提供商|
|<el-row justify="space-between"><el-col :span="20">region</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|区域|
|<el-row justify="space-between"><el-col :span="20">scope</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|权限范围|
|<el-row justify="space-between"><el-col :span="20">secret_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|安全密钥|
|<el-row justify="space-between"><el-col :span="20">token_url</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|令牌地址|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "api_key" : null,
  "access_key" : null,
  "active" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "code_name" : null,
  "credential_type" : null,
  "description" : null,
  "provider" : null,
  "region" : null,
  "scope" : null,
  "secret_key" : null,
  "token_url" : null,
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
  "api_key" : null,
  "access_key" : null,
  "active" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "code_name" : null,
  "credential_type" : null,
  "description" : null,
  "provider" : null,
  "region" : null,
  "scope" : null,
  "secret_key" : null,
  "token_url" : null,
}

```

## 检查AI凭证主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_credentials/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">api_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|api密钥|
|<el-row justify="space-between"><el-col :span="20">access_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问密钥|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用凭证|
|<el-row justify="space-between"><el-col :span="20">bearer_token</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Bearer令牌|
|<el-row justify="space-between"><el-col :span="20">client_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端ID|
|<el-row justify="space-between"><el-col :span="20">client_secret</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端密钥|
|<el-row justify="space-between"><el-col :span="20">code_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">credential_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|凭证类型|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用途说明|
|<el-row justify="space-between"><el-col :span="20">provider</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型提供商|
|<el-row justify="space-between"><el-col :span="20">region</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|区域|
|<el-row justify="space-between"><el-col :span="20">scope</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|权限范围|
|<el-row justify="space-between"><el-col :span="20">secret_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|安全密钥|
|<el-row justify="space-between"><el-col :span="20">token_url</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|令牌地址|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "api_key" : null,
  "access_key" : null,
  "active" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "code_name" : null,
  "credential_type" : null,
  "description" : null,
  "provider" : null,
  "region" : null,
  "scope" : null,
  "secret_key" : null,
  "token_url" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取AI凭证草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_credentials/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">api_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|api密钥|
|<el-row justify="space-between"><el-col :span="20">access_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问密钥|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用凭证|
|<el-row justify="space-between"><el-col :span="20">bearer_token</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Bearer令牌|
|<el-row justify="space-between"><el-col :span="20">client_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端ID|
|<el-row justify="space-between"><el-col :span="20">client_secret</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端密钥|
|<el-row justify="space-between"><el-col :span="20">code_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">credential_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|凭证类型|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用途说明|
|<el-row justify="space-between"><el-col :span="20">provider</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型提供商|
|<el-row justify="space-between"><el-col :span="20">region</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|区域|
|<el-row justify="space-between"><el-col :span="20">scope</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|权限范围|
|<el-row justify="space-between"><el-col :span="20">secret_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|安全密钥|
|<el-row justify="space-between"><el-col :span="20">token_url</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|令牌地址|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "api_key" : null,
  "access_key" : null,
  "active" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "code_name" : null,
  "credential_type" : null,
  "description" : null,
  "provider" : null,
  "region" : null,
  "scope" : null,
  "secret_key" : null,
  "token_url" : null,
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
  "api_key" : null,
  "access_key" : null,
  "active" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "code_name" : null,
  "credential_type" : null,
  "description" : null,
  "provider" : null,
  "region" : null,
  "scope" : null,
  "secret_key" : null,
  "token_url" : null,
}

```

## 保存AI凭证

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_credentials/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">api_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|api密钥|
|<el-row justify="space-between"><el-col :span="20">access_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问密钥|
|<el-row justify="space-between"><el-col :span="20">active</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用凭证|
|<el-row justify="space-between"><el-col :span="20">bearer_token</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Bearer令牌|
|<el-row justify="space-between"><el-col :span="20">client_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端ID|
|<el-row justify="space-between"><el-col :span="20">client_secret</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端密钥|
|<el-row justify="space-between"><el-col :span="20">code_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">credential_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|凭证类型|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用途说明|
|<el-row justify="space-between"><el-col :span="20">provider</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|模型提供商|
|<el-row justify="space-between"><el-col :span="20">region</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|区域|
|<el-row justify="space-between"><el-col :span="20">scope</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|权限范围|
|<el-row justify="space-between"><el-col :span="20">secret_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|安全密钥|
|<el-row justify="space-between"><el-col :span="20">token_url</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|令牌地址|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "api_key" : null,
  "access_key" : null,
  "active" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "code_name" : null,
  "credential_type" : null,
  "description" : null,
  "provider" : null,
  "region" : null,
  "scope" : null,
  "secret_key" : null,
  "token_url" : null,
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
  "api_key" : null,
  "access_key" : null,
  "active" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "code_name" : null,
  "credential_type" : null,
  "description" : null,
  "provider" : null,
  "region" : null,
  "scope" : null,
  "secret_key" : null,
  "token_url" : null,
}

```

## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_credentials/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
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
    "api_key" : null,
    "access_key" : null,
    "active" : null,
    "bearer_token" : null,
    "client_id" : null,
    "client_secret" : null,
    "code_name" : null,
    "credential_type" : null,
    "description" : null,
    "provider" : null,
    "region" : null,
    "scope" : null,
    "secret_key" : null,
    "token_url" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_credentials/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_credentials/exportdata/{param},/ai_credentials/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_credentials/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_credentials/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_credentials/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_credentials/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_credentials/report" type="info" :closable="false" ></el-alert>
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