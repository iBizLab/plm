# 智能报表立方体(PSSysBICube) :id=PSSysBICube
## 创建智能报表立方体

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubes" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">bicubetag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体标记|
|<el-row justify="space-between"><el-col :span="20">bicubetag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体标记2|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体实体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体名称|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表体系|
|<el-row justify="space-between"><el-col :span="20">pssysbischemename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表体系|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "bicubetag" : null,
  "bicubetag2" : null,
  "codename" : null,
  "memo" : null,
  "psdeid" : null,
  "psdename" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "pssysbischemename" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "bicubetag" : null,
  "bicubetag2" : null,
  "codename" : null,
  "memo" : null,
  "psdeid" : null,
  "psdename" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "pssysbischemename" : null,
  "validflag" : null,
}

```

## 获取智能报表立方体

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubes/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|智能报表立方体标识|




##### 响应示例： {docsify-ignore}
```json

{
  "bicubetag" : null,
  "bicubetag2" : null,
  "codename" : null,
  "memo" : null,
  "psdeid" : null,
  "psdename" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "pssysbischemename" : null,
  "validflag" : null,
}

```

## 删除智能报表立方体

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubes/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|智能报表立方体标识|





## 更新智能报表立方体

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubes/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|智能报表立方体标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">bicubetag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体标记|
|<el-row justify="space-between"><el-col :span="20">bicubetag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体标记2|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体实体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体名称|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表体系|
|<el-row justify="space-between"><el-col :span="20">pssysbischemename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表体系|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "bicubetag" : null,
  "bicubetag2" : null,
  "codename" : null,
  "memo" : null,
  "psdeid" : null,
  "psdename" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "pssysbischemename" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "bicubetag" : null,
  "bicubetag2" : null,
  "codename" : null,
  "memo" : null,
  "psdeid" : null,
  "psdename" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "pssysbischemename" : null,
  "validflag" : null,
}

```

## 检查智能报表立方体主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubes/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">bicubetag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体标记|
|<el-row justify="space-between"><el-col :span="20">bicubetag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体标记2|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体实体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体名称|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表体系|
|<el-row justify="space-between"><el-col :span="20">pssysbischemename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表体系|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "bicubetag" : null,
  "bicubetag2" : null,
  "codename" : null,
  "memo" : null,
  "psdeid" : null,
  "psdename" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "pssysbischemename" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取智能报表立方体草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubes/getdraft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">bicubetag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体标记|
|<el-row justify="space-between"><el-col :span="20">bicubetag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体标记2|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体实体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体名称|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表体系|
|<el-row justify="space-between"><el-col :span="20">pssysbischemename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表体系|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "bicubetag" : null,
  "bicubetag2" : null,
  "codename" : null,
  "memo" : null,
  "psdeid" : null,
  "psdename" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "pssysbischemename" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "bicubetag" : null,
  "bicubetag2" : null,
  "codename" : null,
  "memo" : null,
  "psdeid" : null,
  "psdename" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "pssysbischemename" : null,
  "validflag" : null,
}

```

## 保存智能报表立方体

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubes/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">bicubetag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体标记|
|<el-row justify="space-between"><el-col :span="20">bicubetag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体标记2|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体实体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体名称|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表体系|
|<el-row justify="space-between"><el-col :span="20">pssysbischemename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表体系|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "bicubetag" : null,
  "bicubetag2" : null,
  "codename" : null,
  "memo" : null,
  "psdeid" : null,
  "psdename" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "pssysbischemename" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "bicubetag" : null,
  "bicubetag2" : null,
  "codename" : null,
  "memo" : null,
  "psdeid" : null,
  "psdename" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "pssysbischemename" : null,
  "validflag" : null,
}

```

## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubes/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_pssysbicubeid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体标识|
|<el-row justify="space-between"><el-col :span="20">n_pssysbicubename_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体名称|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_pssysbicubeid_eq" : null,
  "n_pssysbicubename_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "bicubetag" : null,
    "bicubetag2" : null,
    "codename" : null,
    "memo" : null,
    "psdeid" : null,
    "psdename" : null,
    "pssysbicubeid" : null,
    "pssysbicubename" : null,
    "pssysbischemeid" : null,
    "pssysbischemename" : null,
    "validflag" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubes/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubes/exportdata/{param},/pssysbicubes/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubes/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubes/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubes/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubes/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubes/report" type="info" :closable="false" ></el-alert>
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