# 部门(sys_department) :id=sys_department
## CheckKey

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_departments" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|id|String|id|
|department_name|String|department_name|
|creator|String|creator|
|create_time|Timestamp|create_time|
|updater|String|updater|
|update_time|Timestamp|update_time|
|dc|String|dc|
|department_number|String|department_number|
|description|String|description|
|short_name|String|short_name|
|sort|BigInteger|sort|
|business_category|String|business_category|
|parent_unit_id|String|parent_unit_id|
|parent_id|String|parent_id|
|parent_unit_name|String|parent_unit_name|
|dn|String|dn|
|parent_name|String|parent_name|
|organization_id|String|organization_id|
|organization_name|String|organization_name|
|organization_number|String|organization_number|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "department_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "department_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "business_category" : null,
  "parent_unit_id" : null,
  "parent_id" : null,
  "parent_unit_name" : null,
  "dn" : null,
  "parent_name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "organization_number" : null,
}
```


## Create

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_departments" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|id|String|id|
|department_name|String|department_name|
|creator|String|creator|
|create_time|Timestamp|create_time|
|updater|String|updater|
|update_time|Timestamp|update_time|
|dc|String|dc|
|department_number|String|department_number|
|description|String|description|
|short_name|String|short_name|
|sort|BigInteger|sort|
|business_category|String|business_category|
|parent_unit_id|String|parent_unit_id|
|parent_id|String|parent_id|
|parent_unit_name|String|parent_unit_name|
|dn|String|dn|
|parent_name|String|parent_name|
|organization_id|String|organization_id|
|organization_name|String|organization_name|
|organization_number|String|organization_number|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "department_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "department_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "business_category" : null,
  "parent_unit_id" : null,
  "parent_id" : null,
  "parent_unit_name" : null,
  "dn" : null,
  "parent_name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "organization_number" : null,
}
```


## Get

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_departments/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/sys_departments" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|id|String|id|
|department_name|String|department_name|
|creator|String|creator|
|create_time|Timestamp|create_time|
|updater|String|updater|
|update_time|Timestamp|update_time|
|dc|String|dc|
|department_number|String|department_number|
|description|String|description|
|short_name|String|short_name|
|sort|BigInteger|sort|
|business_category|String|business_category|
|parent_unit_id|String|parent_unit_id|
|parent_id|String|parent_id|
|parent_unit_name|String|parent_unit_name|
|dn|String|dn|
|parent_name|String|parent_name|
|organization_id|String|organization_id|
|organization_name|String|organization_name|
|organization_number|String|organization_number|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "department_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "department_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "business_category" : null,
  "parent_unit_id" : null,
  "parent_id" : null,
  "parent_unit_name" : null,
  "dn" : null,
  "parent_name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "organization_number" : null,
}
```


## Remove

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_departments/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/sys_departments" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|id|String|id|
|department_name|String|department_name|
|creator|String|creator|
|create_time|Timestamp|create_time|
|updater|String|updater|
|update_time|Timestamp|update_time|
|dc|String|dc|
|department_number|String|department_number|
|description|String|description|
|short_name|String|short_name|
|sort|BigInteger|sort|
|business_category|String|business_category|
|parent_unit_id|String|parent_unit_id|
|parent_id|String|parent_id|
|parent_unit_name|String|parent_unit_name|
|dn|String|dn|
|parent_name|String|parent_name|
|organization_id|String|organization_id|
|organization_name|String|organization_name|
|organization_number|String|organization_number|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "department_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "department_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "business_category" : null,
  "parent_unit_id" : null,
  "parent_id" : null,
  "parent_unit_name" : null,
  "dn" : null,
  "parent_name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "organization_number" : null,
}
```


## Update

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_departments/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|id|String|id|
|department_name|String|department_name|
|creator|String|creator|
|create_time|Timestamp|create_time|
|updater|String|updater|
|update_time|Timestamp|update_time|
|dc|String|dc|
|department_number|String|department_number|
|description|String|description|
|short_name|String|short_name|
|sort|BigInteger|sort|
|business_category|String|business_category|
|parent_unit_id|String|parent_unit_id|
|parent_id|String|parent_id|
|parent_unit_name|String|parent_unit_name|
|dn|String|dn|
|parent_name|String|parent_name|
|organization_id|String|organization_id|
|organization_name|String|organization_name|
|organization_number|String|organization_number|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "department_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "department_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "business_category" : null,
  "parent_unit_id" : null,
  "parent_id" : null,
  "parent_unit_name" : null,
  "dn" : null,
  "parent_name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "organization_number" : null,
}
```


## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_departments" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|n_department_name_like|String|N_DEPARTMENT_NAME_LIKE|
|n_id_eq|String|N_ID_EQ|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_department_name_like" : null,
  "n_id_eq" : null,
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