# 项目发布(release)  <!-- {docsify-ignore-all} -->


跟踪和管理项目的发布。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|全部工作项数|ALL_WORK_ITEMS|数值||是||
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|否||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|类别|CATEGORIES|多项选择(文本值)|2000|是||
|类别|CATEGORIES_NAME|长文本，长度1000|2000|是||
|发布日志|CHANGELOG|长文本，没有长度限制|1048576|是||
|已完成工作项数|COMPLETED_WORK_ITEMS|数值||是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|发布时间|END_AT|日期型||是||
|发布年份|END_YEAR|文本，可指定长度|200|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|否||
|项目标识|PROJECT_ID|外键值|100|否||
|项目是否删除|PROJECT_IS_DELETED|外键值附加数据||是||
|项目名称|PROJECT_NAME|外键值文本|200|是||
|项目类型|PROJECT_TYPE|[外键值附加数据](index/dictionary_index#project_type "项目类型")|60|是||
|进度|SCHEDULE|数值||是||
|发布阶段|STAGE_TRANSITIONS|一对多关系数据集合|1048576|是||
|开始时间|START_AT|日期型||是||
|阶段|STATUS|单项选择(文本值)|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="BI查询属性组" name="field_group_bi_search_group">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|类别|CATEGORIES_NAME|长文本，长度1000|2000|是||
|更新时间|UPDATE_TIME|日期时间型||否||
|建立时间|CREATE_TIME|日期时间型||否||
|开始时间|START_AT|日期型||是||
|发布时间|END_AT|日期型||是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|否||
|名称|NAME|文本，可指定长度|200|否||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|已完成工作项数|COMPLETED_WORK_ITEMS|数值||是||
|全部工作项数|ALL_WORK_ITEMS|数值||是||
|进度|SCHEDULE|数值||是||
|类别|CATEGORIES|多项选择(文本值)|2000|是||
|项目名称|PROJECT_NAME|外键值文本|200|是||
|项目标识|PROJECT_ID|外键值|100|否||
|阶段|STATUS|单项选择(文本值)|60|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|项目是否删除|PROJECT_IS_DELETED|外键值附加数据||是||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_STAGE_RELEASE_RELEASE_ID](der/DER1N_STAGE_RELEASE_RELEASE_ID)|[发布阶段(STAGE)](module/ProjMgmt/stage)|1:N关系||
|[DER1N_TEST_PLAN_RELEASE_RELEASE_ID](der/DER1N_TEST_PLAN_RELEASE_RELEASE_ID)|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan)|1:N关系||
|[DER1N_WORK_ITEM_RELEASE_RELEASE_ID](der/DER1N_WORK_ITEM_RELEASE_RELEASE_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|1:N关系||
|[DERCUSTOM_RELATION_RELEASE](der/DERCUSTOM_RELATION_RELEASE)|[关联(RELATION)](module/Base/relation)|自定义关系||


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
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#release_Create)|||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#release_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|计算发布工作项数量|cal_release_work_item_num|用户自定义|默认|不支持|[附加操作](index/action_logic_index#release_cal_release_work_item_num)|||
|获取修改阶段|change_draft|[实体处理逻辑](module/ProjMgmt/release/logic/change_draft "获取修改阶段")|默认|不支持||||
|修改发布当前阶段|change_stage|[实体处理逻辑](module/ProjMgmt/release/logic/change_stage "修改发布当前阶段")|默认|不支持||||
|迭代取消关联发布|del_relation|[实体处理逻辑](module/ProjMgmt/release/logic/del_relation "迭代取消关联发布")|默认|不支持||||
|删除类别|delete_categories|[实体处理逻辑](module/ProjMgmt/release/logic/delete_categories "删除类别")|默认|不支持||||
|规划工作项|plan_work_item|[实体处理逻辑](module/ProjMgmt/release/logic/plan_work_item "规划工作项")|默认|不支持||||
|发布关联迭代|release_relation_sprint|[实体处理逻辑](module/ProjMgmt/release/logic/release_relation_sprint "发布关联迭代")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[修改发布当前阶段](module/ProjMgmt/release/logic/change_stage)|change_stage|无||修改发布当前阶段|
|[删除类别](module/ProjMgmt/release/logic/delete_categories)|delete_categories|无||当类别删除时修改发布的类别属性|
|[发布关联迭代](module/ProjMgmt/release/logic/release_relation_sprint)|release_relation_sprint|无||发布关联迭代生成关联数据|
|[发布时间变更附加逻辑](module/ProjMgmt/release/logic/end_at_onchange)|end_at_onchange|属性逻辑||更新最末发布阶段的时间|
|[填充类别文本](module/ProjMgmt/release/logic/fill_categories_name)|fill_categories_name|无||填充类别对应文本|
|[开始时间变更附加逻辑](module/ProjMgmt/release/logic/start_at_onchange)|start_at_onchange|属性逻辑||更新首个发布阶段的时间|
|[新建后附加逻辑](module/ProjMgmt/release/logic/after_create)|after_create|无||根据全局定义的阶段，生成发布阶段|
|[获取修改阶段](module/ProjMgmt/release/logic/change_draft)|change_draft|无||获取修改阶段|
|[规划工作项](module/ProjMgmt/release/logic/plan_work_item)|plan_work_item|无||规划工作项至指定发布|
|[计算发布工作项数量](module/ProjMgmt/release/logic/cal_release_work_item_num)|cal_release_work_item_num|无||发布工作项数量计算|
|[迭代取消关联发布](module/ProjMgmt/release/logic/del_relation)|del_relation|无||迭代取消关联发布|
|[项目下发布（移动端）](module/ProjMgmt/release/logic/mob_project_release)|mob_project_release|无|||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProjMgmt/release/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/release/query/View)|VIEW|否|否 |否 ||
|[BI反查(bi_detail)](module/ProjMgmt/release/query/bi_detail)|bi_detail|否|否 |否 ||
|[BI查询(bi_search)](module/ProjMgmt/release/query/bi_search)|bi_search|否|否 |否 ||
|[选择发布关联(choose_relese_relation)](module/ProjMgmt/release/query/choose_relese_relation)|choose_relese_relation|否|否 |否 ||
|[未已发布(not_published)](module/ProjMgmt/release/query/not_published)|not_published|否|否 |否 ||
|[产品所属发布(product_re_project_published)](module/ProjMgmt/release/query/product_re_project_published)|product_re_project_published|否|否 |否 |产品所关联项目中的已发布|
|[已发布(published)](module/ProjMgmt/release/query/published)|published|否|否 |否 ||
|[只读用户(reader)](module/ProjMgmt/release/query/reader)|reader|否|否 |否 ||
|[迭代关联发布(sprint_relation)](module/ProjMgmt/release/query/sprint_relation)|sprint_relation|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/release/dataset/Default)|DEFAULT|数据查询|是|||
|[BI反查(bi_detail)](module/ProjMgmt/release/dataset/bi_detail)|bi_detail|数据查询|否|||
|[BI查询(bi_search)](module/ProjMgmt/release/dataset/bi_search)|bi_search|数据查询|否|||
|[选择发布关联(choose_relese_relation)](module/ProjMgmt/release/dataset/choose_relese_relation)|choose_relese_relation|数据查询|否|||
|[项目下发布（移动端）(mob_project_release)](module/ProjMgmt/release/dataset/mob_project_release)|mob_project_release|[实体逻辑](module/ProjMgmt/release/logic/mob_project_release)|否|||
|[未已发布(not_published)](module/ProjMgmt/release/dataset/not_published)|not_published|数据查询|否|||
|[产品所属发布(product_re_project_published)](module/ProjMgmt/release/dataset/product_re_project_published)|product_re_project_published|数据查询|否||产品所关联项目中的已发布|
|[已发布(published)](module/ProjMgmt/release/dataset/published)|published|数据查询|否|||
|[只读用户(reader)](module/ProjMgmt/release/dataset/reader)|reader|数据查询|否|||
|[迭代关联发布(sprint_relation)](module/ProjMgmt/release/dataset/sprint_relation)|sprint_relation|数据查询|否|||

