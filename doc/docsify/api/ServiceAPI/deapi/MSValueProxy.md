# 主状态值代理(MSValueProxy) :id=MSValueProxy
## 创建主状态值代理

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/msvalueproxies" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|颜色|
|<el-row justify="space-between"><el-col :span="20">bkcolor</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景颜色|
|<el-row justify="space-between"><el-col :span="20">msvalueproxyid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|主状态值代理标识|
|<el-row justify="space-between"><el-col :span="20">msvalueproxyname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主状态值代理名称|



##### 请求示例： {docsify-ignore}
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


##### 响应示例： {docsify-ignore}
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

## 获取主状态值代理

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/msvalueproxies/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主状态值代理标识|




##### 响应示例： {docsify-ignore}
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

## 删除主状态值代理

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/msvalueproxies/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主状态值代理标识|





## 更新主状态值代理

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/msvalueproxies/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|主状态值代理标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|颜色|
|<el-row justify="space-between"><el-col :span="20">bkcolor</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景颜色|
|<el-row justify="space-between"><el-col :span="20">msvalueproxyid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|主状态值代理标识|
|<el-row justify="space-between"><el-col :span="20">msvalueproxyname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主状态值代理名称|



##### 请求示例： {docsify-ignore}
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


##### 响应示例： {docsify-ignore}
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

## 检查主状态值代理主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/msvalueproxies/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|颜色|
|<el-row justify="space-between"><el-col :span="20">bkcolor</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景颜色|
|<el-row justify="space-between"><el-col :span="20">msvalueproxyid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|主状态值代理标识|
|<el-row justify="space-between"><el-col :span="20">msvalueproxyname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主状态值代理名称|



##### 请求示例： {docsify-ignore}
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


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取主状态值代理草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/msvalueproxies/getdraft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|颜色|
|<el-row justify="space-between"><el-col :span="20">bkcolor</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景颜色|
|<el-row justify="space-between"><el-col :span="20">msvalueproxyid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|主状态值代理标识|
|<el-row justify="space-between"><el-col :span="20">msvalueproxyname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主状态值代理名称|



##### 请求示例： {docsify-ignore}
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


##### 响应示例： {docsify-ignore}
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

## 保存主状态值代理

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/msvalueproxies/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">color</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|颜色|
|<el-row justify="space-between"><el-col :span="20">bkcolor</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|背景颜色|
|<el-row justify="space-between"><el-col :span="20">msvalueproxyid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|主状态值代理标识|
|<el-row justify="space-between"><el-col :span="20">msvalueproxyname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主状态值代理名称|



##### 请求示例： {docsify-ignore}
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


##### 响应示例： {docsify-ignore}
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

## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/msvalueproxies/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_msvalueproxyid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主状态值代理标识|
|<el-row justify="space-between"><el-col :span="20">n_msvalueproxyname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|主状态值代理名称|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_msvalueproxyid_eq" : null,
  "n_msvalueproxyname_like" : null,
}
```


##### 响应示例： {docsify-ignore}
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



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/msvalueproxies/importtemplate" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |



## 数据导出

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/msvalueproxies/exportdata/{param},/msvalueproxies/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|param|String|导出集合方法名称|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|srfexporttag|String|导出模板标识|

##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|page|Integer|page|
|size|Integer|分页大小|
|n_xxx_eq|String|过滤参数|


## 数据导入

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/msvalueproxies/importdata" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 数据导入（返回错误excel）

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/msvalueproxies/importdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 自定义表头导入（异步）
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/msvalueproxies/asyncimportdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |
| srfossfileid | String | 导入文件 |
| srfimportschemaid | String | 表头定义 |


## 数据打印
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/msvalueproxies/printdata/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfprinttag | String | 打印标识 |
| srfcontenttype | String | 打印类型 |



## 报表打印

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/msvalueproxies/report" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfreporttag | String | 报表标识 |
| srfcontenttype | String | 报表类型 |




<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    },
    methods: {

    }
  }).use(ElementPlus).mount('#app')
</script>