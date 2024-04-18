# 部门(SysDepartment) :id=SysDepartment
## CheckKey

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysdepartments" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|deptid|String|DeptId|
|deptcode|String|DeptCode|
|deptname|String|DeptName|
|parentdeptid|String|ParentDeptId|
|shortname|String|ShortName|
|deptlevel|Integer|DeptLevel|
|domains|String|Domains|
|showorder|Integer|ShowOrder|
|bcode|String|BCode|
|leaderid|String|LeaderId|
|leadername|String|LeaderName|
|orgid|String|OrgId|
|orgname|String|OrgName|
|parentdeptname|String|ParentDeptName|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|reserver|String|Reserver|
|reserver10|String|Reserver10|
|reserver11|Integer|Reserver11|
|reserver12|Integer|Reserver12|
|reserver13|Integer|Reserver13|
|reserver14|Integer|Reserver14|
|reserver15|BigDecimal|Reserver15|
|reserver16|BigDecimal|Reserver16|
|reserver17|BigDecimal|Reserver17|
|reserver18|BigDecimal|Reserver18|
|reserver19|Timestamp|Reserver19|
|reserver2|String|Reserver2|
|reserver20|Timestamp|Reserver20|
|reserver3|String|Reserver3|
|reserver4|String|Reserver4|
|reserver5|String|Reserver5|
|reserver6|String|Reserver6|
|reserver7|String|Reserver7|
|reserver8|String|Reserver8|
|reserver9|String|Reserver9|
|dddeptid|String|DDDeptId|
|deptfullname|String|DeptFullName|
|deptleader|String|DeptLeader|
|deptleaderid|String|DeptLeaderId|
|isvalid|Integer|IsValid|
|wxworkdeptid|String|WXWorkDeptId|



##### 请求示例： {docsify-ignore}
```json
{
  "deptid" : null,
  "deptcode" : null,
  "deptname" : null,
  "parentdeptid" : null,
  "shortname" : null,
  "deptlevel" : null,
  "domains" : null,
  "showorder" : null,
  "bcode" : null,
  "leaderid" : null,
  "leadername" : null,
  "orgid" : null,
  "orgname" : null,
  "parentdeptname" : null,
  "createdate" : null,
  "updatedate" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "dddeptid" : null,
  "deptfullname" : null,
  "deptleader" : null,
  "deptleaderid" : null,
  "isvalid" : null,
  "wxworkdeptid" : null,
}
```


## Create

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysdepartments" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|deptid|String|DeptId|
|deptcode|String|DeptCode|
|deptname|String|DeptName|
|parentdeptid|String|ParentDeptId|
|shortname|String|ShortName|
|deptlevel|Integer|DeptLevel|
|domains|String|Domains|
|showorder|Integer|ShowOrder|
|bcode|String|BCode|
|leaderid|String|LeaderId|
|leadername|String|LeaderName|
|orgid|String|OrgId|
|orgname|String|OrgName|
|parentdeptname|String|ParentDeptName|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|reserver|String|Reserver|
|reserver10|String|Reserver10|
|reserver11|Integer|Reserver11|
|reserver12|Integer|Reserver12|
|reserver13|Integer|Reserver13|
|reserver14|Integer|Reserver14|
|reserver15|BigDecimal|Reserver15|
|reserver16|BigDecimal|Reserver16|
|reserver17|BigDecimal|Reserver17|
|reserver18|BigDecimal|Reserver18|
|reserver19|Timestamp|Reserver19|
|reserver2|String|Reserver2|
|reserver20|Timestamp|Reserver20|
|reserver3|String|Reserver3|
|reserver4|String|Reserver4|
|reserver5|String|Reserver5|
|reserver6|String|Reserver6|
|reserver7|String|Reserver7|
|reserver8|String|Reserver8|
|reserver9|String|Reserver9|
|dddeptid|String|DDDeptId|
|deptfullname|String|DeptFullName|
|deptleader|String|DeptLeader|
|deptleaderid|String|DeptLeaderId|
|isvalid|Integer|IsValid|
|wxworkdeptid|String|WXWorkDeptId|



