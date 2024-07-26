# 实体主状态迁移逻辑(PSDEMSLogic) :id=PSDEMSLogic
## 创建实体主状态迁移逻辑

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdemslogics" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">psdelogicnodes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑节点|
|<el-row justify="space-between"><el-col :span="20">psdelogiclinks</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑连接|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">logictype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑类型|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelogicid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">psdelogicname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体处理逻辑名称|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logictype" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
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
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logictype" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}

```

## 获取实体主状态迁移逻辑

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdemslogics/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|实体处理逻辑标识|




##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logictype" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}

```

## 删除实体主状态迁移逻辑

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdemslogics/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|实体处理逻辑标识|





## 更新实体主状态迁移逻辑

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdemslogics/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|实体处理逻辑标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">psdelogicnodes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑节点|
|<el-row justify="space-between"><el-col :span="20">psdelogiclinks</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑连接|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">logictype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑类型|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelogicid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">psdelogicname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体处理逻辑名称|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logictype" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
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
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logictype" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}

```

## 检查实体主状态迁移逻辑主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdemslogics/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">psdelogicnodes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑节点|
|<el-row justify="space-between"><el-col :span="20">psdelogiclinks</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑连接|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">logictype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑类型|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelogicid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">psdelogicname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体处理逻辑名称|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logictype" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
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

## 获取实体主状态迁移逻辑草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdemslogics/getdraft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">psdelogicnodes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑节点|
|<el-row justify="space-between"><el-col :span="20">psdelogiclinks</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑连接|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">logictype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑类型|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelogicid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">psdelogicname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体处理逻辑名称|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logictype" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
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
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logictype" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}

```

## 保存实体主状态迁移逻辑

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdemslogics/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">psdelogicnodes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑节点|
|<el-row justify="space-between"><el-col :span="20">psdelogiclinks</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑连接|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">logictype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑类型|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelogicid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">psdelogicname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体处理逻辑名称|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logictype" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
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
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logictype" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
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
<el-alert title="/psdemslogics/{key}/apply" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|实体处理逻辑标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">psdelogicnodes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑节点|
|<el-row justify="space-between"><el-col :span="20">psdelogiclinks</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑连接|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">logictype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑类型|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelogicid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">psdelogicname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体处理逻辑名称|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logictype" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
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
<el-alert title="/psdemslogics/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_psdeid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">n_psdelogicid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">n_psdelogicname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体处理逻辑名称|
|<el-row justify="space-between"><el-col :span="20">n_psdename_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">n_psdename_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_psdeid_eq" : null,
  "n_psdelogicid_eq" : null,
  "n_psdelogicname_like" : null,
  "n_psdename_eq" : null,
  "n_psdename_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "dynamodelflag" : null,
    "psdelogicnodes" : null,
    "psdelogiclinks" : null,
    "codename" : null,
    "createdate" : null,
    "createman" : null,
    "logictype" : null,
    "psdeid" : null,
    "psdelogicid" : null,
    "psdelogicname" : null,
    "psdename" : null,
    "updatedate" : null,
    "updateman" : null,
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
<el-alert title="/psdemslogics/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdemslogics/exportdata/{param},/psdemslogics/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdemslogics/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdemslogics/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdemslogics/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdemslogics/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdemslogics/report" type="info" :closable="false" ></el-alert>
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