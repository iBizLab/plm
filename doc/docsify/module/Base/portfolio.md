# 文件夹(portfolio)  <!-- {docsify-ignore-all} -->


用于项目集查看及管理，可以统一协调项目工作，把控整体进度。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|是||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|结束时间|END_AT|日期型||是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|项目集标识|IDENTIFIER|文本，可指定长度|100|否||
|是否已删除|IS_DELETED|是否逻辑||是||
|是否星标|IS_FAVORITE|文本，可指定长度|200|是||
|项目集成员|MEMBERS|一对多关系数据集合|1048576|是||
|项目集名称|NAME|文本，可指定长度|200|否||
|开始时间|START_AT|日期型||是||
|状态|STATE|[单项选择(文本值)](index/dictionary_index#project_state "项目状态")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_PORTFOLIO_MEMBER_PORTFOLIO_PORTFOLIO_ID](der/DER1N_PORTFOLIO_MEMBER_PORTFOLIO_PORTFOLIO_ID)|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member)|1:N关系||
|[DER1N_WORK_PORTFOLIO_PORTFOLIO_ID](der/DER1N_WORK_PORTFOLIO_PORTFOLIO_ID)|[工作(WORK)](module/Base/work)|1:N关系||
|[DERCUSTOM_ADDON_PORTFOLIO_OWNER_ID](der/DERCUSTOM_ADDON_PORTFOLIO_OWNER_ID)|[组件(ADDON)](module/Base/addon)|自定义关系||


</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|CreateTempMajor|CreateTempMajor|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|GetDraftTemp|GetDraftTemp|内置方法|默认|不支持||||
|GetDraftTempMajor|GetDraftTempMajor|内置方法|默认|不支持||||
|GetTemp|GetTemp|内置方法|默认|不支持||||
|GetTempMajor|GetTempMajor|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|RemoveTemp|RemoveTemp|内置方法|默认|支持||||
|RemoveTempMajor|RemoveTempMajor|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|UpdateTemp|UpdateTemp|内置方法|默认|不支持||||
|UpdateTempMajor|UpdateTempMajor|内置方法|默认|不支持||||
|删除项目集|delete_project_set|[实体处理逻辑](module/Base/portfolio/logic/delete_project_set "删除项目集")|默认|不支持||||
|设置星标|favorite|[实体处理逻辑](module/Base/portfolio/logic/favorite "设置星标")|默认|不支持||||
|项目集首页组件计数|portfolio_index_addon_counter|[实体处理逻辑](module/Base/portfolio/logic/portfolio_addon_authority "项目集组件权限计数器")|默认|不支持||||
|恢复项目集|recover_project_set|[实体处理逻辑](module/Base/portfolio/logic/recover_project_set "恢复项目集")|默认|不支持||||
|从项目集中移除|remove_from_project_set|[实体处理逻辑](module/Base/portfolio/logic/remove_from_project_set "从项目集中移除")|默认|不支持||||
|项目资源成员设置|resource_setting|[实体处理逻辑](module/Base/portfolio/logic/resource_member_setting "项目集资源成员设置")|默认|不支持||||
|取消星标|un_favorite|[实体处理逻辑](module/Base/portfolio/logic/un_favorite "取消星标")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[从项目集中移除](module/Base/portfolio/logic/remove_from_project_set)|remove_from_project_set|无||从项目集中移除指定的子项目集|
|[删除项目集](module/Base/portfolio/logic/delete_project_set)|delete_project_set|无||项目集数据的逻辑删除，修改项目集的是否删除属性值|
|[取消星标](module/Base/portfolio/logic/un_favorite)|un_favorite|无||项目集取消星标|
|[恢复项目集](module/Base/portfolio/logic/recover_project_set)|recover_project_set|无||恢复已删除状态项目集数据，修改项目集的是否删除属性值|
|[是否删除变更附加逻辑](module/Base/portfolio/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||项目集删除或恢复时触发相应的通知消息|
|[设置星标](module/Base/portfolio/logic/favorite)|favorite|无||设置为星标项目集|
|[项目集组件权限计数器](module/Base/portfolio/logic/portfolio_addon_authority)|portfolio_addon_authority|无||获取项目集组件权限|
|[项目集资源成员设置](module/Base/portfolio/logic/resource_member_setting)|resource_member_setting|无||项目集资源成员设置，默认设置容量/工作日|

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/portfolio/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/portfolio/query/View)|VIEW|否|否 |否 ||
|[管理员(admin)](module/Base/portfolio/query/admin)|admin|否|否 |否 ||
|[选择项目集(choose_project_portfolio)](module/Base/portfolio/query/choose_project_portfolio)|choose_project_portfolio|否|否 |否 ||
|[查询星标(favorite)](module/Base/portfolio/query/favorite)|favorite|否|否 |否 ||
|[已删除的项目集(project_set_deleted)](module/Base/portfolio/query/project_set_deleted)|project_set_deleted|否|否 |否 ||
|[进行中的项目集(project_set_going)](module/Base/portfolio/query/project_set_going)|project_set_going|否|否 |否 ||
|[只读用户(reader)](module/Base/portfolio/query/reader)|reader|否|否 |否 ||
|[普通成员(user)](module/Base/portfolio/query/user)|user|否|否 |否 ||
|[工作下的项目集(work_project_portfolio)](module/Base/portfolio/query/work_project_portfolio)|work_project_portfolio|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/portfolio/dataset/Default)|DEFAULT|数据查询|是|||
|[管理员(admin)](module/Base/portfolio/dataset/admin)|admin|数据查询|否|||
|[选择项目集(choose_project_portfolio)](module/Base/portfolio/dataset/choose_project_portfolio)|choose_project_portfolio|数据查询|否|||
|[查询星标(favorite)](module/Base/portfolio/dataset/favorite)|favorite|数据查询|否|||
|[已删除的项目集(project_set_deleted)](module/Base/portfolio/dataset/project_set_deleted)|project_set_deleted|数据查询|否|||
|[进行中的项目集(project_set_going)](module/Base/portfolio/dataset/project_set_going)|project_set_going|数据查询|否|||
|[只读用户(reader)](module/Base/portfolio/dataset/reader)|reader|数据查询|否|||
|[普通成员(user)](module/Base/portfolio/dataset/user)|user|数据查询|否|||
|[工作下的项目集(work_project_portfolio)](module/Base/portfolio/dataset/work_project_portfolio)|work_project_portfolio|数据查询|否|||

