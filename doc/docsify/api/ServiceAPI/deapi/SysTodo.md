# 待办(SysTodo) :id=SysTodo
## 创建待办

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">num</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务单号|
|<el-row justify="space-between"><el-col :span="20">bizkey</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务数据标识|
|<el-row justify="space-between"><el-col :span="20">biztype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务对象|
|<el-row justify="space-between"><el-col :span="20">clobparam01</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|长文本参数01|
|<el-row justify="space-between"><el-col :span="20">clobparam02</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|长文本参数02|
|<el-row justify="space-between"><el-col :span="20">content</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|内容|
|<el-row justify="space-between"><el-col :span="20">createmanname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上一环节处理人|
|<el-row justify="space-between"><el-col :span="20">dcsystemid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|租户系统标识|
|<el-row justify="space-between"><el-col :span="20">dcsystemname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|租户系统名称|
|<el-row justify="space-between"><el-col :span="20">duedate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|过期时间|
|<el-row justify="space-between"><el-col :span="20">isread</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已读|
|<el-row justify="space-between"><el-col :span="20">linkurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|连接地址|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织机构标识|
|<el-row justify="space-between"><el-col :span="20">param01</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数01|
|<el-row justify="space-between"><el-col :span="20">param02</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数02|
|<el-row justify="space-between"><el-col :span="20">param03</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数03|
|<el-row justify="space-between"><el-col :span="20">param04</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数04|
|<el-row justify="space-between"><el-col :span="20">param05</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数05|
|<el-row justify="space-between"><el-col :span="20">param06</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数06|
|<el-row justify="space-between"><el-col :span="20">param07</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数07|
|<el-row justify="space-between"><el-col :span="20">param08</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数08|
|<el-row justify="space-between"><el-col :span="20">param09</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数09|
|<el-row justify="space-between"><el-col :span="20">processdate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|处理时间|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">todoid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|待办标识|
|<el-row justify="space-between"><el-col :span="20">todostate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办状态|
|<el-row justify="space-between"><el-col :span="20">todosubtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办子类|
|<el-row justify="space-between"><el-col :span="20">todotype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办类型|
|<el-row justify="space-between"><el-col :span="20">todourltype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办地址类型|
|<el-row justify="space-between"><el-col :span="20">updatemanname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|更新人|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|待办用户标识|



##### 请求示例： {docsify-ignore}
```json
{
  "num" : null,
  "bizkey" : null,
  "biztype" : null,
  "clobparam01" : null,
  "clobparam02" : null,
  "content" : null,
  "createdate" : null,
  "createman" : null,
  "createmanname" : null,
  "dcsystemid" : null,
  "dcsystemname" : null,
  "duedate" : null,
  "isread" : null,
  "linkurl" : null,
  "orgid" : null,
  "param01" : null,
  "param02" : null,
  "param03" : null,
  "param04" : null,
  "param05" : null,
  "param06" : null,
  "param07" : null,
  "param08" : null,
  "param09" : null,
  "processdate" : null,
  "title" : null,
  "todoid" : null,
  "todostate" : null,
  "todosubtype" : null,
  "todotype" : null,
  "todourltype" : null,
  "updatedate" : null,
  "updateman" : null,
  "updatemanname" : null,
  "userid" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "num" : null,
  "bizkey" : null,
  "biztype" : null,
  "clobparam01" : null,
  "clobparam02" : null,
  "content" : null,
  "createdate" : null,
  "createman" : null,
  "createmanname" : null,
  "dcsystemid" : null,
  "dcsystemname" : null,
  "duedate" : null,
  "isread" : null,
  "linkurl" : null,
  "orgid" : null,
  "param01" : null,
  "param02" : null,
  "param03" : null,
  "param04" : null,
  "param05" : null,
  "param06" : null,
  "param07" : null,
  "param08" : null,
  "param09" : null,
  "processdate" : null,
  "title" : null,
  "todoid" : null,
  "todostate" : null,
  "todosubtype" : null,
  "todotype" : null,
  "todourltype" : null,
  "updatedate" : null,
  "updateman" : null,
  "updatemanname" : null,
  "userid" : null,
}

```

