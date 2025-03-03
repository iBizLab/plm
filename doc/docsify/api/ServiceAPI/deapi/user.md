# 企业用户(user) :id=user
## 创建企业用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



##### 请求示例： {docsify-ignore}
```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 获取用户简要信息

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|




##### 响应示例： {docsify-ignore}
```json

{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 删除企业用户

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|





## 更新企业用户

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



##### 请求示例： {docsify-ignore}
```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 激活用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/{key}/activate" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



##### 请求示例： {docsify-ignore}
```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 取消统计

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/{key}/cancel_report_flag" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



##### 请求示例： {docsify-ignore}
```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 变更密码

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/{key}/change_pwd" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



##### 请求示例： {docsify-ignore}
```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 检查企业用户主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



##### 请求示例： {docsify-ignore}
```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 冻结用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/{key}/freeze" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



##### 请求示例： {docsify-ignore}
```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 获取企业用户草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



##### 请求示例： {docsify-ignore}
```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 获取人员全量信息

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/{key}/get_full" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|




##### 响应示例： {docsify-ignore}
```json

{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 初始化密码

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/{key}/init_pwd" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



##### 请求示例： {docsify-ignore}
```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 重置密码

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/{key}/reset_password" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



##### 请求示例： {docsify-ignore}
```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 保存企业用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



##### 请求示例： {docsify-ignore}
```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 设置统计

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/{key}/set_report_flag" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



##### 请求示例： {docsify-ignore}
```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "report_flag" : null,
  "user_id" : null,
  "title" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_department_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_department_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_display_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_job_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">n_job_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_job_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">n_organization_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_department_id_eq" : null,
  "n_department_id_isnull" : null,
  "n_department_name_eq" : null,
  "n_department_name_like" : null,
  "n_display_name_like" : null,
  "n_id_eq" : null,
  "n_id_notin" : null,
  "n_job_id_eq" : null,
  "n_job_name_eq" : null,
  "n_job_name_like" : null,
  "n_name_like" : null,
  "n_organization_id_eq" : null,
  "n_organization_name_eq" : null,
  "n_organization_name_like" : null,
  "n_status_eq" : null,
  "n_title_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "display_name" : null,
    "email" : null,
    "mobile" : null,
    "password" : null,
    "employee_number" : null,
    "avatar" : null,
    "status" : null,
    "report_flag" : null,
    "user_id" : null,
    "title" : null,
    "create_man" : null,
    "create_time" : null,
    "department_id" : null,
    "department_name" : null,
    "id" : null,
    "job_id" : null,
    "job_name" : null,
    "name" : null,
    "organization_id" : null,
    "organization_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 非空间下成员

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/fetch_not_space_mmeber" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_department_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_department_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_display_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_job_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">n_job_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_job_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">n_organization_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_department_id_eq" : null,
  "n_department_id_isnull" : null,
  "n_department_name_eq" : null,
  "n_department_name_like" : null,
  "n_display_name_like" : null,
  "n_id_eq" : null,
  "n_id_notin" : null,
  "n_job_id_eq" : null,
  "n_job_name_eq" : null,
  "n_job_name_like" : null,
  "n_name_like" : null,
  "n_organization_id_eq" : null,
  "n_organization_name_eq" : null,
  "n_organization_name_like" : null,
  "n_status_eq" : null,
  "n_title_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "display_name" : null,
    "email" : null,
    "mobile" : null,
    "password" : null,
    "employee_number" : null,
    "avatar" : null,
    "status" : null,
    "report_flag" : null,
    "user_id" : null,
    "title" : null,
    "create_man" : null,
    "create_time" : null,
    "department_id" : null,
    "department_name" : null,
    "id" : null,
    "job_id" : null,
    "job_name" : null,
    "name" : null,
    "organization_id" : null,
    "organization_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 未分配部门

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/fetch_unassigned_dept" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_department_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_department_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_display_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_job_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">n_job_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_job_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">n_organization_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_department_id_eq" : null,
  "n_department_id_isnull" : null,
  "n_department_name_eq" : null,
  "n_department_name_like" : null,
  "n_display_name_like" : null,
  "n_id_eq" : null,
  "n_id_notin" : null,
  "n_job_id_eq" : null,
  "n_job_name_eq" : null,
  "n_job_name_like" : null,
  "n_name_like" : null,
  "n_organization_id_eq" : null,
  "n_organization_name_eq" : null,
  "n_organization_name_like" : null,
  "n_status_eq" : null,
  "n_title_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "display_name" : null,
    "email" : null,
    "mobile" : null,
    "password" : null,
    "employee_number" : null,
    "avatar" : null,
    "status" : null,
    "report_flag" : null,
    "user_id" : null,
    "title" : null,
    "create_man" : null,
    "create_time" : null,
    "department_id" : null,
    "department_name" : null,
    "id" : null,
    "job_id" : null,
    "job_name" : null,
    "name" : null,
    "organization_id" : null,
    "organization_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 当前用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/fetch_user" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_department_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_department_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_display_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_job_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">n_job_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_job_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">n_organization_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_department_id_eq" : null,
  "n_department_id_isnull" : null,
  "n_department_name_eq" : null,
  "n_department_name_like" : null,
  "n_display_name_like" : null,
  "n_id_eq" : null,
  "n_id_notin" : null,
  "n_job_id_eq" : null,
  "n_job_name_eq" : null,
  "n_job_name_like" : null,
  "n_name_like" : null,
  "n_organization_id_eq" : null,
  "n_organization_name_eq" : null,
  "n_organization_name_like" : null,
  "n_status_eq" : null,
  "n_title_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "display_name" : null,
    "email" : null,
    "mobile" : null,
    "password" : null,
    "employee_number" : null,
    "avatar" : null,
    "status" : null,
    "report_flag" : null,
    "user_id" : null,
    "title" : null,
    "create_man" : null,
    "create_time" : null,
    "department_id" : null,
    "department_name" : null,
    "id" : null,
    "job_id" : null,
    "job_name" : null,
    "name" : null,
    "organization_id" : null,
    "organization_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 工时统计

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/fetch_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_department_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_department_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_display_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_job_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">n_job_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_job_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">n_organization_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_department_id_eq" : null,
  "n_department_id_isnull" : null,
  "n_department_name_eq" : null,
  "n_department_name_like" : null,
  "n_display_name_like" : null,
  "n_id_eq" : null,
  "n_id_notin" : null,
  "n_job_id_eq" : null,
  "n_job_name_eq" : null,
  "n_job_name_like" : null,
  "n_name_like" : null,
  "n_organization_id_eq" : null,
  "n_organization_name_eq" : null,
  "n_organization_name_like" : null,
  "n_status_eq" : null,
  "n_title_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "display_name" : null,
    "email" : null,
    "mobile" : null,
    "password" : null,
    "employee_number" : null,
    "avatar" : null,
    "status" : null,
    "report_flag" : null,
    "user_id" : null,
    "title" : null,
    "create_man" : null,
    "create_time" : null,
    "department_id" : null,
    "department_name" : null,
    "id" : null,
    "job_id" : null,
    "job_name" : null,
    "name" : null,
    "organization_id" : null,
    "organization_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/importtemplate" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |



## 数据导出

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/exportdata/{param},/users/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|param|String|导出集合方法名称|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|srfexporttag|String|导出模板标识|

##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|page|Integer|page|
|size|Integer|分页大小|
|n_xxx_eq|String|过滤参数|


## 数据导入

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/importdata" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 数据导入（返回错误excel）

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/importdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 自定义表头导入（异步）
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/asyncimportdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |
| srfossfileid | String | 导入文件 |
| srfimportschemaid | String | 表头定义 |


## 数据打印
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/printdata/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfprinttag | String | 打印标识 |
| srfcontenttype | String | 打印类型 |



## 报表打印

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/users/report" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfreporttag | String | 报表标识 |
| srfcontenttype | String | 报表类型 |




## 根据部门创建企业用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



## 根据部门获取用户简要信息

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|
|key|String|标识|




## 根据部门删除企业用户

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|
|key|String|标识|




## 根据部门更新企业用户

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



## 根据部门激活用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/{key}/activate" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



## 根据部门取消统计

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/{key}/cancel_report_flag" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



## 根据部门变更密码

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/{key}/change_pwd" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



## 根据部门检查企业用户主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



## 根据部门冻结用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/{key}/freeze" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



## 根据部门获取企业用户草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



## 根据部门获取人员全量信息

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/{key}/get_full" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|
|key|String|标识|




## 根据部门初始化密码

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/{key}/init_pwd" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



## 根据部门重置密码

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/{key}/reset_password" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



## 根据部门保存企业用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



## 根据部门设置统计

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/{key}/set_report_flag" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">display_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">email</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|邮箱|
|<el-row justify="space-between"><el-col :span="20">mobile</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|手机号|
|<el-row justify="space-between"><el-col :span="20">password</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|密码|
|<el-row justify="space-between"><el-col :span="20">employee_number</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|工号|
|<el-row justify="space-between"><el-col :span="20">avatar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|头像|
|<el-row justify="space-between"><el-col :span="20">status</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">report_flag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|统计|
|<el-row justify="space-between"><el-col :span="20">user_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户ID|
|<el-row justify="space-between"><el-col :span="20">title</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|
|<el-row justify="space-between"><el-col :span="20">department_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">department_name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">job_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">job_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">organization_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">organization_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|



## 根据部门数据集

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_department_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_department_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_display_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_job_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">n_job_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_job_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">n_organization_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|



## 根据部门非空间下成员

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/fetch_not_space_mmeber" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_department_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_department_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_display_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_job_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">n_job_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_job_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">n_organization_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|



## 根据部门未分配部门

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/fetch_unassigned_dept" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_department_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_department_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_display_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_job_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">n_job_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_job_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">n_organization_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|



## 根据部门当前用户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/fetch_user" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_department_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_department_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_display_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_job_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">n_job_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_job_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">n_organization_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|



## 根据部门工时统计

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/fetch_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|部门主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_department_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门标识|
|<el-row justify="space-between"><el-col :span="20">n_department_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_department_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部门|
|<el-row justify="space-between"><el-col :span="20">n_display_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|姓名|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_job_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|岗位标识|
|<el-row justify="space-between"><el-col :span="20">n_job_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_job_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位名称|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|登录名|
|<el-row justify="space-between"><el-col :span="20">n_organization_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织标识|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_organization_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|组织名称|
|<el-row justify="space-between"><el-col :span="20">n_status_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_title_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|职位|




## 根据部门下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/importtemplate" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |



## 根据部门数据导出

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/exportdata/{param},/departments/{pkey}/users/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|
|param|String|导出集合方法名称|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|
|srfexporttag|String|导出模板标识|

##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|page|Integer|page|
|size|Integer|分页大小|
|n_xxx_eq|String|过滤参数|


## 根据部门数据导入

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/importdata" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 根据部门数据导入（返回错误excel）

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/importdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 根据部门自定义表头导入（异步）
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/asyncimportdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |
| srfossfileid | String | 导入文件 |
| srfimportschemaid | String | 表头定义 |


## 根据部门数据打印
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/printdata/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfprinttag | String | 打印标识 |
| srfcontenttype | String | 打印类型 |



## 根据部门报表打印

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/departments/{pkey}/users/report" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfreporttag | String | 报表标识 |
| srfcontenttype | String | 报表类型 |



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