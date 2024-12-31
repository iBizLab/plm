# 组织(sys_organization) :id=sys_organization
## CheckKey

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_organizations" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|id|String|id|
|organization_name|String|organization_name|
|creator|String|creator|
|create_time|Timestamp|create_time|
|updater|String|updater|
|update_time|Timestamp|update_time|
|dc|String|dc|
|parent_name|String|parent_name|
|organization_number|String|organization_number|
|description|String|description|
|short_name|String|short_name|
|sort|BigInteger|sort|
|parent_id|String|parent_id|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "organization_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "parent_name" : null,
  "organization_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "parent_id" : null,
}
```


## Create

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_organizations" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|id|String|id|
|organization_name|String|organization_name|
|creator|String|creator|
|create_time|Timestamp|create_time|
|updater|String|updater|
|update_time|Timestamp|update_time|
|dc|String|dc|
|parent_name|String|parent_name|
|organization_number|String|organization_number|
|description|String|description|
|short_name|String|short_name|
|sort|BigInteger|sort|
|parent_id|String|parent_id|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "organization_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "parent_name" : null,
  "organization_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "parent_id" : null,
}
```


## Get

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_organizations/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/sys_organizations" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|id|String|id|
|organization_name|String|organization_name|
|creator|String|creator|
|create_time|Timestamp|create_time|
|updater|String|updater|
|update_time|Timestamp|update_time|
|dc|String|dc|
|parent_name|String|parent_name|
|organization_number|String|organization_number|
|description|String|description|
|short_name|String|short_name|
|sort|BigInteger|sort|
|parent_id|String|parent_id|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "organization_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "parent_name" : null,
  "organization_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "parent_id" : null,
}
```


## Remove

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_organizations/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/sys_organizations" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|id|String|id|
|organization_name|String|organization_name|
|creator|String|creator|
|create_time|Timestamp|create_time|
|updater|String|updater|
|update_time|Timestamp|update_time|
|dc|String|dc|
|parent_name|String|parent_name|
|organization_number|String|organization_number|
|description|String|description|
|short_name|String|short_name|
|sort|BigInteger|sort|
|parent_id|String|parent_id|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "organization_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "parent_name" : null,
  "organization_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "parent_id" : null,
}
```


## Update

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_organizations/{key}" type="info" :closable="false" ></el-alert>
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
|organization_name|String|organization_name|
|creator|String|creator|
|create_time|Timestamp|create_time|
|updater|String|updater|
|update_time|Timestamp|update_time|
|dc|String|dc|
|parent_name|String|parent_name|
|organization_number|String|organization_number|
|description|String|description|
|short_name|String|short_name|
|sort|BigInteger|sort|
|parent_id|String|parent_id|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "organization_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "parent_name" : null,
  "organization_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "parent_id" : null,
}
```


## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_organizations" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|n_id_eq|String|N_ID_EQ|
|n_organization_name_like|String|N_ORGANIZATION_NAME_LIKE|
|n_parent_id_eq|String|N_PARENT_ID_EQ|
|n_parent_name_eq|String|N_PARENT_NAME_EQ|
|n_parent_name_like|String|N_PARENT_NAME_LIKE|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_organization_name_like" : null,
  "n_parent_id_eq" : null,
  "n_parent_name_eq" : null,
  "n_parent_name_like" : null,
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