# 核心产品分类(PSCorePrdCat) :id=PSCorePrdCat
## 创建核心产品分类

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdcats" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">ppscoreprdcatid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上级分类|
|<el-row justify="space-between"><el-col :span="20">avatarurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|图标路径|
|<el-row justify="space-between"><el-col :span="20">fullname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全名称|
|<el-row justify="space-between"><el-col :span="20">fullpath</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全路径|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ppscoreprdcatname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上级分类|
|<el-row justify="space-between"><el-col :span="20">pscoreprdcatid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品分类标识|
|<el-row justify="space-between"><el-col :span="20">pscoreprdcatname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品分类名称|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|路径|



##### 请求示例： {docsify-ignore}
```json
{
  "ppscoreprdcatid" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "fullname" : null,
  "fullpath" : null,
  "memo" : null,
  "ppscoreprdcatname" : null,
  "pscoreprdcatid" : null,
  "pscoreprdcatname" : null,
  "path" : null,
  "updatedate" : null,
  "updateman" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "ppscoreprdcatid" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "fullname" : null,
  "fullpath" : null,
  "memo" : null,
  "ppscoreprdcatname" : null,
  "pscoreprdcatid" : null,
  "pscoreprdcatname" : null,
  "path" : null,
  "updatedate" : null,
  "updateman" : null,
}

```

## 获取核心产品分类

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdcats/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|核心产品分类标识|




##### 响应示例： {docsify-ignore}
```json

{
  "ppscoreprdcatid" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "fullname" : null,
  "fullpath" : null,
  "memo" : null,
  "ppscoreprdcatname" : null,
  "pscoreprdcatid" : null,
  "pscoreprdcatname" : null,
  "path" : null,
  "updatedate" : null,
  "updateman" : null,
}

```

## 删除核心产品分类

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdcats/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|核心产品分类标识|





## 更新核心产品分类

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdcats/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|核心产品分类标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">ppscoreprdcatid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上级分类|
|<el-row justify="space-between"><el-col :span="20">avatarurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|图标路径|
|<el-row justify="space-between"><el-col :span="20">fullname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全名称|
|<el-row justify="space-between"><el-col :span="20">fullpath</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全路径|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ppscoreprdcatname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上级分类|
|<el-row justify="space-between"><el-col :span="20">pscoreprdcatid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品分类标识|
|<el-row justify="space-between"><el-col :span="20">pscoreprdcatname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品分类名称|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|路径|



##### 请求示例： {docsify-ignore}
```json
{
  "ppscoreprdcatid" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "fullname" : null,
  "fullpath" : null,
  "memo" : null,
  "ppscoreprdcatname" : null,
  "pscoreprdcatid" : null,
  "pscoreprdcatname" : null,
  "path" : null,
  "updatedate" : null,
  "updateman" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "ppscoreprdcatid" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "fullname" : null,
  "fullpath" : null,
  "memo" : null,
  "ppscoreprdcatname" : null,
  "pscoreprdcatid" : null,
  "pscoreprdcatname" : null,
  "path" : null,
  "updatedate" : null,
  "updateman" : null,
}

```

## 检查核心产品分类主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdcats/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">ppscoreprdcatid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上级分类|
|<el-row justify="space-between"><el-col :span="20">avatarurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|图标路径|
|<el-row justify="space-between"><el-col :span="20">fullname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全名称|
|<el-row justify="space-between"><el-col :span="20">fullpath</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全路径|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ppscoreprdcatname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上级分类|
|<el-row justify="space-between"><el-col :span="20">pscoreprdcatid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品分类标识|
|<el-row justify="space-between"><el-col :span="20">pscoreprdcatname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品分类名称|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|路径|