## 获取待办

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|待办标识|




##### 响应示例： {docsify-ignore}
```json

{
  "num" : null,
  "bizkey" : null,
  "biztype" : null,
  "clobparam01" : null,
  "clobparam02" : null,
  "content" : null,
  "createdate" : null,
  "createman" : null,
  "createmanname" : null,
  "dcsystemid" : null,
  "dcsystemname" : null,
  "duedate" : null,
  "isread" : null,
  "linkurl" : null,
  "orgid" : null,
  "param01" : null,
  "param02" : null,
  "param03" : null,
  "param04" : null,
  "param05" : null,
  "param06" : null,
  "param07" : null,
  "param08" : null,
  "param09" : null,
  "processdate" : null,
  "title" : null,
  "todoid" : null,
  "todostate" : null,
  "todosubtype" : null,
  "todotype" : null,
  "todourltype" : null,
  "updatedate" : null,
  "updateman" : null,
  "updatemanname" : null,
  "userid" : null,
}

```

## 删除待办

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|待办标识|





## 更新待办

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|待办标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">num</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务单号|
|<el-row justify="space-between"><el-col :span="20">bizkey</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务数据标识|
|<el-row justify="space-between"><el-col :span="20">biztype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务对象|
|<el-row justify="space-between"><el-col :span="20">clobparam01</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|长文本参数01|
|<el-row justify="space-between"><el-col :span="20">clobparam02</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|长文本参数02|
|<el-row justify="space-between"><el-col :span="20">content</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|内容|
|<el-row justify="space-between"><el-col :span="20">createmanname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上一环节处理人|
|<el-row justify="space-between"><el-col :span="20">dcsystemid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|租户系统标识|
|<el-row justify="space-between"><el-col :span="20">dcsystemname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|租户系统名称|
|<el-row justify="space-between"><el-col :span="20">duedate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|过期时间|
|<el-row justify="space-between"><el-col :span="20">isread</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已读|
|<el-row justify="space-between"><el-col :span="20">linkurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|连接地址|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织机构标识|
|<el-row justify="space-between"><el-col :span="20">param01</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数01|
|<el-row justify="space-between"><el-col :span="20">param02</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数02|
|<el-row justify="space-between"><el-col :span="20">param03</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数03|
|<el-row justify="space-between"><el-col :span="20">param04</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数04|
|<el-row justify="space-between"><el-col :span="20">param05</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数05|
|<el-row justify="space-between"><el-col :span="20">param06</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数06|
|<el-row justify="space-between"><el-col :span="20">param07</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数07|
|<el-row justify="space-between"><el-col :span="20">param08</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数08|
|<el-row justify="space-between"><el-col :span="20">param09</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数09|
|<el-row justify="space-between"><el-col :span="20">processdate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|处理时间|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">todoid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|待办标识|
|<el-row justify="space-between"><el-col :span="20">todostate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办状态|
|<el-row justify="space-between"><el-col :span="20">todosubtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办子类|
|<el-row justify="space-between"><el-col :span="20">todotype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办类型|
|<el-row justify="space-between"><el-col :span="20">todourltype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办地址类型|
|<el-row justify="space-between"><el-col :span="20">updatemanname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|更新人|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|待办用户标识|



