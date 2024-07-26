# 工单(ticket)  <!-- {docsify-ignore-all} -->


用于追踪和管理产品相关的客户请求和问题解决过程。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|负责人标识|ASSIGNEE_ID|外键值|100|是||
|负责人|ASSIGNEE_NAME|外键值文本|100|是||
|附件|ATTACHMENTS|一对多关系数据集合|1048576|是||
|关注|ATTENTIONS|一对多关系数据集合|1048576|是||
|关注人|ATTENTIONS_IMP|文本，可指定长度|100|是||
|渠道|CHANNEL|文本，可指定长度|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|客户标识|CUSTOMER_ID|外键值|100|是||
|客户|CUSTOMER_NAME|外键值文本|500|是||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|预计时间|ESTIMATED_AT|文本，可指定长度|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_ticket_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|是否已删除|IS_DELETED|是否逻辑||是||
|名称|NAME|文本，可指定长度|200|是||
|优先级|PRIORITY|[单项选择(文本值)](index/dictionary_index#ticket_priority "工单优先级")|60|是||
|产品标识|PRODUCT_ID|外键值|100|否||
|产品标识|PRODUCT_IDENTIFIER|外键值附加数据|15|是||
|所属产品|PRODUCT_NAME|外键值文本|200|是||
|工单数|REP_NUM|文本，可指定长度|200|是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|解决方案|SOLUTION|[单项选择(文本值)](index/dictionary_index#solutions "工单解决方案")|60|是||
|状态|STATE|单项选择(文本值)|60|否||
|提交时间|SUBMITTED_AT|日期时间型||是||
|提交人标识|SUBMITTER_ID|文本，可指定长度|100|是||
|提交人|SUBMITTER_NAME|文本，可指定长度|100|是||
|标签|TAGS|长文本，长度1000|2000|是||
|标题|TITLE|文本，可指定长度|500|否||
|类型|TYPE|单项选择(文本值)|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="高级搜索" name="field_group_advanced_search">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|产品标识|PRODUCT_ID|外键值|100|否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|标题|TITLE|文本，可指定长度|500|否||
|状态|STATE|单项选择(文本值)|60|否||
|所属产品|PRODUCT_NAME|外键值文本|200|是||

</el-tab-pane>
<el-tab-pane label="负责人" name="field_group_assignee">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|负责人|ASSIGNEE_NAME|外键值文本|100|是||
|负责人标识|ASSIGNEE_ID|外键值|100|是||

</el-tab-pane>
<el-tab-pane label="BI查询属性组" name="field_group_bi_search_group">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|是否已删除|IS_DELETED|是否逻辑||是||
|建立时间|CREATE_TIME|日期时间型||否||
|提交时间|SUBMITTED_AT|日期时间型||是||
|更新时间|UPDATE_TIME|日期时间型||否||
|名称|NAME|文本，可指定长度|200|是||
|预计时间|ESTIMATED_AT|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|渠道|CHANNEL|文本，可指定长度|100|是||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_ticket_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|标题|TITLE|文本，可指定长度|500|否||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|提交人|SUBMITTER_NAME|文本，可指定长度|100|是||
|关注人|ATTENTIONS_IMP|文本，可指定长度|100|是||
|负责人|ASSIGNEE_NAME|外键值文本|100|是||
|客户|CUSTOMER_NAME|外键值文本|500|是||
|客户标识|CUSTOMER_ID|外键值|100|是||
|产品标识|PRODUCT_ID|外键值|100|否||
|负责人标识|ASSIGNEE_ID|外键值|100|是||
|类型|TYPE|单项选择(文本值)|100|是||
|解决方案|SOLUTION|[单项选择(文本值)](index/dictionary_index#solutions "工单解决方案")|60|是||
|优先级|PRIORITY|[单项选择(文本值)](index/dictionary_index#ticket_priority "工单优先级")|60|是||
|状态|STATE|单项选择(文本值)|60|否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|所属产品|PRODUCT_NAME|外键值文本|200|是||
|提交人标识|SUBMITTER_ID|文本，可指定长度|100|是||
|标签|TAGS|长文本，长度1000|2000|是||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_ATTENTION_TICKET_OWNER_ID](der/DERCUSTOM_ATTENTION_TICKET_OWNER_ID)|[关注(ATTENTION)](module/Base/attention)|自定义关系||
|[DERCUSTOM_COMMENT_TICKET_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_TICKET_PRINCIPAL_ID)|[评论(COMMENT)](module/Base/comment)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_TICKET](der/DERCUSTOM_RELATION_TARGET_TICKET)|[关联(RELATION)](module/Base/relation)|自定义关系||
|[DERCUSTOM_TICKET_ATTACHMENT](der/DERCUSTOM_TICKET_ATTACHMENT)|[附件(ATTACHMENT)](module/Base/attachment)|自定义关系||
|[DERCUSTOM_TICKET_SEARCH_ATTACHMENT](der/DERCUSTOM_TICKET_SEARCH_ATTACHMENT)|[附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment)|自定义关系||
|[DERCUSTOM_TICKET_SEARCH_COMMENT](der/DERCUSTOM_TICKET_SEARCH_COMMENT)|[评论搜索(SEARCH_COMMENT)](module/Base/search_comment)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_TICKET_CUSTOMER_CUSTOMER_ID](der/DER1N_TICKET_CUSTOMER_CUSTOMER_ID)|[客户(CUSTOMER)](module/ProdMgmt/customer)|1:N关系||
|[DER1N_TICKET_PRODUCT_PRODUCT_ID](der/DER1N_TICKET_PRODUCT_PRODUCT_ID)|[产品(PRODUCT)](module/ProdMgmt/product)|1:N关系||
|[DER1N_TICKET_USER_ASSIGNEE_ID](der/DER1N_TICKET_USER_ASSIGNEE_ID)|[企业用户(USER)](module/Base/user)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#ticket_Create)|||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#ticket_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#ticket_Update)|||
|激活|activate|[实体处理逻辑](module/ProdMgmt/ticket/logic/activate "激活")|默认|不支持||||
|分配负责人|allocate_person|[实体处理逻辑](module/ProdMgmt/ticket/logic/allocate_person "分配负责人")|默认|不支持||||
|归档|archive|[实体处理逻辑](module/ProdMgmt/ticket/logic/archive "归档")|默认|不支持||||
|设置标签|choose_tag|[实体处理逻辑](module/ProdMgmt/ticket/logic/choose_tag "设置标签")|默认|不支持||||
|客户选择工单|customer_choose_ticket|[实体处理逻辑](module/ProdMgmt/ticket/logic/customer_choose_ticket "客户选择工单")|默认|不支持||||
|客户取消关联工单|customer_del_ticket|[实体处理逻辑](module/ProdMgmt/ticket/logic/customer_del_ticket "客户取消关联工单")|默认|不支持||||
|删除|delete|[实体处理逻辑](module/ProdMgmt/ticket/logic/delete "删除")|默认|不支持||||
|获取关注人|get_attention|内置方法|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/ProdMgmt/ticket/logic/nothing "无操作")|默认|不支持||||
|其他实体关联工单|others_relation_ticket|[实体处理逻辑](module/ProdMgmt/ticket/logic/others_relation_ticket "其他实体关联工单")|默认|不支持||||
|产品工单关联分页计数器|product_ticket_re_counters|[实体处理逻辑](module/ProdMgmt/ticket/logic/product_ticket_re_counters "产品工单关联分页计数器")|默认|不支持||||
|恢复|recover|[实体处理逻辑](module/ProdMgmt/ticket/logic/recover "恢复")|默认|不支持||||
|测试获取归档数据|test_get_archived_info|[实体处理逻辑](module/ProdMgmt/ticket/logic/get_archived_info "查询归档数据")|默认|不支持||||
|工单只读用户判断|ticket_readonly_recognize|[实体处理逻辑](module/ProdMgmt/ticket/logic/get_product_member "获取产品成员")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[产品工单关联分页计数器](module/ProdMgmt/ticket/logic/product_ticket_re_counters)|product_ticket_re_counters|无||计算分页下关联事项的条数|
|[其他实体关联工单](module/ProdMgmt/ticket/logic/others_relation_ticket)|others_relation_ticket|无||工单实体的关联操作，生成正向，反向关联数据|
|[分配负责人](module/ProdMgmt/ticket/logic/allocate_person)|allocate_person|无||分配工单负责人，修改负责人属性|
|[删除](module/ProdMgmt/ticket/logic/delete)|delete|无||工单数据的逻辑删除，修改工单的是否删除属性值|
|[客户取消关联工单](module/ProdMgmt/ticket/logic/customer_del_ticket)|customer_del_ticket|无||客户取消关联工单操作|
|[客户选择工单](module/ProdMgmt/ticket/logic/customer_choose_ticket)|customer_choose_ticket|无||客户选择工单操作|
|[归档](module/ProdMgmt/ticket/logic/archive)|archive|无||未归档工单数据的归档处理，修改工单的归档状态为归档|
|[恢复](module/ProdMgmt/ticket/logic/recover)|recover|无||已删除状态工单数据的恢复，修改工单的是否删除属性值，并恢复访问记录|
|[无操作](module/ProdMgmt/ticket/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[是否删除变更附加逻辑](module/ProdMgmt/ticket/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||工单删除或恢复数据时触发相应的通知消息|
|[是否归档变更附加逻辑](module/ProdMgmt/ticket/logic/is_archived_onchage)|is_archived_onchage|属性逻辑||工单归档或激活数据时触发相应的通知消息|
|[查询归档数据](module/ProdMgmt/ticket/logic/get_archived_info)|get_archived_info|无||查询数据是否归档，归档则返回归档信息|
|[激活](module/ProdMgmt/ticket/logic/activate)|activate|无||激活已归档状态工单，修改工单的归档属性|
|[状态变更附加逻辑](module/ProdMgmt/ticket/logic/state_onchange)|state_onchange|属性逻辑||工单状态变更时触发相应的通知消息，同时生成流转记录|
|[生成最近访问](module/ProdMgmt/ticket/logic/create_recent)|create_recent|无||在用户对工单数据进行了get或update操作时生成相应的访问记录|
|[获取产品成员](module/ProdMgmt/ticket/logic/get_product_member)|get_product_member|无||获取产品成员信息，用于判断当前用户权限|
|[获取工单状态饼图](module/ProdMgmt/ticket/logic/get_ticket_state_pie)|get_ticket_state_pie|无||需求关联工单统计视图中的饼图进行使用|
|[设置标签](module/ProdMgmt/ticket/logic/choose_tag)|choose_tag|无||设置工单标签，修改工单标签信息|
|[负责人变更附加逻辑](module/ProdMgmt/ticket/logic/assignee_onchange)|assignee_onchange|属性逻辑||工单负责人变更时触发相应的通知消息|

## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `是否已归档(IS_ARCHIVED)` 




<p class="panel-title"><b>操作标识分布</b></p>
<br>
<table>
  <tr>
    <th>操作标识col350</th>
    <th>是col150</th>
    <th>否col150</th>
    <th>备注col600</th>
  </tr>
  <tr>
    <td>删除(DELETE)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>删除(DELETE)<br><a href ="#/der/DER1N_TICKET_PRODUCT_PRODUCT_ID">DER1N_TICKET_PRODUCT_PRODUCT_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>建立(CREATE)<br><a href ="#/der/DER1N_TICKET_PRODUCT_PRODUCT_ID">DER1N_TICKET_PRODUCT_PRODUCT_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>建立(CREATE)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>更新(UPDATE)<br><a href ="#/der/DER1N_TICKET_PRODUCT_PRODUCT_ID">DER1N_TICKET_PRODUCT_PRODUCT_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>更新(UPDATE)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>读取(READ)<br><a href ="#/der/DER1N_TICKET_PRODUCT_PRODUCT_ID">DER1N_TICKET_PRODUCT_PRODUCT_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>读取(READ)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>

</table>


## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|审计|数据审计|[活动(ACTIVITY)](module/Base/activity)||
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProdMgmt/ticket/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProdMgmt/ticket/query/View)|VIEW|否|否 |否 ||
|[高级搜索(advanced_search)](module/ProdMgmt/ticket/query/advanced_search)|advanced_search|否|否 |否 ||
|[已归档(archived)](module/ProdMgmt/ticket/query/archived)|archived|否|否 |否 ||
|[BI反查(bi_detail)](module/ProdMgmt/ticket/query/bi_detail)|bi_detail|否|否 |否 ||
|[BI查询(bi_search)](module/ProdMgmt/ticket/query/bi_search)|bi_search|否|否 |否 ||
|[评论通知负责人(comment_notify_assignee)](module/ProdMgmt/ticket/query/comment_notify_assignee)|comment_notify_assignee|否|否 |否 ||
|[普通工单(common)](module/ProdMgmt/ticket/query/common)|common|否|否 |否 |通用查询，非删除数据|
|[客户未关联工单(customer_notre_ticket)](module/ProdMgmt/ticket/query/customer_notre_ticket)|customer_notre_ticket|否|否 |否 |查询未关联工单的数据；客户关联工单表格调用|
|[客户关联工单(customer_relation_ticket)](module/ProdMgmt/ticket/query/customer_relation_ticket)|customer_relation_ticket|否|否 |否 ||
|[已删除(deleted)](module/ProdMgmt/ticket/query/deleted)|deleted|否|否 |否 ||
|[产品需求关联工单(idea_relation_ticket)](module/ProdMgmt/ticket/query/idea_relation_ticket)|idea_relation_ticket|否|否 |否 |产品关联工单表格调用|
|[我负责的(my_assign)](module/ProdMgmt/ticket/query/my_assign)|my_assign|否|否 |否 |首页我负责的工单表格调用|
|[我关注的工单(my_attention)](module/ProdMgmt/ticket/query/my_attention)|my_attention|否|否 |否 ||
|[我创建的(my_created)](module/ProdMgmt/ticket/query/my_created)|my_created|否|否 |否 ||
|[正常状态(normal)](module/ProdMgmt/ticket/query/normal)|normal|否|否 |否 |非归档，非删除数据|
|[未关联的工单(not_exsists_relation)](module/ProdMgmt/ticket/query/not_exsists_relation)|not_exsists_relation|否|否 |否 ||
|[工单通知负责人(notify_assignee)](module/ProdMgmt/ticket/query/notify_assignee)|notify_assignee|否|否 |否 ||
|[公开(public)](module/ProdMgmt/ticket/query/public)|public|否|否 |否 ||
|[只读用户(reader)](module/ProdMgmt/ticket/query/reader)|reader|否|否 |否 ||
|[最近浏览(recent_ticket)](module/ProdMgmt/ticket/query/recent_ticket)|recent_ticket|否|否 |否 ||
|[当前标签下工单(ticket_re_product_tag)](module/ProdMgmt/ticket/query/ticket_re_product_tag)|ticket_re_product_tag|否|否 |否 |当前标签下工单表格视图调用|
|[工单关联工单(ticket_relation_ticket)](module/ProdMgmt/ticket/query/ticket_relation_ticket)|ticket_relation_ticket|否|否 |否 ||
|[工单统计(ticket_statistics)](module/ProdMgmt/ticket/query/ticket_statistics)|ticket_statistics|否|否 |否 |工单图表使用|
|[工作项关联工单(work_item_relation_ticket)](module/ProdMgmt/ticket/query/work_item_relation_ticket)|work_item_relation_ticket|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProdMgmt/ticket/dataset/Default)|DEFAULT|数据查询|是|||
|[高级搜索(advanced_search)](module/ProdMgmt/ticket/dataset/advanced_search)|advanced_search|数据查询|否|||
|[已归档(archived)](module/ProdMgmt/ticket/dataset/archived)|archived|数据查询|否|||
|[BI反查(bi_detail)](module/ProdMgmt/ticket/dataset/bi_detail)|bi_detail|数据查询|否|||
|[BI查询(bi_search)](module/ProdMgmt/ticket/dataset/bi_search)|bi_search|数据查询|否|||
|[评论通知负责人(comment_notify_assignee)](module/ProdMgmt/ticket/dataset/comment_notify_assignee)|comment_notify_assignee|数据查询|否|||
|[普通工单(common)](module/ProdMgmt/ticket/dataset/common)|common|数据查询|否||通用查询，非删除数据|
|[客户未关联工单(customer_notre_ticket)](module/ProdMgmt/ticket/dataset/customer_notre_ticket)|customer_notre_ticket|数据查询|否||查询未关联工单的数据；客户关联工单表格调用|
|[客户关联工单(customer_relation_ticket)](module/ProdMgmt/ticket/dataset/customer_relation_ticket)|customer_relation_ticket|数据查询|否|||
|[已删除(deleted)](module/ProdMgmt/ticket/dataset/deleted)|deleted|数据查询|否|||
|[产品需求关联工单(idea_relation_ticket)](module/ProdMgmt/ticket/dataset/idea_relation_ticket)|idea_relation_ticket|数据查询|否||产品关联工单表格调用|
|[我负责的(my_assign)](module/ProdMgmt/ticket/dataset/my_assign)|my_assign|数据查询|否||首页我负责的工单表格调用|
|[我负责的工单(my_assignee_count)](module/ProdMgmt/ticket/dataset/my_assignee_count)|my_assignee_count|数据查询|否||首页我负责的工单表格调用|
|[我关注的工单(my_attention)](module/ProdMgmt/ticket/dataset/my_attention)|my_attention|数据查询|否|||
|[我创建的(my_created)](module/ProdMgmt/ticket/dataset/my_created)|my_created|数据查询|否|||
|[正常状态(normal)](module/ProdMgmt/ticket/dataset/normal)|normal|数据查询|否||非归档，非删除数据|
|[未关联的工单(not_exsists_relation)](module/ProdMgmt/ticket/dataset/not_exsists_relation)|not_exsists_relation|数据查询|否|||
|[工单通知负责人(notify_assignee)](module/ProdMgmt/ticket/dataset/notify_assignee)|notify_assignee|数据查询|否|||
|[只读用户(reader)](module/ProdMgmt/ticket/dataset/reader)|reader|数据查询|否|||
|[最近浏览(recent_ticket)](module/ProdMgmt/ticket/dataset/recent_ticket)|recent_ticket|数据查询|否|||
|[当前标签下工单(ticket_re_product_tag)](module/ProdMgmt/ticket/dataset/ticket_re_product_tag)|ticket_re_product_tag|数据查询|否||当前标签下工单表格视图调用|
|[工单关联工单(ticket_relation_ticket)](module/ProdMgmt/ticket/dataset/ticket_relation_ticket)|ticket_relation_ticket|数据查询|否|||
|[工单状态饼图数据(ticket_state_pie_chart)](module/ProdMgmt/ticket/dataset/ticket_state_pie_chart)|ticket_state_pie_chart|数据查询|否||工单状态饼图数据<br>在需求关联工单统计视图中使用|
|[工作项关联工单(work_item_relation_ticket)](module/ProdMgmt/ticket/dataset/work_item_relation_ticket)|work_item_relation_ticket|数据查询|否|||

