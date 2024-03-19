# 项目(Project)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|可见范围|VISIBILITY|单项选择(文本值)|60|[默认规则](module/ProjMgmt/Project/value_rule/Visibility#default)||||
|状态|STATE|[单项选择(文本值)](index/dictionary_index#Project_state "项目状态")|60|[默认规则](module/ProjMgmt/Project/value_rule/State#default)||||
|开始时间|START_AT|日期型|0|||||
|结束时间|END_AT|日期型|0|||||
|类型|TYPE|[单项选择(文本值)](index/dictionary_index#Project_type "项目类型")|60|[默认规则](module/ProjMgmt/Project/value_rule/Type#default)||||
|主题色|COLOR|文本，可指定长度|100|[默认规则](module/ProjMgmt/Project/value_rule/Color#default)||||
|项目标识|IDENTIFIER|文本，可指定长度|100|[默认规则](module/ProjMgmt/Project/value_rule/Identifier#default)||√||
|是否已归档|IS_ARCHIVED|是否逻辑|0|||||
|描述|DESCRIPTION|长文本，长度1000|2000|[默认规则](module/ProjMgmt/Project/value_rule/Description#default)||||
|是否已删除|IS_DELETED|是否逻辑|0|||||
|是否星标|IS_FAVORITE|文本，可指定长度|200|[默认规则](module/ProjMgmt/Project/value_rule/Is_favorite#default)||||
|是否本地配置|IS_LOCAL_CONFIGURE|是否逻辑|0|||||
|成员|MEMBERS|一对多关系数据集合|1048576|[默认规则](module/ProjMgmt/Project/value_rule/Members#default)||||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|[默认规则](module/ProjMgmt/Project/value_rule/Assignee_name#default)||||
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|[默认规则](module/ProjMgmt/Project/value_rule/Assignee_id#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProjMgmt/Project/value_rule/Id#default)||||
|项目名称|NAME|文本，可指定长度|200|[默认规则](module/ProjMgmt/Project/value_rule/Name#default)||√||
|建立时间|CREATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Project/value_rule/Create_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Project/value_rule/Update_man#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_BOARD_PROJECT_PROJECT_ID](der/DER1N_BOARD_PROJECT_PROJECT_ID)|[看板(BOARD)](module/ProjMgmt/Board)|1:N关系||
|[DER1N_ENTRY_PROJECT_PROJECT_ID](der/DER1N_ENTRY_PROJECT_PROJECT_ID)|[看板栏(ENTRY)](module/ProjMgmt/Entry)|1:N关系||
|[DER1N_PROGRESS_PROJECT_PROJECT_ID](der/DER1N_PROGRESS_PROJECT_PROJECT_ID)|[项目进度(PROGRESS)](module/ProjMgmt/Progress)|1:N关系||
|[DER1N_PROJECT_MEMBER_PROJECT_PROJECT_ID](der/DER1N_PROJECT_MEMBER_PROJECT_PROJECT_ID)|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member)|1:N关系||
|[DER1N_RELEASE_PROJECT_PROJECT_ID](der/DER1N_RELEASE_PROJECT_PROJECT_ID)|[项目发布(RELEASE)](module/ProjMgmt/Release)|1:N关系||
|[DER1N_SPRINT_CATEGORY_PROJECT_PROJECT_ID](der/DER1N_SPRINT_CATEGORY_PROJECT_PROJECT_ID)|[迭代类别(SPRINT_CATEGORY)](module/ProjMgmt/Sprint_category)|1:N关系||
|[DER1N_SPRINT_PROJECT_PROJECT_ID](der/DER1N_SPRINT_PROJECT_PROJECT_ID)|[迭代(SPRINT)](module/ProjMgmt/Sprint)|1:N关系||
|[DER1N_SPRINT_SECTION_PROJECT_PROJECT_ID](der/DER1N_SPRINT_SECTION_PROJECT_PROJECT_ID)|[迭代分组(SPRINT_SECTION)](module/ProjMgmt/Sprint_section)|1:N关系||
|[DER1N_SWIMLANE_PROJECT_PROJECT_ID](der/DER1N_SWIMLANE_PROJECT_PROJECT_ID)|[泳道(SWIMLANE)](module/ProjMgmt/Swimlane)|1:N关系||
|[DER1N_TEST_PLAN_PROJECT_PROJECT_ID](der/DER1N_TEST_PLAN_PROJECT_PROJECT_ID)|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|1:N关系||
|[DER1N_VERSION_PROJECT_PROJECT_ID](der/DER1N_VERSION_PROJECT_PROJECT_ID)|[版本（temp）(VERSION)](module/ProjMgmt/Version)|1:N关系||
|[DER1N_VERSION_SECTION_PROJECT_PROJECT_ID](der/DER1N_VERSION_SECTION_PROJECT_PROJECT_ID)|[发布分组(VERSION_SECTION)](module/ProjMgmt/Version_section)|1:N关系||
|[DER1N_WORK_ITEM_PROJECT_PROJECT_ID](der/DER1N_WORK_ITEM_PROJECT_PROJECT_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|1:N关系||
|[DERCCUSTOM_FAVORITE_PROJECT](der/DERCCUSTOM_FAVORITE_PROJECT)|[收藏(FAVORITE)](module/Base/Favorite)|自定义关系||
|[DERCUSTOM_WORK_PROJECT_PILOT_ID](der/DERCUSTOM_WORK_PROJECT_PILOT_ID)|[工作(WORK)](module/Base/Work)|自定义关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DERINDEX_PROJECT_REFERENCES_INDEX](der/DERINDEX_PROJECT_REFERENCES_INDEX)|[引用索引(REFERENCES_INDEX)](module/Base/References_index)|索引关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#Project_Create)|||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|CreateTempMajor|CreateTempMajor|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#Project_Update)|||
|UpdateTemp|UpdateTemp|内置方法|默认|不支持||||
|UpdateTempMajor|UpdateTempMajor|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|RemoveTemp|RemoveTemp|内置方法|默认|支持||||
|RemoveTempMajor|RemoveTempMajor|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#Project_Get)|||
|GetTemp|GetTemp|内置方法|默认|不支持||||
|GetTempMajor|GetTempMajor|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|GetDraftTemp|GetDraftTemp|内置方法|默认|不支持||||
|GetDraftTempMajor|GetDraftTempMajor|内置方法|默认|不支持||||
|激活|Activate|[实体处理逻辑](module/ProjMgmt/Project/logic/activate "激活")|默认|不支持||||
|归档|Archive|[实体处理逻辑](module/ProjMgmt/Project/logic/archive "归档")|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|删除|Delete|[实体处理逻辑](module/ProjMgmt/Project/logic/delete "删除")|默认|不支持||||
|设置星标|Favorite|[实体处理逻辑](module/ProjMgmt/Project/logic/favorite "设置星标")|默认|不支持||||
|获取主数据|Get_major_data|用户自定义|默认|不支持|[附加操作](index/action_logic_index#Project_get_major_data)|||
|恢复|Recover|[实体处理逻辑](module/ProjMgmt/Project/logic/recover "恢复")|默认|不支持||||
|从项目集中移除|Remove_from_project_set|[实体处理逻辑](module/ProjMgmt/Project/logic/remove_from_project_set "从项目集中移除")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||
|取消星标|Un_favorite|[实体处理逻辑](module/ProjMgmt/Project/logic/un_favorite "取消星标")|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[激活](module/ProjMgmt/Project/logic/activate)|activate|无|||
|[归档](module/ProjMgmt/Project/logic/archive)|archive|无|||
|[创建之前](module/ProjMgmt/Project/logic/before_create)|before_create|无|||
|[生成默认看板](module/ProjMgmt/Project/logic/create_default_board)|create_default_board|无|||
|[生成最近访问](module/ProjMgmt/Project/logic/create_recent)|create_recent|无|||
|[删除](module/ProjMgmt/Project/logic/delete)|delete|无|||
|[设置星标](module/ProjMgmt/Project/logic/favorite)|favorite|无|||
|[获取项目进度](module/ProjMgmt/Project/logic/get_schedule)|get_schedule|无|||
|[是否归档变更附加逻辑](module/ProjMgmt/Project/logic/is_archived_onchange)|is_archived_onchange|属性逻辑|||
|[是否删除变更附加逻辑](module/ProjMgmt/Project/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑|||
|[批量更新最近访问父标识](module/ProjMgmt/Project/logic/recent_parent_identifier)|recent_parent_identifier|属性逻辑|||
|[批量更新最近访问父名称](module/ProjMgmt/Project/logic/recent_parent_name)|recent_parent_name|属性逻辑|||
|[恢复](module/ProjMgmt/Project/logic/recover)|recover|无|||
|[从项目集中移除](module/ProjMgmt/Project/logic/remove_from_project_set)|remove_from_project_set|无|||
|[项目状态变更通知](module/ProjMgmt/Project/logic/state_notify)|state_notify|属性逻辑|||
|[取消星标](module/ProjMgmt/Project/logic/un_favorite)|un_favorite|无|||


## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `是否星标(IS_FAVORITE)` 



> 控制属性未配置代码表，或者代码表未配置代码项



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[管理员(admin)](module/ProjMgmt/Project/query/Admin)|admin|否|否 |否 ||
|[已归档(archived)](module/ProjMgmt/Project/query/Archived)|archived|否|否 |否 ||
|[选择项目(choose_project)](module/ProjMgmt/Project/query/Choose_project)|choose_project|否|否 |否 ||
|[当前项目(current)](module/ProjMgmt/Project/query/Current)|current|否|否 |否 ||
|[数据查询(DEFAULT)](module/ProjMgmt/Project/query/Default)|DEFAULT|是|否 |否 ||
|[已删除(deleted)](module/ProjMgmt/Project/query/Deleted)|deleted|否|否 |否 ||
|[查询星标(favorite)](module/ProjMgmt/Project/query/Favorite)|favorite|否|否 |否 ||
|[正常状态(normal)](module/ProjMgmt/Project/query/Normal)|normal|否|否 |否 ||
|[相同类型工作项(same_type)](module/ProjMgmt/Project/query/Same_type)|same_type|否|否 |否 ||
|[项目集下的项目(under_project_portfolio)](module/ProjMgmt/Project/query/Under_project_portfolio)|under_project_portfolio|否|否 |否 ||
|[操作用户(user)](module/ProjMgmt/Project/query/User)|user|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/Project/query/View)|VIEW|否|否 |否 ||
|[项目集工作下的项目(work_project)](module/ProjMgmt/Project/query/Work_project)|work_project|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[管理员(admin)](module/ProjMgmt/Project/dataset/Admin)|admin|数据查询|否|||
|[已归档(archived)](module/ProjMgmt/Project/dataset/Archived)|archived|数据查询|否|||
|[选择项目(choose_project)](module/ProjMgmt/Project/dataset/Choose_project)|choose_project|数据查询|否|||
|[当前项目(current)](module/ProjMgmt/Project/dataset/Current)|current|数据查询|否|||
|[数据集(DEFAULT)](module/ProjMgmt/Project/dataset/Default)|DEFAULT|数据查询|是|||
|[已删除(deleted)](module/ProjMgmt/Project/dataset/Deleted)|deleted|数据查询|否|||
|[查询星标(favorite)](module/ProjMgmt/Project/dataset/Favorite)|favorite|数据查询|否|||
|[正常状态(normal)](module/ProjMgmt/Project/dataset/Normal)|normal|数据查询|否|||
|[相同类型工作项(same_type)](module/ProjMgmt/Project/dataset/Same_type)|same_type|数据查询|否|||
|[项目集下的项目(under_project_portfolio)](module/ProjMgmt/Project/dataset/Under_project_portfolio)|under_project_portfolio|数据查询|否|||
|[操作用户(user)](module/ProjMgmt/Project/dataset/User)|user|数据查询|否|||
|[项目集工作下的项目(work_project)](module/ProjMgmt/Project/dataset/Work_project)|work_project|数据查询|否|||


## 数据权限

##### 管理员（读写） :id=Project-ADMIN_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[管理员(admin)](module/ProjMgmt/Project#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `UPDATE`
* `SUBDATA`
* `READ`



##### 全部数据（读写） :id=Project-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `READ`
* `SUBDATA`
* `UPDATE`
* `CREATE`



##### 全部数据（写） :id=Project-ALL_W

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `UPDATE`
* `CREATE`



##### 普通用户（读写） :id=Project-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[操作用户(user)](module/ProjMgmt/Project#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `SUBDATA`
* `READ`




## 消息通知

|    名称   | 代码名       |  消息队列   |  消息模板 |  通知目标     |  备注  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[项目归档/激活通知](module/ProjMgmt/Project/notify/archived_notify)|archived_notify|[默认消息队列](index/notify_index)|[项目通知模板(归档/激活项目)](index/notify_index#project_archive)|当前项目成员 ||
|[项目删除/恢复通知](module/ProjMgmt/Project/notify/remove_notify)|remove_notify|[默认消息队列](index/notify_index)|[项目通知模板(删除/恢复项目)](index/notify_index#project_remove)|当前项目成员 ||
|[项目状态状态变更通知](module/ProjMgmt/Project/notify/state_notify)|state_notify|[默认消息队列](index/notify_index)|[项目通知模板(项目状态变更)](index/notify_index#project_state_change)|当前项目成员 ||


## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_VISIBILITY_EQ|可见范围|EQ|
|N_STATE_EQ|状态|EQ|
|N_TYPE_EQ|类型|EQ|
|N_IDENTIFIER_LIKE|项目标识|LIKE|
|N_IS_ARCHIVED_EQ|是否已归档|EQ|
|N_IS_DELETED_EQ|是否已删除|EQ|
|N_IS_FAVORITE_EQ|是否星标|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|项目名称|LIKE|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 打开项目配置(全局) | open_global_setting | 项目配置 |无数据|<details><summary>打开视图或向导（模态）</summary>[项目管理](app/view/projecttree_exp_view_config)</details>|否|无||
| 取消星标 | cancel_favorite | 取消星标 |单项数据（主键）|<details><summary>后台调用</summary>[Un_favorite](#行为)|是|引用树节点父节点||
| 项目成员 | open_project_member | 项目成员 |单项数据（主键）|用户自定义|否|无||
| 已删除_恢复 | recover | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[Recover](#行为)|是|引用视图或树节点||
| 编辑基本信息 | open_edit_view | 编辑基本信息 |单项数据（主键）|用户自定义|否|无||
| 设置星标 | add_favorite | 设置星标 |单项数据（主键）|<details><summary>后台调用</summary>[Favorite](#行为)|是|引用树节点父节点||
| 进行中_删除 | in_progress_into_deleted | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Delete](#行为)|是|引用视图或树节点||
| 打开项目主视图（scrum） | open_project_main_view_scrum | 打开项目主视图（scrum） |单项数据（主键）|<details><summary>打开顶级视图</summary>[项目](app/view/projectmain_view_scrum)</details>|否|无||
| 打开项目主视图（kanban） | open_project_main_view_kanban | 打开项目主视图（kanban） |单项数据（主键）|<details><summary>打开顶级视图</summary>[项目](app/view/projectmain_view_kanban)</details>|否|无||
| 进行中_归档 | archive | 归档 |单项数据（主键）|<details><summary>后台调用</summary>[Archive](#行为)|是|引用视图或树节点||
| 打开项目导航页 | open_project_exp_view | 打开项目导航页 |无数据|<details><summary>打开顶级视图</summary>[项目管理](app/view/projecttree_exp_view)</details>|否|无||
| 更多设置 | open_setting_view | 更多设置 |单项数据（主键）|用户自定义|否|无||
| 回收站 | open_deleted_project | 回收站 |单项数据（主键）|用户自定义|否|无||
| 项目信息 | open_show_view | 项目信息 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[项目信息](app/view/projectshow_edit_view)</details>|否|无||
| 已归档_激活 | activate | 激活 |单项数据（主键）|<details><summary>后台调用</summary>[Activate](#行为)|是|引用视图或树节点||
| 从项目集中移除 | remove_from_project_set | 移除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove_from_project_set](#行为)|是|引用树节点父节点||
| 已归档_删除 | archived_delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Delete](#行为)|是|引用视图或树节点||
| 根据类型打开项目主视图 | open_project_main_view | 打开项目主视图 |单项数据（主键）|<details><summary>打开顶级视图</summary>[项目](app/view/projectRedirectView)</details>|否|无||
| 新开窗口（项目） | open_new | 新窗口打开 |单项数据（主键）|<details><summary>打开HTML页面</summary>*./#/-/index/project=${data.id}/projectRedirectView/project=${data.id}*</details>|否|无||
| 打开项目主视图（waterfall） | open_project_main_view_waterfall | 打开项目主视图（waterfall） |单项数据（主键）|<details><summary>打开顶级视图</summary>[项目](app/view/projectmain_view_waterfall)</details>|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[批量删除项目成员临时数据](module/ProjMgmt/Project/uilogic/remove_batch_temp)|remove_batch_temp|
|[根据类型跳转项目主视图](module/ProjMgmt/Project/uilogic/open_project_main_view)|open_project_main_view|
|[刷新当前表格](module/ProjMgmt/Project/uilogic/refresh_current_grid)|refresh_current_grid|
