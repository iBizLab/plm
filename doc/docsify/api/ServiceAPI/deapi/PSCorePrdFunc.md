# 核心产品功能(PSCorePrdFunc) :id=PSCorePrdFunc
## 创建核心产品功能

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdfuncs" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">functype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能类型|
|<el-row justify="space-between"><el-col :span="20">settings</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|设置|
|<el-row justify="space-between"><el-col :span="20">vers</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|可用版本|
|<el-row justify="space-between"><el-col :span="20">info</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|详细信息|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品分类|
|<el-row justify="space-between"><el-col :span="20">changelog</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更日志|
|<el-row justify="space-between"><el-col :span="20">avatarurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|图标路径|
|<el-row justify="space-between"><el-col :span="20">currentversion</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本|
|<el-row justify="space-between"><el-col :span="20">fullname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全名称|
|<el-row justify="space-between"><el-col :span="20">fullpath</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全路径|
|<el-row justify="space-between"><el-col :span="20">funcsn</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能编号|
|<el-row justify="space-between"><el-col :span="20">funcstate</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|功能状态|
|<el-row justify="space-between"><el-col :span="20">functag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能标记|
|<el-row justify="space-between"><el-col :span="20">functag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能标记2|
|<el-row justify="space-between"><el-col :span="20">funcurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能描述链接|
|<el-row justify="space-between"><el-col :span="20">httpurltorepo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Http仓库地址|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序值|
|<el-row justify="space-between"><el-col :span="20">pscoreprdfuncid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品功能标识|
|<el-row justify="space-between"><el-col :span="20">pscoreprdfuncname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|应用名称|
|<el-row justify="space-between"><el-col :span="20">pscoreprdid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品|
|<el-row justify="space-between"><el-col :span="20">pscoreprdname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|路径|
|<el-row justify="space-between"><el-col :span="20">settingurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|设置地址|



##### 请求示例： {docsify-ignore}
```json
{
  "functype" : null,
  "settings" : null,
  "vers" : null,
  "info" : null,
  "category" : null,
  "changelog" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "currentversion" : null,
  "fullname" : null,
  "fullpath" : null,
  "funcsn" : null,
  "funcstate" : null,
  "functag" : null,
  "functag2" : null,
  "funcurl" : null,
  "httpurltorepo" : null,
  "memo" : null,
  "ordervalue" : null,
  "pscoreprdfuncid" : null,
  "pscoreprdfuncname" : null,
  "pscoreprdid" : null,
  "pscoreprdname" : null,
  "path" : null,
  "settingurl" : null,
  "updatedate" : null,
  "updateman" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "functype" : null,
  "settings" : null,
  "vers" : null,
  "info" : null,
  "category" : null,
  "changelog" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "currentversion" : null,
  "fullname" : null,
  "fullpath" : null,
  "funcsn" : null,
  "funcstate" : null,
  "functag" : null,
  "functag2" : null,
  "funcurl" : null,
  "httpurltorepo" : null,
  "memo" : null,
  "ordervalue" : null,
  "pscoreprdfuncid" : null,
  "pscoreprdfuncname" : null,
  "pscoreprdid" : null,
  "pscoreprdname" : null,
  "path" : null,
  "settingurl" : null,
  "updatedate" : null,
  "updateman" : null,
}

```

## 获取核心产品功能

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdfuncs/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|核心产品功能标识|




##### 响应示例： {docsify-ignore}
```json

{
  "functype" : null,
  "settings" : null,
  "vers" : null,
  "info" : null,
  "category" : null,
  "changelog" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "currentversion" : null,
  "fullname" : null,
  "fullpath" : null,
  "funcsn" : null,
  "funcstate" : null,
  "functag" : null,
  "functag2" : null,
  "funcurl" : null,
  "httpurltorepo" : null,
  "memo" : null,
  "ordervalue" : null,
  "pscoreprdfuncid" : null,
  "pscoreprdfuncname" : null,
  "pscoreprdid" : null,
  "pscoreprdname" : null,
  "path" : null,
  "settingurl" : null,
  "updatedate" : null,
  "updateman" : null,
}

```

## 删除核心产品功能

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdfuncs/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|核心产品功能标识|





