# 待办(SysTodo) :id=SysTodo
## CheckKey

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|num|String|Num|
|bizkey|String|BizKey|
|biztype|String|BizType|
|clobparam01|String|ClobParam01|
|clobparam02|String|ClobParam02|
|content|String|Content|
|createdate|Timestamp|CreateDate|
|createman|String|CreateMan|
|createmanname|String|CreateManName|
|dcsystemid|String|DCSystemId|
|dcsystemname|String|DCSystemName|
|duedate|Timestamp|DueDate|
|isread|Integer|IsRead|
|linkurl|String|LinkUrl|
|orgid|String|OrgId|
|param01|String|Param01|
|param02|String|Param02|
|param03|String|Param03|
|param04|String|Param04|
|param05|String|Param05|
|param06|String|Param06|
|param07|String|Param07|
|param08|String|Param08|
|param09|String|Param09|
|processdate|Timestamp|ProcessDate|
|title|String|Title|
|todoid|String|TodoId|
|todostate|String|TodoState|
|todosubtype|String|TodoSubType|
|todotype|String|TodoType|
|todourltype|String|TodoUrlType|
|updatedate|Timestamp|UpdateDate|
|updateman|String|UpdateMan|
|updatemanname|String|UpdateManName|
|userid|String|UserId|



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


## Create

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|num|String|Num|
|bizkey|String|BizKey|
|biztype|String|BizType|
|clobparam01|String|ClobParam01|
|clobparam02|String|ClobParam02|
|content|String|Content|
|createdate|Timestamp|CreateDate|
|createman|String|CreateMan|
|createmanname|String|CreateManName|
|dcsystemid|String|DCSystemId|
|dcsystemname|String|DCSystemName|
|duedate|Timestamp|DueDate|
|isread|Integer|IsRead|
|linkurl|String|LinkUrl|
|orgid|String|OrgId|
|param01|String|Param01|
|param02|String|Param02|
|param03|String|Param03|
|param04|String|Param04|
|param05|String|Param05|
|param06|String|Param06|
|param07|String|Param07|
|param08|String|Param08|
|param09|String|Param09|
|processdate|Timestamp|ProcessDate|
|title|String|Title|
|todoid|String|TodoId|
|todostate|String|TodoState|
|todosubtype|String|TodoSubType|
|todotype|String|TodoType|
|todourltype|String|TodoUrlType|
|updatedate|Timestamp|UpdateDate|
|updateman|String|UpdateMan|
|updatemanname|String|UpdateManName|
|userid|String|UserId|



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


## DelUndo

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|num|String|Num|
|bizkey|String|BizKey|
|biztype|String|BizType|
|clobparam01|String|ClobParam01|
|clobparam02|String|ClobParam02|
|content|String|Content|
|createdate|Timestamp|CreateDate|
|createman|String|CreateMan|
|createmanname|String|CreateManName|
|dcsystemid|String|DCSystemId|
|dcsystemname|String|DCSystemName|
|duedate|Timestamp|DueDate|
|isread|Integer|IsRead|
|linkurl|String|LinkUrl|
|orgid|String|OrgId|
|param01|String|Param01|
|param02|String|Param02|
|param03|String|Param03|
|param04|String|Param04|
|param05|String|Param05|
|param06|String|Param06|
|param07|String|Param07|
|param08|String|Param08|
|param09|String|Param09|
|processdate|Timestamp|ProcessDate|
|title|String|Title|
|todoid|String|TodoId|
|todostate|String|TodoState|
|todosubtype|String|TodoSubType|
|todotype|String|TodoType|
|todourltype|String|TodoUrlType|
|updatedate|Timestamp|UpdateDate|
|updateman|String|UpdateMan|
|updatemanname|String|UpdateManName|
|userid|String|UserId|



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


## Get

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|




## GetDraft

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|num|String|Num|
|bizkey|String|BizKey|
|biztype|String|BizType|
|clobparam01|String|ClobParam01|
|clobparam02|String|ClobParam02|
|content|String|Content|
|createdate|Timestamp|CreateDate|
|createman|String|CreateMan|
|createmanname|String|CreateManName|
|dcsystemid|String|DCSystemId|
|dcsystemname|String|DCSystemName|
|duedate|Timestamp|DueDate|
|isread|Integer|IsRead|
|linkurl|String|LinkUrl|
|orgid|String|OrgId|
|param01|String|Param01|
|param02|String|Param02|
|param03|String|Param03|
|param04|String|Param04|
|param05|String|Param05|
|param06|String|Param06|
|param07|String|Param07|
|param08|String|Param08|
|param09|String|Param09|
|processdate|Timestamp|ProcessDate|
|title|String|Title|
|todoid|String|TodoId|
|todostate|String|TodoState|
|todosubtype|String|TodoSubType|
|todotype|String|TodoType|
|todourltype|String|TodoUrlType|
|updatedate|Timestamp|UpdateDate|
|updateman|String|UpdateMan|
|updatemanname|String|UpdateManName|
|userid|String|UserId|



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


