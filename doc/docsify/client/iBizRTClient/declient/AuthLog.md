# 认证日志(AuthLog) :id=AuthLog
## CheckKey

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/authlogs" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|logid|String|LogId|
|username|String|UserName|
|personname|String|PersonName|
|domain|String|Domain|
|authtime|Timestamp|AuthTime|
|ipaddr|String|IPAddr|
|macaddr|String|MacAddr|
|useragent|String|UserAgent|
|authcode|String|AuthCode|



##### 请求示例： {docsify-ignore}
```json
{
  "logid" : null,
  "username" : null,
  "personname" : null,
  "domain" : null,
  "authtime" : null,
  "ipaddr" : null,
  "macaddr" : null,
  "useragent" : null,
  "authcode" : null,
}
```


## Create

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/authlogs" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|logid|String|LogId|
|username|String|UserName|
|personname|String|PersonName|
|domain|String|Domain|
|authtime|Timestamp|AuthTime|
|ipaddr|String|IPAddr|
|macaddr|String|MacAddr|
|useragent|String|UserAgent|
|authcode|String|AuthCode|



##### 请求示例： {docsify-ignore}
```json
{
  "logid" : null,
  "username" : null,
  "personname" : null,
  "domain" : null,
  "authtime" : null,
  "ipaddr" : null,
  "macaddr" : null,
  "useragent" : null,
  "authcode" : null,
}
```


## Get

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/authlogs/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/authlogs" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|logid|String|LogId|
|username|String|UserName|
|personname|String|PersonName|
|domain|String|Domain|
|authtime|Timestamp|AuthTime|
|ipaddr|String|IPAddr|
|macaddr|String|MacAddr|
|useragent|String|UserAgent|
|authcode|String|AuthCode|



##### 请求示例： {docsify-ignore}
```json
{
  "logid" : null,
  "username" : null,
  "personname" : null,
  "domain" : null,
  "authtime" : null,
  "ipaddr" : null,
  "macaddr" : null,
  "useragent" : null,
  "authcode" : null,
}
```


## Remove

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/authlogs/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/authlogs" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|logid|String|LogId|
|username|String|UserName|
|personname|String|PersonName|
|domain|String|Domain|
|authtime|Timestamp|AuthTime|
|ipaddr|String|IPAddr|
|macaddr|String|MacAddr|
|useragent|String|UserAgent|
|authcode|String|AuthCode|



##### 请求示例： {docsify-ignore}
```json
{
  "logid" : null,
  "username" : null,
  "personname" : null,
  "domain" : null,
  "authtime" : null,
  "ipaddr" : null,
  "macaddr" : null,
  "useragent" : null,
  "authcode" : null,
}
```


## Update

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/authlogs/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|logid|String|LogId|
|username|String|UserName|
|personname|String|PersonName|
|domain|String|Domain|
|authtime|Timestamp|AuthTime|
|ipaddr|String|IPAddr|
|macaddr|String|MacAddr|
|useragent|String|UserAgent|
|authcode|String|AuthCode|



##### 请求示例： {docsify-ignore}
```json
{
  "logid" : null,
  "username" : null,
  "personname" : null,
  "domain" : null,
  "authtime" : null,
  "ipaddr" : null,
  "macaddr" : null,
  "useragent" : null,
  "authcode" : null,
}
```


## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/authlogs" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|n_authcode_eq|String|N_AUTHCODE_EQ|
|n_logid_eq|String|N_LOGID_EQ|
|n_username_like|String|N_USERNAME_LIKE|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_authcode_eq" : null,
  "n_logid_eq" : null,
  "n_username_like" : null,
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