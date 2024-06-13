# 基线需求(baseline_idea)  <!-- {docsify-ignore-all} -->


记录产品基线中规划的需求。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|负责人|ASSIGNEE_ID|文本，可指定长度|100|是||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|基线|BASELINE|外键值对象|1048576|是||
|类别标识|CATEGORY_ID|文本，可指定长度|100|是||
|建立人|CREATE_MAN|继承属性|100|否||
|建立时间|CREATE_TIME|继承属性||否||
|当前版本标识|CUR_VERSION_ID|继承属性|100|是||
|描述|DESCRIPTION|文本，可指定长度|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|继承属性|100|否||
|需求来源|IDEA_FROM|单项选择(文本值)|200|是||
|需求类型|IDEA_TYPE|[单项选择(文本值)](index/dictionary_index#requirement_type "需求类型")|200|是||
|编号|IDENTIFIER|文本，可指定长度|100|是||
|是否已归档|IS_ARCHIVED|文本，可指定长度|100|是||
|是否已删除|IS_DELETED|文本，可指定长度|100|是||
|名称|NAME|继承属性|200|是||
|所属数据对象|OWNER_TYPE|继承属性|100|是||
|计划时间|PLAN_AT|文本，可指定长度|100|是||
|计划时间周期单位|PLAN_AT_GRANULARITY|单项选择(文本值)|200|是||
|计划结束时间|PLAN_AT_TO|日期时间型||是||
|关联主体标识|PRINCIPAL_ID|继承属性|100|是||
|关联主体类型|PRINCIPAL_TYPE|继承属性|100|是||
|优先级|PRIORITY|文本，可指定长度|100|是||
|产品|PRODUCT_ID|文本，可指定长度|100|是||
|进度|PROGRESS|数值||是||
|实际时间|REAL_AT|文本，可指定长度|100|是||
|实际开始时间|REAL_AT_FROM|日期时间型||是||
|实际结束时间|REAL_AT_TO|日期时间型||是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|100|是||
|状态|STATE|文本，可指定长度|100|是||
|关联目标标识|TARGET_ID|继承属性|100|是||
|关联目标类型|TARGET_TYPE|继承属性|100|是||
|关联目标版本|TARGET_VERSION|外键值对象|1048576|是||
|目标对象版本标识|TARGET_VERSION_ID|继承属性|100|是||
|标题|TITLE|文本，可指定长度|100|是||
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
|[DERCUSTOM_BASELINE_IDEA_BASELINE](der/DERCUSTOM_BASELINE_IDEA_BASELINE)|[基线(BASELINE)](module/Base/baseline)|自定义关系||
|[DERCUSTOM_BASELINE_IDEA_VERSION](der/DERCUSTOM_BASELINE_IDEA_VERSION)|[版本(VERSION)](module/Base/version)|自定义关系||
|[DERMULINH_BASELINE_IDEA_RELATION](der/DERMULINH_BASELINE_IDEA_RELATION)|[关联(RELATION)](module/Base/relation)|多继承关系（虚拟实体）||

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
|移入基线|shift_in_baseline|[实体处理逻辑](module/ProdMgmt/baseline_idea/logic/shift_in_baseline "移入基线")|默认|不支持||||
|移出基线|shift_out_baseline|[实体处理逻辑](module/ProdMgmt/baseline_idea/logic/shift_out_baseline "移出基线")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[基线对比数据查询](module/ProdMgmt/baseline_idea/logic/baseline_comparison)|baseline_comparison|无||基线对比数据获取，查询两个基线下的关联产品需求|
|[移入基线](module/ProdMgmt/baseline_idea/logic/shift_in_baseline)|shift_in_baseline|无||将需求移入对应基线|
|[移出基线](module/ProdMgmt/baseline_idea/logic/shift_out_baseline)|shift_out_baseline|无||将需求移出对应基线|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProdMgmt/baseline_idea/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProdMgmt/baseline_idea/query/View)|VIEW|否|否 |否 ||
|[基线关联版本(baseline_relation_version)](module/ProdMgmt/baseline_idea/query/baseline_relation_version)|baseline_relation_version|否|否 |否 ||
|[填充产品需求版本数据(fill_version_data)](module/ProdMgmt/baseline_idea/query/fill_version_data)|fill_version_data|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProdMgmt/baseline_idea/dataset/Default)|DEFAULT|数据查询|是|||
|[基线对比数据查询(baseline_comparison)](module/ProdMgmt/baseline_idea/dataset/baseline_comparison)|baseline_comparison|[实体逻辑](module/ProdMgmt/baseline_idea/logic/baseline_comparison)|否|||
|[基线关联版本(baseline_relation_version)](module/ProdMgmt/baseline_idea/dataset/baseline_relation_version)|baseline_relation_version|数据查询|否|||
|[填充产品需求版本数据(fill_version_data)](module/ProdMgmt/baseline_idea/dataset/fill_version_data)|fill_version_data|数据查询|否|[FillVersionDataDEDataSetRuntime](index/plugin_index#UsrSFPlugin0421357755)||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_IDEA_FROM_EQ|需求来源|EQ||
|N_IDEA_TYPE_EQ|需求类型|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PLAN_AT_GRANULARITY_EQ|计划时间周期单位|EQ||
|N_PRINCIPAL_ID_EQ|关联主体标识|EQ||
|N_TARGET_ID_EQ|关联目标标识|EQ||
|N_TARGET_VERSION_ID_EQ|目标对象版本标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 需求版本对比 | idea_version_comparison | 版本对比 |单项数据|<details><summary>打开视图或向导（模态）</summary>[版本对比](app/view/idea_version_comparison_view)</details>||
| 移出基线 | shift_out_baseline | 移出 |多项数据（主键）|<details><summary>后台调用</summary>[shift_out_baseline](#行为)||
| 规划需求 | baseline_plan_idea | 规划需求 |无数据|<details><summary>后台调用</summary>[shift_in_baseline](#行为)||
| 版本对比（基线列表） | version_comparison | 版本对比 |单项数据|<details><summary>打开视图或向导（模态）</summary>[版本对比](app/view/idea_version_comparison_view)</details>||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[返回](module/ProdMgmt/baseline_idea/uilogic/back)|back|查看已规划基线后，返回主表单按钮使用|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProdMgmt/baseline_idea?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/baseline_idea?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/baseline_idea?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/baseline_idea?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/baseline_idea?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/baseline_idea?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/baseline_idea?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/baseline_idea?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/baseline_idea?id=界面逻辑`">
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