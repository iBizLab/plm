# 迭代(Sprint)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|开始时间|START_AT|日期型|0|||||
|结束时间|END_AT|日期型|0|||||
|描述|DESCRIPTION|长文本，长度1000|2000|[默认规则](module/ProjMgmt/Sprint/value_rule/Description#default)||||
|状态|STATUS|[单项选择(文本值)](index/dictionary_index#Sprint_status "迭代状态")|60|[默认规则](module/ProjMgmt/Sprint/value_rule/Status#default)||||
|父名称|PNAME|外键值文本|200|[默认规则](module/ProjMgmt/Sprint/value_rule/Pname#default)||||
|项目名称|PROJECT_NAME|外键值文本|200|[默认规则](module/ProjMgmt/Sprint/value_rule/Project_name#default)||||
|类别名称|SPRINT_CATEGORY_NAME|外键值文本|200|[默认规则](module/ProjMgmt/Sprint/value_rule/Sprint_category_name#default)||||
|类别|CATEGORIES|长文本，长度1000|2000|[默认规则](module/ProjMgmt/Sprint/value_rule/Categories#default)||||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|[默认规则](module/ProjMgmt/Sprint/value_rule/Assignee_name#default)||||
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|[默认规则](module/ProjMgmt/Sprint/value_rule/Assignee_id#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProjMgmt/Sprint/value_rule/Id#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/ProjMgmt/Sprint/value_rule/Name#default)||√||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Sprint/value_rule/Update_man#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Sprint/value_rule/Create_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|产品标识|PROJECT_ID|外键值|100|[默认规则](module/ProjMgmt/Sprint/value_rule/Project_id#default)||||
|父标识|PID|外键值|100|[默认规则](module/ProjMgmt/Sprint/value_rule/Pid#default)||||
|迭代类别标识|SPRINT_CATEGORY_ID|外键值|100|[默认规则](module/ProjMgmt/Sprint/value_rule/Sprint_category_id#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_SPRINT_SPRINT_PID](der/DER1N_SPRINT_SPRINT_PID)|[迭代(SPRINT)](module/ProjMgmt/Sprint)|1:N关系||
|[DER1N_TEST_PLAN_SPRINT_SPRINT_ID](der/DER1N_TEST_PLAN_SPRINT_SPRINT_ID)|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|1:N关系||
|[DER1N_WORK_ITEM_SPRINT_SPRINT_ID](der/DER1N_WORK_ITEM_SPRINT_SPRINT_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|1:N关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_SPRINT_PROJECT_PROJECT_ID](der/DER1N_SPRINT_PROJECT_PROJECT_ID)|[项目(PROJECT)](module/ProjMgmt/Project)|1:N关系||
|[DER1N_SPRINT_SPRINT_CATEGORY_SPRINT_CATEGORY_ID](der/DER1N_SPRINT_SPRINT_CATEGORY_SPRINT_CATEGORY_ID)|[迭代类别(SPRINT_CATEGORY)](module/ProjMgmt/Sprint_category)|1:N关系||
|[DER1N_SPRINT_SPRINT_PID](der/DER1N_SPRINT_SPRINT_PID)|[迭代(SPRINT)](module/ProjMgmt/Sprint)|1:N关系||
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
|结束迭代|End_sprint|[实体处理逻辑](module/ProjMgmt/Sprint/logic/end_sprint "结束迭代")|默认|不支持||||
|行为|Get_not_finish|[实体处理逻辑](module/ProjMgmt/Sprint/logic/get_not_finish "获取未完成的工作项数量")|默认|不支持||||
|无操作|Nothing|[实体处理逻辑](module/ProjMgmt/Sprint/logic/nothing "无操作")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||
|开始迭代|Start_sprint|[实体处理逻辑](module/ProjMgmt/Sprint/logic/start_sprint "开始迭代")|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[结束迭代](module/ProjMgmt/Sprint/logic/end_sprint)|end_sprint|无|||
|[获取未完成的工作项数量](module/ProjMgmt/Sprint/logic/get_not_finish)|get_not_finish|无|||
|[无操作](module/ProjMgmt/Sprint/logic/nothing)|nothing|无|||
|[开始迭代](module/ProjMgmt/Sprint/logic/start_sprint)|start_sprint|无|||


## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `状态(STATUS)` [迭代状态](index/dictionary_index#Sprint_status "迭代状态")




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
    <td>开始迭代(BEGIN)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"></td><td align="center"></td>  </tr>
  <tr>
    <td>建立(CREATE)<br><a href ="/#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>建立(CREATE)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>删除(DELETE)<br><a href ="/#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>删除(DELETE)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>结束迭代(END)</td>
<td align="center"></td><td align="center"><i class="fa fa-check"></i></td><td align="center"></td>  </tr>
  <tr>
    <td>读取(READ)<br><a href ="/#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>读取(READ)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>更新(UPDATE)<br><a href ="/#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>
  <tr>
    <td>更新(UPDATE)</td>
<td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td><td align="center"><i class="fa fa-check"></i></td>  </tr>

</table>




## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[移动至(choose_move)](module/ProjMgmt/Sprint/query/Choose_move)|choose_move|否|否 |是 |确认迭代完成时，选择移动至其他迭代|
|[数据查询(DEFAULT)](module/ProjMgmt/Sprint/query/Default)|DEFAULT|是|否 |否 ||
|[未结束的迭代(not_finish)](module/ProjMgmt/Sprint/query/Not_finish)|not_finish|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/Sprint/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[移动至(choose_move)](module/ProjMgmt/Sprint/dataset/Choose_move)|choose_move|数据查询|否|||
|[数据集(DEFAULT)](module/ProjMgmt/Sprint/dataset/Default)|DEFAULT|数据查询|是|||
|[未结束的迭代(not_finish)](module/ProjMgmt/Sprint/dataset/Not_finish)|not_finish|数据查询|否|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_STATUS_EQ|状态|EQ|
|N_PNAME_EQ|父名称|EQ|
|N_PNAME_LIKE|父名称|LIKE|
|N_PROJECT_NAME_EQ|项目名称|EQ|
|N_PROJECT_NAME_LIKE|项目名称|LIKE|
|N_SPRINT_CATEGORY_NAME_EQ|类别名称|EQ|
|N_SPRINT_CATEGORY_NAME_LIKE|类别名称|LIKE|
|N_CATEGORIES_LIKE|类别|LIKE|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_PROJECT_ID_EQ|产品标识|EQ|
|N_PID_EQ|父标识|EQ|
|N_SPRINT_CATEGORY_ID_EQ|迭代类别标识|EQ|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 删除 | toolbar_tree_exp_viewnode_2_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 编辑 | open_edit_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑迭代](app/view/sprintupdate_view)</details>|否|无||
| 编辑 | toolbar_tree_exp_viewnode_1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||
| 删除 | toolbar_tree_exp_viewnode_3_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 开始迭代 | start_sprint | 开始迭代 |单项数据（主键）|<details><summary>后台调用</summary>[Start_sprint](#行为)|是|引用视图或树节点||
| 删除 | toolbar_tree_exp_viewnode_1_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||
| 新建类别 | toolbar_tree_exp_viewtreeexpbar_toolbar_deuiaction2_click | 新建类别 |单项数据|用户自定义|否|无||
| 结束迭代 | end_sprint | 结束迭代 |单项数据（主键）|<details><summary>后台调用</summary>[End_sprint](#行为)|是|引用视图或树节点||
| 新建分组 | toolbar_tree_exp_viewtreeexpbar_toolbar_deuiaction1_click | 新建分组 |单项数据|用户自定义|否|无||
| 删除 | remove | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)|是|无||
| 编辑 | toolbar_tree_exp_viewnode_3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[新建类别](module/ProjMgmt/Sprint/uilogic/create_category)|create_category|
|[新建分组](module/ProjMgmt/Sprint/uilogic/create_section)|create_section|
|[删除类别或分组](module/ProjMgmt/Sprint/uilogic/remove_section_or_category)|remove_section_or_category|
|[编辑类别或分组](module/ProjMgmt/Sprint/uilogic/edit_section_or_category)|edit_section_or_category|
