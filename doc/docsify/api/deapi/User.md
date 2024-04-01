# 企业用户(User)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/users` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `display_name` - 显示名称
 * `email` - 邮箱
 * `mobile` - 手机号
 * `password` - 密码
 * `employee_number` - 工号
 * `avatar` - 头像
 * `status` - 状态
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `department_id` - 部门标识
 * `department_name` - 部门名称
 * `id` - 标识
 * `job_id` - 岗位标识
 * `job_name` - 职位名称
 * `name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/users/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识





<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```




#### **Response**
```json

{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/users/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识





<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```




#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Update `PUT` `/users/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `display_name` - 显示名称
 * `email` - 邮箱
 * `mobile` - 手机号
 * `password` - 密码
 * `employee_number` - 工号
 * `avatar` - 头像
 * `status` - 状态
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `department_id` - 部门标识
 * `department_name` - 部门名称
 * `id` - 标识
 * `job_id` - 岗位标识
 * `job_name` - 职位名称
 * `name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
ChangePwd `POST` `/users/{key}/changepwd` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `display_name` - 显示名称
 * `email` - 邮箱
 * `mobile` - 手机号
 * `password` - 密码
 * `employee_number` - 工号
 * `avatar` - 头像
 * `status` - 状态
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `department_id` - 部门标识
 * `department_name` - 部门名称
 * `id` - 标识
 * `job_id` - 岗位标识
 * `job_name` - 职位名称
 * `name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/users/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `display_name` - 显示名称
 * `email` - 邮箱
 * `mobile` - 手机号
 * `password` - 密码
 * `employee_number` - 工号
 * `avatar` - 头像
 * `status` - 状态
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `department_id` - 部门标识
 * `department_name` - 部门名称
 * `id` - 标识
 * `job_id` - 岗位标识
 * `job_name` - 职位名称
 * `name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json
INT


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
GetDraft `GET` `/users/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `display_name` - 显示名称
 * `email` - 邮箱
 * `mobile` - 手机号
 * `password` - 密码
 * `employee_number` - 工号
 * `avatar` - 头像
 * `status` - 状态
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `department_id` - 部门标识
 * `department_name` - 部门名称
 * `id` - 标识
 * `job_id` - 岗位标识
 * `job_name` - 职位名称
 * `name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
InitPwd `POST` `/users/{key}/initpwd` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `display_name` - 显示名称
 * `email` - 邮箱
 * `mobile` - 手机号
 * `password` - 密码
 * `employee_number` - 工号
 * `avatar` - 头像
 * `status` - 状态
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `department_id` - 部门标识
 * `department_name` - 部门名称
 * `id` - 标识
 * `job_id` - 岗位标识
 * `job_name` - 职位名称
 * `name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/users/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `display_name` - 显示名称
 * `email` - 邮箱
 * `mobile` - 手机号
 * `password` - 密码
 * `employee_number` - 工号
 * `avatar` - 头像
 * `status` - 状态
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `department_id` - 部门标识
 * `department_name` - 部门名称
 * `id` - 标识
 * `job_id` - 岗位标识
 * `job_name` - 职位名称
 * `name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "display_name" : null,
  "email" : null,
  "mobile" : null,
  "password" : null,
  "employee_number" : null,
  "avatar" : null,
  "status" : null,
  "create_man" : null,
  "create_time" : null,
  "department_id" : null,
  "department_name" : null,
  "id" : null,
  "job_id" : null,
  "job_name" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchDefault `GET` `/users/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_department_id_eq` - 部门标识
 * `n_department_name_eq` - 部门名称
 * `n_department_name_like` - 部门名称
 * `n_display_name_like` - 显示名称
 * `n_id_eq` - 标识
 * `n_job_id_eq` - 岗位标识
 * `n_job_name_eq` - 职位名称
 * `n_job_name_like` - 职位名称
 * `n_name_like` - 名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_department_id_eq" : null,
  "n_department_name_eq" : null,
  "n_department_name_like" : null,
  "n_display_name_like" : null,
  "n_id_eq" : null,
  "n_job_id_eq" : null,
  "n_job_name_eq" : null,
  "n_job_name_like" : null,
  "n_name_like" : null,
}
```


