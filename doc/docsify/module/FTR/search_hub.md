# 检索中心(search_hub)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|所属|BELONG_TO|文本，可指定长度|100|是||
|描述|DESCRIPTION|长文本，没有长度限制|1048576|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号|IDENTIFIER|文本，可指定长度|100|是||
|标签|TAGS|长文本，长度1000|2000|是||
|名称|TITLE|文本，可指定长度|200|是||
|类型|TYPE|文本，可指定长度|100|是||


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
|[数据查询(DEFAULT)](module/FTR/search_hub/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/FTR/search_hub/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/FTR/search_hub/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/FTR/search_hub?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/FTR/search_hub?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/FTR/search_hub?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/FTR/search_hub?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/FTR/search_hub?id=搜索模式`">
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