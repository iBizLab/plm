# 测试计划(Test_plan)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|状态|STATUS|[单项选择(文本值)](index/dictionary_index#Test_plan_status "测试计划状态")|60|[默认规则](module/TestMgmt/Test_plan/value_rule/Status#default)||||
|测试分类|TYPE|[单项选择(文本值)](index/dictionary_index#Test_plan_type "测试分类")|60|[默认规则](module/TestMgmt/Test_plan/value_rule/Type#default)||||
|计划开始|START_AT|日期型|0|||||
|计划结束|END_AT|日期型|0|||||
|测试报告概要|SUMMARY|长文本，长度1000|2000|[默认规则](module/TestMgmt/Test_plan/value_rule/Summary#default)||||
|类别|CATEGORIES|长文本，长度1000|2000|[默认规则](module/TestMgmt/Test_plan/value_rule/Categories#default)||||
|关联缺陷|WORK_ITEM_RELATIONS|一对多关系数据集合|1048576|[默认规则](module/TestMgmt/Test_plan/value_rule/Work_item_relations#default)||||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|[默认规则](module/TestMgmt/Test_plan/value_rule/Assignee_name#default)||||
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|[默认规则](module/TestMgmt/Test_plan/value_rule/Assignee_id#default)||||
|项目类型|PROJECT_TYPE|[外键值附加数据](index/dictionary_index#Project_type "项目类型")|60|[默认规则](module/TestMgmt/Test_plan/value_rule/Project_type#default)||||
|测试库名称|LIBRARY_IDENTIFIER|外键值附加数据|15|[默认规则](module/TestMgmt/Test_plan/value_rule/Library_identifier#default)||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Test_plan/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|计划名称|NAME|文本，可指定长度|200|[默认规则](module/TestMgmt/Test_plan/value_rule/Name#default)||√||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/TestMgmt/Test_plan/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Test_plan/value_rule/Create_man#default)||||
|测试库标识|LIBRARY_ID|外键值|100|[默认规则](module/TestMgmt/Test_plan/value_rule/Library_id#default)||||
|关联项目|PROJECT_ID|外键值|100|[默认规则](module/TestMgmt/Test_plan/value_rule/Project_id#default)||||
|关联发布|VERSION_ID|外键值|100|[默认规则](module/TestMgmt/Test_plan/value_rule/Version_id#default)||||
|关联迭代|SPRINT_ID|外键值|100|[默认规则](module/TestMgmt/Test_plan/value_rule/Sprint_id#default)||||
|关联项目|PROJECT_NAME|外键值文本|200|[默认规则](module/TestMgmt/Test_plan/value_rule/Project_name#default)||||
|关联发布|VERSION_NAME|外键值文本|200|[默认规则](module/TestMgmt/Test_plan/value_rule/Version_name#default)||||
|关联迭代|SPRINT_NAME|外键值文本|200|[默认规则](module/TestMgmt/Test_plan/value_rule/Sprint_name#default)||||
|所属测试库|LIBRARY_NAME|外键值文本|200|[默认规则](module/TestMgmt/Test_plan/value_rule/Library_name#default)||||
|项目发布标识|RELEASE_ID|外键值|100|[默认规则](module/TestMgmt/Test_plan/value_rule/Release_id#default)||||
|名称|RELEASE_NAME|外键值文本|200|[默认规则](module/TestMgmt/Test_plan/value_rule/Release_name#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_RUN_TEST_PLAN_PLAN_ID](der/DER1N_RUN_TEST_PLAN_PLAN_ID)|[执行用例(RUN)](module/TestMgmt/Run)|1:N关系||
|[DERCUSTOM_RELATION_TEST_PLAN](der/DERCUSTOM_RELATION_TEST_PLAN)|[关联(RELATION)](module/Base/Relation)|自定义关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID](der/DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID)|[测试库(LIBRARY)](module/TestMgmt/Library)|1:N关系||
|[DER1N_TEST_PLAN_PROJECT_PROJECT_ID](der/DER1N_TEST_PLAN_PROJECT_PROJECT_ID)|[项目(PROJECT)](module/ProjMgmt/Project)|1:N关系||
|[DER1N_TEST_PLAN_RELEASE_RELEASE_ID](der/DER1N_TEST_PLAN_RELEASE_RELEASE_ID)|[项目发布(RELEASE)](module/ProjMgmt/Release)|1:N关系||
|[DER1N_TEST_PLAN_SPRINT_SPRINT_ID](der/DER1N_TEST_PLAN_SPRINT_SPRINT_ID)|[迭代(SPRINT)](module/ProjMgmt/Sprint)|1:N关系||
|[DER1N_TEST_PLAN_VERSION_VERSION_ID](der/DER1N_TEST_PLAN_VERSION_VERSION_ID)|[版本（temp）(VERSION)](module/ProjMgmt/Version)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|结束测试|End_test_plan|[实体处理逻辑](module/TestMgmt/Test_plan/logic/end_test_plan "结束测试")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||
|开始测试|Start_test_plan|[实体处理逻辑](module/TestMgmt/Test_plan/logic/start_test_plan "开始测试")|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[负责人变更附加逻辑](module/TestMgmt/Test_plan/logic/assignee_onchange)|assignee_onchange|属性逻辑|||
|[结束测试](module/TestMgmt/Test_plan/logic/end_test_plan)|end_test_plan|无|||
|[开始测试](module/TestMgmt/Test_plan/logic/start_test_plan)|start_test_plan|无|||


## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `状态(STATUS)` [测试计划状态](index/dictionary_index#Test_plan_status "测试计划状态")




<p class="panel-title"><b>操作标识分布</b></p>
<br>
<table>
  <tr>
    <th rowspan="1">操作标识</th>
<th colspan="1">未开始</th>
<th colspan="1">进行中</th>
<th colspan="1">已完成</th>
  </tr>
  <tr>
    <td>completed(COMPLETED)</td>
<td align="center"></td><td align="center"><i class="fa fa-check"></i></td><td align="center"></td>  </tr>
  <tr>
    <td>建立(CREATE)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>建立(CREATE)<br><a href ="/#/der/DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID">DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>删除(DELETE)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>删除(DELETE)<br><a href ="/#/der/DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID">DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>in_progress(IN_PROGRESS)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"></td><td align="center"></td>  </tr>
  <tr>
    <td>读取(READ)<br><a href ="/#/der/DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID">DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>读取(READ)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>更新(UPDATE)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>更新(UPDATE)<br><a href ="/#/der/DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID">DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>

</table>




## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/TestMgmt/Test_plan/query/Default)|DEFAULT|是|否 |否 ||
|[我负责的(my_assignee)](module/TestMgmt/Test_plan/query/My_assignee)|my_assignee|否|否 |否 ||
|[我的进行中的(my_in_progress)](module/TestMgmt/Test_plan/query/My_in_progress)|my_in_progress|否|否 |否 ||
|[我参与的(my_participate)](module/TestMgmt/Test_plan/query/My_participate)|my_participate|否|否 |否 ||
|[未开始和进行中的计划(pending_and_in_progress)](module/TestMgmt/Test_plan/query/Pending_and_in_progress)|pending_and_in_progress|否|否 |否 ||
|[查询未移入过的计划(query_no_shift_in)](module/TestMgmt/Test_plan/query/Query_no_shift_in)|query_no_shift_in|否|否 |否 ||
|[未加入计划(un_join_plan)](module/TestMgmt/Test_plan/query/Un_join_plan)|un_join_plan|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/Test_plan/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/Test_plan/dataset/Default)|DEFAULT|数据查询|是|||
|[我负责的(my_assignee)](module/TestMgmt/Test_plan/dataset/My_assignee)|my_assignee|数据查询|否|||
|[我的进行中的(my_in_progress)](module/TestMgmt/Test_plan/dataset/My_in_progress)|my_in_progress|数据查询|否|||
|[我参与的(my_participate)](module/TestMgmt/Test_plan/dataset/My_participate)|my_participate|数据查询|否|||
|[未开始和进行中的计划(pending_and_in_progress)](module/TestMgmt/Test_plan/dataset/Pending_and_in_progress)|pending_and_in_progress|数据查询|否|||
|[查询未移入过的计划(query_no_shift_in)](module/TestMgmt/Test_plan/dataset/Query_no_shift_in)|query_no_shift_in|数据查询|否|||
|[未加入计划(un_join_plan)](module/TestMgmt/Test_plan/dataset/Un_join_plan)|un_join_plan|数据查询|否|||


## 消息通知

|    名称   | 代码名       |  消息队列   |  消息模板 |  通知目标     |  备注  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[取消分配负责人通知](module/TestMgmt/Test_plan/notify/assignee_cancel_notify)|assignee_cancel_notify|[默认消息队列](index/notify_index)|[测试计划通知模板(取消分配负责人)](index/notify_index#test_plan_assignee_cancel)|负责人 ||
|[分配负责人通知](module/TestMgmt/Test_plan/notify/assignee_notify)|assignee_notify|[默认消息队列](index/notify_index)|[测试计划通知模板(分配负责人)](index/notify_index#test_plan_assignee)|负责人 ||


## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_STATUS_EQ|状态|EQ|
|N_TYPE_EQ|测试分类|EQ|
|N_CATEGORIES_LIKE|类别|LIKE|
|N_ASSIGNEE_NAME_EQ|负责人|EQ|
|N_ASSIGNEE_ID_EQ|负责人标识|EQ|
|N_NAME_LIKE|计划名称|LIKE|
|N_ID_EQ|标识|EQ|
|N_CREATE_MAN_EQ|建立人|EQ|
|N_LIBRARY_ID_EQ|测试库标识|EQ|
|N_PROJECT_ID_EQ|关联项目|EQ|
|N_VERSION_ID_EQ|关联发布|EQ|
|N_SPRINT_ID_EQ|关联迭代|EQ|
|N_PROJECT_NAME_EQ|关联项目|EQ|
|N_PROJECT_NAME_LIKE|关联项目|LIKE|
|N_VERSION_NAME_EQ|关联发布|EQ|
|N_VERSION_NAME_LIKE|关联发布|LIKE|
|N_SPRINT_NAME_EQ|关联迭代|EQ|
|N_SPRINT_NAME_LIKE|关联迭代|LIKE|
|N_LIBRARY_NAME_EQ|所属测试库|EQ|
|N_LIBRARY_NAME_LIKE|所属测试库|LIKE|
|N_RELEASE_ID_EQ|项目发布标识|EQ|
|N_RELEASE_NAME_EQ|名称|EQ|
|N_RELEASE_NAME_LIKE|名称|LIKE|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 删除 | toolbar_tree_exp_viewnode_2_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 开始测试 | start_test_plan | 开始测试 |单项数据|<details><summary>后台调用</summary>[Start_test_plan](#行为)|是|引用视图或树节点||
| 确定 | panel_ExTestPlanPickupView2Layout_button_okaction_click | 确定 |单项数据|用户自定义|否|无||
| 删除 | toolbar_tree_exp_viewnode_3_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 打开测试库首页 | open_library | 打开测试库首页 |单项数据|用户自定义|否|无||
| 编辑 | open_update_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑测试计划](app/view/test_planupdate_view)</details>|否|引用视图或树节点||
| 删除 | delete_test_plan | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)|是|引用视图或树节点||
| 编辑 | toolbar_tree_exp_viewnode_1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||
| 结束测试 | end_test_plan | 结束测试 |单项数据（主键）|<details><summary>后台调用</summary>[End_test_plan](#行为)|是|引用视图或树节点||
| 删除 | toolbar_tree_exp_viewnode_1_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||
| 新建类别 | toolbar_tree_exp_viewtreeexpbar_toolbar_deuiaction2_click | 新建类别 |单项数据|用户自定义|否|无||
| 新建分组 | toolbar_tree_exp_viewtreeexpbar_toolbar_deuiaction1_click | 新建分组 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[新建类别](module/TestMgmt/Test_plan/uilogic/create_category)|create_category|
|[新建分组](module/TestMgmt/Test_plan/uilogic/create_section)|create_section|
|[删除类别或分组](module/TestMgmt/Test_plan/uilogic/remove_section_or_category)|remove_section_or_category|
|[编辑类别或分组](module/TestMgmt/Test_plan/uilogic/edit_section_or_category)|edit_section_or_category|
|[移入计划](module/TestMgmt/Test_plan/uilogic/shift_in_test_plan)|shift_in_test_plan|