##### 请求示例： {docsify-ignore}
```json
{
  "deptid" : null,
  "deptcode" : null,
  "deptname" : null,
  "parentdeptid" : null,
  "shortname" : null,
  "deptlevel" : null,
  "domains" : null,
  "showorder" : null,
  "bcode" : null,
  "leaderid" : null,
  "leadername" : null,
  "orgid" : null,
  "orgname" : null,
  "parentdeptname" : null,
  "createdate" : null,
  "updatedate" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "dddeptid" : null,
  "deptfullname" : null,
  "deptleader" : null,
  "deptleaderid" : null,
  "isvalid" : null,
  "wxworkdeptid" : null,
}
```


## Get

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysdepartments/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/sysdepartments" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|deptid|String|DeptId|
|deptcode|String|DeptCode|
|deptname|String|DeptName|
|parentdeptid|String|ParentDeptId|
|shortname|String|ShortName|
|deptlevel|Integer|DeptLevel|
|domains|String|Domains|
|showorder|Integer|ShowOrder|
|bcode|String|BCode|
|leaderid|String|LeaderId|
|leadername|String|LeaderName|
|orgid|String|OrgId|
|orgname|String|OrgName|
|parentdeptname|String|ParentDeptName|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|reserver|String|Reserver|
|reserver10|String|Reserver10|
|reserver11|Integer|Reserver11|
|reserver12|Integer|Reserver12|
|reserver13|Integer|Reserver13|
|reserver14|Integer|Reserver14|
|reserver15|BigDecimal|Reserver15|
|reserver16|BigDecimal|Reserver16|
|reserver17|BigDecimal|Reserver17|
|reserver18|BigDecimal|Reserver18|
|reserver19|Timestamp|Reserver19|
|reserver2|String|Reserver2|
|reserver20|Timestamp|Reserver20|
|reserver3|String|Reserver3|
|reserver4|String|Reserver4|
|reserver5|String|Reserver5|
|reserver6|String|Reserver6|
|reserver7|String|Reserver7|
|reserver8|String|Reserver8|
|reserver9|String|Reserver9|
|dddeptid|String|DDDeptId|
|deptfullname|String|DeptFullName|
|deptleader|String|DeptLeader|
|deptleaderid|String|DeptLeaderId|
|isvalid|Integer|IsValid|
|wxworkdeptid|String|WXWorkDeptId|



##### 请求示例： {docsify-ignore}
```json
{
  "deptid" : null,
  "deptcode" : null,
  "deptname" : null,
  "parentdeptid" : null,
  "shortname" : null,
  "deptlevel" : null,
  "domains" : null,
  "showorder" : null,
  "bcode" : null,
  "leaderid" : null,
  "leadername" : null,
  "orgid" : null,
  "orgname" : null,
  "parentdeptname" : null,
  "createdate" : null,
  "updatedate" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "dddeptid" : null,
  "deptfullname" : null,
  "deptleader" : null,
  "deptleaderid" : null,
  "isvalid" : null,
  "wxworkdeptid" : null,
}
```


## Remove

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysdepartments/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/sysdepartments" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|deptid|String|DeptId|
|deptcode|String|DeptCode|
|deptname|String|DeptName|
|parentdeptid|String|ParentDeptId|
|shortname|String|ShortName|
|deptlevel|Integer|DeptLevel|
|domains|String|Domains|
|showorder|Integer|ShowOrder|
|bcode|String|BCode|
|leaderid|String|LeaderId|
|leadername|String|LeaderName|
|orgid|String|OrgId|
|orgname|String|OrgName|
|parentdeptname|String|ParentDeptName|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|reserver|String|Reserver|
|reserver10|String|Reserver10|
|reserver11|Integer|Reserver11|
|reserver12|Integer|Reserver12|
|reserver13|Integer|Reserver13|
|reserver14|Integer|Reserver14|
|reserver15|BigDecimal|Reserver15|
|reserver16|BigDecimal|Reserver16|
|reserver17|BigDecimal|Reserver17|
|reserver18|BigDecimal|Reserver18|
|reserver19|Timestamp|Reserver19|
|reserver2|String|Reserver2|
|reserver20|Timestamp|Reserver20|
|reserver3|String|Reserver3|
|reserver4|String|Reserver4|
|reserver5|String|Reserver5|
|reserver6|String|Reserver6|
|reserver7|String|Reserver7|
|reserver8|String|Reserver8|
|reserver9|String|Reserver9|
|dddeptid|String|DDDeptId|
|deptfullname|String|DeptFullName|
|deptleader|String|DeptLeader|
|deptleaderid|String|DeptLeaderId|
|isvalid|Integer|IsValid|
|wxworkdeptid|String|WXWorkDeptId|



