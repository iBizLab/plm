# 项目(project)  <!-- {docsify-ignore-all} -->


PLM系统的核心业务实体，代表一个项目整体，包含项目的基本信息、状态、时间线等。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|是||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|主题色|COLOR|文本，可指定长度|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|结束时间|END_AT|日期型||是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|项目标识|IDENTIFIER|文本，可指定长度|100|否||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|是否已删除|IS_DELETED|是否逻辑||是||
|是否星标|IS_FAVORITE|文本，可指定长度|200|是||
|是否本地配置|IS_LOCAL_CONFIGURE|是否逻辑||是||
|成员|MEMBERS|一对多关系数据集合|1048576|是||
|项目名称|NAME|文本，可指定长度|200|否||
|开始时间|START_AT|日期型||是||
|状态|STATE|[单项选择(文本值)](index/dictionary_index#project_state "项目状态")|60|是||
|类型|TYPE|[单项选择(文本值)](index/dictionary_index#project_type "项目类型")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|可见范围|VISIBILITY|单项选择(文本值)|60|否||


###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="重定向属性组" name="field_group_redirctDEFGroup">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|类型|TYPE|[单项选择(文本值)](index/dictionary_index#project_type "项目类型")|60|是||
|状态|STATE|[单项选择(文本值)](index/dictionary_index#project_state "项目状态")|60|是||
|可见范围|VISIBILITY|单项选择(文本值)|60|否||
|项目名称|NAME|文本，可指定长度|200|否||
|项目标识|IDENTIFIER|文本，可指定长度|100|否||
|主题色|COLOR|文本，可指定长度|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|是||
|是否星标|IS_FAVORITE|文本，可指定长度|200|是||
|结束时间|END_AT|日期型||是||
|开始时间|START_AT|日期型||是||
|更新时间|UPDATE_TIME|日期时间型||否||
|建立时间|CREATE_TIME|日期时间型||否||
|是否已删除|IS_DELETED|是否逻辑||是||
|是否本地配置|IS_LOCAL_CONFIGURE|是否逻辑||是||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|描述|DESCRIPTION|长文本，长度1000|2000|是||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_BOARD_PROJECT_PROJECT_ID](der/DER1N_BOARD_PROJECT_PROJECT_ID)|[看板(BOARD)](module/ProjMgmt/board)|1:N关系||
|[DER1N_ENTRY_PROJECT_PROJECT_ID](der/DER1N_ENTRY_PROJECT_PROJECT_ID)|[看板栏(ENTRY)](module/ProjMgmt/entry)|1:N关系||
|[DER1N_PROGRESS_PROJECT_PROJECT_ID](der/DER1N_PROGRESS_PROJECT_PROJECT_ID)|[项目进度(PROGRESS)](module/ProjMgmt/progress)|1:N关系||
|[DER1N_PROJECT_MEMBER_PROJECT_PROJECT_ID](der/DER1N_PROJECT_MEMBER_PROJECT_PROJECT_ID)|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member)|1:N关系||
|[DER1N_RELEASE_PROJECT_PROJECT_ID](der/DER1N_RELEASE_PROJECT_PROJECT_ID)|[项目发布(RELEASE)](module/ProjMgmt/release)|1:N关系||
|[DER1N_SPRINT_PROJECT_PROJECT_ID](der/DER1N_SPRINT_PROJECT_PROJECT_ID)|[迭代(SPRINT)](module/ProjMgmt/sprint)|1:N关系||
|[DER1N_SWIMLANE_PROJECT_PROJECT_ID](der/DER1N_SWIMLANE_PROJECT_PROJECT_ID)|[泳道(SWIMLANE)](module/ProjMgmt/swimlane)|1:N关系||
|[DER1N_TEST_PLAN_PROJECT_PROJECT_ID](der/DER1N_TEST_PLAN_PROJECT_PROJECT_ID)|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan)|1:N关系||
|[DER1N_WORK_ITEM_PROJECT_PROJECT_ID](der/DER1N_WORK_ITEM_PROJECT_PROJECT_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|1:N关系||
|[DERCCUSTOM_FAVORITE_PROJECT](der/DERCCUSTOM_FAVORITE_PROJECT)|[收藏(FAVORITE)](module/Base/favorite)|自定义关系||
|[DERCUSTOM_WORK_PROJECT_PILOT_ID](der/DERCUSTOM_WORK_PROJECT_PILOT_ID)|[工作(WORK)](module/Base/work)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_PROJECT_COMMON_FLOW](der/DERCUSTOM_PROJECT_COMMON_FLOW)|[通用规则(COMMON_FLOW)](module/Base/common_flow)|自定义关系||
|[DERINDEX_PROJECT_REFERENCES_INDEX](der/DERINDEX_PROJECT_REFERENCES_INDEX)|[引用索引(REFERENCES_INDEX)](module/Base/references_index)|索引关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#project_Create)|||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|CreateTempMajor|CreateTempMajor|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#project_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|GetDraftTemp|GetDraftTemp|内置方法|默认|不支持||||
|GetDraftTempMajor|GetDraftTempMajor|内置方法|默认|不支持||||
|GetTemp|GetTemp|内置方法|默认|不支持||||
|GetTempMajor|GetTempMajor|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|RemoveTemp|RemoveTemp|内置方法|默认|支持||||
|RemoveTempMajor|RemoveTempMajor|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#project_Update)|||
|UpdateTemp|UpdateTemp|内置方法|默认|不支持||||
|UpdateTempMajor|UpdateTempMajor|内置方法|默认|不支持||||
|激活|activate|[实体处理逻辑](module/ProjMgmt/project/logic/activate "激活")|默认|不支持||||
|归档|archive|[实体处理逻辑](module/ProjMgmt/project/logic/archive "归档")|默认|不支持||||
|删除|delete|[实体处理逻辑](module/ProjMgmt/project/logic/delete "删除")|默认|不支持||||
|设置星标|favorite|[实体处理逻辑](module/ProjMgmt/project/logic/favorite "设置星标")|默认|不支持||||
|获取主数据|get_major_data|用户自定义|默认|不支持|[附加操作](index/action_logic_index#project_get_major_data)|||
|其他实体关联空间|other_re_space|[实体处理逻辑](module/ProjMgmt/project/logic/other_re_space "其他实体关联空间")|默认|不支持||||
|恢复|recover|[实体处理逻辑](module/ProjMgmt/project/logic/recover "恢复")|默认|不支持||||
|从项目集中移除|remove_from_project_set|[实体处理逻辑](module/ProjMgmt/project/logic/remove_from_project_set "从项目集中移除")|默认|不支持||||
|取消星标|un_favorite|[实体处理逻辑](module/ProjMgmt/project/logic/un_favorite "取消星标")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[从项目集中移除](module/ProjMgmt/project/logic/remove_from_project_set)|remove_from_project_set|无||从项目集中移除某个指定子项目|
|[其他实体关联空间](module/ProjMgmt/project/logic/other_re_space)|other_re_space|无||空间实体关联操作，生成正向，反向关联数据|
|[创建之前](module/ProjMgmt/project/logic/before_create)|before_create|无||创建项目之前，对添加的项目成员进行处理|
|[删除](module/ProjMgmt/project/logic/delete)|delete|无||项目数据的逻辑删除，修改产品的是否删除属性值|
|[取消星标](module/ProjMgmt/project/logic/un_favorite)|un_favorite|无||项目取消星标|
|[归档](module/ProjMgmt/project/logic/archive)|archive|无||未归档项目数据的归档处理，修改项目的归档状态为已归档|
|[恢复](module/ProjMgmt/project/logic/recover)|recover|无||恢复已删除状态项目数据，修改项目的是否删除属性值，并恢复访问记录|
|[批量更新最近访问父名称](module/ProjMgmt/project/logic/recent_parent_name)|recent_parent_name|属性逻辑||当项目名称变更时，触发此逻辑，批量对最近访问的父标识进行更新|
|[批量更新最近访问父标识](module/ProjMgmt/project/logic/recent_parent_identifier)|recent_parent_identifier|属性逻辑||当项目标识变更时，触发此逻辑，批量对最近访问的父标识进行更新|
|[是否删除变更附加逻辑](module/ProjMgmt/project/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||项目删除或恢复数据时触发相应的通知消息|
|[是否归档变更附加逻辑](module/ProjMgmt/project/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||项目归档或激活时触发相应的通知消息|
|[激活](module/ProjMgmt/project/logic/activate)|activate|无||激活已归档状态项目，修改项目的归档属性|
|[生成最近访问](module/ProjMgmt/project/logic/create_recent)|create_recent|无||在用户对项目数据进行了get或update操作时生成相应的访问记录|
|[生成默认看板](module/ProjMgmt/project/logic/create_default_board)|create_default_board|无||新建看板项目后，会附加生成出默认看板|
|[获取项目进度](module/ProjMgmt/project/logic/get_schedule)|get_schedule|无||通过已完成工作项数量/所有工作项数量，计算出此项目进度|
|[设置星标](module/ProjMgmt/project/logic/favorite)|favorite|无||设置为星标项目|
|[负责人变更附加逻辑](module/ProjMgmt/project/logic/assignee_id_onchange)|assignee_id_onchange|属性逻辑||项目负责人变更时触发相应的通知消息|
|[项目状态变更通知](module/ProjMgmt/project/logic/state_notify)|state_notify|属性逻辑||项目状态变更时触发相应的通知消息|

## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `是否星标(IS_FAVORITE)` 




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
    <td>取消星标(CANCEL_FAVORITE)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"></td>
    <td></td>
  </tr>
  <tr>
    <td>子数据权限(SUBDATA)</td>
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
    <td>更新(UPDATE)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>设置星标(ADD_FAVORITE)</td>
    <td align="center"></td>
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


## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProjMgmt/project/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/project/query/View)|VIEW|否|否 |否 ||
|[管理员(admin)](module/ProjMgmt/project/query/admin)|admin|否|否 |否 ||
|[已归档(archived)](module/ProjMgmt/project/query/archived)|archived|否|否 |否 ||
|[选择项目(choose_project)](module/ProjMgmt/project/query/choose_project)|choose_project|否|否 |否 ||
|[当前项目(current)](module/ProjMgmt/project/query/current)|current|否|否 |否 ||
|[已删除(deleted)](module/ProjMgmt/project/query/deleted)|deleted|否|否 |否 ||
|[查询星标(favorite)](module/ProjMgmt/project/query/favorite)|favorite|否|否 |否 ||
|[正常状态(normal)](module/ProjMgmt/project/query/normal)|normal|否|否 |否 ||
|[公开(public)](module/ProjMgmt/project/query/public)|public|否|否 |否 ||
|[只读用户(reader)](module/ProjMgmt/project/query/reader)|reader|否|否 |否 ||
|[相同类型工作项(same_type)](module/ProjMgmt/project/query/same_type)|same_type|否|否 |否 ||
|[项目集下的项目(under_project_portfolio)](module/ProjMgmt/project/query/under_project_portfolio)|under_project_portfolio|否|否 |否 ||
|[操作用户(user)](module/ProjMgmt/project/query/user)|user|否|否 |否 ||
|[项目集工作下的项目(work_project)](module/ProjMgmt/project/query/work_project)|work_project|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/project/dataset/Default)|DEFAULT|数据查询|是|||
|[管理员(admin)](module/ProjMgmt/project/dataset/admin)|admin|数据查询|否|||
|[已归档(archived)](module/ProjMgmt/project/dataset/archived)|archived|数据查询|否|||
|[选择项目(choose_project)](module/ProjMgmt/project/dataset/choose_project)|choose_project|数据查询|否|||
|[当前项目(current)](module/ProjMgmt/project/dataset/current)|current|数据查询|否|||
|[已删除(deleted)](module/ProjMgmt/project/dataset/deleted)|deleted|数据查询|否|||
|[查询星标(favorite)](module/ProjMgmt/project/dataset/favorite)|favorite|数据查询|否|||
|[正常状态(normal)](module/ProjMgmt/project/dataset/normal)|normal|数据查询|否|||
|[只读用户(reader)](module/ProjMgmt/project/dataset/reader)|reader|数据查询|否|||
|[相同类型工作项(same_type)](module/ProjMgmt/project/dataset/same_type)|same_type|数据查询|否|||
|[项目集下的项目(under_project_portfolio)](module/ProjMgmt/project/dataset/under_project_portfolio)|under_project_portfolio|数据查询|否|||
|[操作用户(user)](module/ProjMgmt/project/dataset/user)|user|数据查询|否|||
|[项目集工作下的项目(work_project)](module/ProjMgmt/project/dataset/work_project)|work_project|数据查询|否|||

## 数据权限

##### 管理员（读写） :id=project-ADMIN_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[管理员(admin)](module/ProjMgmt/project#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `READ`
* `SUBDATA`
* `DELETE`



##### 全部数据（读写） :id=project-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `SUBDATA`
* `READ`
* `CREATE`
* `UPDATE`



##### 全部数据（写） :id=project-ALL_W

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `UPDATE`
* `CREATE`



##### 只读用户（读） :id=project-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/ProjMgmt/project#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 普通用户（读写） :id=project-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[操作用户(user)](module/ProjMgmt/project#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `SUBDATA`



## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[项目归档/激活通知](module/ProjMgmt/project/notify/archived_notify)|archived_notify|[默认消息队列](index/notify_index)|[项目通知模板(归档/激活项目)](index/notify_index#project_archive)|当前项目成员 ||
|[项目分配负责人通知](module/ProjMgmt/project/notify/assignee_notify)|assignee_notify|[默认消息队列](index/notify_index)|[项目通知模板(分配负责人)](index/notify_index#project_assignee)|负责人 ||
|[项目变更负责人通知](module/ProjMgmt/project/notify/change_assignee_notify)|change_assignee_notify|[默认消息队列](index/notify_index)|[项目通知模板(变更负责人)](index/notify_index#project_change_assignee)|当前项目成员 ||
|[项目删除/恢复通知](module/ProjMgmt/project/notify/remove_notify)|remove_notify|[默认消息队列](index/notify_index)|[项目通知模板(删除/恢复项目)](index/notify_index#project_remove)|当前项目成员 ||
|[项目状态状态变更通知](module/ProjMgmt/project/notify/state_notify)|state_notify|[默认消息队列](index/notify_index)|[项目通知模板(项目状态变更)](index/notify_index#project_state_change)|当前项目成员 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_ID_NOTEQ|标识|NOTEQ||
|N_IDENTIFIER_EQ|项目标识|EQ||
|N_IDENTIFIER_LIKE|项目标识|LIKE||
|N_IS_ARCHIVED_EQ|是否已归档|EQ||
|N_IS_DELETED_EQ|是否已删除|EQ||
|N_IS_FAVORITE_EQ|是否星标|EQ||
|N_NAME_LIKE|项目名称|LIKE||
|N_STATE_EQ|状态|EQ||
|N_TYPE_EQ|类型|EQ||
|N_VISIBILITY_EQ|可见范围|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 打开项目配置(全局) | open_global_setting | 项目配置 |无数据|<details><summary>打开视图或向导（模态）</summary>[项目管理](app/view/project_config_tree_exp_view)</details>||
| 取消星标 | cancel_favorite | 取消星标 |单项数据（主键）|<details><summary>后台调用</summary>[un_favorite](#行为)||
| 项目成员 | open_project_member | 项目成员 |单项数据（主键）|用户自定义||
| 已删除_恢复 | recover | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)||
| 编辑基本信息 | open_edit_view | 编辑基本信息 |单项数据（主键）|用户自定义||
| 设置星标 | add_favorite | 设置星标 |单项数据（主键）|<details><summary>后台调用</summary>[favorite](#行为)||
| 进行中_删除 | in_progress_into_deleted | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 打开项目主视图（scrum） | open_project_main_view_scrum | 打开项目主视图（scrum） |单项数据（主键）|<details><summary>打开顶级视图</summary>[项目](app/view/project_scrum_main_view)</details>||
| 打开项目主视图（kanban） | open_project_main_view_kanban | 打开项目主视图（kanban） |单项数据（主键）|<details><summary>打开顶级视图</summary>[项目](app/view/project_kanban_main_view)</details>||
| 进行中_归档 | archive | 归档 |单项数据（主键）|<details><summary>后台调用</summary>[archive](#行为)||
| 打开项目导航页 | open_project_exp_view | 打开项目导航页 |无数据|<details><summary>打开顶级视图</summary>[项目管理](app/view/project_tree_exp_view)</details>||
| 更多设置 | open_setting_view | 更多设置 |单项数据（主键）|用户自定义||
| 回收站 | open_deleted_project | 回收站 |单项数据（主键）|用户自定义||
| 项目信息 | open_show_view | 项目信息 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[项目信息](app/view/project_show_edit_view)</details>||
| 已归档_激活 | activate | 激活 |单项数据（主键）|<details><summary>后台调用</summary>[activate](#行为)||
| 从项目集中移除 | remove_from_project_set | 移除 |单项数据（主键）|<details><summary>后台调用</summary>[remove_from_project_set](#行为)||
| 已归档_删除 | archived_delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 根据类型打开项目主视图 | open_project_main_view | 打开项目主视图 |单项数据（主键）|<details><summary>打开顶级视图</summary>[项目](app/view/project_redirect_view)</details>||
| 新开窗口（项目） | open_new | 新窗口打开 |单项数据（主键）|<details><summary>打开HTML页面</summary>*./#/-/index/project=${data.id}/project_redirect_view/project=${data.id}*</details>||
| 打开项目主视图（waterfall） | open_project_main_view_waterfall | 打开项目主视图（waterfall） |单项数据（主键）|<details><summary>打开顶级视图</summary>[项目](app/view/project_waterfall_main_view)</details>||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[刷新当前表格](module/ProjMgmt/project/uilogic/refresh_current_grid)|refresh_current_grid|刷新当前视图的表格|
|[批量删除项目成员临时数据](module/ProjMgmt/project/uilogic/remove_batch_temp)|remove_batch_temp|获取项目内所有临时成员数据并删除|
|[根据类型跳转项目主视图](module/ProjMgmt/project/uilogic/open_project_main_view)|open_project_main_view|判断类型跳转不同的项目主视图|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProjMgmt/project?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/project?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/project?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/project?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/project?id=主状态控制`">
  主状态控制
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/project?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/project?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/project?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/project?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/project?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/project?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/project?id=界面逻辑`">
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
show_field_group:'field_group_redirctDEFGroup',

      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>