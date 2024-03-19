# 执行结果(Run_history)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/run_histories` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `case_id` - 测试用例
 * `remark` - 备注
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `steps` - 步骤
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `run_id` - 执行用例标识
 * `run_title` - 标题
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "case_id" : null,
  "remark" : null,
  "executed_at" : null,
  "status" : null,
  "steps" : null,
  "executor_id" : null,
  "executor_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "run_id" : null,
  "run_title" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "case_id" : null,
  "remark" : null,
  "executed_at" : null,
  "status" : null,
  "steps" : null,
  "executor_id" : null,
  "executor_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "run_id" : null,
  "run_title" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/run_histories/{key}` <i class="fa fa-key"></i>`READ`


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
  "case_id" : null,
  "remark" : null,
  "executed_at" : null,
  "status" : null,
  "steps" : null,
  "executor_id" : null,
  "executor_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "run_id" : null,
  "run_title" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/run_histories/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/run_histories/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `case_id` - 测试用例
 * `remark` - 备注
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `steps` - 步骤
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `run_id` - 执行用例标识
 * `run_title` - 标题
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
  "case_id" : null,
  "remark" : null,
  "executed_at" : null,
  "status" : null,
  "steps" : null,
  "executor_id" : null,
  "executor_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "run_id" : null,
  "run_title" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "case_id" : null,
  "remark" : null,
  "executed_at" : null,
  "status" : null,
  "steps" : null,
  "executor_id" : null,
  "executor_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "run_id" : null,
  "run_title" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/run_histories/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `case_id` - 测试用例
 * `remark` - 备注
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `steps` - 步骤
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `run_id` - 执行用例标识
 * `run_title` - 标题
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "case_id" : null,
  "remark" : null,
  "executed_at" : null,
  "status" : null,
  "steps" : null,
  "executor_id" : null,
  "executor_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "run_id" : null,
  "run_title" : null,
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
GetDraft `GET` `/run_histories/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `case_id` - 测试用例
 * `remark` - 备注
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `steps` - 步骤
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `run_id` - 执行用例标识
 * `run_title` - 标题
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "case_id" : null,
  "remark" : null,
  "executed_at" : null,
  "status" : null,
  "steps" : null,
  "executor_id" : null,
  "executor_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "run_id" : null,
  "run_title" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "case_id" : null,
  "remark" : null,
  "executed_at" : null,
  "status" : null,
  "steps" : null,
  "executor_id" : null,
  "executor_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "run_id" : null,
  "run_title" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Run_history_get `GET` `/run_histories/{key}/run_history_get` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `case_id` - 测试用例
 * `remark` - 备注
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `steps` - 步骤
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `run_id` - 执行用例标识
 * `run_title` - 标题
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
  "case_id" : null,
  "remark" : null,
  "executed_at" : null,
  "status" : null,
  "steps" : null,
  "executor_id" : null,
  "executor_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "run_id" : null,
  "run_title" : null,
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
Save `POST` `/run_histories/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `case_id` - 测试用例
 * `remark` - 备注
 * `executed_at` - 执行时间
 * `status` - 执行结果
 * `steps` - 步骤
 * `executor_id` - 执行人标识
 * `executor_name` - 执行人
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `run_id` - 执行用例标识
 * `run_title` - 标题
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
  "case_id" : null,
  "remark" : null,
  "executed_at" : null,
  "status" : null,
  "steps" : null,
  "executor_id" : null,
  "executor_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "run_id" : null,
  "run_title" : null,
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
FetchDefault `POST` `/run_histories/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_run_id_eq` - 执行用例标识
 * `n_run_title_eq` - 标题
 * `n_run_title_like` - 标题
 * `n_status_eq` - 执行结果




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_run_id_eq" : null,
  "n_run_title_eq" : null,
  "n_run_title_like" : null,
  "n_status_eq" : null,
}
```


#### **Response**
```json
[
  {
    "case_id" : null,
    "remark" : null,
    "executed_at" : null,
    "status" : null,
    "steps" : null,
    "executor_id" : null,
    "executor_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "run_id" : null,
    "run_title" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchThis `POST` `/run_histories/fetchthis` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_run_id_eq` - 执行用例标识
 * `n_run_title_eq` - 标题
 * `n_run_title_like` - 标题
 * `n_status_eq` - 执行结果




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_run_id_eq" : null,
  "n_run_title_eq" : null,
  "n_run_title_like" : null,
  "n_status_eq" : null,
}
```


#### **Response**
```json
[
  {
    "case_id" : null,
    "remark" : null,
    "executed_at" : null,
    "status" : null,
    "steps" : null,
    "executor_id" : null,
    "executor_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "run_id" : null,
    "run_title" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/run_histories/importtemplate`

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
数据导出 `POST` `/run_histories/exportdata/{param},/run_histories/exportdata/{param}/{key}`

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
数据导入 `POST` `/run_histories/importdata`

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
数据导入（返回错误excel） `POST` `/run_histories/importdata2`

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
自定义表头导入（异步） `GET` `/run_histories/asyncimportdata2`

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
数据打印 `GET` `/run_histories/printdata/{key}`

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
实体报表 `POST` `/run_histories/report`

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


