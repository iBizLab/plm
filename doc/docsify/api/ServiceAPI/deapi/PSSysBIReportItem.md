# 智能报表项(PSSysBIReportItem) :id=PSSysBIReportItem
## 创建智能报表项

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbireportitems" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">aggtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|聚合类型|
|<el-row justify="space-between"><el-col :span="20">birepitemparams</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项参数|
|<el-row justify="space-between"><el-col :span="20">birepitemtag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|报表列标记|
|<el-row justify="space-between"><el-col :span="20">birepitemtag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|报表列标记2|
|<el-row justify="space-between"><el-col :span="20">birepitemtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|报表项类型|
|<el-row justify="space-between"><el-col :span="20">data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项数据|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体维度|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体维度|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasureid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表指标|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasurename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体指标|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbireportid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表报表|
|<el-row justify="space-between"><el-col :span="20">pssysbireportitemid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表项标识|
|<el-row justify="space-between"><el-col :span="20">pssysbireportitemname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表项名称|
|<el-row justify="space-between"><el-col :span="20">pssysbireportname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表报表|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">placetype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|放置类型|
|<el-row justify="space-between"><el-col :span="20">placement</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|放置位置|
|<el-row justify="space-between"><el-col :span="20">reftype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|指标引用类型|
|<el-row justify="space-between"><el-col :span="20">stddatatype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|标准数据类型|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">valueformat</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|值格式化|



##### 请求示例： {docsify-ignore}
```json
{
  "aggtype" : null,
  "birepitemparams" : null,
  "birepitemtag" : null,
  "birepitemtag2" : null,
  "birepitemtype" : null,
  "data" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbireportid" : null,
  "pssysbireportitemid" : null,
  "pssysbireportitemname" : null,
  "pssysbireportname" : null,
  "pssysbischemeid" : null,
  "placetype" : null,
  "placement" : null,
  "reftype" : null,
  "stddatatype" : null,
  "validflag" : null,
  "valueformat" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "aggtype" : null,
  "birepitemparams" : null,
  "birepitemtag" : null,
  "birepitemtag2" : null,
  "birepitemtype" : null,
  "data" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbireportid" : null,
  "pssysbireportitemid" : null,
  "pssysbireportitemname" : null,
  "pssysbireportname" : null,
  "pssysbischemeid" : null,
  "placetype" : null,
  "placement" : null,
  "reftype" : null,
  "stddatatype" : null,
  "validflag" : null,
  "valueformat" : null,
}

```

## 获取智能报表项

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbireportitems/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|智能报表项标识|




##### 响应示例： {docsify-ignore}
```json

{
  "aggtype" : null,
  "birepitemparams" : null,
  "birepitemtag" : null,
  "birepitemtag2" : null,
  "birepitemtype" : null,
  "data" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbireportid" : null,
  "pssysbireportitemid" : null,
  "pssysbireportitemname" : null,
  "pssysbireportname" : null,
  "pssysbischemeid" : null,
  "placetype" : null,
  "placement" : null,
  "reftype" : null,
  "stddatatype" : null,
  "validflag" : null,
  "valueformat" : null,
}

```

## 删除智能报表项

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbireportitems/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|智能报表项标识|





## 更新智能报表项

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbireportitems/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|智能报表项标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">aggtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|聚合类型|
|<el-row justify="space-between"><el-col :span="20">birepitemparams</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项参数|
|<el-row justify="space-between"><el-col :span="20">birepitemtag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|报表列标记|
|<el-row justify="space-between"><el-col :span="20">birepitemtag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|报表列标记2|
|<el-row justify="space-between"><el-col :span="20">birepitemtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|报表项类型|
|<el-row justify="space-between"><el-col :span="20">data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项数据|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体维度|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体维度|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasureid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表指标|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasurename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体指标|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbireportid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表报表|
|<el-row justify="space-between"><el-col :span="20">pssysbireportitemid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表项标识|
|<el-row justify="space-between"><el-col :span="20">pssysbireportitemname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表项名称|
|<el-row justify="space-between"><el-col :span="20">pssysbireportname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表报表|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">placetype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|放置类型|
|<el-row justify="space-between"><el-col :span="20">placement</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|放置位置|
|<el-row justify="space-between"><el-col :span="20">reftype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|指标引用类型|
|<el-row justify="space-between"><el-col :span="20">stddatatype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|标准数据类型|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">valueformat</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|值格式化|



