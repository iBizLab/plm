# 工作项类型(Work_item_type)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/work_item_types` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `sequence` - 序号
 * `is_system` - 是否系统类型
 * `project_type` - 项目类型
 * `group` - 类型分组
 * `code` - 编码
 * `icon` - 图标
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "sequence" : null,
  "is_system" : null,
  "project_type" : null,
  "group" : null,
  "code" : null,
  "icon" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "sequence" : null,
  "is_system" : null,
  "project_type" : null,
  "group" : null,
  "code" : null,
  "icon" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/work_item_types/{key}` <i class="fa fa-key"></i>`READ`


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
  "sequence" : null,
  "is_system" : null,
  "project_type" : null,
  "group" : null,
  "code" : null,
  "icon" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/work_item_types/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/work_item_types/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `sequence` - 序号
 * `is_system` - 是否系统类型
 * `project_type` - 项目类型
 * `group` - 类型分组
 * `code` - 编码
 * `icon` - 图标
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
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
  "sequence" : null,
  "is_system" : null,
  "project_type" : null,
  "group" : null,
  "code" : null,
  "icon" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "sequence" : null,
  "is_system" : null,
  "project_type" : null,
  "group" : null,
  "code" : null,
  "icon" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/work_item_types/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `sequence` - 序号
 * `is_system` - 是否系统类型
 * `project_type` - 项目类型
 * `group` - 类型分组
 * `code` - 编码
 * `icon` - 图标
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "sequence" : null,
  "is_system" : null,
  "project_type" : null,
  "group" : null,
  "code" : null,
  "icon" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
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
GetDraft `GET` `/work_item_types/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `sequence` - 序号
 * `is_system` - 是否系统类型
 * `project_type` - 项目类型
 * `group` - 类型分组
 * `code` - 编码
 * `icon` - 图标
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "sequence" : null,
  "is_system" : null,
  "project_type" : null,
  "group" : null,
  "code" : null,
  "icon" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "sequence" : null,
  "is_system" : null,
  "project_type" : null,
  "group" : null,
  "code" : null,
  "icon" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/work_item_types/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `sequence` - 序号
 * `is_system` - 是否系统类型
 * `project_type` - 项目类型
 * `group` - 类型分组
 * `code` - 编码
 * `icon` - 图标
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
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
  "sequence" : null,
  "is_system" : null,
  "project_type" : null,
  "group" : null,
  "code" : null,
  "icon" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
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
FetchDefault `POST` `/work_item_types/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_group_eq` - 类型分组
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_project_type_eq` - 项目类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_group_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_project_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "sequence" : null,
    "is_system" : null,
    "project_type" : null,
    "group" : null,
    "code" : null,
    "icon" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
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
FetchProject_work_item_type `POST` `/work_item_types/fetchproject_work_item_type` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_group_eq` - 类型分组
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_project_type_eq` - 项目类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_group_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_project_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "sequence" : null,
    "is_system" : null,
    "project_type" : null,
    "group" : null,
    "code" : null,
    "icon" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
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
FetchProject_work_item_type_not_bug `POST` `/work_item_types/fetchproject_work_item_type_not_bug` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_group_eq` - 类型分组
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_project_type_eq` - 项目类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_group_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_project_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "sequence" : null,
    "is_system" : null,
    "project_type" : null,
    "group" : null,
    "code" : null,
    "icon" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
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
下载导入模板 `GET` `/work_item_types/importtemplate`

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
数据导出 `POST` `/work_item_types/exportdata/{param},/work_item_types/exportdata/{param}/{key}`

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
数据导入 `POST` `/work_item_types/importdata`

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
数据导入（返回错误excel） `POST` `/work_item_types/importdata2`

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
自定义表头导入（异步） `GET` `/work_item_types/asyncimportdata2`

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
数据打印 `GET` `/work_item_types/printdata/{key}`

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
实体报表 `POST` `/work_item_types/report`

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


