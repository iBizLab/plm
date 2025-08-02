# 测试计划(test_plan)  <!-- {docsify-ignore-all} -->


定义测试的范围、方法和资源分配，可在测试计划内添加多个执行用例。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|否||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|类别|CATEGORIES|多项选择(文本值)|2000|是||
|类别|CATEGORIES_NAME|长文本，长度1000|2000|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|计划结束|END_AT|日期型||是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|测试库标识|LIBRARY_ID|外键值|100|否||
|测试库名称|LIBRARY_IDENTIFIER|外键值附加数据|15|是||
|测试库是否删除|LIBRARY_IS_DELETED|外键值附加数据||是||
|所属测试库|LIBRARY_NAME|外键值文本|200|是||
|计划名称|NAME|文本，可指定长度|200|否||
|关联项目|PROJECT_ID|外键值|100|是||
|关联项目|PROJECT_NAME|外键值文本|200|是||
|项目类型|PROJECT_TYPE|[外键值附加数据](index/dictionary_index#project_type "项目类型")|60|是||
|项目发布标识|RELEASE_ID|外键值|100|是||
|名称|RELEASE_NAME|外键值文本|200|是||
|关联迭代|SPRINT_ID|外键值|100|是||
|关联迭代|SPRINT_NAME|外键值文本|200|是||
|计划开始|START_AT|日期型||是||
|状态|STATUS|[单项选择(文本值)](index/dictionary_index#test_plan_status "测试计划状态")|60|是||
|测试报告概要|SUMMARY|长文本，没有长度限制|1048576|是||
|测试分类|TYPE|[单项选择(文本值)](index/dictionary_index#test_plan_type "测试分类")|60|否||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|关联缺陷|WORK_ITEM_RELATIONS|一对多关系数据集合|1048576|是||


###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="BI查询属性组" name="field_group_bi_search_group">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|类别|CATEGORIES_NAME|长文本，长度1000|2000|是||
|建立时间|CREATE_TIME|日期时间型||否||
|更新时间|UPDATE_TIME|日期时间型||否||
|计划开始|START_AT|日期型||是||
|计划结束|END_AT|日期型||是||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|否||
|计划名称|NAME|文本，可指定长度|200|否||
|类别|CATEGORIES|多项选择(文本值)|2000|是||
|测试库名称|LIBRARY_IDENTIFIER|外键值附加数据|15|是||
|项目类型|PROJECT_TYPE|[外键值附加数据](index/dictionary_index#project_type "项目类型")|60|是||
|关联项目|PROJECT_NAME|外键值文本|200|是||
|关联迭代|SPRINT_NAME|外键值文本|200|是||
|名称|RELEASE_NAME|外键值文本|200|是||
|所属测试库|LIBRARY_NAME|外键值文本|200|是||
|关联项目|PROJECT_ID|外键值|100|是||
|测试库标识|LIBRARY_ID|外键值|100|否||
|项目发布标识|RELEASE_ID|外键值|100|是||
|关联迭代|SPRINT_ID|外键值|100|是||
|测试分类|TYPE|[单项选择(文本值)](index/dictionary_index#test_plan_type "测试分类")|60|否||
|状态|STATUS|[单项选择(文本值)](index/dictionary_index#test_plan_status "测试计划状态")|60|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|测试库是否删除|LIBRARY_IS_DELETED|外键值附加数据||是||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_RUN_TEST_PLAN_PLAN_ID](der/DER1N_RUN_TEST_PLAN_PLAN_ID)|[执行用例(RUN)](module/TestMgmt/run)|1:N关系||
|[DERCUSTOM_RELATION_TEST_PLAN](der/DERCUSTOM_RELATION_TEST_PLAN)|[关联(RELATION)](module/Base/relation)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID](der/DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID)|[测试库(LIBRARY)](module/TestMgmt/library)|1:N关系||
|[DER1N_TEST_PLAN_PROJECT_PROJECT_ID](der/DER1N_TEST_PLAN_PROJECT_PROJECT_ID)|[项目(PROJECT)](module/ProjMgmt/project)|1:N关系||
|[DER1N_TEST_PLAN_RELEASE_RELEASE_ID](der/DER1N_TEST_PLAN_RELEASE_RELEASE_ID)|[项目发布(RELEASE)](module/ProjMgmt/release)|1:N关系||
|[DER1N_TEST_PLAN_SPRINT_SPRINT_ID](der/DER1N_TEST_PLAN_SPRINT_SPRINT_ID)|[迭代(SPRINT)](module/ProjMgmt/sprint)|1:N关系||
|[DERCUSTOM_TEST_PLAN_COMMON_FLOW](der/DERCUSTOM_TEST_PLAN_COMMON_FLOW)|[通用规则(COMMON_FLOW)](module/Base/common_flow)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#test_plan_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|删除类别|delete_categories|[实体处理逻辑](module/TestMgmt/test_plan/logic/delete_categories "删除类别")|默认|不支持||||
|结束测试|end_test_plan|[实体处理逻辑](module/TestMgmt/test_plan/logic/end_test_plan "结束测试")|默认|不支持||||
|开始测试|start_test_plan|[实体处理逻辑](module/TestMgmt/test_plan/logic/start_test_plan "开始测试")|默认|不支持||||
|测试报告概览数据源|test_plan_report_survey|[实体处理逻辑](module/TestMgmt/test_plan/logic/test_plan_report_survey "测试报告概览数据源")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[删除类别](module/TestMgmt/test_plan/logic/delete_categories)|delete_categories|无||当类别删除时修改发布的类别属性|
|[填充类别文本](module/TestMgmt/test_plan/logic/fill_categories_name)|fill_categories_name|无||填充类别对应文本|
|[开始测试](module/TestMgmt/test_plan/logic/start_test_plan)|start_test_plan|无||测试计划开始测试|
|[测试报告概览数据源](module/TestMgmt/test_plan/logic/test_plan_report_survey)|test_plan_report_survey|无||测试报告概览的数据源|
|[结束测试](module/TestMgmt/test_plan/logic/end_test_plan)|end_test_plan|无||设置测试计划状态为结束|
|[计划操作标识业务计算逻辑](module/TestMgmt/test_plan/logic/oppriv_logic)|oppriv_logic|实体操作标识计算逻辑||计划操作标识业务计算逻辑|
|[负责人变更附加逻辑](module/TestMgmt/test_plan/logic/assignee_onchange)|assignee_onchange|属性逻辑||测试计划负责人变更时触发相应的通知消息|

## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `状态(STATUS)` [测试计划状态](index/dictionary_index#test_plan_status "测试计划状态")




<p class="panel-title"><b>操作标识分布</b></p>
<br>
<table>
  <tr>
    <th>操作标识col350</th>
    <th>未开始col150</th>
    <th>进行中col150</th>
    <th>已完成col150</th>
    <th>备注col600</th>
  </tr>
  <tr>
    <td>删除(DELETE)<br><a href ="#/der/DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID">DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>删除(DELETE)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>建立(CREATE)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>建立(CREATE)<br><a href ="#/der/DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID">DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>开始(IN_PROGRESS)<br><a href ="#/der/DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID">DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"></td>
    <td align="center"></td>
    <td></td>
  </tr>
  <tr>
    <td>开始(IN_PROGRESS)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"></td>
    <td align="center"></td>
    <td></td>
  </tr>
  <tr>
    <td>更新(UPDATE)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>更新(UPDATE)<br><a href ="#/der/DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID">DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>结束(COMPLETED)</td>
    <td align="center"></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"></td>
    <td></td>
  </tr>
  <tr>
    <td>结束(COMPLETED)<br><a href ="#/der/DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID">DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID</a></td>
    <td align="center"></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"></td>
    <td></td>
  </tr>
  <tr>
    <td>读取(READ)<br><a href ="#/der/DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID">DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>读取(READ)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>读取(READ)<br><a href ="#/der/DER1N_TEST_PLAN_PROJECT_PROJECT_ID">DER1N_TEST_PLAN_PROJECT_PROJECT_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>

</table>


## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/TestMgmt/test_plan/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/test_plan/query/View)|VIEW|否|否 |否 ||
|[BI反查(bi_detail)](module/TestMgmt/test_plan/query/bi_detail)|bi_detail|否|否 |否 ||
|[BI查询(bi_search)](module/TestMgmt/test_plan/query/bi_search)|bi_search|否|否 |否 ||
|[当前项目(cur_project)](module/TestMgmt/test_plan/query/cur_project)|cur_project|否|否 |否 ||
|[我负责的(my_assignee)](module/TestMgmt/test_plan/query/my_assignee)|my_assignee|否|否 |否 ||
|[我的进行中的(my_in_progress)](module/TestMgmt/test_plan/query/my_in_progress)|my_in_progress|否|否 |否 ||
|[我参与的(my_participate)](module/TestMgmt/test_plan/query/my_participate)|my_participate|否|否 |否 ||
|[未开始和进行中的计划(pending_and_in_progress)](module/TestMgmt/test_plan/query/pending_and_in_progress)|pending_and_in_progress|否|否 |否 ||
|[查询未移入过的计划(query_no_shift_in)](module/TestMgmt/test_plan/query/query_no_shift_in)|query_no_shift_in|否|否 |否 ||
|[测试计划(test_plan)](module/TestMgmt/test_plan/query/test_plan)|test_plan|否|否 |否 ||
|[未加入计划(un_join_plan)](module/TestMgmt/test_plan/query/un_join_plan)|un_join_plan|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/test_plan/dataset/Default)|DEFAULT|数据查询|是|||
|[BI反查(bi_detail)](module/TestMgmt/test_plan/dataset/bi_detail)|bi_detail|数据查询|否|||
|[BI查询(bi_search)](module/TestMgmt/test_plan/dataset/bi_search)|bi_search|数据查询|否|||
|[当前项目(cur_project)](module/TestMgmt/test_plan/dataset/cur_project)|cur_project|数据查询|否|||
|[我负责的(my_assignee)](module/TestMgmt/test_plan/dataset/my_assignee)|my_assignee|数据查询|否|||
|[我的进行中的(my_in_progress)](module/TestMgmt/test_plan/dataset/my_in_progress)|my_in_progress|数据查询|否|||
|[我参与的(my_participate)](module/TestMgmt/test_plan/dataset/my_participate)|my_participate|数据查询|否|||
|[未开始和进行中的计划(pending_and_in_progress)](module/TestMgmt/test_plan/dataset/pending_and_in_progress)|pending_and_in_progress|数据查询|否|||
|[查询未移入过的计划(query_no_shift_in)](module/TestMgmt/test_plan/dataset/query_no_shift_in)|query_no_shift_in|数据查询|否|||
|[测试计划(test_plan)](module/TestMgmt/test_plan/dataset/test_plan)|test_plan|数据查询|否|||
|[未加入计划(un_join_plan)](module/TestMgmt/test_plan/dataset/un_join_plan)|un_join_plan|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=test_plan-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=test_plan-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ(测试库(READ))`
* `DELETE(测试库(SUBDATA))`
* `CREATE`
* `UPDATE`



## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[测试计划取消分配负责人通知](module/TestMgmt/test_plan/notify/assignee_cancel_notify)|assignee_cancel_notify|[默认消息队列](index/notify_index)|[测试计划通知模板(取消分配负责人)](index/notify_index#test_plan_assignee_cancel)|负责人 ||
|[测试计划分配负责人通知](module/TestMgmt/test_plan/notify/assignee_notify)|assignee_notify|[默认消息队列](index/notify_index)|[测试计划通知模板(分配负责人)](index/notify_index#test_plan_assignee)|负责人 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ASSIGNEE_ID_EQ|负责人标识|EQ||
|N_ASSIGNEE_ID_IN|负责人标识|IN||
|N_ASSIGNEE_ID_ISNOTNULL|负责人标识|ISNOTNULL||
|N_ASSIGNEE_ID_ISNULL|负责人标识|ISNULL||
|N_ASSIGNEE_ID_NOTIN|负责人标识|NOTIN||
|N_ASSIGNEE_NAME_EQ|负责人|EQ||
|N_CATEGORIES_LIKE|类别|LIKE||
|N_CREATE_MAN_EQ|建立人|EQ||
|N_CREATE_MAN_IN|建立人|IN||
|N_CREATE_MAN_ISNOTNULL|建立人|ISNOTNULL||
|N_CREATE_MAN_ISNULL|建立人|ISNULL||
|N_CREATE_MAN_NOTIN|建立人|NOTIN||
|N_CREATE_TIME_GTANDEQ|建立时间|GTANDEQ||
|N_CREATE_TIME_LTANDEQ|建立时间|LTANDEQ||
|N_ID_EQ|标识|EQ||
|N_LIBRARY_ID_EQ|测试库标识|EQ||
|N_LIBRARY_NAME_EQ|所属测试库|EQ||
|N_LIBRARY_NAME_LIKE|所属测试库|LIKE||
|N_NAME_LIKE|计划名称|LIKE||
|N_PROJECT_ID_EQ|关联项目|EQ||
|N_PROJECT_NAME_EQ|关联项目|EQ||
|N_PROJECT_NAME_LIKE|关联项目|LIKE||
|N_RELEASE_ID_EQ|项目发布标识|EQ||
|N_RELEASE_NAME_EQ|名称|EQ||
|N_RELEASE_NAME_LIKE|名称|LIKE||
|N_SPRINT_ID_EQ|关联迭代|EQ||
|N_SPRINT_NAME_EQ|关联迭代|EQ||
|N_SPRINT_NAME_LIKE|关联迭代|LIKE||
|N_STATUS_EQ|状态|EQ||
|N_TYPE_EQ|测试分类|EQ||
|N_UPDATE_TIME_GTANDEQ|更新时间|GTANDEQ||
|N_UPDATE_TIME_LTANDEQ|更新时间|LTANDEQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 打开测试计划 | open_test_plan | 打开测试计划 |单项数据|用户自定义||
| 确定 | panel_ex_test_plan_pickup_view2_layout_button_okaction_click | 确定 |单项数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 关联跳转测试计划主视图 | open_test_plan_main_view | 关联跳转测试计划主视图 |单项数据|用户自定义||
| 开始测试 | start_test_plan | 开始测试 |单项数据|<details><summary>后台调用</summary>[start_test_plan](#行为)||
| BI编辑 | bi_report_view | 编辑 |无数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node2_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 编辑 | open_update_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑测试计划](app/view/test_plan_update_option_view)</details>||
| 删除 | toolbar_tree_exp_view_node3_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 删除 | delete_test_plan | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| BI全屏 | bi_full_screen | 全屏 |无数据|用户自定义||
| BI刷新 | bi_refresh | 刷新 |无数据|用户自定义||
| 刷新 | toolbar_test_plan_grid_view_toolbar_deuiaction2_click | 刷新 |单项数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 新建类别 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction2_click | 新建类别 |单项数据|用户自定义||
| 结束测试 | end_test_plan | 结束测试 |单项数据（主键）|<details><summary>后台调用</summary>[end_test_plan](#行为)||
| 编辑 | toolbar_tree_exp_view_node2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 新建分组 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction1_click | 新建分组 |单项数据|用户自定义||
| 全屏 | toolbar_test_plan_grid_view_toolbar_deuiaction1_click | 全屏 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node1_cm_deuiaction2_click | 删除 |单项数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[删除类别或分组](module/TestMgmt/test_plan/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[新建分组](module/TestMgmt/test_plan/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/TestMgmt/test_plan/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[移入计划](module/TestMgmt/test_plan/uilogic/shift_in_test_plan)|shift_in_test_plan|获取选中数据，通过后台处理，完成测试用例移入计划操作|
|[编辑类别或分组](module/TestMgmt/test_plan/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|
|[计算表格列行为状态(library)](module/TestMgmt/test_plan/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制收藏和取消收藏的禁用状态|
|[设置门户默认搜索时间](module/TestMgmt/test_plan/uilogic/set_portlet_search_date)|set_portlet_search_date|在门户部件上配置视图逻辑，设置门户默认搜索时间|
|[门户全屏](module/TestMgmt/test_plan/uilogic/full_screen)|full_screen|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户刷新](module/TestMgmt/test_plan/uilogic/portlet_refresh)|portlet_refresh|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户编辑](module/TestMgmt/test_plan/uilogic/edit_to_design)|edit_to_design|所有门户部件配置该逻辑触发跳转至编辑页|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/TestMgmt/test_plan?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_plan?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_plan?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_plan?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_plan?id=主状态控制`">
  主状态控制
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_plan?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_plan?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_plan?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_plan?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_plan?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_plan?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_plan?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/test_plan?id=界面逻辑`">
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
show_field_group:'field_group_bi_search_group',

      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>