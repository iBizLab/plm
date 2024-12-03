# 迭代(sprint)  <!-- {docsify-ignore-all} -->


产品开发过程中的一次迭代或冲刺，用于规划和跟踪一段时间内的开发任务。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|全部工作项数|ALL_WORK_ITEMS|数值||是||
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|是||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|类别|CATEGORIES|多项选择(文本值)|2000|是||
|类别|CATEGORIES_NAME|长文本，长度1000|2000|是||
|已完成工作项数|COMPLETED_WORK_ITEMS|数值||是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|结束时间|END_AT|日期型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|否||
|迭代已过天数|PAST_DAYS|数值||是||
|父标识|PID|外键值|100|是||
|父名称|PNAME|外键值文本|200|是||
|项目标识|PROJECT_ID|外键值|100|否||
|项目是否删除|PROJECT_IS_DELETED|外键值附加数据||是||
|项目名称|PROJECT_NAME|外键值文本|200|是||
|项目类型|PROJECT_TYPE|[外键值附加数据](index/dictionary_index#project_type "项目类型")|60|是||
|进度|SCHEDULE|数值||是||
|开始时间|START_AT|日期型||否||
|状态|STATUS|[单项选择(文本值)](index/dictionary_index#sprint_status "迭代状态")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="BI查询属性组" name="field_group_bi_search_group">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立时间|CREATE_TIME|日期时间型||否||
|更新时间|UPDATE_TIME|日期时间型||否||
|开始时间|START_AT|日期型||否||
|结束时间|END_AT|日期型||否||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|名称|NAME|文本，可指定长度|200|否||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|已完成工作项数|COMPLETED_WORK_ITEMS|数值||是||
|迭代已过天数|PAST_DAYS|数值||是||
|全部工作项数|ALL_WORK_ITEMS|数值||是||
|进度|SCHEDULE|数值||是||
|类别|CATEGORIES|多项选择(文本值)|2000|是||
|项目名称|PROJECT_NAME|外键值文本|200|是||
|项目标识|PROJECT_ID|外键值|100|否||
|状态|STATUS|[单项选择(文本值)](index/dictionary_index#sprint_status "迭代状态")|60|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|项目是否删除|PROJECT_IS_DELETED|外键值附加数据||是||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_SPRINT_ALTERATION_SPRINT_SPRINT_ID](der/DER1N_SPRINT_ALTERATION_SPRINT_SPRINT_ID)|[迭代变更(SPRINT_ALTERATION)](module/ProjMgmt/sprint_alteration)|1:N关系||
|[DER1N_SPRINT_SPRINT_PID](der/DER1N_SPRINT_SPRINT_PID)|[迭代(SPRINT)](module/ProjMgmt/sprint)|1:N关系||
|[DER1N_TEST_PLAN_SPRINT_SPRINT_ID](der/DER1N_TEST_PLAN_SPRINT_SPRINT_ID)|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan)|1:N关系||
|[DER1N_WORK_ITEM_SPRINT_SPRINT_ID](der/DER1N_WORK_ITEM_SPRINT_SPRINT_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|1:N关系||
|[DERCUSTOM_RELATION_SPRINT](der/DERCUSTOM_RELATION_SPRINT)|[关联(RELATION)](module/Base/relation)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_SPRINT_PROJECT_PROJECT_ID](der/DER1N_SPRINT_PROJECT_PROJECT_ID)|[项目(PROJECT)](module/ProjMgmt/project)|1:N关系||
|[DER1N_SPRINT_SPRINT_PID](der/DER1N_SPRINT_SPRINT_PID)|[迭代(SPRINT)](module/ProjMgmt/sprint)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#sprint_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|计算发布工作项数量|cal_sprint_work_item_num|用户自定义|默认|不支持|[附加操作](index/action_logic_index#sprint_cal_sprint_work_item_num)|||
|发布取消关联迭代|del_relation|[实体处理逻辑](module/ProjMgmt/sprint/logic/del_relation "发布取消关联迭代")|默认|不支持||||
|删除类别|delete_categories|[实体处理逻辑](module/ProjMgmt/sprint/logic/delete_categories "删除类别")|默认|不支持||||
|结束迭代|end_sprint|[实体处理逻辑](module/ProjMgmt/sprint/logic/end_sprint "结束迭代")|默认|不支持||||
|行为|get_not_finish|[实体处理逻辑](module/ProjMgmt/sprint/logic/get_not_finish "获取未完成的工作项数量")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/ProjMgmt/sprint/logic/nothing "无操作")|默认|不支持||||
|获取概览基本信息|overview|[实体处理逻辑](module/ProjMgmt/sprint/logic/overview_num "获取概览基本信息统计数字")|默认|不支持||||
|迭代关联发布|sprint_relation_release|[实体处理逻辑](module/ProjMgmt/sprint/logic/sprint_relation_release "迭代关联发布")|默认|不支持||||
|开始迭代|start_sprint|[实体处理逻辑](module/ProjMgmt/sprint/logic/start_sprint "开始迭代")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[删除类别](module/ProjMgmt/sprint/logic/delete_categories)|delete_categories|无||当类别删除时修改迭代的类别属性|
|[发布取消关联迭代](module/ProjMgmt/sprint/logic/del_relation)|del_relation|无||发布取消关联迭代|
|[填充类别文本](module/ProjMgmt/sprint/logic/fill_categories_name)|fill_categories_name|无||填充类别对应文本|
|[开始迭代](module/ProjMgmt/sprint/logic/start_sprint)|start_sprint|无||开始迭代|
|[无操作](module/ProjMgmt/sprint/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[结束迭代](module/ProjMgmt/sprint/logic/end_sprint)|end_sprint|无||结束迭代，根据用户选择，将未完成的工作项 移动至其他迭代会待分配|
|[获取未完成的工作项数量](module/ProjMgmt/sprint/logic/get_not_finish)|get_not_finish|无||完成迭代时，判断此迭代下是否存在未完成的工作项；提醒用户是否将未完成的工作项状态变更至已完成|
|[获取概览基本信息统计数字](module/ProjMgmt/sprint/logic/overview_num)|overview_num|无||获取概览基本信息统计数字|
|[计算迭代工作项数量](module/ProjMgmt/sprint/logic/cal_sprint_work_item_num)|cal_sprint_work_item_num|无||迭代工作项数量计算|
|[迭代关联发布](module/ProjMgmt/sprint/logic/sprint_relation_release)|sprint_relation_release|无||迭代关联发布|
|[迭代操作标识业务计算逻辑](module/ProjMgmt/sprint/logic/oppriv_logic)|oppriv_logic|实体操作标识计算逻辑||迭代操作标识业务计算逻辑|
|[项目下迭代（移动端）](module/ProjMgmt/sprint/logic/mob_project_sprint)|mob_project_sprint|无||设置进度条信息|

## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `状态(STATUS)` [迭代状态](index/dictionary_index#sprint_status "迭代状态")




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
    <td>删除(DELETE)<br><a href ="#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
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
    <td>建立(CREATE)<br><a href ="#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
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
    <td>开始迭代(BEGIN)<br><a href ="#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"></td>
    <td align="center"></td>
    <td></td>
  </tr>
  <tr>
    <td>更新(UPDATE)<br><a href ="#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
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
    <td>结束迭代(END)<br><a href ="#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
    <td align="center"></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"></td>
    <td></td>
  </tr>
  <tr>
    <td>读取(READ)<br><a href ="#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
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

</table>


## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProjMgmt/sprint/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/sprint/query/View)|VIEW|否|否 |否 ||
|[主表格查询(all)](module/ProjMgmt/sprint/query/all)|all|否|否 |否 ||
|[BI反查(bi_detail)](module/ProjMgmt/sprint/query/bi_detail)|bi_detail|否|否 |否 ||
|[BI查询(bi_search)](module/ProjMgmt/sprint/query/bi_search)|bi_search|否|否 |否 ||
|[移动至(choose_move)](module/ProjMgmt/sprint/query/choose_move)|choose_move|否|否 |是 |确认迭代完成时，选择移动至其他迭代|
|[选择关联的迭代(choose_sprint_relation)](module/ProjMgmt/sprint/query/choose_sprint_relation)|choose_sprint_relation|否|否 |否 ||
|[当前项目迭代且未完成(cur_sprint_not_finish)](module/ProjMgmt/sprint/query/cur_sprint_not_finish)|cur_sprint_not_finish|否|否 |否 ||
|[未结束的迭代(not_finish)](module/ProjMgmt/sprint/query/not_finish)|not_finish|否|否 |否 ||
|[公开(public)](module/ProjMgmt/sprint/query/public)|public|否|否 |否 ||
|[只读用户(reader)](module/ProjMgmt/sprint/query/reader)|reader|否|否 |否 ||
|[发布关联迭代(release_relation)](module/ProjMgmt/sprint/query/release_relation)|release_relation|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/sprint/dataset/Default)|DEFAULT|数据查询|是|||
|[主表格查询(all)](module/ProjMgmt/sprint/dataset/all)|all|数据查询|否|||
|[BI反查(bi_detail)](module/ProjMgmt/sprint/dataset/bi_detail)|bi_detail|数据查询|否|||
|[BI查询(bi_search)](module/ProjMgmt/sprint/dataset/bi_search)|bi_search|数据查询|否|||
|[移动至(choose_move)](module/ProjMgmt/sprint/dataset/choose_move)|choose_move|数据查询|否||确认迭代完成时，选择移动至其他迭代|
|[选择关联的迭代(choose_sprint_relation)](module/ProjMgmt/sprint/dataset/choose_sprint_relation)|choose_sprint_relation|数据查询|否|||
|[当前项目未完成的迭代(cur_sprint_not_finish)](module/ProjMgmt/sprint/dataset/cur_sprint_not_finish)|cur_sprint_not_finish|数据查询|否|||
|[项目下迭代（移动端）(mob_project_sprint)](module/ProjMgmt/sprint/dataset/mob_project_sprint)|mob_project_sprint|[实体逻辑](module/ProjMgmt/sprint/logic/mob_project_sprint)|否|||
|[未结束的迭代(not_finish)](module/ProjMgmt/sprint/dataset/not_finish)|not_finish|数据查询|否|||
|[只读用户(reader)](module/ProjMgmt/sprint/dataset/reader)|reader|数据查询|否|||
|[发布关联迭代(release_relation)](module/ProjMgmt/sprint/dataset/release_relation)|release_relation|数据查询|否|||

## 数据权限

##### 操作用户(读) :id=sprint-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/ProjMgmt/sprint#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ(项目(READ))`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ASSIGNEE_ID_EQ|负责人标识|EQ||
|N_ASSIGNEE_ID_IN|负责人标识|IN||
|N_ASSIGNEE_ID_ISNOTNULL|负责人标识|ISNOTNULL||
|N_ASSIGNEE_ID_ISNULL|负责人标识|ISNULL||
|N_ASSIGNEE_ID_NOTIN|负责人标识|NOTIN||
|N_CATEGORIES_LIKE|类别|LIKE||
|N_CREATE_MAN_EQ|建立人|EQ||
|N_CREATE_MAN_IN|建立人|IN||
|N_CREATE_MAN_ISNOTNULL|建立人|ISNOTNULL||
|N_CREATE_MAN_ISNULL|建立人|ISNULL||
|N_CREATE_MAN_NOTIN|建立人|NOTIN||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PID_EQ|父标识|EQ||
|N_PNAME_EQ|父名称|EQ||
|N_PNAME_LIKE|父名称|LIKE||
|N_PROJECT_ID_EQ|项目标识|EQ||
|N_PROJECT_NAME_EQ|项目名称|EQ||
|N_PROJECT_NAME_LIKE|项目名称|LIKE||
|N_STATUS_EQ|状态|EQ||
|N_STATUS_NOTEQ|状态|NOTEQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 发布取消关联迭代 | release_del_sprint_relation | 取消关联 |单项数据|<details><summary>后台调用</summary>[del_relation](#行为)||
| 编辑 | toolbar_tree_exp_view_node3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 刷新 | toolbar_sprint_grid_parts_toolbar_deuiaction2_click | 刷新 |单项数据|用户自定义||
| 编辑 | open_edit_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑迭代](app/view/sprint_update_view)</details>||
| BI编辑 | bi_report_view | 编辑 |无数据|用户自定义||
| 开始迭代 | start_sprint | 开始迭代 |单项数据（主键）|<details><summary>后台调用</summary>[start_sprint](#行为)||
| 删除 | toolbar_tree_exp_view_node2_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node3_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 删除 | remove | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 跳转迭代概览页面 | open_release_sprint | 跳转迭代概览页面 |单项数据（主键）|用户自定义||
| BI全屏 | bi_full_screen | 全屏 |无数据|用户自定义||
| BI刷新 | bi_refresh | 刷新 |无数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 迭代关联发布 | add_relation | 关联发布 |无数据|<details><summary>后台调用</summary>[sprint_relation_release](#行为)||
| 新建类别 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction2_click | 新建类别 |单项数据|用户自定义||
| 打开迭代 | open_sprint | 打开迭代 |单项数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 新建分组 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction1_click | 新建分组 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node1_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 全屏 | toolbar_sprint_grid_parts_toolbar_deuiaction1_click | 全屏 |单项数据|用户自定义||
| 结束迭代 | end_sprint | 结束迭代 |单项数据（主键）|<details><summary>后台调用</summary>[end_sprint](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[删除类别或分组](module/ProjMgmt/sprint/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除，删除类别或分组数据|
|[新建分组](module/ProjMgmt/sprint/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/ProjMgmt/sprint/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[编辑类别或分组](module/ProjMgmt/sprint/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|
|[计算进度](module/ProjMgmt/sprint/uilogic/cal_schedule)|cal_schedule|表格列计算进度|
|[门户全屏](module/ProjMgmt/sprint/uilogic/full_screen)|full_screen|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户刷新](module/ProjMgmt/sprint/uilogic/portlet_refresh)|portlet_refresh|所有门户部件行为栏上配置该逻辑可触发全屏|
|[门户编辑](module/ProjMgmt/sprint/uilogic/edit_to_design)|edit_to_design|所有门户部件配置该逻辑触发跳转至编辑页|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=主状态控制`">
  主状态控制
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=界面逻辑`">
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