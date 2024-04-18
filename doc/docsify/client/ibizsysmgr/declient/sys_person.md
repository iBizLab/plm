# 人员(sys_person) :id=sys_person
## CheckKey

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_people" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|creator|String|creator|
|updater|String|updater|
|dc|String|dc|
|display_name|String|display_name|
|user_password|String|user_password|
|employee_number|String|employee_number|
|employee_type|String|employee_type|
|title|String|title|
|mail|String|mail|
|telephone_number|String|telephone_number|
|mobile|String|mobile|
|identification_number|String|identification_number|
|postal_address|String|postal_address|
|description|String|description|
|mdepartment_name|String|mdepartment_name|
|dn|String|dn|
|mdepartment_id|String|Mdepartment_id|
|uid|String|uid|
|avatar|String|avatar|
|create_time|Timestamp|create_time|
|id|String|id|
|update_time|Timestamp|update_time|



##### 请求示例： {docsify-ignore}
```json
{
  "creator" : null,
  "updater" : null,
  "dc" : null,
  "display_name" : null,
  "user_password" : null,
  "employee_number" : null,
  "employee_type" : null,
  "title" : null,
  "mail" : null,
  "telephone_number" : null,
  "mobile" : null,
  "identification_number" : null,
  "postal_address" : null,
  "description" : null,
  "mdepartment_name" : null,
  "dn" : null,
  "mdepartment_id" : null,
  "uid" : null,
  "avatar" : null,
  "create_time" : null,
  "id" : null,
  "update_time" : null,
}
```


## Create

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_people" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|creator|String|creator|
|updater|String|updater|
|dc|String|dc|
|display_name|String|display_name|
|user_password|String|user_password|
|employee_number|String|employee_number|
|employee_type|String|employee_type|
|title|String|title|
|mail|String|mail|
|telephone_number|String|telephone_number|
|mobile|String|mobile|
|identification_number|String|identification_number|
|postal_address|String|postal_address|
|description|String|description|
|mdepartment_name|String|mdepartment_name|
|dn|String|dn|
|mdepartment_id|String|Mdepartment_id|
|uid|String|uid|
|avatar|String|avatar|
|create_time|Timestamp|create_time|
|id|String|id|
|update_time|Timestamp|update_time|



##### 请求示例： {docsify-ignore}
```json
{
  "creator" : null,
  "updater" : null,
  "dc" : null,
  "display_name" : null,
  "user_password" : null,
  "employee_number" : null,
  "employee_type" : null,
  "title" : null,
  "mail" : null,
  "telephone_number" : null,
  "mobile" : null,
  "identification_number" : null,
  "postal_address" : null,
  "description" : null,
  "mdepartment_name" : null,
  "dn" : null,
  "mdepartment_id" : null,
  "uid" : null,
  "avatar" : null,
  "create_time" : null,
  "id" : null,
  "update_time" : null,
}
```


## Get

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_people/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/sys_people" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|creator|String|creator|
|updater|String|updater|
|dc|String|dc|
|display_name|String|display_name|
|user_password|String|user_password|
|employee_number|String|employee_number|
|employee_type|String|employee_type|
|title|String|title|
|mail|String|mail|
|telephone_number|String|telephone_number|
|mobile|String|mobile|
|identification_number|String|identification_number|
|postal_address|String|postal_address|
|description|String|description|
|mdepartment_name|String|mdepartment_name|
|dn|String|dn|
|mdepartment_id|String|Mdepartment_id|
|uid|String|uid|
|avatar|String|avatar|
|create_time|Timestamp|create_time|
|id|String|id|
|update_time|Timestamp|update_time|



##### 请求示例： {docsify-ignore}
```json
{
  "creator" : null,
  "updater" : null,
  "dc" : null,
  "display_name" : null,
  "user_password" : null,
  "employee_number" : null,
  "employee_type" : null,
  "title" : null,
  "mail" : null,
  "telephone_number" : null,
  "mobile" : null,
  "identification_number" : null,
  "postal_address" : null,
  "description" : null,
  "mdepartment_name" : null,
  "dn" : null,
  "mdepartment_id" : null,
  "uid" : null,
  "avatar" : null,
  "create_time" : null,
  "id" : null,
  "update_time" : null,
}
```


## Remove

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_people/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/sys_people" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|creator|String|creator|
|updater|String|updater|
|dc|String|dc|
|display_name|String|display_name|
|user_password|String|user_password|
|employee_number|String|employee_number|
|employee_type|String|employee_type|
|title|String|title|
|mail|String|mail|
|telephone_number|String|telephone_number|
|mobile|String|mobile|
|identification_number|String|identification_number|
|postal_address|String|postal_address|
|description|String|description|
|mdepartment_name|String|mdepartment_name|
|dn|String|dn|
|mdepartment_id|String|Mdepartment_id|
|uid|String|uid|
|avatar|String|avatar|
|create_time|Timestamp|create_time|
|id|String|id|
|update_time|Timestamp|update_time|



##### 请求示例： {docsify-ignore}
```json
{
  "creator" : null,
  "updater" : null,
  "dc" : null,
  "display_name" : null,
  "user_password" : null,
  "employee_number" : null,
  "employee_type" : null,
  "title" : null,
  "mail" : null,
  "telephone_number" : null,
  "mobile" : null,
  "identification_number" : null,
  "postal_address" : null,
  "description" : null,
  "mdepartment_name" : null,
  "dn" : null,
  "mdepartment_id" : null,
  "uid" : null,
  "avatar" : null,
  "create_time" : null,
  "id" : null,
  "update_time" : null,
}
```


## Update

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_people/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|creator|String|creator|
|updater|String|updater|
|dc|String|dc|
|display_name|String|display_name|
|user_password|String|user_password|
|employee_number|String|employee_number|
|employee_type|String|employee_type|
|title|String|title|
|mail|String|mail|
|telephone_number|String|telephone_number|
|mobile|String|mobile|
|identification_number|String|identification_number|
|postal_address|String|postal_address|
|description|String|description|
|mdepartment_name|String|mdepartment_name|
|dn|String|dn|
|mdepartment_id|String|Mdepartment_id|
|uid|String|uid|
|avatar|String|avatar|
|create_time|Timestamp|create_time|
|id|String|id|
|update_time|Timestamp|update_time|



##### 请求示例： {docsify-ignore}
```json
{
  "creator" : null,
  "updater" : null,
  "dc" : null,
  "display_name" : null,
  "user_password" : null,
  "employee_number" : null,
  "employee_type" : null,
  "title" : null,
  "mail" : null,
  "telephone_number" : null,
  "mobile" : null,
  "identification_number" : null,
  "postal_address" : null,
  "description" : null,
  "mdepartment_name" : null,
  "dn" : null,
  "mdepartment_id" : null,
  "uid" : null,
  "avatar" : null,
  "create_time" : null,
  "id" : null,
  "update_time" : null,
}
```


## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_people" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|n_dc_eq|String|N_DC_EQ|
|n_id_eq|String|N_ID_EQ|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_dc_eq" : null,
  "n_id_eq" : null,
}
```


## user

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_people" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|n_dc_eq|String|N_DC_EQ|
|n_id_eq|String|N_ID_EQ|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_dc_eq" : null,
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