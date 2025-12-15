# AI调用工具(ai_tool) :id=ai_tool
## 创建AI调用工具

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_tools" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|AI调用工具标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI调用工具名称|
|<el-row justify="space-between"><el-col :span="20">api_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|api密钥|
|<el-row justify="space-between"><el-col :span="20">tool_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具标记|
|<el-row justify="space-between"><el-col :span="20">access_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问密钥|
|<el-row justify="space-between"><el-col :span="20">api_auth_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证方式|
|<el-row justify="space-between"><el-col :span="20">api_headers</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|请求头|
|<el-row justify="space-between"><el-col :span="20">api_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|HTTP 方法|
|<el-row justify="space-between"><el-col :span="20">api_url</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|接口地址|
|<el-row justify="space-between"><el-col :span="20">bearer_token</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Bearer令牌|
|<el-row justify="space-between"><el-col :span="20">client_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端ID|
|<el-row justify="space-between"><el-col :span="20">client_secret</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端密钥|
|<el-row justify="space-between"><el-col :span="20">input_schema</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|输入参数 Schema|
|<el-row justify="space-between"><el-col :span="20">secret_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|安全密钥|
|<el-row justify="space-between"><el-col :span="20">timeout</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|超时时间|
|<el-row justify="space-between"><el-col :span="20">token_url</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|令牌地址|
|<el-row justify="space-between"><el-col :span="20">tool_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工具类型|



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
  "tool_tag" : null,
  "access_key" : null,
  "api_auth_type" : null,
  "api_headers" : null,
  "api_method" : null,
  "api_url" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "input_schema" : null,
  "secret_key" : null,
  "timeout" : null,
  "token_url" : null,
  "tool_type" : null,
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
  "tool_tag" : null,
  "access_key" : null,
  "api_auth_type" : null,
  "api_headers" : null,
  "api_method" : null,
  "api_url" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "input_schema" : null,
  "secret_key" : null,
  "timeout" : null,
  "token_url" : null,
  "tool_type" : null,
}

```

## 获取AI调用工具

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_tools/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|AI调用工具标识|




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
  "tool_tag" : null,
  "access_key" : null,
  "api_auth_type" : null,
  "api_headers" : null,
  "api_method" : null,
  "api_url" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "input_schema" : null,
  "secret_key" : null,
  "timeout" : null,
  "token_url" : null,
  "tool_type" : null,
}

```

## 删除AI调用工具

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_tools/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|AI调用工具标识|





## 更新AI调用工具

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_tools/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|AI调用工具标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|AI调用工具标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI调用工具名称|
|<el-row justify="space-between"><el-col :span="20">api_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|api密钥|
|<el-row justify="space-between"><el-col :span="20">tool_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具标记|
|<el-row justify="space-between"><el-col :span="20">access_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问密钥|
|<el-row justify="space-between"><el-col :span="20">api_auth_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证方式|
|<el-row justify="space-between"><el-col :span="20">api_headers</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|请求头|
|<el-row justify="space-between"><el-col :span="20">api_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|HTTP 方法|
|<el-row justify="space-between"><el-col :span="20">api_url</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|接口地址|
|<el-row justify="space-between"><el-col :span="20">bearer_token</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Bearer令牌|
|<el-row justify="space-between"><el-col :span="20">client_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端ID|
|<el-row justify="space-between"><el-col :span="20">client_secret</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端密钥|
|<el-row justify="space-between"><el-col :span="20">input_schema</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|输入参数 Schema|
|<el-row justify="space-between"><el-col :span="20">secret_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|安全密钥|
|<el-row justify="space-between"><el-col :span="20">timeout</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|超时时间|
|<el-row justify="space-between"><el-col :span="20">token_url</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|令牌地址|
|<el-row justify="space-between"><el-col :span="20">tool_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工具类型|



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
  "tool_tag" : null,
  "access_key" : null,
  "api_auth_type" : null,
  "api_headers" : null,
  "api_method" : null,
  "api_url" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "input_schema" : null,
  "secret_key" : null,
  "timeout" : null,
  "token_url" : null,
  "tool_type" : null,
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
  "tool_tag" : null,
  "access_key" : null,
  "api_auth_type" : null,
  "api_headers" : null,
  "api_method" : null,
  "api_url" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "input_schema" : null,
  "secret_key" : null,
  "timeout" : null,
  "token_url" : null,
  "tool_type" : null,
}

