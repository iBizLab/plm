# 排期(Product_plan)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/product_plans` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `type` - 类别
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `categories` - 类别
 * `categories_name` - 类别
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 计划名称
 * `product_id` - 产品标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/product_plans/{key}` <i class="fa fa-key"></i>`READ`


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
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/product_plans/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/product_plans/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `type` - 类别
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `categories` - 类别
 * `categories_name` - 类别
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 计划名称
 * `product_id` - 产品标识
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
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/product_plans/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `type` - 类别
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `categories` - 类别
 * `categories_name` - 类别
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 计划名称
 * `product_id` - 产品标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
Delete `POST` `/product_plans/{key}/delete` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `type` - 类别
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `categories` - 类别
 * `categories_name` - 类别
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 计划名称
 * `product_id` - 产品标识
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
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
GetDraft `GET` `/product_plans/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `type` - 类别
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `categories` - 类别
 * `categories_name` - 类别
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 计划名称
 * `product_id` - 产品标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/product_plans/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `type` - 类别
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `categories` - 类别
 * `categories_name` - 类别
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 计划名称
 * `product_id` - 产品标识
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
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
FetchDefault `POST` `/product_plans/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_categories_like` - 类别
 * `n_id_eq` - 标识
 * `n_name_like` - 计划名称
 * `n_product_id_eq` - 产品标识




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
  "n_product_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "categories" : null,
    "categories_name" : null,
    "is_deleted" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/product_plans/fetchnormal` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_categories_like` - 类别
 * `n_id_eq` - 标识
 * `n_name_like` - 计划名称
 * `n_product_id_eq` - 产品标识




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
  "n_product_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "categories" : null,
    "categories_name" : null,
    "is_deleted" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/product_plans/importtemplate`

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
数据导出 `POST` `/product_plans/exportdata/{param},/product_plans/exportdata/{param}/{key}`

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
数据导入 `POST` `/product_plans/importdata`

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
数据导入（返回错误excel） `POST` `/product_plans/importdata2`

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
自定义表头导入（异步） `GET` `/product_plans/asyncimportdata2`

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
数据打印 `GET` `/product_plans/printdata/{key}`

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
实体报表 `POST` `/product_plans/report`

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


### PRODUCT

<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/products/{pkey}/product_plans` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `type` - 类别
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `categories` - 类别
 * `categories_name` - 类别
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 计划名称
 * `product_id` - 产品标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/products/{pkey}/product_plans/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
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
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/products/{pkey}/product_plans/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
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
Update `PUT` `/products/{pkey}/product_plans/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `type` - 类别
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `categories` - 类别
 * `categories_name` - 类别
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 计划名称
 * `product_id` - 产品标识
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
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/products/{pkey}/product_plans/checkkey` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `type` - 类别
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `categories` - 类别
 * `categories_name` - 类别
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 计划名称
 * `product_id` - 产品标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
Delete `POST` `/products/{pkey}/product_plans/{key}/delete` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `type` - 类别
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `categories` - 类别
 * `categories_name` - 类别
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 计划名称
 * `product_id` - 产品标识
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
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
GetDraft `GET` `/products/{pkey}/product_plans/getdraft` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `type` - 类别
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `categories` - 类别
 * `categories_name` - 类别
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 计划名称
 * `product_id` - 产品标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/products/{pkey}/product_plans/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `type` - 类别
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `categories` - 类别
 * `categories_name` - 类别
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 计划名称
 * `product_id` - 产品标识
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
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "categories" : null,
  "categories_name" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
FetchDefault `POST` `/products/{pkey}/product_plans/fetchdefault` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_categories_like` - 类别
 * `n_id_eq` - 标识
 * `n_name_like` - 计划名称
 * `n_product_id_eq` - 产品标识




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
  "n_product_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "categories" : null,
    "categories_name" : null,
    "is_deleted" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/products/{pkey}/product_plans/fetchnormal` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_categories_like` - 类别
 * `n_id_eq` - 标识
 * `n_name_like` - 计划名称
 * `n_product_id_eq` - 产品标识




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
  "n_product_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "categories" : null,
    "categories_name" : null,
    "is_deleted" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/products/{pkey}/product_plans/importtemplate`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `产品主键标识`

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
数据导出 `POST` `/products/{pkey}/product_plans/exportdata/{param},/products/{pkey}/product_plans/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `产品主键标识`
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
数据导入 `POST` `/products/{pkey}/product_plans/importdata`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `产品主键标识`

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
数据导入（返回错误excel） `POST` `/products/{pkey}/product_plans/importdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `产品主键标识`

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
自定义表头导入（异步） `GET` `/products/{pkey}/product_plans/asyncimportdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `产品主键标识`

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
数据打印 `GET` `/products/{pkey}/product_plans/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `产品主键标识`
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
实体报表 `POST` `/products/{pkey}/product_plans/report`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `产品主键标识`

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
