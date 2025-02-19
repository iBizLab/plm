# 认证日志(auth_log_admin) :id=auth_log_admin
## 创建认证日志

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/auth_log_admins" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">logid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局标识|
|<el-row justify="space-between"><el-col :span="20">username</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|
|<el-row justify="space-between"><el-col :span="20">personname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户名称|
|<el-row justify="space-between"><el-col :span="20">domain</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|域|
|<el-row justify="space-between"><el-col :span="20">ipaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|IP地址|
|<el-row justify="space-between"><el-col :span="20">macaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|MAC地址|
|<el-row justify="space-between"><el-col :span="20">useragent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端|
|<el-row justify="space-between"><el-col :span="20">authagent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证方式|
|<el-row justify="space-between"><el-col :span="20">authcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证结果|
|<el-row justify="space-between"><el-col :span="20">active_members</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|活跃成员数|



##### 请求示例： {docsify-ignore}
```json
{
  "logid" : null,
  "userid" : null,
  "username" : null,
  "personname" : null,
  "domain" : null,
  "authtime" : null,
  "ipaddr" : null,
  "macaddr" : null,
  "useragent" : null,
  "authagent" : null,
  "authcode" : null,
  "active_members" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "logid" : null,
  "userid" : null,
  "username" : null,
  "personname" : null,
  "domain" : null,
  "authtime" : null,
  "ipaddr" : null,
  "macaddr" : null,
  "useragent" : null,
  "authagent" : null,
  "authcode" : null,
  "active_members" : null,
}

```

## 获取认证日志

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/auth_log_admins/{key}" type="info" :closable="false" ></el-alert>
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
  "logid" : null,
  "userid" : null,
  "username" : null,
  "personname" : null,
  "domain" : null,
  "authtime" : null,
  "ipaddr" : null,
  "macaddr" : null,
  "useragent" : null,
  "authagent" : null,
  "authcode" : null,
  "active_members" : null,
}

```

## 删除认证日志

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/auth_log_admins/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|





## 更新认证日志

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/auth_log_admins/{key}" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">logid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局标识|
|<el-row justify="space-between"><el-col :span="20">username</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|
|<el-row justify="space-between"><el-col :span="20">personname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户名称|
|<el-row justify="space-between"><el-col :span="20">domain</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|域|
|<el-row justify="space-between"><el-col :span="20">ipaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|IP地址|
|<el-row justify="space-between"><el-col :span="20">macaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|MAC地址|
|<el-row justify="space-between"><el-col :span="20">useragent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端|
|<el-row justify="space-between"><el-col :span="20">authagent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证方式|
|<el-row justify="space-between"><el-col :span="20">authcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证结果|
|<el-row justify="space-between"><el-col :span="20">active_members</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|活跃成员数|



##### 请求示例： {docsify-ignore}
```json
{
  "logid" : null,
  "userid" : null,
  "username" : null,
  "personname" : null,
  "domain" : null,
  "authtime" : null,
  "ipaddr" : null,
  "macaddr" : null,
  "useragent" : null,
  "authagent" : null,
  "authcode" : null,
  "active_members" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "logid" : null,
  "userid" : null,
  "username" : null,
  "personname" : null,
  "domain" : null,
  "authtime" : null,
  "ipaddr" : null,
  "macaddr" : null,
  "useragent" : null,
  "authagent" : null,
  "authcode" : null,
  "active_members" : null,
}