```

## 检查AI调用工具主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_tools/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|AI调用工具标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI调用工具名称|
|<el-row justify="space-between"><el-col :span="20">api_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|api密钥|
|<el-row justify="space-between"><el-col :span="20">tool_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具标记|
|<el-row justify="space-between"><el-col :span="20">access_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问密钥|
|<el-row justify="space-between"><el-col :span="20">api_auth_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证方式|
|<el-row justify="space-between"><el-col :span="20">api_headers</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|请求头|
|<el-row justify="space-between"><el-col :span="20">api_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|HTTP 方法|
|<el-row justify="space-between"><el-col :span="20">api_url</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|接口地址|
|<el-row justify="space-between"><el-col :span="20">bearer_token</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Bearer令牌|
|<el-row justify="space-between"><el-col :span="20">client_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端ID|
|<el-row justify="space-between"><el-col :span="20">client_secret</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端密钥|
|<el-row justify="space-between"><el-col :span="20">input_schema</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|输入参数 Schema|
|<el-row justify="space-between"><el-col :span="20">secret_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|安全密钥|
|<el-row justify="space-between"><el-col :span="20">timeout</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|超时时间|
|<el-row justify="space-between"><el-col :span="20">token_url</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|令牌地址|
|<el-row justify="space-between"><el-col :span="20">tool_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工具类型|



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
  "tool_tag" : null,
  "access_key" : null,
  "api_auth_type" : null,
  "api_headers" : null,
  "api_method" : null,
  "api_url" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "input_schema" : null,
  "secret_key" : null,
  "timeout" : null,
  "token_url" : null,
  "tool_type" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取AI调用工具草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_tools/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|AI调用工具标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI调用工具名称|
|<el-row justify="space-between"><el-col :span="20">api_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|api密钥|
|<el-row justify="space-between"><el-col :span="20">tool_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具标记|
|<el-row justify="space-between"><el-col :span="20">access_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问密钥|
|<el-row justify="space-between"><el-col :span="20">api_auth_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证方式|
|<el-row justify="space-between"><el-col :span="20">api_headers</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|请求头|
|<el-row justify="space-between"><el-col :span="20">api_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|HTTP 方法|
|<el-row justify="space-between"><el-col :span="20">api_url</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|接口地址|
|<el-row justify="space-between"><el-col :span="20">bearer_token</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Bearer令牌|
|<el-row justify="space-between"><el-col :span="20">client_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端ID|
|<el-row justify="space-between"><el-col :span="20">client_secret</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端密钥|
|<el-row justify="space-between"><el-col :span="20">input_schema</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|输入参数 Schema|
|<el-row justify="space-between"><el-col :span="20">secret_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|安全密钥|
|<el-row justify="space-between"><el-col :span="20">timeout</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|超时时间|
|<el-row justify="space-between"><el-col :span="20">token_url</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|令牌地址|
|<el-row justify="space-between"><el-col :span="20">tool_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工具类型|



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
  "tool_tag" : null,
  "access_key" : null,
  "api_auth_type" : null,
  "api_headers" : null,
  "api_method" : null,
  "api_url" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "input_schema" : null,
  "secret_key" : null,
  "timeout" : null,
  "token_url" : null,
  "tool_type" : null,
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
  "tool_tag" : null,
  "access_key" : null,
  "api_auth_type" : null,
  "api_headers" : null,
  "api_method" : null,
  "api_url" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "input_schema" : null,
  "secret_key" : null,
  "timeout" : null,
  "token_url" : null,
  "tool_type" : null,
}

```

## 保存AI调用工具

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_tools/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|AI调用工具标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI调用工具名称|
|<el-row justify="space-between"><el-col :span="20">api_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|api密钥|
|<el-row justify="space-between"><el-col :span="20">tool_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具标记|
|<el-row justify="space-between"><el-col :span="20">access_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问密钥|
|<el-row justify="space-between"><el-col :span="20">api_auth_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证方式|
|<el-row justify="space-between"><el-col :span="20">api_headers</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|请求头|
|<el-row justify="space-between"><el-col :span="20">api_method</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|HTTP 方法|
|<el-row justify="space-between"><el-col :span="20">api_url</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|接口地址|
|<el-row justify="space-between"><el-col :span="20">bearer_token</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Bearer令牌|
|<el-row justify="space-between"><el-col :span="20">client_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端ID|
|<el-row justify="space-between"><el-col :span="20">client_secret</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端密钥|
|<el-row justify="space-between"><el-col :span="20">input_schema</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|输入参数 Schema|
|<el-row justify="space-between"><el-col :span="20">secret_key</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|安全密钥|
|<el-row justify="space-between"><el-col :span="20">timeout</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|超时时间|
|<el-row justify="space-between"><el-col :span="20">token_url</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|令牌地址|
|<el-row justify="space-between"><el-col :span="20">tool_type</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工具类型|



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
  "tool_tag" : null,
  "access_key" : null,
  "api_auth_type" : null,
  "api_headers" : null,
  "api_method" : null,
  "api_url" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "input_schema" : null,
  "secret_key" : null,
  "timeout" : null,
  "token_url" : null,
  "tool_type" : null,
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
  "tool_tag" : null,
  "access_key" : null,
  "api_auth_type" : null,
  "api_headers" : null,
  "api_method" : null,
  "api_url" : null,
  "bearer_token" : null,
  "client_id" : null,
  "client_secret" : null,
  "input_schema" : null,
  "secret_key" : null,
  "timeout" : null,
  "token_url" : null,
  "tool_type" : null,
}

```

## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_tools/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI调用工具标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|AI调用工具名称|



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
    "tool_tag" : null,
    "access_key" : null,
    "api_auth_type" : null,
    "api_headers" : null,
    "api_method" : null,
    "api_url" : null,
    "bearer_token" : null,
    "client_id" : null,
    "client_secret" : null,
    "input_schema" : null,
    "secret_key" : null,
    "timeout" : null,
    "token_url" : null,
    "tool_type" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ai_tools/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_tools/exportdata/{param},/ai_tools/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_tools/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_tools/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_tools/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_tools/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ai_tools/report" type="info" :closable="false" ></el-alert>
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