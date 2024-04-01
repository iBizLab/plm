# 测试库(Library)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|测试库标识|IDENTIFIER|文本，可指定长度|100|[默认规则](module/TestMgmt/Library/value_rule/Identifier#default)||√||
|可见范围|VISIBILITY|单项选择(文本值)|60|[默认规则](module/TestMgmt/Library/value_rule/Visibility#default)||||
|主题色|COLOR|文本，可指定长度|100|[默认规则](module/TestMgmt/Library/value_rule/Color#default)||||
|描述|DESCRIPTION|长文本，长度1000|2000|[默认规则](module/TestMgmt/Library/value_rule/Description#default)||||
|是否已归档|IS_ARCHIVED|是否逻辑|0|||||
|是否已删除|IS_DELETED|是否逻辑|0|||||
|是否星标|IS_FAVORITE|文本，可指定长度|200|[默认规则](module/TestMgmt/Library/value_rule/Is_favorite#default)||||
|成员|MEMBERS|一对多关系数据集合|1048576|[默认规则](module/TestMgmt/Library/value_rule/Members#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/TestMgmt/Library/value_rule/Id#default)||||
|测试库名称|NAME|文本，可指定长度|200|[默认规则](module/TestMgmt/Library/value_rule/Name#default)||√||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Library/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Library/value_rule/Update_man#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID](der/DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID)|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member)|1:N关系||
|[DER1N_TEST_CASE_LIBRARY_TEST_LIBRARY_ID](der/DER1N_TEST_CASE_LIBRARY_TEST_LIBRARY_ID)|[用例(TEST_CASE)](module/TestMgmt/Test_case)|1:N关系||
|[DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID](der/DER1N_TEST_PLAN_LIBRARY_LIBRARY_ID)|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan)|1:N关系||
|[DER1N_TEST_SUITE_LIBRARY_LIBRARY_ID](der/DER1N_TEST_SUITE_LIBRARY_LIBRARY_ID)|[用例模块(TEST_SUITE)](module/TestMgmt/Test_suite)|1:N关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DERINDEX_LIBRARY_REFERENCES_INDEX](der/DERINDEX_LIBRARY_REFERENCES_INDEX)|[引用索引(REFERENCES_INDEX)](module/Base/References_index)|索引关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#Library_Create)|||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|CreateTempMajor|CreateTempMajor|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#Library_Update)|||
|UpdateTemp|UpdateTemp|内置方法|默认|不支持||||
|UpdateTempMajor|UpdateTempMajor|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|RemoveTemp|RemoveTemp|内置方法|默认|支持||||
|RemoveTempMajor|RemoveTempMajor|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#Library_Get)|||
|GetTemp|GetTemp|内置方法|默认|不支持||||
|GetTempMajor|GetTempMajor|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|GetDraftTemp|GetDraftTemp|内置方法|默认|不支持||||
|GetDraftTempMajor|GetDraftTempMajor|内置方法|默认|不支持||||
|激活|Activate|[实体处理逻辑](module/TestMgmt/Library/logic/activate "激活")|默认|不支持||||
|归档|Archive|[实体处理逻辑](module/TestMgmt/Library/logic/archive "归档")|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|删除|Delete|[实体处理逻辑](module/TestMgmt/Library/logic/delete "删除")|默认|不支持||||
|设置星标|Favorite|[实体处理逻辑](module/TestMgmt/Library/logic/favorite "设置星标")|默认|不支持||||
|恢复|Recover|[实体处理逻辑](module/TestMgmt/Library/logic/recover "恢复")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||
|取消星标|Un_favorite|[实体处理逻辑](module/TestMgmt/Library/logic/un_favorite "取消星标")|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[激活](module/TestMgmt/Library/logic/activate)|activate|无|||
|[归档](module/TestMgmt/Library/logic/archive)|archive|无|||
|[创建之前](module/TestMgmt/Library/logic/before_create)|before_create|无|||
|[生成最近访问](module/TestMgmt/Library/logic/create_recent)|create_recent|无|||
|[删除](module/TestMgmt/Library/logic/delete)|delete|无|||
|[设置星标](module/TestMgmt/Library/logic/favorite)|favorite|无|||
|[是否归档变更附加逻辑](module/TestMgmt/Library/logic/is_archived_onchange)|is_archived_onchange|属性逻辑|||
|[是否删除变更附加逻辑](module/TestMgmt/Library/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑|||
|[批量更新最近访问父标识](module/TestMgmt/Library/logic/recent_parent_identifier)|recent_parent_identifier|属性逻辑|||
|[批量更新最近访问父名称](module/TestMgmt/Library/logic/recent_parent_name)|recent_parent_name|属性逻辑|||
|[恢复](module/TestMgmt/Library/logic/recover)|recover|无|||
|[进行中_设置管理员](module/TestMgmt/Library/logic/set_admin)|set_admin|无|||
|[取消星标](module/TestMgmt/Library/logic/un_favorite)|un_favorite|无|||


## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `是否星标(IS_FAVORITE)` 



> 控制属性未配置代码表，或者代码表未配置代码项



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[管理员(admin)](module/TestMgmt/Library/query/Admin)|admin|否|否 |否 ||
|[已归档(archived)](module/TestMgmt/Library/query/Archived)|archived|否|否 |否 ||
|[数据查询(DEFAULT)](module/TestMgmt/Library/query/Default)|DEFAULT|是|否 |否 ||
|[已删除(deleted)](module/TestMgmt/Library/query/Deleted)|deleted|否|否 |否 ||
|[查询星标(favorite)](module/TestMgmt/Library/query/Favorite)|favorite|否|否 |否 ||
|[正常状态(normal)](module/TestMgmt/Library/query/Normal)|normal|否|否 |否 ||
|[与项目关联的测试库(project_relation_library)](module/TestMgmt/Library/query/Project_relation_library)|project_relation_library|否|否 |否 |通过测试计划中进行关联项目展示测试库|
|[普通成员(user)](module/TestMgmt/Library/query/User)|user|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/Library/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[管理员(admin)](module/TestMgmt/Library/dataset/Admin)|admin|数据查询|否|||
|[已归档(archived)](module/TestMgmt/Library/dataset/Archived)|archived|数据查询|否|||
|[数据集(DEFAULT)](module/TestMgmt/Library/dataset/Default)|DEFAULT|数据查询|是|||
|[已删除(deleted)](module/TestMgmt/Library/dataset/Deleted)|deleted|数据查询|否|||
|[查询星标(favorite)](module/TestMgmt/Library/dataset/Favorite)|favorite|数据查询|否|||
|[正常状态(normal)](module/TestMgmt/Library/dataset/Normal)|normal|数据查询|否|||
|[与项目关联的测试库(project_relation_library)](module/TestMgmt/Library/dataset/Project_relation_library)|project_relation_library|数据查询|否|||
|[操作用户(user)](module/TestMgmt/Library/dataset/User)|user|数据查询|否|||


## 数据权限

##### 管理员（读写） :id=Library-ADMIN_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[管理员(admin)](module/TestMgmt/Library#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `SUBDATA`
* `DELETE`
* `UPDATE`



##### 全部数据（读写） :id=Library-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `SUBDATA`
* `DELETE`
* `READ`
* `UPDATE`
* `CREATE`



##### 全部数据（写） :id=Library-ALL_W

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `DELETE`
* `CREATE`



##### 普通用户（读写） :id=Library-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[操作用户(user)](module/TestMgmt/Library#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `SUBDATA`
* `READ`




## 消息通知

|    名称   | 代码名       |  消息队列   |  消息模板 |  通知目标     |  备注  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[测试库归档/激活通知](module/TestMgmt/Library/notify/library_archive_notify)|library_archive_notify|[默认消息队列](index/notify_index)|[测试库通知模板(归档/激活测试库)](index/notify_index#library_archive)|当前测试库成员 ||
|[测试库删除/恢复通知](module/TestMgmt/Library/notify/library_remove_notify)|library_remove_notify|[默认消息队列](index/notify_index)|[测试库通知模板(删除/恢复测试库)](index/notify_index#library_remove)|当前测试库成员 ||


## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_VISIBILITY_EQ|可见范围|EQ|
|N_IS_ARCHIVED_EQ|是否已归档|EQ|
|N_IS_DELETED_EQ|是否已删除|EQ|
|N_IS_FAVORITE_EQ|是否星标|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|测试库名称|LIKE|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 打开测试库配置 | open_global_setting | 测试库配置 |无数据|<details><summary>打开视图或向导（模态）</summary>[测试库配置](app/view/librarytree_exp_view_config)</details>|否|无||
| 取消星标 | unstar | 取消星标 |单项数据（主键）|<details><summary>后台调用</summary>[Un_favorite](#行为)|是|引用树节点父节点||
| 更多设置 | open_details_setting_view | 更多设置 |单项数据（主键）|用户自定义|否|无||
| 测试库信息 | open_show_edit_view | 测试库信息 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[测试库信息](app/view/libraryshow_edit_view)</details>|否|无||
| 恢复 | recover | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[Recover](#行为)|是|引用视图或树节点||
| 回收站 | open_deleted_view | 回收站 |单项数据（主键）|用户自定义|否|无||
| 设置星标 | star | 设置星标 |单项数据（主键）|<details><summary>后台调用</summary>[Favorite](#行为)|是|引用树节点父节点||
| 进行中_归档 | archive | 归档 |单项数据（主键）|<details><summary>后台调用</summary>[Archive](#行为)|是|引用视图或树节点||
| 删除 | delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Delete](#行为)|是|引用视图或树节点||
| 打开测试库导航页 | open_library_exp_view | 打开测试库导航页 |无数据|<details><summary>打开顶级视图</summary>[测试管理](app/view/librarytree_exp_view)</details>|否|无||
| 测试库成员 | setting_library_member | 测试库成员 |单项数据（主键）|用户自定义|否|无||
| 已归档_激活 | activate | 激活 |单项数据（主键）|<details><summary>后台调用</summary>[Activate](#行为)|是|引用视图或树节点||
| 编辑基本信息 | setting_base_info | 编辑基本信息 |单项数据（主键）|用户自定义|否|无||
| 新开窗口（测试库） | open_new | 新窗口打开 |单项数据（主键）|<details><summary>打开HTML页面</summary>*./#/-/index/library=${data.id}/libraryindex_view/srfnav=usrdrgroup1227882118/test_plantree_exp_view/srfnav=root%3Anode/test_plangrid_view_all/n_library_id_eq=${data.id}*</details>|否|无||
| 打开测试库主视图 | open_index_view | 打开测试库主视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[测试库](app/view/libraryindex_view)</details>|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[批量删除测试库成员临时数据](module/TestMgmt/Library/uilogic/remove_batch_temp)|remove_batch_temp|
|[刷新当前表格](module/TestMgmt/Library/uilogic/refresh_current_grid)|refresh_current_grid|
