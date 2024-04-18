# 实体通知(PSDENotify) :id=PSDENotify
## 创建实体通知

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdenotifies" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">beginpsdefid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|开始时间属性|
|<el-row justify="space-between"><el-col :span="20">beginpsdefname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|开始时间属性|
|<el-row justify="space-between"><el-col :span="20">checktimer</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|检查间隔|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">customcond</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|自定义条件|
|<el-row justify="space-between"><el-col :span="20">endpsdefid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|结束时间属性|
|<el-row justify="space-between"><el-col :span="20">endpsdefname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|结束时间属性|
|<el-row justify="space-between"><el-col :span="20">events</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控事件集|
|<el-row justify="space-between"><el-col :span="20">fields</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控变化属性集|
|<el-row justify="space-between"><el-col :span="20">msgtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|通知消息类型|
|<el-row justify="space-between"><el-col :span="20">notifyend</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|延后通知间隔|
|<el-row justify="space-between"><el-col :span="20">notifystart</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|提前通知间隔|
|<el-row justify="space-between"><el-col :span="20">notifysubtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知子类|
|<el-row justify="space-between"><el-col :span="20">notifytag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知标记|
|<el-row justify="space-between"><el-col :span="20">notifytag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知标记2|
|<el-row justify="space-between"><el-col :span="20">psdedsid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据集|
|<el-row justify="space-between"><el-col :span="20">psdedsname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据集|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdenotifyid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体通知标识|
|<el-row justify="space-between"><el-col :span="20">psdenotifyname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体通知名称|
|<el-row justify="space-between"><el-col :span="20">pssysmsgqueueid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统消息队列|
|<el-row justify="space-between"><el-col :span="20">pssysmsgqueuename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统消息队列|
|<el-row justify="space-between"><el-col :span="20">pssysmsgtemplid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统消息模板|
|<el-row justify="space-between"><el-col :span="20">pssysmsgtemplname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统消息模板|
|<el-row justify="space-between"><el-col :span="20">taskmode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|附加任务模式|
|<el-row justify="space-between"><el-col :span="20">timermode</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|定时触发模式|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识4|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">psdenotifytargets</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|null|



##### 请求示例： {docsify-ignore}
```json
{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "psdenotifytargets" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "psdenotifytargets" : null,
}

```

## 获取实体通知

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdenotifies/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|实体通知标识|




##### 响应示例： {docsify-ignore}
```json

{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "psdenotifytargets" : null,
}

```

## 删除实体通知

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdenotifies/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|实体通知标识|





## 更新实体通知

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdenotifies/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|实体通知标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">beginpsdefid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|开始时间属性|
|<el-row justify="space-between"><el-col :span="20">beginpsdefname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|开始时间属性|
|<el-row justify="space-between"><el-col :span="20">checktimer</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|检查间隔|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">customcond</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|自定义条件|
|<el-row justify="space-between"><el-col :span="20">endpsdefid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|结束时间属性|
|<el-row justify="space-between"><el-col :span="20">endpsdefname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|结束时间属性|
|<el-row justify="space-between"><el-col :span="20">events</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控事件集|
|<el-row justify="space-between"><el-col :span="20">fields</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控变化属性集|
|<el-row justify="space-between"><el-col :span="20">msgtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|通知消息类型|
|<el-row justify="space-between"><el-col :span="20">notifyend</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|延后通知间隔|
|<el-row justify="space-between"><el-col :span="20">notifystart</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|提前通知间隔|
|<el-row justify="space-between"><el-col :span="20">notifysubtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知子类|
|<el-row justify="space-between"><el-col :span="20">notifytag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知标记|
|<el-row justify="space-between"><el-col :span="20">notifytag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知标记2|
|<el-row justify="space-between"><el-col :span="20">psdedsid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据集|
|<el-row justify="space-between"><el-col :span="20">psdedsname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据集|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdenotifyid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体通知标识|
|<el-row justify="space-between"><el-col :span="20">psdenotifyname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体通知名称|
|<el-row justify="space-between"><el-col :span="20">pssysmsgqueueid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统消息队列|
|<el-row justify="space-between"><el-col :span="20">pssysmsgqueuename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统消息队列|
|<el-row justify="space-between"><el-col :span="20">pssysmsgtemplid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统消息模板|
|<el-row justify="space-between"><el-col :span="20">pssysmsgtemplname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统消息模板|
|<el-row justify="space-between"><el-col :span="20">taskmode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|附加任务模式|
|<el-row justify="space-between"><el-col :span="20">timermode</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|定时触发模式|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识4|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">psdenotifytargets</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|null|



