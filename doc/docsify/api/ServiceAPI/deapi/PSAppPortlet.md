# 应用门户部件(PSAppPortlet) :id=PSAppPortlet
## 创建应用门户部件

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psappportlets" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">psappportletid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|应用门户部件标识|
|<el-row justify="space-between"><el-col :span="20">psappportletname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|应用门户部件名称|
|<el-row justify="space-between"><el-col :span="20">psdechartid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体图表|
|<el-row justify="space-between"><el-col :span="20">psdechartname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体图表|
|<el-row justify="space-between"><el-col :span="20">psdedataviewid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据视图|
|<el-row justify="space-between"><el-col :span="20">psdedataviewname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据视图|
|<el-row justify="space-between"><el-col :span="20">psdeformid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体表单|
|<el-row justify="space-between"><el-col :span="20">psdeformname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体表单|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelistid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体列表|
|<el-row justify="space-between"><el-col :span="20">psdelistname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体列表|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdereportid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体报表|
|<el-row justify="space-between"><el-col :span="20">psdereportname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体报表|
|<el-row justify="space-between"><el-col :span="20">psdetoolbarid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具栏|
|<el-row justify="space-between"><el-col :span="20">psdetoolbarname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具栏|
|<el-row justify="space-between"><el-col :span="20">psdeuagroupid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|界面行为组|
|<el-row justify="space-between"><el-col :span="20">psdeuagroupname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|界面行为组|
|<el-row justify="space-between"><el-col :span="20">psdeviewid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统视图|
|<el-row justify="space-between"><el-col :span="20">psdeviewname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统视图|
|<el-row justify="space-between"><el-col :span="20">pssysappid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统应用|
|<el-row justify="space-between"><el-col :span="20">pssysappname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统应用|
|<el-row justify="space-between"><el-col :span="20">pssyscalendarid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|日历部件|
|<el-row justify="space-between"><el-col :span="20">pssyscalendarname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|日历部件|
|<el-row justify="space-between"><el-col :span="20">pssysmapviewid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地图部件|
|<el-row justify="space-between"><el-col :span="20">pssysmapviewname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地图部件|
|<el-row justify="space-between"><el-col :span="20">pssysportletcatid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部件分类|
|<el-row justify="space-between"><el-col :span="20">pssysportletcatname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部件分类|
|<el-row justify="space-between"><el-col :span="20">portlettype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|看板部件类型|
|<el-row justify="space-between"><el-col :span="20">showtitlebar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|显示标题栏|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "codename" : null,
  "memo" : null,
  "psappportletid" : null,
  "psappportletname" : null,
  "psdechartid" : null,
  "psdechartname" : null,
  "psdedataviewid" : null,
  "psdedataviewname" : null,
  "psdeformid" : null,
  "psdeformname" : null,
  "psdeid" : null,
  "psdelistid" : null,
  "psdelistname" : null,
  "psdename" : null,
  "psdereportid" : null,
  "psdereportname" : null,
  "psdetoolbarid" : null,
  "psdetoolbarname" : null,
  "psdeuagroupid" : null,
  "psdeuagroupname" : null,
  "psdeviewid" : null,
  "psdeviewname" : null,
  "pssysappid" : null,
  "pssysappname" : null,
  "pssyscalendarid" : null,
  "pssyscalendarname" : null,
  "pssysmapviewid" : null,
  "pssysmapviewname" : null,
  "pssysportletcatid" : null,
  "pssysportletcatname" : null,
  "portlettype" : null,
  "showtitlebar" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "codename" : null,
  "memo" : null,
  "psappportletid" : null,
  "psappportletname" : null,
  "psdechartid" : null,
  "psdechartname" : null,
  "psdedataviewid" : null,
  "psdedataviewname" : null,
  "psdeformid" : null,
  "psdeformname" : null,
  "psdeid" : null,
  "psdelistid" : null,
  "psdelistname" : null,
  "psdename" : null,
  "psdereportid" : null,
  "psdereportname" : null,
  "psdetoolbarid" : null,
  "psdetoolbarname" : null,
  "psdeuagroupid" : null,
  "psdeuagroupname" : null,
  "psdeviewid" : null,
  "psdeviewname" : null,
  "pssysappid" : null,
  "pssysappname" : null,
  "pssyscalendarid" : null,
  "pssyscalendarname" : null,
  "pssysmapviewid" : null,
  "pssysmapviewname" : null,
  "pssysportletcatid" : null,
  "pssysportletcatname" : null,
  "portlettype" : null,
  "showtitlebar" : null,
  "validflag" : null,
}