## 更新核心产品功能

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdfuncs/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|核心产品功能标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">functype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能类型|
|<el-row justify="space-between"><el-col :span="20">settings</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|设置|
|<el-row justify="space-between"><el-col :span="20">vers</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|可用版本|
|<el-row justify="space-between"><el-col :span="20">info</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|详细信息|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品分类|
|<el-row justify="space-between"><el-col :span="20">changelog</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更日志|
|<el-row justify="space-between"><el-col :span="20">avatarurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|图标路径|
|<el-row justify="space-between"><el-col :span="20">currentversion</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本|
|<el-row justify="space-between"><el-col :span="20">fullname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全名称|
|<el-row justify="space-between"><el-col :span="20">fullpath</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全路径|
|<el-row justify="space-between"><el-col :span="20">funcsn</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能编号|
|<el-row justify="space-between"><el-col :span="20">funcstate</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|功能状态|
|<el-row justify="space-between"><el-col :span="20">functag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能标记|
|<el-row justify="space-between"><el-col :span="20">functag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能标记2|
|<el-row justify="space-between"><el-col :span="20">funcurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能描述链接|
|<el-row justify="space-between"><el-col :span="20">httpurltorepo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Http仓库地址|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序值|
|<el-row justify="space-between"><el-col :span="20">pscoreprdfuncid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品功能标识|
|<el-row justify="space-between"><el-col :span="20">pscoreprdfuncname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|应用名称|
|<el-row justify="space-between"><el-col :span="20">pscoreprdid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品|
|<el-row justify="space-between"><el-col :span="20">pscoreprdname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|路径|
|<el-row justify="space-between"><el-col :span="20">settingurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|设置地址|



##### 请求示例： {docsify-ignore}
```json
{
  "functype" : null,
  "settings" : null,
  "vers" : null,
  "info" : null,
  "category" : null,
  "changelog" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "currentversion" : null,
  "fullname" : null,
  "fullpath" : null,
  "funcsn" : null,
  "funcstate" : null,
  "functag" : null,
  "functag2" : null,
  "funcurl" : null,
  "httpurltorepo" : null,
  "memo" : null,
  "ordervalue" : null,
  "pscoreprdfuncid" : null,
  "pscoreprdfuncname" : null,
  "pscoreprdid" : null,
  "pscoreprdname" : null,
  "path" : null,
  "settingurl" : null,
  "updatedate" : null,
  "updateman" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "functype" : null,
  "settings" : null,
  "vers" : null,
  "info" : null,
  "category" : null,
  "changelog" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "currentversion" : null,
  "fullname" : null,
  "fullpath" : null,
  "funcsn" : null,
  "funcstate" : null,
  "functag" : null,
  "functag2" : null,
  "funcurl" : null,
  "httpurltorepo" : null,
  "memo" : null,
  "ordervalue" : null,
  "pscoreprdfuncid" : null,
  "pscoreprdfuncname" : null,
  "pscoreprdid" : null,
  "pscoreprdname" : null,
  "path" : null,
  "settingurl" : null,
  "updatedate" : null,
  "updateman" : null,
}

```

## 检查核心产品功能主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdfuncs/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">functype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能类型|
|<el-row justify="space-between"><el-col :span="20">settings</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|设置|
|<el-row justify="space-between"><el-col :span="20">vers</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|可用版本|
|<el-row justify="space-between"><el-col :span="20">info</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|详细信息|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品分类|
|<el-row justify="space-between"><el-col :span="20">changelog</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更日志|
|<el-row justify="space-between"><el-col :span="20">avatarurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|图标路径|
|<el-row justify="space-between"><el-col :span="20">currentversion</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本|
|<el-row justify="space-between"><el-col :span="20">fullname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全名称|
|<el-row justify="space-between"><el-col :span="20">fullpath</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全路径|
|<el-row justify="space-between"><el-col :span="20">funcsn</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能编号|
|<el-row justify="space-between"><el-col :span="20">funcstate</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|功能状态|
|<el-row justify="space-between"><el-col :span="20">functag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能标记|
|<el-row justify="space-between"><el-col :span="20">functag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能标记2|
|<el-row justify="space-between"><el-col :span="20">funcurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能描述链接|
|<el-row justify="space-between"><el-col :span="20">httpurltorepo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Http仓库地址|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序值|
|<el-row justify="space-between"><el-col :span="20">pscoreprdfuncid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品功能标识|
|<el-row justify="space-between"><el-col :span="20">pscoreprdfuncname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|应用名称|
|<el-row justify="space-between"><el-col :span="20">pscoreprdid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品|
|<el-row justify="space-between"><el-col :span="20">pscoreprdname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|路径|
|<el-row justify="space-between"><el-col :span="20">settingurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|设置地址|