## 数据权限

##### 管理员（读写） :id=portfolio-ADMIN_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[管理员(admin)](module/Base/portfolio#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `SUBDATA`
* `UPDATE`
* `DELETE`
* `READ`



##### 全部数据（读写） :id=portfolio-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `READ`
* `UPDATE`
* `CREATE`
* `SUBDATA`



##### 全部数据（写） :id=portfolio-ALL_W

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`



##### 只读用户（读） :id=portfolio-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/Base/portfolio#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 普通用户（读写） :id=portfolio-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[普通成员(user)](module/Base/portfolio#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `SUBDATA`
* `READ`



## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[项目集归档/恢复通知](module/Base/portfolio/notify/project_set_remove_recover_notify)|project_set_remove_recover_notify|[默认消息队列](index/notify_index)|[项目集删除/恢复通知模板](index/notify_index#project_set_remove_recover)|当前项目集成员 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_IDENTIFIER_LIKE|项目集标识|LIKE||
|N_NAME_LIKE|项目集名称|LIKE||
|N_STATE_EQ|状态|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 新开窗口（项目集） | open_new_project | 新窗口打开 |单项数据（主键）|<details><summary>打开HTML页面</summary>*./#/-/index/portfolio=${data.id}/portfolio_project_index_view/srfnav=drgroup/work_tree_grid_ex_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D*</details>||
| 取消星标 | cancel_favorite | 取消星标 |单项数据（主键）|<details><summary>后台调用</summary>[un_favorite](#行为)||
| 项目集资源成员设置(设置回显数据) | project_set_resource_member_pre | 成员管理 |无数据|用户自定义||
| 项目集成员 | open_project_member | 项目集成员 |单项数据（主键）|用户自定义||
| 更多设置（项目集） | open_project_setting | 更多设置 |单项数据（主键）|用户自定义||
| 新建项目集 | create_project_set | 新建项目集 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建项目集](app/view/portfolio_project_create_wizard_view)</details>||
| 设置星标 | add_favorite | 设置星标 |单项数据（主键）|<details><summary>后台调用</summary>[favorite](#行为)||
| 恢复项目集 | recover_project_set | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[recover_project_set](#行为)||
| 打开新建项目集 | open_new_project_set | 打开新建项目集 |单项数据|<details><summary>打开顶级视图</summary>[文件夹](app/view/portfolio_project_index_view)</details>||
| 项目集资源成员设置 | project_set_resource_member | 成员设置 |无数据|<details><summary>后台调用</summary>[resource_setting](#行为)||
| 项目集容量设置 | portfolio_capacity | 容量设置 |无数据|用户自定义||
| 打开项目集容量设置视图 | open_project_set_capacity | 容量设置 |无数据|<details><summary>打开视图或向导（模态）</summary>[容量设置](app/view/addon_resource_project_set_capacity_view)</details>||
| 项目集信息 | project_info | 项目集信息 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[文件夹](app/view/portfolio_project_show_view)</details>||
| 删除项目集 | delete_project_set | 删除项目集 |单项数据（主键）|<details><summary>后台调用</summary>[delete_project_set](#行为)||
| 从项目集中移除 | remove_from_project_set | 移除 |单项数据（主键）|<details><summary>后台调用</summary>[remove_from_project_set](#行为)||
| 编辑基本信息（项目集） | open_project_edit_view | 编辑基本信息 |单项数据（主键）|用户自定义||
| 打开项目集主视图 | open_project_set_index_view | 打开项目集主视图 |单项数据（主键）|<details><summary>打开顶级视图</summary>[文件夹](app/view/portfolio_project_index_view)</details>||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[打开项目集资源容量设置](module/Base/portfolio/uilogic/open_resource_capacity)|open_resource_capacity|根据当前项目集标识，获取项目集下的资源组件|
|[批量删除项目集成员临时数据](module/Base/portfolio/uilogic/remove_batch_temp)|remove_batch_temp|获取项目集内所有临时成员数据并删除|
|[计算表格列行为状态(portfolio)](module/Base/portfolio/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制收藏和取消收藏的禁用状态|
|[计算项目集资源成员](module/Base/portfolio/uilogic/calc_project_set_resouce_member)|calc_project_set_resouce_member|计算资源甘特部件当前人员，打开选择视图时回显simplelist|
|[通知刷新](module/Base/portfolio/uilogic/notify_refresh)|notify_refresh|通知页面刷新|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/portfolio?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/portfolio?id=界面逻辑`">
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


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>