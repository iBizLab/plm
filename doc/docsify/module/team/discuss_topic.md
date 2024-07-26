# 话题(discuss_topic)  <!-- {docsify-ignore-all} -->


话题是交流信息和分享知识的讨论集合。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|话题标识|IDENTIFIER|文本，可指定长度|100|否||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|是否已删除|IS_DELETED|是否逻辑||是||
|是否星标|IS_FAVORITE|文本，可指定长度|200|是||
|话题成员|MEMBERS|一对多关系数据集合|1048576|是||
|话题名称|NAME|文本，可指定长度|200|是||
|所属对象|SCOPE_ID|文本，可指定长度|100|是||
|所属|SCOPE_TYPE|[单项选择(文本值)](index/dictionary_index#scope_type "所属类型（通用）")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|可见范围|VISIBILITY|单项选择(文本值)|60|否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_DISCUSS_MEMBER_DISCUSS_TOPIC_OWNER_ID](der/DER1N_DISCUSS_MEMBER_DISCUSS_TOPIC_OWNER_ID)|[协作成员(DISCUSS_MEMBER)](module/Team/discuss_member)|1:N关系||
|[DER1N_DISCUSS_POST_DISCUSS_TOPIC_TOPIC_ID](der/DER1N_DISCUSS_POST_DISCUSS_TOPIC_TOPIC_ID)|[讨论(DISCUSS_POST)](module/Team/discuss_post)|1:N关系||


</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#discuss_topic_Create)|||
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
|激活|activate|[实体处理逻辑](module/Team/discuss_topic/logic/activate "激活")|默认|不支持||||
|归档|archive|[实体处理逻辑](module/Team/discuss_topic/logic/archive "归档")|默认|不支持||||
|变更管理员角色|change_admin_role|[实体处理逻辑](module/Team/discuss_topic/logic/change_admin_role "变更管理员角色")|默认|不支持||||
|删除|delete|[实体处理逻辑](module/Team/discuss_topic/logic/delete "删除")|默认|不支持||||
|设置星标|favorite|[实体处理逻辑](module/Team/discuss_topic/logic/favorite "设置星标")|默认|不支持||||
|移动话题|move_discuss_topic|[实体处理逻辑](module/Team/discuss_topic/logic/move_discuss_topic "移动话题")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/Team/discuss_topic/logic/nothing "无操作")|默认|不支持||||
|恢复|recover|[实体处理逻辑](module/Team/discuss_topic/logic/recover "恢复")|默认|不支持||||
|取消星标|un_favorite|[实体处理逻辑](module/Team/discuss_topic/logic/un_favorite "取消星标")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[删除](module/Team/discuss_topic/logic/delete)|delete|无||话题数据的逻辑删除，修改话题的是否删除属性值|
|[取消星标](module/Team/discuss_topic/logic/un_favorite)|un_favorite|无||话题取消星标|
|[变更管理员角色](module/Team/discuss_topic/logic/change_admin_role)|change_admin_role|无||批量变更管理员角色身份（role_id）|
|[归档](module/Team/discuss_topic/logic/archive)|archive|无||未归档话题数据的归档处理，修改话题的归档状态为已归档|
|[恢复](module/Team/discuss_topic/logic/recover)|recover|无||恢复已删除状态话题数据，修改话题的是否删除属性值，并恢复访问记录|
|[无操作](module/Team/discuss_topic/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[激活](module/Team/discuss_topic/logic/activate)|activate|无||激活已归档状态话题，修改话题的归档属性|
|[移动话题](module/Team/discuss_topic/logic/move_discuss_topic)|move_discuss_topic|无||高级设置中移动项目|
|[自动创建人员](module/Team/discuss_topic/logic/auto_create_members)|auto_create_members|无||当所属选择"团队"时，点击完成后自动添加团队下的所有成员。|
|[获取快速新建话题集合](module/Team/discuss_topic/logic/quick_create)|quick_create|无||用于获取可快速新建的话题集合|
|[设置星标](module/Team/discuss_topic/logic/favorite)|favorite|无||设置为星标话题|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Team/discuss_topic/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Team/discuss_topic/query/View)|VIEW|否|否 |否 ||
|[管理员(admin)](module/Team/discuss_topic/query/admin)|admin|否|否 |否 ||
|[已归档(archived)](module/Team/discuss_topic/query/archived)|archived|否|否 |否 ||
|[已归档星标话题(archived_favorite)](module/Team/discuss_topic/query/archived_favorite)|archived_favorite|否|否 |否 ||
|[已归档未星标话题(archived_unfavorite)](module/Team/discuss_topic/query/archived_unfavorite)|archived_unfavorite|否|否 |否 ||
|[当前话题(cur_discuss_topic)](module/Team/discuss_topic/query/cur_discuss_topic)|cur_discuss_topic|否|否 |否 ||
|[已删除(deleted)](module/Team/discuss_topic/query/deleted)|deleted|否|否 |否 ||
|[星标话题(favorite)](module/Team/discuss_topic/query/favorite)|favorite|否|否 |否 ||
|[星标话题（管理用户）(favorite_user)](module/Team/discuss_topic/query/favorite_user)|favorite_user|否|否 |否 ||
|[团队话题(group)](module/Team/discuss_topic/query/group)|group|否|否 |否 ||
|[正常状态话题(normal)](module/Team/discuss_topic/query/normal)|normal|否|否 |否 ||
|[组织话题(org)](module/Team/discuss_topic/query/org)|org|否|否 |否 ||
|[公开(public)](module/Team/discuss_topic/query/public)|public|否|否 |否 ||
|[只读用户(reader)](module/Team/discuss_topic/query/reader)|reader|否|否 |否 ||
|[未星标话题(unfavorite)](module/Team/discuss_topic/query/unfavorite)|unfavorite|否|否 |否 ||
|[未星标话题（管理用户）(unfavorite_user)](module/Team/discuss_topic/query/unfavorite_user)|unfavorite_user|否|否 |否 ||
|[操作用户(user)](module/Team/discuss_topic/query/user)|user|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Team/discuss_topic/dataset/Default)|DEFAULT|数据查询|是|||
|[管理员(admin)](module/Team/discuss_topic/dataset/admin)|admin|数据查询|否|||
|[已归档(archived)](module/Team/discuss_topic/dataset/archived)|archived|数据查询|否|||
|[已归档（主视图）(archived_main)](module/Team/discuss_topic/dataset/archived_main)|archived_main|数据查询|否|||
|[已删除(deleted)](module/Team/discuss_topic/dataset/deleted)|deleted|数据查询|否|||
|[星标话题(favorite)](module/Team/discuss_topic/dataset/favorite)|favorite|数据查询|否|||
|[团队话题(group)](module/Team/discuss_topic/dataset/group)|group|数据查询|否|||
|[主表格查询(main)](module/Team/discuss_topic/dataset/main)|main|数据查询|否|||
|[正常状态话题(normal)](module/Team/discuss_topic/dataset/normal)|normal|数据查询|否|||
|[快速新建查询(quick)](module/Team/discuss_topic/dataset/quick)|quick|[实体逻辑](module/Team/discuss_topic/logic/quick_create)|否|||
|[快速新建查询（管理用户）(quick_user)](module/Team/discuss_topic/dataset/quick_user)|quick_user|数据查询|否|||
|[只读用户(reader)](module/Team/discuss_topic/dataset/reader)|reader|数据查询|否|||
|[操作用户(user)](module/Team/discuss_topic/dataset/user)|user|数据查询|否|||

