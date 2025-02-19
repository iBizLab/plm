# 系统角色(SysRole) :id=SysRole
## CheckKey

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysroles" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|roleid|String|RoleId|
|rolename|String|RoleName|
|memo|String|Memo|
|proleid|String|PRoleId|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|createman|String|CreateMan|
|updateman|String|UpdateMan|
|authorizeall|Integer|AuthorizeAll|
|dcsystemid|String|DCSystemId|
|globalflag|Integer|GlobalFlag|
|roletag|String|RoleTag|
|systemflag|Integer|SystemFlag|
|usermode|String|UserMode|



##### 请求示例： {docsify-ignore}
```json
{
  "roleid" : null,
  "rolename" : null,
  "memo" : null,
  "proleid" : null,
  "createdate" : null,
  "updatedate" : null,
  "createman" : null,
  "updateman" : null,
  "authorizeall" : null,
  "dcsystemid" : null,
  "globalflag" : null,
  "roletag" : null,
  "systemflag" : null,
  "usermode" : null,
}
```


## Create

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysroles" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|roleid|String|RoleId|
|rolename|String|RoleName|
|memo|String|Memo|
|proleid|String|PRoleId|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|createman|String|CreateMan|
|updateman|String|UpdateMan|
|authorizeall|Integer|AuthorizeAll|
|dcsystemid|String|DCSystemId|
|globalflag|Integer|GlobalFlag|
|roletag|String|RoleTag|
|systemflag|Integer|SystemFlag|
|usermode|String|UserMode|



##### 请求示例： {docsify-ignore}
```json
{
  "roleid" : null,
  "rolename" : null,
  "memo" : null,
  "proleid" : null,
  "createdate" : null,
  "updatedate" : null,
  "createman" : null,
  "updateman" : null,
  "authorizeall" : null,
  "dcsystemid" : null,
  "globalflag" : null,
  "roletag" : null,
  "systemflag" : null,
  "usermode" : null,
}
```


## Get

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysroles/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/sysroles" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|roleid|String|RoleId|
|rolename|String|RoleName|
|memo|String|Memo|
|proleid|String|PRoleId|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|createman|String|CreateMan|
|updateman|String|UpdateMan|
|authorizeall|Integer|AuthorizeAll|
|dcsystemid|String|DCSystemId|
|globalflag|Integer|GlobalFlag|
|roletag|String|RoleTag|
|systemflag|Integer|SystemFlag|
|usermode|String|UserMode|



##### 请求示例： {docsify-ignore}
```json
{
  "roleid" : null,
  "rolename" : null,
  "memo" : null,
  "proleid" : null,
  "createdate" : null,
  "updatedate" : null,
  "createman" : null,
  "updateman" : null,
  "authorizeall" : null,
  "dcsystemid" : null,
  "globalflag" : null,
  "roletag" : null,
  "systemflag" : null,
  "usermode" : null,
}
```


## Remove

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysroles/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|




## SYS_ROLE__DEACTION__SAVE

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysroles/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/sysroles/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|roleid|String|RoleId|
|rolename|String|RoleName|
|memo|String|Memo|
|proleid|String|PRoleId|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|createman|String|CreateMan|
|updateman|String|UpdateMan|
|authorizeall|Integer|AuthorizeAll|
|dcsystemid|String|DCSystemId|
|globalflag|Integer|GlobalFlag|
|roletag|String|RoleTag|
|systemflag|Integer|SystemFlag|
|usermode|String|UserMode|



##### 请求示例： {docsify-ignore}
```json
{
  "roleid" : null,
  "rolename" : null,
  "memo" : null,
  "proleid" : null,
  "createdate" : null,
  "updatedate" : null,
  "createman" : null,
  "updateman" : null,
  "authorizeall" : null,
  "dcsystemid" : null,
  "globalflag" : null,
  "roletag" : null,
  "systemflag" : null,
  "usermode" : null,
}
```


## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysroles" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|n_sys_roleid_eq|String|N_SYS_ROLEID_EQ|
|n_sys_rolename_like|String|N_SYS_ROLENAME_LIKE|
|n_usermode_eq|String|N_USERMODE_EQ|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_sys_roleid_eq" : null,
  "n_sys_rolename_like" : null,
  "n_usermode_eq" : null,
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