## 数据权限

##### 全部数据（读写） :id=release-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `UPDATE(项目(SUBDATA))`
* `DELETE(项目(SUBDATA))`
* `CREATE(项目(SUBDATA))`



##### 操作用户(读) :id=release-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/ProjMgmt/release#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ(项目(READ))`



##### 操作用户(写) :id=release-USER_W

<p class="panel-title"><b>数据范围</b></p>

* `无`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE(项目(SUBDATA))`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CATEGORIES_LIKE|类别|LIKE||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PROJECT_ID_EQ|项目标识|EQ||
|N_PROJECT_NAME_EQ|项目名称|EQ||
|N_PROJECT_NAME_LIKE|项目名称|LIKE||
|N_STATUS_EQ|阶段|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 编辑 | toolbar_tree_exp_view_node3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| BI编辑 | bi_report_view | 编辑 |无数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node2_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 编辑发布日志 | edit_change_log | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[发布日志](app/view/release_change_log_option_view)</details>||
| 跳转发布主视图 | open_release_main_view | 跳转发布概览页面 |单项数据|用户自定义||
| 编辑 | open_update_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑发布](app/view/release_update_view)</details>||
| 删除 | toolbar_tree_exp_view_node3_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 删除 | remove | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| BI全屏 | bi_full_screen | 全屏 |无数据|用户自定义||
| BI刷新 | bi_refresh | 刷新 |无数据|用户自定义||
| 全屏 | toolbar_release_grid_parts_toolbar_deuiaction1_click | 全屏 |单项数据|用户自定义||
| 迭代取消关联发布 | sprint_del_relation_release | 取消关联 |单项数据|<details><summary>后台调用</summary>[del_relation](#行为)||
| 编辑 | toolbar_tree_exp_view_node1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 规划工作项（release） | plan_work_item | 规划工作项 |无数据|<details><summary>后台调用</summary>[plan_work_item](#行为)||
| 刷新 | toolbar_release_grid_parts_toolbar_deuiaction2_click | 刷新 |单项数据|用户自定义||
| 新建类别 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction2_click | 新建类别 |单项数据|用户自定义||
| 打开发布 | open_release | 打开发布 |单项数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 新建分组 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction1_click | 新建分组 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node1_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 打开路线图视图_发布 | open_roadmap | 路线图 |无数据|<details><summary>打开视图或向导（模态）</summary>[路线图](app/view/release_road_map_view)</details>||
| 发布关联迭代 | release_relation_sprint | 关联迭代 |无数据|<details><summary>后台调用</summary>[release_relation_sprint](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[删除类别或分组](module/ProjMgmt/release/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[控制关联迭代](module/ProjMgmt/release/uilogic/control_relation_sprint)|control_relation_sprint|根据项目类型控制发布概览中关联迭代面板的显示|
|[新建分组](module/ProjMgmt/release/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/ProjMgmt/release/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[编辑类别或分组](module/ProjMgmt/release/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|
|[计算进度](module/ProjMgmt/release/uilogic/cal_schedule)|cal_schedule|表格列计算进度|
|[门户全屏](module/ProjMgmt/release/uilogic/full_screen)|full_screen|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户刷新](module/ProjMgmt/release/uilogic/portlet_refresh)|portlet_refresh|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户编辑](module/ProjMgmt/release/uilogic/edit_to_design)|edit_to_design|所有门户部件配置该逻辑触发跳转至编辑页|

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
<el-anchor-link :href="`#/module/ProjMgmt/release?id=数据权限`">
  数据权限
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
show_field_group:'field_group_bi_search_group',

      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>