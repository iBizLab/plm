# 测试库成员(Library_member)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/library_members` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/library_members/{key}` <i class="fa fa-key"></i>`READ`


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
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/library_members/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/library_members/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
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
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/library_members/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
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
Create_library_member `POST` `/library_members/create_library_member` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Create_temp_admin `POST` `/library_members/create_temp_admin` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
GetDraft `GET` `/library_members/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/library_members/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
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
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
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
FetchCur_library_member `POST` `/library_members/fetchcur_library_member` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 测试库名称
 * `n_library_name_like` - 测试库名称
 * `n_name_like` - 姓名
 * `n_role_id_eq` - 角色
 * `n_user_id_eq` - 登录名




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_role_id_eq" : null,
  "n_user_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "user_id" : null,
    "role_id" : null,
    "library_name" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
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
FetchDefault `POST` `/library_members/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 测试库名称
 * `n_library_name_like` - 测试库名称
 * `n_name_like` - 姓名
 * `n_role_id_eq` - 角色
 * `n_user_id_eq` - 登录名




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_role_id_eq" : null,
  "n_user_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "user_id" : null,
    "role_id" : null,
    "library_name" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
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
下载导入模板 `GET` `/library_members/importtemplate`

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
数据导出 `POST` `/library_members/exportdata/{param},/library_members/exportdata/{param}/{key}`

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
数据导入 `POST` `/library_members/importdata`

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
数据导入（返回错误excel） `POST` `/library_members/importdata2`

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
自定义表头导入（异步） `GET` `/library_members/asyncimportdata2`

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
数据打印 `GET` `/library_members/printdata/{key}`

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
实体报表 `POST` `/library_members/report`

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


### LIBRARY

<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/libraries/{pkey}/library_members` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/libraries/{pkey}/library_members/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
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
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/libraries/{pkey}/library_members/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
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
Update `PUT` `/libraries/{pkey}/library_members/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
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
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/libraries/{pkey}/library_members/checkkey` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
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
Create_library_member `POST` `/libraries/{pkey}/library_members/create_library_member` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Create_temp_admin `POST` `/libraries/{pkey}/library_members/create_temp_admin` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
GetDraft `GET` `/libraries/{pkey}/library_members/getdraft` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/libraries/{pkey}/library_members/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
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
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
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
FetchCur_library_member `POST` `/libraries/{pkey}/library_members/fetchcur_library_member` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 测试库名称
 * `n_library_name_like` - 测试库名称
 * `n_name_like` - 姓名
 * `n_role_id_eq` - 角色
 * `n_user_id_eq` - 登录名




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_role_id_eq" : null,
  "n_user_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "user_id" : null,
    "role_id" : null,
    "library_name" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
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
FetchDefault `POST` `/libraries/{pkey}/library_members/fetchdefault` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 测试库名称
 * `n_library_name_like` - 测试库名称
 * `n_name_like` - 姓名
 * `n_role_id_eq` - 角色
 * `n_user_id_eq` - 登录名




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_role_id_eq" : null,
  "n_user_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "user_id" : null,
    "role_id" : null,
    "library_name" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
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
下载导入模板 `GET` `/libraries/{pkey}/library_members/importtemplate`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`

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
数据导出 `POST` `/libraries/{pkey}/library_members/exportdata/{param},/libraries/{pkey}/library_members/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`
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
数据导入 `POST` `/libraries/{pkey}/library_members/importdata`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`

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
数据导入（返回错误excel） `POST` `/libraries/{pkey}/library_members/importdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`

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
自定义表头导入（异步） `GET` `/libraries/{pkey}/library_members/asyncimportdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`

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
数据打印 `GET` `/libraries/{pkey}/library_members/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`
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
实体报表 `POST` `/libraries/{pkey}/library_members/report`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`

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
### USER

<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/users/{pkey}/library_members` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 企业用户主键



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/users/{pkey}/library_members/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 企业用户主键
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
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/users/{pkey}/library_members/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 企业用户主键
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
Update `PUT` `/users/{pkey}/library_members/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 企业用户主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
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
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/users/{pkey}/library_members/checkkey` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 企业用户主键



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
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
Create_library_member `POST` `/users/{pkey}/library_members/create_library_member` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 企业用户主键



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Create_temp_admin `POST` `/users/{pkey}/library_members/create_temp_admin` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 企业用户主键



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
GetDraft `GET` `/users/{pkey}/library_members/getdraft` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 企业用户主键



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/users/{pkey}/library_members/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 企业用户主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `user_id` - 登录名
 * `role_id` - 角色
 * `library_name` - 测试库名称
 * `library_identifier` - 测试库编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `name` - 姓名
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
  "user_id" : null,
  "role_id" : null,
  "library_name" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
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
FetchCur_library_member `POST` `/users/{pkey}/library_members/fetchcur_library_member` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 企业用户主键



<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 测试库名称
 * `n_library_name_like` - 测试库名称
 * `n_name_like` - 姓名
 * `n_role_id_eq` - 角色
 * `n_user_id_eq` - 登录名




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_role_id_eq" : null,
  "n_user_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "user_id" : null,
    "role_id" : null,
    "library_name" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
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
FetchDefault `POST` `/users/{pkey}/library_members/fetchdefault` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 企业用户主键



<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 测试库名称
 * `n_library_name_like` - 测试库名称
 * `n_name_like` - 姓名
 * `n_role_id_eq` - 角色
 * `n_user_id_eq` - 登录名




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_role_id_eq" : null,
  "n_user_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "user_id" : null,
    "role_id" : null,
    "library_name" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
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
下载导入模板 `GET` `/users/{pkey}/library_members/importtemplate`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `企业用户主键标识`

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
数据导出 `POST` `/users/{pkey}/library_members/exportdata/{param},/users/{pkey}/library_members/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `企业用户主键标识`
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
数据导入 `POST` `/users/{pkey}/library_members/importdata`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `企业用户主键标识`

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
数据导入（返回错误excel） `POST` `/users/{pkey}/library_members/importdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `企业用户主键标识`

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
自定义表头导入（异步） `GET` `/users/{pkey}/library_members/asyncimportdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `企业用户主键标识`

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
数据打印 `GET` `/users/{pkey}/library_members/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `企业用户主键标识`
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
实体报表 `POST` `/users/{pkey}/library_members/report`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `企业用户主键标识`

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
