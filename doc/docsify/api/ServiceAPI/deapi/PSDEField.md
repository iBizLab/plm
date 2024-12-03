# 实体属性(PSDEField) :id=PSDEField
## 创建实体属性

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdefields" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">allowempty</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|允许空值|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">deftype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|属性类型|
|<el-row justify="space-between"><el-col :span="20">fieldtag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|属性标记|
|<el-row justify="space-between"><el-col :span="20">fieldtag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|属性标记2|
|<el-row justify="space-between"><el-col :span="20">length</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|长度|
|<el-row justify="space-between"><el-col :span="20">logicname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|中文名称|
|<el-row justify="space-between"><el-col :span="20">psdefieldid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体属性标识|
|<el-row justify="space-between"><el-col :span="20">psdefieldname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体属性名称|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdatatypeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|数据类型|
|<el-row justify="space-between"><el-col :span="20">psdatatypename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|数据类型|
|<el-row justify="space-between"><el-col :span="20">precision2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|浮点精度|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记4|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "allowempty" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "deftype" : null,
  "fieldtag" : null,
  "fieldtag2" : null,
  "length" : null,
  "logicname" : null,
  "psdefieldid" : null,
  "psdefieldname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdatatypeid" : null,
  "psdatatypename" : null,
  "precision2" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "allowempty" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "deftype" : null,
  "fieldtag" : null,
  "fieldtag2" : null,
  "length" : null,
  "logicname" : null,
  "psdefieldid" : null,
  "psdefieldname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdatatypeid" : null,
  "psdatatypename" : null,
  "precision2" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}

```

## 获取实体属性

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdefields/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|实体属性标识|




##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "allowempty" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "deftype" : null,
  "fieldtag" : null,
  "fieldtag2" : null,
  "length" : null,
  "logicname" : null,
  "psdefieldid" : null,
  "psdefieldname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdatatypeid" : null,
  "psdatatypename" : null,
  "precision2" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}

```

## 删除实体属性

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdefields/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|实体属性标识|





## 更新实体属性

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdefields/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|实体属性标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">allowempty</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|允许空值|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">deftype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|属性类型|
|<el-row justify="space-between"><el-col :span="20">fieldtag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|属性标记|
|<el-row justify="space-between"><el-col :span="20">fieldtag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|属性标记2|
|<el-row justify="space-between"><el-col :span="20">length</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|长度|
|<el-row justify="space-between"><el-col :span="20">logicname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|中文名称|
|<el-row justify="space-between"><el-col :span="20">psdefieldid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体属性标识|
|<el-row justify="space-between"><el-col :span="20">psdefieldname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体属性名称|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdatatypeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|数据类型|
|<el-row justify="space-between"><el-col :span="20">psdatatypename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|数据类型|
|<el-row justify="space-between"><el-col :span="20">precision2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|浮点精度|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记4|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "allowempty" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "deftype" : null,
  "fieldtag" : null,
  "fieldtag2" : null,
  "length" : null,
  "logicname" : null,
  "psdefieldid" : null,
  "psdefieldname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdatatypeid" : null,
  "psdatatypename" : null,
  "precision2" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "allowempty" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "deftype" : null,
  "fieldtag" : null,
  "fieldtag2" : null,
  "length" : null,
  "logicname" : null,
  "psdefieldid" : null,
  "psdefieldname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdatatypeid" : null,
  "psdatatypename" : null,
  "precision2" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}

```

## 检查实体属性主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdefields/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">allowempty</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|允许空值|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">deftype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|属性类型|
|<el-row justify="space-between"><el-col :span="20">fieldtag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|属性标记|
|<el-row justify="space-between"><el-col :span="20">fieldtag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|属性标记2|
|<el-row justify="space-between"><el-col :span="20">length</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|长度|
|<el-row justify="space-between"><el-col :span="20">logicname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|中文名称|
|<el-row justify="space-between"><el-col :span="20">psdefieldid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体属性标识|
|<el-row justify="space-between"><el-col :span="20">psdefieldname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体属性名称|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdatatypeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|数据类型|
|<el-row justify="space-between"><el-col :span="20">psdatatypename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|数据类型|
|<el-row justify="space-between"><el-col :span="20">precision2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|浮点精度|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记4|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "allowempty" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "deftype" : null,
  "fieldtag" : null,
  "fieldtag2" : null,
  "length" : null,
  "logicname" : null,
  "psdefieldid" : null,
  "psdefieldname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdatatypeid" : null,
  "psdatatypename" : null,
  "precision2" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 保存实体属性

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdefields/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">allowempty</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|允许空值|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">deftype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|属性类型|
|<el-row justify="space-between"><el-col :span="20">fieldtag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|属性标记|
|<el-row justify="space-between"><el-col :span="20">fieldtag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|属性标记2|
|<el-row justify="space-between"><el-col :span="20">length</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|长度|
|<el-row justify="space-between"><el-col :span="20">logicname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|中文名称|
|<el-row justify="space-between"><el-col :span="20">psdefieldid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体属性标识|
|<el-row justify="space-between"><el-col :span="20">psdefieldname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体属性名称|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdatatypeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|数据类型|
|<el-row justify="space-between"><el-col :span="20">psdatatypename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|数据类型|
|<el-row justify="space-between"><el-col :span="20">precision2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|浮点精度|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记4|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "allowempty" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "deftype" : null,
  "fieldtag" : null,
  "fieldtag2" : null,
  "length" : null,
  "logicname" : null,
  "psdefieldid" : null,
  "psdefieldname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdatatypeid" : null,
  "psdatatypename" : null,
  "precision2" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "allowempty" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "deftype" : null,
  "fieldtag" : null,
  "fieldtag2" : null,
  "length" : null,
  "logicname" : null,
  "psdefieldid" : null,
  "psdefieldname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdatatypeid" : null,
  "psdatatypename" : null,
  "precision2" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}

```

