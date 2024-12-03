# 智能报表立方体(PSSysBICube)  <!-- {docsify-ignore-all} -->


智能报表立方体


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|立方体标记|BICUBETAG|文本，可指定长度|200|是||
|立方体标记2|BICUBETAG2|文本，可指定长度|200|是||
|代码名称|CODENAME|文本，可指定长度|60|否||
|备注|MEMO|长文本，长度1000|2000|是||
|立方体实体|PSDEID|文本，可指定长度|100|否||
|立方体实体|PSDENAME|文本，可指定长度|100|是||
|智能报表立方体标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSSYSBICUBEID|全局唯一标识，文本类型，用户不可见|100|否||
|立方体名称|PSSYSBICUBENAME|文本，可指定长度|200|否||
|智能报表体系|PSSYSBISCHEMEID|文本，可指定长度|100|否||
|智能报表体系|PSSYSBISCHEMENAME|文本，可指定长度|100|是||
|启用|VALIDFLAG|是否逻辑||否||


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
|[数据查询(DEFAULT)](module/extension/PSSysBICube/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSSysBICube/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSSysBICube/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读写） :id=PSSysBICube-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `READ`
* `CREATE`
* `DELETE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_PSSYSBICUBEID_EQ|智能报表立方体标识|EQ||
|N_PSSYSBICUBENAME_LIKE|立方体名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/extension/PSSysBICube?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBICube?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBICube?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBICube?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBICube?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSSysBICube?id=搜索模式`">
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