# 实体处理逻辑(PSDELogic) :id=PSDELogic
## 创建实体处理逻辑

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdelogics" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">applyflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展状态|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">timerpolicy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|定时触发策略|
|<el-row justify="space-between"><el-col :span="20">last_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最后运行状态|
|<el-row justify="space-between"><el-col :span="20">eventmodel</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事件模型|
|<el-row justify="space-between"><el-col :span="20">events</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控事件|
|<el-row justify="space-between"><el-col :span="20">ignoreexception</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|忽略异常|
|<el-row justify="space-between"><el-col :span="20">threadmode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|线程模式|
|<el-row justify="space-between"><el-col :span="20">last_start_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|最后运行时间|
|<el-row justify="space-between"><el-col :span="20">psdelogicparams</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑参数|
|<el-row justify="space-between"><el-col :span="20">psdelogicnodes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑节点|
|<el-row justify="space-between"><el-col :span="20">psdelogiclinks</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑连接|
|<el-row justify="space-between"><el-col :span="20">webhookurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|WebHook地址|
|<el-row justify="space-between"><el-col :span="20">success_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">success_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">failure_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">failure_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">logicsubtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|逻辑子类|
|<el-row justify="space-between"><el-col :span="20">logictag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记|
|<el-row justify="space-between"><el-col :span="20">logictag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记2|
|<el-row justify="space-between"><el-col :span="20">logictag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记3|
|<el-row justify="space-between"><el-col :span="20">logictag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记4|
|<el-row justify="space-between"><el-col :span="20">logictype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑类型|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|附加次序|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelogicid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">psdelogicname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|规则名称|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记4|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "eventmodel" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "psdelogicparams" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "webhookurl" : null,
  "success_per" : null,
  "success_rate" : null,
  "failure_per" : null,
  "failure_rate" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictag" : null,
  "logictag2" : null,
  "logictag3" : null,
  "logictag4" : null,
  "logictype" : null,
  "memo" : null,
  "ordervalue" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "eventmodel" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "psdelogicparams" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "webhookurl" : null,
  "success_per" : null,
  "success_rate" : null,
  "failure_per" : null,
  "failure_rate" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictag" : null,
  "logictag2" : null,
  "logictag3" : null,
  "logictag4" : null,
  "logictype" : null,
  "memo" : null,
  "ordervalue" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}

```

## 获取实体处理逻辑

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdelogics/{key}" type="info" :closable="false" ></el-alert>
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
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "eventmodel" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "psdelogicparams" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "webhookurl" : null,
  "success_per" : null,
  "success_rate" : null,
  "failure_per" : null,
  "failure_rate" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictag" : null,
  "logictag2" : null,
  "logictag3" : null,
  "logictag4" : null,
  "logictype" : null,
  "memo" : null,
  "ordervalue" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}

```

## 删除实体处理逻辑

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdelogics/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|实体处理逻辑标识|





## 更新实体处理逻辑

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdelogics/{key}" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">applyflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展状态|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">timerpolicy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|定时触发策略|
|<el-row justify="space-between"><el-col :span="20">last_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最后运行状态|
|<el-row justify="space-between"><el-col :span="20">eventmodel</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事件模型|
|<el-row justify="space-between"><el-col :span="20">events</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控事件|
|<el-row justify="space-between"><el-col :span="20">ignoreexception</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|忽略异常|
|<el-row justify="space-between"><el-col :span="20">threadmode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|线程模式|
|<el-row justify="space-between"><el-col :span="20">last_start_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|最后运行时间|
|<el-row justify="space-between"><el-col :span="20">psdelogicparams</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑参数|
|<el-row justify="space-between"><el-col :span="20">psdelogicnodes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑节点|
|<el-row justify="space-between"><el-col :span="20">psdelogiclinks</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑连接|
|<el-row justify="space-between"><el-col :span="20">webhookurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|WebHook地址|
|<el-row justify="space-between"><el-col :span="20">success_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">success_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">failure_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">failure_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">logicsubtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|逻辑子类|
|<el-row justify="space-between"><el-col :span="20">logictag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记|
|<el-row justify="space-between"><el-col :span="20">logictag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记2|
|<el-row justify="space-between"><el-col :span="20">logictag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记3|
|<el-row justify="space-between"><el-col :span="20">logictag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记4|
|<el-row justify="space-between"><el-col :span="20">logictype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑类型|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|附加次序|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelogicid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">psdelogicname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|规则名称|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记4|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "eventmodel" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "psdelogicparams" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "webhookurl" : null,
  "success_per" : null,
  "success_rate" : null,
  "failure_per" : null,
  "failure_rate" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictag" : null,
  "logictag2" : null,
  "logictag3" : null,
  "logictag4" : null,
  "logictype" : null,
  "memo" : null,
  "ordervalue" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "eventmodel" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "psdelogicparams" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "webhookurl" : null,
  "success_per" : null,
  "success_rate" : null,
  "failure_per" : null,
  "failure_rate" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictag" : null,
  "logictag2" : null,
  "logictag3" : null,
  "logictag4" : null,
  "logictype" : null,
  "memo" : null,
  "ordervalue" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}