##### 请求示例： {docsify-ignore}
```json
{
  "num" : null,
  "bizkey" : null,
  "biztype" : null,
  "clobparam01" : null,
  "clobparam02" : null,
  "content" : null,
  "createdate" : null,
  "createman" : null,
  "createmanname" : null,
  "dcsystemid" : null,
  "dcsystemname" : null,
  "duedate" : null,
  "isread" : null,
  "linkurl" : null,
  "orgid" : null,
  "param01" : null,
  "param02" : null,
  "param03" : null,
  "param04" : null,
  "param05" : null,
  "param06" : null,
  "param07" : null,
  "param08" : null,
  "param09" : null,
  "processdate" : null,
  "title" : null,
  "todoid" : null,
  "todostate" : null,
  "todosubtype" : null,
  "todotype" : null,
  "todourltype" : null,
  "updatedate" : null,
  "updateman" : null,
  "updatemanname" : null,
  "userid" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "num" : null,
  "bizkey" : null,
  "biztype" : null,
  "clobparam01" : null,
  "clobparam02" : null,
  "content" : null,
  "createdate" : null,
  "createman" : null,
  "createmanname" : null,
  "dcsystemid" : null,
  "dcsystemname" : null,
  "duedate" : null,
  "isread" : null,
  "linkurl" : null,
  "orgid" : null,
  "param01" : null,
  "param02" : null,
  "param03" : null,
  "param04" : null,
  "param05" : null,
  "param06" : null,
  "param07" : null,
  "param08" : null,
  "param09" : null,
  "processdate" : null,
  "title" : null,
  "todoid" : null,
  "todostate" : null,
  "todosubtype" : null,
  "todotype" : null,
  "todourltype" : null,
  "updatedate" : null,
  "updateman" : null,
  "updatemanname" : null,
  "userid" : null,
}

```

## 检查待办主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">num</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务单号|
|<el-row justify="space-between"><el-col :span="20">bizkey</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务数据标识|
|<el-row justify="space-between"><el-col :span="20">biztype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务对象|
|<el-row justify="space-between"><el-col :span="20">clobparam01</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|长文本参数01|
|<el-row justify="space-between"><el-col :span="20">clobparam02</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|长文本参数02|
|<el-row justify="space-between"><el-col :span="20">content</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|内容|
|<el-row justify="space-between"><el-col :span="20">createmanname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上一环节处理人|
|<el-row justify="space-between"><el-col :span="20">dcsystemid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|租户系统标识|
|<el-row justify="space-between"><el-col :span="20">dcsystemname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|租户系统名称|
|<el-row justify="space-between"><el-col :span="20">duedate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|过期时间|
|<el-row justify="space-between"><el-col :span="20">isread</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已读|
|<el-row justify="space-between"><el-col :span="20">linkurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|连接地址|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织机构标识|
|<el-row justify="space-between"><el-col :span="20">param01</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数01|
|<el-row justify="space-between"><el-col :span="20">param02</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数02|
|<el-row justify="space-between"><el-col :span="20">param03</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数03|
|<el-row justify="space-between"><el-col :span="20">param04</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数04|
|<el-row justify="space-between"><el-col :span="20">param05</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数05|
|<el-row justify="space-between"><el-col :span="20">param06</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数06|
|<el-row justify="space-between"><el-col :span="20">param07</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数07|
|<el-row justify="space-between"><el-col :span="20">param08</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数08|
|<el-row justify="space-between"><el-col :span="20">param09</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数09|
|<el-row justify="space-between"><el-col :span="20">processdate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|处理时间|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">todoid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|待办标识|
|<el-row justify="space-between"><el-col :span="20">todostate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办状态|
|<el-row justify="space-between"><el-col :span="20">todosubtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办子类|
|<el-row justify="space-between"><el-col :span="20">todotype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办类型|
|<el-row justify="space-between"><el-col :span="20">todourltype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办地址类型|
|<el-row justify="space-between"><el-col :span="20">updatemanname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|更新人|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|待办用户标识|