##### 请求示例： {docsify-ignore}
```json
{
  "deptid" : null,
  "deptcode" : null,
  "deptname" : null,
  "parentdeptid" : null,
  "shortname" : null,
  "deptlevel" : null,
  "domains" : null,
  "showorder" : null,
  "bcode" : null,
  "leaderid" : null,
  "leadername" : null,
  "orgid" : null,
  "orgname" : null,
  "parentdeptname" : null,
  "createdate" : null,
  "updatedate" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "dddeptid" : null,
  "deptfullname" : null,
  "deptleader" : null,
  "deptleaderid" : null,
  "isvalid" : null,
  "wxworkdeptid" : null,
}
```


## Update

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysdepartments/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|deptid|String|DeptId|
|deptcode|String|DeptCode|
|deptname|String|DeptName|
|parentdeptid|String|ParentDeptId|
|shortname|String|ShortName|
|deptlevel|Integer|DeptLevel|
|domains|String|Domains|
|showorder|Integer|ShowOrder|
|bcode|String|BCode|
|leaderid|String|LeaderId|
|leadername|String|LeaderName|
|orgid|String|OrgId|
|orgname|String|OrgName|
|parentdeptname|String|ParentDeptName|
|createdate|Timestamp|CreateDate|
|updatedate|Timestamp|UpdateDate|
|reserver|String|Reserver|
|reserver10|String|Reserver10|
|reserver11|Integer|Reserver11|
|reserver12|Integer|Reserver12|
|reserver13|Integer|Reserver13|
|reserver14|Integer|Reserver14|
|reserver15|BigDecimal|Reserver15|
|reserver16|BigDecimal|Reserver16|
|reserver17|BigDecimal|Reserver17|
|reserver18|BigDecimal|Reserver18|
|reserver19|Timestamp|Reserver19|
|reserver2|String|Reserver2|
|reserver20|Timestamp|Reserver20|
|reserver3|String|Reserver3|
|reserver4|String|Reserver4|
|reserver5|String|Reserver5|
|reserver6|String|Reserver6|
|reserver7|String|Reserver7|
|reserver8|String|Reserver8|
|reserver9|String|Reserver9|
|dddeptid|String|DDDeptId|
|deptfullname|String|DeptFullName|
|deptleader|String|DeptLeader|
|deptleaderid|String|DeptLeaderId|
|isvalid|Integer|IsValid|
|wxworkdeptid|String|WXWorkDeptId|



##### 请求示例： {docsify-ignore}
```json
{
  "deptid" : null,
  "deptcode" : null,
  "deptname" : null,
  "parentdeptid" : null,
  "shortname" : null,
  "deptlevel" : null,
  "domains" : null,
  "showorder" : null,
  "bcode" : null,
  "leaderid" : null,
  "leadername" : null,
  "orgid" : null,
  "orgname" : null,
  "parentdeptname" : null,
  "createdate" : null,
  "updatedate" : null,
  "reserver" : null,
  "reserver10" : null,
  "reserver11" : null,
  "reserver12" : null,
  "reserver13" : null,
  "reserver14" : null,
  "reserver15" : null,
  "reserver16" : null,
  "reserver17" : null,
  "reserver18" : null,
  "reserver19" : null,
  "reserver2" : null,
  "reserver20" : null,
  "reserver3" : null,
  "reserver4" : null,
  "reserver5" : null,
  "reserver6" : null,
  "reserver7" : null,
  "reserver8" : null,
  "reserver9" : null,
  "dddeptid" : null,
  "deptfullname" : null,
  "deptleader" : null,
  "deptleaderid" : null,
  "isvalid" : null,
  "wxworkdeptid" : null,
}
```


## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sysdepartments" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|n_deptid_eq|String|N_DEPTID_EQ|
|n_deptname_like|String|N_DEPTNAME_LIKE|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_deptid_eq" : null,
  "n_deptname_like" : null,
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