## 应用

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdefields/{key}/apply" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|实体属性标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">allowempty</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|允许空值|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">deftype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|属性类型|
|<el-row justify="space-between"><el-col :span="20">fieldtag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|属性标记|
|<el-row justify="space-between"><el-col :span="20">fieldtag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|属性标记2|
|<el-row justify="space-between"><el-col :span="20">length</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|长度|
|<el-row justify="space-between"><el-col :span="20">logicname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|中文名称|
|<el-row justify="space-between"><el-col :span="20">psdefieldid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体属性标识|
|<el-row justify="space-between"><el-col :span="20">psdefieldname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体属性名称|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdatatypeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|数据类型|
|<el-row justify="space-between"><el-col :span="20">psdatatypename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|数据类型|
|<el-row justify="space-between"><el-col :span="20">precision2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|浮点精度|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记4|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "allowempty" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "deftype" : null,
  "fieldtag" : null,
  "fieldtag2" : null,
  "length" : null,
  "logicname" : null,
  "psdefieldid" : null,
  "psdefieldname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdatatypeid" : null,
  "psdatatypename" : null,
  "precision2" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```



## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdefields/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_deftype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|属性类型|
|<el-row justify="space-between"><el-col :span="20">n_fieldtag2_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|属性标记2|
|<el-row justify="space-between"><el-col :span="20">n_fieldtag_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|属性标记|
|<el-row justify="space-between"><el-col :span="20">n_logicname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|中文名称|
|<el-row justify="space-between"><el-col :span="20">n_psdefieldid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体属性标识|
|<el-row justify="space-between"><el-col :span="20">n_psdefieldname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体属性名称|
|<el-row justify="space-between"><el-col :span="20">n_psdeid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">n_psdename_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">n_psdename_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">n_usertag2_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">n_usertag2_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">n_usertag3_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记3|
|<el-row justify="space-between"><el-col :span="20">n_usertag3_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记3|
|<el-row justify="space-between"><el-col :span="20">n_usertag4_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记4|
|<el-row justify="space-between"><el-col :span="20">n_usertag4_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记4|
|<el-row justify="space-between"><el-col :span="20">n_usertag_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">n_usertag_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_deftype_eq" : null,
  "n_fieldtag2_eq" : null,
  "n_fieldtag_eq" : null,
  "n_logicname_like" : null,
  "n_psdefieldid_eq" : null,
  "n_psdefieldname_like" : null,
  "n_psdeid_eq" : null,
  "n_psdename_eq" : null,
  "n_psdename_like" : null,
  "n_usertag2_eq" : null,
  "n_usertag2_noteq" : null,
  "n_usertag3_eq" : null,
  "n_usertag3_noteq" : null,
  "n_usertag4_eq" : null,
  "n_usertag4_noteq" : null,
  "n_usertag_eq" : null,
  "n_usertag_noteq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "dynamodelflag" : null,
    "allowempty" : null,
    "codename" : null,
    "createdate" : null,
    "createman" : null,
    "deftype" : null,
    "fieldtag" : null,
    "fieldtag2" : null,
    "length" : null,
    "logicname" : null,
    "psdefieldid" : null,
    "psdefieldname" : null,
    "psdeid" : null,
    "psdename" : null,
    "psdatatypeid" : null,
    "psdatatypename" : null,
    "precision2" : null,
    "updatedate" : null,
    "updateman" : null,
    "usertag" : null,
    "usertag2" : null,
    "usertag3" : null,
    "usertag4" : null,
    "extension_tag" : null,
    "extension_tag2" : null,
    "extension_tag3" : null,
    "extension_tag4" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdefields/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdefields/exportdata/{param},/psdefields/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdefields/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdefields/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdefields/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdefields/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdefields/report" type="info" :closable="false" ></el-alert>
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