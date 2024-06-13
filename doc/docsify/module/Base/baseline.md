# 基线(baseline)  <!-- {docsify-ignore-all} -->


用于查看和管理基线相关信息。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|是||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|类别|CATEGORIES|多项选择(文本值)|2000|是||
|类别|CATEGORIES_NAME|长文本，长度1000|2000|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|否||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|状态|STATUS|[单项选择(文本值)](index/dictionary_index#baseline_status "基线状态")|60|是||
|基线类型|TYPE|[单项选择(文本值)](index/dictionary_index#baseline_type "基线类型")|60|否||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_BASELINE_IDEA_BASELINE](der/DERCUSTOM_BASELINE_IDEA_BASELINE)|[基线需求(BASELINE_IDEA)](module/ProdMgmt/baseline_idea)|自定义关系||
|[DERCUSTOM_BASELINE_PAGE_BASELINE](der/DERCUSTOM_BASELINE_PAGE_BASELINE)|[基线页面(BASELINE_PAGE)](module/Wiki/baseline_page)|自定义关系||
|[DERCUSTOM_BASELINE_TEST_CASE_BASELINE](der/DERCUSTOM_BASELINE_TEST_CASE_BASELINE)|[基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case)|自定义关系||
|[DERCUSTOM_BASELINE_WORK_ITEM_BASELINE](der/DERCUSTOM_BASELINE_WORK_ITEM_BASELINE)|[基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item)|自定义关系||
|[DERCUSTOM_RELATION_BASELINE](der/DERCUSTOM_RELATION_BASELINE)|[关联(RELATION)](module/Base/relation)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_BASELINE_LIBRARY_OWNER_ID](der/DERCUSTOM_BASELINE_LIBRARY_OWNER_ID)|[测试库(LIBRARY)](module/TestMgmt/library)|自定义关系||
|[DERCUSTOM_BASELINE_PRODUCT_OWNER_ID](der/DERCUSTOM_BASELINE_PRODUCT_OWNER_ID)|[产品(PRODUCT)](module/ProdMgmt/product)|自定义关系||
|[DERCUSTOM_BASELINE_PROJECT_OWNER_ID](der/DERCUSTOM_BASELINE_PROJECT_OWNER_ID)|[项目(PROJECT)](module/ProjMgmt/project)|自定义关系||
|[DERCUSTOM_BASELINE_SPACE_OWNER_ID](der/DERCUSTOM_BASELINE_SPACE_OWNER_ID)|[空间(SPACE)](module/Wiki/space)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#baseline_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持|[附加操作](index/action_logic_index#baseline_Remove)|||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|删除类别|delete_categories|[实体处理逻辑](module/Base/baseline/logic/delete_categories "删除类别")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/Base/baseline/logic/nothing "无操作")|默认|不支持||||
|建立关联数据|plan_snapshot|[实体处理逻辑](module/Base/baseline/logic/create_plan_snapshot "新建规划快照")|默认|不支持||||
|设立完成（测试库）|set_complete_library|[实体处理逻辑](module/Base/baseline/logic/set_complete_library "设立完成（测试库）")|默认|不支持||||
|设立完成（产品）|set_complete_product|[实体处理逻辑](module/Base/baseline/logic/set_complete_product "设立完成（产品）")|默认|不支持||||
|设立完成（项目）|set_complete_project|[实体处理逻辑](module/Base/baseline/logic/set_complete_project "设立完成（项目）")|默认|不支持||||
|设立完成（空间）|set_complete_space|[实体处理逻辑](module/Base/baseline/logic/set_complete_space "设置完成（空间）")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[删除基线前附加逻辑](module/Base/baseline/logic/before_remove)|before_remove|无||删除基线前，删除基线关联数据|
|[删除类别](module/Base/baseline/logic/delete_categories)|delete_categories|无||当类别删除时修改迭代的类别属性|
|[基线操作标识业务计算逻辑](module/Base/baseline/logic/oppriv_logic)|oppriv_logic|DEOPPRIV|||
|[填充类别文本](module/Base/baseline/logic/fill_categories_name)|fill_categories_name|无||填充类别对应文本|
|[新建规划快照](module/Base/baseline/logic/create_plan_snapshot)|create_plan_snapshot|无||新建规划快照|
|[无操作](module/Base/baseline/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[设立完成（产品）](module/Base/baseline/logic/set_complete_product)|set_complete_product|无||产品基线设立完成|
|[设立完成（测试库）](module/Base/baseline/logic/set_complete_library)|set_complete_library|无||测试库基线设立完成|
|[设立完成（项目）](module/Base/baseline/logic/set_complete_project)|set_complete_project|无||项目基线设立完成|
|[设置完成（空间）](module/Base/baseline/logic/set_complete_space)|set_complete_space|无||空间基线设立完成|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/baseline/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/baseline/query/View)|VIEW|否|否 |否 ||
|[基线查询(baseline)](module/Base/baseline/query/baseline)|baseline|否|否 |否 ||
|[规划快照(snapshot)](module/Base/baseline/query/snapshot)|snapshot|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/baseline/dataset/Default)|DEFAULT|数据查询|是|||
|[基线查询(baseline)](module/Base/baseline/dataset/baseline)|baseline|数据查询|否|||
|[规划快照(snapshot)](module/Base/baseline/dataset/snapshot)|snapshot|数据查询|否|||