##### 请求示例： {docsify-ignore}
```json
{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "psdenotifytargets" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "psdenotifytargets" : null,
}

```

## 检查实体通知主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdenotifies/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">beginpsdefid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|开始时间属性|
|<el-row justify="space-between"><el-col :span="20">beginpsdefname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|开始时间属性|
|<el-row justify="space-between"><el-col :span="20">checktimer</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|检查间隔|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">customcond</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|自定义条件|
|<el-row justify="space-between"><el-col :span="20">endpsdefid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|结束时间属性|
|<el-row justify="space-between"><el-col :span="20">endpsdefname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|结束时间属性|
|<el-row justify="space-between"><el-col :span="20">events</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控事件集|
|<el-row justify="space-between"><el-col :span="20">fields</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控变化属性集|
|<el-row justify="space-between"><el-col :span="20">msgtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|通知消息类型|
|<el-row justify="space-between"><el-col :span="20">notifyend</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|延后通知间隔|
|<el-row justify="space-between"><el-col :span="20">notifystart</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|提前通知间隔|
|<el-row justify="space-between"><el-col :span="20">notifysubtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知子类|
|<el-row justify="space-between"><el-col :span="20">notifytag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知标记|
|<el-row justify="space-between"><el-col :span="20">notifytag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知标记2|
|<el-row justify="space-between"><el-col :span="20">psdedsid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据集|
|<el-row justify="space-between"><el-col :span="20">psdedsname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据集|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdenotifyid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体通知标识|
|<el-row justify="space-between"><el-col :span="20">psdenotifyname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体通知名称|
|<el-row justify="space-between"><el-col :span="20">pssysmsgqueueid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统消息队列|
|<el-row justify="space-between"><el-col :span="20">pssysmsgqueuename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统消息队列|
|<el-row justify="space-between"><el-col :span="20">pssysmsgtemplid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统消息模板|
|<el-row justify="space-between"><el-col :span="20">pssysmsgtemplname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统消息模板|
|<el-row justify="space-between"><el-col :span="20">taskmode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|附加任务模式|
|<el-row justify="space-between"><el-col :span="20">timermode</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|定时触发模式|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识4|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">psdenotifytargets</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|null|



##### 请求示例： {docsify-ignore}
```json
{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "psdenotifytargets" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取实体通知草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdenotifies/getdraft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">beginpsdefid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|开始时间属性|
|<el-row justify="space-between"><el-col :span="20">beginpsdefname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|开始时间属性|
|<el-row justify="space-between"><el-col :span="20">checktimer</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|检查间隔|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">customcond</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|自定义条件|
|<el-row justify="space-between"><el-col :span="20">endpsdefid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|结束时间属性|
|<el-row justify="space-between"><el-col :span="20">endpsdefname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|结束时间属性|
|<el-row justify="space-between"><el-col :span="20">events</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控事件集|
|<el-row justify="space-between"><el-col :span="20">fields</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控变化属性集|
|<el-row justify="space-between"><el-col :span="20">msgtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|通知消息类型|
|<el-row justify="space-between"><el-col :span="20">notifyend</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|延后通知间隔|
|<el-row justify="space-between"><el-col :span="20">notifystart</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|提前通知间隔|
|<el-row justify="space-between"><el-col :span="20">notifysubtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知子类|
|<el-row justify="space-between"><el-col :span="20">notifytag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知标记|
|<el-row justify="space-between"><el-col :span="20">notifytag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知标记2|
|<el-row justify="space-between"><el-col :span="20">psdedsid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据集|
|<el-row justify="space-between"><el-col :span="20">psdedsname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据集|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdenotifyid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体通知标识|
|<el-row justify="space-between"><el-col :span="20">psdenotifyname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体通知名称|
|<el-row justify="space-between"><el-col :span="20">pssysmsgqueueid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统消息队列|
|<el-row justify="space-between"><el-col :span="20">pssysmsgqueuename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统消息队列|
|<el-row justify="space-between"><el-col :span="20">pssysmsgtemplid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统消息模板|
|<el-row justify="space-between"><el-col :span="20">pssysmsgtemplname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统消息模板|
|<el-row justify="space-between"><el-col :span="20">taskmode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|附加任务模式|
|<el-row justify="space-between"><el-col :span="20">timermode</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|定时触发模式|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识4|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">psdenotifytargets</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|null|



##### 请求示例： {docsify-ignore}
```json
{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "psdenotifytargets" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "psdenotifytargets" : null,
}