```

## 获取应用门户部件

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psappportlets/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|应用门户部件标识|




##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "codename" : null,
  "memo" : null,
  "psappportletid" : null,
  "psappportletname" : null,
  "psdechartid" : null,
  "psdechartname" : null,
  "psdedataviewid" : null,
  "psdedataviewname" : null,
  "psdeformid" : null,
  "psdeformname" : null,
  "psdeid" : null,
  "psdelistid" : null,
  "psdelistname" : null,
  "psdename" : null,
  "psdereportid" : null,
  "psdereportname" : null,
  "psdetoolbarid" : null,
  "psdetoolbarname" : null,
  "psdeuagroupid" : null,
  "psdeuagroupname" : null,
  "psdeviewid" : null,
  "psdeviewname" : null,
  "pssysappid" : null,
  "pssysappname" : null,
  "pssyscalendarid" : null,
  "pssyscalendarname" : null,
  "pssysmapviewid" : null,
  "pssysmapviewname" : null,
  "pssysportletcatid" : null,
  "pssysportletcatname" : null,
  "portlettype" : null,
  "showtitlebar" : null,
  "validflag" : null,
}

```

## 删除应用门户部件

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psappportlets/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|应用门户部件标识|





## 更新应用门户部件

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psappportlets/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|应用门户部件标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">psappportletid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|应用门户部件标识|
|<el-row justify="space-between"><el-col :span="20">psappportletname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|应用门户部件名称|
|<el-row justify="space-between"><el-col :span="20">psdechartid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体图表|
|<el-row justify="space-between"><el-col :span="20">psdechartname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体图表|
|<el-row justify="space-between"><el-col :span="20">psdedataviewid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据视图|
|<el-row justify="space-between"><el-col :span="20">psdedataviewname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据视图|
|<el-row justify="space-between"><el-col :span="20">psdeformid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体表单|
|<el-row justify="space-between"><el-col :span="20">psdeformname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体表单|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelistid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体列表|
|<el-row justify="space-between"><el-col :span="20">psdelistname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体列表|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdereportid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体报表|
|<el-row justify="space-between"><el-col :span="20">psdereportname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体报表|
|<el-row justify="space-between"><el-col :span="20">psdetoolbarid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具栏|
|<el-row justify="space-between"><el-col :span="20">psdetoolbarname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具栏|
|<el-row justify="space-between"><el-col :span="20">psdeuagroupid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|界面行为组|
|<el-row justify="space-between"><el-col :span="20">psdeuagroupname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|界面行为组|
|<el-row justify="space-between"><el-col :span="20">psdeviewid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统视图|
|<el-row justify="space-between"><el-col :span="20">psdeviewname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统视图|
|<el-row justify="space-between"><el-col :span="20">pssysappid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统应用|
|<el-row justify="space-between"><el-col :span="20">pssysappname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统应用|
|<el-row justify="space-between"><el-col :span="20">pssyscalendarid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|日历部件|
|<el-row justify="space-between"><el-col :span="20">pssyscalendarname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|日历部件|
|<el-row justify="space-between"><el-col :span="20">pssysmapviewid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地图部件|
|<el-row justify="space-between"><el-col :span="20">pssysmapviewname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地图部件|
|<el-row justify="space-between"><el-col :span="20">pssysportletcatid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部件分类|
|<el-row justify="space-between"><el-col :span="20">pssysportletcatname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部件分类|
|<el-row justify="space-between"><el-col :span="20">portlettype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|看板部件类型|
|<el-row justify="space-between"><el-col :span="20">showtitlebar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|显示标题栏|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "codename" : null,
  "memo" : null,
  "psappportletid" : null,
  "psappportletname" : null,
  "psdechartid" : null,
  "psdechartname" : null,
  "psdedataviewid" : null,
  "psdedataviewname" : null,
  "psdeformid" : null,
  "psdeformname" : null,
  "psdeid" : null,
  "psdelistid" : null,
  "psdelistname" : null,
  "psdename" : null,
  "psdereportid" : null,
  "psdereportname" : null,
  "psdetoolbarid" : null,
  "psdetoolbarname" : null,
  "psdeuagroupid" : null,
  "psdeuagroupname" : null,
  "psdeviewid" : null,
  "psdeviewname" : null,
  "pssysappid" : null,
  "pssysappname" : null,
  "pssyscalendarid" : null,
  "pssyscalendarname" : null,
  "pssysmapviewid" : null,
  "pssysmapviewname" : null,
  "pssysportletcatid" : null,
  "pssysportletcatname" : null,
  "portlettype" : null,
  "showtitlebar" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "codename" : null,
  "memo" : null,
  "psappportletid" : null,
  "psappportletname" : null,
  "psdechartid" : null,
  "psdechartname" : null,
  "psdedataviewid" : null,
  "psdedataviewname" : null,
  "psdeformid" : null,
  "psdeformname" : null,
  "psdeid" : null,
  "psdelistid" : null,
  "psdelistname" : null,
  "psdename" : null,
  "psdereportid" : null,
  "psdereportname" : null,
  "psdetoolbarid" : null,
  "psdetoolbarname" : null,
  "psdeuagroupid" : null,
  "psdeuagroupname" : null,
  "psdeviewid" : null,
  "psdeviewname" : null,
  "pssysappid" : null,
  "pssysappname" : null,
  "pssyscalendarid" : null,
  "pssyscalendarname" : null,
  "pssysmapviewid" : null,
  "pssysmapviewname" : null,
  "pssysportletcatid" : null,
  "pssysportletcatname" : null,
  "portlettype" : null,
  "showtitlebar" : null,
  "validflag" : null,
}