##### 请求示例： {docsify-ignore}
```json
{
  "num" : null,
  "bizkey" : null,
  "biztype" : null,
  "clobparam01" : null,
  "clobparam02" : null,
  "content" : null,
  "createdate" : null,
  "createman" : null,
  "createmanname" : null,
  "dcsystemid" : null,
  "dcsystemname" : null,
  "duedate" : null,
  "isread" : null,
  "linkurl" : null,
  "orgid" : null,
  "param01" : null,
  "param02" : null,
  "param03" : null,
  "param04" : null,
  "param05" : null,
  "param06" : null,
  "param07" : null,
  "param08" : null,
  "param09" : null,
  "processdate" : null,
  "title" : null,
  "todoid" : null,
  "todostate" : null,
  "todosubtype" : null,
  "todotype" : null,
  "todourltype" : null,
  "updatedate" : null,
  "updateman" : null,
  "updatemanname" : null,
  "userid" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取待办草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos/getdraft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">num</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务单号|
|<el-row justify="space-between"><el-col :span="20">bizkey</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务数据标识|
|<el-row justify="space-between"><el-col :span="20">biztype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务对象|
|<el-row justify="space-between"><el-col :span="20">clobparam01</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|长文本参数01|
|<el-row justify="space-between"><el-col :span="20">clobparam02</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|长文本参数02|
|<el-row justify="space-between"><el-col :span="20">content</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|内容|
|<el-row justify="space-between"><el-col :span="20">createmanname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上一环节处理人|
|<el-row justify="space-between"><el-col :span="20">dcsystemid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|租户系统标识|
|<el-row justify="space-between"><el-col :span="20">dcsystemname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|租户系统名称|
|<el-row justify="space-between"><el-col :span="20">duedate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|过期时间|
|<el-row justify="space-between"><el-col :span="20">isread</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已读|
|<el-row justify="space-between"><el-col :span="20">linkurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|连接地址|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织机构标识|
|<el-row justify="space-between"><el-col :span="20">param01</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数01|
|<el-row justify="space-between"><el-col :span="20">param02</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数02|
|<el-row justify="space-between"><el-col :span="20">param03</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数03|
|<el-row justify="space-between"><el-col :span="20">param04</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数04|
|<el-row justify="space-between"><el-col :span="20">param05</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数05|
|<el-row justify="space-between"><el-col :span="20">param06</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数06|
|<el-row justify="space-between"><el-col :span="20">param07</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数07|
|<el-row justify="space-between"><el-col :span="20">param08</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数08|
|<el-row justify="space-between"><el-col :span="20">param09</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数09|
|<el-row justify="space-between"><el-col :span="20">processdate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|处理时间|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">todoid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|待办标识|
|<el-row justify="space-between"><el-col :span="20">todostate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办状态|
|<el-row justify="space-between"><el-col :span="20">todosubtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办子类|
|<el-row justify="space-between"><el-col :span="20">todotype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办类型|
|<el-row justify="space-between"><el-col :span="20">todourltype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办地址类型|
|<el-row justify="space-between"><el-col :span="20">updatemanname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|更新人|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|待办用户标识|



##### 请求示例： {docsify-ignore}
```json
{
  "num" : null,
  "bizkey" : null,
  "biztype" : null,
  "clobparam01" : null,
  "clobparam02" : null,
  "content" : null,
  "createdate" : null,
  "createman" : null,
  "createmanname" : null,
  "dcsystemid" : null,
  "dcsystemname" : null,
  "duedate" : null,
  "isread" : null,
  "linkurl" : null,
  "orgid" : null,
  "param01" : null,
  "param02" : null,
  "param03" : null,
  "param04" : null,
  "param05" : null,
  "param06" : null,
  "param07" : null,
  "param08" : null,
  "param09" : null,
  "processdate" : null,
  "title" : null,
  "todoid" : null,
  "todostate" : null,
  "todosubtype" : null,
  "todotype" : null,
  "todourltype" : null,
  "updatedate" : null,
  "updateman" : null,
  "updatemanname" : null,
  "userid" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "num" : null,
  "bizkey" : null,
  "biztype" : null,
  "clobparam01" : null,
  "clobparam02" : null,
  "content" : null,
  "createdate" : null,
  "createman" : null,
  "createmanname" : null,
  "dcsystemid" : null,
  "dcsystemname" : null,
  "duedate" : null,
  "isread" : null,
  "linkurl" : null,
  "orgid" : null,
  "param01" : null,
  "param02" : null,
  "param03" : null,
  "param04" : null,
  "param05" : null,
  "param06" : null,
  "param07" : null,
  "param08" : null,
  "param09" : null,
  "processdate" : null,
  "title" : null,
  "todoid" : null,
  "todostate" : null,
  "todosubtype" : null,
  "todotype" : null,
  "todourltype" : null,
  "updatedate" : null,
  "updateman" : null,
  "updatemanname" : null,
  "userid" : null,
}