##### 请求示例： {docsify-ignore}
```json
{
  "functype" : null,
  "settings" : null,
  "vers" : null,
  "info" : null,
  "category" : null,
  "changelog" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "currentversion" : null,
  "fullname" : null,
  "fullpath" : null,
  "funcsn" : null,
  "funcstate" : null,
  "functag" : null,
  "functag2" : null,
  "funcurl" : null,
  "httpurltorepo" : null,
  "memo" : null,
  "ordervalue" : null,
  "pscoreprdfuncid" : null,
  "pscoreprdfuncname" : null,
  "pscoreprdid" : null,
  "pscoreprdname" : null,
  "path" : null,
  "settingurl" : null,
  "updatedate" : null,
  "updateman" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取核心产品功能草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdfuncs/getdraft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">functype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能类型|
|<el-row justify="space-between"><el-col :span="20">settings</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|设置|
|<el-row justify="space-between"><el-col :span="20">vers</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|可用版本|
|<el-row justify="space-between"><el-col :span="20">info</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|详细信息|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品分类|
|<el-row justify="space-between"><el-col :span="20">changelog</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更日志|
|<el-row justify="space-between"><el-col :span="20">avatarurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|图标路径|
|<el-row justify="space-between"><el-col :span="20">currentversion</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本|
|<el-row justify="space-between"><el-col :span="20">fullname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全名称|
|<el-row justify="space-between"><el-col :span="20">fullpath</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全路径|
|<el-row justify="space-between"><el-col :span="20">funcsn</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能编号|
|<el-row justify="space-between"><el-col :span="20">funcstate</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|功能状态|
|<el-row justify="space-between"><el-col :span="20">functag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能标记|
|<el-row justify="space-between"><el-col :span="20">functag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能标记2|
|<el-row justify="space-between"><el-col :span="20">funcurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能描述链接|
|<el-row justify="space-between"><el-col :span="20">httpurltorepo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Http仓库地址|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序值|
|<el-row justify="space-between"><el-col :span="20">pscoreprdfuncid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品功能标识|
|<el-row justify="space-between"><el-col :span="20">pscoreprdfuncname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|应用名称|
|<el-row justify="space-between"><el-col :span="20">pscoreprdid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品|
|<el-row justify="space-between"><el-col :span="20">pscoreprdname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|路径|
|<el-row justify="space-between"><el-col :span="20">settingurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|设置地址|



##### 请求示例： {docsify-ignore}
```json
{
  "functype" : null,
  "settings" : null,
  "vers" : null,
  "info" : null,
  "category" : null,
  "changelog" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "currentversion" : null,
  "fullname" : null,
  "fullpath" : null,
  "funcsn" : null,
  "funcstate" : null,
  "functag" : null,
  "functag2" : null,
  "funcurl" : null,
  "httpurltorepo" : null,
  "memo" : null,
  "ordervalue" : null,
  "pscoreprdfuncid" : null,
  "pscoreprdfuncname" : null,
  "pscoreprdid" : null,
  "pscoreprdname" : null,
  "path" : null,
  "settingurl" : null,
  "updatedate" : null,
  "updateman" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "functype" : null,
  "settings" : null,
  "vers" : null,
  "info" : null,
  "category" : null,
  "changelog" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "currentversion" : null,
  "fullname" : null,
  "fullpath" : null,
  "funcsn" : null,
  "funcstate" : null,
  "functag" : null,
  "functag2" : null,
  "funcurl" : null,
  "httpurltorepo" : null,
  "memo" : null,
  "ordervalue" : null,
  "pscoreprdfuncid" : null,
  "pscoreprdfuncname" : null,
  "pscoreprdid" : null,
  "pscoreprdname" : null,
  "path" : null,
  "settingurl" : null,
  "updatedate" : null,
  "updateman" : null,
}

