# 角色(sys_role) :id=sys_role
## CheckKey

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_roles" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|id|String|id|
|name|String|name|
|creator|String|creator|
|create_time|Timestamp|create_time|
|updater|String|updater|
|update_time|Timestamp|update_time|
|dc|String|dc|
|authority|String|authority|
|workflow_group|Integer|workflow_group|
|group_scope|String|group_scope|
|description|String|description|
|deploy_system_id|String|deploy_system_id|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "authority" : null,
  "workflow_group" : null,
  "group_scope" : null,
  "description" : null,
  "deploy_system_id" : null,
}
```


## Create

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_roles" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|id|String|id|
|name|String|name|
|creator|String|creator|
|create_time|Timestamp|create_time|
|updater|String|updater|
|update_time|Timestamp|update_time|
|dc|String|dc|
|authority|String|authority|
|workflow_group|Integer|workflow_group|
|group_scope|String|group_scope|
|description|String|description|
|deploy_system_id|String|deploy_system_id|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "authority" : null,
  "workflow_group" : null,
  "group_scope" : null,
  "description" : null,
  "deploy_system_id" : null,
}
```


## Get

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_roles/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/sys_roles" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|id|String|id|
|name|String|name|
|creator|String|creator|
|create_time|Timestamp|create_time|
|updater|String|updater|
|update_time|Timestamp|update_time|
|dc|String|dc|
|authority|String|authority|
|workflow_group|Integer|workflow_group|
|group_scope|String|group_scope|
|description|String|description|
|deploy_system_id|String|deploy_system_id|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "authority" : null,
  "workflow_group" : null,
  "group_scope" : null,
  "description" : null,
  "deploy_system_id" : null,
}
```


## Remove

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_roles/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主键|




## SYS_ROLE_UAA__DEACTION__SAVE

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_roles/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

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
<el-alert title="/sys_roles/{key}" type="info" :closable="false" ></el-alert>
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
|name|String|name|
|creator|String|creator|
|create_time|Timestamp|create_time|
|updater|String|updater|
|update_time|Timestamp|update_time|
|dc|String|dc|
|authority|String|authority|
|workflow_group|Integer|workflow_group|
|group_scope|String|group_scope|
|description|String|description|
|deploy_system_id|String|deploy_system_id|



##### 请求示例： {docsify-ignore}
```json
{
  "id" : null,
  "name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "authority" : null,
  "workflow_group" : null,
  "group_scope" : null,
  "description" : null,
  "deploy_system_id" : null,
}
```


## DEFAULT

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/sys_roles" type="info" :closable="false" ></el-alert>
</div>
</el-row>



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|n_id_eq|String|N_ID_EQ|
|n_name_like|String|N_NAME_LIKE|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
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