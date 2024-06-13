# 排期(product_plan)  <!-- {docsify-ignore-all} -->


规划产品的开发和发布时间表，包括各个阶段的开始和结束时间，包含需求。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|是||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|类别|CATEGORIES|多项选择(文本值)|2000|是||
|类别|CATEGORIES_NAME|长文本，长度1000|2000|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|计划结束|END_AT|日期型||是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否已删除|IS_DELETED|是否逻辑||是||
|计划名称|NAME|文本，可指定长度|200|是||
|产品标识|PRODUCT_ID|外键值|100|是||
|计划开始|START_AT|日期型||是||
|类别|TYPE|长文本，长度1000|1000|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_CATEGORY_PRODUCT_PLAN](der/DERCUSTOM_CATEGORY_PRODUCT_PLAN)|[类别(CATEGORY)](module/Base/category)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_PRODUCT_PLAN](der/DERCUSTOM_RELATION_TARGET_PRODUCT_PLAN)|[关联(RELATION)](module/Base/relation)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_PLAN_PRODUCT_PRODUCT_ID](der/DER1N_PLAN_PRODUCT_PRODUCT_ID)|[产品(PRODUCT)](module/ProdMgmt/product)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#product_plan_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|删除|delete|[实体处理逻辑](module/ProdMgmt/product_plan/logic/delete "删除")|默认|不支持||||
|删除类别|delete_categories|[实体处理逻辑](module/ProdMgmt/product_plan/logic/delete_categories "删除类别")|默认|不支持||||
|排期关联需求|product_plan_relation_idea|[实体处理逻辑](module/ProdMgmt/product_plan/logic/product_plan_relation_idea "排期关联需求")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[删除](module/ProdMgmt/product_plan/logic/delete)|delete|无||产品排期数据的逻辑删除，修改产品排期的是否删除属性|
|[删除类别](module/ProdMgmt/product_plan/logic/delete_categories)|delete_categories|无||删除对应类别时对对应排期的类别属性进行处理|
|[填充类别文本](module/ProdMgmt/product_plan/logic/fill_categories_name)|fill_categories_name|无||填充类别对应文本|
|[排期关联需求](module/ProdMgmt/product_plan/logic/product_plan_relation_idea)|product_plan_relation_idea|无||排期计划关联需求，生成正反向关联数据|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProdMgmt/product_plan/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProdMgmt/product_plan/query/View)|VIEW|否|否 |否 ||
|[类别下的计划(category_plan)](module/ProdMgmt/product_plan/query/category_plan)|category_plan|否|否 |否 ||
|[正常状态(normal)](module/ProdMgmt/product_plan/query/normal)|normal|否|否 |否 ||
|[当前计划(this_plan)](module/ProdMgmt/product_plan/query/this_plan)|this_plan|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProdMgmt/product_plan/dataset/Default)|DEFAULT|数据查询|是|||
|[正常状态(normal)](module/ProdMgmt/product_plan/dataset/normal)|normal|数据查询|否|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CATEGORIES_LIKE|类别|LIKE||
|N_ID_EQ|标识|EQ||
|N_IS_DELETED_EQ|是否已删除|EQ||
|N_NAME_LIKE|计划名称|LIKE||
|N_PRODUCT_ID_EQ|产品标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 编辑 | toolbar_tree_exp_view_node3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 添加需求（排期） | product_plan_relation_idea | 添加需求 |无数据|<details><summary>后台调用</summary>[product_plan_relation_idea](#行为)||
| 新建分组 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction2_click | 新建分组 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node2_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 新建类别 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction1_click | 新建类别 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node1_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 编辑 | edit_plan | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑计划](app/view/product_plan_edit_option_view)</details>||
| 删除 | toolbar_tree_exp_view_node3_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 删除 | delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[删除类别或分组](module/ProdMgmt/product_plan/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[新建分组](module/ProdMgmt/product_plan/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/ProdMgmt/product_plan/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[编辑类别或分组](module/ProdMgmt/product_plan/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProdMgmt/product_plan?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_plan?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_plan?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_plan?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_plan?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_plan?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_plan?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_plan?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_plan?id=界面逻辑`">
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