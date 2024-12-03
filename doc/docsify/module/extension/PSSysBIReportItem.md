# 智能报表项(PSSysBIReportItem)  <!-- {docsify-ignore-all} -->


智能报表项


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|聚合类型|AGGTYPE|[单项选择(文本值)](index/dictionary_index#DERDERMapType "云实体关系属性影射类型")|20|是||
|项参数|BIREPITEMPARAMS|长文本，没有长度限制|1048576|是||
|报表列标记|BIREPITEMTAG|文本，可指定长度|200|是||
|报表列标记2|BIREPITEMTAG2|文本，可指定长度|200|是||
|报表项类型|BIREPITEMTYPE|[单项选择(文本值)](index/dictionary_index#BIReportItemType "智能报表报表项类型")|30|否||
|项数据|DATA|长文本，没有长度限制|1048576|是||
|放置位置|PLACEMENT|[文本，可指定长度](index/dictionary_index#BIReportItemPlacement "智能报表报表项放置位置")|30|是||
|放置类型|PLACETYPE|[文本，可指定长度](index/dictionary_index#BIReportItemPlaceType "智能报表报表项放置类型")|30|是||
|智能报表立方体维度|PSSYSBICUBEDIMENSIONID|文本，可指定长度|100|是||
|立方体维度|PSSYSBICUBEDIMENSIONNAME|文本，可指定长度|100|是||
|智能报表立方体|PSSYSBICUBEID|文本，可指定长度|100|是||
|智能报表指标|PSSYSBICUBEMEASUREID|文本，可指定长度|100|是||
|立方体指标|PSSYSBICUBEMEASURENAME|文本，可指定长度|100|是||
|智能报表立方体|PSSYSBICUBENAME|文本，可指定长度|100|是||
|智能报表报表|PSSYSBIREPORTID|外键值|100|是||
|智能报表项标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSSYSBIREPORTITEMID|全局唯一标识，文本类型，用户不可见|100|否||
|智能报表项名称|PSSYSBIREPORTITEMNAME|文本，可指定长度|200|是||
|智能报表报表|PSSYSBIREPORTNAME|外键值文本|200|是||
|PSSYSBISCHEMEID|PSSYSBISCHEMEID|外键值附加数据|100|是||
|指标引用类型|REFTYPE|[单项选择(文本值)](index/dictionary_index#BIReportItemMSRefType "智能报表报表指标引用类型")|30|是||
|标准数据类型|STDDATATYPE|单项选择(数值)||是||
|启用|VALIDFLAG|是否逻辑||否||
|值格式化|VALUEFORMAT|文本，可指定长度|200|是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_PSSYSBIREPORTITEM_PSSYSBIREPORT_PSSYSBIREPORTID](der/DER1N_PSSYSBIREPORTITEM_PSSYSBIREPORT_PSSYSBIREPORTID)|[智能报表(PSSYSBIREPORT)](module/extension/PSSysBIReport)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

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
|[数据查询(DEFAULT)](module/extension/PSSysBIReportItem/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSSysBIReportItem/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSSysBIReportItem/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_AGGTYPE_EQ|聚合类型|EQ||
|N_BIREPITEMTYPE_EQ|报表项类型|EQ||
|N_PSSYSBIREPORTID_EQ|智能报表报表|EQ||
|N_PSSYSBIREPORTITEMID_EQ|智能报表项标识|EQ||
|N_PSSYSBIREPORTITEMNAME_LIKE|智能报表项名称|LIKE||
|N_PSSYSBIREPORTNAME_EQ|智能报表报表|EQ||
|N_PSSYSBIREPORTNAME_LIKE|智能报表报表|LIKE||
|N_REFTYPE_EQ|指标引用类型|EQ||
|N_STDDATATYPE_EQ|标准数据类型|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/extension/PSSysBIReportItem?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBIReportItem?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBIReportItem?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBIReportItem?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBIReportItem?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBIReportItem?id=搜索模式`">
  搜索模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'minor',


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>