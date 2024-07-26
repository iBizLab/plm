# 应用门户部件(PSAppPortlet)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|代码名称|CODENAME|文本，可指定长度|50|否||
|扩展模型|DYNAMODELFLAG|是否逻辑||是||
|备注|MEMO|长文本，长度1000|2000|是||
|看板部件类型|PORTLETTYPE|[单项选择(文本值)](index/dictionary_index#PortletType "云平台门户部件类型")|40|否||
|应用门户部件标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSAPPPORTLETID|全局唯一标识，文本类型，用户不可见|100|否||
|应用门户部件名称|PSAPPPORTLETNAME|文本，可指定长度|200|否||
|实体图表|PSDECHARTID|文本，可指定长度|100|是||
|实体图表|PSDECHARTNAME|文本，可指定长度|100|是||
|实体数据视图|PSDEDATAVIEWID|文本，可指定长度|100|是||
|实体数据视图|PSDEDATAVIEWNAME|文本，可指定长度|100|是||
|实体表单|PSDEFORMID|文本，可指定长度|100|是||
|实体表单|PSDEFORMNAME|文本，可指定长度|100|是||
|实体|PSDEID|文本，可指定长度|100|是||
|实体列表|PSDELISTID|文本，可指定长度|100|是||
|实体列表|PSDELISTNAME|文本，可指定长度|100|是||
|实体|PSDENAME|文本，可指定长度|100|是||
|实体报表|PSDEREPORTID|文本，可指定长度|100|是||
|实体报表|PSDEREPORTNAME|文本，可指定长度|100|是||
|工具栏|PSDETOOLBARID|文本，可指定长度|100|是||
|工具栏|PSDETOOLBARNAME|文本，可指定长度|100|是||
|界面行为组|PSDEUAGROUPID|文本，可指定长度|100|是||
|界面行为组|PSDEUAGROUPNAME|文本，可指定长度|100|是||
|系统视图|PSDEVIEWID|文本，可指定长度|100|是||
|系统视图|PSDEVIEWNAME|文本，可指定长度|100|是||
|系统应用|PSSYSAPPID|文本，可指定长度|100|否||
|系统应用|PSSYSAPPNAME|文本，可指定长度|100|是||
|日历部件|PSSYSCALENDARID|文本，可指定长度|100|是||
|日历部件|PSSYSCALENDARNAME|文本，可指定长度|100|是||
|地图部件|PSSYSMAPVIEWID|文本，可指定长度|100|是||
|地图部件|PSSYSMAPVIEWNAME|文本，可指定长度|100|是||
|部件分类|PSSYSPORTLETCATID|文本，可指定长度|100|是||
|部件分类|PSSYSPORTLETCATNAME|文本，可指定长度|100|是||
|显示标题栏|SHOWTITLEBAR|是否逻辑||是||
|是否启用|VALIDFLAG|是否逻辑||否||


## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/extension/PSAppPortlet/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSAppPortlet/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSAppPortlet/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_DYNAMODELFLAG_EQ|扩展模型|EQ||
|N_DYNAMODELFLAG_NOTEQ|扩展模型|NOTEQ||
|N_PORTLETTYPE_EQ|看板部件类型|EQ||
|N_PSAPPPORTLETID_IN|应用门户部件标识|IN||
|N_PSAPPPORTLETID_EQ|应用门户部件标识|EQ||
|N_PSAPPPORTLETNAME_LIKE|应用门户部件名称|LIKE||
|N_PSSYSAPPID_EQ|系统应用|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/extension/PSAppPortlet?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSAppPortlet?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSAppPortlet?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSAppPortlet?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSAppPortlet?id=搜索模式`">
  搜索模式
</el-anchor-link>
</el-anchor>
</div>

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