```

## 保存实体通知

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdenotifies/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">beginpsdefid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|开始时间属性|
|<el-row justify="space-between"><el-col :span="20">beginpsdefname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|开始时间属性|
|<el-row justify="space-between"><el-col :span="20">checktimer</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|检查间隔|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">customcond</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|自定义条件|
|<el-row justify="space-between"><el-col :span="20">endpsdefid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|结束时间属性|
|<el-row justify="space-between"><el-col :span="20">endpsdefname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|结束时间属性|
|<el-row justify="space-between"><el-col :span="20">events</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控事件集|
|<el-row justify="space-between"><el-col :span="20">fields</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控变化属性集|
|<el-row justify="space-between"><el-col :span="20">msgtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|通知消息类型|
|<el-row justify="space-between"><el-col :span="20">notifyend</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|延后通知间隔|
|<el-row justify="space-between"><el-col :span="20">notifystart</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|提前通知间隔|
|<el-row justify="space-between"><el-col :span="20">notifysubtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知子类|
|<el-row justify="space-between"><el-col :span="20">notifytag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知标记|
|<el-row justify="space-between"><el-col :span="20">notifytag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知标记2|
|<el-row justify="space-between"><el-col :span="20">psdedsid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据集|
|<el-row justify="space-between"><el-col :span="20">psdedsname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据集|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdenotifyid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体通知标识|
|<el-row justify="space-between"><el-col :span="20">psdenotifyname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体通知名称|
|<el-row justify="space-between"><el-col :span="20">pssysmsgqueueid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统消息队列|
|<el-row justify="space-between"><el-col :span="20">pssysmsgqueuename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统消息队列|
|<el-row justify="space-between"><el-col :span="20">pssysmsgtemplid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统消息模板|
|<el-row justify="space-between"><el-col :span="20">pssysmsgtemplname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统消息模板|
|<el-row justify="space-between"><el-col :span="20">taskmode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|附加任务模式|
|<el-row justify="space-between"><el-col :span="20">timermode</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|定时触发模式|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识4|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">psdenotifytargets</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|null|



##### 请求示例： {docsify-ignore}
```json
{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "psdenotifytargets" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "psdenotifytargets" : null,
}