##### 请求示例： {docsify-ignore}
```json
{
  "aggtype" : null,
  "birepitemparams" : null,
  "birepitemtag" : null,
  "birepitemtag2" : null,
  "birepitemtype" : null,
  "data" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbireportid" : null,
  "pssysbireportitemid" : null,
  "pssysbireportitemname" : null,
  "pssysbireportname" : null,
  "pssysbischemeid" : null,
  "placetype" : null,
  "placement" : null,
  "reftype" : null,
  "stddatatype" : null,
  "validflag" : null,
  "valueformat" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "aggtype" : null,
  "birepitemparams" : null,
  "birepitemtag" : null,
  "birepitemtag2" : null,
  "birepitemtype" : null,
  "data" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbireportid" : null,
  "pssysbireportitemid" : null,
  "pssysbireportitemname" : null,
  "pssysbireportname" : null,
  "pssysbischemeid" : null,
  "placetype" : null,
  "placement" : null,
  "reftype" : null,
  "stddatatype" : null,
  "validflag" : null,
  "valueformat" : null,
}

```

## 检查智能报表项主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbireportitems/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">aggtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|聚合类型|
|<el-row justify="space-between"><el-col :span="20">birepitemparams</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项参数|
|<el-row justify="space-between"><el-col :span="20">birepitemtag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|报表列标记|
|<el-row justify="space-between"><el-col :span="20">birepitemtag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|报表列标记2|
|<el-row justify="space-between"><el-col :span="20">birepitemtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|报表项类型|
|<el-row justify="space-between"><el-col :span="20">data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项数据|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体维度|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体维度|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasureid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表指标|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasurename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体指标|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbireportid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表报表|
|<el-row justify="space-between"><el-col :span="20">pssysbireportitemid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表项标识|
|<el-row justify="space-between"><el-col :span="20">pssysbireportitemname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表项名称|
|<el-row justify="space-between"><el-col :span="20">pssysbireportname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表报表|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">placetype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|放置类型|
|<el-row justify="space-between"><el-col :span="20">placement</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|放置位置|
|<el-row justify="space-between"><el-col :span="20">reftype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|指标引用类型|
|<el-row justify="space-between"><el-col :span="20">stddatatype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|标准数据类型|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">valueformat</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|值格式化|



##### 请求示例： {docsify-ignore}
```json
{
  "aggtype" : null,
  "birepitemparams" : null,
  "birepitemtag" : null,
  "birepitemtag2" : null,
  "birepitemtype" : null,
  "data" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbireportid" : null,
  "pssysbireportitemid" : null,
  "pssysbireportitemname" : null,
  "pssysbireportname" : null,
  "pssysbischemeid" : null,
  "placetype" : null,
  "placement" : null,
  "reftype" : null,
  "stddatatype" : null,
  "validflag" : null,
  "valueformat" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取智能报表项草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbireportitems/getdraft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">aggtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|聚合类型|
|<el-row justify="space-between"><el-col :span="20">birepitemparams</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项参数|
|<el-row justify="space-between"><el-col :span="20">birepitemtag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|报表列标记|
|<el-row justify="space-between"><el-col :span="20">birepitemtag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|报表列标记2|
|<el-row justify="space-between"><el-col :span="20">birepitemtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|报表项类型|
|<el-row justify="space-between"><el-col :span="20">data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项数据|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体维度|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体维度|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasureid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表指标|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasurename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体指标|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbireportid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表报表|
|<el-row justify="space-between"><el-col :span="20">pssysbireportitemid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表项标识|
|<el-row justify="space-between"><el-col :span="20">pssysbireportitemname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表项名称|
|<el-row justify="space-between"><el-col :span="20">pssysbireportname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表报表|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">placetype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|放置类型|
|<el-row justify="space-between"><el-col :span="20">placement</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|放置位置|
|<el-row justify="space-between"><el-col :span="20">reftype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|指标引用类型|
|<el-row justify="space-between"><el-col :span="20">stddatatype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|标准数据类型|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">valueformat</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|值格式化|



##### 请求示例： {docsify-ignore}
```json
{
  "aggtype" : null,
  "birepitemparams" : null,
  "birepitemtag" : null,
  "birepitemtag2" : null,
  "birepitemtype" : null,
  "data" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbireportid" : null,
  "pssysbireportitemid" : null,
  "pssysbireportitemname" : null,
  "pssysbireportname" : null,
  "pssysbischemeid" : null,
  "placetype" : null,
  "placement" : null,
  "reftype" : null,
  "stddatatype" : null,
  "validflag" : null,
  "valueformat" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "aggtype" : null,
  "birepitemparams" : null,
  "birepitemtag" : null,
  "birepitemtag2" : null,
  "birepitemtype" : null,
  "data" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbireportid" : null,
  "pssysbireportitemid" : null,
  "pssysbireportitemname" : null,
  "pssysbireportname" : null,
  "pssysbischemeid" : null,
  "placetype" : null,
  "placement" : null,
  "reftype" : null,
  "stddatatype" : null,
  "validflag" : null,
  "valueformat" : null,
}

