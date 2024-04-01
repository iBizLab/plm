# 活动(Activitiy)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/activitiys` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `auditinfo` - 审计信息
 * `audittype` - 审计类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `ipaddress` - 访问地址
 * `id` - 标识
 * `name` - 名称
 * `oppersonid` - 操作人
 * `oppersonname` - 操作人
 * `objectid` - 对象标识
 * `objecttype` - 对象类型
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "auditinfo" : null,
  "audittype" : null,
  "create_man" : null,
  "create_time" : null,
  "ipaddress" : null,
  "id" : null,
  "name" : null,
  "oppersonid" : null,
  "oppersonname" : null,
  "objectid" : null,
  "objecttype" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "auditinfo" : null,
  "audittype" : null,
  "create_man" : null,
  "create_time" : null,
  "ipaddress" : null,
  "id" : null,
  "name" : null,
  "oppersonid" : null,
  "oppersonname" : null,
  "objectid" : null,
  "objecttype" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/activitiys/{key}` <i class="fa fa-key"></i>`READ`


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
  "auditinfo" : null,
  "audittype" : null,
  "create_man" : null,
  "create_time" : null,
  "ipaddress" : null,
  "id" : null,
  "name" : null,
  "oppersonid" : null,
  "oppersonname" : null,
  "objectid" : null,
  "objecttype" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/activitiys/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/activitiys/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `auditinfo` - 审计信息
 * `audittype` - 审计类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `ipaddress` - 访问地址
 * `id` - 标识
 * `name` - 名称
 * `oppersonid` - 操作人
 * `oppersonname` - 操作人
 * `objectid` - 对象标识
 * `objecttype` - 对象类型
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
  "auditinfo" : null,
  "audittype" : null,
  "create_man" : null,
  "create_time" : null,
  "ipaddress" : null,
  "id" : null,
  "name" : null,
  "oppersonid" : null,
  "oppersonname" : null,
  "objectid" : null,
  "objecttype" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "auditinfo" : null,
  "audittype" : null,
  "create_man" : null,
  "create_time" : null,
  "ipaddress" : null,
  "id" : null,
  "name" : null,
  "oppersonid" : null,
  "oppersonname" : null,
  "objectid" : null,
  "objecttype" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/activitiys/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `auditinfo` - 审计信息
 * `audittype` - 审计类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `ipaddress` - 访问地址
 * `id` - 标识
 * `name` - 名称
 * `oppersonid` - 操作人
 * `oppersonname` - 操作人
 * `objectid` - 对象标识
 * `objecttype` - 对象类型
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "auditinfo" : null,
  "audittype" : null,
  "create_man" : null,
  "create_time" : null,
  "ipaddress" : null,
  "id" : null,
  "name" : null,
  "oppersonid" : null,
  "oppersonname" : null,
  "objectid" : null,
  "objecttype" : null,
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
GetDraft `GET` `/activitiys/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `auditinfo` - 审计信息
 * `audittype` - 审计类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `ipaddress` - 访问地址
 * `id` - 标识
 * `name` - 名称
 * `oppersonid` - 操作人
 * `oppersonname` - 操作人
 * `objectid` - 对象标识
 * `objecttype` - 对象类型
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "auditinfo" : null,
  "audittype" : null,
  "create_man" : null,
  "create_time" : null,
  "ipaddress" : null,
  "id" : null,
  "name" : null,
  "oppersonid" : null,
  "oppersonname" : null,
  "objectid" : null,
  "objecttype" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "auditinfo" : null,
  "audittype" : null,
  "create_man" : null,
  "create_time" : null,
  "ipaddress" : null,
  "id" : null,
  "name" : null,
  "oppersonid" : null,
  "oppersonname" : null,
  "objectid" : null,
  "objecttype" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/activitiys/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `auditinfo` - 审计信息
 * `audittype` - 审计类型
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `ipaddress` - 访问地址
 * `id` - 标识
 * `name` - 名称
 * `oppersonid` - 操作人
 * `oppersonname` - 操作人
 * `objectid` - 对象标识
 * `objecttype` - 对象类型
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
  "auditinfo" : null,
  "audittype" : null,
  "create_man" : null,
  "create_time" : null,
  "ipaddress" : null,
  "id" : null,
  "name" : null,
  "oppersonid" : null,
  "oppersonname" : null,
  "objectid" : null,
  "objecttype" : null,
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
FetchALL `POST` `/activitiys/fetchall` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_auditinfo_isnotnull` - 审计信息
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_objectid_eq` - 对象标识




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_auditinfo_isnotnull" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_objectid_eq" : null,
}
```


#### **Response**
```json
[
  {
    "auditinfo" : null,
    "audittype" : null,
    "create_man" : null,
    "create_time" : null,
    "ipaddress" : null,
    "id" : null,
    "name" : null,
    "oppersonid" : null,
    "oppersonname" : null,
    "objectid" : null,
    "objecttype" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchDefault `POST` `/activitiys/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_auditinfo_isnotnull` - 审计信息
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_objectid_eq` - 对象标识




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_auditinfo_isnotnull" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_objectid_eq" : null,
}
```


#### **Response**
```json
[
  {
    "auditinfo" : null,
    "audittype" : null,
    "create_man" : null,
    "create_time" : null,
    "ipaddress" : null,
    "id" : null,
    "name" : null,
    "oppersonid" : null,
    "oppersonname" : null,
    "objectid" : null,
    "objecttype" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/activitiys/importtemplate`

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
数据导出 `POST` `/activitiys/exportdata/{param},/activitiys/exportdata/{param}/{key}`

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
数据导入 `POST` `/activitiys/importdata`

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
数据导入（返回错误excel） `POST` `/activitiys/importdata2`

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
自定义表头导入（异步） `GET` `/activitiys/asyncimportdata2`

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
数据打印 `GET` `/activitiys/printdata/{key}`

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
实体报表 `POST` `/activitiys/report`

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


