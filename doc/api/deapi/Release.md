# 项目发布(Release)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/releases` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `start_at` - 开始时间
 * `end_at` - 发布时间
 * `description` - 描述
 * `progress` - 发布进度
 * `status` - 状态
 * `categories` - 类别
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `project_id` - 项目标识
 * `project_name` - 项目名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/releases/{key}` <i class="fa fa-key"></i>`READ`


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
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/releases/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/releases/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `start_at` - 开始时间
 * `end_at` - 发布时间
 * `description` - 描述
 * `progress` - 发布进度
 * `status` - 状态
 * `categories` - 类别
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `project_id` - 项目标识
 * `project_name` - 项目名称
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
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/releases/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `start_at` - 开始时间
 * `end_at` - 发布时间
 * `description` - 描述
 * `progress` - 发布进度
 * `status` - 状态
 * `categories` - 类别
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `project_id` - 项目标识
 * `project_name` - 项目名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
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
GetDraft `GET` `/releases/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `start_at` - 开始时间
 * `end_at` - 发布时间
 * `description` - 描述
 * `progress` - 发布进度
 * `status` - 状态
 * `categories` - 类别
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `project_id` - 项目标识
 * `project_name` - 项目名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/releases/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `start_at` - 开始时间
 * `end_at` - 发布时间
 * `description` - 描述
 * `progress` - 发布进度
 * `status` - 状态
 * `categories` - 类别
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `project_id` - 项目标识
 * `project_name` - 项目名称
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
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
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
FetchDefault `POST` `/releases/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_categories_like` - 类别
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 项目名称
 * `n_project_name_like` - 项目名称
 * `n_status_eq` - 状态




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_categories_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_status_eq" : null,
}
```


#### **Response**
```json
[
  {
    "start_at" : null,
    "end_at" : null,
    "description" : null,
    "progress" : null,
    "status" : null,
    "categories" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/releases/importtemplate`

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
数据导出 `POST` `/releases/exportdata/{param},/releases/exportdata/{param}/{key}`

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
数据导入 `POST` `/releases/importdata`

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
数据导入（返回错误excel） `POST` `/releases/importdata2`

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
自定义表头导入（异步） `GET` `/releases/asyncimportdata2`

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
数据打印 `GET` `/releases/printdata/{key}`

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
实体报表 `POST` `/releases/report`

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


### PROJECT

<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/projects/{pkey}/releases` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `start_at` - 开始时间
 * `end_at` - 发布时间
 * `description` - 描述
 * `progress` - 发布进度
 * `status` - 状态
 * `categories` - 类别
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `project_id` - 项目标识
 * `project_name` - 项目名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/projects/{pkey}/releases/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
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
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/projects/{pkey}/releases/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
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
Update `PUT` `/projects/{pkey}/releases/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `start_at` - 开始时间
 * `end_at` - 发布时间
 * `description` - 描述
 * `progress` - 发布进度
 * `status` - 状态
 * `categories` - 类别
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `project_id` - 项目标识
 * `project_name` - 项目名称
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
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/projects/{pkey}/releases/checkkey` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `start_at` - 开始时间
 * `end_at` - 发布时间
 * `description` - 描述
 * `progress` - 发布进度
 * `status` - 状态
 * `categories` - 类别
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `project_id` - 项目标识
 * `project_name` - 项目名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
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
GetDraft `GET` `/projects/{pkey}/releases/getdraft` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `start_at` - 开始时间
 * `end_at` - 发布时间
 * `description` - 描述
 * `progress` - 发布进度
 * `status` - 状态
 * `categories` - 类别
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `project_id` - 项目标识
 * `project_name` - 项目名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/projects/{pkey}/releases/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `start_at` - 开始时间
 * `end_at` - 发布时间
 * `description` - 描述
 * `progress` - 发布进度
 * `status` - 状态
 * `categories` - 类别
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `project_id` - 项目标识
 * `project_name` - 项目名称
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
  "start_at" : null,
  "end_at" : null,
  "description" : null,
  "progress" : null,
  "status" : null,
  "categories" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
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
FetchDefault `POST` `/projects/{pkey}/releases/fetchdefault` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 项目主键



<p class="panel-title"><b>Body</b></p>

 * `n_categories_like` - 类别
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_project_id_eq` - 项目标识
 * `n_project_name_eq` - 项目名称
 * `n_project_name_like` - 项目名称
 * `n_status_eq` - 状态




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_categories_like" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_status_eq" : null,
}
```


#### **Response**
```json
[
  {
    "start_at" : null,
    "end_at" : null,
    "description" : null,
    "progress" : null,
    "status" : null,
    "categories" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/projects/{pkey}/releases/importtemplate`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `项目主键标识`

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
数据导出 `POST` `/projects/{pkey}/releases/exportdata/{param},/projects/{pkey}/releases/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `项目主键标识`
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
数据导入 `POST` `/projects/{pkey}/releases/importdata`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `项目主键标识`

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
数据导入（返回错误excel） `POST` `/projects/{pkey}/releases/importdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `项目主键标识`

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
自定义表头导入（异步） `GET` `/projects/{pkey}/releases/asyncimportdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `项目主键标识`

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
数据打印 `GET` `/projects/{pkey}/releases/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `项目主键标识`
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
实体报表 `POST` `/projects/{pkey}/releases/report`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `项目主键标识`

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