```

## 检查实体处理逻辑主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdelogics/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">applyflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展状态|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">timerpolicy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|定时触发策略|
|<el-row justify="space-between"><el-col :span="20">last_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最后运行状态|
|<el-row justify="space-between"><el-col :span="20">eventmodel</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事件模型|
|<el-row justify="space-between"><el-col :span="20">events</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控事件|
|<el-row justify="space-between"><el-col :span="20">ignoreexception</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|忽略异常|
|<el-row justify="space-between"><el-col :span="20">threadmode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|线程模式|
|<el-row justify="space-between"><el-col :span="20">last_start_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|最后运行时间|
|<el-row justify="space-between"><el-col :span="20">psdelogicparams</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑参数|
|<el-row justify="space-between"><el-col :span="20">psdelogicnodes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑节点|
|<el-row justify="space-between"><el-col :span="20">psdelogiclinks</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑连接|
|<el-row justify="space-between"><el-col :span="20">webhookurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|WebHook地址|
|<el-row justify="space-between"><el-col :span="20">success_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">success_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">failure_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">failure_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">logicsubtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|逻辑子类|
|<el-row justify="space-between"><el-col :span="20">logictag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记|
|<el-row justify="space-between"><el-col :span="20">logictag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记2|
|<el-row justify="space-between"><el-col :span="20">logictag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记3|
|<el-row justify="space-between"><el-col :span="20">logictag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记4|
|<el-row justify="space-between"><el-col :span="20">logictype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑类型|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|附加次序|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelogicid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">psdelogicname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|规则名称|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记4|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "eventmodel" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "psdelogicparams" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "webhookurl" : null,
  "success_per" : null,
  "success_rate" : null,
  "failure_per" : null,
  "failure_rate" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictag" : null,
  "logictag2" : null,
  "logictag3" : null,
  "logictag4" : null,
  "logictype" : null,
  "memo" : null,
  "ordervalue" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
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

## 获取实体处理逻辑草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdelogics/getdraft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">applyflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展状态|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">timerpolicy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|定时触发策略|
|<el-row justify="space-between"><el-col :span="20">last_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最后运行状态|
|<el-row justify="space-between"><el-col :span="20">eventmodel</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事件模型|
|<el-row justify="space-between"><el-col :span="20">events</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控事件|
|<el-row justify="space-between"><el-col :span="20">ignoreexception</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|忽略异常|
|<el-row justify="space-between"><el-col :span="20">threadmode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|线程模式|
|<el-row justify="space-between"><el-col :span="20">last_start_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|最后运行时间|
|<el-row justify="space-between"><el-col :span="20">psdelogicparams</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑参数|
|<el-row justify="space-between"><el-col :span="20">psdelogicnodes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑节点|
|<el-row justify="space-between"><el-col :span="20">psdelogiclinks</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑连接|
|<el-row justify="space-between"><el-col :span="20">webhookurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|WebHook地址|
|<el-row justify="space-between"><el-col :span="20">success_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">success_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">failure_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">failure_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">logicsubtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|逻辑子类|
|<el-row justify="space-between"><el-col :span="20">logictag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记|
|<el-row justify="space-between"><el-col :span="20">logictag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记2|
|<el-row justify="space-between"><el-col :span="20">logictag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记3|
|<el-row justify="space-between"><el-col :span="20">logictag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记4|
|<el-row justify="space-between"><el-col :span="20">logictype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑类型|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|附加次序|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelogicid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">psdelogicname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|规则名称|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记4|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "eventmodel" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "psdelogicparams" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "webhookurl" : null,
  "success_per" : null,
  "success_rate" : null,
  "failure_per" : null,
  "failure_rate" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictag" : null,
  "logictag2" : null,
  "logictag3" : null,
  "logictag4" : null,
  "logictype" : null,
  "memo" : null,
  "ordervalue" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "eventmodel" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "psdelogicparams" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "webhookurl" : null,
  "success_per" : null,
  "success_rate" : null,
  "failure_per" : null,
  "failure_rate" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictag" : null,
  "logictag2" : null,
  "logictag3" : null,
  "logictag4" : null,
  "logictype" : null,
  "memo" : null,
  "ordervalue" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}

```

