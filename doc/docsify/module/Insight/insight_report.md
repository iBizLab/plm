# 效能报表(insight_report)  <!-- {docsify-ignore-all} -->


存储效能报表中的基本信息以及所属视图


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|类别|CATEGORIES|多项选择(文本值)|2000|是||
|类别|CATEGORIES_NAME|长文本，没有长度限制|2000|是||
|图表类型|CHART_TYPE|[单项选择(文本值)](index/dictionary_index#report_type "报表类型")|60|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESC|长文本，没有长度限制|1048576|是||
|组别|GROUP|[单项选择(文本值)](index/dictionary_index#report_group "报表_数据集")|60|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|视图标识|VIEW_ID|外键值|100|是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_CATEGORY_INSIGHT_REPORT](der/DERCUSTOM_CATEGORY_INSIGHT_REPORT)|[类别(CATEGORY)](module/Base/category)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_INSIGHT_REPORT_INSIGHT_VIEW_VIEW_ID](der/DER1N_INSIGHT_REPORT_INSIGHT_VIEW_VIEW_ID)|[效能视图(INSIGHT_VIEW)](module/Insight/insight_view)|1:N关系||

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
|删除类别|delete_categories|[实体处理逻辑](module/Insight/insight_report/logic/delete_categories "删除类别")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[删除类别](module/Insight/insight_report/logic/delete_categories)|delete_categories|无||当类别删除时修改发布的类别属性|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Insight/insight_report/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Insight/insight_report/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Insight/insight_report/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CATEGORIES_LIKE|类别|LIKE||
|N_CHART_TYPE_EQ|图表类型|EQ||
|N_GROUP_EQ|组别|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_VIEW_ID_EQ|视图标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 删除 | delete_report | 删除 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary></details>||
| 删除 | toolbar_report_tree_exp_view_node1_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 编辑 | edit_report | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary></details>||
| 编辑 | toolbar_report_tree_exp_view_node2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 设置类别 | set_category | 设置类别 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary></details>||
| 新建类别 | toolbar_report_tree_exp_view_treeexpbar_toolbar_deuiaction2_click | 新建类别 |单项数据|用户自定义||
| 编辑 | toolbar_report_tree_exp_view_node1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 设置仪表盘 | set_instrument_panel | 设置仪表盘 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary></details>||
| 新建分组 | toolbar_report_tree_exp_view_treeexpbar_toolbar_deuiaction1_click | 新建分组 |单项数据|用户自定义||
| 编辑 | toolbar_report_tree_exp_view_node3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 复制 | copy_report | 复制 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary></details>||
| 删除 | toolbar_report_tree_exp_view_node2_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 删除 | toolbar_report_tree_exp_view_node3_cm_deuiaction2_click | 删除 |单项数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[删除类别或分组](module/Insight/insight_report/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[新建分组](module/Insight/insight_report/uilogic/create_section)|create_section|新建效能度量报表分组|
|[新建类别](module/Insight/insight_report/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[编辑类别或分组](module/Insight/insight_report/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Insight/insight_report?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_report?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_report?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_report?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_report?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_report?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_report?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_report?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_report?id=界面逻辑`">
  界面逻辑
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