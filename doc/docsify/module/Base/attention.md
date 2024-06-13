# 关注(attention)  <!-- {docsify-ignore-all} -->


允许用户标记重要的项目或信息，以便于跟踪和及时获取更新。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|关注类型|TYPE|[单项选择(文本值)](index/dictionary_index#attention_type "关注类型")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|关注人|USER_ID|文本，可指定长度|100|是||

<p class="panel-title"><b>联合主键</b></p>

  * `所属数据标识(OWNER_ID)`
  * `关注人(USER_ID)`

###### 索引

<el-row>
<el-tabs v-model="show_index">

<el-tab-pane label="ATTENTION" name="index_ATTENTION">

|    中文名col150 | 属性名称col200           | 包含属性col100 | 排序方向col100 | 索引长度col100 | 备注col600 |
| --------   |------------| -----  | -----  | :----: | -------- |
|所属数据标识|OWNER_ID|false|升序|-1||

</el-tab-pane>
<el-tab-pane label="ATTENTION2" name="index_ATTENTION2">

|    中文名col150 | 属性名称col200           | 包含属性col100 | 排序方向col100 | 索引长度col100 | 备注col600 |
| --------   |------------| -----  | -----  | :----: | -------- |
|所属数据标识|OWNER_ID|false|升序|-1||
|所属对象子类型|OWNER_SUBTYPE|false|升序|-1||
|所属数据对象|OWNER_TYPE|false|升序|-1||

</el-tab-pane>

</el-tabs>
</el-row>

###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="用户标识" name="field_group_user_id">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|关注人|USER_ID|文本，可指定长度|100|是||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_ATTENTION_CUSTOMER_OWNER_ID](der/DERCUSTOM_ATTENTION_CUSTOMER_OWNER_ID)|[客户(CUSTOMER)](module/ProdMgmt/customer)|自定义关系||
|[DERCUSTOM_ATTENTION_DISCUSS_POST_OWNER_ID](der/DERCUSTOM_ATTENTION_DISCUSS_POST_OWNER_ID)|[讨论(DISCUSS_POST)](module/Team/discuss_post)|自定义关系||
|[DERCUSTOM_ATTENTION_IDEA_OWNER_ID](der/DERCUSTOM_ATTENTION_IDEA_OWNER_ID)|[需求(IDEA)](module/ProdMgmt/idea)|自定义关系||
|[DERCUSTOM_ATTENTION_PAGE_OWNER_ID](der/DERCUSTOM_ATTENTION_PAGE_OWNER_ID)|[页面(PAGE)](module/Wiki/article_page)|自定义关系||
|[DERCUSTOM_ATTENTION_REVIEW_OWNER_ID](der/DERCUSTOM_ATTENTION_REVIEW_OWNER_ID)|[评审(REVIEW)](module/TestMgmt/review)|自定义关系||
|[DERCUSTOM_ATTENTION_REVIEW_WIZARD](der/DERCUSTOM_ATTENTION_REVIEW_WIZARD)|[评审向导(REVIEW_WIZARD)](module/TestMgmt/review_wizard)|自定义关系||
|[DERCUSTOM_ATTENTION_RUN_OWNER_ID](der/DERCUSTOM_ATTENTION_RUN_OWNER_ID)|[执行用例(RUN)](module/TestMgmt/run)|自定义关系||
|[DERCUSTOM_ATTENTION_TEST_CASE_OWNER_ID](der/DERCUSTOM_ATTENTION_TEST_CASE_OWNER_ID)|[用例(TEST_CASE)](module/TestMgmt/test_case)|自定义关系||
|[DERCUSTOM_ATTENTION_TICKET_OWNER_ID](der/DERCUSTOM_ATTENTION_TICKET_OWNER_ID)|[工单(TICKET)](module/ProdMgmt/ticket)|自定义关系||
|[DERCUSTOM_ATTENTION_WORK_ITEM_OWNER_ID](der/DERCUSTOM_ATTENTION_WORK_ITEM_OWNER_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#attention_Create)|||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[添加关注后发送通知](module/Base/attention/logic/after_create_notify)|after_create_notify|无||添加关注人员后，触发提醒关注通知消息给关注人员|

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/attention/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/attention/query/View)|VIEW|否|否 |否 ||
|[通过主数据标识查询通知对象(attention_by_ownerid)](module/Base/attention/query/attention_by_ownerid)|attention_by_ownerid|否|否 |否 ||
|[评论提醒(comment_attention)](module/Base/attention/query/comment_attention)|comment_attention|否|否 |否 ||
|[通知对象(notify)](module/Base/attention/query/notify)|notify|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/attention/dataset/Default)|DEFAULT|数据查询|是|||
|[通过主数据标识查询通知对象(attention_by_ownerid)](module/Base/attention/dataset/attention_by_ownerid)|attention_by_ownerid|数据查询|否|||
|[评论提醒(comment_attention)](module/Base/attention/dataset/comment_attention)|comment_attention|数据查询|否|||
|[通知对象(notify)](module/Base/attention/dataset/notify)|notify|数据查询|否|||

## 数据权限

##### 全部数据（读写） :id=attention-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `READ`
* `DELETE`
* `UPDATE`



## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[客户提醒关注通知](module/Base/attention/notify/attention_customer_notify)|attention_customer_notify|[默认消息队列](index/notify_index)|[提醒关注客户通知模板](index/notify_index#notice_attention_customer)|关注人 ||
|[产品需求提醒关注通知](module/Base/attention/notify/attention_idea_notify)|attention_idea_notify|[默认消息队列](index/notify_index)|[提醒关注产品需求通知模板](index/notify_index#notice_attention_idea)|关注人 ||
|[页面提醒关注通知](module/Base/attention/notify/attention_page_notify)|attention_page_notify|[默认消息队列](index/notify_index)|[提醒关注页面通知模板](index/notify_index#notice_attention_page)|关注人 ||
|[执行用例提醒关注通知](module/Base/attention/notify/attention_run_notify)|attention_run_notify|[默认消息队列](index/notify_index)|[提醒关注执行用例通知模板](index/notify_index#notice_attention_run)|关注人 ||
|[测试用例提醒关注通知](module/Base/attention/notify/attention_test_case_notify)|attention_test_case_notify|[默认消息队列](index/notify_index)|[提醒关注测试用例通知模板](index/notify_index#notice_attention_test_case)|关注人 ||
|[工单提醒关注通知](module/Base/attention/notify/attention_ticket_notify)|attention_ticket_notify|[默认消息队列](index/notify_index)|[提醒关注工单通知模板](index/notify_index#notice_attention_ticket)|关注人 ||
|[工作项提醒关注通知](module/Base/attention/notify/attention_work_item_notify)|attention_work_item_notify|[默认消息队列](index/notify_index)|[提醒关注工作项通知模板](index/notify_index#notice_attention_work_item)|关注人 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属数据标识|EQ||
|N_OWNER_ID_EXISTS__N_OWNER_ID_EQ|所属数据标识|EXISTS||
|N_OWNER_SUBTYPE_EQ|所属对象子类型|EQ||
|N_OWNER_TYPE_EQ|所属数据对象|EQ||
|N_TYPE_EQ|关注类型|EQ||
|N_USER_ID_EQ|关注人|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/attention?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attention?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attention?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attention?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attention?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attention?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attention?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attention?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attention?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attention?id=搜索模式`">
  搜索模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'minor',
show_field_group:'field_group_user_id',
show_index:'index_ATTENTION',
      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>