## 数据权限

##### 管理员（读写） :id=discuss_topic-ADMIN_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[管理员(admin)](module/Team/discuss_topic#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `UPDATE`
* `SUBDATA`
* `READ`



##### 全部数据（读写） :id=discuss_topic-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `READ`
* `SUBDATA`
* `CREATE`
* `UPDATE`



##### 全部数据（写） :id=discuss_topic-ALL_W

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`



##### 只读用户（读） :id=discuss_topic-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/Team/discuss_topic#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 普通用户（读写） :id=discuss_topic-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[操作用户(user)](module/Team/discuss_topic#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `SUBDATA`
* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|话题名称|LIKE||
|N_SCOPE_TYPE_EQ|所属|EQ||
|N_VISIBILITY_EQ|可见范围|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 取消星标 | cancel_favorite | 取消星标 |单项数据（主键）|<details><summary>后台调用</summary>[un_favorite](#行为)||
| 话题成员 | open_member_view | 话题成员 |单项数据（主键）|用户自定义||
| 已删除_恢复 | recover | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)||
| 回收站 | open_deleted_view | 回收站 |单项数据（主键）|用户自定义||
| 编辑基本信息 | open_edit_view | 编辑基本信息 |单项数据（主键）|用户自定义||
| 设置星标 | add_favorite | 设置星标 |单项数据（主键）|<details><summary>后台调用</summary>[favorite](#行为)||
| 进行中_删除 | in_progress_into_deleted | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 进行中_归档 | archive | 归档 |单项数据（主键）|<details><summary>后台调用</summary>[archive](#行为)||
| 打开新建话题 | open_new_topic | 打开新建话题 |单项数据|<details><summary>打开顶级视图</summary>[话题](app/view/discuss_topic_index_view)</details>||
| 删除话题 | delete | 删除话题 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 更多设置 | open_setting_view | 更多设置 |单项数据（主键）|用户自定义||
| 归档话题 | archived | 归档话题 |单项数据（主键）|<details><summary>后台调用</summary>[archive](#行为)||
| 打开话题配置 | open_discuss_topic_setting | 打开话题配置 |无数据|用户自定义||
| 打开话题导航页 | open_topic_exp_page | 打开话题导航页 |无数据|<details><summary>打开顶级视图</summary>[协助空间](app/view/discuss_topic_tree_exp_view)</details>||
| 已归档_激活 | activate | 激活 |单项数据（主键）|<details><summary>后台调用</summary>[activate](#行为)||
| 已归档_删除 | archived_delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 新建话题 | create_discuss_topic | 新建话题 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建话题](app/view/discuss_topic_create_wizard_view)</details>||
| 移动话题 | move_discuss_topic | 移动话题 |单项数据（主键）|<details><summary>后台调用</summary>[move_discuss_topic](#行为)||
| 新开窗口（话题） | open_new | 新窗口打开 |单项数据（主键）|<details><summary>打开HTML页面</summary>*./#/-/index/discuss_topic=${data.id}/discuss_topic_index_view/srfnav=usrdrgroup0515813208/discuss_post_tree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;srfnav=root%3Anode_4%3Anode/discuss_post_all_grid_view/-*</details>||
| 设置管理员 | set_admin | 设置管理员 |单项数据（主键）|<details><summary>后台调用</summary>[change_admin_role](#行为)||
| 打开话题首页视图 | open_index_view | 打开话题首页视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[话题](app/view/discuss_topic_index_view)</details>||
| 话题信息 | topic_info | 话题信息 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[话题](app/view/discuss_topic_show_edit_view)</details>||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[批量删除话题成员临时数据](module/Team/discuss_topic/uilogic/remove_batch_temp)|remove_batch_temp|获取话题内所有临时成员数据并删除|
|[计算表格列行为状态(discuss_topic)](module/Team/discuss_topic/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制收藏和取消收藏的禁用状态|
|[通知刷新](module/Team/discuss_topic/uilogic/notify_refresh)|notify_refresh|通知页面刷新|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Team/discuss_topic?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_topic?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_topic?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_topic?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_topic?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_topic?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_topic?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_topic?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_topic?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_topic?id=界面逻辑`">
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