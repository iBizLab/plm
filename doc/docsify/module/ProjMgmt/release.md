# 项目发布(release)  <!-- {docsify-ignore-all} -->


跟踪和管理项目的发布。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|否||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|类别|CATEGORIES|长文本，长度1000|2000|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|发布时间|END_AT|日期型||是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|否||
|发布进度|PROGRESS|数值||是||
|项目标识|PROJECT_ID|外键值|100|否||
|项目名称|PROJECT_NAME|外键值文本|200|是||
|开始时间|START_AT|日期型||是||
|状态|STATUS|单项选择(文本值)|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_STAGE_RELEASE_RELEASE_ID](der/DER1N_STAGE_RELEASE_RELEASE_ID)|[发布阶段(STAGE)](module/ProjMgmt/stage)|1:N关系||
|[DER1N_TEST_PLAN_RELEASE_RELEASE_ID](der/DER1N_TEST_PLAN_RELEASE_RELEASE_ID)|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan)|1:N关系||
|[DER1N_WORK_ITEM_RELEASE_RELEASE_ID](der/DER1N_WORK_ITEM_RELEASE_RELEASE_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_RELEASE_PROJECT_PROJECT_ID](der/DER1N_RELEASE_PROJECT_PROJECT_ID)|[项目(PROJECT)](module/ProjMgmt/project)|1:N关系||

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
|删除类别|delete_categories|[实体处理逻辑](module/ProjMgmt/release/logic/delete_categories "删除类别")|默认|不支持||||
|规划工作项|plan_work_item|[实体处理逻辑](module/ProjMgmt/release/logic/plan_work_item "规划工作项")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[删除类别](module/ProjMgmt/release/logic/delete_categories)|delete_categories|无||当类别删除时修改发布的类别属性|
|[规划工作项](module/ProjMgmt/release/logic/plan_work_item)|plan_work_item|无||规划工作项至指定发布|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProjMgmt/release/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/release/query/View)|VIEW|否|否 |否 ||
|[未完成的发布(not_finish)](module/ProjMgmt/release/query/not_finish)|not_finish|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/release/dataset/Default)|DEFAULT|数据查询|是|||
|[未完成的发布(not_finish)](module/ProjMgmt/release/dataset/not_finish)|not_finish|数据查询|否|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CATEGORIES_LIKE|类别|LIKE||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PROJECT_ID_EQ|项目标识|EQ||
|N_PROJECT_NAME_EQ|项目名称|EQ||
|N_PROJECT_NAME_LIKE|项目名称|LIKE||
|N_STATUS_EQ|状态|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 编辑 | toolbar_tree_exp_view_node3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 规划工作项（release） | plan_work_item | 规划工作项 |无数据|<details><summary>后台调用</summary>[plan_work_item](#行为)||
| 新建类别 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction2_click | 新建类别 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node2_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 新建分组 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction1_click | 新建分组 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node1_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 编辑 | open_update_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑发布](app/view/release_update_view)</details>||
| 删除 | toolbar_tree_exp_view_node3_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 删除 | remove | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[删除类别或分组](module/ProjMgmt/release/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[新建分组](module/ProjMgmt/release/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/ProjMgmt/release/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[编辑类别或分组](module/ProjMgmt/release/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProjMgmt/release?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/release?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/release?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/release?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/release?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/release?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/release?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/release?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/release?id=界面逻辑`">
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