# 页面版本(page_version)  <!-- {docsify-ignore-all} -->


用于记录页面版本相关信息。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|数据|DATA|长文本，没有长度限制|1048576|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|版本|IDENTIFIER|数值|10|是||
|是否命名|IS_NAMED|是否逻辑||是||
|是否发布|IS_PUBLISHED|是否逻辑||是||
|名称|NAME|文本，可指定长度|200|是||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_PAGE_VERSION_PAGE](der/DERCUSTOM_PAGE_VERSION_PAGE)|[页面(PAGE)](module/Wiki/article_page)|自定义关系||

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

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|动态存储|动态存储|[页面版本(PAGE_VERSION)](module/Wiki/page_version)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Wiki/page_version/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Wiki/page_version/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Wiki/page_version/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读） :id=page_version-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>




##### 全部数据（读写） :id=page_version-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `UPDATE`
* `DELETE`
* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_IS_NAMED_EQ|是否命名|EQ||
|N_IS_PUBLISHED_EQ|是否发布|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属数据标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 查看已发布版本 | is_published_version | 已发布版本 |无数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[查看已发布版本](module/Wiki/page_version/uilogic/is_published_version)|is_published_version|查看已发布的版本（页面）|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Wiki/page_version?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/page_version?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/page_version?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/page_version?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/page_version?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/page_version?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/page_version?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/page_version?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/page_version?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/page_version?id=界面逻辑`">
  界面逻辑
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