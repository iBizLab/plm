# 需求(Idea)  <!-- {docsify-ignore-all} -->

产品需求

## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|编号|IDENTIFIER|文本，可指定长度|100|[编号范围](module/ProdMgmt/Idea/value_rule/Identifier#defvaluerule)<br>[默认规则](module/ProdMgmt/Idea/value_rule/Identifier#default)|[需求编号](index/sequence_index#seq_idea_id)|√||
|标题|TITLE|文本，可指定长度|500|[默认规则](module/ProdMgmt/Idea/value_rule/Title#default)||√||
|状态|STATE|[单项选择(文本值)](index/dictionary_index#Idea_state "需求状态")|60|[默认规则](module/ProdMgmt/Idea/value_rule/State#default)||||
|优先级|PRIORITY|[单项选择(文本值)](index/dictionary_index#Idea_priority "需求优先级")|60|[默认规则](module/ProdMgmt/Idea/value_rule/Priority#default)||||
|模块|SUITE|文本，可指定长度|100|[默认规则](module/ProdMgmt/Idea/value_rule/Suite#default)||||
|计划时间|PLAN_AT|文本，可指定长度|100|[默认规则](module/ProdMgmt/Idea/value_rule/Plan_at#default)||||
|计划开始时间|PLAN_AT_FROM|日期时间型|0|||||
|计划结束时间|PLAN_AT_TO|日期时间型|0|||||
|计划时间周期单位|PLAN_AT_GRANULARITY|单项选择(文本值)|60|[默认规则](module/ProdMgmt/Idea/value_rule/Plan_at_granularity#default)||||
|实际时间|REAL_AT|文本，可指定长度|100|[默认规则](module/ProdMgmt/Idea/value_rule/Real_at#default)||||
|实际开始时间|REAL_AT_FROM|日期时间型|0|||||
|实际结束时间|REAL_AT_TO|日期时间型|0|||||
|计划时间周期单位|REAL_AT_GRANULARITY|单项选择(文本值)|60|[默认规则](module/ProdMgmt/Idea/value_rule/Real_at_granularity#default)||||
|进度|PROGRESS|数值|0|||||
|描述|DESCRIPTION|长文本，没有长度限制|1048576|[默认规则](module/ProdMgmt/Idea/value_rule/Description#default)||||
|是否已归档|IS_ARCHIVED|是否逻辑|0|||||
|是否已删除|IS_DELETED|是否逻辑|0|||||
|产品标识|PRODUCT_IDENTIFIER|外键值附加数据|15|[默认规则](module/ProdMgmt/Idea/value_rule/Product_identifier#default)||||
|负责人|ASSIGNEE_NAME|外键值文本|100|[默认规则](module/ProdMgmt/Idea/value_rule/Assignee_name#default)||||
|负责人标识|ASSIGNEE_ID|外键值|100|[默认规则](module/ProdMgmt/Idea/value_rule/Assignee_id#default)||||
|子产品名称|SECTION_NAME|外键值附加数据|200|[默认规则](module/ProdMgmt/Idea/value_rule/Section_name#default)||||
|附件|ATTACHMENTS|一对多关系数据集合|1048576|[默认规则](module/ProdMgmt/Idea/value_rule/Attachments#default)||||
|子产品标识|SECTION_ID|外键值附加数据|100|[默认规则](module/ProdMgmt/Idea/value_rule/Section_id#default)||||
|关注|ATTENTIONS|一对多关系数据集合|1048576|[默认规则](module/ProdMgmt/Idea/value_rule/Attentions#default)||||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|[默认规则](module/ProdMgmt/Idea/value_rule/Show_identifier#default)||||
|类别路径|CATEGORIES|外键值附加数据|2000|[默认规则](module/ProdMgmt/Idea/value_rule/Categories#default)||||
|工时进度|WORKLOAD_SCHEDULE|数值|0|||||
|预估工时|ESTIMATED_WORKLOAD|数值|0|||||
|剩余工时|REMAINING_WORKLOAD|数值|0|||||
|实际工时|ACTUAL_WORKLOAD|数值|0|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProdMgmt/Idea/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Idea/value_rule/Create_man#default)||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Idea/value_rule/Update_man#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/ProdMgmt/Idea/value_rule/Name#default)||||
|产品标识|PRODUCT_ID|外键值|100|[默认规则](module/ProdMgmt/Idea/value_rule/Product_id#default)||||
|所属产品|PRODUCT_NAME|外键值文本|200|[默认规则](module/ProdMgmt/Idea/value_rule/Product_name#default)||||
|类别标识|CATEGORY_ID|外键值|100|[默认规则](module/ProdMgmt/Idea/value_rule/Category_id#default)||||
|名称|CATEGORY_NAME|外键值文本|200|[默认规则](module/ProdMgmt/Idea/value_rule/Category_name#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_ATTENTION_IDEA_OWNER_ID](der/DERCUSTOM_ATTENTION_IDEA_OWNER_ID)|[关注(ATTENTION)](module/Base/Attention)|自定义关系||
|[DERCUSTOM_COMMENT_IDEA_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_IDEA_PRINCIPAL_ID)|[评论(COMMENT)](module/Base/Comment)|自定义关系||
|[DERCUSTOM_IDEA_ATTACHMENT](der/DERCUSTOM_IDEA_ATTACHMENT)|[附件(ATTACHMENT)](module/Base/Attachment)|自定义关系||
|[DERCUSTOM_RELATION_IDEA](der/DERCUSTOM_RELATION_IDEA)|[关联(RELATION)](module/Base/Relation)|自定义关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_IDEA_CATEGORY_CATEGORY_ID](der/DER1N_IDEA_CATEGORY_CATEGORY_ID)|[类别(CATEGORY)](module/Base/Category)|1:N关系||
|[DER1N_IDEA_PRODUCT_PRODUCT_ID](der/DER1N_IDEA_PRODUCT_PRODUCT_ID)|[产品(PRODUCT)](module/ProdMgmt/Product)|1:N关系||
|[DER1N_IDEA_USER_ASSIGNEE_ID](der/DER1N_IDEA_USER_ASSIGNEE_ID)|[企业用户(USER)](module/Base/User)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#Idea_Create)|||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#Idea_Update)|||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#Idea_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|激活|Activate|[实体处理逻辑](module/ProdMgmt/Idea/logic/activate "激活")|默认|不支持||||
|归档|Archive|[实体处理逻辑](module/ProdMgmt/Idea/logic/archive "归档")|默认|不支持||||
|变更需求状态|Change_state|[实体处理逻辑](module/ProdMgmt/Idea/logic/change_state "变更需求状态")|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|取消关联|Del_relation|[实体处理逻辑](module/ProdMgmt/Idea/logic/del_relation "取消关联")|默认|不支持||||
|删除|Delete|[实体处理逻辑](module/ProdMgmt/Idea/logic/delete "删除")|默认|不支持||||
|获取关注人|Get_attention|内置方法|默认|不支持||||
|获取默认模块|Idea_category|[实体处理逻辑](module/ProdMgmt/Idea/logic/idea_category "获取默认模块")|默认|不支持||||
|需求复制|Idea_copy|[实体处理逻辑](module/ProdMgmt/Idea/logic/idea_copy "需求复制")|默认|不支持||||
|需求移动|Idea_move|[实体处理逻辑](module/ProdMgmt/Idea/logic/idea_move "需求移动")|默认|不支持||||
|需求排期|Idea_re_plan|[实体处理逻辑](module/ProdMgmt/Idea/logic/idea_re_plan "需求排期")|默认|不支持||||
|无操作|Nothing|[实体处理逻辑](module/ProdMgmt/Idea/logic/nothing "无操作")|默认|不支持||||
|其他实体关联需求|Others_relation_idea|[实体处理逻辑](module/ProdMgmt/Idea/logic/others_relation_idea "其他实体关联需求")|默认|不支持||||
|计划内批删除|Plan_delete_idea|[实体处理逻辑](module/ProdMgmt/Idea/logic/plan_delete_idea "计划内需求批删除")|默认|不支持||||
|产品获取模块|Product_get_category|[实体处理逻辑](module/ProdMgmt/Idea/logic/product_get_category "产品获取所属模块")|默认|不支持||||
|产品需求关联分页计数器|Product_idea_re_counters|[实体处理逻辑](module/ProdMgmt/Idea/logic/product_idea_re_counters "产品需求关联分页计数器")|默认|不支持||||
|恢复|Recover|[实体处理逻辑](module/ProdMgmt/Idea/logic/recover "恢复")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[激活](module/ProdMgmt/Idea/logic/activate)|activate|无|||
|[归档](module/ProdMgmt/Idea/logic/archive)|archive|无|||
|[负责人变更附加逻辑](module/ProdMgmt/Idea/logic/assignee_onchange)|assignee_onchange|属性逻辑|||
|[变更需求状态](module/ProdMgmt/Idea/logic/change_state)|change_state|无|||
|[生成最近访问](module/ProdMgmt/Idea/logic/create_recent)|create_recent|无|||
|[取消关联](module/ProdMgmt/Idea/logic/del_relation)|del_relation|无|||
|[删除](module/ProdMgmt/Idea/logic/delete)|delete|无|||
|[获取默认模块](module/ProdMgmt/Idea/logic/idea_category)|idea_category|无|||
|[需求复制](module/ProdMgmt/Idea/logic/idea_copy)|idea_copy|无|||
|[需求移动](module/ProdMgmt/Idea/logic/idea_move)|idea_move|无|||
|[需求排期](module/ProdMgmt/Idea/logic/idea_re_plan)|idea_re_plan|无|||
|[需求模块获取子产品](module/ProdMgmt/Idea/logic/idea_re_section)|idea_re_section|无|||
|[是否归档变更附加逻辑](module/ProdMgmt/Idea/logic/is_archived_onchange)|is_archived_onchange|属性逻辑|||
|[是否删除变更附加逻辑](module/ProdMgmt/Idea/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑|||
|[无操作](module/ProdMgmt/Idea/logic/nothing)|nothing|无|||
|[其他实体关联需求](module/ProdMgmt/Idea/logic/others_relation_idea)|others_relation_idea|无|||
|[计划内需求批删除](module/ProdMgmt/Idea/logic/plan_delete_idea)|plan_delete_idea|无|||
|[产品获取所属模块](module/ProdMgmt/Idea/logic/product_get_category)|product_get_category|无|||
|[产品需求关联分页计数器](module/ProdMgmt/Idea/logic/product_idea_re_counters)|product_idea_re_counters|无||计算分页下关联事项的条数|
|[恢复](module/ProdMgmt/Idea/logic/recover)|recover|无|||
|[状态变更附加逻辑](module/ProdMgmt/Idea/logic/state_onchange)|state_onchange|属性逻辑|||


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
    <td>建立(CREATE)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>建立(CREATE)<br><a href ="/#/der/DER1N_IDEA_PRODUCT_PRODUCT_ID">DER1N_IDEA_PRODUCT_PRODUCT_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>删除(DELETE)<br><a href ="/#/der/DER1N_IDEA_PRODUCT_PRODUCT_ID">DER1N_IDEA_PRODUCT_PRODUCT_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>删除(DELETE)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>读取(READ)<br><a href ="/#/der/DER1N_IDEA_PRODUCT_PRODUCT_ID">DER1N_IDEA_PRODUCT_PRODUCT_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>读取(READ)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>更新(UPDATE)<br><a href ="/#/der/DER1N_IDEA_PRODUCT_PRODUCT_ID">DER1N_IDEA_PRODUCT_PRODUCT_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>更新(UPDATE)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>

</table>




## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[已归档(archived)](module/ProdMgmt/Idea/query/Archived)|archived|否|否 |否 ||
|[评论通知负责人(comment_notify_assignee)](module/ProdMgmt/Idea/query/Comment_notify_assignee)|comment_notify_assignee|否|否 |否 ||
|[通用需求查询(common)](module/ProdMgmt/Idea/query/Common)|common|否|否 |否 |状态非删除，如果上下文传递了类别参数，显示该类别下数据|
|[数据查询(DEFAULT)](module/ProdMgmt/Idea/query/Default)|DEFAULT|是|否 |否 ||
|[已删除(deleted)](module/ProdMgmt/Idea/query/Deleted)|deleted|否|否 |否 ||
|[产品需求关联需求(idea_relation_idea)](module/ProdMgmt/Idea/query/Idea_relation_idea)|idea_relation_idea|否|否 |否 |需求关联需求表格调用|
|[我负责的产品需求(my_assign)](module/ProdMgmt/Idea/query/My_assign)|my_assign|否|否 |否 |非归档数据，且负责人为当前登录人的数据|
|[我关注的需求(my_attention)](module/ProdMgmt/Idea/query/My_attention)|my_attention|否|否 |否 ||
|[我创建的(my_created)](module/ProdMgmt/Idea/query/My_created)|my_created|否|否 |否 |首页我创建的需求表格调用|
|[正常状态(normal)](module/ProdMgmt/Idea/query/Normal)|normal|否|否 |否 |状态非删除，如果上下文传递了子产品参数，查询当前子产品下的需求|
|[未关联的需求(not_exsists_relation)](module/ProdMgmt/Idea/query/Not_exsists_relation)|not_exsists_relation|否|否 |否 |多项选择视图中右侧表格的数据来源；查询了未与当前主体关联的数据。|
|[计划关联需求(plan_relation_idea)](module/ProdMgmt/Idea/query/Plan_relation_idea)|plan_relation_idea|否|否 |否 |计划关联需求表格调用|
|[最近浏览(recent_idea)](module/ProdMgmt/Idea/query/Recent_idea)|recent_idea|否|否 |否 |最近浏览的且未关联当前主体且非归档非删除的数据|
|[测试用例关联需求(test_case_relation)](module/ProdMgmt/Idea/query/Test_case_relation)|test_case_relation|否|否 |否 |测试用例关联需求表格调用；|
|[工单关联需求(ticket_relation_idea)](module/ProdMgmt/Idea/query/Ticket_relation_idea)|ticket_relation_idea|否|否 |否 |工单关联需求表格调用|
|[默认（全部数据）(VIEW)](module/ProdMgmt/Idea/query/View)|VIEW|否|否 |否 ||
|[工作项关联需求(work_item_relation_idea)](module/ProdMgmt/Idea/query/Work_item_relation_idea)|work_item_relation_idea|否|否 |否 |工作项关联需求表格调用|


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[已归档(archived)](module/ProdMgmt/Idea/dataset/Archived)|archived|数据查询|否|||
|[评论通知负责人(comment_notify_assignee)](module/ProdMgmt/Idea/dataset/Comment_notify_assignee)|comment_notify_assignee|数据查询|否|||
|[普通工需求(common)](module/ProdMgmt/Idea/dataset/Common)|common|数据查询|否|||
|[数据集(DEFAULT)](module/ProdMgmt/Idea/dataset/Default)|DEFAULT|数据查询|是|||
|[已删除(deleted)](module/ProdMgmt/Idea/dataset/Deleted)|deleted|数据查询|否|||
|[产品需求关联需求(idea_relation_idea)](module/ProdMgmt/Idea/dataset/Idea_relation_idea)|idea_relation_idea|数据查询|否|||
|[我负责的产品需求(my_assign)](module/ProdMgmt/Idea/dataset/My_assign)|my_assign|数据查询|否|||
|[我负责的需求(my_assignee_count)](module/ProdMgmt/Idea/dataset/My_assignee_count)|my_assignee_count|数据查询|否|||
|[我关注的需求(my_attention)](module/ProdMgmt/Idea/dataset/My_attention)|my_attention|数据查询|否|||
|[我创建的(my_created)](module/ProdMgmt/Idea/dataset/My_created)|my_created|数据查询|否|||
|[正常状态(normal)](module/ProdMgmt/Idea/dataset/Normal)|normal|数据查询|否|||
|[未关联的需求(not_exsists_relation)](module/ProdMgmt/Idea/dataset/Not_exsists_relation)|not_exsists_relation|数据查询|否|||
|[计划关联需求(plan_relation_idea)](module/ProdMgmt/Idea/dataset/Plan_relation_idea)|plan_relation_idea|数据查询|否|||
|[最近浏览(recent_idea)](module/ProdMgmt/Idea/dataset/Recent_idea)|recent_idea|数据查询|否|||
|[测试用例关联(test_case_relation)](module/ProdMgmt/Idea/dataset/Test_case_relation)|test_case_relation|数据查询|否|||
|[工单关联需求(ticket_relation_idea)](module/ProdMgmt/Idea/dataset/Ticket_relation_idea)|ticket_relation_idea|数据查询|否|||
|[工作项关联需求(work_item_relation_idea)](module/ProdMgmt/Idea/dataset/Work_item_relation_idea)|work_item_relation_idea|数据查询|否|||


## 数据权限

##### 操作用户(写) :id=Idea-USER_W

<p class="panel-title"><b>数据范围</b></p>


<p class="panel-title"><b>数据能力</b></p>

* `CREATE(产品(SUBDATA))`




## 消息通知

|    名称   | 代码名       |  消息队列   |  消息模板 |  通知目标     |  备注  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[归档/激活通知](module/ProdMgmt/Idea/notify/archive_notify)|archive_notify|[默认消息队列](index/notify_index)|[需求通知模板(归档/激活需求)](index/notify_index#idea_archive)|关注人员 负责人 ||
|[取消分配负责人通知](module/ProdMgmt/Idea/notify/assignee_cancel_notify)|assignee_cancel_notify|[默认消息队列](index/notify_index)|[需求通知模板(取消分配负责人)](index/notify_index#idea_assignee_cancel)|负责人 ||
|[分配负责人通知](module/ProdMgmt/Idea/notify/assignee_notify)|assignee_notify|[默认消息队列](index/notify_index)|[需求通知模板(分配负责人)](index/notify_index#idea_assignee)|负责人 ||
|[负责人变更通知](module/ProdMgmt/Idea/notify/assignee_onchange_notify)|assignee_onchange_notify|[默认消息队列](index/notify_index)|[需求通知模板(负责人变更通知)](index/notify_index#idea_assignee_onchange)|关注人员 ||
|[删除/恢复工单通知](module/ProdMgmt/Idea/notify/remove_notify)|remove_notify|[默认消息队列](index/notify_index)|[需求通知模板(删除/恢复需求)](index/notify_index#idea_remove)|负责人 关注人员 ||
|[状态变更通知](module/ProdMgmt/Idea/notify/state_onchage_notify)|state_onchage_notify|[默认消息队列](index/notify_index)|[需求通知模板(状态变更)](index/notify_index#idea_state_onchange)|关注人员 负责人 ||


## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_IDENTIFIER_LIKE|编号|LIKE|
|N_TITLE_LIKE|标题|LIKE|
|N_STATE_EQ|状态|EQ|
|N_STATE_NOTIN|状态|NOTIN|
|N_PRIORITY_EQ|优先级|EQ|
|N_SUITE_EQ|模块|EQ|
|N_PLAN_AT_GRANULARITY_EQ|计划时间周期单位|EQ|
|N_REAL_AT_GRANULARITY_EQ|计划时间周期单位|EQ|
|N_IS_ARCHIVED_EQ|是否已归档|EQ|
|N_IS_DELETED_EQ|是否已删除|EQ|
|N_ASSIGNEE_ID_EQ|负责人标识|EQ|
|N_SECTION_ID_EQ|子产品标识|EQ|
|N_SHOW_IDENTIFIER_LIKE|编号|LIKE|
|N_ID_NOTEQ|标识|NOTEQ|
|N_ID_EQ|标识|EQ|
|N_CREATE_MAN_EQ|建立人|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_PRODUCT_ID_EQ|产品标识|EQ|
|N_PRODUCT_NAME_EQ|所属产品|EQ|
|N_PRODUCT_NAME_LIKE|所属产品|LIKE|
|N_CATEGORY_ID_EQ|类别标识|EQ|
|N_CATEGORY_NAME_EQ|名称|EQ|
|N_CATEGORY_NAME_LIKE|名称|LIKE|


## 导入模式
* 产品需求导入

|标题|状态|负责人|描述|优先级|
| :------: | :------: | :------: | :------: | :------: |
| - | - | - | - | - |



## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 删除 | toolbar_tree_exp_viewnode_2_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 取消关联（其他实体关联） | del_relation | 取消关联 |单项数据（主键）|<details><summary>后台调用</summary>[Del_relation](#行为)|是|引用视图或树节点||
| 添加附件 | add_attachments | 添加附件 |无数据|用户自定义|否|无||
| 需求移动 | idea_move | 需求移动 |多项数据（主键）|<details><summary>后台调用</summary>[Idea_move](#行为)|是|引用视图或树节点||
| 添加实际工时 | add_actual_workload | 添加实际工时 |无数据|<details><summary>打开视图或向导（模态）</summary>[登记工时](app/view/workloadquick_create_view_idea)</details>|否|引用视图或树节点||
| 删除 | delete | 删除 |多项数据（主键）|<details><summary>后台调用</summary>[Delete](#行为)|是|引用视图或树节点||
| 需求排期 | idea_re_plan | 需求排期 |多项数据（主键）|<details><summary>后台调用</summary>[Idea_re_plan](#行为)|是|引用视图或树节点||
| 删除 | toolbar_tree_exp_viewnode_1_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||
| 新建模块 | toolbar_tree_exp_viewtreeexpbar_toolbar_deuiaction2_click | 新建模块 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_4_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||
| 变更需求状态 | change_idea_state | 变更需求状态 |多项数据（主键）|<details><summary>后台调用</summary>[Change_state](#行为)|是|引用视图或树节点||
| 取消关联（计划批操作） | del_relation_more | 取消关联 |多项数据（主键）|<details><summary>后台调用</summary>[Plan_delete_idea](#行为)|是|引用视图或树节点||
| 新添加需求（需求） | new_relation_idea | 添加需求 |无数据|用户自定义|否|无||
| 添加需求（其他实体关联） | others_add_relation_idea | 添加需求 |无数据|用户自定义|否|无||
| 添加需求（排期） | product_plan_add_relation_idea | 添加需求 |无数据|<details><summary>后台调用</summary>[Others_relation_idea](#行为)|是|引用视图或树节点||
| 恢复 | recover | 恢复 |多项数据（主键）|<details><summary>后台调用</summary>[Recover](#行为)|是|引用视图或树节点||
| 删除 | toolbar_tree_exp_viewnode_3_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 需求归档 | idea_archive | 需求归档 |多项数据（主键）|<details><summary>后台调用</summary>[Archive](#行为)|是|引用视图或树节点||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义|否|无||
| 删除 | toolbar_tree_exp_viewnode_4_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||
| 需求复制 | idea_copy | 需求复制 |多项数据（主键）|<details><summary>后台调用</summary>[Idea_copy](#行为)|是|引用视图或树节点||
| 激活 | activate | 激活 |多项数据（主键）|<details><summary>后台调用</summary>[Activate](#行为)|是|引用视图或树节点||
| 新建子产品 | toolbar_tree_exp_viewtreeexpbar_toolbar_deuiaction1_click | 新建子产品 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[新建模块](module/ProdMgmt/Idea/uilogic/create_category)|create_category|
|[新建子产品](module/ProdMgmt/Idea/uilogic/create_section)|create_section|
|[删除类别或分组](module/ProdMgmt/Idea/uilogic/remove_section_or_category)|remove_section_or_category|
|[添加附件数据](module/ProdMgmt/Idea/uilogic/add_attachment)|add_attachment|
|[编辑类别或分组](module/ProdMgmt/Idea/uilogic/edit_section_or_category)|edit_section_or_category|
|[关联需求值变更](module/ProdMgmt/Idea/uilogic/relation_idea_change)|relation_idea_change|
|[x](module/ProdMgmt/Idea/uilogic/x)|x|
|[获取需求总条数](module/ProdMgmt/Idea/uilogic/get_idea_total)|get_idea_total|
|[触发计数器刷新](module/ProdMgmt/Idea/uilogic/refresh_counter)|refresh_counter|
|[选择下拉框区域展示](module/ProdMgmt/Idea/uilogic/show_choose_area)|show_choose_area|
