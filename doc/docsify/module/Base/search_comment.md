# 评论搜索(search_comment)  <!-- {docsify-ignore-all} -->


高级搜索中的评论搜索。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|内容|CONTENT|长文本，没有长度限制|1048576|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|客户|CUSTOMER|外键值对象|1048576|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|产品需求|IDEA|外键值对象|1048576|是||
|名称|NAME|文本，可指定长度|200|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|页面|PAGE|外键值对象|1048576|是||
|评论主体标识|PRINCIPAL_ID|文本，可指定长度|100|是||
|评论主体编号|PRINCIPAL_IDENTIFIER|文本，可指定长度|100|是||
|评论主体名称|PRINCIPAL_NAME|文本，可指定长度|100|是||
|评论主体父标识|PRINCIPAL_PARENT_ID|文本，可指定长度|100|是||
|评论主体父名称|PRINCIPAL_PARENT_NAME|文本，可指定长度|100|是||
|评论主体标题|PRINCIPAL_TITLE|文本，可指定长度|100|是||
|评论主体类型|PRINCIPAL_TYPE|[文本，可指定长度](index/dictionary_index#principal_type "评论主体类型")|100|是||
|执行用例|RUN|外键值对象|1048576|是||
|测试用例|TEST_CASE|外键值对象|1048576|是||
|工单|TICKET|外键值对象|1048576|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|工作项|WORK_ITEM|外键值对象|1048576|是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_CUSTOMER_SEARCH_COMMENT](der/DERCUSTOM_CUSTOMER_SEARCH_COMMENT)|[客户(CUSTOMER)](module/ProdMgmt/customer)|自定义关系||
|[DERCUSTOM_IDEA_SEARCH_COMMENT](der/DERCUSTOM_IDEA_SEARCH_COMMENT)|[需求(IDEA)](module/ProdMgmt/idea)|自定义关系||
|[DERCUSTOM_PAGE_SEARCH_COMMENT](der/DERCUSTOM_PAGE_SEARCH_COMMENT)|[页面(PAGE)](module/Wiki/article_page)|自定义关系||
|[DERCUSTOM_RUN_SEARCH_COMMENT](der/DERCUSTOM_RUN_SEARCH_COMMENT)|[执行用例(RUN)](module/TestMgmt/run)|自定义关系||
|[DERCUSTOM_TEST_CASE_SEARCH_COMMENT](der/DERCUSTOM_TEST_CASE_SEARCH_COMMENT)|[用例(TEST_CASE)](module/TestMgmt/test_case)|自定义关系||
|[DERCUSTOM_TICKET_SEARCH_COMMENT](der/DERCUSTOM_TICKET_SEARCH_COMMENT)|[工单(TICKET)](module/ProdMgmt/ticket)|自定义关系||
|[DERCUSTOM_WORK_ITEM_SEARCH_COMMENT](der/DERCUSTOM_WORK_ITEM_SEARCH_COMMENT)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|自定义关系||

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

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[高级搜索](module/Base/search_comment/logic/advanced_search)|advanced_search|无||高级搜索，用于填充所属相关信息字段|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/search_comment/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/search_comment/query/View)|VIEW|否|否 |否 ||
|[关联查询(relation)](module/Base/search_comment/query/relation)|relation|否|否 |是 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/search_comment/dataset/Default)|DEFAULT|数据查询|是|||
|[高级搜索(advanced_search)](module/Base/search_comment/dataset/advanced_search)|advanced_search|[实体逻辑](module/Base/search_comment/logic/advanced_search)|否|||
|[关联查询(relation)](module/Base/search_comment/dataset/relation)|relation|数据查询|否|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CONTENT_LIKE|内容|LIKE||
|N_CREATE_MAN_EQ|建立人|EQ||
|N_CREATE_TIME_GTANDEQ|建立时间|GTANDEQ||
|N_CREATE_TIME_LTANDEQ|建立时间|LTANDEQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PRINCIPAL_ID_EQ|评论主体标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 打开产品主视图 | open_product_main_view | 打开产品主视图 |单项数据|<details><summary>打开视图或向导（模态）</summary>[产品](app/view/product_main_view)</details>||
| 打开客户主视图 | open_customer_main_view | 打开客户主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[客户](app/view/customer_main_view)</details>||
| 打开空间主视图 | open_space_main_view | 打开空间主视图 |单项数据|<details><summary>打开视图或向导（模态）</summary>[空间](app/view/space_index_view)</details>||
| 打开工作项主视图 | open_work_item_main_view | 打开工作项主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_main_view)</details>||
| 打开产品需求主视图 | open_idea_main_view | 打开产品需求主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[需求](app/view/idea_main_view)</details>||
| 打开项目主视图 | open_project_main_view | 打开项目主视图 |单项数据|<details><summary>打开视图或向导（模态）</summary>[项目](app/view/project_redirect_view)</details>||
| 打开测试用例主视图 | open_test_case_main_view | 打开测试用例主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[用例](app/view/test_case_main_view)</details>||
| 打开执行用例主视图 | open_run_main_view | 打开执行用例主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[执行用例](app/view/run_main_view)</details>||
| 打开测试库主视图 | open_library_main_view | 打开测试库主视图 |单项数据|<details><summary>打开视图或向导（模态）</summary>[测试库](app/view/library_main_view)</details>||
| 打开页面主视图 | open_page_main_view | 打开页面主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[页面](app/view/article_page_show_view)</details>||
| 打开工单主视图 | open_ticket_main_view | 打开工单主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[工单](app/view/ticket_main_view)</details>||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[打开所属主页视图](module/Base/search_comment/uilogic/open_parent_index_view)|open_parent_index_view|链接跳转项目/产品/测试库/空间首页视图|
|[打开详情视图](module/Base/search_comment/uilogic/open_main_view)|open_main_view|链接跳转工作项/产品需求/测试用例/工单/客户/页面详情主视图|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/search_comment?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_comment?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_comment?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_comment?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_comment?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_comment?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_comment?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_comment?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_comment?id=界面逻辑`">
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