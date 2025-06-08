# 基线页面(baseline_page)  <!-- {docsify-ignore-all} -->


记录知识管理基线中规划的页面。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|基线|BASELINE|外键值对象|1048576|是||
|建立人|CREATE_MAN|继承属性|100|否||
|建立时间|CREATE_TIME|继承属性||否||
|当前版本标识|CUR_VERSION_ID|继承属性|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|继承属性|100|否||
|名称|NAME|继承属性|200|是||
|所属数据对象|OWNER_TYPE|继承属性|100|是||
|关联主体标识|PRINCIPAL_ID|继承属性|100|是||
|关联主体类型|PRINCIPAL_TYPE|继承属性|100|是||
|空间标识|SPACE_ID|文本，可指定长度|100|是||
|关联目标标识|TARGET_ID|继承属性|100|是||
|关联目标类型|TARGET_TYPE|继承属性|100|是||
|关联目标版本|TARGET_VERSION|外键值对象|1048576|是||
|目标对象版本标识|TARGET_VERSION_ID|继承属性|100|是||
|页面类型|TYPE|[单项选择(文本值)](index/dictionary_index#page_type "页面类型")|200|是||
|更新人|UPDATE_MAN|继承属性|100|否||
|更新时间|UPDATE_TIME|继承属性||否||

<p class="panel-title"><b>联合主键</b></p>

  * `关联主体标识(PRINCIPAL_ID)`
  * `关联目标标识(TARGET_ID)`

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_BASELINE_PAGE_BASELINE](der/DERCUSTOM_BASELINE_PAGE_BASELINE)|[基线(BASELINE)](module/Base/baseline)|自定义关系||
|[DERCUSTOM_BASELINE_PAGE_VERSION](der/DERCUSTOM_BASELINE_PAGE_VERSION)|[版本(VERSION)](module/Base/version)|自定义关系||
|[DERMULINH_BASELINE_PAGE_RELATION](der/DERMULINH_BASELINE_PAGE_RELATION)|[关联(RELATION)](module/Base/relation)|多继承关系（虚拟实体）||

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
|移入基线|shift_in_baseline|[实体处理逻辑](module/Wiki/baseline_page/logic/shift_in_baseline "移入基线")|默认|不支持||||
|移出基线|shift_out_baseline|[实体处理逻辑](module/Wiki/baseline_page/logic/shift_out_baseline "移出基线")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[基线对比数据查询](module/Wiki/baseline_page/logic/baseline_comparison)|baseline_comparison|无||基线对比数据获取，查询两个基线下的页面|
|[移入基线](module/Wiki/baseline_page/logic/shift_in_baseline)|shift_in_baseline|无||将页面移入对应基线|
|[移出基线](module/Wiki/baseline_page/logic/shift_out_baseline)|shift_out_baseline|无||将页面移出对应基线|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Wiki/baseline_page/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Wiki/baseline_page/query/View)|VIEW|否|否 |否 ||
|[填充页面版本数据(fill_version_data)](module/Wiki/baseline_page/query/fill_version_data)|fill_version_data|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Wiki/baseline_page/dataset/Default)|DEFAULT|数据查询|是|||
|[基线对比数据查询(baseline_comparison)](module/Wiki/baseline_page/dataset/baseline_comparison)|baseline_comparison|[实体逻辑](module/Wiki/baseline_page/logic/baseline_comparison)|否|||
|[填充页面版本数据(fill_version_data)](module/Wiki/baseline_page/dataset/fill_version_data)|fill_version_data|数据查询|否|[FillVersionDataDEDataSetRuntime](index/plugin_index#UsrSFPlugin0421357755)||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PRINCIPAL_ID_EQ|关联主体标识|EQ||
|N_TARGET_ID_EQ|关联目标标识|EQ||
|N_TARGET_VERSION_ID_EQ|目标对象版本标识|EQ||
|N_TYPE_EQ|页面类型|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 移出基线 | shift_out_baseline | 移出 |多项数据（主键）|<details><summary>后台调用</summary>[shift_out_baseline](#行为)||
| 基线规划页面 | baseline_page | 基线规划页面 |无数据|<details><summary>后台调用</summary>[shift_in_baseline](#行为)||
| 页面版本对比 | page_version_comparison | 版本对比 |单项数据|<details><summary>打开视图或向导（模态）</summary>[版本对比](app/view/article_page_version_comparison_view)</details>||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Wiki/baseline_page?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/baseline_page?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/baseline_page?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/baseline_page?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/baseline_page?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/baseline_page?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/baseline_page?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/baseline_page?id=界面行为`">
  界面行为
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