## GetLinkUrl

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|




## Remove

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|




## Save

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|num|String|Num|
|bizkey|String|BizKey|
|biztype|String|BizType|
|clobparam01|String|ClobParam01|
|clobparam02|String|ClobParam02|
|content|String|Content|
|createdate|Timestamp|CreateDate|
|createman|String|CreateMan|
|createmanname|String|CreateManName|
|dcsystemid|String|DCSystemId|
|dcsystemname|String|DCSystemName|
|duedate|Timestamp|DueDate|
|isread|Integer|IsRead|
|linkurl|String|LinkUrl|
|orgid|String|OrgId|
|param01|String|Param01|
|param02|String|Param02|
|param03|String|Param03|
|param04|String|Param04|
|param05|String|Param05|
|param06|String|Param06|
|param07|String|Param07|
|param08|String|Param08|
|param09|String|Param09|
|processdate|Timestamp|ProcessDate|
|title|String|Title|
|todoid|String|TodoId|
|todostate|String|TodoState|
|todosubtype|String|TodoSubType|
|todotype|String|TodoType|
|todourltype|String|TodoUrlType|
|updatedate|Timestamp|UpdateDate|
|updateman|String|UpdateMan|
|updatemanname|String|UpdateManName|
|userid|String|UserId|



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


## Update

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|num|String|Num|
|bizkey|String|BizKey|
|biztype|String|BizType|
|clobparam01|String|ClobParam01|
|clobparam02|String|ClobParam02|
|content|String|Content|
|createdate|Timestamp|CreateDate|
|createman|String|CreateMan|
|createmanname|String|CreateManName|
|dcsystemid|String|DCSystemId|
|dcsystemname|String|DCSystemName|
|duedate|Timestamp|DueDate|
|isread|Integer|IsRead|
|linkurl|String|LinkUrl|
|orgid|String|OrgId|
|param01|String|Param01|
|param02|String|Param02|
|param03|String|Param03|
|param04|String|Param04|
|param05|String|Param05|
|param06|String|Param06|
|param07|String|Param07|
|param08|String|Param08|
|param09|String|Param09|
|processdate|Timestamp|ProcessDate|
|title|String|Title|
|todoid|String|TodoId|
|todostate|String|TodoState|
|todosubtype|String|TodoSubType|
|todotype|String|TodoType|
|todourltype|String|TodoUrlType|
|updatedate|Timestamp|UpdateDate|
|updateman|String|UpdateMan|
|updatemanname|String|UpdateManName|
|userid|String|UserId|



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


## CurUser

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|n_dcsystemid_eq|String|N_DCSYSTEMID_EQ|
|n_title_like|String|N_TITLE_LIKE|
|n_todoid_eq|String|N_TODOID_EQ|
|n_todostate_eq|String|N_TODOSTATE_EQ|
|n_todosubtype_eq|String|N_TODOSUBTYPE_EQ|
|n_todourltype_eq|String|N_TODOURLTYPE_EQ|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_dcsystemid_eq" : null,
  "n_title_like" : null,
  "n_todoid_eq" : null,
  "n_todostate_eq" : null,
  "n_todosubtype_eq" : null,
  "n_todourltype_eq" : null,
}
```


## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/systodos" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|n_dcsystemid_eq|String|N_DCSYSTEMID_EQ|
|n_title_like|String|N_TITLE_LIKE|
|n_todoid_eq|String|N_TODOID_EQ|
|n_todostate_eq|String|N_TODOSTATE_EQ|
|n_todosubtype_eq|String|N_TODOSUBTYPE_EQ|
|n_todourltype_eq|String|N_TODOURLTYPE_EQ|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_dcsystemid_eq" : null,
  "n_title_like" : null,
  "n_todoid_eq" : null,
  "n_todostate_eq" : null,
  "n_todosubtype_eq" : null,
  "n_todourltype_eq" : null,
}
```





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