```

## 检查应用门户部件主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psappportlets/checkkey" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">psappportletid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|应用门户部件标识|
|<el-row justify="space-between"><el-col :span="20">psappportletname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|应用门户部件名称|
|<el-row justify="space-between"><el-col :span="20">psdechartid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体图表|
|<el-row justify="space-between"><el-col :span="20">psdechartname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体图表|
|<el-row justify="space-between"><el-col :span="20">psdedataviewid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据视图|
|<el-row justify="space-between"><el-col :span="20">psdedataviewname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据视图|
|<el-row justify="space-between"><el-col :span="20">psdeformid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体表单|
|<el-row justify="space-between"><el-col :span="20">psdeformname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体表单|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelistid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体列表|
|<el-row justify="space-between"><el-col :span="20">psdelistname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体列表|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdereportid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体报表|
|<el-row justify="space-between"><el-col :span="20">psdereportname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体报表|
|<el-row justify="space-between"><el-col :span="20">psdetoolbarid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具栏|
|<el-row justify="space-between"><el-col :span="20">psdetoolbarname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具栏|
|<el-row justify="space-between"><el-col :span="20">psdeuagroupid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|界面行为组|
|<el-row justify="space-between"><el-col :span="20">psdeuagroupname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|界面行为组|
|<el-row justify="space-between"><el-col :span="20">psdeviewid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统视图|
|<el-row justify="space-between"><el-col :span="20">psdeviewname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统视图|
|<el-row justify="space-between"><el-col :span="20">pssysappid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统应用|
|<el-row justify="space-between"><el-col :span="20">pssysappname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统应用|
|<el-row justify="space-between"><el-col :span="20">pssyscalendarid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|日历部件|
|<el-row justify="space-between"><el-col :span="20">pssyscalendarname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|日历部件|
|<el-row justify="space-between"><el-col :span="20">pssysmapviewid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地图部件|
|<el-row justify="space-between"><el-col :span="20">pssysmapviewname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地图部件|
|<el-row justify="space-between"><el-col :span="20">pssysportletcatid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部件分类|
|<el-row justify="space-between"><el-col :span="20">pssysportletcatname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部件分类|
|<el-row justify="space-between"><el-col :span="20">portlettype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|看板部件类型|
|<el-row justify="space-between"><el-col :span="20">showtitlebar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|显示标题栏|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "codename" : null,
  "memo" : null,
  "psappportletid" : null,
  "psappportletname" : null,
  "psdechartid" : null,
  "psdechartname" : null,
  "psdedataviewid" : null,
  "psdedataviewname" : null,
  "psdeformid" : null,
  "psdeformname" : null,
  "psdeid" : null,
  "psdelistid" : null,
  "psdelistname" : null,
  "psdename" : null,
  "psdereportid" : null,
  "psdereportname" : null,
  "psdetoolbarid" : null,
  "psdetoolbarname" : null,
  "psdeuagroupid" : null,
  "psdeuagroupname" : null,
  "psdeviewid" : null,
  "psdeviewname" : null,
  "pssysappid" : null,
  "pssysappname" : null,
  "pssyscalendarid" : null,
  "pssyscalendarname" : null,
  "pssysmapviewid" : null,
  "pssysmapviewname" : null,
  "pssysportletcatid" : null,
  "pssysportletcatname" : null,
  "portlettype" : null,
  "showtitlebar" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取应用门户部件草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psappportlets/getdraft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">psappportletid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|应用门户部件标识|
|<el-row justify="space-between"><el-col :span="20">psappportletname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|应用门户部件名称|
|<el-row justify="space-between"><el-col :span="20">psdechartid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体图表|
|<el-row justify="space-between"><el-col :span="20">psdechartname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体图表|
|<el-row justify="space-between"><el-col :span="20">psdedataviewid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据视图|
|<el-row justify="space-between"><el-col :span="20">psdedataviewname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据视图|
|<el-row justify="space-between"><el-col :span="20">psdeformid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体表单|
|<el-row justify="space-between"><el-col :span="20">psdeformname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体表单|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelistid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体列表|
|<el-row justify="space-between"><el-col :span="20">psdelistname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体列表|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdereportid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体报表|
|<el-row justify="space-between"><el-col :span="20">psdereportname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体报表|
|<el-row justify="space-between"><el-col :span="20">psdetoolbarid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具栏|
|<el-row justify="space-between"><el-col :span="20">psdetoolbarname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具栏|
|<el-row justify="space-between"><el-col :span="20">psdeuagroupid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|界面行为组|
|<el-row justify="space-between"><el-col :span="20">psdeuagroupname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|界面行为组|
|<el-row justify="space-between"><el-col :span="20">psdeviewid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统视图|
|<el-row justify="space-between"><el-col :span="20">psdeviewname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统视图|
|<el-row justify="space-between"><el-col :span="20">pssysappid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统应用|
|<el-row justify="space-between"><el-col :span="20">pssysappname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统应用|
|<el-row justify="space-between"><el-col :span="20">pssyscalendarid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|日历部件|
|<el-row justify="space-between"><el-col :span="20">pssyscalendarname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|日历部件|
|<el-row justify="space-between"><el-col :span="20">pssysmapviewid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地图部件|
|<el-row justify="space-between"><el-col :span="20">pssysmapviewname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地图部件|
|<el-row justify="space-between"><el-col :span="20">pssysportletcatid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部件分类|
|<el-row justify="space-between"><el-col :span="20">pssysportletcatname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部件分类|
|<el-row justify="space-between"><el-col :span="20">portlettype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|看板部件类型|
|<el-row justify="space-between"><el-col :span="20">showtitlebar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|显示标题栏|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "codename" : null,
  "memo" : null,
  "psappportletid" : null,
  "psappportletname" : null,
  "psdechartid" : null,
  "psdechartname" : null,
  "psdedataviewid" : null,
  "psdedataviewname" : null,
  "psdeformid" : null,
  "psdeformname" : null,
  "psdeid" : null,
  "psdelistid" : null,
  "psdelistname" : null,
  "psdename" : null,
  "psdereportid" : null,
  "psdereportname" : null,
  "psdetoolbarid" : null,
  "psdetoolbarname" : null,
  "psdeuagroupid" : null,
  "psdeuagroupname" : null,
  "psdeviewid" : null,
  "psdeviewname" : null,
  "pssysappid" : null,
  "pssysappname" : null,
  "pssyscalendarid" : null,
  "pssyscalendarname" : null,
  "pssysmapviewid" : null,
  "pssysmapviewname" : null,
  "pssysportletcatid" : null,
  "pssysportletcatname" : null,
  "portlettype" : null,
  "showtitlebar" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "codename" : null,
  "memo" : null,
  "psappportletid" : null,
  "psappportletname" : null,
  "psdechartid" : null,
  "psdechartname" : null,
  "psdedataviewid" : null,
  "psdedataviewname" : null,
  "psdeformid" : null,
  "psdeformname" : null,
  "psdeid" : null,
  "psdelistid" : null,
  "psdelistname" : null,
  "psdename" : null,
  "psdereportid" : null,
  "psdereportname" : null,
  "psdetoolbarid" : null,
  "psdetoolbarname" : null,
  "psdeuagroupid" : null,
  "psdeuagroupname" : null,
  "psdeviewid" : null,
  "psdeviewname" : null,
  "pssysappid" : null,
  "pssysappname" : null,
  "pssyscalendarid" : null,
  "pssyscalendarname" : null,
  "pssysmapviewid" : null,
  "pssysmapviewname" : null,
  "pssysportletcatid" : null,
  "pssysportletcatname" : null,
  "portlettype" : null,
  "showtitlebar" : null,
  "validflag" : null,
}

```

