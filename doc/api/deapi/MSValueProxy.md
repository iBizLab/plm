# 主状态值代理(MSValueProxy)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/msvalueproxies` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `color` - 颜色
 * `bkcolor` - 背景颜色
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `msvalueproxyid` - 主状态值代理标识
 * `msvalueproxyname` - 主状态值代理名称
 * `updatedate` - 更新时间
 * `updateman` - 更新人




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "color" : null,
  "bkcolor" : null,
  "createdate" : null,
  "createman" : null,
  "msvalueproxyid" : null,
  "msvalueproxyname" : null,
  "updatedate" : null,
  "updateman" : null,
}
```


#### **Response**
```json

{
  "color" : null,
  "bkcolor" : null,
  "createdate" : null,
  "createman" : null,
  "msvalueproxyid" : null,
  "msvalueproxyname" : null,
  "updatedate" : null,
  "updateman" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/msvalueproxies/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主状态值代理标识





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
  "color" : null,
  "bkcolor" : null,
  "createdate" : null,
  "createman" : null,
  "msvalueproxyid" : null,
  "msvalueproxyname" : null,
  "updatedate" : null,
  "updateman" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/msvalueproxies/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主状态值代理标识





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
Update `PUT` `/msvalueproxies/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主状态值代理标识



<p class="panel-title"><b>Body</b></p>

 * `color` - 颜色
 * `bkcolor` - 背景颜色
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `msvalueproxyid` - 主状态值代理标识
 * `msvalueproxyname` - 主状态值代理名称
 * `updatedate` - 更新时间
 * `updateman` - 更新人




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
  "color" : null,
  "bkcolor" : null,
  "createdate" : null,
  "createman" : null,
  "msvalueproxyid" : null,
  "msvalueproxyname" : null,
  "updatedate" : null,
  "updateman" : null,
}
```


#### **Response**
```json

{
  "color" : null,
  "bkcolor" : null,
  "createdate" : null,
  "createman" : null,
  "msvalueproxyid" : null,
  "msvalueproxyname" : null,
  "updatedate" : null,
  "updateman" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/msvalueproxies/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `color` - 颜色
 * `bkcolor` - 背景颜色
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `msvalueproxyid` - 主状态值代理标识
 * `msvalueproxyname` - 主状态值代理名称
 * `updatedate` - 更新时间
 * `updateman` - 更新人




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "color" : null,
  "bkcolor" : null,
  "createdate" : null,
  "createman" : null,
  "msvalueproxyid" : null,
  "msvalueproxyname" : null,
  "updatedate" : null,
  "updateman" : null,
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
GetDraft `GET` `/msvalueproxies/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `color` - 颜色
 * `bkcolor` - 背景颜色
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `msvalueproxyid` - 主状态值代理标识
 * `msvalueproxyname` - 主状态值代理名称
 * `updatedate` - 更新时间
 * `updateman` - 更新人




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "color" : null,
  "bkcolor" : null,
  "createdate" : null,
  "createman" : null,
  "msvalueproxyid" : null,
  "msvalueproxyname" : null,
  "updatedate" : null,
  "updateman" : null,
}
```


#### **Response**
```json

{
  "color" : null,
  "bkcolor" : null,
  "createdate" : null,
  "createman" : null,
  "msvalueproxyid" : null,
  "msvalueproxyname" : null,
  "updatedate" : null,
  "updateman" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/msvalueproxies/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主状态值代理标识



<p class="panel-title"><b>Body</b></p>

 * `color` - 颜色
 * `bkcolor` - 背景颜色
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `msvalueproxyid` - 主状态值代理标识
 * `msvalueproxyname` - 主状态值代理名称
 * `updatedate` - 更新时间
 * `updateman` - 更新人




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
  "color" : null,
  "bkcolor" : null,
  "createdate" : null,
  "createman" : null,
  "msvalueproxyid" : null,
  "msvalueproxyname" : null,
  "updatedate" : null,
  "updateman" : null,
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
FetchDefault `POST` `/msvalueproxies/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_msvalueproxyid_eq` - 主状态值代理标识
 * `n_msvalueproxyname_like` - 主状态值代理名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_msvalueproxyid_eq" : null,
  "n_msvalueproxyname_like" : null,
}
```


#### **Response**
```json
[
  {
    "color" : null,
    "bkcolor" : null,
    "createdate" : null,
    "createman" : null,
    "msvalueproxyid" : null,
    "msvalueproxyname" : null,
    "updatedate" : null,
    "updateman" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/msvalueproxies/importtemplate`

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
数据导出 `POST` `/msvalueproxies/exportdata/{param},/msvalueproxies/exportdata/{param}/{key}`

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
数据导入 `POST` `/msvalueproxies/importdata`

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
数据导入（返回错误excel） `POST` `/msvalueproxies/importdata2`

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
自定义表头导入（异步） `GET` `/msvalueproxies/asyncimportdata2`

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
数据打印 `GET` `/msvalueproxies/printdata/{key}`

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
实体报表 `POST` `/msvalueproxies/report`

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


