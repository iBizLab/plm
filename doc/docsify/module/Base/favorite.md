# 收藏(favorite)  <!-- {docsify-ignore-all} -->


用户自定义的收藏记录，方便快速访问常用的实体或页面。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||

<p class="panel-title"><b>联合主键</b></p>

  * `所属数据标识(OWNER_ID)`
  * `建立人(CREATE_MAN)`

###### 索引

<el-row>
<el-tabs v-model="show_index">

<el-tab-pane label="FAVORITE" name="index_FAVORITE">

|    中文名col150 | 属性名称col200           | 包含属性col100 | 排序方向col100 | 索引长度col100 | 备注col600 |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|false|升序|-1||
|所属数据标识|OWNER_ID|false|升序|-1||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCCUSTOM_FAVORITE_PROJECT](der/DERCCUSTOM_FAVORITE_PROJECT)|[项目(PROJECT)](module/ProjMgmt/project)|自定义关系||
|[DERCUSTOM_FAVORITE_PRODUCT](der/DERCUSTOM_FAVORITE_PRODUCT)|[产品(PRODUCT)](module/ProdMgmt/product)|自定义关系||

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
|[数据查询(DEFAULT)](module/Base/favorite/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/favorite/query/View)|VIEW|否|否 |否 ||
|[我的收藏(my_favorite)](module/Base/favorite/query/my_favorite)|my_favorite|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/favorite/dataset/Default)|DEFAULT|数据查询|是|||
|[我的收藏(my_favorite)](module/Base/favorite/dataset/my_favorite)|my_favorite|数据查询|否|||

## 数据权限

##### 全部数据（读写） :id=favorite-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `READ`
* `UPDATE`
* `CREATE`



##### 我的收藏（读写） :id=favorite-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[我的收藏(my_favorite)](module/Base/favorite#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `READ`
* `CREATE`
* `DELETE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CREATE_MAN_EQ|建立人|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属数据标识|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/favorite?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/favorite?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/favorite?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/favorite?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/favorite?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/favorite?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/favorite?id=搜索模式`">
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

show_index:'index_FAVORITE',
      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>