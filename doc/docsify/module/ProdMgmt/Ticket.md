# 工单(Ticket)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|编号|IDENTIFIER|文本，可指定长度|100|[默认规则](module/ProdMgmt/Ticket/value_rule/Identifier#default)|[工单编号](index/sequence_index#seq_ticket_id)|√||
|标题|TITLE|文本，可指定长度|500|[默认规则](module/ProdMgmt/Ticket/value_rule/Title#default)||√||
|状态|STATE|[单项选择(文本值)](index/dictionary_index#Ticket_state "工单状态")|60|[默认规则](module/ProdMgmt/Ticket/value_rule/State#default)||||
|类型|TYPE|单项选择(文本值)|100|[默认规则](module/ProdMgmt/Ticket/value_rule/Type#default)||||
|解决方案|SOLUTION|[单项选择(文本值)](index/dictionary_index#Solutions "工单解决方案")|60|[默认规则](module/ProdMgmt/Ticket/value_rule/Solution#default)||||
|优先级|PRIORITY|[单项选择(文本值)](index/dictionary_index#Ticket_priority "工单优先级")|60|[默认规则](module/ProdMgmt/Ticket/value_rule/Priority#default)||||
|渠道|CHANNEL|文本，可指定长度|100|[默认规则](module/ProdMgmt/Ticket/value_rule/Channel#default)||||
|描述|DESCRIPTION|长文本，长度1000|2000|[默认规则](module/ProdMgmt/Ticket/value_rule/Description#default)||||
|提交时间|SUBMITTED_AT|日期时间型|0|||||
|是否已归档|IS_ARCHIVED|是否逻辑|0|||||
|是否已删除|IS_DELETED|是否逻辑|0|||||
|预计时间|ESTIMATED_AT|文本，可指定长度|100|[默认规则](module/ProdMgmt/Ticket/value_rule/Estimated_at#default)||||
|标签|TAGS|长文本，长度1000|2000|[默认规则](module/ProdMgmt/Ticket/value_rule/Tags#default)||||
|负责人|ASSIGNEE_NAME|外键值文本|100|[默认规则](module/ProdMgmt/Ticket/value_rule/Assignee_name#default)||||
|负责人标识|ASSIGNEE_ID|外键值|100|[默认规则](module/ProdMgmt/Ticket/value_rule/Assignee_id#default)||||
|提交人标识|SUBMITTER_ID|文本，可指定长度|100|[默认规则](module/ProdMgmt/Ticket/value_rule/Submitter_id#default)||||
|提交人|SUBMITTER_NAME|文本，可指定长度|100|[默认规则](module/ProdMgmt/Ticket/value_rule/Submitter_name#default)||||
|附件|ATTACHMENTS|一对多关系数据集合|1048576|[默认规则](module/ProdMgmt/Ticket/value_rule/Attachments#default)||||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|[默认规则](module/ProdMgmt/Ticket/value_rule/Show_identifier#default)||||
|产品标识|PRODUCT_IDENTIFIER|外键值附加数据|15|[默认规则](module/ProdMgmt/Ticket/value_rule/Product_identifier#default)||||
|关注|ATTENTIONS|一对多关系数据集合|1048576|[默认规则](module/ProdMgmt/Ticket/value_rule/Attentions#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Ticket/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProdMgmt/Ticket/value_rule/Id#default)||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Ticket/value_rule/Update_man#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/ProdMgmt/Ticket/value_rule/Name#default)||||
|产品标识|PRODUCT_ID|外键值|100|[默认规则](module/ProdMgmt/Ticket/value_rule/Product_id#default)||||
|客户标识|CUSTOMER_ID|外键值|100|[默认规则](module/ProdMgmt/Ticket/value_rule/Customer_id#default)||||
|客户|CUSTOMER_NAME|外键值文本|500|[默认规则](module/ProdMgmt/Ticket/value_rule/Customer_name#default)||||
|所属产品|PRODUCT_NAME|外键值文本|200|[默认规则](module/ProdMgmt/Ticket/value_rule/Product_name#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_ATTENTION_TICKET_OWNER_ID](der/DERCUSTOM_ATTENTION_TICKET_OWNER_ID)|[关注(ATTENTION)](module/Base/Attention)|自定义关系||
|[DERCUSTOM_COMMENT_TICKET_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_TICKET_PRINCIPAL_ID)|[评论(COMMENT)](module/Base/Comment)|自定义关系||
|[DERCUSTOM_RELATION_TICKET](der/DERCUSTOM_RELATION_TICKET)|[关联(RELATION)](module/Base/Relation)|自定义关系||
|[DERCUSTOM_TICKET_ATTACHMENT](der/DERCUSTOM_TICKET_ATTACHMENT)|[附件(ATTACHMENT)](module/Base/Attachment)|自定义关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_TICKET_CUSTOMER_CUSTOMER_ID](der/DER1N_TICKET_CUSTOMER_CUSTOMER_ID)|[客户(CUSTOMER)](module/ProdMgmt/Customer)|1:N关系||
|[DER1N_TICKET_PRODUCT_PRODUCT_ID](der/DER1N_TICKET_PRODUCT_PRODUCT_ID)|[产品(PRODUCT)](module/ProdMgmt/Product)|1:N关系||
|[DER1N_TICKET_USER_ASSIGNEE_ID](der/DER1N_TICKET_USER_ASSIGNEE_ID)|[企业用户(USER)](module/Base/User)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#Ticket_Create)|||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#Ticket_Update)|||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#Ticket_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|分配负责人|Allocate_person|[实体处理逻辑](module/ProdMgmt/Ticket/logic/allocate_person "分配负责人")|默认|不支持||||
|归档|Archive|[实体处理逻辑](module/ProdMgmt/Ticket/logic/archive "归档")|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|设置标签|Choose_tag|[实体处理逻辑](module/ProdMgmt/Ticket/logic/choose_tag "设置标签")|默认|不支持||||
|客户选择工单|Customer_choose_ticket|[实体处理逻辑](module/ProdMgmt/Ticket/logic/customer_choose_ticket "客户选择工单")|默认|不支持||||
|客户取消关联工单|Customer_del_ticket|[实体处理逻辑](module/ProdMgmt/Ticket/logic/customer_del_ticket "客户取消关联工单")|默认|不支持||||
|取消关联|Del_relation|[实体处理逻辑](module/ProdMgmt/Ticket/logic/del_relation "取消关联")|默认|不支持||||
|删除|Delete|[实体处理逻辑](module/ProdMgmt/Ticket/logic/delete "删除")|默认|不支持||||
|获取关注人|Get_attention|内置方法|默认|不支持||||
|无操作|Nothing|[实体处理逻辑](module/ProdMgmt/Ticket/logic/nothing "无操作")|默认|不支持||||
|其他实体关联工单|Others_relation_ticket|[实体处理逻辑](module/ProdMgmt/Ticket/logic/others_relation_ticket "其他实体关联工单")|默认|不支持||||
|产品工单关联分页计数器|Product_ticket_re_counters|[实体处理逻辑](module/ProdMgmt/Ticket/logic/product_ticket_re_counters "产品工单关联分页计数器")|默认|不支持||||
|恢复|Recover|[实体处理逻辑](module/ProdMgmt/Ticket/logic/recover "恢复")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[分配负责人](module/ProdMgmt/Ticket/logic/allocate_person)|allocate_person|无|||
|[归档](module/ProdMgmt/Ticket/logic/archive)|archive|无|||
|[负责人变更附加逻辑](module/ProdMgmt/Ticket/logic/assignee_onchange)|assignee_onchange|属性逻辑|||
|[设置标签](module/ProdMgmt/Ticket/logic/choose_tag)|choose_tag|无|||
|[生成最近访问](module/ProdMgmt/Ticket/logic/create_recent)|create_recent|无|||
|[客户选择工单](module/ProdMgmt/Ticket/logic/customer_choose_ticket)|customer_choose_ticket|无|||
|[客户取消关联工单](module/ProdMgmt/Ticket/logic/customer_del_ticket)|customer_del_ticket|无|||
|[取消关联](module/ProdMgmt/Ticket/logic/del_relation)|del_relation|无|||
|[删除](module/ProdMgmt/Ticket/logic/delete)|delete|无|||
|[是否归档变更附加逻辑](module/ProdMgmt/Ticket/logic/is_archived_onchage)|is_archived_onchage|属性逻辑|||
|[是否删除变更附加逻辑](module/ProdMgmt/Ticket/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑|||
|[无操作](module/ProdMgmt/Ticket/logic/nothing)|nothing|无|||
|[其他实体关联工单](module/ProdMgmt/Ticket/logic/others_relation_ticket)|others_relation_ticket|无|||
|[产品工单关联分页计数器](module/ProdMgmt/Ticket/logic/product_ticket_re_counters)|product_ticket_re_counters|无||计算分页下关联事项的条数|
|[恢复](module/ProdMgmt/Ticket/logic/recover)|recover|无|||
|[状态变更附加逻辑](module/ProdMgmt/Ticket/logic/state_onchage)|state_onchage|属性逻辑|||


## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `是否已归档(IS_ARCHIVED)` 




<p class="panel-title"><b>操作标识分布</b></p>
<br>
<table>
  <tr>
    <th rowspan="1">操作标识</th>
<th colspan="1">是</th>
<th colspan="1">否</th>
  </tr>
  <tr>
    <td>激活(ACTIVATE)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"></td>  </tr>
  <tr>
    <td>归档(ARCHIVED)</td>
<td align="center"></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>建立(CREATE)<br><a href ="/#/der/DER1N_TICKET_PRODUCT_PRODUCT_ID">DER1N_TICKET_PRODUCT_PRODUCT_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>建立(CREATE)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>删除(DELETE)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>删除(DELETE)<br><a href ="/#/der/DER1N_TICKET_PRODUCT_PRODUCT_ID">DER1N_TICKET_PRODUCT_PRODUCT_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>读取(READ)<br><a href ="/#/der/DER1N_TICKET_PRODUCT_PRODUCT_ID">DER1N_TICKET_PRODUCT_PRODUCT_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>读取(READ)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>更新(UPDATE)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>更新(UPDATE)<br><a href ="/#/der/DER1N_TICKET_PRODUCT_PRODUCT_ID">DER1N_TICKET_PRODUCT_PRODUCT_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>

</table>




## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[已归档(archived)](module/ProdMgmt/Ticket/query/Archived)|archived|否|否 |否 ||
|[评论通知负责人(comment_notify_assignee)](module/ProdMgmt/Ticket/query/Comment_notify_assignee)|comment_notify_assignee|否|否 |否 ||
|[普通工单(common)](module/ProdMgmt/Ticket/query/Common)|common|否|否 |否 |通用查询，非删除数据|
|[客户未关联工单(customer_notre_ticket)](module/ProdMgmt/Ticket/query/Customer_notre_ticket)|customer_notre_ticket|否|否 |否 |查询未关联工单的数据；客户关联工单表格调用|
|[客户关联工单(customer_relation_ticket)](module/ProdMgmt/Ticket/query/Customer_relation_ticket)|customer_relation_ticket|否|否 |否 ||
|[数据查询(DEFAULT)](module/ProdMgmt/Ticket/query/Default)|DEFAULT|是|否 |否 ||
|[已删除(deleted)](module/ProdMgmt/Ticket/query/Deleted)|deleted|否|否 |否 ||
|[产品需求关联工单(idea_relation_ticket)](module/ProdMgmt/Ticket/query/Idea_relation_ticket)|idea_relation_ticket|否|否 |否 |产品关联工单表格调用|
|[我负责的(my_assign)](module/ProdMgmt/Ticket/query/My_assign)|my_assign|否|否 |否 |首页我负责的工单表格调用|
|[我关注的工单(my_attention)](module/ProdMgmt/Ticket/query/My_attention)|my_attention|否|否 |否 ||
|[我创建的(my_created)](module/ProdMgmt/Ticket/query/My_created)|my_created|否|否 |否 ||
|[正常状态(normal)](module/ProdMgmt/Ticket/query/Normal)|normal|否|否 |否 |非归档，非删除数据|
|[未关联的工单(not_exsists_relation)](module/ProdMgmt/Ticket/query/Not_exsists_relation)|not_exsists_relation|否|否 |否 ||
|[最近浏览(recent_ticket)](module/ProdMgmt/Ticket/query/Recent_ticket)|recent_ticket|否|否 |否 ||
|[当前标签下工单(ticket_re_product_tag)](module/ProdMgmt/Ticket/query/Ticket_re_product_tag)|ticket_re_product_tag|否|否 |否 |当前标签下工单表格视图调用|
|[工单关联工单(ticket_relation_ticket)](module/ProdMgmt/Ticket/query/Ticket_relation_ticket)|ticket_relation_ticket|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProdMgmt/Ticket/query/View)|VIEW|否|否 |否 ||
|[工作项关联工单(work_item_relation_ticket)](module/ProdMgmt/Ticket/query/Work_item_relation_ticket)|work_item_relation_ticket|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[已归档(archived)](module/ProdMgmt/Ticket/dataset/Archived)|archived|数据查询|否|||
|[评论通知负责人(comment_notify_assignee)](module/ProdMgmt/Ticket/dataset/Comment_notify_assignee)|comment_notify_assignee|数据查询|否|||
|[普通工单(common)](module/ProdMgmt/Ticket/dataset/Common)|common|数据查询|否|||
|[客户未关联工单(customer_notre_ticket)](module/ProdMgmt/Ticket/dataset/Customer_notre_ticket)|customer_notre_ticket|数据查询|否|||
|[客户关联工单(customer_relation_ticket)](module/ProdMgmt/Ticket/dataset/Customer_relation_ticket)|customer_relation_ticket|数据查询|否|||
|[数据集(DEFAULT)](module/ProdMgmt/Ticket/dataset/Default)|DEFAULT|数据查询|是|||
|[已删除(deleted)](module/ProdMgmt/Ticket/dataset/Deleted)|deleted|数据查询|否|||
|[产品需求关联工单(idea_relation_ticket)](module/ProdMgmt/Ticket/dataset/Idea_relation_ticket)|idea_relation_ticket|数据查询|否|||
|[我负责的(my_assign)](module/ProdMgmt/Ticket/dataset/My_assign)|my_assign|数据查询|否|||
|[我负责的工单(my_assignee_count)](module/ProdMgmt/Ticket/dataset/My_assignee_count)|my_assignee_count|数据查询|否|||
|[我关注的工单(my_attention)](module/ProdMgmt/Ticket/dataset/My_attention)|my_attention|数据查询|否|||
|[我创建的(my_created)](module/ProdMgmt/Ticket/dataset/My_created)|my_created|数据查询|否|||
|[正常状态(normal)](module/ProdMgmt/Ticket/dataset/Normal)|normal|数据查询|否|||
|[未关联的工单(not_exsists_relation)](module/ProdMgmt/Ticket/dataset/Not_exsists_relation)|not_exsists_relation|数据查询|否|||
|[最近浏览(recent_ticket)](module/ProdMgmt/Ticket/dataset/Recent_ticket)|recent_ticket|数据查询|否|||
|[当前标签下工单(ticket_re_product_tag)](module/ProdMgmt/Ticket/dataset/Ticket_re_product_tag)|ticket_re_product_tag|数据查询|否|||
|[工单关联工单(ticket_relation_ticket)](module/ProdMgmt/Ticket/dataset/Ticket_relation_ticket)|ticket_relation_ticket|数据查询|否|||
|[工作项关联工单(work_item_relation_ticket)](module/ProdMgmt/Ticket/dataset/Work_item_relation_ticket)|work_item_relation_ticket|数据查询|否|||


## 数据权限

##### 操作用户(写) :id=Ticket-USER_W

<p class="panel-title"><b>数据范围</b></p>


<p class="panel-title"><b>数据能力</b></p>

* `CREATE(产品(SUBDATA))`




## 消息通知

|    名称   | 代码名       |  消息队列   |  消息模板 |  通知目标     |  备注  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[归档/激活通知](module/ProdMgmt/Ticket/notify/archive_notify)|archive_notify|[默认消息队列](index/notify_index)|[工单通知模板(归档/激活工单)](index/notify_index#ticket_archive)|负责人 关注人员 ||
|[取消分配负责人通知](module/ProdMgmt/Ticket/notify/assignee_cancel_notify)|assignee_cancel_notify|[默认消息队列](index/notify_index)|[工单通知模板(取消分配负责人)](index/notify_index#ticket_assignee_cancel)|负责人 ||
|[分配负责人通知](module/ProdMgmt/Ticket/notify/assignee_notify)|assignee_notify|[默认消息队列](index/notify_index)|[工单通知模板(分配负责人)](index/notify_index#ticket_assignee)|负责人 ||
|[负责人变更通知](module/ProdMgmt/Ticket/notify/assignee_onchange_notify)|assignee_onchange_notify|[默认消息队列](index/notify_index)|[工单通知模板(负责人变更)](index/notify_index#ticket_assignee_onchange)|关注人员 ||
|[删除/恢复工单通知](module/ProdMgmt/Ticket/notify/remove_notify)|remove_notify|[默认消息队列](index/notify_index)|[工单通知模板(删除/恢复工单)](index/notify_index#ticket_remove)|关注人员 负责人 ||
|[状态变更通知](module/ProdMgmt/Ticket/notify/state_onchage_notify)|state_onchage_notify|[默认消息队列](index/notify_index)|[工单通知模板(状态变更)](index/notify_index#ticket_state_onchange)|负责人 关注人员 ||


## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_IDENTIFIER_LIKE|编号|LIKE|
|N_TITLE_LIKE|标题|LIKE|
|N_STATE_EQ|状态|EQ|
|N_STATE_NOTEQ|状态|NOTEQ|
|N_STATE_NOTIN|状态|NOTIN|
|N_SOLUTION_EQ|解决方案|EQ|
|N_PRIORITY_EQ|优先级|EQ|
|N_IS_ARCHIVED_EQ|是否已归档|EQ|
|N_IS_DELETED_EQ|是否已删除|EQ|
|N_ASSIGNEE_ID_EQ|负责人标识|EQ|
|N_SHOW_IDENTIFIER_LIKE|编号|LIKE|
|N_CREATE_MAN_EQ|建立人|EQ|
|N_ID_NOTEQ|标识|NOTEQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_PRODUCT_ID_EQ|产品标识|EQ|
|N_CUSTOMER_ID_EQ|客户标识|EQ|
|N_CUSTOMER_NAME_EQ|客户|EQ|
|N_CUSTOMER_NAME_LIKE|客户|LIKE|
|N_PRODUCT_NAME_EQ|所属产品|EQ|
|N_PRODUCT_NAME_LIKE|所属产品|LIKE|


## 导入模式
* 产品工单导入

|标题|类型|状态|负责人|描述|优先级|解决方案|标签|产品|
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| - | - | - | - | - | - | - | - | - |



## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 设置标签 | choose_tag | 设置标签 |多项数据（主键）|<details><summary>后台调用</summary>[Choose_tag](#行为)|是|引用视图或树节点||
| 工单删除 | ticket_delete | 删除 |多项数据（主键）|<details><summary>后台调用</summary>[Delete](#行为)|是|引用视图或树节点||
| 分配负责人 | allocate_person | 分配负责人 |多项数据（主键）|<details><summary>后台调用</summary>[Allocate_person](#行为)|是|引用视图或树节点||
| 取消关联 | del_relation | 取消关联 |单项数据（主键）|<details><summary>后台调用</summary>[Del_relation](#行为)|是|引用视图或树节点||
| 工单归档 | ticket_archive | 归档 |多项数据（主键）|<details><summary>后台调用</summary>[Archive](#行为)|是|引用视图或树节点||
| 添加附件 | add_attachments | 添加附件 |无数据|用户自定义|否|无||
| 添加工单（其他实体关联） | others_add_relation_ticket | 添加工单 |无数据|用户自定义|否|引用视图或树节点||
| 工单恢复 | ticket_recover | 恢复 |多项数据（主键）|<details><summary>后台调用</summary>[Recover](#行为)|是|引用视图或树节点||
| 新建执行后（建立双向关联数据) | after_creat_double_relation | 新建执行后（建立双向关联数据) |单项数据（主键）|用户自定义|否|无||
| 客户取消关联工单 | customer_del_ticket | 取消关联 |单项数据|<details><summary>后台调用</summary>[Customer_del_ticket](#行为)|是|引用视图或树节点||
| 确定 | panel_Usr1226376706_button_okaction_click | 确定 |单项数据|用户自定义|否|无||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[获取工单总条数](module/ProdMgmt/Ticket/uilogic/get_ticket_total)|get_ticket_total|
|[添加附件数据](module/ProdMgmt/Ticket/uilogic/add_attachment)|add_attachment|
|[关联工单值变更](module/ProdMgmt/Ticket/uilogic/relation_ticket_change)|relation_ticket_change|
|[新建工单并生成关联数据](module/ProdMgmt/Ticket/uilogic/create_and_relation)|create_and_relation|
|[建立双向关联数据](module/ProdMgmt/Ticket/uilogic/create_double_relation)|create_double_relation|
|[触发计数器刷新](module/ProdMgmt/Ticket/uilogic/refresh_counter)|refresh_counter|
|[建立关联数据](module/ProdMgmt/Ticket/uilogic/create_relation)|create_relation|
|[客户添加工单值变更](module/ProdMgmt/Ticket/uilogic/customer_add_change)|customer_add_change|
|[选择下拉框区域展示](module/ProdMgmt/Ticket/uilogic/show_choose_area)|show_choose_area|
