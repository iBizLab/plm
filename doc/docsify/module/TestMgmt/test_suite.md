# 用例模块(test_suite)  <!-- {docsify-ignore-all} -->


用于结构化管理测试用例。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否叶子节点|IS_LEAF|是否逻辑||是||
|测试库标识|LIBRARY_ID|外键值|100|是||
|测试库名称|LIBRARY_NAME|外键值文本|200|是||
|名称|NAME|文本，可指定长度|200|是||
|父标识|PID|外键值|100|是||
|名称|PNAME|外键值文本|200|是||
|序号|SEQUENCE|数值||否||
|模块路径|SUITES|文本，可指定长度|500|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_TEST_CASE_TEMPLATE_TEST_SUITE_SUITE_ID](der/DER1N_TEST_CASE_TEMPLATE_TEST_SUITE_SUITE_ID)|[用例模板(TEST_CASE_TEMPLATE)](module/TestMgmt/test_case_template)|1:N关系||
|[DER1N_TEST_CASE_TEST_SUITE_SUITE_ID](der/DER1N_TEST_CASE_TEST_SUITE_SUITE_ID)|[用例(TEST_CASE)](module/TestMgmt/test_case)|1:N关系||
|[DER1N_TEST_SUITE_TEST_SUITE_PID](der/DER1N_TEST_SUITE_TEST_SUITE_PID)|[用例模块(TEST_SUITE)](module/TestMgmt/test_suite)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_TEST_SUITE_LIBRARY_LIBRARY_ID](der/DER1N_TEST_SUITE_LIBRARY_LIBRARY_ID)|[测试库(LIBRARY)](module/TestMgmt/library)|1:N关系||
|[DER1N_TEST_SUITE_TEST_SUITE_PID](der/DER1N_TEST_SUITE_TEST_SUITE_PID)|[用例模块(TEST_SUITE)](module/TestMgmt/test_suite)|1:N关系||

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
|移动需求|move_order|用户自定义|默认|不支持||||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/TestMgmt/test_suite/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/test_suite/query/View)|VIEW|否|否 |否 ||
|[当前测试库用例模块(cur_test_suite)](module/TestMgmt/test_suite/query/cur_test_suite)|cur_test_suite|否|否 |否 ||
|[无父类(no_parent)](module/TestMgmt/test_suite/query/no_parent)|no_parent|否|否 |否 ||
|[正常(normal)](module/TestMgmt/test_suite/query/normal)|normal|否|否 |否 ||
|[顶级模块(root)](module/TestMgmt/test_suite/query/root)|root|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/test_suite/dataset/Default)|DEFAULT|数据查询|是|||
|[当前测试库用例模块(cur_test_suite)](module/TestMgmt/test_suite/dataset/cur_test_suite)|cur_test_suite|数据查询|否|||
|[无父类(no_parent)](module/TestMgmt/test_suite/dataset/no_parent)|no_parent|数据查询|否|||
|[正常(normal)](module/TestMgmt/test_suite/dataset/normal)|normal|数据查询|否|||
|[顶级模块(root)](module/TestMgmt/test_suite/dataset/root)|root|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=test_suite-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ(测试库(READ))`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_LIBRARY_ID_EQ|测试库标识|EQ||
|N_LIBRARY_NAME_EQ|测试库名称|EQ||
|N_LIBRARY_NAME_LIKE|测试库名称|LIKE||
|N_NAME_LIKE|名称|LIKE||
|N_PID_EQ|父标识|EQ||
|N_PNAME_EQ|名称|EQ||
|N_PNAME_LIKE|名称|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 编辑 | toolbar_tree_exp_view_node3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node2_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 新建模块 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction1_click | 新建模块 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node3_cm_deuiaction2_click | 删除 |单项数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[删除类别或分组](module/TestMgmt/test_suite/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[新建分组](module/TestMgmt/test_suite/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/TestMgmt/test_suite/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[编辑类别或分组](module/TestMgmt/test_suite/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/TestMgmt/test_suite?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_suite?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_suite?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_suite?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_suite?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_suite?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_suite?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_suite?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_suite?id=界面逻辑`">
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