## 保存实体处理逻辑

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdelogics/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">applyflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展状态|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">timerpolicy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|定时触发策略|
|<el-row justify="space-between"><el-col :span="20">last_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最后运行状态|
|<el-row justify="space-between"><el-col :span="20">eventmodel</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事件模型|
|<el-row justify="space-between"><el-col :span="20">events</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控事件|
|<el-row justify="space-between"><el-col :span="20">ignoreexception</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|忽略异常|
|<el-row justify="space-between"><el-col :span="20">threadmode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|线程模式|
|<el-row justify="space-between"><el-col :span="20">last_start_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|最后运行时间|
|<el-row justify="space-between"><el-col :span="20">psdelogicparams</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑参数|
|<el-row justify="space-between"><el-col :span="20">psdelogicnodes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑节点|
|<el-row justify="space-between"><el-col :span="20">psdelogiclinks</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑连接|
|<el-row justify="space-between"><el-col :span="20">webhookurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|WebHook地址|
|<el-row justify="space-between"><el-col :span="20">success_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">success_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">failure_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">failure_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">logicsubtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|逻辑子类|
|<el-row justify="space-between"><el-col :span="20">logictag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记|
|<el-row justify="space-between"><el-col :span="20">logictag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记2|
|<el-row justify="space-between"><el-col :span="20">logictag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记3|
|<el-row justify="space-between"><el-col :span="20">logictag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记4|
|<el-row justify="space-between"><el-col :span="20">logictype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑类型|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|附加次序|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelogicid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">psdelogicname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|规则名称|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记4|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "eventmodel" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "psdelogicparams" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "webhookurl" : null,
  "success_per" : null,
  "success_rate" : null,
  "failure_per" : null,
  "failure_rate" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictag" : null,
  "logictag2" : null,
  "logictag3" : null,
  "logictag4" : null,
  "logictype" : null,
  "memo" : null,
  "ordervalue" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "eventmodel" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "psdelogicparams" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "webhookurl" : null,
  "success_per" : null,
  "success_rate" : null,
  "failure_per" : null,
  "failure_rate" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictag" : null,
  "logictag2" : null,
  "logictag3" : null,
  "logictag4" : null,
  "logictype" : null,
  "memo" : null,
  "ordervalue" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
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
<el-alert title="/psdelogics/{key}/apply" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">applyflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展状态|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">timerpolicy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|定时触发策略|
|<el-row justify="space-between"><el-col :span="20">last_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最后运行状态|
|<el-row justify="space-between"><el-col :span="20">eventmodel</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事件模型|
|<el-row justify="space-between"><el-col :span="20">events</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控事件|
|<el-row justify="space-between"><el-col :span="20">ignoreexception</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|忽略异常|
|<el-row justify="space-between"><el-col :span="20">threadmode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|线程模式|
|<el-row justify="space-between"><el-col :span="20">last_start_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|最后运行时间|
|<el-row justify="space-between"><el-col :span="20">psdelogicparams</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑参数|
|<el-row justify="space-between"><el-col :span="20">psdelogicnodes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑节点|
|<el-row justify="space-between"><el-col :span="20">psdelogiclinks</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑连接|
|<el-row justify="space-between"><el-col :span="20">webhookurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|WebHook地址|
|<el-row justify="space-between"><el-col :span="20">success_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">success_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">failure_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">failure_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">logicsubtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|逻辑子类|
|<el-row justify="space-between"><el-col :span="20">logictag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记|
|<el-row justify="space-between"><el-col :span="20">logictag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记2|
|<el-row justify="space-between"><el-col :span="20">logictag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记3|
|<el-row justify="space-between"><el-col :span="20">logictag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记4|
|<el-row justify="space-between"><el-col :span="20">logictype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑类型|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|附加次序|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelogicid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">psdelogicname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|规则名称|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记4|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "eventmodel" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "psdelogicparams" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "webhookurl" : null,
  "success_per" : null,
  "success_rate" : null,
  "failure_per" : null,
  "failure_rate" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictag" : null,
  "logictag2" : null,
  "logictag3" : null,
  "logictag4" : null,
  "logictype" : null,
  "memo" : null,
  "ordervalue" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```



## 禁用

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdelogics/{key}/disable" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">applyflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展状态|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">timerpolicy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|定时触发策略|
|<el-row justify="space-between"><el-col :span="20">last_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最后运行状态|
|<el-row justify="space-between"><el-col :span="20">eventmodel</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事件模型|
|<el-row justify="space-between"><el-col :span="20">events</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控事件|
|<el-row justify="space-between"><el-col :span="20">ignoreexception</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|忽略异常|
|<el-row justify="space-between"><el-col :span="20">threadmode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|线程模式|
|<el-row justify="space-between"><el-col :span="20">last_start_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|最后运行时间|
|<el-row justify="space-between"><el-col :span="20">psdelogicparams</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑参数|
|<el-row justify="space-between"><el-col :span="20">psdelogicnodes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑节点|
|<el-row justify="space-between"><el-col :span="20">psdelogiclinks</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑连接|
|<el-row justify="space-between"><el-col :span="20">webhookurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|WebHook地址|
|<el-row justify="space-between"><el-col :span="20">success_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">success_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">failure_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">failure_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">logicsubtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|逻辑子类|
|<el-row justify="space-between"><el-col :span="20">logictag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记|
|<el-row justify="space-between"><el-col :span="20">logictag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记2|
|<el-row justify="space-between"><el-col :span="20">logictag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记3|
|<el-row justify="space-between"><el-col :span="20">logictag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记4|
|<el-row justify="space-between"><el-col :span="20">logictype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑类型|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|附加次序|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelogicid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">psdelogicname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|规则名称|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记4|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "eventmodel" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "psdelogicparams" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "webhookurl" : null,
  "success_per" : null,
  "success_rate" : null,
  "failure_per" : null,
  "failure_rate" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictag" : null,
  "logictag2" : null,
  "logictag3" : null,
  "logictag4" : null,
  "logictype" : null,
  "memo" : null,
  "ordervalue" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```



