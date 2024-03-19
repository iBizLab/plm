# 工作(Work)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/works` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `pilot_id` - 关联主体标识
 * `principal_id` - 关联主体标识
 * `principal_type` - 关联主体类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `portfolio_id` - 文件夹标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/works/{key}` <i class="fa fa-key"></i>`READ`


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
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/works/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/works/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `pilot_id` - 关联主体标识
 * `principal_id` - 关联主体标识
 * `principal_type` - 关联主体类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `portfolio_id` - 文件夹标识
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
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Add_project `POST` `/works/{key}/add_project` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `pilot_id` - 关联主体标识
 * `principal_id` - 关联主体标识
 * `principal_type` - 关联主体类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `portfolio_id` - 文件夹标识
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
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
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
Add_project_portfolio `POST` `/works/{key}/add_project_portfolio` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `pilot_id` - 关联主体标识
 * `principal_id` - 关联主体标识
 * `principal_type` - 关联主体类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `portfolio_id` - 文件夹标识
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
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
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
CheckKey `POST` `/works/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `pilot_id` - 关联主体标识
 * `principal_id` - 关联主体标识
 * `principal_type` - 关联主体类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `portfolio_id` - 文件夹标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
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
GetDraft `GET` `/works/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `pilot_id` - 关联主体标识
 * `principal_id` - 关联主体标识
 * `principal_type` - 关联主体类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `portfolio_id` - 文件夹标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/works/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `pilot_id` - 关联主体标识
 * `principal_id` - 关联主体标识
 * `principal_type` - 关联主体类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `portfolio_id` - 文件夹标识
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
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
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
FetchDefault `POST` `/works/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_pilot_id_eq` - 关联主体标识
 * `n_portfolio_id_eq` - 文件夹标识
 * `n_principal_id_eq` - 关联主体标识




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
  "n_pilot_id_eq" : null,
  "n_portfolio_id_eq" : null,
  "n_principal_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "pilot_id" : null,
    "principal_id" : null,
    "principal_type" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "portfolio_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchItem_set_owner `POST` `/works/fetchitem_set_owner` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_pilot_id_eq` - 关联主体标识
 * `n_portfolio_id_eq` - 文件夹标识
 * `n_principal_id_eq` - 关联主体标识




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
  "n_pilot_id_eq" : null,
  "n_portfolio_id_eq" : null,
  "n_principal_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "pilot_id" : null,
    "principal_id" : null,
    "principal_type" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "portfolio_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/works/importtemplate`

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
数据导出 `POST` `/works/exportdata/{param},/works/exportdata/{param}/{key}`

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
数据导入 `POST` `/works/importdata`

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
数据导入（返回错误excel） `POST` `/works/importdata2`

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
自定义表头导入（异步） `GET` `/works/asyncimportdata2`

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
数据打印 `GET` `/works/printdata/{key}`

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
实体报表 `POST` `/works/report`

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


### PORTFOLIO

<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/portfolios/{pkey}/works` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 文件夹主键



<p class="panel-title"><b>Body</b></p>

 * `pilot_id` - 关联主体标识
 * `principal_id` - 关联主体标识
 * `principal_type` - 关联主体类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `portfolio_id` - 文件夹标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/portfolios/{pkey}/works/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 文件夹主键
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
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/portfolios/{pkey}/works/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 文件夹主键
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
Update `PUT` `/portfolios/{pkey}/works/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 文件夹主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `pilot_id` - 关联主体标识
 * `principal_id` - 关联主体标识
 * `principal_type` - 关联主体类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `portfolio_id` - 文件夹标识
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
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Add_project `POST` `/portfolios/{pkey}/works/{key}/add_project` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 文件夹主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `pilot_id` - 关联主体标识
 * `principal_id` - 关联主体标识
 * `principal_type` - 关联主体类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `portfolio_id` - 文件夹标识
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
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
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
Add_project_portfolio `POST` `/portfolios/{pkey}/works/{key}/add_project_portfolio` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 文件夹主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `pilot_id` - 关联主体标识
 * `principal_id` - 关联主体标识
 * `principal_type` - 关联主体类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `portfolio_id` - 文件夹标识
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
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
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
CheckKey `POST` `/portfolios/{pkey}/works/checkkey` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 文件夹主键



<p class="panel-title"><b>Body</b></p>

 * `pilot_id` - 关联主体标识
 * `principal_id` - 关联主体标识
 * `principal_type` - 关联主体类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `portfolio_id` - 文件夹标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
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
GetDraft `GET` `/portfolios/{pkey}/works/getdraft` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 文件夹主键



<p class="panel-title"><b>Body</b></p>

 * `pilot_id` - 关联主体标识
 * `principal_id` - 关联主体标识
 * `principal_type` - 关联主体类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `portfolio_id` - 文件夹标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/portfolios/{pkey}/works/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 文件夹主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `pilot_id` - 关联主体标识
 * `principal_id` - 关联主体标识
 * `principal_type` - 关联主体类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `portfolio_id` - 文件夹标识
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
  "pilot_id" : null,
  "principal_id" : null,
  "principal_type" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "portfolio_id" : null,
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
FetchDefault `POST` `/portfolios/{pkey}/works/fetchdefault` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 文件夹主键



<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_pilot_id_eq` - 关联主体标识
 * `n_portfolio_id_eq` - 文件夹标识
 * `n_principal_id_eq` - 关联主体标识




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
  "n_pilot_id_eq" : null,
  "n_portfolio_id_eq" : null,
  "n_principal_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "pilot_id" : null,
    "principal_id" : null,
    "principal_type" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "portfolio_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchItem_set_owner `POST` `/portfolios/{pkey}/works/fetchitem_set_owner` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 文件夹主键



<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_pilot_id_eq` - 关联主体标识
 * `n_portfolio_id_eq` - 文件夹标识
 * `n_principal_id_eq` - 关联主体标识




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
  "n_pilot_id_eq" : null,
  "n_portfolio_id_eq" : null,
  "n_principal_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "pilot_id" : null,
    "principal_id" : null,
    "principal_type" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "portfolio_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/portfolios/{pkey}/works/importtemplate`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `文件夹主键标识`

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
数据导出 `POST` `/portfolios/{pkey}/works/exportdata/{param},/portfolios/{pkey}/works/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `文件夹主键标识`
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
数据导入 `POST` `/portfolios/{pkey}/works/importdata`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `文件夹主键标识`

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
数据导入（返回错误excel） `POST` `/portfolios/{pkey}/works/importdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `文件夹主键标识`

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
自定义表头导入（异步） `GET` `/portfolios/{pkey}/works/asyncimportdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `文件夹主键标识`

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
数据打印 `GET` `/portfolios/{pkey}/works/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `文件夹主键标识`
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
实体报表 `POST` `/portfolios/{pkey}/works/report`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `文件夹主键标识`

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
