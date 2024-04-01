# 文件夹(Portfolio)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|状态|STATE|[单项选择(文本值)](index/dictionary_index#Project_state "项目状态")|60|[默认规则](module/Base/Portfolio/value_rule/State#default)||||
|开始时间|START_AT|日期型|0|||||
|结束时间|END_AT|日期型|0|||||
|文件夹标识|IDENTIFIER|文本，可指定长度|100|[默认规则](module/Base/Portfolio/value_rule/Identifier#default)||√||
|描述|DESCRIPTION|长文本，长度1000|2000|[默认规则](module/Base/Portfolio/value_rule/Description#default)||||
|是否已删除|IS_DELETED|是否逻辑|0|||||
|是否星标|IS_FAVORITE|文本，可指定长度|200|[默认规则](module/Base/Portfolio/value_rule/Is_favorite#default)||||
|项目集成员|MEMBERS|一对多关系数据集合|1048576|[默认规则](module/Base/Portfolio/value_rule/Members#default)||||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|[默认规则](module/Base/Portfolio/value_rule/Assignee_name#default)||||
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|[默认规则](module/Base/Portfolio/value_rule/Assignee_id#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Portfolio/value_rule/Create_man#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Portfolio/value_rule/Id#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/Portfolio/value_rule/Name#default)||√||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Portfolio/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_PORTFOLIO_MEMBER_PORTFOLIO_PORTFOLIO_ID](der/DER1N_PORTFOLIO_MEMBER_PORTFOLIO_PORTFOLIO_ID)|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/Portfolio_member)|1:N关系||
|[DER1N_WORK_PORTFOLIO_PORTFOLIO_ID](der/DER1N_WORK_PORTFOLIO_PORTFOLIO_ID)|[工作(WORK)](module/Base/Work)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持||||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|CreateTempMajor|CreateTempMajor|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|UpdateTemp|UpdateTemp|内置方法|默认|不支持||||
|UpdateTempMajor|UpdateTempMajor|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|RemoveTemp|RemoveTemp|内置方法|默认|支持||||
|RemoveTempMajor|RemoveTempMajor|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持||||
|GetTemp|GetTemp|内置方法|默认|不支持||||
|GetTempMajor|GetTempMajor|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|GetDraftTemp|GetDraftTemp|内置方法|默认|不支持||||
|GetDraftTempMajor|GetDraftTempMajor|内置方法|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|删除项目集|Delete_project_set|[实体处理逻辑](module/Base/Portfolio/logic/delete_project_set "删除项目集")|默认|不支持||||
|设置星标|Favorite|[实体处理逻辑](module/Base/Portfolio/logic/favorite "设置星标")|默认|不支持||||
|恢复项目集|Recover_project_set|[实体处理逻辑](module/Base/Portfolio/logic/recover_project_set "恢复项目集")|默认|不支持||||
|从项目集中移除|Remove_from_project_set|[实体处理逻辑](module/Base/Portfolio/logic/remove_from_project_set "从项目集中移除")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||
|取消星标|Un_favorite|[实体处理逻辑](module/Base/Portfolio/logic/un_favorite "取消星标")|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[删除项目集](module/Base/Portfolio/logic/delete_project_set)|delete_project_set|无|||
|[设置星标](module/Base/Portfolio/logic/favorite)|favorite|无|||
|[恢复项目集](module/Base/Portfolio/logic/recover_project_set)|recover_project_set|无|||
|[从项目集中移除](module/Base/Portfolio/logic/remove_from_project_set)|remove_from_project_set|无|||
|[取消星标](module/Base/Portfolio/logic/un_favorite)|un_favorite|无|||


## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `是否星标(IS_FAVORITE)` 



> 控制属性未配置代码表，或者代码表未配置代码项



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[管理员(admin)](module/Base/Portfolio/query/Admin)|admin|否|否 |否 ||
|[选择项目集(choose_project_portfolio)](module/Base/Portfolio/query/Choose_project_portfolio)|choose_project_portfolio|否|否 |否 ||
|[数据查询(DEFAULT)](module/Base/Portfolio/query/Default)|DEFAULT|是|否 |否 ||
|[查询星标(favorite)](module/Base/Portfolio/query/Favorite)|favorite|否|否 |否 ||
|[已删除的项目集(project_set_deleted)](module/Base/Portfolio/query/Project_set_deleted)|project_set_deleted|否|否 |否 ||
|[进行中的项目集(project_set_going)](module/Base/Portfolio/query/Project_set_going)|project_set_going|否|否 |否 ||
|[普通成员(user)](module/Base/Portfolio/query/User)|user|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/Portfolio/query/View)|VIEW|否|否 |否 ||
|[工作下的项目集(work_project_portfolio)](module/Base/Portfolio/query/Work_project_portfolio)|work_project_portfolio|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[管理员(admin)](module/Base/Portfolio/dataset/Admin)|admin|数据查询|否|||
|[选择项目集(choose_project_portfolio)](module/Base/Portfolio/dataset/Choose_project_portfolio)|choose_project_portfolio|数据查询|否|||
|[数据集(DEFAULT)](module/Base/Portfolio/dataset/Default)|DEFAULT|数据查询|是|||
|[查询星标(favorite)](module/Base/Portfolio/dataset/Favorite)|favorite|数据查询|否|||
|[已删除的项目集(project_set_deleted)](module/Base/Portfolio/dataset/Project_set_deleted)|project_set_deleted|数据查询|否|||
|[进行中的项目集(project_set_going)](module/Base/Portfolio/dataset/Project_set_going)|project_set_going|数据查询|否|||
|[普通成员(user)](module/Base/Portfolio/dataset/User)|user|数据查询|否|||
|[工作下的项目集(work_project_portfolio)](module/Base/Portfolio/dataset/Work_project_portfolio)|work_project_portfolio|数据查询|否|||


## 数据权限

##### 管理员（读写） :id=Portfolio-ADMIN_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[管理员(admin)](module/Base/Portfolio#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `SUBDATA`
* `UPDATE`
* `DELETE`
* `READ`



##### 全部数据（读写） :id=Portfolio-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `READ`
* `UPDATE`
* `CREATE`
* `SUBDATA`



##### 全部数据（写） :id=Portfolio-ALL_W

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `UPDATE`
* `DELETE`



##### 普通用户（读写） :id=Portfolio-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[普通成员(user)](module/Base/Portfolio#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `SUBDATA`
* `READ`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_STATE_EQ|状态|EQ|
|N_IDENTIFIER_LIKE|文件夹标识|LIKE|
|N_IS_FAVORITE_EQ|是否星标|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 删除项目集 | delete_project_set | 删除项目集 |单项数据（主键）|<details><summary>后台调用</summary>[Delete_project_set](#行为)|是|引用视图或树节点||
| 新开窗口（项目集） | open_new_project | 新窗口打开 |单项数据（主键）|<details><summary>打开HTML页面</summary>*./#/-/index/portfolio=${data.id}/portfolioproject_index_view/srfnav=drgroup/worktree_grid_ex_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D*</details>|否|无||
| 取消星标 | cancel_favorite | 取消星标 |单项数据（主键）|<details><summary>后台调用</summary>[Un_favorite](#行为)|是|引用树节点父节点||
| 项目集成员 | open_project_member | 项目集成员 |单项数据（主键）|用户自定义|否|无||
| 更多设置（项目集） | open_project_setting | 更多设置 |单项数据（主键）|用户自定义|否|无||
| 设置星标 | add_favorite | 设置星标 |单项数据（主键）|<details><summary>后台调用</summary>[Favorite](#行为)|是|引用树节点父节点||
| 恢复项目集 | recover_project_set | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[Recover_project_set](#行为)|是|引用视图或树节点||
| 从项目集中移除 | remove_from_project_set | 移除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove_from_project_set](#行为)|是|引用视图或树节点||
| 编辑基本信息（项目集） | open_project_edit_view | 编辑基本信息 |单项数据（主键）|用户自定义|否|无||
| 打开项目集主视图 | open_project_set_index_view | 打开项目集主视图 |单项数据（主键）|<details><summary>打开顶级视图</summary>[文件夹](app/view/portfolioproject_index_view)</details>|否|无||
| 项目集信息 | project_info | 项目集信息 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[文件夹](app/view/portfolioproject_show_view)</details>|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[批量删除项目集成员临时数据](module/Base/Portfolio/uilogic/remove_batch_temp)|remove_batch_temp|
|[刷新当前表格](module/Base/Portfolio/uilogic/refresh_current_grid)|refresh_current_grid|
