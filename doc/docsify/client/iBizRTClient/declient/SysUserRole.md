# null(SysUserRole) :id=SysUserRole
## CheckKey

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysuserroles" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|userroleid|String|UserRoleId|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|userid|String|UserId|
|roleid|String|RoleId|
|createman|String|CreateMan|
|createmanname|String|CreateManName|
|isvalid|Integer|IsValid|
|updateman|String|UpdateMan|
|updatemanname|String|UpdateManName|



##### 请求示例： {docsify-ignore}
```json
{
  "userroleid" : null,
  "createdate" : null,
  "updatedate" : null,
  "userid" : null,
  "roleid" : null,
  "createman" : null,
  "createmanname" : null,
  "isvalid" : null,
  "updateman" : null,
  "updatemanname" : null,
}
```


## Create

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysuserroles" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|userroleid|String|UserRoleId|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|userid|String|UserId|
|roleid|String|RoleId|
|createman|String|CreateMan|
|createmanname|String|CreateManName|
|isvalid|Integer|IsValid|
|updateman|String|UpdateMan|
|updatemanname|String|UpdateManName|



##### 请求示例： {docsify-ignore}
```json
{
  "userroleid" : null,
  "createdate" : null,
  "updatedate" : null,
  "userid" : null,
  "roleid" : null,
  "createman" : null,
  "createmanname" : null,
  "isvalid" : null,
  "updateman" : null,
  "updatemanname" : null,
}
```


## Get

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysuserroles/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/sysuserroles" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|userroleid|String|UserRoleId|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|userid|String|UserId|
|roleid|String|RoleId|
|createman|String|CreateMan|
|createmanname|String|CreateManName|
|isvalid|Integer|IsValid|
|updateman|String|UpdateMan|
|updatemanname|String|UpdateManName|



##### 请求示例： {docsify-ignore}
```json
{
  "userroleid" : null,
  "createdate" : null,
  "updatedate" : null,
  "userid" : null,
  "roleid" : null,
  "createman" : null,
  "createmanname" : null,
  "isvalid" : null,
  "updateman" : null,
  "updatemanname" : null,
}
```


## Remove

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysuserroles/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|




## SYS_USER_ROLE__DEACTION__SAVE

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysuserroles/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
用于映射ebsx接口save（携带key），标准模式接口不输出key，如：/entity/{key}/save

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|




## Update

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysuserroles/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|userroleid|String|UserRoleId|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|userid|String|UserId|
|roleid|String|RoleId|
|createman|String|CreateMan|
|createmanname|String|CreateManName|
|isvalid|Integer|IsValid|
|updateman|String|UpdateMan|
|updatemanname|String|UpdateManName|



##### 请求示例： {docsify-ignore}
```json
{
  "userroleid" : null,
  "createdate" : null,
  "updatedate" : null,
  "userid" : null,
  "roleid" : null,
  "createman" : null,
  "createmanname" : null,
  "isvalid" : null,
  "updateman" : null,
  "updatemanname" : null,
}
```


## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysuserroles" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|n_sys_user_roleid_eq|String|N_SYS_USER_ROLEID_EQ|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_sys_user_roleid_eq" : null,
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