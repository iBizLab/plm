# 关注(Attention)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|所属数据标识|OWNER_ID|文本，可指定长度|100|[默认规则](module/Base/Attention/value_rule/Owner_id#default)||||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|[默认规则](module/Base/Attention/value_rule/Owner_type#default)||||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|[默认规则](module/Base/Attention/value_rule/Owner_subtype#default)||||
|关注人|USER_ID|文本，可指定长度|100|[默认规则](module/Base/Attention/value_rule/User_id#default)||||
|关注类型|TYPE|[单项选择(文本值)](index/dictionary_index#Attention_type "关注类型")|60|[默认规则](module/Base/Attention/value_rule/Type#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Attention/value_rule/Id#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/Attention/value_rule/Name#default)||√||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Attention/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Attention/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||


<p class="panel-title"><b>联合主键</b></p>

  * `所属数据标识(OWNER_ID)`
  * `关注人(USER_ID)`

## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_ATTENTION_CUSTOMER_OWNER_ID](der/DERCUSTOM_ATTENTION_CUSTOMER_OWNER_ID)|[客户(CUSTOMER)](module/ProdMgmt/Customer)|自定义关系||
|[DERCUSTOM_ATTENTION_IDEA_OWNER_ID](der/DERCUSTOM_ATTENTION_IDEA_OWNER_ID)|[需求(IDEA)](module/ProdMgmt/Idea)|自定义关系||
|[DERCUSTOM_ATTENTION_PAGE_OWNER_ID](der/DERCUSTOM_ATTENTION_PAGE_OWNER_ID)|[页面(PAGE)](module/Wiki/Article_page)|自定义关系||
|[DERCUSTOM_ATTENTION_RUN_OWNER_ID](der/DERCUSTOM_ATTENTION_RUN_OWNER_ID)|[执行用例(RUN)](module/TestMgmt/Run)|自定义关系||
|[DERCUSTOM_ATTENTION_TEST_CASE_OWNER_ID](der/DERCUSTOM_ATTENTION_TEST_CASE_OWNER_ID)|[用例(TEST_CASE)](module/TestMgmt/Test_case)|自定义关系||
|[DERCUSTOM_ATTENTION_TICKET_OWNER_ID](der/DERCUSTOM_ATTENTION_TICKET_OWNER_ID)|[工单(TICKET)](module/ProdMgmt/Ticket)|自定义关系||
|[DERCUSTOM_ATTENTION_WORK_ITEM_OWNER_ID](der/DERCUSTOM_ATTENTION_WORK_ITEM_OWNER_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|自定义关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#Attention_Create)|||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[添加关注后发送通知](module/Base/Attention/logic/after_create_notify)|after_create_notify|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[通过主数据标识查询通知对象(attention_by_ownerid)](module/Base/Attention/query/Attention_by_ownerid)|attention_by_ownerid|否|否 |否 ||
|[评论提醒(comment_attention)](module/Base/Attention/query/Comment_attention)|comment_attention|否|否 |否 ||
|[数据查询(DEFAULT)](module/Base/Attention/query/Default)|DEFAULT|是|否 |否 ||
|[通知对象(notify)](module/Base/Attention/query/Notify)|notify|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/Attention/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[通过主数据标识查询通知对象(attention_by_ownerid)](module/Base/Attention/dataset/Attention_by_ownerid)|attention_by_ownerid|数据查询|否|||
|[评论提醒(comment_attention)](module/Base/Attention/dataset/Comment_attention)|comment_attention|数据查询|否|||
|[数据集(DEFAULT)](module/Base/Attention/dataset/Default)|DEFAULT|数据查询|是|||
|[通知对象(notify)](module/Base/Attention/dataset/Notify)|notify|数据查询|否|||


## 数据权限

##### 全部数据（读写） :id=Attention-ALL_RW

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
|[提醒关注页面通知](module/Base/Attention/notify/attention_page_notify)|attention_page_notify|[默认消息队列](index/notify_index)|[提醒关注通知模板(页面)](index/notify_index#page_notice_attention)|关注人 ||
|[提醒关注通知](module/Base/Attention/notify/notice_attention_notify)|notice_attention_notify|[默认消息队列](index/notify_index)|[提醒关注通知模板](index/notify_index#notice_attention)|关注人 ||


## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_OWNER_ID_EQ|所属数据标识|EQ|
|N_OWNER_ID_EXISTS__N_OWNER_ID_EQ|所属数据标识|EXISTS|
|N_USER_ID_EQ|关注人|EQ|
|N_TYPE_EQ|关注类型|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|