## 启用

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdelogics/{key}/enable" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">applyflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展状态|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">attachtopsdeactionname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定行为|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">attachtopsdedatasetname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|附加到指定数据集|
|<el-row justify="space-between"><el-col :span="20">timerpolicy</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|定时触发策略|
|<el-row justify="space-between"><el-col :span="20">last_state</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|最后运行状态|
|<el-row justify="space-between"><el-col :span="20">eventmodel</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事件模型|
|<el-row justify="space-between"><el-col :span="20">events</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控事件|
|<el-row justify="space-between"><el-col :span="20">ignoreexception</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|忽略异常|
|<el-row justify="space-between"><el-col :span="20">threadmode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|线程模式|
|<el-row justify="space-between"><el-col :span="20">last_start_at</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|最后运行时间|
|<el-row justify="space-between"><el-col :span="20">psdelogicparams</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑参数|
|<el-row justify="space-between"><el-col :span="20">psdelogicnodes</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑节点|
|<el-row justify="space-between"><el-col :span="20">psdelogiclinks</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|逻辑连接|
|<el-row justify="space-between"><el-col :span="20">webhookurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|WebHook地址|
|<el-row justify="space-between"><el-col :span="20">success_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">success_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|成功率|
|<el-row justify="space-between"><el-col :span="20">failure_per</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">failure_rate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|失败率|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码标识|
|<el-row justify="space-between"><el-col :span="20">logicsubtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|逻辑子类|
|<el-row justify="space-between"><el-col :span="20">logictag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记|
|<el-row justify="space-between"><el-col :span="20">logictag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记2|
|<el-row justify="space-between"><el-col :span="20">logictag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记3|
|<el-row justify="space-between"><el-col :span="20">logictag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑标记4|
|<el-row justify="space-between"><el-col :span="20">logictype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑类型|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">ordervalue</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|附加次序|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelogicid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">psdelogicname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|规则名称|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记4|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">extension_tag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记|
|<el-row justify="space-between"><el-col :span="20">extension_tag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记2|
|<el-row justify="space-between"><el-col :span="20">extension_tag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记3|
|<el-row justify="space-between"><el-col :span="20">extension_tag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|扩展标记4|