```

## GetLinkUrl

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos/{key}/getlinkurl" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|待办标识|




##### 响应示例： {docsify-ignore}
```json

{
  "num" : null,
  "bizkey" : null,
  "biztype" : null,
  "clobparam01" : null,
  "clobparam02" : null,
  "content" : null,
  "createdate" : null,
  "createman" : null,
  "createmanname" : null,
  "dcsystemid" : null,
  "dcsystemname" : null,
  "duedate" : null,
  "isread" : null,
  "linkurl" : null,
  "orgid" : null,
  "param01" : null,
  "param02" : null,
  "param03" : null,
  "param04" : null,
  "param05" : null,
  "param06" : null,
  "param07" : null,
  "param08" : null,
  "param09" : null,
  "processdate" : null,
  "title" : null,
  "todoid" : null,
  "todostate" : null,
  "todosubtype" : null,
  "todotype" : null,
  "todourltype" : null,
  "updatedate" : null,
  "updateman" : null,
  "updatemanname" : null,
  "userid" : null,
}

```

## 保存待办

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">num</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务单号|
|<el-row justify="space-between"><el-col :span="20">bizkey</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务数据标识|
|<el-row justify="space-between"><el-col :span="20">biztype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|业务对象|
|<el-row justify="space-between"><el-col :span="20">clobparam01</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|长文本参数01|
|<el-row justify="space-between"><el-col :span="20">clobparam02</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|长文本参数02|
|<el-row justify="space-between"><el-col :span="20">content</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|内容|
|<el-row justify="space-between"><el-col :span="20">createmanname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|上一环节处理人|
|<el-row justify="space-between"><el-col :span="20">dcsystemid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|租户系统标识|
|<el-row justify="space-between"><el-col :span="20">dcsystemname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|租户系统名称|
|<el-row justify="space-between"><el-col :span="20">duedate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|过期时间|
|<el-row justify="space-between"><el-col :span="20">isread</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已读|
|<el-row justify="space-between"><el-col :span="20">linkurl</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|连接地址|
|<el-row justify="space-between"><el-col :span="20">orgid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织机构标识|
|<el-row justify="space-between"><el-col :span="20">param01</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数01|
|<el-row justify="space-between"><el-col :span="20">param02</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数02|
|<el-row justify="space-between"><el-col :span="20">param03</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数03|
|<el-row justify="space-between"><el-col :span="20">param04</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数04|
|<el-row justify="space-between"><el-col :span="20">param05</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数05|
|<el-row justify="space-between"><el-col :span="20">param06</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数06|
|<el-row justify="space-between"><el-col :span="20">param07</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数07|
|<el-row justify="space-between"><el-col :span="20">param08</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数08|
|<el-row justify="space-between"><el-col :span="20">param09</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|参数09|
|<el-row justify="space-between"><el-col :span="20">processdate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|处理时间|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">todoid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|待办标识|
|<el-row justify="space-between"><el-col :span="20">todostate</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办状态|
|<el-row justify="space-between"><el-col :span="20">todosubtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办子类|
|<el-row justify="space-between"><el-col :span="20">todotype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办类型|
|<el-row justify="space-between"><el-col :span="20">todourltype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办地址类型|
|<el-row justify="space-between"><el-col :span="20">updatemanname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|更新人|
|<el-row justify="space-between"><el-col :span="20">userid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|待办用户标识|



##### 请求示例： {docsify-ignore}
```json
{
  "num" : null,
  "bizkey" : null,
  "biztype" : null,
  "clobparam01" : null,
  "clobparam02" : null,
  "content" : null,
  "createdate" : null,
  "createman" : null,
  "createmanname" : null,
  "dcsystemid" : null,
  "dcsystemname" : null,
  "duedate" : null,
  "isread" : null,
  "linkurl" : null,
  "orgid" : null,
  "param01" : null,
  "param02" : null,
  "param03" : null,
  "param04" : null,
  "param05" : null,
  "param06" : null,
  "param07" : null,
  "param08" : null,
  "param09" : null,
  "processdate" : null,
  "title" : null,
  "todoid" : null,
  "todostate" : null,
  "todosubtype" : null,
  "todotype" : null,
  "todourltype" : null,
  "updatedate" : null,
  "updateman" : null,
  "updatemanname" : null,
  "userid" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "num" : null,
  "bizkey" : null,
  "biztype" : null,
  "clobparam01" : null,
  "clobparam02" : null,
  "content" : null,
  "createdate" : null,
  "createman" : null,
  "createmanname" : null,
  "dcsystemid" : null,
  "dcsystemname" : null,
  "duedate" : null,
  "isread" : null,
  "linkurl" : null,
  "orgid" : null,
  "param01" : null,
  "param02" : null,
  "param03" : null,
  "param04" : null,
  "param05" : null,
  "param06" : null,
  "param07" : null,
  "param08" : null,
  "param09" : null,
  "processdate" : null,
  "title" : null,
  "todoid" : null,
  "todostate" : null,
  "todosubtype" : null,
  "todotype" : null,
  "todourltype" : null,
  "updatedate" : null,
  "updateman" : null,
  "updatemanname" : null,
  "userid" : null,
}