## 保存应用门户部件

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psappportlets/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">dynamodelflag</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">codename</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|代码名称|
|<el-row justify="space-between"><el-col :span="20">memo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|备注|
|<el-row justify="space-between"><el-col :span="20">psappportletid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|应用门户部件标识|
|<el-row justify="space-between"><el-col :span="20">psappportletname</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|应用门户部件名称|
|<el-row justify="space-between"><el-col :span="20">psdechartid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体图表|
|<el-row justify="space-between"><el-col :span="20">psdechartname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体图表|
|<el-row justify="space-between"><el-col :span="20">psdedataviewid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据视图|
|<el-row justify="space-between"><el-col :span="20">psdedataviewname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体数据视图|
|<el-row justify="space-between"><el-col :span="20">psdeformid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体表单|
|<el-row justify="space-between"><el-col :span="20">psdeformname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体表单|
|<el-row justify="space-between"><el-col :span="20">psdeid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdelistid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体列表|
|<el-row justify="space-between"><el-col :span="20">psdelistname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体列表|
|<el-row justify="space-between"><el-col :span="20">psdename</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体|
|<el-row justify="space-between"><el-col :span="20">psdereportid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体报表|
|<el-row justify="space-between"><el-col :span="20">psdereportname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|实体报表|
|<el-row justify="space-between"><el-col :span="20">psdetoolbarid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具栏|
|<el-row justify="space-between"><el-col :span="20">psdetoolbarname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工具栏|
|<el-row justify="space-between"><el-col :span="20">psdeuagroupid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|界面行为组|
|<el-row justify="space-between"><el-col :span="20">psdeuagroupname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|界面行为组|
|<el-row justify="space-between"><el-col :span="20">psdeviewid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统视图|
|<el-row justify="space-between"><el-col :span="20">psdeviewname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统视图|
|<el-row justify="space-between"><el-col :span="20">pssysappid</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|系统应用|
|<el-row justify="space-between"><el-col :span="20">pssysappname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统应用|
|<el-row justify="space-between"><el-col :span="20">pssyscalendarid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|日历部件|
|<el-row justify="space-between"><el-col :span="20">pssyscalendarname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|日历部件|
|<el-row justify="space-between"><el-col :span="20">pssysmapviewid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地图部件|
|<el-row justify="space-between"><el-col :span="20">pssysmapviewname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|地图部件|
|<el-row justify="space-between"><el-col :span="20">pssysportletcatid</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部件分类|
|<el-row justify="space-between"><el-col :span="20">pssysportletcatname</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|部件分类|
|<el-row justify="space-between"><el-col :span="20">portlettype</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|看板部件类型|
|<el-row justify="space-between"><el-col :span="20">showtitlebar</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|显示标题栏|
|<el-row justify="space-between"><el-col :span="20">validflag</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Integer|是否启用|



