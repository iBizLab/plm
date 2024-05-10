# 版本(version)  <!-- {docsify-ignore-all} -->


用于管理和记录软件的版本历史和变更。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|数据|DATA|长文本，没有长度限制|1048576|是||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|版本|IDENTIFIER|数值|10|是||
|手动提交|MANUAL|是否逻辑||是||
|名称|NAME|文本，可指定长度|200|是||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|支持恢复|RESTORABLE|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_BASELINE_IDEA_VERSION](der/DERCUSTOM_BASELINE_IDEA_VERSION)|[基线需求(BASELINE_IDEA)](module/ProdMgmt/baseline_idea)|自定义关系||
|[DERCUSTOM_BASELINE_TEST_CASE_VERSION](der/DERCUSTOM_BASELINE_TEST_CASE_VERSION)|[基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case)|自定义关系||
|[DERCUSTOM_BASELINE_WORK_ITEM_VERSION](der/DERCUSTOM_BASELINE_WORK_ITEM_VERSION)|[基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item)|自定义关系||
|[DERCUSTOM_REVIEW_CONTENT_VERSION](der/DERCUSTOM_REVIEW_CONTENT_VERSION)|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_VERSION_IDEA](der/DERCUSTOM_VERSION_IDEA)|[需求(IDEA)](module/ProdMgmt/idea)|自定义关系||
|[DERCUSTOM_VERSION_PAGE](der/DERCUSTOM_VERSION_PAGE)|[页面(PAGE)](module/Wiki/article_page)|自定义关系||
|[DERCUSTOM_VERSION_TEST_CASE](der/DERCUSTOM_VERSION_TEST_CASE)|[用例(TEST_CASE)](module/TestMgmt/test_case)|自定义关系||
|[DERCUSTOM_VERSION_WORK_ITEM](der/DERCUSTOM_VERSION_WORK_ITEM)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|提交版本|Commit|用户自定义|默认|不支持||[CommitVersionDEActionRuntime](index/plugin_index#UsrSFPlugin0324806543)||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|修复版本|fix_commit|用户自定义|默认|不支持||[FixCommitVersionDEActionRuntime](index/plugin_index#UsrSFPlugin0424197954)||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持|[附加操作](index/action_logic_index#version_GetDraft)|||
|恢复指定版本|Restore|用户自定义|默认|不支持||[RestoreVersionDEActionRuntime](index/plugin_index#UsrSFPlugin0324899435)||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[新建版本时填充默认版本名称](module/Base/version/logic/fill_default_name)|fill_default_name|无||新建版本时，根据已创建的版本记录生成默认版本名称|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/version/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/version/query/View)|VIEW|否|否 |否 ||
|[所属对象版本(owner)](module/Base/version/query/owner)|owner|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/version/dataset/Default)|DEFAULT|数据查询|是|||
|[所属对象版本(owner)](module/Base/version/dataset/owner)|owner|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=version-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=version-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `DELETE`
* `UPDATE`
* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_IN|标识|IN||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属数据标识|EQ||
|N_OWNER_ID_IN|所属数据标识|IN||
|N_OWNER_TYPE_EQ|所属数据对象|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 需求版本对比 | idea_version_comparison | 版本对比 |单项数据|<details><summary>打开视图或向导（模态）</summary>[版本对比](app/view/idea_version_comparison_view)</details>||
| 编辑版本 | edit_version | 编辑版本 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑版本](app/view/version_edit_version_view)</details>||
| 恢复版本 | restore | 恢复版本 |单项数据|<details><summary>后台调用</summary>[Restore](#行为)||
| 建立版本 | create_new_version | 创建新版本 |无数据|<details><summary>打开视图或向导（模态）</summary>[建立版本](app/view/version_quick_create_view)</details>||
| 工作项版本对比 | work_item_version_comparison | 版本对比 |单项数据|<details><summary>打开视图或向导（模态）</summary>[版本对比](app/view/work_item_version_comparison_view)</details>||
| 用例版本对比 | test_case_version_comparison | 版本对比 |单项数据|<details><summary>打开视图或向导（模态）</summary>[版本对比](app/view/test_case_version_comparison_view)</details>||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[版本变化后刷新主表单](module/Base/version/uilogic/version_change_after_refresh)|version_change_after_refresh|版本变化后，触发主表单重新加载|
|[版本表格列行为是否启用](module/Base/version/uilogic/action_disabled)|action_disabled|用于动态启用列绑定的界面行为|
|[获取版本总条数](module/Base/version/uilogic/get_version_total)|get_version_total|获取版本的总条数信息|
|[触发计数器刷新](module/Base/version/uilogic/refresh_counter)|refresh_counter|关联数据变更后，触发计数器刷新|
|[计算表格列行为状态（version）](module/Base/version/uilogic/calc_column_button_state)|calc_column_button_state|判断版本是否与当前版本一致，是否可恢复此版本|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/version?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/version?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/version?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/version?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/version?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/version?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/version?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/version?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/version?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/version?id=界面逻辑`">
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