## 数据权限

##### 操作用户(读) :id=ticket-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/ProdMgmt/ticket#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ(产品(READ))`



##### 操作用户(写) :id=ticket-USER_W

<p class="panel-title"><b>数据范围</b></p>

* `无`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE(产品(SUBDATA))`



## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[工单归档/激活通知](module/ProdMgmt/ticket/notify/archive_notify)|archive_notify|[默认消息队列](index/notify_index)|[工单通知模板(归档/激活工单)](index/notify_index#ticket_archived_or_activate)|负责人 关注人员 ||
|[工单取消分配负责人通知](module/ProdMgmt/ticket/notify/assignee_cancel_notify)|assignee_cancel_notify|[默认消息队列](index/notify_index)|[工单通知模板(取消分配负责人)](index/notify_index#ticket_assignee_cancel)|负责人 ||
|[工单分配负责人通知](module/ProdMgmt/ticket/notify/assignee_notify)|assignee_notify|[默认消息队列](index/notify_index)|[工单通知模板(分配负责人)](index/notify_index#ticket_assignee)|负责人 ||
|[工单负责人变更通知](module/ProdMgmt/ticket/notify/assignee_onchange_notify)|assignee_onchange_notify|[默认消息队列](index/notify_index)|[工单通知模板(负责人变更)](index/notify_index#ticket_assignee_onchange)|负责人 关注人员 ||
|[工单删除/恢复工单通知](module/ProdMgmt/ticket/notify/remove_notify)|remove_notify|[默认消息队列](index/notify_index)|[工单通知模板(删除/恢复工单)](index/notify_index#ticket_remove_or_recover)|负责人 关注人员 ||
|[工单状态变更通知](module/ProdMgmt/ticket/notify/state_onchage_notify)|state_onchage_notify|[默认消息队列](index/notify_index)|[工单通知模板(状态变更)](index/notify_index#ticket_state_onchange)|负责人 关注人员 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ASSIGNEE_ID_EQ|负责人标识|EQ||
|N_ASSIGNEE_ID_IN|负责人标识|IN||
|N_ASSIGNEE_ID_ISNOTNULL|负责人标识|ISNOTNULL||
|N_ASSIGNEE_ID_ISNULL|负责人标识|ISNULL||
|N_ASSIGNEE_ID_NOTEQ|负责人标识|NOTEQ||
|N_ASSIGNEE_ID_NOTIN|负责人标识|NOTIN||
|N_CREATE_MAN_EQ|建立人|EQ||
|N_CREATE_MAN_IN|建立人|IN||
|N_CREATE_MAN_ISNOTNULL|建立人|ISNOTNULL||
|N_CREATE_MAN_ISNULL|建立人|ISNULL||
|N_CREATE_MAN_NOTIN|建立人|NOTIN||
|N_CREATE_TIME_EQ|建立时间|EQ||
|N_CREATE_TIME_GTANDEQ|建立时间|GTANDEQ||
|N_CREATE_TIME_LTANDEQ|建立时间|LTANDEQ||
|N_CUSTOMER_ID_EQ|客户标识|EQ||
|N_CUSTOMER_NAME_EQ|客户|EQ||
|N_CUSTOMER_NAME_LIKE|客户|LIKE||
|N_DESCRIPTION_LIKE|描述|LIKE||
|N_ID_NOTEQ|标识|NOTEQ||
|N_ID_EQ|标识|EQ||
|N_IDENTIFIER_EQ|编号|EQ||
|N_IDENTIFIER_ISNULL|编号|ISNULL||
|N_IDENTIFIER_LIKE|编号|LIKE||
|N_IS_ARCHIVED_EQ|是否已归档|EQ||
|N_IS_DELETED_EQ|是否已删除|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PRIORITY_EQ|优先级|EQ||
|N_PRODUCT_ID_EQ|产品标识|EQ||
|N_PRODUCT_ID_ISNULL|产品标识|ISNULL||
|N_PRODUCT_NAME_EQ|所属产品|EQ||
|N_PRODUCT_NAME_LIKE|所属产品|LIKE||
|N_SHOW_IDENTIFIER_LIKE|编号|LIKE||
|N_SOLUTION_EQ|解决方案|EQ||
|N_STATE_EQ|状态|EQ||
|N_STATE_NOTEQ|状态|NOTEQ||
|N_STATE_NOTIN|状态|NOTIN||
|N_TAGS_LIKE|标签|LIKE||
|N_TITLE_LIKE|标题|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 关联工单（工具栏） | toolbar_link_ticket | 关联工单 |无数据|用户自定义||
| 工单删除 | ticket_delete | 删除 |多项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 关联工作项（工具栏） | toolbar_link_work_item | 关联工作项 |无数据|用户自定义||
| 添加附件 | add_attachments | 添加附件 |无数据|用户自定义||
| 确定 | panel_usr1226376706_button_okaction_click | 确定 |单项数据|用户自定义||
| BI编辑 | bi_report_view | 编辑 |无数据|用户自定义||
| 工单恢复（工具栏） | ticket_recover_toolbar | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)||
| 添加工单（其他实体关联） | others_add_relation_ticket | 添加工单 |无数据|用户自定义||
| 工单统计返回主表单 | back | 返回 |无数据|用户自定义|需求关联工单统计视图返回需求主表单|
| 工单删除（工具栏） | toolbar_ticket_delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 打开BI报表配置表单_工单占比 | open_bi_form_ticket_ratio | 配置 |无数据|<details><summary>打开快捷编辑</summary></details>||
| 激活（工具栏） | toolbar_activate | 激活 |多项数据（主键）|<details><summary>后台调用</summary>[activate](#行为)||
| BI全屏 | bi_full_screen | 全屏 |无数据|用户自定义||
| 设置标签 | choose_tag | 设置标签 |多项数据（主键）|<details><summary>后台调用</summary>[choose_tag](#行为)||
| 工具栏上传附件 | toolbar_update_file | 工具栏上传附件 |无数据|用户自定义||
| BI刷新 | bi_refresh | 刷新 |无数据|用户自定义||
| 工单归档（工具栏） | toolbar_ticket_archive | 归档 |多项数据（主键）|<details><summary>后台调用</summary>[archive](#行为)||
| 新建工单（快速新建） | quick_new_ticket | 新建工单 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建工单](app/view/ticket_quick_create_view)</details>||
| 工单自定义导入 | ticket_custom_import_data | 导入 |无数据|<details><summary>打开数据导入视图</summary>[产品工单导入]()</details>||
| 分配负责人 | allocate_person | 分配负责人 |多项数据（主键）|<details><summary>后台调用</summary>[allocate_person](#行为)||
| 工单恢复 | ticket_recover | 恢复 |多项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)||
| 关联产品需求（工具栏） | toolbar_link_product | 关联产品需求 |无数据|用户自定义||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义||
| 工单归档 | ticket_archive | 归档 |多项数据（主键）|<details><summary>后台调用</summary>[archive](#行为)||
| 激活 | activate | 激活 |多项数据（主键）|<details><summary>后台调用</summary>[activate](#行为)|批操作工具栏上按钮调用；|
| 新建执行后（建立双向关联数据) | after_creat_double_relation | 新建执行后（建立双向关联数据) |单项数据（主键）|用户自定义||
| 显示下拉并展开数据（嵌入视图） | show_dorpdown_data | 显示下拉并展开数据 |无数据|用户自定义||
| 客户取消关联工单 | customer_del_ticket | 取消关联 |单项数据|<details><summary>后台调用</summary>[customer_del_ticket](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[上传附件（工具栏）](module/ProdMgmt/ticket/uilogic/toolbar_add_attachment)|toolbar_add_attachment|工具栏按钮触发上传附件功能|
|[关联产品需求（工具栏）](module/ProdMgmt/ticket/uilogic/toolbar_link_idea)|toolbar_link_idea|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联工作项（工具栏）](module/ProdMgmt/ticket/uilogic/toolbar_link_work_item)|toolbar_link_work_item|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联工单值变更](module/ProdMgmt/ticket/uilogic/relation_ticket_change)|relation_ticket_change|关联工单值变更时，调用处理逻辑，生成正反向关联数据|
|[关联工单（工具栏）](module/ProdMgmt/ticket/uilogic/toolbar_link_ticket)|toolbar_link_ticket|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[刷新工单表格](module/ProdMgmt/ticket/uilogic/refresh_ticket_grid)|refresh_ticket_grid|刷新工单表格|
|[只读隐藏](module/ProdMgmt/ticket/uilogic/readonly_hide)|readonly_hide|工作项只读隐藏|
|[客户添加工单值变更](module/ProdMgmt/ticket/uilogic/customer_add_change)|customer_add_change|客户添加工单值变更，触发工单的客户属性变更|
|[工作项关联工单](module/ProdMgmt/ticket/uilogic/work_item_relation_ticket)|work_item_relation_ticket|值变更时触发，工单关联工单，调用处理逻辑生成正反向数据|
|[工单只读用户判断](module/ProdMgmt/ticket/uilogic/ticket_readonly_recognize)|ticket_readonly_recognize|判断当前用户是否为只读用户，调用后台处理逻辑获取当前产品成员并判断返回|
|[已归档或已删除工单显示隐藏](module/ProdMgmt/ticket/uilogic/archived_or_deleted_visible)|archived_or_deleted_visible|已归档或已删除工单显示隐藏|
|[建立关联数据](module/ProdMgmt/ticket/uilogic/create_relation)|create_relation|新建执行后，建立关联数据|
|[建立双向关联数据](module/ProdMgmt/ticket/uilogic/create_double_relation)|create_double_relation|建立双向关联数据|
|[新建工单并生成关联数据](module/ProdMgmt/ticket/uilogic/create_and_relation)|create_and_relation|新建工单并生成关联数据|
|[显示下拉并展开选项（嵌入视图）](module/ProdMgmt/ticket/uilogic/toolbar_show_dorpdown_data)|toolbar_show_dorpdown_data|显示下拉区域并展开选项（工具栏）|
|[添加附件数据](module/ProdMgmt/ticket/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[获取工单总条数](module/ProdMgmt/ticket/uilogic/get_ticket_total)|get_ticket_total|获取工单的总条数信息|
|[触发计数器刷新](module/ProdMgmt/ticket/uilogic/refresh_counter)|refresh_counter|关联数据变更后，触发计数器刷新|
|[计算表格列行为状态](module/ProdMgmt/ticket/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制归档和激活行为的禁用状态|
|[返回](module/ProdMgmt/ticket/uilogic/back)|back|查看工单统计视图后，返回主表单按钮使用|
|[选择下拉框区域展示](module/ProdMgmt/ticket/uilogic/show_choose_area)|show_choose_area|逻辑控制关联表格下方选项区域动态显示|
|[门户全屏](module/ProdMgmt/ticket/uilogic/full_screen)|full_screen|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户刷新](module/ProdMgmt/ticket/uilogic/portlet_refresh)|portlet_refresh|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户编辑](module/ProdMgmt/ticket/uilogic/edit_to_design)|edit_to_design|所有门户部件配置该逻辑触发跳转至编辑页|
|[需求关联工单](module/ProdMgmt/ticket/uilogic/idea_relation_ticket)|idea_relation_ticket|值变更时触发，需求关联工单，调用处理逻辑生成正反向数据|

## 导入模式

* **产品工单导入**


用于追踪和管理产品相关的客户请求和问题解决过程。


<el-descriptions direction="vertical" :column="9" :size="size" border>
<el-descriptions-item label="标题">-</el-descriptions-item>
<el-descriptions-item label="类型">-</el-descriptions-item>
<el-descriptions-item label="状态">-</el-descriptions-item>
<el-descriptions-item label="负责人">-</el-descriptions-item>
<el-descriptions-item label="描述">-</el-descriptions-item>
<el-descriptions-item label="优先级">-</el-descriptions-item>
<el-descriptions-item label="解决方案">-</el-descriptions-item>
<el-descriptions-item label="标签">-</el-descriptions-item>
<el-descriptions-item label="关注人">-</el-descriptions-item>
</el-descriptions>

## 导出模式

* **数据导出**


用于追踪和管理产品相关的客户请求和问题解决过程。


<el-descriptions direction="vertical" :column="16" :size="size" border>
<el-descriptions-item label="编号">-</el-descriptions-item>
<el-descriptions-item label="标题">-</el-descriptions-item>
<el-descriptions-item label="状态">-</el-descriptions-item>
<el-descriptions-item label="类型">-</el-descriptions-item>
<el-descriptions-item label="负责人">-</el-descriptions-item>
<el-descriptions-item label="客户">-</el-descriptions-item>
<el-descriptions-item label="渠道">-</el-descriptions-item>
<el-descriptions-item label="负责人标识">-</el-descriptions-item>
<el-descriptions-item label="提交人标识">-</el-descriptions-item>
<el-descriptions-item label="预计时间">-</el-descriptions-item>
<el-descriptions-item label="提交人">-</el-descriptions-item>
<el-descriptions-item label="提交时间">-</el-descriptions-item>
<el-descriptions-item label="更新人">-</el-descriptions-item>
<el-descriptions-item label="更新时间">-</el-descriptions-item>
<el-descriptions-item label="建立人">-</el-descriptions-item>
<el-descriptions-item label="建立时间">-</el-descriptions-item>
</el-descriptions>

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProdMgmt/ticket?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/ticket?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/ticket?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/ticket?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/ticket?id=主状态控制`">
  主状态控制
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/ticket?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/ticket?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/ticket?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/ticket?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/ticket?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/ticket?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/ticket?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/ticket?id=界面逻辑`">
  界面逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/ticket?id=导入模式`">
  导入模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/ticket?id=导出模式`">
  导出模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'major',
show_field_group:'field_group_advanced_search',

      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>