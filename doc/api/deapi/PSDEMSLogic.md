# 实体主状态迁移逻辑(PSDEMSLogic)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/psdemslogics` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `dynamodelflag` - 扩展模型
 * `codename` - 代码标识
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `psdeid` - 实体
 * `psdelogicid` - 实体处理逻辑标识
 * `psdelogicname` - 实体处理逻辑名称
 * `psdename` - 实体
 * `updatedate` - 更新时间
 * `updateman` - 更新人
 * `extension_tag` - 扩展标记
 * `extension_tag2` - 扩展标记2
 * `extension_tag3` - 扩展标记3
 * `extension_tag4` - 扩展标记4




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "dynamodelflag" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```


#### **Response**
```json

{
  "dynamodelflag" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/psdemslogics/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体处理逻辑标识





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
  "dynamodelflag" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/psdemslogics/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体处理逻辑标识





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
Update `PUT` `/psdemslogics/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体处理逻辑标识



<p class="panel-title"><b>Body</b></p>

 * `dynamodelflag` - 扩展模型
 * `codename` - 代码标识
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `psdeid` - 实体
 * `psdelogicid` - 实体处理逻辑标识
 * `psdelogicname` - 实体处理逻辑名称
 * `psdename` - 实体
 * `updatedate` - 更新时间
 * `updateman` - 更新人
 * `extension_tag` - 扩展标记
 * `extension_tag2` - 扩展标记2
 * `extension_tag3` - 扩展标记3
 * `extension_tag4` - 扩展标记4




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
  "dynamodelflag" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```


#### **Response**
```json

{
  "dynamodelflag" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Apply `POST` `/psdemslogics/{key}/apply` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体处理逻辑标识



<p class="panel-title"><b>Body</b></p>

 * `dynamodelflag` - 扩展模型
 * `codename` - 代码标识
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `psdeid` - 实体
 * `psdelogicid` - 实体处理逻辑标识
 * `psdelogicname` - 实体处理逻辑名称
 * `psdename` - 实体
 * `updatedate` - 更新时间
 * `updateman` - 更新人
 * `extension_tag` - 扩展标记
 * `extension_tag2` - 扩展标记2
 * `extension_tag3` - 扩展标记3
 * `extension_tag4` - 扩展标记4




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
  "dynamodelflag" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
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
CheckKey `POST` `/psdemslogics/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `dynamodelflag` - 扩展模型
 * `codename` - 代码标识
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `psdeid` - 实体
 * `psdelogicid` - 实体处理逻辑标识
 * `psdelogicname` - 实体处理逻辑名称
 * `psdename` - 实体
 * `updatedate` - 更新时间
 * `updateman` - 更新人
 * `extension_tag` - 扩展标记
 * `extension_tag2` - 扩展标记2
 * `extension_tag3` - 扩展标记3
 * `extension_tag4` - 扩展标记4




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "dynamodelflag" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
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
GetDraft `GET` `/psdemslogics/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `dynamodelflag` - 扩展模型
 * `codename` - 代码标识
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `psdeid` - 实体
 * `psdelogicid` - 实体处理逻辑标识
 * `psdelogicname` - 实体处理逻辑名称
 * `psdename` - 实体
 * `updatedate` - 更新时间
 * `updateman` - 更新人
 * `extension_tag` - 扩展标记
 * `extension_tag2` - 扩展标记2
 * `extension_tag3` - 扩展标记3
 * `extension_tag4` - 扩展标记4




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "dynamodelflag" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}
```


#### **Response**
```json

{
  "dynamodelflag" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/psdemslogics/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 实体处理逻辑标识



<p class="panel-title"><b>Body</b></p>

 * `dynamodelflag` - 扩展模型
 * `codename` - 代码标识
 * `createdate` - 建立时间
 * `createman` - 建立人
 * `psdeid` - 实体
 * `psdelogicid` - 实体处理逻辑标识
 * `psdelogicname` - 实体处理逻辑名称
 * `psdename` - 实体
 * `updatedate` - 更新时间
 * `updateman` - 更新人
 * `extension_tag` - 扩展标记
 * `extension_tag2` - 扩展标记2
 * `extension_tag3` - 扩展标记3
 * `extension_tag4` - 扩展标记4




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
  "dynamodelflag" : null,
  "codename" : null,
  "createdate" : null,
  "createman" : null,
  "psdeid" : null,
  "psdelogicid" : null,
  "psdelogicname" : null,
  "psdename" : null,
  "updatedate" : null,
  "updateman" : null,
  "extension_tag" : null,
  "extension_tag2" : null,
  "extension_tag3" : null,
  "extension_tag4" : null,
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
FetchDefault `POST` `/psdemslogics/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_psdeid_eq` - 实体
 * `n_psdelogicid_eq` - 实体处理逻辑标识
 * `n_psdelogicname_like` - 实体处理逻辑名称
 * `n_psdename_eq` - 实体
 * `n_psdename_like` - 实体




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_psdeid_eq" : null,
  "n_psdelogicid_eq" : null,
  "n_psdelogicname_like" : null,
  "n_psdename_eq" : null,
  "n_psdename_like" : null,
}
```


#### **Response**
```json
[
  {
    "dynamodelflag" : null,
    "codename" : null,
    "createdate" : null,
    "createman" : null,
    "psdeid" : null,
    "psdelogicid" : null,
    "psdelogicname" : null,
    "psdename" : null,
    "updatedate" : null,
    "updateman" : null,
    "extension_tag" : null,
    "extension_tag2" : null,
    "extension_tag3" : null,
    "extension_tag4" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/psdemslogics/importtemplate`

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
数据导出 `POST` `/psdemslogics/exportdata/{param},/psdemslogics/exportdata/{param}/{key}`

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
数据导入 `POST` `/psdemslogics/importdata`

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
数据导入（返回错误excel） `POST` `/psdemslogics/importdata2`

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
自定义表头导入（异步） `GET` `/psdemslogics/asyncimportdata2`

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
数据打印 `GET` `/psdemslogics/printdata/{key}`

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
实体报表 `POST` `/psdemslogics/report`

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


