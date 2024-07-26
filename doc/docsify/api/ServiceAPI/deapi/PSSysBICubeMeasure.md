# 智能报表立方体指标(PSSysBICubeMeasure) :id=PSSysBICubeMeasure
## 创建智能报表立方体指标

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubemeasures" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">bimeasuretype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|指标类型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">measureformula</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|指标公式|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序值|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasureid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表指标标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasurename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体指标名称|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "bimeasuretype" : null,
  "codename" : null,
  "measureformula" : null,
  "memo" : null,
  "ordervalue" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "bimeasuretype" : null,
  "codename" : null,
  "measureformula" : null,
  "memo" : null,
  "ordervalue" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}

```

## 获取智能报表立方体指标

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubemeasures/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|智能报表指标标识|




##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "bimeasuretype" : null,
  "codename" : null,
  "measureformula" : null,
  "memo" : null,
  "ordervalue" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}

```

## 删除智能报表立方体指标

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubemeasures/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|智能报表指标标识|





## 更新智能报表立方体指标

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubemeasures/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|智能报表指标标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">bimeasuretype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|指标类型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">measureformula</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|指标公式|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序值|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasureid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表指标标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasurename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体指标名称|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "bimeasuretype" : null,
  "codename" : null,
  "measureformula" : null,
  "memo" : null,
  "ordervalue" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "bimeasuretype" : null,
  "codename" : null,
  "measureformula" : null,
  "memo" : null,
  "ordervalue" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}

```

## 检查智能报表立方体指标主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubemeasures/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">bimeasuretype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|指标类型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">measureformula</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|指标公式|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序值|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasureid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表指标标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasurename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体指标名称|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "bimeasuretype" : null,
  "codename" : null,
  "measureformula" : null,
  "memo" : null,
  "ordervalue" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取智能报表立方体指标草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubemeasures/getdraft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">bimeasuretype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|指标类型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">measureformula</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|指标公式|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序值|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasureid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表指标标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasurename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体指标名称|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "bimeasuretype" : null,
  "codename" : null,
  "measureformula" : null,
  "memo" : null,
  "ordervalue" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "bimeasuretype" : null,
  "codename" : null,
  "measureformula" : null,
  "memo" : null,
  "ordervalue" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}

```

## 保存智能报表立方体指标

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbicubemeasures/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">bimeasuretype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|指标类型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">measureformula</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|指标公式|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序值|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasureid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表指标标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasurename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体指标名称|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "bimeasuretype" : null,
  "codename" : null,
  "measureformula" : null,
  "memo" : null,
  "ordervalue" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbischemeid" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "bimeasuretype" : null,
  "codename" : null,
  "measureformula" : null,
  "memo" : null,
  "ordervalue" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
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
<el-alert title="/pssysbicubemeasures/{key}/apply" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|智能报表指标标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">bimeasuretype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|指标类型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">measureformula</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|指标公式|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|排序值|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasureid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表指标标识|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasurename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|立方体指标名称|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "bimeasuretype" : null,
  "codename" : null,
  "measureformula" : null,
  "memo" : null,
  "ordervalue" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
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
<el-alert title="/pssysbicubemeasures/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_bimeasuretype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|指标类型|
|<el-row justify="space-between"><el-col :span="20">n_dynamodelflag_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">n_pssysbicubeid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">n_pssysbicubemeasureid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表指标标识|
|<el-row justify="space-between"><el-col :span="20">n_pssysbicubemeasurename_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体指标名称|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_bimeasuretype_eq" : null,
  "n_dynamodelflag_eq" : null,
  "n_pssysbicubeid_eq" : null,
  "n_pssysbicubemeasureid_eq" : null,
  "n_pssysbicubemeasurename_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "dynamodelflag" : null,
    "bimeasuretype" : null,
    "codename" : null,
    "measureformula" : null,
    "memo" : null,
    "ordervalue" : null,
    "pssysbicubeid" : null,
    "pssysbicubemeasureid" : null,
    "pssysbicubemeasurename" : null,
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
<el-alert title="/pssysbicubemeasures/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubemeasures/exportdata/{param},/pssysbicubemeasures/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubemeasures/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubemeasures/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubemeasures/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubemeasures/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbicubemeasures/report" type="info" :closable="false" ></el-alert>
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