# 附件搜索(search_attachment)  <!-- {docsify-ignore-all} -->


高级搜索中的附件搜索。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|客户|CUSTOMER|外键值对象|1048576|是||
|文件标识|FILE_ID|文件|500|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|产品需求|IDEA|外键值对象|1048576|是||
|名称|NAME|文本，可指定长度|200|是||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|所属数据编号|OWNER_IDENTIFIER|文本，可指定长度|100|是||
|所属数据父标识|OWNER_PARENT_ID|文本，可指定长度|100|是||
|所属数据父名称|OWNER_PARENT_NAME|文本，可指定长度|100|是||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|是||
|所属数据标题|OWNER_TITLE|文本，可指定长度|100|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|页面|PAGE|外键值对象|1048576|是||
|父对象版本标识|PARENT_VERSION_ID|文本，可指定长度|100|是||
|测试用例|TEST_CASE|外键值对象|1048576|是||
|工单|TICKET|外键值对象|1048576|是||
|标题|TITLE|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|工作项|WORK_ITEM|外键值对象|1048576|是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_CUSTOMER_SEARCH_ATTACHMENT](der/DERCUSTOM_CUSTOMER_SEARCH_ATTACHMENT)|[客户(CUSTOMER)](module/ProdMgmt/customer)|自定义关系||
|[DERCUSTOM_IDEA_SEARCH_ATTACHMENT](der/DERCUSTOM_IDEA_SEARCH_ATTACHMENT)|[需求(IDEA)](module/ProdMgmt/idea)|自定义关系||
|[DERCUSTOM_PAGE_SEARCH_ATTACHMENT](der/DERCUSTOM_PAGE_SEARCH_ATTACHMENT)|[页面(PAGE)](module/Wiki/article_page)|自定义关系||
|[DERCUSTOM_TEST_CASE_SEARCH_ATTACHMENT](der/DERCUSTOM_TEST_CASE_SEARCH_ATTACHMENT)|[用例(TEST_CASE)](module/TestMgmt/test_case)|自定义关系||
|[DERCUSTOM_TICKET_SEARCH_ATTACHMENT](der/DERCUSTOM_TICKET_SEARCH_ATTACHMENT)|[工单(TICKET)](module/ProdMgmt/ticket)|自定义关系||
|[DERCUSTOM_WORK_ITEM_SEARCH_ATTACHMENT](der/DERCUSTOM_WORK_ITEM_SEARCH_ATTACHMENT)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|自定义关系||

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
|[高级搜索](module/Base/search_attachment/logic/advanced_search)|advanced_search|无||高级搜索，用于填充所属相关信息字段|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/search_attachment/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/search_attachment/query/View)|VIEW|否|否 |否 ||
|[关联查询(relation)](module/Base/search_attachment/query/relation)|relation|否|否 |是 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/search_attachment/dataset/Default)|DEFAULT|数据查询|是|||
|[高级搜索(advanced_search)](module/Base/search_attachment/dataset/advanced_search)|advanced_search|[实体逻辑](module/Base/search_attachment/logic/advanced_search)|否|||
|[关联查询(relation)](module/Base/search_attachment/dataset/relation)|relation|数据查询|否|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CREATE_MAN_EQ|建立人|EQ||
|N_CREATE_TIME_GTANDEQ|建立时间|GTANDEQ||
|N_CREATE_TIME_LTANDEQ|建立时间|LTANDEQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属数据标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 打开客户主视图 | open_customer_main_view | 打开客户主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[客户](app/view/customer_main_view)</details>||
| 打开工作项主视图 | open_work_item_main_view | 打开工作项主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_main_view)</details>||
| 打开产品需求主视图 | open_idea_main_view | 打开产品需求主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[需求](app/view/idea_main_view)</details>||
| 打开测试用例主视图 | open_test_case_main_view | 打开测试用例主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[用例](app/view/test_case_main_view)</details>||
| 打开页面主视图 | open_page_main_view | 打开页面主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[页面](app/view/article_page_show_view)</details>||
| 打开工单主视图 | open_ticket_main_view | 打开工单主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[工单](app/view/ticket_main_view)</details>||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[打开详情视图](module/Base/search_attachment/uilogic/open_main_view)|open_main_view|链接跳转工作项/产品需求/测试用例/工单/客户/页面详情主视图|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/search_attachment?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_attachment?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_attachment?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_attachment?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_attachment?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_attachment?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_attachment?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_attachment?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/search_attachment?id=界面逻辑`">
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