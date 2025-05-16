# 数据字典(dictionary_data)  <!-- {docsify-ignore-all} -->


用于记录基础数据字典。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|字典目录|CATALOG|[单项选择(文本值)](index/dictionary_index#dictionary_catalog "字典目录")|60|是||
|颜色|COLOR|文本，可指定长度|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否系统默认|IS_SYSTEM|是否逻辑||是||
|名称|NAME|文本，可指定长度|200|是||
|序号|SEQUENCE|数值||是||
|背景样式|STYLE|[单项选择(文本值)](index/dictionary_index#background_style "背景样式")|100|是||
|类型|TYPE|[单项选择(文本值)](index/dictionary_index#dictionary_type "字典项类型")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|值|VAL|文本，可指定长度|100|是||


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
|移动排序|move_order|用户自定义|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/Base/dictionary_data/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/Base/dictionary_data/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/dictionary_data/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/dictionary_data/query/View)|VIEW|否|否 |否 ||
|[需求(idea)](module/Base/dictionary_data/query/idea)|idea|否|否 |否 ||
|[需求优先级(idea_priority)](module/Base/dictionary_data/query/idea_priority)|idea_priority|否|否 |否 ||
|[需求来源(idea_source)](module/Base/dictionary_data/query/idea_source)|idea_source|否|否 |否 ||
|[需求状态(idea_state)](module/Base/dictionary_data/query/idea_state)|idea_state|否|否 |否 ||
|[需求类型(idea_type)](module/Base/dictionary_data/query/idea_type)|idea_type|否|否 |否 ||
|[发布阶段(release_stage)](module/Base/dictionary_data/query/release_stage)|release_stage|否|否 |否 ||
|[测试用例(test_case)](module/Base/dictionary_data/query/test_case)|test_case|否|否 |否 ||
|[测试用例重要程度(test_case_level)](module/Base/dictionary_data/query/test_case_level)|test_case_level|否|否 |否 ||
|[测试用例状态(test_case_status)](module/Base/dictionary_data/query/test_case_status)|test_case_status|否|否 |否 ||
|[测试用例测试类型(test_case_test_type)](module/Base/dictionary_data/query/test_case_test_type)|test_case_test_type|否|否 |否 ||
|[测试用例类型(test_case_type)](module/Base/dictionary_data/query/test_case_type)|test_case_type|否|否 |否 ||
|[工单(ticket)](module/Base/dictionary_data/query/ticket)|ticket|否|否 |否 ||
|[工单优先级(ticket_priority)](module/Base/dictionary_data/query/ticket_priority)|ticket_priority|否|否 |否 ||
|[工单解决方案(ticket_solution)](module/Base/dictionary_data/query/ticket_solution)|ticket_solution|否|否 |否 ||
|[工单状态(ticket_state)](module/Base/dictionary_data/query/ticket_state)|ticket_state|否|否 |否 ||
|[工作项(work_item)](module/Base/dictionary_data/query/work_item)|work_item|否|否 |否 ||
|[工作项任务类别(work_item_category)](module/Base/dictionary_data/query/work_item_category)|work_item_category|否|否 |否 ||
|[工作项优先级(work_item_priority)](module/Base/dictionary_data/query/work_item_priority)|work_item_priority|否|否 |否 ||
|[工作项复现概率(work_item_probability)](module/Base/dictionary_data/query/work_item_probability)|work_item_probability|否|否 |否 ||
|[工作项风险(work_item_risk)](module/Base/dictionary_data/query/work_item_risk)|work_item_risk|否|否 |否 ||
|[工作项严重程度(work_item_severity)](module/Base/dictionary_data/query/work_item_severity)|work_item_severity|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/dictionary_data/dataset/Default)|DEFAULT|数据查询|是|||
|[需求(idea)](module/Base/dictionary_data/dataset/idea)|idea|数据查询|否|||
|[需求优先级(idea_priority)](module/Base/dictionary_data/dataset/idea_priority)|idea_priority|数据查询|否|||
|[需求来源(idea_source)](module/Base/dictionary_data/dataset/idea_source)|idea_source|数据查询|否|||
|[需求状态(idea_state)](module/Base/dictionary_data/dataset/idea_state)|idea_state|数据查询|否|||
|[需求类型(idea_type)](module/Base/dictionary_data/dataset/idea_type)|idea_type|数据查询|否|||
|[发布阶段(release_stage)](module/Base/dictionary_data/dataset/release_stage)|release_stage|数据查询|否|||
|[测试用例(test_case)](module/Base/dictionary_data/dataset/test_case)|test_case|数据查询|否|||
|[测试用例重要程度(test_case_importance_level)](module/Base/dictionary_data/dataset/test_case_importance_level)|test_case_importance_level|数据查询|否|||
|[测试用例状态(test_case_status)](module/Base/dictionary_data/dataset/test_case_status)|test_case_status|数据查询|否|||
|[测试用例测试类型(test_case_test_type)](module/Base/dictionary_data/dataset/test_case_test_type)|test_case_test_type|数据查询|否|||
|[测试用例类型(test_case_type)](module/Base/dictionary_data/dataset/test_case_type)|test_case_type|数据查询|否|||
|[工单(ticket)](module/Base/dictionary_data/dataset/ticket)|ticket|数据查询|否|||
|[工单优先级(ticket_priority)](module/Base/dictionary_data/dataset/ticket_priority)|ticket_priority|数据查询|否|||
|[工单解决方案(ticket_solution)](module/Base/dictionary_data/dataset/ticket_solution)|ticket_solution|数据查询|否|||
|[工单状态(ticket_state)](module/Base/dictionary_data/dataset/ticket_state)|ticket_state|数据查询|否|||
|[工作项(work_item)](module/Base/dictionary_data/dataset/work_item)|work_item|数据查询|否|||
|[工作项任务类别(work_item_category)](module/Base/dictionary_data/dataset/work_item_category)|work_item_category|数据查询|否|||
|[工作项优先级(work_item_priority)](module/Base/dictionary_data/dataset/work_item_priority)|work_item_priority|数据查询|否|||
|[工作项复现概率(work_item_probability)](module/Base/dictionary_data/dataset/work_item_probability)|work_item_probability|数据查询|否|||
|[工作项风险(work_item_risk)](module/Base/dictionary_data/dataset/work_item_risk)|work_item_risk|数据查询|否|||
|[工作项严重程度(work_item_severity)](module/Base/dictionary_data/dataset/work_item_severity)|work_item_severity|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=dictionary_data-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=dictionary_data-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `DELETE`
* `CREATE`
* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CATALOG_EQ|字典目录|EQ||
|N_CATALOG_LIKE|字典目录|LIKE||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_STYLE_EQ|背景样式|EQ||
|N_TYPE_EQ|类型|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 需求字典新建（行为） | idea_create | 需求字典新建（行为） |无数据|<details><summary>打开视图或向导（模态）</summary>[数据字典](app/view/dictionary_data_idea_dictionary_create_view)</details>||
| 测试用例字典建 | test_case_dictionary_create | 测试用例字典新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[数据字典](app/view/dictionary_data_test_case_dictionary_create_view)</details>||
| 需求配置_删除 | idea_remove | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 新建阶段 | create_global_type | 新建阶段 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建阶段](app/view/dictionary_data_global_create_view)</details>||
| 新建状态 | create_state_type | 新建状态 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建状态](app/view/dictionary_data_quick_create_view)</details>||
| 工作项字典新建 | work_item_dictionary_create | 工作项字典新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[数据字典](app/view/dictionary_data_work_item_dictionary_create_view)</details>||
| 数据字典删除 | delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 工单字典新建（行为） | ticket_create | 工单字典新建（行为） |无数据|<details><summary>打开视图或向导（模态）</summary>[数据字典](app/view/dictionary_data_ticket_dictionary_create_view)</details>||
| 工单配置_删除 | ticket_remove | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 工作项字典新建（行为） | work_item_create | 工作项字典新建（行为） |无数据|<details><summary>打开视图或向导（模态）</summary>[数据字典](app/view/dictionary_data_work_item_dictionary_create_view)</details>||
| 工单字典新建 | ticket_dictionary_create | 工单字典新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[数据字典](app/view/dictionary_data_ticket_dictionary_create_view)</details>||
| 需求字典新建 | idea_dictionary_create | 需求字典新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[数据字典](app/view/dictionary_data_idea_dictionary_create_view)</details>||
| 测试用例字典新建（行为） | test_case_create | 测试用例字典新建（行为） |无数据|<details><summary>打开视图或向导（模态）</summary>[数据字典](app/view/dictionary_data_test_case_dictionary_create_view)</details>||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[判断操作列是否禁用](module/Base/dictionary_data/uilogic/judge_column_state)|judge_column_state|用于动态控制激活行为的禁用状态|
|[获取搜索栏参数](module/Base/dictionary_data/uilogic/get_tabsearchbar_param)|get_tabsearchbar_param||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/dictionary_data?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=界面逻辑`">
  界面逻辑
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {



      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>