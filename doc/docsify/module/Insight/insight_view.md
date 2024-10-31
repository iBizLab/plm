# 效能视图(insight_view)  <!-- {docsify-ignore-all} -->


存储效能视图的基本信息


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|视图标识|IDENTIFIER|文本，可指定长度|100|否||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|是否已删除|IS_DELETED|是否逻辑||是||
|是否星标|IS_FAVORITE|文本，可指定长度|200|是||
|效能视图成员|MEMBERS|一对多关系数据集合|1048576|是||
|名称|NAME|文本，可指定长度|200|是||
|所属对象|SCOPE_ID|文本，可指定长度|100|是||
|所属|SCOPE_TYPE|[单项选择(文本值)](index/dictionary_index#user_scope_type "所属类型（包含个人）")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|可见范围|VISIBILITY|单项选择(文本值)|60|否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_INSIGHT_MEMBER_INSIGHT_VIEW_OWNER_ID](der/DER1N_INSIGHT_MEMBER_INSIGHT_VIEW_OWNER_ID)|[效能成员(INSIGHT_MEMBER)](module/Insight/insight_member)|1:N关系||
|[DER1N_INSIGHT_REPORT_INSIGHT_VIEW_VIEW_ID](der/DER1N_INSIGHT_REPORT_INSIGHT_VIEW_VIEW_ID)|[效能报表(INSIGHT_REPORT)](module/Insight/insight_report)|1:N关系||
|[DERCUSTOM_INSIGHT_VIEW_DYNADASHBOARD_OWNER_ID](der/DERCUSTOM_INSIGHT_VIEW_DYNADASHBOARD_OWNER_ID)|[动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard)|自定义关系||


</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#insight_view_Create)|||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|CreateTempMajor|CreateTempMajor|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#insight_view_Get)|||
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
|变更管理员身份|change_admin_role|[实体处理逻辑](module/Insight/insight_view/logic/change_admin_role "变更管理员角色")|默认|不支持||||
|删除|delete|[实体处理逻辑](module/Insight/insight_view/logic/delete "删除")|默认|不支持||||
|设置星标|favorite|[实体处理逻辑](module/Insight/insight_view/logic/favorite "设置星标")|默认|不支持||||
|填充BI报表默认值|fill_bi_form_default|[实体处理逻辑](module/Insight/insight_view/logic/fill_bi_form_default "填充BI报表默认值")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/Insight/insight_view/logic/nothing "无操作")|默认|不支持||||
|判断是否需要选择模板|recognize_choose_template|[实体处理逻辑](module/Insight/insight_view/logic/recognize_choose_template "判断是否需要选择模板")|默认|不支持||||
|恢复|recover|[实体处理逻辑](module/Insight/insight_view/logic/recover "恢复")|默认|不支持||||
|取消星标|un_favorite|[实体处理逻辑](module/Insight/insight_view/logic/un_favorite "取消星标")|默认|不支持||||
|使用此模板|use_cur_template|[实体处理逻辑](module/Insight/insight_view/logic/use_cur_template "使用此模板")|默认|不支持||||
|移动视图|view_move|[实体处理逻辑](module/Insight/insight_view/logic/view_move "移动视图")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[使用此模板](module/Insight/insight_view/logic/use_cur_template)|use_cur_template|无||使用此模板|
|[删除](module/Insight/insight_view/logic/delete)|delete|无||视图的逻辑删除|
|[判断是否需要选择模板](module/Insight/insight_view/logic/recognize_choose_template)|recognize_choose_template|无||判断是否需要选择模板|
|[取消星标](module/Insight/insight_view/logic/un_favorite)|un_favorite|无||取消视图星标|
|[变更管理员角色](module/Insight/insight_view/logic/change_admin_role)|change_admin_role|无||批量变更管理员角色身份（role_id）|
|[填充BI报表默认值](module/Insight/insight_view/logic/fill_bi_form_default)|fill_bi_form_default|无||填充BI报表默认值|
|[恢复](module/Insight/insight_view/logic/recover)|recover|无||恢复|
|[无操作](module/Insight/insight_view/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[移动视图](module/Insight/insight_view/logic/view_move)|view_move|无||视图更多设置移动视图<br>|
|[自动创建人员](module/Insight/insight_view/logic/auto_create_members)|auto_create_members|无||自动创建人员|
|[获取视图成员](module/Insight/insight_view/logic/get_view_member)|get_view_member|无||获取视图成员信息，用于判断当前用户权限|
|[设置星标](module/Insight/insight_view/logic/favorite)|favorite|无||设置视图为星标|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Insight/insight_view/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Insight/insight_view/query/View)|VIEW|否|否 |否 ||
|[管理员(admin)](module/Insight/insight_view/query/admin)|admin|否|否 |否 ||
|[已删除(deleted)](module/Insight/insight_view/query/deleted)|deleted|否|否 |否 ||
|[星标页面(favorite)](module/Insight/insight_view/query/favorite)|favorite|否|否 |否 ||
|[正常状态(normal)](module/Insight/insight_view/query/normal)|normal|否|否 |否 ||
|[公开(public)](module/Insight/insight_view/query/public)|public|否|否 |否 ||
|[只读用户(reader)](module/Insight/insight_view/query/reader)|reader|否|否 |否 ||
|[非星标(unfavorite)](module/Insight/insight_view/query/unfavorite)|unfavorite|否|否 |否 ||
|[操作用户(user)](module/Insight/insight_view/query/user)|user|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Insight/insight_view/dataset/Default)|DEFAULT|数据查询|是|||
|[管理员(admin)](module/Insight/insight_view/dataset/admin)|admin|数据查询|否|||
|[已删除(deleted)](module/Insight/insight_view/dataset/deleted)|deleted|数据查询|否|||
|[星标页面(favorite)](module/Insight/insight_view/dataset/favorite)|favorite|数据查询|否|||
|[主表格查询(main)](module/Insight/insight_view/dataset/main)|main|数据查询|否|||
|[normal](module/Insight/insight_view/dataset/normal)|normal|数据查询|否||正常状态|
|[只读用户(reader)](module/Insight/insight_view/dataset/reader)|reader|数据查询|否|||
|[操作用户(user)](module/Insight/insight_view/dataset/user)|user|数据查询|否|||

