# null(SysOrganization) :id=SysOrganization
## CheckKey

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysorganizations" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|parentorgid|String|ParentOrgId|
|parentorgname|String|ParentOrgName|
|orgid|String|OrgId|
|updatedate|Timestamp|UpdateDate|
|showorder|Integer|ShowOrder|
|isvalid|Integer|IsValid|
|shortname|String|ShortName|
|orgname|String|OrgName|
|createdate|Timestamp|CreateDate|
|orgcode|String|OrgCode|



##### 请求示例： {docsify-ignore}
```json
{
  "parentorgid" : null,
  "parentorgname" : null,
  "orgid" : null,
  "updatedate" : null,
  "showorder" : null,
  "isvalid" : null,
  "shortname" : null,
  "orgname" : null,
  "createdate" : null,
  "orgcode" : null,
}
```


## Create

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysorganizations" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|parentorgid|String|ParentOrgId|
|parentorgname|String|ParentOrgName|
|orgid|String|OrgId|
|updatedate|Timestamp|UpdateDate|
|showorder|Integer|ShowOrder|
|isvalid|Integer|IsValid|
|shortname|String|ShortName|
|orgname|String|OrgName|
|createdate|Timestamp|CreateDate|
|orgcode|String|OrgCode|



##### 请求示例： {docsify-ignore}
```json
{
  "parentorgid" : null,
  "parentorgname" : null,
  "orgid" : null,
  "updatedate" : null,
  "showorder" : null,
  "isvalid" : null,
  "shortname" : null,
  "orgname" : null,
  "createdate" : null,
  "orgcode" : null,
}
```


## Get

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysorganizations/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/sysorganizations" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|parentorgid|String|ParentOrgId|
|parentorgname|String|ParentOrgName|
|orgid|String|OrgId|
|updatedate|Timestamp|UpdateDate|
|showorder|Integer|ShowOrder|
|isvalid|Integer|IsValid|
|shortname|String|ShortName|
|orgname|String|OrgName|
|createdate|Timestamp|CreateDate|
|orgcode|String|OrgCode|



##### 请求示例： {docsify-ignore}
```json
{
  "parentorgid" : null,
  "parentorgname" : null,
  "orgid" : null,
  "updatedate" : null,
  "showorder" : null,
  "isvalid" : null,
  "shortname" : null,
  "orgname" : null,
  "createdate" : null,
  "orgcode" : null,
}
```


## Remove

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysorganizations/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|




## SYS_ORG__DEACTION__SAVE

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysorganizations/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/sysorganizations/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|parentorgid|String|ParentOrgId|
|parentorgname|String|ParentOrgName|
|orgid|String|OrgId|
|updatedate|Timestamp|UpdateDate|
|showorder|Integer|ShowOrder|
|isvalid|Integer|IsValid|
|shortname|String|ShortName|
|orgname|String|OrgName|
|createdate|Timestamp|CreateDate|
|orgcode|String|OrgCode|



##### 请求示例： {docsify-ignore}
```json
{
  "parentorgid" : null,
  "parentorgname" : null,
  "orgid" : null,
  "updatedate" : null,
  "showorder" : null,
  "isvalid" : null,
  "shortname" : null,
  "orgname" : null,
  "createdate" : null,
  "orgcode" : null,
}
```


## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysorganizations" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|n_orgid_eq|String|N_ORGID_EQ|
|n_orgname_like|String|N_ORGNAME_LIKE|
|n_porgid_eq|String|N_PORGID_EQ|
|n_porgname_eq|String|N_PORGNAME_EQ|
|n_porgname_like|String|N_PORGNAME_LIKE|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_orgid_eq" : null,
  "n_orgname_like" : null,
  "n_porgid_eq" : null,
  "n_porgname_eq" : null,
  "n_porgname_like" : null,
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