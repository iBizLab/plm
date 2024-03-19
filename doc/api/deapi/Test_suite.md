# 用例模块(Test_suite)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/test_suites` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `sequence` - 序号
 * `suites` - 模块路径
 * `is_leaf` - 是否叶子节点
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 测试库名称
 * `name` - 名称
 * `pid` - 父标识
 * `pname` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "sequence" : null,
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "sequence" : null,
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/test_suites/{key}` <i class="fa fa-key"></i>`READ`


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
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/test_suites/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/test_suites/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `sequence` - 序号
 * `suites` - 模块路径
 * `is_leaf` - 是否叶子节点
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 测试库名称
 * `name` - 名称
 * `pid` - 父标识
 * `pname` - 名称
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
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "sequence" : null,
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/test_suites/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `sequence` - 序号
 * `suites` - 模块路径
 * `is_leaf` - 是否叶子节点
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 测试库名称
 * `name` - 名称
 * `pid` - 父标识
 * `pname` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "sequence" : null,
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
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
GetDraft `GET` `/test_suites/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `sequence` - 序号
 * `suites` - 模块路径
 * `is_leaf` - 是否叶子节点
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 测试库名称
 * `name` - 名称
 * `pid` - 父标识
 * `pname` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "sequence" : null,
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "sequence" : null,
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/test_suites/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `sequence` - 序号
 * `suites` - 模块路径
 * `is_leaf` - 是否叶子节点
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 测试库名称
 * `name` - 名称
 * `pid` - 父标识
 * `pname` - 名称
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
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
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
FetchDefault `POST` `/test_suites/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 测试库名称
 * `n_library_name_like` - 测试库名称
 * `n_name_like` - 名称
 * `n_pid_eq` - 父标识
 * `n_pname_eq` - 名称
 * `n_pname_like` - 名称




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
  "n_pid_eq" : null,
  "n_pname_eq" : null,
  "n_pname_like" : null,
}
```


#### **Response**
```json
[
  {
    "sequence" : null,
    "suites" : null,
    "is_leaf" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "pid" : null,
    "pname" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNo_parent `POST` `/test_suites/fetchno_parent` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 测试库名称
 * `n_library_name_like` - 测试库名称
 * `n_name_like` - 名称
 * `n_pid_eq` - 父标识
 * `n_pname_eq` - 名称
 * `n_pname_like` - 名称




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
  "n_pid_eq" : null,
  "n_pname_eq" : null,
  "n_pname_like" : null,
}
```