## 数据权限

##### 管理员（读写） :id=insight_view-ADMIN_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[管理员(admin)](module/Insight/insight_view#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `SUBDATA`
* `UPDATE`
* `READ`
* `DELETE`



##### 全部数据（读写） :id=insight_view-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `SUBDATA`
* `READ`
* `CREATE`
* `UPDATE`
* `DELETE`



##### 全部数据（写） :id=insight_view-ALL_W

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`



##### 只读用户（读） :id=insight_view-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/Insight/insight_view#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 普通用户（读写） :id=insight_view-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[操作用户(user)](module/Insight/insight_view#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `SUBDATA`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_SCOPE_TYPE_EQ|所属|EQ||
|N_VISIBILITY_EQ|可见范围|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 取消星标 | cancel_favorite | 取消星标 |单项数据（主键）|<details><summary>后台调用</summary>[un_favorite](#行为)||
| 移动视图 | move_view | 移动视图 |单项数据（主键）|<details><summary>后台调用</summary>[view_move](#行为)||
| 已删除_恢复 | recover | 已删除_恢复 |单项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)||
| 编辑基本信息 | open_edit_view | 编辑基本信息 |单项数据（主键）|用户自定义||
| 设置星标 | add_favorite | 设置星标 |单项数据（主键）|<details><summary>后台调用</summary>[favorite](#行为)||
| 设置管理员 | change_admin_role | 设置管理员 |单项数据（主键）|<details><summary>后台调用</summary>[change_admin_role](#行为)||
| 新建视图 | create_insight_view | 新建视图 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建视图](app/view/insight_view_create_wizard_view)</details>||
| 打开模板选择 | open_choose_template | 打开模板选择 |无数据|<details><summary>打开视图或向导（模态）</summary>[仪表盘模板列表](app/view/dyna_dashboard_list_exp_view)</details>||
| 进行中_删除 | delete | 进行中_删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 更多设置 | open_setting_view | 更多设置 |单项数据（主键）|用户自定义||
| 添加效能度量成员 | add_insight_view_member | 添加成员 |无数据|系统预定义||
| 复制视图 | copy_view | 复制视图 |单项数据（主键）|用户自定义||
| 视图成员 | open_insight_member | 视图成员 |单项数据（主键）|用户自定义||
| 打开视图导航页 | open_insight_view_exp_page | 打开视图导航页 |无数据|<details><summary>打开顶级视图</summary>[效能度量](app/view/insight_view_tree_exp_view)</details>||
| 视图信息 | open_show_view | 视图信息 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[视图信息](app/view/insight_view_show_edit_view)</details>||
| 新开窗口（视图） | open_new | 新窗口打开 |单项数据（主键）|<details><summary>打开HTML页面</summary>*./#/-/index/insight_view=${data.id}/insight_view_index_view/srfnavctx=%257B%2522srfnavctrlid%2522%253A%2522plmweb.insight_view_all_grid_view%2540plmweb.insight_view.all_grid_view_grid%2522%257D;srfnav=usrdrgroup0517936766/insight_view_custom_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D*</details>||
| 打开视图配置 | open_insight_config | 视图配置 |无数据|用户自定义||
| 打开新建视图 | open_new_insight_view | 打开新建视图 |单项数据|<details><summary>打开顶级视图</summary>[效能度量](app/view/insight_view_index_view)</details>||
| 打开视图首页视图 | open_index_view | 打开视图首页视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[效能度量](app/view/insight_view_index_view)</details>||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[批量删除视图成员临时数据](module/Insight/insight_view/uilogic/remove_batch_temp)|remove_batch_temp|获取视图内所有临时成员数据并删除|
|[计算表格列行为状态(insight)](module/Insight/insight_view/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制收藏和取消收藏的禁用状态|
|[选择模板](module/Insight/insight_view/uilogic/choose_template)|choose_template|选择模板|
|[通知刷新](module/Insight/insight_view/uilogic/notify_refresh)|notify_refresh|通知页面刷新|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Insight/insight_view?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_view?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_view?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_view?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_view?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_view?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_view?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_view?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_view?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_view?id=界面逻辑`">
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