## 数据权限

##### 操作用户(写) :id=baseline-USER_W

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CATEGORIES_LIKE|类别|LIKE||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属数据标识|EQ||
|N_OWNER_TYPE_EQ|所属数据对象|EQ||
|N_STATUS_EQ|状态|EQ||
|N_TYPE_EQ|基线类型|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 编辑 | toolbar_product_tree_exp_view_node3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 删除 | toolbar_project_tree_exp_view_node1_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 删除 | toolbar_product_tree_exp_view_node2_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 删除快照 | del_snapshot | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 删除 | toolbar_library_tree_exp_view_node1_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 新建分组 | toolbar_library_tree_exp_view_treeexpbar_toolbar_deuiaction1_click | 新建分组 |单项数据|用户自定义||
| 编辑 | toolbar_project_tree_exp_view_node2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 设立完成（产品） | set_complete_product | 设立完成 |单项数据（主键）|<details><summary>后台调用</summary>[set_complete_product](#行为)||
| 新建分组 | toolbar_product_tree_exp_view_treeexpbar_toolbar_deuiaction1_click | 新建分组 |单项数据|用户自定义||
| 新建类别 | toolbar_project_tree_exp_view_treeexpbar_toolbar_deuiaction2_click | 新建类别 |单项数据|用户自定义||
| 删除 | toolbar_space_tree_exp_view_node2_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 查看快照 | open_snapshot_gantt_view | 查看 |单项数据|用户自定义||
| 编辑 | toolbar_space_tree_exp_view_node3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 删除基线 | remove | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 编辑 | toolbar_library_tree_exp_view_node2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 新建分组 | toolbar_space_tree_exp_view_treeexpbar_toolbar_deuiaction1_click | 新建分组 |单项数据|用户自定义||
| 删除 | toolbar_project_tree_exp_view_node3_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 编辑快照 | edit_snapshot | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑快照](app/view/baseline_edit_snapshot_view)</details>||
| 编辑基线（测试库） | open_library_update_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑基线](app/view/baseline_library_update_view)</details>||
| 编辑 | toolbar_space_tree_exp_view_node1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 删除 | toolbar_library_tree_exp_view_node3_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 编辑 | toolbar_product_tree_exp_view_node1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 设立完成（项目） | set_complete_project | 设立完成 |单项数据（主键）|<details><summary>后台调用</summary>[set_complete_project](#行为)||
| 新建类别 | toolbar_library_tree_exp_view_treeexpbar_toolbar_deuiaction2_click | 新建类别 |单项数据|用户自定义||
| 删除 | toolbar_space_tree_exp_view_node3_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 新建分组 | toolbar_project_tree_exp_view_treeexpbar_toolbar_deuiaction1_click | 新建分组 |单项数据|用户自定义||
| 新建类别 | toolbar_product_tree_exp_view_treeexpbar_toolbar_deuiaction2_click | 新建类别 |单项数据|用户自定义||
| 删除 | toolbar_library_tree_exp_view_node2_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 设立完成（空间） | set_complete_space | 设立完成 |单项数据（主键）|<details><summary>后台调用</summary>[set_complete_space](#行为)||
| 编辑 | toolbar_library_tree_exp_view_node3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 快照管理 | snapshot_management | 快照管理 |无数据|<details><summary>打开视图或向导（模态）</summary>[快照管理](app/view/baseline_snapshot_management_gird_view)</details>||
| 编辑 | toolbar_library_tree_exp_view_node1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 编辑 | toolbar_space_tree_exp_view_node2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 编辑基线（项目） | open_project_update_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑基线](app/view/baseline_project_update_view)</details>||
| 编辑 | toolbar_project_tree_exp_view_node1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 编辑基线（产品） | open_product_update_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑基线](app/view/baseline_product_update_view)</details>||
| 删除 | toolbar_product_tree_exp_view_node3_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 删除 | toolbar_space_tree_exp_view_node1_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 删除 | toolbar_product_tree_exp_view_node1_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 编辑 | toolbar_project_tree_exp_view_node3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 删除 | toolbar_project_tree_exp_view_node2_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 设立完成（测试库） | set_complete_library | 设立完成 |单项数据（主键）|<details><summary>后台调用</summary>[set_complete_library](#行为)||
| 编辑 | toolbar_product_tree_exp_view_node2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 打开规划快照甘特图 | open_snapshot_gantt | 打开规划快照甘特图 |单项数据|<details><summary>打开视图或向导（模态）</summary>[规划快照](app/view/baseline_work_item_gantt_view)</details>||
| 新建快照 | create_snapshot | 新建快照 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建快照](app/view/baseline_create_plan_snapshot_view)</details>||
| 编辑基线（空间） | open_space_update_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑基线](app/view/baseline_space_update_view)</details>||
| 新建类别 | toolbar_space_tree_exp_view_treeexpbar_toolbar_deuiaction2_click | 新建类别 |单项数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[产品基线新建分组](module/Base/baseline/uilogic/product_create_section)|product_create_section|产品基线调用树节点新建方法，新建分组|
|[产品基线新建类别](module/Base/baseline/uilogic/product_create_category)|product_create_category|产品基线调用树节点新建方法新建类别|
|[删除类别或分组](module/Base/baseline/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除，删除类别或分组数据|
|[查看规划快照](module/Base/baseline/uilogic/check_plan_snapshot)|check_plan_snapshot|查看规划快照|
|[测试库基线新建分组](module/Base/baseline/uilogic/library_create_section)|library_create_section|测试库基线调用树节点新建方法，新建分组|
|[测试库基线新建类别](module/Base/baseline/uilogic/library_create_category)|library_create_category|测试库基线调用树节点新建方法新建类别|
|[空间基线新建分组](module/Base/baseline/uilogic/space_create_section)|space_create_section|空间基线调用树节点新建方法，新建分组|
|[空间基线新建类别](module/Base/baseline/uilogic/space_create_category)|space_create_category|空间基线调用树节点新建方法新建类别|
|[编辑类别或分组](module/Base/baseline/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|
|[计算表格列行为状态](module/Base/baseline/uilogic/calc_column_action_state)|calc_column_action_state|用于动态启用列绑定的界面行为|
|[项目基线新建分组](module/Base/baseline/uilogic/project_create_section)|project_create_section|项目基线调用树节点新建方法，新建分组|
|[项目基线新建类别](module/Base/baseline/uilogic/project_create_category)|project_create_category|项目基线调用树节点新建方法新建类别|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/baseline?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/baseline?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/baseline?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/baseline?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/baseline?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/baseline?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/baseline?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/baseline?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/baseline?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/baseline?id=界面逻辑`">
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