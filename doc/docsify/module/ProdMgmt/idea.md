# 需求(idea)  <!-- {docsify-ignore-all} -->


记录产品开发过程中的用户需求。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|实际工时|ACTUAL_WORKLOAD|数值||是||
|负责人|ASSIGNEE_ID|外键值|100|是||
|负责人|ASSIGNEE_NAME|外键值文本|100|是||
|附件|ATTACHMENTS|一对多关系数据集合|1048576|是||
|关注|ATTENTIONS|一对多关系数据集合|1048576|是||
|关注人|ATTENTIONS_IMP|文本，可指定长度|100|是||
|类别路径|CATEGORIES|外键值附加数据|2000|是||
|类别标识|CATEGORY_ID|外键值|100|是||
|名称|CATEGORY_NAME|外键值文本|200|是||
|选择版本标识|CHOOSE_VERSION_ID|文本，可指定长度|100|是||
|选择版本名称|CHOOSE_VERSION_NAME|文本，可指定长度|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|当前版本标识|CUR_VERSION_ID|文本，可指定长度|100|是||
|当前版本名称|CUR_VERSION_NAME|文本，可指定长度|100|是||
|描述|DESCRIPTION|长文本，没有长度限制|1048576|是||
|预估工时|ESTIMATED_WORKLOAD|数值||是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|需求来源|IDEA_FROM|[单项选择(文本值)](index/dictionary_index#demand_sources "需求来源")|60|是||
|需求类型|IDEA_TYPE|[单项选择(文本值)](index/dictionary_index#requirement_type "需求类型")|60|是||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_idea_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|是否已删除|IS_DELETED|是否逻辑||是||
|名称|NAME|文本，可指定长度|200|是||
|计划时间|PLAN_AT|文本，可指定长度|100|是||
|计划开始时间|PLAN_AT_FROM|日期时间型||是||
|计划时间周期单位|PLAN_AT_GRANULARITY|单项选择(文本值)|60|是||
|计划结束时间|PLAN_AT_TO|日期时间型||是||
|优先级|PRIORITY|[单项选择(文本值)](index/dictionary_index#idea_priority "需求优先级")|60|是||
|产品|PRODUCT_ID|外键值|100|否||
|产品标识|PRODUCT_IDENTIFIER|外键值附加数据|15|是||
|所属产品|PRODUCT_NAME|外键值文本|200|是||
|进度|PROGRESS|数值||是||
|实际时间|REAL_AT|文本，可指定长度|100|是||
|实际开始时间|REAL_AT_FROM|日期时间型||是||
|计划时间周期单位|REAL_AT_GRANULARITY|单项选择(文本值)|60|是||
|实际结束时间|REAL_AT_TO|日期时间型||是||
|关联客户数|RELATION_TOTAL_CUSTOMER|数值||是||
|关联产品需求数|RELATION_TOTAL_IDEA|数值||是||
|关联测试用例数|RELATION_TOTAL_TEST_CASE|数值||是||
|关联工单数|RELATION_TOTAL_TICKET|数值||是||
|关联工作项数|RELATION_TOTAL_WORK_ITEM|数值||是||
|剩余工时|REMAINING_WORKLOAD|数值||是||
|子产品标识|SECTION_ID|外键值附加数据|100|是||
|子产品名称|SECTION_NAME|外键值附加数据|200|是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|状态|STATE|单项选择(文本值)|60|否||
|模块|SUITE|文本，可指定长度|100|是||
|标题|TITLE|文本，可指定长度|500|否||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|工时进度|WORKLOAD_SCHEDULE|数值||是||


###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="属性组" name="field_group_DEFGroup">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|名称|NAME|文本，可指定长度|200|是||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_idea_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|描述|DESCRIPTION|长文本，没有长度限制|1048576|是||

</el-tab-pane>
<el-tab-pane label="高级搜索" name="field_group_advanced_search">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|标题|TITLE|文本，可指定长度|500|否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_idea_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|产品|PRODUCT_ID|外键值|100|否||
|所属产品|PRODUCT_NAME|外键值文本|200|是||
|状态|STATE|单项选择(文本值)|60|否||

</el-tab-pane>
<el-tab-pane label="负责人" name="field_group_assignee">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|负责人|ASSIGNEE_ID|外键值|100|是||
|负责人|ASSIGNEE_NAME|外键值文本|100|是||

</el-tab-pane>
<el-tab-pane label="BI查询属性组" name="field_group_bi_search_group">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|是否已删除|IS_DELETED|是否逻辑||是||
|实际开始时间|REAL_AT_FROM|日期时间型||是||
|实际结束时间|REAL_AT_TO|日期时间型||是||
|更新时间|UPDATE_TIME|日期时间型||否||
|计划结束时间|PLAN_AT_TO|日期时间型||是||
|建立时间|CREATE_TIME|日期时间型||否||
|计划开始时间|PLAN_AT_FROM|日期时间型||是||
|名称|NAME|文本，可指定长度|200|是||
|计划时间|PLAN_AT|文本，可指定长度|100|是||
|实际时间|REAL_AT|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|关注人|ATTENTIONS_IMP|文本，可指定长度|100|是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_idea_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|当前版本名称|CUR_VERSION_NAME|文本，可指定长度|100|是||
|选择版本标识|CHOOSE_VERSION_ID|文本，可指定长度|100|是||
|标题|TITLE|文本，可指定长度|500|否||
|模块|SUITE|文本，可指定长度|100|是||
|剩余工时|REMAINING_WORKLOAD|数值||是||
|关联产品需求数|RELATION_TOTAL_IDEA|数值||是||
|实际工时|ACTUAL_WORKLOAD|数值||是||
|关联工单数|RELATION_TOTAL_TICKET|数值||是||
|关联客户数|RELATION_TOTAL_CUSTOMER|数值||是||
|关联测试用例数|RELATION_TOTAL_TEST_CASE|数值||是||
|预估工时|ESTIMATED_WORKLOAD|数值||是||
|工时进度|WORKLOAD_SCHEDULE|数值||是||
|进度|PROGRESS|数值||是||
|关联工作项数|RELATION_TOTAL_WORK_ITEM|数值||是||
|所属产品|PRODUCT_NAME|外键值文本|200|是||
|负责人|ASSIGNEE_NAME|外键值文本|100|是||
|名称|CATEGORY_NAME|外键值文本|200|是||
|产品|PRODUCT_ID|外键值|100|否||
|负责人|ASSIGNEE_ID|外键值|100|是||
|类别标识|CATEGORY_ID|外键值|100|是||
|需求来源|IDEA_FROM|[单项选择(文本值)](index/dictionary_index#demand_sources "需求来源")|60|是||
|状态|STATE|单项选择(文本值)|60|否||
|优先级|PRIORITY|[单项选择(文本值)](index/dictionary_index#idea_priority "需求优先级")|60|是||
|需求类型|IDEA_TYPE|[单项选择(文本值)](index/dictionary_index#requirement_type "需求类型")|60|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|子产品名称|SECTION_NAME|外键值附加数据|200|是||
|子产品标识|SECTION_ID|外键值附加数据|100|是||

</el-tab-pane>
<el-tab-pane label="工时日历" name="field_group_workload_calendar">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|产品|PRODUCT_ID|外键值|100|否||
|实际工时|ACTUAL_WORKLOAD|数值||是||
|标题|TITLE|文本，可指定长度|500|否||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_ATTENTION_IDEA_OWNER_ID](der/DERCUSTOM_ATTENTION_IDEA_OWNER_ID)|[关注(ATTENTION)](module/Base/attention)|自定义关系||
|[DERCUSTOM_COMMENT_IDEA_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_IDEA_PRINCIPAL_ID)|[评论(COMMENT)](module/Base/comment)|自定义关系||
|[DERCUSTOM_IDEA_ATTACHMENT](der/DERCUSTOM_IDEA_ATTACHMENT)|[附件(ATTACHMENT)](module/Base/attachment)|自定义关系||
|[DERCUSTOM_IDEA_SEARCH_ATTACHMENT](der/DERCUSTOM_IDEA_SEARCH_ATTACHMENT)|[附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment)|自定义关系||
|[DERCUSTOM_IDEA_SEARCH_COMMENT](der/DERCUSTOM_IDEA_SEARCH_COMMENT)|[评论搜索(SEARCH_COMMENT)](module/Base/search_comment)|自定义关系||
|[DERCUSTOM_IDEA_WORKLOAD](der/DERCUSTOM_IDEA_WORKLOAD)|[工时(WORKLOAD)](module/Base/workload)|自定义关系||
|[DERCUSTOM_RELATION_IDEA](der/DERCUSTOM_RELATION_IDEA)|[关联(RELATION)](module/Base/relation)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_IDEA](der/DERCUSTOM_RELATION_TARGET_IDEA)|[关联(RELATION)](module/Base/relation)|自定义关系||
|[DERCUSTOM_VERSION_IDEA](der/DERCUSTOM_VERSION_IDEA)|[版本(VERSION)](module/Base/version)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_IDEA_CATEGORY_CATEGORY_ID](der/DER1N_IDEA_CATEGORY_CATEGORY_ID)|[类别(CATEGORY)](module/Base/category)|1:N关系||
|[DER1N_IDEA_PRODUCT_PRODUCT_ID](der/DER1N_IDEA_PRODUCT_PRODUCT_ID)|[产品(PRODUCT)](module/ProdMgmt/product)|1:N关系||
|[DER1N_IDEA_USER_ASSIGNEE_ID](der/DER1N_IDEA_USER_ASSIGNEE_ID)|[企业用户(USER)](module/Base/user)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#idea_Create)|||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#idea_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#idea_Update)|||
|激活|activate|[实体处理逻辑](module/ProdMgmt/idea/logic/activate "激活")|默认|不支持||||
|归档|archive|[实体处理逻辑](module/ProdMgmt/idea/logic/archive "归档")|默认|不支持||||
|变更需求状态|change_state|[实体处理逻辑](module/ProdMgmt/idea/logic/change_state "变更需求状态")|默认|不支持||||
|选择需求模板|choose_case_template|[实体处理逻辑](module/ProdMgmt/idea/logic/choose_case_template "选择需求模板")|默认|不支持||||
|删除|delete|[实体处理逻辑](module/ProdMgmt/idea/logic/delete "删除")|默认|不支持||||
|获取关注人|get_attention|内置方法|默认|不支持||||
|获取基线名称|get_baseline_name|[实体处理逻辑](module/ProdMgmt/idea/logic/get_baseline_name "获取基线名称")|默认|不支持||||
|获取客户分数|get_customer_score|[实体处理逻辑](module/ProdMgmt/idea/logic/get_customer_score "获取客户分数")|默认|不支持|||获取客户分数数据|
|获取工单数量|get_ticket_num|[实体处理逻辑](module/ProdMgmt/idea/logic/get_ticket_num "获取工单数量")|默认|不支持||||
|获取默认模块|idea_category|[实体处理逻辑](module/ProdMgmt/idea/logic/idea_category "获取默认模块")|默认|不支持||||
|需求复制|idea_copy|[实体处理逻辑](module/ProdMgmt/idea/logic/idea_copy "需求复制")|默认|不支持||||
|需求移动|idea_move|[实体处理逻辑](module/ProdMgmt/idea/logic/idea_move "需求移动")|默认|不支持||||
|需求排期|idea_re_plan|[实体处理逻辑](module/ProdMgmt/idea/logic/idea_re_plan "需求排期")|默认|不支持||||
|需求只读用户判断|idea_readonly_recognize|[实体处理逻辑](module/ProdMgmt/idea/logic/get_product_member "获取产品成员")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/ProdMgmt/idea/logic/nothing "无操作")|默认|不支持||||
|其他实体关联需求|others_relation_idea|[实体处理逻辑](module/ProdMgmt/idea/logic/others_relation_idea "其他实体关联需求")|默认|不支持||||
|计划内批删除|plan_delete_idea|[实体处理逻辑](module/ProdMgmt/idea/logic/plan_delete_idea "计划内需求批删除")|默认|不支持||||
|产品需求关联分页计数器|product_idea_re_counters|[实体处理逻辑](module/ProdMgmt/idea/logic/product_idea_re_counters "产品需求关联分页计数器")|默认|不支持||||
|恢复|recover|[实体处理逻辑](module/ProdMgmt/idea/logic/recover "恢复")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[产品需求关联分页计数器](module/ProdMgmt/idea/logic/product_idea_re_counters)|product_idea_re_counters|无||计算分页下关联事项的条数|
|[其他实体关联需求](module/ProdMgmt/idea/logic/others_relation_idea)|others_relation_idea|无||需求实体的关联操作，生成正向，反向关联数据|
|[删除](module/ProdMgmt/idea/logic/delete)|delete|无||需求数据的逻辑删除，修改需求的是否删除属性值|
|[变更需求状态](module/ProdMgmt/idea/logic/change_state)|change_state|无||产品需求状态变更触发相关通知|
|[基线规划需求数据查询](module/ProdMgmt/idea/logic/baseline_plan_idea)|baseline_plan_idea|无||基线规划需求时，填充需求当前版本名称|
|[归档](module/ProdMgmt/idea/logic/archive)|archive|无||未归档需求数据的归档处理，修改需求的归档状态为归档|
|[恢复](module/ProdMgmt/idea/logic/recover)|recover|无||已删除状态需求数据的恢复，修改需求的是否删除属性值，并恢复访问记录|
|[无操作](module/ProdMgmt/idea/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[是否删除变更附加逻辑](module/ProdMgmt/idea/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||产品需求删除或恢复时触发相应的通知消息|
|[是否归档变更附加逻辑](module/ProdMgmt/idea/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||产品需求归档或激活数据时触发相应的通知消息|
|[激活](module/ProdMgmt/idea/logic/activate)|activate|无||激活已归档状态需求，修改需求的归档属性|
|[状态变更附加逻辑](module/ProdMgmt/idea/logic/state_onchange)|state_onchange|属性逻辑||需求数据状态变更时触发相应的通知消息，同时生成流转记录|
|[生成最近访问](module/ProdMgmt/idea/logic/create_recent)|create_recent|无||在用户对需求数据进行了get或update操作时生成相应的访问记录|
|[获取产品成员](module/ProdMgmt/idea/logic/get_product_member)|get_product_member|无||获取产品成员信息，用于判断当前用户权限|
|[获取基线名称](module/ProdMgmt/idea/logic/get_baseline_name)|get_baseline_name|无||需求主视图获取所属基线|
|[获取客户分数](module/ProdMgmt/idea/logic/get_customer_score)|get_customer_score|无||获取客户分数数据|
|[获取工单数量](module/ProdMgmt/idea/logic/get_ticket_num)|get_ticket_num|无||获取工单数量数据|
|[获取默认模块](module/ProdMgmt/idea/logic/idea_category)|idea_category|无||获取需求的默认模块|
|[计划内需求批删除](module/ProdMgmt/idea/logic/plan_delete_idea)|plan_delete_idea|无||排期（计划）内取消关联需求，删除正反向关联数据|
|[负责人变更附加逻辑](module/ProdMgmt/idea/logic/assignee_onchange)|assignee_onchange|属性逻辑||产品需求负责人变更时触发相应的通知消息|
|[选择需求模板](module/ProdMgmt/idea/logic/choose_case_template)|choose_case_template|无||获取选中模板并返回详情|
|[需求复制](module/ProdMgmt/idea/logic/idea_copy)|idea_copy|无||复制需求至其他产品（复制需求信息，在目标产品中创建新需求）|
|[需求排期](module/ProdMgmt/idea/logic/idea_re_plan)|idea_re_plan|无||需求排期，用户在排期内关联相应需求，生成正反向关联关系|
|[需求移动](module/ProdMgmt/idea/logic/idea_move)|idea_move|无||移动需求至其他位置（修改需求的所属产品，重新生成编号）|

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
    <td>删除(DELETE)<br><a href ="#/der/DER1N_IDEA_PRODUCT_PRODUCT_ID">DER1N_IDEA_PRODUCT_PRODUCT_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>删除(DELETE)</td>
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
    <td>建立(CREATE)<br><a href ="#/der/DER1N_IDEA_PRODUCT_PRODUCT_ID">DER1N_IDEA_PRODUCT_PRODUCT_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>更新(UPDATE)<br><a href ="#/der/DER1N_IDEA_PRODUCT_PRODUCT_ID">DER1N_IDEA_PRODUCT_PRODUCT_ID</a></td>
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
    <td>读取(READ)<br><a href ="#/der/DER1N_IDEA_PRODUCT_PRODUCT_ID">DER1N_IDEA_PRODUCT_PRODUCT_ID</a></td>
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
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||
|审计|数据审计|[活动(ACTIVITY)](module/Base/activity)||
|version|版本控制|[版本(VERSION)](module/Base/version)||
|存储扩展|动态存储|[扩展存储(EXTEND_STORAGE)](module/Base/extend_storage)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProdMgmt/idea/query/Default)|DEFAULT|是|否 |否 |默认普通数据查询|
|[默认（全部数据）(VIEW)](module/ProdMgmt/idea/query/View)|VIEW|否|否 |否 |默认查询；全部数据|
|[高级搜索(advanced_search)](module/ProdMgmt/idea/query/advanced_search)|advanced_search|否|否 |否 |指定属性组；查询未删除的需求数据|
|[已归档(archived)](module/ProdMgmt/idea/query/archived)|archived|否|否 |否 |查询已归档且未删除的需求数据|
|[基线选择需求(baseline_choose_idea)](module/ProdMgmt/idea/query/baseline_choose_idea)|baseline_choose_idea|否|否 |否 |基线选择需求|
|[BI反查(bi_detail)](module/ProdMgmt/idea/query/bi_detail)|bi_detail|否|否 |否 ||
|[BI查询(bi_search)](module/ProdMgmt/idea/query/bi_search)|bi_search|否|否 |否 ||
|[评论通知负责人(comment_notify_assignee)](module/ProdMgmt/idea/query/comment_notify_assignee)|comment_notify_assignee|否|否 |否 |查询指定属性组；评论负责人|
|[通用需求查询(common)](module/ProdMgmt/idea/query/common)|common|否|否 |否 |状态非删除，如果上下文传递了类别参数，显示该类别下数据|
|[已删除(deleted)](module/ProdMgmt/idea/query/deleted)|deleted|否|否 |否 |查询已删除的需求数据|
|[我负责的产品需求(my_assign)](module/ProdMgmt/idea/query/my_assign)|my_assign|否|否 |否 |非归档数据，且负责人为当前登录人的数据|
|[我关注的需求(my_attention)](module/ProdMgmt/idea/query/my_attention)|my_attention|否|否 |否 |查询我关注的需求（未归档、未删除）|
|[我创建的(my_created)](module/ProdMgmt/idea/query/my_created)|my_created|否|否 |否 |首页我创建的需求表格调用|
|[正常状态(normal)](module/ProdMgmt/idea/query/normal)|normal|否|否 |否 |状态非删除，如果上下文传递了子产品参数，查询当前子产品下的需求|
|[未关联的需求(not_exsists_relation)](module/ProdMgmt/idea/query/not_exsists_relation)|not_exsists_relation|否|否 |否 |多项选择视图中右侧表格的数据来源；查询了未与当前主体关联的数据。|
|[需求通知负责人(notify_assignee)](module/ProdMgmt/idea/query/notify_assignee)|notify_assignee|否|否 |否 |查询指定属性组（负责人相关）|
|[计划关联需求(plan_relation_idea)](module/ProdMgmt/idea/query/plan_relation_idea)|plan_relation_idea|否|否 |否 |计划关联需求表格调用|
|[公开(public)](module/ProdMgmt/idea/query/public)|public|否|否 |否 ||
|[只读用户(reader)](module/ProdMgmt/idea/query/reader)|reader|否|否 |否 ||
|[最近浏览(recent_idea)](module/ProdMgmt/idea/query/recent_idea)|recent_idea|否|否 |否 |最近浏览的且未关联当前主体且非归档非删除的数据|

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProdMgmt/idea/dataset/Default)|DEFAULT|数据查询|是||默认普通数据查询|
|[高级搜索(advanced_search)](module/ProdMgmt/idea/dataset/advanced_search)|advanced_search|数据查询|否||指定属性组；查询未删除的需求数据|
|[已归档(archived)](module/ProdMgmt/idea/dataset/archived)|archived|数据查询|否||查询已归档且未删除的需求数据|
|[基线选择需求(baseline_choose_idea)](module/ProdMgmt/idea/dataset/baseline_choose_idea)|baseline_choose_idea|数据查询|否||基线选择需求|
|[基线规划需求数据查询(baseline_plan_idea)](module/ProdMgmt/idea/dataset/baseline_plan_idea)|baseline_plan_idea|[实体逻辑](module/ProdMgmt/idea/logic/baseline_plan_idea)|否|||
|[BI反查(bi_detail)](module/ProdMgmt/idea/dataset/bi_detail)|bi_detail|数据查询|否|||
|[BI查询(bi_search)](module/ProdMgmt/idea/dataset/bi_search)|bi_search|数据查询|否|||
|[评论通知负责人(comment_notify_assignee)](module/ProdMgmt/idea/dataset/comment_notify_assignee)|comment_notify_assignee|数据查询|否||查询指定属性组；评论负责人|
|[普通需求(common)](module/ProdMgmt/idea/dataset/common)|common|数据查询|否||状态非删除，如果上下文传递了类别参数，显示该类别下数据|
|[已删除(deleted)](module/ProdMgmt/idea/dataset/deleted)|deleted|数据查询|否||查询已删除的需求数据|
|[我负责的产品需求(my_assign)](module/ProdMgmt/idea/dataset/my_assign)|my_assign|数据查询|否||非归档数据，且负责人为当前登录人的数据|
|[我负责的需求(my_assignee_count)](module/ProdMgmt/idea/dataset/my_assignee_count)|my_assignee_count|数据查询|否||非归档数据，且负责人为当前登录人的数据|
|[我关注的需求(my_attention)](module/ProdMgmt/idea/dataset/my_attention)|my_attention|数据查询|否||查询我关注的需求（未归档、未删除）|
|[我创建的(my_created)](module/ProdMgmt/idea/dataset/my_created)|my_created|数据查询|否||首页我创建的需求表格调用|
|[正常状态(normal)](module/ProdMgmt/idea/dataset/normal)|normal|数据查询|否||状态非删除，如果上下文传递了子产品参数，查询当前子产品下的需求|
|[未关联的需求(not_exsists_relation)](module/ProdMgmt/idea/dataset/not_exsists_relation)|not_exsists_relation|数据查询|否||多项选择视图中右侧表格的数据来源；查询了未与当前主体关联的数据。|
|[需求通知负责人(notify_assignee)](module/ProdMgmt/idea/dataset/notify_assignee)|notify_assignee|数据查询|否||查询指定属性组（负责人相关）|
|[计划关联需求(plan_relation_idea)](module/ProdMgmt/idea/dataset/plan_relation_idea)|plan_relation_idea|数据查询|否||计划关联需求表格调用|
|[只读用户(reader)](module/ProdMgmt/idea/dataset/reader)|reader|数据查询|否|||
|[最近浏览(recent_idea)](module/ProdMgmt/idea/dataset/recent_idea)|recent_idea|数据查询|否||最近浏览的且未关联当前主体且非归档非删除的数据|

## 数据权限

##### 操作用户(读) :id=idea-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/ProdMgmt/idea#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 操作用户(写) :id=idea-USER_W

<p class="panel-title"><b>数据范围</b></p>

* `无`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE(产品(SUBDATA))`



## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[产品需求归档/激活通知](module/ProdMgmt/idea/notify/archive_notify)|archive_notify|[默认消息队列](index/notify_index)|[需求通知模板(归档/激活需求)](index/notify_index#idea_archived_or_activate)|负责人 关注人员 ||
|[产品需求取消分配负责人通知](module/ProdMgmt/idea/notify/assignee_cancel_notify)|assignee_cancel_notify|[默认消息队列](index/notify_index)|[需求通知模板(取消分配负责人)](index/notify_index#idea_assignee_cancel)|负责人 ||
|[产品需求分配负责人通知](module/ProdMgmt/idea/notify/assignee_notify)|assignee_notify|[默认消息队列](index/notify_index)|[需求通知模板(分配负责人)](index/notify_index#idea_assignee)|负责人 ||
|[产品需求负责人变更通知](module/ProdMgmt/idea/notify/assignee_onchange_notify)|assignee_onchange_notify|[默认消息队列](index/notify_index)|[需求通知模板(负责人变更通知)](index/notify_index#idea_assignee_onchange)|关注人员 ||
|[产品需求删除/恢复通知](module/ProdMgmt/idea/notify/remove_notify)|remove_notify|[默认消息队列](index/notify_index)|[需求通知模板(删除/恢复需求)](index/notify_index#idea_remove_or_recover)|负责人 关注人员 ||
|[产品需求状态变更通知](module/ProdMgmt/idea/notify/state_onchage_notify)|state_onchage_notify|[默认消息队列](index/notify_index)|[需求通知模板(状态变更)](index/notify_index#idea_state_onchange)|负责人 关注人员 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ASSIGNEE_ID_EQ|负责人|EQ||
|N_ASSIGNEE_ID_IN|负责人|IN||
|N_ASSIGNEE_ID_ISNOTNULL|负责人|ISNOTNULL||
|N_ASSIGNEE_ID_ISNULL|负责人|ISNULL||
|N_ASSIGNEE_ID_NOTEQ|负责人|NOTEQ||
|N_ASSIGNEE_ID_NOTIN|负责人|NOTIN||
|N_ASSIGNEE_NAME_EQ|负责人|EQ||
|N_ASSIGNEE_NAME_LIKE|负责人|LIKE||
|N_CATEGORIES_LIKE|类别路径|LIKE||
|N_CATEGORY_ID_EQ|类别标识|EQ||
|N_CATEGORY_NAME_EQ|名称|EQ||
|N_CATEGORY_NAME_LIKE|名称|LIKE||
|N_CREATE_MAN_EQ|建立人|EQ||
|N_CREATE_MAN_IN|建立人|IN||
|N_CREATE_MAN_ISNOTNULL|建立人|ISNOTNULL||
|N_CREATE_MAN_ISNULL|建立人|ISNULL||
|N_CREATE_MAN_NOTEQ|建立人|NOTEQ||
|N_CREATE_MAN_NOTIN|建立人|NOTIN||
|N_CREATE_TIME_EQ|建立时间|EQ||
|N_CREATE_TIME_GTANDEQ|建立时间|GTANDEQ||
|N_CREATE_TIME_LTANDEQ|建立时间|LTANDEQ||
|N_DESCRIPTION_LIKE|描述|LIKE||
|N_ID_IN|标识|IN||
|N_ID_NOTEQ|标识|NOTEQ||
|N_ID_EQ|标识|EQ||
|N_IDEA_FROM_EQ|需求来源|EQ||
|N_IDEA_TYPE_EQ|需求类型|EQ||
|N_IDENTIFIER_EQ|编号|EQ||
|N_IDENTIFIER_ISNULL|编号|ISNULL||
|N_IDENTIFIER_LIKE|编号|LIKE||
|N_IS_ARCHIVED_EQ|是否已归档|EQ||
|N_IS_DELETED_EQ|是否已删除|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PLAN_AT_GRANULARITY_EQ|计划时间周期单位|EQ||
|N_PRIORITY_EQ|优先级|EQ||
|N_PRODUCT_ID_EQ|产品|EQ||
|N_PRODUCT_ID_ISNULL|产品|ISNULL||
|N_PRODUCT_NAME_EQ|所属产品|EQ||
|N_PRODUCT_NAME_LIKE|所属产品|LIKE||
|N_REAL_AT_GRANULARITY_EQ|计划时间周期单位|EQ||
|N_SECTION_ID_EQ|子产品标识|EQ||
|N_SHOW_IDENTIFIER_LIKE|编号|LIKE||
|N_STATE_EQ|状态|EQ||
|N_STATE_NOTIN|状态|NOTIN||
|N_SUITE_EQ|模块|EQ||
|N_TITLE_LIKE|标题|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 编辑 | toolbar_tree_exp_view_node4_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| BI编辑 | bi_report_view | 编辑 |无数据|用户自定义||
| 新建需求（快速新建） | quick_new_idea | 新建需求 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建需求](app/view/idea_quick_create_view)</details>||
| 激活（工具栏） | toolbar_activate | 激活 |单项数据（主键）|<details><summary>后台调用</summary>[activate](#行为)|工具栏上按钮调用；|
| 打开BI报表配置表单_需求占比 | open_bi_form_idea_ratio | 配置 |无数据|<details><summary>打开快捷编辑</summary></details>||
| 新建子模块 | toolbar_tree_exp_view_node2_cm_deuiaction3_click | 新建子模块 |单项数据|用户自定义||
| 关闭 | toolbar_show_edit_view_toolbar_deuiaction3_click | 关闭 |单项数据|用户自定义||
| BI刷新 | bi_refresh | 刷新 |无数据|用户自定义||
| 需求排期 | idea_re_plan | 需求排期 |多项数据（主键）|<details><summary>后台调用</summary>[idea_re_plan](#行为)|批操作工具栏上按钮调用|
| 删除（工具栏） | toolbar_delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)|工具栏上按钮调用|
| 变更需求状态 | change_idea_state | 变更需求状态 |多项数据（主键）|<details><summary>后台调用</summary>[change_state](#行为)|批操作工具栏上按钮调用|
| 查看工时明细 | check_workload_detail | 查看工时明细 |无数据|用户自定义||
| 新建子模块 | toolbar_tree_exp_view_node3_cm_deuiaction3_click | 新建子模块 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node4_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 需求归档（工具栏） | toolbar_idea_archive | 需求归档 |单项数据（主键）|<details><summary>后台调用</summary>[archive](#行为)|主视图工具栏上按钮调用|
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义||
| 查看客户统计信息 | check_customer_info | 查看客户信息 |无数据|用户自定义||
| 激活 | activate | 激活 |多项数据（主键）|<details><summary>后台调用</summary>[activate](#行为)|批操作工具栏上按钮调用；|
| 编辑 | toolbar_tree_exp_view_node2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 打开需求编辑页 | open_idea_edit_view | 编辑 |单项数据|<details><summary>打开视图或向导（模态）</summary>[编辑需求](app/view/idea_update_view)</details>||
| 删除 | toolbar_tree_exp_view_node1_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 恢复（工具栏） | recover_toolbar | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)|已删除需求详情页恢复按钮调用；恢复已删除的需求|
| 关联工单（工具栏） | toolbar_link_ticket | 关联工单 |无数据|用户自定义||
| 关联工作项（工具栏） | toolbar_link_work_item | 关联工作项 |无数据|用户自定义||
| 添加附件 | add_attachments | 添加附件 |无数据|用户自定义||
| 需求移动 | idea_move | 需求移动 |多项数据（主键）|<details><summary>后台调用</summary>[idea_move](#行为)|批操作工具栏上按钮调用|
| 添加实际工时 | add_actual_workload | 添加实际工时 |无数据|<details><summary>打开视图或向导（模态）</summary>[登记工时](app/view/workload_quick_create_view)</details>||
| 删除 | toolbar_tree_exp_view_node3_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 删除 | delete | 删除 |多项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)|批操作工具栏上按钮调用|
| BI全屏 | bi_full_screen | 全屏 |无数据|用户自定义||
| 新建子模块 | toolbar_tree_exp_view_node4_cm_deuiaction3_click | 新建子模块 |单项数据|用户自定义||
| 需求自定义导入 | custom_import_data | 需求导入 |无数据|<details><summary>打开数据导入视图</summary>[产品需求导入]()</details>||
| 工具栏上传附件 | toolbar_update_file | 工具栏上传附件 |无数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 关联测试用例（工具栏） | toolbar_link_test_case | 关联测试用例 |无数据|用户自定义||
| 新建子产品 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction1_click | 新建子产品 |单项数据|用户自定义||
| 取消关联（计划批操作） | del_relation_more | 取消关联 |多项数据（主键）|<details><summary>后台调用</summary>[plan_delete_idea](#行为)|批操作工具栏上按钮调用|
| 编辑 | toolbar_tree_exp_view_node3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 恢复 | recover | 恢复 |多项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)|回收站批操作按钮调用；恢复已删除的需求|
| 新建子模块 | toolbar_tree_exp_view_node1_cm_deuiaction3_click | 新建子模块 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node2_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 需求归档 | idea_archive | 需求归档 |多项数据（主键）|<details><summary>后台调用</summary>[archive](#行为)|批操作工具栏上按钮调用|
| 选择模板 | choose_case_template | 选择模板 |无数据|<details><summary>打开编辑表单</summary></details>||
| 新建模块 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction2_click | 新建模块 |单项数据|用户自定义||
| 需求复制 | idea_copy | 需求复制 |多项数据（主键）|<details><summary>后台调用</summary>[idea_copy](#行为)|批操作工具栏上按钮调用|
| 需求移动（工具栏） | idea_move_toolbar | 需求移动 |多项数据（主键）|<details><summary>后台调用</summary>[idea_move](#行为)|批操作工具栏上按钮调用|
| 评论 | toolbar_show_edit_view_toolbar_deuiaction2_click | 评论 |单项数据|用户自定义||
| 显示下拉并展开数据（嵌入视图） | toolbar_show_dorpdown_data | 显示下拉并展开数据 |无数据|用户自定义||
| 关联需求（工具栏） | toolbar_link_idea | 关联需求 |无数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[上传附件（工具栏）](module/ProdMgmt/idea/uilogic/toolbar_add_attachment)|toolbar_add_attachment|工具栏按钮触发上传附件功能|
|[关联产品需求（工具栏）](module/ProdMgmt/idea/uilogic/toolbar_link_idea)|toolbar_link_idea|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联工作项（工具栏）](module/ProdMgmt/idea/uilogic/toolbar_link_work_item)|toolbar_link_work_item|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联工单（工具栏）](module/ProdMgmt/idea/uilogic/toolbar_link_ticket)|toolbar_link_ticket|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联测试用例（工具栏）](module/ProdMgmt/idea/uilogic/toolbar_link_test_case)|toolbar_link_test_case|主视图工具栏上点击触发，切换分页，打开下拉菜单|
|[关联需求值变更](module/ProdMgmt/idea/uilogic/relation_idea_change)|relation_idea_change|关联操作时触发，内部调用关联逻辑进行关联操作|
|[关闭评论区](module/ProdMgmt/idea/uilogic/close_comment)|close_comment|隐藏评论区，同时显示评论按钮|
|[删除类别或分组](module/ProdMgmt/idea/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[刷新需求表格](module/ProdMgmt/idea/uilogic/refresh_idea_grid)|refresh_idea_grid|刷新需求表格|
|[工作项关联需求](module/ProdMgmt/idea/uilogic/work_item_relation_idea)|work_item_relation_idea|值变更时触发，工作项关联需求，调用处理逻辑生成正反向数据|
|[工单关联需求](module/ProdMgmt/idea/uilogic/ticket_relation_idea)|ticket_relation_idea|值变更时触发，工单关联需求，调用处理逻辑生成正反向数据|
|[已归档或已删除需求显示隐藏](module/ProdMgmt/idea/uilogic/archived_or_deleted_visible)|archived_or_deleted_visible|已归档或已删除需求显示隐藏|
|[新建子产品](module/ProdMgmt/idea/uilogic/create_section)|create_section|产品需求页左侧树的新建子产品逻辑|
|[新建子模块](module/ProdMgmt/idea/uilogic/create_children_category)|create_children_category|调用树节点新建方法，新建子模块|
|[新建模块](module/ProdMgmt/idea/uilogic/create_category)|create_category|产品需求页左侧树的新建模块逻辑|
|[显示下拉并展开选项（嵌入视图）](module/ProdMgmt/idea/uilogic/toolbar_show_dorpdown_data)|toolbar_show_dorpdown_data|显示下拉区域并展开选项(工具栏)|
|[显示表单侧边栏](module/ProdMgmt/idea/uilogic/show_form_sidebar)|show_form_sidebar|每次需求主表单刷新时，将右侧侧边栏默认显示出来。|
|[显示评论区](module/ProdMgmt/idea/uilogic/show_commnet)|show_commnet|打开评论区，同时隐藏评论按钮|
|[查看客户统计信息](module/ProdMgmt/idea/uilogic/check_customer_info)|check_customer_info|按钮触发，通过脚本切换显示组件|
|[查看工单统计信息](module/ProdMgmt/idea/uilogic/check_ticket_info)|check_ticket_info|按钮触发，通过脚本切换显示组件|
|[查看工时明细](module/ProdMgmt/idea/uilogic/check_workload_detail)|check_workload_detail|按钮触发，通过脚本切换显示组件|
|[添加附件数据](module/ProdMgmt/idea/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[用例关联需求](module/ProdMgmt/idea/uilogic/test_case_relation_idea)|test_case_relation_idea|值变更时触发，用例关联需求，调用处理逻辑生成正反向数据|
|[编辑类别或分组](module/ProdMgmt/idea/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|
|[获取客户分数](module/ProdMgmt/idea/uilogic/get_customer_score)|get_customer_score|获取客户分数|
|[获取工单数量](module/ProdMgmt/idea/uilogic/get_ticket_num)|get_ticket_num|获取工单数量|
|[获取表格总条数](module/ProdMgmt/idea/uilogic/get_grid_total)|get_grid_total|获取表格的总条数信息|
|[获取需求工时进度](module/ProdMgmt/idea/uilogic/get_workload_schedule)|get_workload_schedule|获取工时信息，并计算工时进度|
|[触发计数器刷新](module/ProdMgmt/idea/uilogic/refresh_counter)|refresh_counter|关联数据变更后，触发计数器刷新|
|[计算表格列行为状态(idea)](module/ProdMgmt/idea/uilogic/calc_column_action_state)|calc_column_action_state|动态识别readonly|
|[选择下拉框区域展示](module/ProdMgmt/idea/uilogic/show_choose_area)|show_choose_area|逻辑控制关联表格下方选项区域动态显示|
|[选择需求模板](module/ProdMgmt/idea/uilogic/choose_case_template)|choose_case_template|选择需求模板后回填所选模板数据至表单|
|[门户全屏](module/ProdMgmt/idea/uilogic/full_screen)|full_screen|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户刷新](module/ProdMgmt/idea/uilogic/portlet_refresh)|portlet_refresh|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户编辑](module/ProdMgmt/idea/uilogic/edit_to_design)|edit_to_design|所有门户部件配置该逻辑触发跳转至编辑页|
|[需求关联需求](module/ProdMgmt/idea/uilogic/idea_relation_idea)|idea_relation_idea|值变更时触发，需求关联需求，调用处理逻辑生成正反向数据|

## 导入模式

* **产品需求导入**


记录产品开发过程中的用户需求。


<el-descriptions direction="vertical" :column="9" :size="size" border>
<el-descriptions-item label="标题">-</el-descriptions-item>
<el-descriptions-item label="状态">-</el-descriptions-item>
<el-descriptions-item label="负责人">-</el-descriptions-item>
<el-descriptions-item label="描述">-</el-descriptions-item>
<el-descriptions-item label="优先级">-</el-descriptions-item>
<el-descriptions-item label="需求来源">-</el-descriptions-item>
<el-descriptions-item label="需求类型">-</el-descriptions-item>
<el-descriptions-item label="关注人">-</el-descriptions-item>
<el-descriptions-item label="模块">-</el-descriptions-item>
</el-descriptions>

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProdMgmt/idea?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea?id=主状态控制`">
  主状态控制
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea?id=界面逻辑`">
  界面逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea?id=导入模式`">
  导入模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'major',
show_field_group:'field_group_DEFGroup',

      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>