#### **Response**
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
    "create_man" : null,
    "create_time" : null,
    "department_id" : null,
    "department_name" : null,
    "id" : null,
    "job_id" : null,
    "job_name" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchUnassigned_dept `POST` `/users/fetchunassigned_dept` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_department_id_eq` - 部门标识
 * `n_department_name_eq` - 部门名称
 * `n_department_name_like` - 部门名称
 * `n_display_name_like` - 显示名称
 * `n_id_eq` - 标识
 * `n_job_id_eq` - 岗位标识
 * `n_job_name_eq` - 职位名称
 * `n_job_name_like` - 职位名称
 * `n_name_like` - 名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_department_id_eq" : null,
  "n_department_name_eq" : null,
  "n_department_name_like" : null,
  "n_display_name_like" : null,
  "n_id_eq" : null,
  "n_job_id_eq" : null,
  "n_job_name_eq" : null,
  "n_job_name_like" : null,
  "n_name_like" : null,
}
```


#### **Response**
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
    "create_man" : null,
    "create_time" : null,
    "department_id" : null,
    "department_name" : null,
    "id" : null,
    "job_id" : null,
    "job_name" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/users/importtemplate`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入模板标识`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

#### **Response**
```file
数据导入模板.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导出 `POST` `/users/exportdata/{param},/users/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* param - `导出集合方法名称`
* key - `数据主键`

<p class="panel-title"><b>RequestParam</b></p>

* srfexporttag - `导出模板标识`

<p class="panel-title"><b>Body</b></p>

* page - `page`
* size - `分页大小`
* n_xxx_eq - `过滤参数`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>PathVariable</b></p>

```json
fetchdefult
```

<p class="panel-title"><b>RequestParam</b></p>

```json
srfexporttag=EXPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```json
参考param对应的集合请求参数
```

#### **Response**
```file
数据导出.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导入 `POST` `/users/importdata`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`

<p class="panel-title"><b>Body</b></p>

* file - `导入数据.xlsx`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```
file=导入数据.xlsx
```

#### **Response**
```json
{
  1:导入错误信息,
  2:导入错误信息,
  3:导入错误信息,
  ...
}
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导入（返回错误excel） `POST` `/users/importdata2`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`

<p class="panel-title"><b>Body</b></p>

* file - `导入数据.xlsx`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```
file=导入数据.xlsx
```

#### **Response**
```file
导入错误.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
自定义表头导入（异步） `GET` `/users/asyncimportdata2`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`
* srfossfileid - `导入文件`
* srfimportschemaid - `表头定义`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
srfossfileid=b87cee52cfb88072b5733d9a796d8dca
srfimportschemaid=81593a65e81b7a07fcf84bd3e93cf3b8
```

#### **Response**
```json
{
  "actiontype": "DEIMPORTDATA2",
  "srfdcid": null,
  "updateman": null,
  "fulltopictag": null,
  "actionstate": 10,
  "dcsystemid": null,
  "createdate": null,
  "asyncacitonid": "1ea54b415c09d459de668eff641aa9aa",
  "asyncacitonname": "[导入]数据导入作业[dataimport]",
  "actionparam2": "dataimport",
  "createman": null,
  "updatedate": null,
  "actionparam": null
}
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据打印 `GET` `/users/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* key - `打印数据key`

<p class="panel-title"><b>RequestParam</b></p>

* srfprinttag - `打印标识`
* srfcontenttype - `报表类型`


<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>PathVariable</b></p>

```json
key
```

<p class="panel-title"><b>RequestParam</b></p>

```
srfprinttag=PRINTTAG
srfcontenttype=PDF
```

#### **Response**
```file

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
实体报表 `POST` `/users/report`

<p class="panel-title"><b>RequestParam</b></p>

* srfreporttag - `报表标识`
* srfcontenttype - `报表类型`


<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```
srfreporttag=DRX
srfcontenttype=PDF
```

<p class="panel-title"><b>Body</b></p>

```json
{
  "":"",
  "":"",
  ...
}
```

#### **Response**
```

```
<!-- tabs:end -->
<!-- panels:end -->


