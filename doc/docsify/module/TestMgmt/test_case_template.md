# 用例模板(test_case_template)  <!-- {docsify-ignore-all} -->


用于存储标准化的用例模板，便于快速建立标准的结构化用例。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|实际工时|ACTUAL_WORKLOAD|数值||是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，没有长度限制|1048576|是||
|预估工时|ESTIMATED_WORKLOAD|数值||是||
|执行时间|EXECUTED_AT|日期时间型||是||
|执行人|EXECUTOR_NAME|文本，可指定长度|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|是否已删除|IS_DELETED|是否逻辑||是||
|重要程度|LEVEL|[单项选择(文本值)](index/dictionary_index#test_case_level "用例重要程度")|60|是||
|名称|NAME|文本，可指定长度|200|是||
|前置条件|PRECONDITION|长文本，没有长度限制|1048576|是||
|剩余工时|REMAINING_WORKLOAD|数值||是||
|执行结果|RUN_STATUS|[单项选择(文本值)](index/dictionary_index#run_status "执行用例状态")|200|是||
|评审状态|STATE|[单项选择(文本值)](index/dictionary_index#test_case_state "用例评审状态")|60|是||
|步骤|STEPS|一对多关系数据集合|1048576|是||
|模块路径|SUITES|外键值附加数据|500|是||
|用例模块标识|SUITE_ID|外键值|100|是||
|模块名称|SUITE_NAME|外键值文本|200|是||
|目标测试库|TARGET_LIBRARY_ID|文本，可指定长度|100|是||
|测试库标识|TEST_LIBRARY_ID|外键值|100|是||
|测试库名称|TEST_LIBRARY_NAME|外键值文本|200|是||
|测试计划名称|TEST_PLAN_NAME|文本，可指定长度|100|是||
|测试类型|TEST_TYPE|[单项选择(文本值)](index/dictionary_index#test_case_test_type "测试类型")|60|是||
|标题|TITLE|文本，可指定长度|500|是||
|用例类型|TYPE|[单项选择(文本值)](index/dictionary_index#test_case_type "用例类型")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|工时进度|WORKLOAD_SCHEDULE|数值||是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_STEP_TEST_CASE_TEMPLATE_CASE_TEMPLATE_ID](der/DER1N_STEP_TEST_CASE_TEMPLATE_CASE_TEMPLATE_ID)|[用例步骤(STEP)](module/TestMgmt/step)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_TEST_CASE_TEMPLATE_LIBRARY_TEST_LIBRARY_ID](der/DER1N_TEST_CASE_TEMPLATE_LIBRARY_TEST_LIBRARY_ID)|[测试库(LIBRARY)](module/TestMgmt/library)|1:N关系||
|[DER1N_TEST_CASE_TEMPLATE_TEST_SUITE_SUITE_ID](der/DER1N_TEST_CASE_TEMPLATE_TEST_SUITE_SUITE_ID)|[用例模块(TEST_SUITE)](module/TestMgmt/test_suite)|1:N关系||

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
|无操作|nothing|[实体处理逻辑](module/TestMgmt/test_case_template/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/TestMgmt/test_case_template/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/TestMgmt/test_case_template/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/test_case_template/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/test_case_template/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_LEVEL_EQ|重要程度|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_RUN_STATUS_EQ|执行结果|EQ||
|N_STATE_EQ|评审状态|EQ||
|N_SUITE_ID_EQ|用例模块标识|EQ||
|N_SUITE_NAME_EQ|模块名称|EQ||
|N_SUITE_NAME_LIKE|模块名称|LIKE||
|N_TEST_LIBRARY_ID_EQ|测试库标识|EQ||
|N_TEST_LIBRARY_NAME_EQ|测试库名称|EQ||
|N_TEST_LIBRARY_NAME_LIKE|测试库名称|LIKE||
|N_TEST_TYPE_EQ|测试类型|EQ||
|N_TYPE_EQ|用例类型|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 编辑模板 | template_edit | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[模板](app/view/test_case_template_edit_view)</details>||
| 删除模板 | template_delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/TestMgmt/test_case_template?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case_template?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case_template?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case_template?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case_template?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case_template?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case_template?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_case_template?id=界面行为`">
  界面行为
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