##### 请求示例： {docsify-ignore}
```json
{
  "ppscoreprdcatid" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "fullname" : null,
  "fullpath" : null,
  "memo" : null,
  "ppscoreprdcatname" : null,
  "pscoreprdcatid" : null,
  "pscoreprdcatname" : null,
  "path" : null,
  "updatedate" : null,
  "updateman" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取核心产品分类草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdcats/getdraft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">ppscoreprdcatid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上级分类|
|<el-row justify="space-between"><el-col :span="20">avatarurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|图标路径|
|<el-row justify="space-between"><el-col :span="20">fullname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全名称|
|<el-row justify="space-between"><el-col :span="20">fullpath</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全路径|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ppscoreprdcatname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上级分类|
|<el-row justify="space-between"><el-col :span="20">pscoreprdcatid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品分类标识|
|<el-row justify="space-between"><el-col :span="20">pscoreprdcatname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品分类名称|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|路径|



##### 请求示例： {docsify-ignore}
```json
{
  "ppscoreprdcatid" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "fullname" : null,
  "fullpath" : null,
  "memo" : null,
  "ppscoreprdcatname" : null,
  "pscoreprdcatid" : null,
  "pscoreprdcatname" : null,
  "path" : null,
  "updatedate" : null,
  "updateman" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "ppscoreprdcatid" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "fullname" : null,
  "fullpath" : null,
  "memo" : null,
  "ppscoreprdcatname" : null,
  "pscoreprdcatid" : null,
  "pscoreprdcatname" : null,
  "path" : null,
  "updatedate" : null,
  "updateman" : null,
}

```

## 保存核心产品分类

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pscoreprdcats/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">ppscoreprdcatid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上级分类|
|<el-row justify="space-between"><el-col :span="20">avatarurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|图标路径|
|<el-row justify="space-between"><el-col :span="20">fullname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全名称|
|<el-row justify="space-between"><el-col :span="20">fullpath</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|完全路径|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ppscoreprdcatname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上级分类|
|<el-row justify="space-between"><el-col :span="20">pscoreprdcatid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|核心产品分类标识|
|<el-row justify="space-between"><el-col :span="20">pscoreprdcatname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品分类名称|
|<el-row justify="space-between"><el-col :span="20">path</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|路径|



##### 请求示例： {docsify-ignore}
```json
{
  "ppscoreprdcatid" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "fullname" : null,
  "fullpath" : null,
  "memo" : null,
  "ppscoreprdcatname" : null,
  "pscoreprdcatid" : null,
  "pscoreprdcatname" : null,
  "path" : null,
  "updatedate" : null,
  "updateman" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "ppscoreprdcatid" : null,
  "avatarurl" : null,
  "createdate" : null,
  "createman" : null,
  "fullname" : null,
  "fullpath" : null,
  "memo" : null,
  "ppscoreprdcatname" : null,
  "pscoreprdcatid" : null,
  "pscoreprdcatname" : null,
  "path" : null,
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
<el-alert title="/pscoreprdcats/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_ppscoreprdcatid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上级分类|
|<el-row justify="space-between"><el-col :span="20">n_ppscoreprdcatid_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上级分类|
|<el-row justify="space-between"><el-col :span="20">n_ppscoreprdcatid_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上级分类|
|<el-row justify="space-between"><el-col :span="20">n_pscoreprdcatid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品分类标识|
|<el-row justify="space-between"><el-col :span="20">n_pscoreprdcatname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|核心产品分类名称|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_ppscoreprdcatid_eq" : null,
  "n_ppscoreprdcatid_isnotnull" : null,
  "n_ppscoreprdcatid_isnull" : null,
  "n_pscoreprdcatid_eq" : null,
  "n_pscoreprdcatname_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "ppscoreprdcatid" : null,
    "avatarurl" : null,
    "createdate" : null,
    "createman" : null,
    "fullname" : null,
    "fullpath" : null,
    "memo" : null,
    "ppscoreprdcatname" : null,
    "pscoreprdcatid" : null,
    "pscoreprdcatname" : null,
    "path" : null,
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
<el-alert title="/pscoreprdcats/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pscoreprdcats/exportdata/{param},/pscoreprdcats/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pscoreprdcats/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pscoreprdcats/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pscoreprdcats/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pscoreprdcats/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pscoreprdcats/report" type="info" :closable="false" ></el-alert>
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