#### **Response**
```json
[
  {
    "sequence" : null,
    "suites" : null,
    "is_leaf" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "pid" : null,
    "pname" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/test_suites/fetchnormal` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 测试库名称
 * `n_library_name_like` - 测试库名称
 * `n_name_like` - 名称
 * `n_pid_eq` - 父标识
 * `n_pname_eq` - 名称
 * `n_pname_like` - 名称




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
  "n_pid_eq" : null,
  "n_pname_eq" : null,
  "n_pname_like" : null,
}
```


#### **Response**
```json
[
  {
    "sequence" : null,
    "suites" : null,
    "is_leaf" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "pid" : null,
    "pname" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRoot `POST` `/test_suites/fetchroot` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 测试库名称
 * `n_library_name_like` - 测试库名称
 * `n_name_like` - 名称
 * `n_pid_eq` - 父标识
 * `n_pname_eq` - 名称
 * `n_pname_like` - 名称




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
  "n_pid_eq" : null,
  "n_pname_eq" : null,
  "n_pname_like" : null,
}
```


#### **Response**
```json
[
  {
    "sequence" : null,
    "suites" : null,
    "is_leaf" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "pid" : null,
    "pname" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/test_suites/importtemplate`

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
数据导出 `POST` `/test_suites/exportdata/{param},/test_suites/exportdata/{param}/{key}`

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
数据导入 `POST` `/test_suites/importdata`

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
数据导入（返回错误excel） `POST` `/test_suites/importdata2`

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
自定义表头导入（异步） `GET` `/test_suites/asyncimportdata2`

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
数据打印 `GET` `/test_suites/printdata/{key}`

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
实体报表 `POST` `/test_suites/report`

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
Create `POST` `/libraries/{pkey}/test_suites` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `sequence` - 序号
 * `suites` - 模块路径
 * `is_leaf` - 是否叶子节点
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 测试库名称
 * `name` - 名称
 * `pid` - 父标识
 * `pname` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "sequence" : null,
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "sequence" : null,
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/libraries/{pkey}/test_suites/{key}` <i class="fa fa-key"></i>`READ`


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
  "sequence" : null,
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/libraries/{pkey}/test_suites/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/libraries/{pkey}/test_suites/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `sequence` - 序号
 * `suites` - 模块路径
 * `is_leaf` - 是否叶子节点
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 测试库名称
 * `name` - 名称
 * `pid` - 父标识
 * `pname` - 名称
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
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "sequence" : null,
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/libraries/{pkey}/test_suites/checkkey` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `sequence` - 序号
 * `suites` - 模块路径
 * `is_leaf` - 是否叶子节点
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 测试库名称
 * `name` - 名称
 * `pid` - 父标识
 * `pname` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "sequence" : null,
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
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
GetDraft `GET` `/libraries/{pkey}/test_suites/getdraft` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `sequence` - 序号
 * `suites` - 模块路径
 * `is_leaf` - 是否叶子节点
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 测试库名称
 * `name` - 名称
 * `pid` - 父标识
 * `pname` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "sequence" : null,
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "sequence" : null,
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/libraries/{pkey}/test_suites/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `sequence` - 序号
 * `suites` - 模块路径
 * `is_leaf` - 是否叶子节点
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 测试库名称
 * `name` - 名称
 * `pid` - 父标识
 * `pname` - 名称
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
  "suites" : null,
  "is_leaf" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "pid" : null,
  "pname" : null,
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
FetchDefault `POST` `/libraries/{pkey}/test_suites/fetchdefault` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 测试库名称
 * `n_library_name_like` - 测试库名称
 * `n_name_like` - 名称
 * `n_pid_eq` - 父标识
 * `n_pname_eq` - 名称
 * `n_pname_like` - 名称




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
  "n_pid_eq" : null,
  "n_pname_eq" : null,
  "n_pname_like" : null,
}
```


#### **Response**
```json
[
  {
    "sequence" : null,
    "suites" : null,
    "is_leaf" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "pid" : null,
    "pname" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNo_parent `POST` `/libraries/{pkey}/test_suites/fetchno_parent` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 测试库名称
 * `n_library_name_like` - 测试库名称
 * `n_name_like` - 名称
 * `n_pid_eq` - 父标识
 * `n_pname_eq` - 名称
 * `n_pname_like` - 名称




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
  "n_pid_eq" : null,
  "n_pname_eq" : null,
  "n_pname_like" : null,
}
```


#### **Response**
```json
[
  {
    "sequence" : null,
    "suites" : null,
    "is_leaf" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "pid" : null,
    "pname" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/libraries/{pkey}/test_suites/fetchnormal` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 测试库名称
 * `n_library_name_like` - 测试库名称
 * `n_name_like` - 名称
 * `n_pid_eq` - 父标识
 * `n_pname_eq` - 名称
 * `n_pname_like` - 名称




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
  "n_pid_eq" : null,
  "n_pname_eq" : null,
  "n_pname_like" : null,
}
```


#### **Response**
```json
[
  {
    "sequence" : null,
    "suites" : null,
    "is_leaf" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "pid" : null,
    "pname" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchRoot `POST` `/libraries/{pkey}/test_suites/fetchroot` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 测试库名称
 * `n_library_name_like` - 测试库名称
 * `n_name_like` - 名称
 * `n_pid_eq` - 父标识
 * `n_pname_eq` - 名称
 * `n_pname_like` - 名称




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
  "n_pid_eq" : null,
  "n_pname_eq" : null,
  "n_pname_like" : null,
}
```


#### **Response**
```json
[
  {
    "sequence" : null,
    "suites" : null,
    "is_leaf" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "pid" : null,
    "pname" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/libraries/{pkey}/test_suites/importtemplate`

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
数据导出 `POST` `/libraries/{pkey}/test_suites/exportdata/{param},/libraries/{pkey}/test_suites/exportdata/{param}/{key}`

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
数据导入 `POST` `/libraries/{pkey}/test_suites/importdata`

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
数据导入（返回错误excel） `POST` `/libraries/{pkey}/test_suites/importdata2`

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
自定义表头导入（异步） `GET` `/libraries/{pkey}/test_suites/asyncimportdata2`

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
数据打印 `GET` `/libraries/{pkey}/test_suites/printdata/{key}`

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
实体报表 `POST` `/libraries/{pkey}/test_suites/report`

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