##### 请求示例： {docsify-ignore}
```json
{
  "dynamodelflag" : null,
  "codename" : null,
  "memo" : null,
  "psappportletid" : null,
  "psappportletname" : null,
  "psdechartid" : null,
  "psdechartname" : null,
  "psdedataviewid" : null,
  "psdedataviewname" : null,
  "psdeformid" : null,
  "psdeformname" : null,
  "psdeid" : null,
  "psdelistid" : null,
  "psdelistname" : null,
  "psdename" : null,
  "psdereportid" : null,
  "psdereportname" : null,
  "psdetoolbarid" : null,
  "psdetoolbarname" : null,
  "psdeuagroupid" : null,
  "psdeuagroupname" : null,
  "psdeviewid" : null,
  "psdeviewname" : null,
  "pssysappid" : null,
  "pssysappname" : null,
  "pssyscalendarid" : null,
  "pssyscalendarname" : null,
  "pssysmapviewid" : null,
  "pssysmapviewname" : null,
  "pssysportletcatid" : null,
  "pssysportletcatname" : null,
  "portlettype" : null,
  "showtitlebar" : null,
  "validflag" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "dynamodelflag" : null,
  "codename" : null,
  "memo" : null,
  "psappportletid" : null,
  "psappportletname" : null,
  "psdechartid" : null,
  "psdechartname" : null,
  "psdedataviewid" : null,
  "psdedataviewname" : null,
  "psdeformid" : null,
  "psdeformname" : null,
  "psdeid" : null,
  "psdelistid" : null,
  "psdelistname" : null,
  "psdename" : null,
  "psdereportid" : null,
  "psdereportname" : null,
  "psdetoolbarid" : null,
  "psdetoolbarname" : null,
  "psdeuagroupid" : null,
  "psdeuagroupname" : null,
  "psdeviewid" : null,
  "psdeviewname" : null,
  "pssysappid" : null,
  "pssysappname" : null,
  "pssyscalendarid" : null,
  "pssyscalendarname" : null,
  "pssysmapviewid" : null,
  "pssysmapviewname" : null,
  "pssysportletcatid" : null,
  "pssysportletcatname" : null,
  "portlettype" : null,
  "showtitlebar" : null,
  "validflag" : null,
}

```

## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psappportlets/fetchdefault" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_dynamodelflag_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">n_dynamodelflag_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|扩展模型|
|<el-row justify="space-between"><el-col :span="20">n_portlettype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|看板部件类型|
|<el-row justify="space-between"><el-col :span="20">n_psappportletid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|应用门户部件标识|
|<el-row justify="space-between"><el-col :span="20">n_psappportletid_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|应用门户部件标识|
|<el-row justify="space-between"><el-col :span="20">n_psappportletname_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|应用门户部件名称|
|<el-row justify="space-between"><el-col :span="20">n_pssysappid_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|系统应用|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_dynamodelflag_eq" : null,
  "n_dynamodelflag_noteq" : null,
  "n_portlettype_eq" : null,
  "n_psappportletid_eq" : null,
  "n_psappportletid_in" : null,
  "n_psappportletname_like" : null,
  "n_pssysappid_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "dynamodelflag" : null,
    "codename" : null,
    "memo" : null,
    "psappportletid" : null,
    "psappportletname" : null,
    "psdechartid" : null,
    "psdechartname" : null,
    "psdedataviewid" : null,
    "psdedataviewname" : null,
    "psdeformid" : null,
    "psdeformname" : null,
    "psdeid" : null,
    "psdelistid" : null,
    "psdelistname" : null,
    "psdename" : null,
    "psdereportid" : null,
    "psdereportname" : null,
    "psdetoolbarid" : null,
    "psdetoolbarname" : null,
    "psdeuagroupid" : null,
    "psdeuagroupname" : null,
    "psdeviewid" : null,
    "psdeviewname" : null,
    "pssysappid" : null,
    "pssysappname" : null,
    "pssyscalendarid" : null,
    "pssyscalendarname" : null,
    "pssysmapviewid" : null,
    "pssysmapviewname" : null,
    "pssysportletcatid" : null,
    "pssysportletcatname" : null,
    "portlettype" : null,
    "showtitlebar" : null,
    "validflag" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/psappportlets/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psappportlets/exportdata/{param},/psappportlets/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psappportlets/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psappportlets/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psappportlets/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psappportlets/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/psappportlets/report" type="info" :closable="false" ></el-alert>
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