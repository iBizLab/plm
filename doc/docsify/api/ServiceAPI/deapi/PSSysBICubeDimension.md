# 智能报表立方体维度(PSSysBICubeDimension) :id=PSSysBICubeDimension
## 创建智能报表立方体维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubedimensions" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">bidimensiontype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维度类型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">dimensionformula</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维度公式|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">pscodelistid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码表|
|<el-row justify="space-between"><el-col :span="20">pscodelistname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码表|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体维度标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体维度名称|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "bidimensiontype" : null,
  "codename" : null,
  "dimensionformula" : null,
  "memo" : null,
  "pscodelistid" : null,
  "pscodelistname" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "bidimensiontype" : null,
  "codename" : null,
  "dimensionformula" : null,
  "memo" : null,
  "pscodelistid" : null,
  "pscodelistname" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}

```

## 获取智能报表立方体维度

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubedimensions/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|立方体维度标识|




##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "bidimensiontype" : null,
  "codename" : null,
  "dimensionformula" : null,
  "memo" : null,
  "pscodelistid" : null,
  "pscodelistname" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}

```

## 删除智能报表立方体维度

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubedimensions/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|立方体维度标识|





## 更新智能报表立方体维度

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubedimensions/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|立方体维度标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">bidimensiontype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维度类型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">dimensionformula</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维度公式|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">pscodelistid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码表|
|<el-row justify="space-between"><el-col :span="20">pscodelistname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码表|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体维度标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体维度名称|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "bidimensiontype" : null,
  "codename" : null,
  "dimensionformula" : null,
  "memo" : null,
  "pscodelistid" : null,
  "pscodelistname" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "bidimensiontype" : null,
  "codename" : null,
  "dimensionformula" : null,
  "memo" : null,
  "pscodelistid" : null,
  "pscodelistname" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}

```

## 检查智能报表立方体维度主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubedimensions/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">bidimensiontype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维度类型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">dimensionformula</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维度公式|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">pscodelistid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码表|
|<el-row justify="space-between"><el-col :span="20">pscodelistname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码表|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体维度标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体维度名称|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "bidimensiontype" : null,
  "codename" : null,
  "dimensionformula" : null,
  "memo" : null,
  "pscodelistid" : null,
  "pscodelistname" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取智能报表立方体维度草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubedimensions/getdraft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">bidimensiontype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维度类型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">dimensionformula</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维度公式|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">pscodelistid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码表|
|<el-row justify="space-between"><el-col :span="20">pscodelistname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码表|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体维度标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体维度名称|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "bidimensiontype" : null,
  "codename" : null,
  "dimensionformula" : null,
  "memo" : null,
  "pscodelistid" : null,
  "pscodelistname" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "bidimensiontype" : null,
  "codename" : null,
  "dimensionformula" : null,
  "memo" : null,
  "pscodelistid" : null,
  "pscodelistname" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}

```

## 保存智能报表立方体维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubedimensions/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">bidimensiontype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维度类型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">dimensionformula</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维度公式|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">pscodelistid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码表|
|<el-row justify="space-between"><el-col :span="20">pscodelistname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码表|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体维度标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体维度名称|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "bidimensiontype" : null,
  "codename" : null,
  "dimensionformula" : null,
  "memo" : null,
  "pscodelistid" : null,
  "pscodelistname" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "bidimensiontype" : null,
  "codename" : null,
  "dimensionformula" : null,
  "memo" : null,
  "pscodelistid" : null,
  "pscodelistname" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}

```

## 应用

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubedimensions/{key}/apply" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|立方体维度标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">bidimensiontype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维度类型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">dimensionformula</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维度公式|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">pscodelistid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码表|
|<el-row justify="space-between"><el-col :span="20">pscodelistname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码表|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体维度标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体维度名称|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "bidimensiontype" : null,
  "codename" : null,
  "dimensionformula" : null,
  "memo" : null,
  "pscodelistid" : null,
  "pscodelistname" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}
```



## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubedimensions/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_bidimensiontype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|维度类型|
|<el-row justify="space-between"><el-col :span="20">n_dynamodelflag_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">n_pssysbicubedimensionid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体维度标识|
|<el-row justify="space-between"><el-col :span="20">n_pssysbicubedimensionname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体维度名称|
|<el-row justify="space-between"><el-col :span="20">n_pssysbicubeid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_bidimensiontype_eq" : null,
  "n_dynamodelflag_eq" : null,
  "n_pssysbicubedimensionid_eq" : null,
  "n_pssysbicubedimensionname_like" : null,
  "n_pssysbicubeid_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "dynamodelflag" : null,
    "bidimensiontype" : null,
    "codename" : null,
    "dimensionformula" : null,
    "memo" : null,
    "pscodelistid" : null,
    "pscodelistname" : null,
    "pssysbicubedimensionid" : null,
    "pssysbicubedimensionname" : null,
    "pssysbicubeid" : null,
    "pssysbicubename" : null,
    "pssysbischemeid" : null,
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
<el-alert title="/pssysbicubedimensions/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubedimensions/exportdata/{param},/pssysbicubedimensions/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubedimensions/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubedimensions/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubedimensions/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubedimensions/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubedimensions/report" type="info" :closable="false" ></el-alert>
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