```

## 应用

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdenotifies/{key}/apply" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|实体通知标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">beginpsdefid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|开始时间属性|
|<el-row justify="space-between"><el-col :span="20">beginpsdefname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|开始时间属性|
|<el-row justify="space-between"><el-col :span="20">checktimer</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|检查间隔|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">customcond</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|自定义条件|
|<el-row justify="space-between"><el-col :span="20">endpsdefid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|结束时间属性|
|<el-row justify="space-between"><el-col :span="20">endpsdefname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|结束时间属性|
|<el-row justify="space-between"><el-col :span="20">events</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控事件集|
|<el-row justify="space-between"><el-col :span="20">fields</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|监控变化属性集|
|<el-row justify="space-between"><el-col :span="20">msgtype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|通知消息类型|
|<el-row justify="space-between"><el-col :span="20">notifyend</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|延后通知间隔|
|<el-row justify="space-between"><el-col :span="20">notifystart</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|提前通知间隔|
|<el-row justify="space-between"><el-col :span="20">notifysubtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知子类|
|<el-row justify="space-between"><el-col :span="20">notifytag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知标记|
|<el-row justify="space-between"><el-col :span="20">notifytag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知标记2|
|<el-row justify="space-between"><el-col :span="20">psdedsid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据集|
|<el-row justify="space-between"><el-col :span="20">psdedsname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据集|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdenotifyid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|实体通知标识|
|<el-row justify="space-between"><el-col :span="20">psdenotifyname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体通知名称|
|<el-row justify="space-between"><el-col :span="20">pssysmsgqueueid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统消息队列|
|<el-row justify="space-between"><el-col :span="20">pssysmsgqueuename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统消息队列|
|<el-row justify="space-between"><el-col :span="20">pssysmsgtemplid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统消息模板|
|<el-row justify="space-between"><el-col :span="20">pssysmsgtemplname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统消息模板|
|<el-row justify="space-between"><el-col :span="20">taskmode</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|附加任务模式|
|<el-row justify="space-between"><el-col :span="20">timermode</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|定时触发模式|
|<el-row justify="space-between"><el-col :span="20">usertag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识|
|<el-row justify="space-between"><el-col :span="20">usertag2</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识2|
|<el-row justify="space-between"><el-col :span="20">usertag3</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识3|
|<el-row justify="space-between"><el-col :span="20">usertag4</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标识4|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|启用|
|<el-row justify="space-between"><el-col :span="20">psdenotifytargets</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|null|



##### 请求示例： {docsify-ignore}
```json
{
  "beginpsdefid" : null,
  "beginpsdefname" : null,
  "checktimer" : null,
  "codename" : null,
  "customcond" : null,
  "endpsdefid" : null,
  "endpsdefname" : null,
  "events" : null,
  "fields" : null,
  "msgtype" : null,
  "notifyend" : null,
  "notifystart" : null,
  "notifysubtype" : null,
  "notifytag" : null,
  "notifytag2" : null,
  "psdedsid" : null,
  "psdedsname" : null,
  "psdeid" : null,
  "psdename" : null,
  "psdenotifyid" : null,
  "psdenotifyname" : null,
  "pssysmsgqueueid" : null,
  "pssysmsgqueuename" : null,
  "pssysmsgtemplid" : null,
  "pssysmsgtemplname" : null,
  "taskmode" : null,
  "timermode" : null,
  "usertag" : null,
  "usertag2" : null,
  "usertag3" : null,
  "usertag4" : null,
  "validflag" : null,
  "create_man" : null,
  "create_time" : null,
  "update_man" : null,
  "update_time" : null,
  "psdenotifytargets" : null,
}
```



## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdenotifies/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_notifysubtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|通知子类|
|<el-row justify="space-between"><el-col :span="20">n_psdeid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">n_psdenotifyid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体通知标识|
|<el-row justify="space-between"><el-col :span="20">n_psdenotifyname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体通知名称|
|<el-row justify="space-between"><el-col :span="20">n_taskmode_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|附加任务模式|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_notifysubtype_eq" : null,
  "n_psdeid_eq" : null,
  "n_psdenotifyid_eq" : null,
  "n_psdenotifyname_like" : null,
  "n_taskmode_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "beginpsdefid" : null,
    "beginpsdefname" : null,
    "checktimer" : null,
    "codename" : null,
    "customcond" : null,
    "endpsdefid" : null,
    "endpsdefname" : null,
    "events" : null,
    "fields" : null,
    "msgtype" : null,
    "notifyend" : null,
    "notifystart" : null,
    "notifysubtype" : null,
    "notifytag" : null,
    "notifytag2" : null,
    "psdedsid" : null,
    "psdedsname" : null,
    "psdeid" : null,
    "psdename" : null,
    "psdenotifyid" : null,
    "psdenotifyname" : null,
    "pssysmsgqueueid" : null,
    "pssysmsgqueuename" : null,
    "pssysmsgtemplid" : null,
    "pssysmsgtemplname" : null,
    "taskmode" : null,
    "timermode" : null,
    "usertag" : null,
    "usertag2" : null,
    "usertag3" : null,
    "usertag4" : null,
    "validflag" : null,
    "create_man" : null,
    "create_time" : null,
    "update_man" : null,
    "update_time" : null,
    "psdenotifytargets" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psdenotifies/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdenotifies/exportdata/{param},/psdenotifies/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdenotifies/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdenotifies/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdenotifies/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdenotifies/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psdenotifies/report" type="info" :closable="false" ></el-alert>
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