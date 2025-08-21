# 第三方用户(openuser) :id=openuser
## 创建第三方用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/openusers" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">openuserid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|第三方用户标识|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机|
|<el-row justify="space-between"><el-col :span="20">openusername</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户名称|
|<el-row justify="space-between"><el-col :span="20">open_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户类型|
|<el-row justify="space-between"><el-col :span="20">openusercode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户代码|
|<el-row justify="space-between"><el-col :span="20">isbinding</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否绑定|
|<el-row justify="space-between"><el-col :span="20">depts</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|



##### 请求示例： {docsify-ignore}
```json
{
  "createman" : null,
  "updateman" : null,
  "orgid" : null,
  "userid" : null,
  "openuserid" : null,
  "mobile" : null,
  "openusername" : null,
  "open_type" : null,
  "openusercode" : null,
  "isbinding" : null,
  "depts" : null,
  "createdate" : null,
  "updatedate" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "createman" : null,
  "updateman" : null,
  "orgid" : null,
  "userid" : null,
  "openuserid" : null,
  "mobile" : null,
  "openusername" : null,
  "open_type" : null,
  "openusercode" : null,
  "isbinding" : null,
  "depts" : null,
  "createdate" : null,
  "updatedate" : null,
}

```

## 获取第三方用户

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/openusers/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|第三方用户标识|




##### 响应示例： {docsify-ignore}
```json

{
  "createman" : null,
  "updateman" : null,
  "orgid" : null,
  "userid" : null,
  "openuserid" : null,
  "mobile" : null,
  "openusername" : null,
  "open_type" : null,
  "openusercode" : null,
  "isbinding" : null,
  "depts" : null,
  "createdate" : null,
  "updatedate" : null,
}

```

## 删除第三方用户

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/openusers/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|第三方用户标识|





## 更新第三方用户

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/openusers/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|第三方用户标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">openuserid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|第三方用户标识|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机|
|<el-row justify="space-between"><el-col :span="20">openusername</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户名称|
|<el-row justify="space-between"><el-col :span="20">open_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户类型|
|<el-row justify="space-between"><el-col :span="20">openusercode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户代码|
|<el-row justify="space-between"><el-col :span="20">isbinding</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否绑定|
|<el-row justify="space-between"><el-col :span="20">depts</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|



##### 请求示例： {docsify-ignore}
```json
{
  "createman" : null,
  "updateman" : null,
  "orgid" : null,
  "userid" : null,
  "openuserid" : null,
  "mobile" : null,
  "openusername" : null,
  "open_type" : null,
  "openusercode" : null,
  "isbinding" : null,
  "depts" : null,
  "createdate" : null,
  "updatedate" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "createman" : null,
  "updateman" : null,
  "orgid" : null,
  "userid" : null,
  "openuserid" : null,
  "mobile" : null,
  "openusername" : null,
  "open_type" : null,
  "openusercode" : null,
  "isbinding" : null,
  "depts" : null,
  "createdate" : null,
  "updatedate" : null,
}

```

## 检查第三方用户主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/openusers/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">openuserid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|第三方用户标识|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机|
|<el-row justify="space-between"><el-col :span="20">openusername</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户名称|
|<el-row justify="space-between"><el-col :span="20">open_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户类型|
|<el-row justify="space-between"><el-col :span="20">openusercode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户代码|
|<el-row justify="space-between"><el-col :span="20">isbinding</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否绑定|
|<el-row justify="space-between"><el-col :span="20">depts</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|



##### 请求示例： {docsify-ignore}
```json
{
  "createman" : null,
  "updateman" : null,
  "orgid" : null,
  "userid" : null,
  "openuserid" : null,
  "mobile" : null,
  "openusername" : null,
  "open_type" : null,
  "openusercode" : null,
  "isbinding" : null,
  "depts" : null,
  "createdate" : null,
  "updatedate" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取第三方用户草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/openusers/getdraft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">openuserid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|第三方用户标识|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机|
|<el-row justify="space-between"><el-col :span="20">openusername</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户名称|
|<el-row justify="space-between"><el-col :span="20">open_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户类型|
|<el-row justify="space-between"><el-col :span="20">openusercode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户代码|
|<el-row justify="space-between"><el-col :span="20">isbinding</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否绑定|
|<el-row justify="space-between"><el-col :span="20">depts</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|



##### 请求示例： {docsify-ignore}
```json
{
  "createman" : null,
  "updateman" : null,
  "orgid" : null,
  "userid" : null,
  "openuserid" : null,
  "mobile" : null,
  "openusername" : null,
  "open_type" : null,
  "openusercode" : null,
  "isbinding" : null,
  "depts" : null,
  "createdate" : null,
  "updatedate" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "createman" : null,
  "updateman" : null,
  "orgid" : null,
  "userid" : null,
  "openuserid" : null,
  "mobile" : null,
  "openusername" : null,
  "open_type" : null,
  "openusercode" : null,
  "isbinding" : null,
  "depts" : null,
  "createdate" : null,
  "updatedate" : null,
}

```

## 保存第三方用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/openusers/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">openuserid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|第三方用户标识|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机|
|<el-row justify="space-between"><el-col :span="20">openusername</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户名称|
|<el-row justify="space-between"><el-col :span="20">open_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户类型|
|<el-row justify="space-between"><el-col :span="20">openusercode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户代码|
|<el-row justify="space-between"><el-col :span="20">isbinding</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否绑定|
|<el-row justify="space-between"><el-col :span="20">depts</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|



##### 请求示例： {docsify-ignore}
```json
{
  "createman" : null,
  "updateman" : null,
  "orgid" : null,
  "userid" : null,
  "openuserid" : null,
  "mobile" : null,
  "openusername" : null,
  "open_type" : null,
  "openusercode" : null,
  "isbinding" : null,
  "depts" : null,
  "createdate" : null,
  "updatedate" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "createman" : null,
  "updateman" : null,
  "orgid" : null,
  "userid" : null,
  "openuserid" : null,
  "mobile" : null,
  "openusername" : null,
  "open_type" : null,
  "openusercode" : null,
  "isbinding" : null,
  "depts" : null,
  "createdate" : null,
  "updatedate" : null,
}

```

## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/openusers/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_openuserid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户标识|
|<el-row justify="space-between"><el-col :span="20">n_open_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户类型|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_openuserid_eq" : null,
  "n_open_type_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "createman" : null,
    "updateman" : null,
    "orgid" : null,
    "userid" : null,
    "openuserid" : null,
    "mobile" : null,
    "openusername" : null,
    "open_type" : null,
    "openusercode" : null,
    "isbinding" : null,
    "depts" : null,
    "createdate" : null,
    "updatedate" : null,
  }
]
```

## 企业微信

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/openusers/fetchwxwork" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_openuserid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户标识|
|<el-row justify="space-between"><el-col :span="20">n_open_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|第三方用户类型|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_openuserid_eq" : null,
  "n_open_type_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "createman" : null,
    "updateman" : null,
    "orgid" : null,
    "userid" : null,
    "openuserid" : null,
    "mobile" : null,
    "openusername" : null,
    "open_type" : null,
    "openusercode" : null,
    "isbinding" : null,
    "depts" : null,
    "createdate" : null,
    "updatedate" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/openusers/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/openusers/exportdata/{param},/openusers/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/openusers/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/openusers/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/openusers/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/openusers/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/openusers/report" type="info" :closable="false" ></el-alert>
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