```

## 保存智能报表项

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbireportitems/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">aggtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|聚合类型|
|<el-row justify="space-between"><el-col :span="20">birepitemparams</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项参数|
|<el-row justify="space-between"><el-col :span="20">birepitemtag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|报表列标记|
|<el-row justify="space-between"><el-col :span="20">birepitemtag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|报表列标记2|
|<el-row justify="space-between"><el-col :span="20">birepitemtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|报表项类型|
|<el-row justify="space-between"><el-col :span="20">data</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项数据|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体维度|
|<el-row justify="space-between"><el-col :span="20">pssysbicubedimensionname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体维度|
|<el-row justify="space-between"><el-col :span="20">pssysbicubeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasureid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表指标|
|<el-row justify="space-between"><el-col :span="20">pssysbicubemeasurename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|立方体指标|
|<el-row justify="space-between"><el-col :span="20">pssysbicubename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表立方体|
|<el-row justify="space-between"><el-col :span="20">pssysbireportid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表报表|
|<el-row justify="space-between"><el-col :span="20">pssysbireportitemid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|智能报表项标识|
|<el-row justify="space-between"><el-col :span="20">pssysbireportitemname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表项名称|
|<el-row justify="space-between"><el-col :span="20">pssysbireportname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表报表|
|<el-row justify="space-between"><el-col :span="20">pssysbischemeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|PSSYSBISCHEMEID|
|<el-row justify="space-between"><el-col :span="20">placetype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|放置类型|
|<el-row justify="space-between"><el-col :span="20">placement</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|放置位置|
|<el-row justify="space-between"><el-col :span="20">reftype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|指标引用类型|
|<el-row justify="space-between"><el-col :span="20">stddatatype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|标准数据类型|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">valueformat</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|值格式化|



##### 请求示例： {docsify-ignore}
```json
{
  "aggtype" : null,
  "birepitemparams" : null,
  "birepitemtag" : null,
  "birepitemtag2" : null,
  "birepitemtype" : null,
  "data" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbireportid" : null,
  "pssysbireportitemid" : null,
  "pssysbireportitemname" : null,
  "pssysbireportname" : null,
  "pssysbischemeid" : null,
  "placetype" : null,
  "placement" : null,
  "reftype" : null,
  "stddatatype" : null,
  "validflag" : null,
  "valueformat" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "aggtype" : null,
  "birepitemparams" : null,
  "birepitemtag" : null,
  "birepitemtag2" : null,
  "birepitemtype" : null,
  "data" : null,
  "pssysbicubedimensionid" : null,
  "pssysbicubedimensionname" : null,
  "pssysbicubeid" : null,
  "pssysbicubemeasureid" : null,
  "pssysbicubemeasurename" : null,
  "pssysbicubename" : null,
  "pssysbireportid" : null,
  "pssysbireportitemid" : null,
  "pssysbireportitemname" : null,
  "pssysbireportname" : null,
  "pssysbischemeid" : null,
  "placetype" : null,
  "placement" : null,
  "reftype" : null,
  "stddatatype" : null,
  "validflag" : null,
  "valueformat" : null,
}

```

## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbireportitems/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_aggtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|聚合类型|
|<el-row justify="space-between"><el-col :span="20">n_birepitemtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|报表项类型|
|<el-row justify="space-between"><el-col :span="20">n_pssysbireportid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表报表|
|<el-row justify="space-between"><el-col :span="20">n_pssysbireportitemid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表项标识|
|<el-row justify="space-between"><el-col :span="20">n_pssysbireportitemname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表项名称|
|<el-row justify="space-between"><el-col :span="20">n_pssysbireportname_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表报表|
|<el-row justify="space-between"><el-col :span="20">n_pssysbireportname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|智能报表报表|
|<el-row justify="space-between"><el-col :span="20">n_reftype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|指标引用类型|
|<el-row justify="space-between"><el-col :span="20">n_stddatatype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|标准数据类型|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_aggtype_eq" : null,
  "n_birepitemtype_eq" : null,
  "n_pssysbireportid_eq" : null,
  "n_pssysbireportitemid_eq" : null,
  "n_pssysbireportitemname_like" : null,
  "n_pssysbireportname_eq" : null,
  "n_pssysbireportname_like" : null,
  "n_reftype_eq" : null,
  "n_stddatatype_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "aggtype" : null,
    "birepitemparams" : null,
    "birepitemtag" : null,
    "birepitemtag2" : null,
    "birepitemtype" : null,
    "data" : null,
    "pssysbicubedimensionid" : null,
    "pssysbicubedimensionname" : null,
    "pssysbicubeid" : null,
    "pssysbicubemeasureid" : null,
    "pssysbicubemeasurename" : null,
    "pssysbicubename" : null,
    "pssysbireportid" : null,
    "pssysbireportitemid" : null,
    "pssysbireportitemname" : null,
    "pssysbireportname" : null,
    "pssysbischemeid" : null,
    "placetype" : null,
    "placement" : null,
    "reftype" : null,
    "stddatatype" : null,
    "validflag" : null,
    "valueformat" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/pssysbireportitems/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbireportitems/exportdata/{param},/pssysbireportitems/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbireportitems/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbireportitems/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbireportitems/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbireportitems/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/pssysbireportitems/report" type="info" :closable="false" ></el-alert>
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