```

## 检查认证日志主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/auth_log_admins/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">logid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局标识|
|<el-row justify="space-between"><el-col :span="20">username</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|
|<el-row justify="space-between"><el-col :span="20">personname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户名称|
|<el-row justify="space-between"><el-col :span="20">domain</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|域|
|<el-row justify="space-between"><el-col :span="20">ipaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|IP地址|
|<el-row justify="space-between"><el-col :span="20">macaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|MAC地址|
|<el-row justify="space-between"><el-col :span="20">useragent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端|
|<el-row justify="space-between"><el-col :span="20">authagent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证方式|
|<el-row justify="space-between"><el-col :span="20">authcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证结果|
|<el-row justify="space-between"><el-col :span="20">active_members</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|活跃成员数|



##### 请求示例： {docsify-ignore}
```json
{
  "logid" : null,
  "userid" : null,
  "username" : null,
  "personname" : null,
  "domain" : null,
  "authtime" : null,
  "ipaddr" : null,
  "macaddr" : null,
  "useragent" : null,
  "authagent" : null,
  "authcode" : null,
  "active_members" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取认证日志草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/auth_log_admins/getdraft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">logid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局标识|
|<el-row justify="space-between"><el-col :span="20">username</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|
|<el-row justify="space-between"><el-col :span="20">personname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户名称|
|<el-row justify="space-between"><el-col :span="20">domain</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|域|
|<el-row justify="space-between"><el-col :span="20">ipaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|IP地址|
|<el-row justify="space-between"><el-col :span="20">macaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|MAC地址|
|<el-row justify="space-between"><el-col :span="20">useragent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端|
|<el-row justify="space-between"><el-col :span="20">authagent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证方式|
|<el-row justify="space-between"><el-col :span="20">authcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证结果|
|<el-row justify="space-between"><el-col :span="20">active_members</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|活跃成员数|



##### 请求示例： {docsify-ignore}
```json
{
  "logid" : null,
  "userid" : null,
  "username" : null,
  "personname" : null,
  "domain" : null,
  "authtime" : null,
  "ipaddr" : null,
  "macaddr" : null,
  "useragent" : null,
  "authagent" : null,
  "authcode" : null,
  "active_members" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "logid" : null,
  "userid" : null,
  "username" : null,
  "personname" : null,
  "domain" : null,
  "authtime" : null,
  "ipaddr" : null,
  "macaddr" : null,
  "useragent" : null,
  "authagent" : null,
  "authcode" : null,
  "active_members" : null,
}

```

## 保存认证日志

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/auth_log_admins/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">logid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局标识|
|<el-row justify="space-between"><el-col :span="20">username</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|
|<el-row justify="space-between"><el-col :span="20">personname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户名称|
|<el-row justify="space-between"><el-col :span="20">domain</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|域|
|<el-row justify="space-between"><el-col :span="20">ipaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|IP地址|
|<el-row justify="space-between"><el-col :span="20">macaddr</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|MAC地址|
|<el-row justify="space-between"><el-col :span="20">useragent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户端|
|<el-row justify="space-between"><el-col :span="20">authagent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证方式|
|<el-row justify="space-between"><el-col :span="20">authcode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证结果|
|<el-row justify="space-between"><el-col :span="20">active_members</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|活跃成员数|



##### 请求示例： {docsify-ignore}
```json
{
  "logid" : null,
  "userid" : null,
  "username" : null,
  "personname" : null,
  "domain" : null,
  "authtime" : null,
  "ipaddr" : null,
  "macaddr" : null,
  "useragent" : null,
  "authagent" : null,
  "authcode" : null,
  "active_members" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "logid" : null,
  "userid" : null,
  "username" : null,
  "personname" : null,
  "domain" : null,
  "authtime" : null,
  "ipaddr" : null,
  "macaddr" : null,
  "useragent" : null,
  "authagent" : null,
  "authcode" : null,
  "active_members" : null,
}

```

## 当前用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/auth_log_admins/fetchcur_user" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_authcode_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证结果|
|<el-row justify="space-between"><el-col :span="20">n_logid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_username_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_authcode_eq" : null,
  "n_logid_eq" : null,
  "n_username_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "logid" : null,
    "userid" : null,
    "username" : null,
    "personname" : null,
    "domain" : null,
    "authtime" : null,
    "ipaddr" : null,
    "macaddr" : null,
    "useragent" : null,
    "authagent" : null,
    "authcode" : null,
    "active_members" : null,
  }
]
```

## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/auth_log_admins/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_authcode_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证结果|
|<el-row justify="space-between"><el-col :span="20">n_logid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_username_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_authcode_eq" : null,
  "n_logid_eq" : null,
  "n_username_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "logid" : null,
    "userid" : null,
    "username" : null,
    "personname" : null,
    "domain" : null,
    "authtime" : null,
    "ipaddr" : null,
    "macaddr" : null,
    "useragent" : null,
    "authagent" : null,
    "authcode" : null,
    "active_members" : null,
  }
]
```

## 排重用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/auth_log_admins/fetchdistinct_userid" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_authcode_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证结果|
|<el-row justify="space-between"><el-col :span="20">n_logid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_username_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_authcode_eq" : null,
  "n_logid_eq" : null,
  "n_username_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "logid" : null,
    "userid" : null,
    "username" : null,
    "personname" : null,
    "domain" : null,
    "authtime" : null,
    "ipaddr" : null,
    "macaddr" : null,
    "useragent" : null,
    "authagent" : null,
    "authcode" : null,
    "active_members" : null,
  }
]
```

## 日期分组集合

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/auth_log_admins/fetchgroup_by_data" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_authcode_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|认证结果|
|<el-row justify="space-between"><el-col :span="20">n_logid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_username_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户全局名|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_authcode_eq" : null,
  "n_logid_eq" : null,
  "n_username_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "logid" : null,
    "userid" : null,
    "username" : null,
    "personname" : null,
    "domain" : null,
    "authtime" : null,
    "ipaddr" : null,
    "macaddr" : null,
    "useragent" : null,
    "authagent" : null,
    "authcode" : null,
    "active_members" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/auth_log_admins/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/auth_log_admins/exportdata/{param},/auth_log_admins/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/auth_log_admins/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/auth_log_admins/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/auth_log_admins/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/auth_log_admins/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/auth_log_admins/report" type="info" :closable="false" ></el-alert>
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