##### 请求示例： {docsify-ignore}
```json
{
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "eventmodel" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "psdelogicparams" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "webhookurl" : null,
  "success_per" : null,
  "success_rate" : null,
  "failure_per" : null,
  "failure_rate" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictag" : null,
  "logictag2" : null,
  "logictag3" : null,
  "logictag4" : null,
  "logictype" : null,
  "memo" : null,
  "ordervalue" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```



## 获取最后运行信息

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdelogics/{key}/get_last_run_info" type="info" :closable="false" ></el-alert>
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
  "applyflag" : null,
  "attachtopsdeactionid" : null,
  "attachtopsdeactionname" : null,
  "dynamodelflag" : null,
  "attachtopsdedatasetid" : null,
  "attachtopsdedatasetname" : null,
  "timerpolicy" : null,
  "last_state" : null,
  "eventmodel" : null,
  "events" : null,
  "ignoreexception" : null,
  "threadmode" : null,
  "last_start_at" : null,
  "psdelogicparams" : null,
  "psdelogicnodes" : null,
  "psdelogiclinks" : null,
  "webhookurl" : null,
  "success_per" : null,
  "success_rate" : null,
  "failure_per" : null,
  "failure_rate" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "logicsubtype" : null,
  "logictag" : null,
  "logictag2" : null,
  "logictag3" : null,
  "logictag4" : null,
  "logictype" : null,
  "memo" : null,
  "ordervalue" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
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
<el-alert title="/psdelogics/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_applyflag_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展状态|
|<el-row justify="space-between"><el-col :span="20">n_dynamodelflag_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">n_logicsubtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑子类|
|<el-row justify="space-between"><el-col :span="20">n_logicsubtype_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑子类|
|<el-row justify="space-between"><el-col :span="20">n_logicsubtype_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|逻辑子类|
|<el-row justify="space-between"><el-col :span="20">n_psdeid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">n_psdelogicid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体处理逻辑标识|
|<el-row justify="space-between"><el-col :span="20">n_psdelogicname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|规则名称|
|<el-row justify="space-between"><el-col :span="20">n_psdename_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">n_psdename_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_applyflag_eq" : null,
  "n_dynamodelflag_eq" : null,
  "n_logicsubtype_eq" : null,
  "n_logicsubtype_in" : null,
  "n_logicsubtype_noteq" : null,
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
    "applyflag" : null,
    "attachtopsdeactionid" : null,
    "attachtopsdeactionname" : null,
    "dynamodelflag" : null,
    "attachtopsdedatasetid" : null,
    "attachtopsdedatasetname" : null,
    "timerpolicy" : null,
    "last_state" : null,
    "eventmodel" : null,
    "events" : null,
    "ignoreexception" : null,
    "threadmode" : null,
    "last_start_at" : null,
    "psdelogicparams" : null,
    "psdelogicnodes" : null,
    "psdelogiclinks" : null,
    "webhookurl" : null,
    "success_per" : null,
    "success_rate" : null,
    "failure_per" : null,
    "failure_rate" : null,
    "codename" : null,
    "createdate" : null,
    "createman" : null,
    "logicsubtype" : null,
    "logictag" : null,
    "logictag2" : null,
    "logictag3" : null,
    "logictag4" : null,
    "logictype" : null,
    "memo" : null,
    "ordervalue" : null,
    "psdeid" : null,
    "psdelogicid" : null,
    "psdelogicname" : null,
    "psdename" : null,
    "updatedate" : null,
    "updateman" : null,
    "usertag" : null,
    "usertag2" : null,
    "usertag3" : null,
    "usertag4" : null,
    "validflag" : null,
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
<el-alert title="/psdelogics/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdelogics/exportdata/{param},/psdelogics/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdelogics/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdelogics/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdelogics/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdelogics/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdelogics/report" type="info" :closable="false" ></el-alert>
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