# 评论(Comment)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|评论主体标识|PRINCIPAL_ID|文本，可指定长度|100|[默认规则](module/Base/Comment/value_rule/Principal_id#default)||||
|评论主体名称|PRINCIPAL_NAME|文本，可指定长度|100|[默认规则](module/Base/Comment/value_rule/Principal_name#default)||||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|[默认规则](module/Base/Comment/value_rule/Owner_type#default)||||
|评论主体类型|PRINCIPAL_TYPE|[文本，可指定长度](index/dictionary_index#Principal_type "评论主体类型")|100|[默认规则](module/Base/Comment/value_rule/Principal_type#default)||||
|内容|CONTENT|长文本，没有长度限制|1048576|[默认规则](module/Base/Comment/value_rule/Content#default)||||
|父内容|PCONTENT|外键值附加数据|1048576|[默认规则](module/Base/Comment/value_rule/Pcontent#default)||||
|父建立人|PCREATE_MAN|外键值附加数据|100|[默认规则](module/Base/Comment/value_rule/Pcreate_man#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Comment/value_rule/Id#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/Comment/value_rule/Name#default)||√||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Comment/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Comment/value_rule/Update_man#default)||||
|父标识|PID|外键值|100|[默认规则](module/Base/Comment/value_rule/Pid#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_COMMENT_COMMENT_PID](der/DER1N_COMMENT_COMMENT_PID)|[评论(COMMENT)](module/Base/Comment)|1:N关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_COMMENT_COMMENT_PID](der/DER1N_COMMENT_COMMENT_PID)|[评论(COMMENT)](module/Base/Comment)|1:N关系||
|[DERCOSTOM_COMMENT_PAGE_PRINCIPAL_ID](der/DERCOSTOM_COMMENT_PAGE_PRINCIPAL_ID)|[页面(PAGE)](module/Wiki/Article_page)|自定义关系||
|[DERCOSTOM_COMMENT_RUN_PRINCIPAL_ID](der/DERCOSTOM_COMMENT_RUN_PRINCIPAL_ID)|[执行用例(RUN)](module/TestMgmt/Run)|自定义关系||
|[DERCUSTOM_COMMENT_CUSTOMER_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_CUSTOMER_PRINCIPAL_ID)|[客户(CUSTOMER)](module/ProdMgmt/Customer)|自定义关系||
|[DERCUSTOM_COMMENT_IDEA_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_IDEA_PRINCIPAL_ID)|[需求(IDEA)](module/ProdMgmt/Idea)|自定义关系||
|[DERCUSTOM_COMMENT_TEST_CASE_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_TEST_CASE_PRINCIPAL_ID)|[用例(TEST_CASE)](module/TestMgmt/Test_case)|自定义关系||
|[DERCUSTOM_COMMENT_TICKET_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_TICKET_PRINCIPAL_ID)|[工单(TICKET)](module/ProdMgmt/Ticket)|自定义关系||
|[DERCUSTOM_COMMENT_WORK_ITEM_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_WORK_ITEM_PRINCIPAL_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|自定义关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#Comment_Create)|||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|删除评论|Delete|[实体处理逻辑](module/Base/Comment/logic/delete "删除评论")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[新建评论后通知](module/Base/Comment/logic/after_create_notify)|after_create_notify|无|||
|[删除评论](module/Base/Comment/logic/delete)|delete|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/Base/Comment/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/Comment/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/Comment/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读写） :id=Comment-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `READ`
* `DELETE`
* `UPDATE`




## 消息通知

|    名称   | 代码名       |  消息队列   |  消息模板 |  通知目标     |  备注  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[评论客户通知](module/Base/Comment/notify/customer_notify)|customer_notify|[默认消息队列](index/notify_index)|[评论通知模板](index/notify_index#comment)|负责人 关注人员 ||
|[评论需求通知](module/Base/Comment/notify/idea_notify)|idea_notify|[默认消息队列](index/notify_index)|[评论通知模板](index/notify_index#comment)|关注人员 负责人 ||
|[评论页面通知](module/Base/Comment/notify/page_notify)|page_notify|[默认消息队列](index/notify_index)|[评论页面通知模板](index/notify_index#comment_page)|关注人员 ||
|[评论执行用例通知](module/Base/Comment/notify/run_notify)|run_notify|[默认消息队列](index/notify_index)|[评论通知模板](index/notify_index#comment)|关注人员 执行人 ||
|[评论测试用例通知](module/Base/Comment/notify/test_case_notify)|test_case_notify|[默认消息队列](index/notify_index)|[评论通知模板](index/notify_index#comment)|关注人员 维护人 ||
|[评论工单通知](module/Base/Comment/notify/ticket_notify)|ticket_notify|[默认消息队列](index/notify_index)|[评论通知模板](index/notify_index#comment)|负责人 关注人员 ||
|[评论工作项通知](module/Base/Comment/notify/work_item_notify)|work_item_notify|[默认消息队列](index/notify_index)|[评论通知模板](index/notify_index#comment)|负责人 关注人 ||


## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_PRINCIPAL_ID_EQ|评论主体标识|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_PID_EQ|父标识|EQ|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 发送评论（知识库） | send_comment_wiki | 发送评论 |无数据|用户自定义|否|无||
| 编辑 | panel_Usr0228764297_button_calluilogic1_click | 编辑 |单项数据|用户自定义|否|无||
| 清空评论 | clear_comment | 清空 |无数据|用户自定义|否|无||
| 删除评论 | del_comment | 删除评论 |单项数据（主键）|<details><summary>后台调用</summary>[Delete](#行为)|是|引用视图或树节点||
| 回复 | panel_Usr0103471499_button_calluilogic2_click | 回复 |单项数据|用户自定义|否|无||
| 编辑 | panel_Usr0103471499_button_calluilogic1_click | 编辑 |单项数据|用户自定义|否|无||
| 回复 | panel_Usr0228764297_button_calluilogic2_click | 回复 |单项数据|用户自定义|否|无||
| 发送评论 | send_comment | 发送评论 |无数据|用户自定义|否|引用视图或树节点||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[控制评论按钮显示](module/Base/Comment/uilogic/comment_icon_show)|comment_icon_show|
|[发送评论(知识库)](module/Base/Comment/uilogic/send_comment_wiki)|send_comment_wiki|
|[清空评论](module/Base/Comment/uilogic/clear_comment)|clear_comment|
|[编辑评论](module/Base/Comment/uilogic/edit_comment)|edit_comment|
|[回复评论（知识库）](module/Base/Comment/uilogic/reply_comment_wiki)|reply_comment_wiki|
|[控制评论按钮隐藏](module/Base/Comment/uilogic/comment_icon_hidden)|comment_icon_hidden|
|[回复评论](module/Base/Comment/uilogic/reply_comment)|reply_comment|
|[编辑评论（知识库）(测试)](module/Base/Comment/uilogic/edit_comment_wiki_test)|edit_comment_wiki_test|
|[发送评论测试](module/Base/Comment/uilogic/test_send_comment)|test_send_comment|
|[编辑评论（知识库）](module/Base/Comment/uilogic/edit_comment_wiki)|edit_comment_wiki|
|[发送评论](module/Base/Comment/uilogic/send_comment)|send_comment|