```

## 保存核心产品功能

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdfuncs/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">functype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能类型|
|<el-row justify="space-between"><el-col :span="20">settings</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|设置|
|<el-row justify="space-between"><el-col :span="20">vers</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|可用版本|
|<el-row justify="space-between"><el-col :span="20">info</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|详细信息|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品分类|
|<el-row justify="space-between"><el-col :span="20">changelog</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更日志|
|<el-row justify="space-between"><el-col :span="20">avatarurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|图标路径|
|<el-row justify="space-between"><el-col :span="20">currentversion</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本|
|<el-row justify="space-between"><el-col :span="20">fullname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全名称|
|<el-row justify="space-between"><el-col :span="20">fullpath</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全路径|
|<el-row justify="space-between"><el-col :span="20">funcsn</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能编号|
|<el-row justify="space-between"><el-col :span="20">funcstate</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|功能状态|
|<el-row justify="space-between"><el-col :span="20">functag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能标记|
|<el-row justify="space-between"><el-col :span="20">functag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能标记2|
|<el-row justify="space-between"><el-col :span="20">funcurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能描述链接|
|<el-row justify="space-between"><el-col :span="20">httpurltorepo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Http仓库地址|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序值|
|<el-row justify="space-between"><el-col :span="20">pscoreprdfuncid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品功能标识|
|<el-row justify="space-between"><el-col :span="20">pscoreprdfuncname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|应用名称|
|<el-row justify="space-between"><el-col :span="20">pscoreprdid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品|
|<el-row justify="space-between"><el-col :span="20">pscoreprdname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|路径|
|<el-row justify="space-between"><el-col :span="20">settingurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|设置地址|



##### 请求示例： {docsify-ignore}
```json
{
  "functype" : null,
  "settings" : null,
  "vers" : null,
  "info" : null,
  "category" : null,
  "changelog" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "currentversion" : null,
  "fullname" : null,
  "fullpath" : null,
  "funcsn" : null,
  "funcstate" : null,
  "functag" : null,
  "functag2" : null,
  "funcurl" : null,
  "httpurltorepo" : null,
  "memo" : null,
  "ordervalue" : null,
  "pscoreprdfuncid" : null,
  "pscoreprdfuncname" : null,
  "pscoreprdid" : null,
  "pscoreprdname" : null,
  "path" : null,
  "settingurl" : null,
  "updatedate" : null,
  "updateman" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "functype" : null,
  "settings" : null,
  "vers" : null,
  "info" : null,
  "category" : null,
  "changelog" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "currentversion" : null,
  "fullname" : null,
  "fullpath" : null,
  "funcsn" : null,
  "funcstate" : null,
  "functag" : null,
  "functag2" : null,
  "funcurl" : null,
  "httpurltorepo" : null,
  "memo" : null,
  "ordervalue" : null,
  "pscoreprdfuncid" : null,
  "pscoreprdfuncname" : null,
  "pscoreprdid" : null,
  "pscoreprdname" : null,
  "path" : null,
  "settingurl" : null,
  "updatedate" : null,
  "updateman" : null,
}

