# 发布阶段(stage) :id=stage
## 创建发布阶段

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|颜色|
|<el-row justify="space-between"><el-col :span="20">style</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景样式|
|<el-row justify="space-between"><el-col :span="20">is_current</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否发布当前阶段|
|<el-row justify="space-between"><el-col :span="20">operated_time</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|操作时间|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父颜色|
|<el-row justify="space-between"><el-col :span="20">p_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|父阶段排序|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|排序|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">pid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">pname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">release_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布标识|



##### 请求示例： {docsify-ignore}
```json
{
  "color" : null,
  "style" : null,
  "is_current" : null,
  "operated_time" : null,
  "type" : null,
  "p_color" : null,
  "p_type" : null,
  "p_sequence" : null,
  "sequence" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "release_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "color" : null,
  "style" : null,
  "is_current" : null,
  "operated_time" : null,
  "type" : null,
  "p_color" : null,
  "p_type" : null,
  "p_sequence" : null,
  "sequence" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "release_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 获取发布阶段

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/{key}" type="info" :closable="false" ></el-alert>
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
  "color" : null,
  "style" : null,
  "is_current" : null,
  "operated_time" : null,
  "type" : null,
  "p_color" : null,
  "p_type" : null,
  "p_sequence" : null,
  "sequence" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "release_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 删除发布阶段

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|





## 更新发布阶段

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/{key}" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|颜色|
|<el-row justify="space-between"><el-col :span="20">style</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景样式|
|<el-row justify="space-between"><el-col :span="20">is_current</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否发布当前阶段|
|<el-row justify="space-between"><el-col :span="20">operated_time</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|操作时间|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父颜色|
|<el-row justify="space-between"><el-col :span="20">p_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|父阶段排序|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|排序|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">pid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">pname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">release_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布标识|



##### 请求示例： {docsify-ignore}
```json
{
  "color" : null,
  "style" : null,
  "is_current" : null,
  "operated_time" : null,
  "type" : null,
  "p_color" : null,
  "p_type" : null,
  "p_sequence" : null,
  "sequence" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "release_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "color" : null,
  "style" : null,
  "is_current" : null,
  "operated_time" : null,
  "type" : null,
  "p_color" : null,
  "p_type" : null,
  "p_sequence" : null,
  "sequence" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "release_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 添加全局预定义阶段

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/add_predefined" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|颜色|
|<el-row justify="space-between"><el-col :span="20">style</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景样式|
|<el-row justify="space-between"><el-col :span="20">is_current</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否发布当前阶段|
|<el-row justify="space-between"><el-col :span="20">operated_time</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|操作时间|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父颜色|
|<el-row justify="space-between"><el-col :span="20">p_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|父阶段排序|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|排序|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">pid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">pname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">release_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布标识|



##### 请求示例： {docsify-ignore}
```json
{
  "color" : null,
  "style" : null,
  "is_current" : null,
  "operated_time" : null,
  "type" : null,
  "p_color" : null,
  "p_type" : null,
  "p_sequence" : null,
  "sequence" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "release_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "color" : null,
  "style" : null,
  "is_current" : null,
  "operated_time" : null,
  "type" : null,
  "p_color" : null,
  "p_type" : null,
  "p_sequence" : null,
  "sequence" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "release_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 检查发布阶段主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|颜色|
|<el-row justify="space-between"><el-col :span="20">style</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景样式|
|<el-row justify="space-between"><el-col :span="20">is_current</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否发布当前阶段|
|<el-row justify="space-between"><el-col :span="20">operated_time</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|操作时间|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父颜色|
|<el-row justify="space-between"><el-col :span="20">p_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|父阶段排序|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|排序|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">pid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">pname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">release_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布标识|



##### 请求示例： {docsify-ignore}
```json
{
  "color" : null,
  "style" : null,
  "is_current" : null,
  "operated_time" : null,
  "type" : null,
  "p_color" : null,
  "p_type" : null,
  "p_sequence" : null,
  "sequence" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "release_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 删除发布阶段

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/{key}/del" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|颜色|
|<el-row justify="space-between"><el-col :span="20">style</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景样式|
|<el-row justify="space-between"><el-col :span="20">is_current</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否发布当前阶段|
|<el-row justify="space-between"><el-col :span="20">operated_time</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|操作时间|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父颜色|
|<el-row justify="space-between"><el-col :span="20">p_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|父阶段排序|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|排序|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">pid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">pname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">release_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布标识|



##### 请求示例： {docsify-ignore}
```json
{
  "color" : null,
  "style" : null,
  "is_current" : null,
  "operated_time" : null,
  "type" : null,
  "p_color" : null,
  "p_type" : null,
  "p_sequence" : null,
  "sequence" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "release_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 获取发布阶段草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|颜色|
|<el-row justify="space-between"><el-col :span="20">style</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景样式|
|<el-row justify="space-between"><el-col :span="20">is_current</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否发布当前阶段|
|<el-row justify="space-between"><el-col :span="20">operated_time</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|操作时间|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父颜色|
|<el-row justify="space-between"><el-col :span="20">p_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|父阶段排序|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|排序|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">pid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">pname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">release_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布标识|



##### 请求示例： {docsify-ignore}
```json
{
  "color" : null,
  "style" : null,
  "is_current" : null,
  "operated_time" : null,
  "type" : null,
  "p_color" : null,
  "p_type" : null,
  "p_sequence" : null,
  "sequence" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "release_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "color" : null,
  "style" : null,
  "is_current" : null,
  "operated_time" : null,
  "type" : null,
  "p_color" : null,
  "p_type" : null,
  "p_sequence" : null,
  "sequence" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "release_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 移动排序

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/{key}/move_order" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|颜色|
|<el-row justify="space-between"><el-col :span="20">style</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景样式|
|<el-row justify="space-between"><el-col :span="20">is_current</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否发布当前阶段|
|<el-row justify="space-between"><el-col :span="20">operated_time</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|操作时间|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父颜色|
|<el-row justify="space-between"><el-col :span="20">p_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|父阶段排序|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|排序|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">pid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">pname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">release_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布标识|



##### 请求示例： {docsify-ignore}
```json
{
  "color" : null,
  "style" : null,
  "is_current" : null,
  "operated_time" : null,
  "type" : null,
  "p_color" : null,
  "p_type" : null,
  "p_sequence" : null,
  "sequence" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "release_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "color" : null,
  "style" : null,
  "is_current" : null,
  "operated_time" : null,
  "type" : null,
  "p_color" : null,
  "p_type" : null,
  "p_sequence" : null,
  "sequence" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "release_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 保存发布阶段

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|颜色|
|<el-row justify="space-between"><el-col :span="20">style</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景样式|
|<el-row justify="space-between"><el-col :span="20">is_current</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否发布当前阶段|
|<el-row justify="space-between"><el-col :span="20">operated_time</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|操作时间|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父颜色|
|<el-row justify="space-between"><el-col :span="20">p_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父阶段类型|
|<el-row justify="space-between"><el-col :span="20">p_sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|父阶段排序|
|<el-row justify="space-between"><el-col :span="20">sequence</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|排序|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">pid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">pname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">release_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布标识|



##### 请求示例： {docsify-ignore}
```json
{
  "color" : null,
  "style" : null,
  "is_current" : null,
  "operated_time" : null,
  "type" : null,
  "p_color" : null,
  "p_type" : null,
  "p_sequence" : null,
  "sequence" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "release_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "color" : null,
  "style" : null,
  "is_current" : null,
  "operated_time" : null,
  "type" : null,
  "p_color" : null,
  "p_type" : null,
  "p_sequence" : null,
  "sequence" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "release_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 全局阶段和所属阶段

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/fetch_cur_owner_sys" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_pid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">n_pname_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">n_pname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">n_release_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布标识|
|<el-row justify="space-between"><el-col :span="20">n_style_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景样式|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_name_like" : null,
  "n_pid_eq" : null,
  "n_pname_eq" : null,
  "n_pname_like" : null,
  "n_release_id_eq" : null,
  "n_style_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "color" : null,
    "style" : null,
    "is_current" : null,
    "operated_time" : null,
    "type" : null,
    "p_color" : null,
    "p_type" : null,
    "p_sequence" : null,
    "sequence" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "pid" : null,
    "pname" : null,
    "release_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 当前项目下的发布阶段

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/fetch_cur_project" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_pid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">n_pname_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">n_pname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">n_release_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布标识|
|<el-row justify="space-between"><el-col :span="20">n_style_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景样式|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_name_like" : null,
  "n_pid_eq" : null,
  "n_pname_eq" : null,
  "n_pname_like" : null,
  "n_release_id_eq" : null,
  "n_style_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "color" : null,
    "style" : null,
    "is_current" : null,
    "operated_time" : null,
    "type" : null,
    "p_color" : null,
    "p_type" : null,
    "p_sequence" : null,
    "sequence" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "pid" : null,
    "pname" : null,
    "release_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 发布所属阶段

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/fetch_cur_stage" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_pid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">n_pname_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">n_pname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">n_release_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布标识|
|<el-row justify="space-between"><el-col :span="20">n_style_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景样式|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_name_like" : null,
  "n_pid_eq" : null,
  "n_pname_eq" : null,
  "n_pname_like" : null,
  "n_release_id_eq" : null,
  "n_style_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "color" : null,
    "style" : null,
    "is_current" : null,
    "operated_time" : null,
    "type" : null,
    "p_color" : null,
    "p_type" : null,
    "p_sequence" : null,
    "sequence" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "pid" : null,
    "pname" : null,
    "release_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_pid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">n_pname_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">n_pname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">n_release_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布标识|
|<el-row justify="space-between"><el-col :span="20">n_style_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景样式|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_name_like" : null,
  "n_pid_eq" : null,
  "n_pname_eq" : null,
  "n_pname_like" : null,
  "n_release_id_eq" : null,
  "n_style_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "color" : null,
    "style" : null,
    "is_current" : null,
    "operated_time" : null,
    "type" : null,
    "p_color" : null,
    "p_type" : null,
    "p_sequence" : null,
    "sequence" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "pid" : null,
    "pname" : null,
    "release_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 发布所属阶段

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/fetch_owner" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_pid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">n_pname_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">n_pname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">n_release_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布标识|
|<el-row justify="space-between"><el-col :span="20">n_style_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景样式|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_name_like" : null,
  "n_pid_eq" : null,
  "n_pname_eq" : null,
  "n_pname_like" : null,
  "n_release_id_eq" : null,
  "n_style_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "color" : null,
    "style" : null,
    "is_current" : null,
    "operated_time" : null,
    "type" : null,
    "p_color" : null,
    "p_type" : null,
    "p_sequence" : null,
    "sequence" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "pid" : null,
    "pname" : null,
    "release_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 全局级发布阶段

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/fetch_system" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_pid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父标识|
|<el-row justify="space-between"><el-col :span="20">n_pname_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">n_pname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|父名称|
|<el-row justify="space-between"><el-col :span="20">n_release_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|项目发布标识|
|<el-row justify="space-between"><el-col :span="20">n_style_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景样式|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_name_like" : null,
  "n_pid_eq" : null,
  "n_pname_eq" : null,
  "n_pname_like" : null,
  "n_release_id_eq" : null,
  "n_style_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "color" : null,
    "style" : null,
    "is_current" : null,
    "operated_time" : null,
    "type" : null,
    "p_color" : null,
    "p_type" : null,
    "p_sequence" : null,
    "sequence" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "pid" : null,
    "pname" : null,
    "release_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/stages/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/stages/exportdata/{param},/stages/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/stages/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/stages/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/stages/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/stages/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/stages/report" type="info" :closable="false" ></el-alert>
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