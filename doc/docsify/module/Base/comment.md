# 评论(comment)  <!-- {docsify-ignore-all} -->


用于存储用户在需求、工单、工作项、页面、等内容上发布的评论。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|内容|CONTENT|长文本，没有长度限制|1048576|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|父内容|PCONTENT|外键值附加数据|1048576|是||
|父建立人|PCREATE_MAN|外键值附加数据|100|是||
|父标识|PID|外键值|100|是||
|评论主体标识|PRINCIPAL_ID|文本，可指定长度|100|是||
|评论主体名称|PRINCIPAL_NAME|文本，可指定长度|100|是||
|评论主体类型|PRINCIPAL_TYPE|[文本，可指定长度](index/dictionary_index#principal_type "评论主体类型")|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


###### 索引

<el-row>
<el-tabs v-model="show_index">

<el-tab-pane label="COMMENT" name="index_COMMENT">

|    中文名col150 | 属性名称col200           | 包含属性col100 | 排序方向col100 | 索引长度col100 | 备注col600 |
| --------   |------------| -----  | -----  | :----: | -------- |
|所属数据对象|OWNER_TYPE|false|升序|-1||
|评论主体标识|PRINCIPAL_ID|false|升序|-1||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_COMMENT_COMMENT_PID](der/DER1N_COMMENT_COMMENT_PID)|[评论(COMMENT)](module/Base/comment)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_COMMENT_COMMENT_PID](der/DER1N_COMMENT_COMMENT_PID)|[评论(COMMENT)](module/Base/comment)|1:N关系||
|[DERCOSTOM_COMMENT_PAGE_PRINCIPAL_ID](der/DERCOSTOM_COMMENT_PAGE_PRINCIPAL_ID)|[页面(PAGE)](module/Wiki/article_page)|自定义关系||
|[DERCOSTOM_COMMENT_RUN_PRINCIPAL_ID](der/DERCOSTOM_COMMENT_RUN_PRINCIPAL_ID)|[执行用例(RUN)](module/TestMgmt/run)|自定义关系||
|[DERCUSTOM_COMMENT_CUSTOMER_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_CUSTOMER_PRINCIPAL_ID)|[客户(CUSTOMER)](module/ProdMgmt/customer)|自定义关系||
|[DERCUSTOM_COMMENT_DISCUSS_POST](der/DERCUSTOM_COMMENT_DISCUSS_POST)|[讨论(DISCUSS_POST)](module/Team/discuss_post)|自定义关系||
|[DERCUSTOM_COMMENT_DISCUSS_REPLY](der/DERCUSTOM_COMMENT_DISCUSS_REPLY)|[讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply)|自定义关系||
|[DERCUSTOM_COMMENT_IDEA_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_IDEA_PRINCIPAL_ID)|[需求(IDEA)](module/ProdMgmt/idea)|自定义关系||
|[DERCUSTOM_COMMENT_REVIEW_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_REVIEW_PRINCIPAL_ID)|[评审(REVIEW)](module/TestMgmt/review)|自定义关系||
|[DERCUSTOM_COMMENT_TEST_CASE_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_TEST_CASE_PRINCIPAL_ID)|[用例(TEST_CASE)](module/TestMgmt/test_case)|自定义关系||
|[DERCUSTOM_COMMENT_TICKET_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_TICKET_PRINCIPAL_ID)|[工单(TICKET)](module/ProdMgmt/ticket)|自定义关系||
|[DERCUSTOM_COMMENT_WORK_ITEM_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_WORK_ITEM_PRINCIPAL_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#comment_Create)|||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|删除评论|delete|[实体处理逻辑](module/Base/comment/logic/delete "删除评论")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[删除评论](module/Base/comment/logic/delete)|delete|无||评论数据的删除，将评论内容重置为：该评论已删除|
|[新建评论后通知](module/Base/comment/logic/after_create_notify)|after_create_notify|无||发表评论后，发送通知消息至相应负责人员、关注人员|

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/comment/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/comment/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/comment/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读写） :id=comment-ALL_RW

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
|[客户评论通知](module/Base/comment/notify/customer_notify)|customer_notify|[默认消息队列](index/notify_index)|[评论客户通知模板](index/notify_index#comment_customer)|关注人员 负责人 ||
|[产品需求评论通知](module/Base/comment/notify/idea_notify)|idea_notify|[默认消息队列](index/notify_index)|[评论产品需求通知模板](index/notify_index#comment_idea)|关注人员 负责人 ||
|[页面评论通知](module/Base/comment/notify/page_notify)|page_notify|[默认消息队列](index/notify_index)|[评论页面通知模板](index/notify_index#comment_page)|关注人员 ||
|[执行用例评论通知](module/Base/comment/notify/run_notify)|run_notify|[默认消息队列](index/notify_index)|[评论执行用例通知模板](index/notify_index#comment_run)|执行人 关注人员 ||
|[测试用例评论通知](module/Base/comment/notify/test_case_notify)|test_case_notify|[默认消息队列](index/notify_index)|[评论测试用例通知模板](index/notify_index#comment_test_case)|关注人员 维护人 ||
|[工单评论通知](module/Base/comment/notify/ticket_notify)|ticket_notify|[默认消息队列](index/notify_index)|[评论工单通知模板](index/notify_index#comment_ticket)|关注人员 负责人 ||
|[工作项评论通知](module/Base/comment/notify/work_item_notify)|work_item_notify|[默认消息队列](index/notify_index)|[评论工作项通知模板](index/notify_index#comment_work_item)|负责人 关注人 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CREATE_MAN_EQ|建立人|EQ||
|N_CREATE_TIME_EQ|建立时间|EQ||
|N_CREATE_TIME_GTANDEQ|建立时间|GTANDEQ||
|N_CREATE_TIME_LTANDEQ|建立时间|LTANDEQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_TYPE_EQ|所属数据对象|EQ||
|N_PID_EQ|父标识|EQ||
|N_PRINCIPAL_ID_EQ|评论主体标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 打开最近访问选择视图（移动端） | open_recent_pickup_view | 选择事项 |无数据|<details><summary>打开视图或向导（模态）</summary>[最近访问](app/view/recent_mob_pickup_view)</details>||
| 编辑 | panel_usr0322433346_button_calluilogic1_click | 编辑 |单项数据|用户自定义||
| 打开人员选择视图（移动端） | open_project_member | 选择人员 |无数据|<details><summary>打开视图或向导（模态）</summary>[空间成员](app/view/space_member_mob_pickup_view)</details>||
| 添加回复（客户沟通） | add_comment_client | 添加回复 |无数据|用户自定义||
| 编辑 | panel_usr0228764297_button_calluilogic1_click | 编辑 |单项数据|用户自定义||
| 回复 | panel_usr0322433346_button_calluilogic2_click | 回复 |单项数据|用户自定义||
| 回复 | panel_usr1009329700_button_calluilogic1_click | 回复 |单项数据|用户自定义||
| 删除评论 | del_comment | 删除评论 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 回复 | panel_usr0103471499_button_calluilogic2_click | 回复 |单项数据|用户自定义||
| 回复 | panel_usr0322433347_button_calluilogic2_click | 回复 |单项数据|用户自定义||
| 发送评论（移动端） | send_comment_mob | 发送评论 |无数据|用户自定义||
| 刷新评论列表 | refresh_comment_list | 刷新评论列表 |无数据|用户自定义||
| 发送评论 | send_comment | 发送评论 |无数据|用户自定义||
| 编辑 | panel_usr0322433347_button_calluilogic1_click | 编辑 |单项数据|用户自定义||
| 清空评论(客户沟通) | clear_comment_client | 清空 |无数据|用户自定义||
| 发送评论（知识库） | send_comment_wiki | 发送评论 |无数据|用户自定义||
| 清空评论（知识库） | clear_comment_wiki | 清空 |无数据|用户自定义||
| 清空评论 | clear_comment | 清空 |无数据|用户自定义||
| 发送评论（客户沟通） | send_comment_customer_comment | 发送评论 |无数据|用户自定义||
| 删除评论（知识库） | delete_comment_space | 删除评论 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 回复 | panel_usr0228764297_button_calluilogic2_click | 回复 |单项数据|用户自定义||
| 编辑 | panel_usr0103471499_button_calluilogic1_click | 编辑 |单项数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[刷新评论列表](module/Base/comment/uilogic/refresh_comment_list)|refresh_comment_list|刷新|
|[刷新评论列表（移动端）](module/Base/comment/uilogic/refresh_comment)|refresh_comment|刷新|
|[发送评论](module/Base/comment/uilogic/send_comment)|send_comment|发送评论，并关闭评论输入框|
|[发送评论(客户沟通)](module/Base/comment/uilogic/send_comment_customer_comment)|send_comment_customer_comment|发送评论，并关闭评论输入框，刷新评论列表|
|[发送评论(知识库)](module/Base/comment/uilogic/send_comment_wiki)|send_comment_wiki|发送评论，并关闭评论输入框，刷新评论列表|
|[发送评论（移动端）](module/Base/comment/uilogic/send_comment_mob)|send_comment_mob|发送评论，并关闭评论输入框|
|[回复评论](module/Base/comment/uilogic/reply_comment)|reply_comment|获取回复对象评论信息，并展开评论输入框，显示回复组件|
|[回复评论（知识库）](module/Base/comment/uilogic/reply_comment_wiki)|reply_comment_wiki|获取回复对象评论信息，并展开评论输入框，显示回复组件|
|[回复评论（知识库）(客户沟通)](module/Base/comment/uilogic/reply_comment_wiki_client)|reply_comment_wiki_client|获取回复对象评论信息，并展开评论输入框，显示回复组件|
|[回复评论（移动端）](module/Base/comment/uilogic/reply_comment_mob)|reply_comment_mob|获取回复对象评论信息，并回填评论输入框，显示回复组件|
|[控制评论按钮显示](module/Base/comment/uilogic/comment_icon_show)|comment_icon_show|显示评论按钮|
|[控制评论按钮显示（知识库）](module/Base/comment/uilogic/comment_icon_show_wiki)|comment_icon_show_wiki|知识库评论按钮显示|
|[控制评论按钮隐藏](module/Base/comment/uilogic/comment_icon_hidden)|comment_icon_hidden|获取部件状态信息，通过直接赋值，控制指定部件显示隐藏|
|[控制评论按钮隐藏（知识库）](module/Base/comment/uilogic/comment_icon_hidden_wiki)|comment_icon_hidden_wiki|知识库评论按钮隐藏|
|[添加回复(客户沟通)](module/Base/comment/uilogic/add_comment_client)|add_comment_client|获取指定评论数据，并展开评论输入框|
|[清空评论](module/Base/comment/uilogic/clear_comment)|clear_comment|清空当前输入框内已输入内容|
|[清空评论(客户沟通)](module/Base/comment/uilogic/clear_comment_client)|clear_comment_client|清空评论输入框内容，并隐藏输入框|
|[清空评论（知识库）](module/Base/comment/uilogic/clear_comment_wiki)|clear_comment_wiki|清空知识库当前输入框评论|
|[编辑评论](module/Base/comment/uilogic/edit_comment)|edit_comment|编辑评论，获取评论数据，展开评论输入框并赋值|
|[编辑评论（知识库）](module/Base/comment/uilogic/edit_comment_wiki)|edit_comment_wiki|编辑评论，获取评论数据，展开评论输入框并赋值|
|[编辑评论（知识库）(客户沟通)](module/Base/comment/uilogic/edit_comment_wiki_client)|edit_comment_wiki_client|编辑评论，获取评论数据，展开评论输入框并赋值|
|[获取列表总条数](module/Base/comment/uilogic/get_list_total)|get_list_total|获取列表总条数|
|[获取客户沟通总条数](module/Base/comment/uilogic/get_customer_comment_total)|get_customer_comment_total|获取客户沟通的总条数信息|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/comment?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/comment?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/comment?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/comment?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/comment?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/comment?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/comment?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/comment?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/comment?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/comment?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/comment?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/comment?id=界面逻辑`">
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

show_index:'index_COMMENT',
      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>