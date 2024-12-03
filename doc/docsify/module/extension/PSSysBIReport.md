# 智能报表(PSSysBIReport)  <!-- {docsify-ignore-all} -->


智能报表


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|报表模型|BIREPORTMODEL|长文本，没有长度限制|1048576|是||
|报表标记|BIREPORTTAG|文本，可指定长度|200|是||
|报表标记2|BIREPORTTAG2|文本，可指定长度|200|是||
|报表界面模型|BIREPORTUIMODEL|长文本，没有长度限制|1048576|是||
|代码名称|CODENAME|文本，可指定长度|60|是||
|备注|MEMO|长文本，长度1000|2000|是||
|智能报表立方体|PSSYSBICUBEID|文本，可指定长度|100|是||
|智能报表立方体|PSSYSBICUBENAME|文本，可指定长度|100|是||
|智能报表标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSSYSBIREPORTID|全局唯一标识，文本类型，用户不可见|100|否||
|智能报表项|PSSYSBIREPORTITEMS|一对多关系数据集合|1048576|是||
|智能报表名称|PSSYSBIREPORTNAME|文本，可指定长度|200|是||
|智能报表体系|PSSYSBISCHEMEID|文本，可指定长度|100|是||
|智能报表体系|PSSYSBISCHEMENAME|文本，可指定长度|100|是||
|启用|VALIDFLAG|是否逻辑||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_PSSYSBIREPORTITEM_PSSYSBIREPORT_PSSYSBIREPORTID](der/DER1N_PSSYSBIREPORTITEM_PSSYSBIREPORT_PSSYSBIREPORTID)|[智能报表项(PSSYSBIREPORTITEM)](module/extension/PSSysBIReportItem)|1:N关系||


</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|应用|apply|用户自定义|默认|不支持||||
|编译报表模型|compileAppBIReport|用户自定义|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#PSSysBIReport_Update)|||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[更新报表](module/extension/PSSysBIReport/logic/update_report)|update_report|无||更新报表|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/extension/PSSysBIReport/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSSysBIReport/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSSysBIReport/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_PSSYSBIREPORTID_EQ|智能报表标识|EQ||
|N_PSSYSBIREPORTNAME_LIKE|智能报表名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/extension/PSSysBIReport?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBIReport?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBIReport?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBIReport?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBIReport?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBIReport?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBIReport?id=搜索模式`">
  搜索模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'major',


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>