```

## 安装

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdfuncs/{key}/install" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|核心产品功能标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">functype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能类型|
|<el-row justify="space-between"><el-col :span="20">settings</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|设置|
|<el-row justify="space-between"><el-col :span="20">vers</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|可用版本|
|<el-row justify="space-between"><el-col :span="20">info</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|详细信息|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品分类|
|<el-row justify="space-between"><el-col :span="20">changelog</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更日志|
|<el-row justify="space-between"><el-col :span="20">avatarurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|图标路径|
|<el-row justify="space-between"><el-col :span="20">currentversion</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本|
|<el-row justify="space-between"><el-col :span="20">fullname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全名称|
|<el-row justify="space-between"><el-col :span="20">fullpath</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全路径|
|<el-row justify="space-between"><el-col :span="20">funcsn</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能编号|
|<el-row justify="space-between"><el-col :span="20">funcstate</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|功能状态|
|<el-row justify="space-between"><el-col :span="20">functag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能标记|
|<el-row justify="space-between"><el-col :span="20">functag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能标记2|
|<el-row justify="space-between"><el-col :span="20">funcurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能描述链接|
|<el-row justify="space-between"><el-col :span="20">httpurltorepo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Http仓库地址|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序值|
|<el-row justify="space-between"><el-col :span="20">pscoreprdfuncid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品功能标识|
|<el-row justify="space-between"><el-col :span="20">pscoreprdfuncname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|应用名称|
|<el-row justify="space-between"><el-col :span="20">pscoreprdid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品|
|<el-row justify="space-between"><el-col :span="20">pscoreprdname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|路径|
|<el-row justify="space-between"><el-col :span="20">settingurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|设置地址|



##### 请求示例： {docsify-ignore}
```json
{
  "functype" : null,
  "settings" : null,
  "vers" : null,
  "info" : null,
  "category" : null,
  "changelog" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "currentversion" : null,
  "fullname" : null,
  "fullpath" : null,
  "funcsn" : null,
  "funcstate" : null,
  "functag" : null,
  "functag2" : null,
  "funcurl" : null,
  "httpurltorepo" : null,
  "memo" : null,
  "ordervalue" : null,
  "pscoreprdfuncid" : null,
  "pscoreprdfuncname" : null,
  "pscoreprdid" : null,
  "pscoreprdname" : null,
  "path" : null,
  "settingurl" : null,
  "updatedate" : null,
  "updateman" : null,
}
```



## 卸载

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdfuncs/{key}/uninstall" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|核心产品功能标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">functype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能类型|
|<el-row justify="space-between"><el-col :span="20">settings</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|设置|
|<el-row justify="space-between"><el-col :span="20">vers</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|可用版本|
|<el-row justify="space-between"><el-col :span="20">info</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|详细信息|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品分类|
|<el-row justify="space-between"><el-col :span="20">changelog</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|变更日志|
|<el-row justify="space-between"><el-col :span="20">avatarurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|图标路径|
|<el-row justify="space-between"><el-col :span="20">currentversion</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|当前版本|
|<el-row justify="space-between"><el-col :span="20">fullname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全名称|
|<el-row justify="space-between"><el-col :span="20">fullpath</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全路径|
|<el-row justify="space-between"><el-col :span="20">funcsn</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能编号|
|<el-row justify="space-between"><el-col :span="20">funcstate</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|功能状态|
|<el-row justify="space-between"><el-col :span="20">functag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能标记|
|<el-row justify="space-between"><el-col :span="20">functag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能标记2|
|<el-row justify="space-between"><el-col :span="20">funcurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能描述链接|
|<el-row justify="space-between"><el-col :span="20">httpurltorepo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|Http仓库地址|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序值|
|<el-row justify="space-between"><el-col :span="20">pscoreprdfuncid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品功能标识|
|<el-row justify="space-between"><el-col :span="20">pscoreprdfuncname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|应用名称|
|<el-row justify="space-between"><el-col :span="20">pscoreprdid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品|
|<el-row justify="space-between"><el-col :span="20">pscoreprdname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|路径|
|<el-row justify="space-between"><el-col :span="20">settingurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|设置地址|



##### 请求示例： {docsify-ignore}
```json
{
  "functype" : null,
  "settings" : null,
  "vers" : null,
  "info" : null,
  "category" : null,
  "changelog" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "currentversion" : null,
  "fullname" : null,
  "fullpath" : null,
  "funcsn" : null,
  "funcstate" : null,
  "functag" : null,
  "functag2" : null,
  "funcurl" : null,
  "httpurltorepo" : null,
  "memo" : null,
  "ordervalue" : null,
  "pscoreprdfuncid" : null,
  "pscoreprdfuncname" : null,
  "pscoreprdid" : null,
  "pscoreprdname" : null,
  "path" : null,
  "settingurl" : null,
  "updatedate" : null,
  "updateman" : null,
}
```



## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdfuncs/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_funcstate_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能状态|
|<el-row justify="space-between"><el-col :span="20">n_funcstate_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|功能状态|
|<el-row justify="space-between"><el-col :span="20">n_pscoreprdfuncid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品功能标识|
|<el-row justify="space-between"><el-col :span="20">n_pscoreprdfuncname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|应用名称|
|<el-row justify="space-between"><el-col :span="20">n_pscoreprdid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_funcstate_eq" : null,
  "n_funcstate_noteq" : null,
  "n_pscoreprdfuncid_eq" : null,
  "n_pscoreprdfuncname_like" : null,
  "n_pscoreprdid_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "functype" : null,
    "settings" : null,
    "vers" : null,
    "info" : null,
    "category" : null,
    "changelog" : null,
    "avatarurl" : null,
    "createdate" : null,
    "createman" : null,
    "currentversion" : null,
    "fullname" : null,
    "fullpath" : null,
    "funcsn" : null,
    "funcstate" : null,
    "functag" : null,
    "functag2" : null,
    "funcurl" : null,
    "httpurltorepo" : null,
    "memo" : null,
    "ordervalue" : null,
    "pscoreprdfuncid" : null,
    "pscoreprdfuncname" : null,
    "pscoreprdid" : null,
    "pscoreprdname" : null,
    "path" : null,
    "settingurl" : null,
    "updatedate" : null,
    "updateman" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdfuncs/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pscoreprdfuncs/exportdata/{param},/pscoreprdfuncs/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pscoreprdfuncs/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pscoreprdfuncs/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pscoreprdfuncs/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pscoreprdfuncs/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pscoreprdfuncs/report" type="info" :closable="false" ></el-alert>
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