```

## 当前用户数据

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos/fetchcuruser" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_todoid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办标识|
|<el-row justify="space-between"><el-col :span="20">n_todostate_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办状态|
|<el-row justify="space-between"><el-col :span="20">n_todourltype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办地址类型|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_title_like" : null,
  "n_todoid_eq" : null,
  "n_todostate_eq" : null,
  "n_todourltype_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "num" : null,
    "bizkey" : null,
    "biztype" : null,
    "clobparam01" : null,
    "clobparam02" : null,
    "content" : null,
    "createdate" : null,
    "createman" : null,
    "createmanname" : null,
    "dcsystemid" : null,
    "dcsystemname" : null,
    "duedate" : null,
    "isread" : null,
    "linkurl" : null,
    "orgid" : null,
    "param01" : null,
    "param02" : null,
    "param03" : null,
    "param04" : null,
    "param05" : null,
    "param06" : null,
    "param07" : null,
    "param08" : null,
    "param09" : null,
    "processdate" : null,
    "title" : null,
    "todoid" : null,
    "todostate" : null,
    "todosubtype" : null,
    "todotype" : null,
    "todourltype" : null,
    "updatedate" : null,
    "updateman" : null,
    "updatemanname" : null,
    "userid" : null,
  }
]
```

## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_todoid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办标识|
|<el-row justify="space-between"><el-col :span="20">n_todostate_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办状态|
|<el-row justify="space-between"><el-col :span="20">n_todourltype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|待办地址类型|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_title_like" : null,
  "n_todoid_eq" : null,
  "n_todostate_eq" : null,
  "n_todourltype_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "num" : null,
    "bizkey" : null,
    "biztype" : null,
    "clobparam01" : null,
    "clobparam02" : null,
    "content" : null,
    "createdate" : null,
    "createman" : null,
    "createmanname" : null,
    "dcsystemid" : null,
    "dcsystemname" : null,
    "duedate" : null,
    "isread" : null,
    "linkurl" : null,
    "orgid" : null,
    "param01" : null,
    "param02" : null,
    "param03" : null,
    "param04" : null,
    "param05" : null,
    "param06" : null,
    "param07" : null,
    "param08" : null,
    "param09" : null,
    "processdate" : null,
    "title" : null,
    "todoid" : null,
    "todostate" : null,
    "todosubtype" : null,
    "todotype" : null,
    "todourltype" : null,
    "updatedate" : null,
    "updateman" : null,
    "updatemanname" : null,
    "userid" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/systodos/exportdata/{param},/systodos/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/systodos/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/systodos/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/systodos/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/systodos/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/systodos/report" type="info" :closable="false" ></el-alert>
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