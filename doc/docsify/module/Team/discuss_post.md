# 讨论(discuss_post)  <!-- {docsify-ignore-all} -->


根据话题发起的讨论，使成员围绕话题展开讨论


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|附件|ATTACHMENTS|一对多关系数据集合|1048576|是||
|关注|ATTENTIONS|一对多关系数据集合|1048576|是||
|关注数|ATTENTION_COUNT|文本，可指定长度|200|是||
|评论|COMMENTS|一对多关系数据集合|1048576|是||
|评论数|COMMENT_COUNT|文本，可指定长度|200|是||
|讨论内容|CONTENT|长文本，没有长度限制|1048576|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|热度|HEAT|整型||是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否已删除|IS_DELETED|是否逻辑||是||
|讨论名称|NAME|文本，可指定长度|200|是||
|讨论回复数|REPLIES|文本，可指定长度|200|是||
|状态|STATUS|[单项选择(文本值)](index/dictionary_index#discuss_status "讨论状态")|60|是||
|话题标识|TOPIC_ID|外键值|100|是||
|话题|TOPIC_NAME|外键值文本|200|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_DISCUSS_REPLY_DISCUSS_POST_POST_ID](der/DER1N_DISCUSS_REPLY_DISCUSS_POST_POST_ID)|[讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply)|1:N关系||
|[DERCUSTOM_ATTENTION_DISCUSS_POST_OWNER_ID](der/DERCUSTOM_ATTENTION_DISCUSS_POST_OWNER_ID)|[关注(ATTENTION)](module/Base/attention)|自定义关系||
|[DERCUSTOM_COMMENT_DISCUSS_POST](der/DERCUSTOM_COMMENT_DISCUSS_POST)|[评论(COMMENT)](module/Base/comment)|自定义关系||
|[DERCUSTOM_DISCUSS_POST_ATTACHMENT](der/DERCUSTOM_DISCUSS_POST_ATTACHMENT)|[附件(ATTACHMENT)](module/Base/attachment)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_DISCUSS_POST_DISCUSS_TOPIC_TOPIC_ID](der/DER1N_DISCUSS_POST_DISCUSS_TOPIC_TOPIC_ID)|[话题(DISCUSS_TOPIC)](module/Team/discuss_topic)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#discuss_post_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|关闭|close|[实体处理逻辑](module/Team/discuss_post/logic/close "关闭")|默认|不支持||||
|删除评论|del_comment|[实体处理逻辑](module/Team/discuss_post/logic/del_comment "删除评论")|默认|不支持||||
|删除|delete|[实体处理逻辑](module/Team/discuss_post/logic/delete "删除")|默认|不支持||||
|讨论评论数计数器|discuss_post_count|[实体处理逻辑](module/Team/discuss_post/logic/discuss_post_count "讨论中评论数计数器")|默认|不支持||||
|填充附加数据|fill_addition|[实体处理逻辑](module/Team/discuss_post/logic/fill_addition "填充附加数据")|默认|不支持||||
|获取关注人|get_attention|内置方法|默认|不支持||||
|讨论关注（移动端）|mob_discuss_post_attention|[实体处理逻辑](module/Team/discuss_post/logic/mob_discuss_post_attention "讨论关注（移动端）")|默认|不支持||||
|移动|move|[实体处理逻辑](module/Team/discuss_post/logic/move "移动")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/Team/discuss_post/logic/nothing "无操作")|默认|不支持||||
|打开|open|[实体处理逻辑](module/Team/discuss_post/logic/open "打开")|默认|不支持||||
|恢复|recover|[实体处理逻辑](module/Team/discuss_post/logic/recover "恢复")|默认|不支持||||
|添加评论|send_comment|[实体处理逻辑](module/Team/discuss_post/logic/send_comment "添加评论")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[关闭](module/Team/discuss_post/logic/close)|close|无||变更讨论的当前状态为关闭|
|[删除](module/Team/discuss_post/logic/delete)|delete|无||讨论数据的逻辑删除，修改讨论的是否删除属性值|
|[删除评论](module/Team/discuss_post/logic/del_comment)|del_comment|无||删除评论|
|[填充附加数据](module/Team/discuss_post/logic/fill_addition)|fill_addition|无||查询创建人创建的讨论和回复数量；此讨论下的参与者|
|[恢复](module/Team/discuss_post/logic/recover)|recover|无||已删除状态讨论数据的恢复，修改讨论的是否删除属性值，并恢复访问记录|
|[打开](module/Team/discuss_post/logic/open)|open|无||变更讨论的当前状态为进行中|
|[无操作](module/Team/discuss_post/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[添加评论](module/Team/discuss_post/logic/send_comment)|send_comment|无||添加讨论中的评论信息|
|[移动](module/Team/discuss_post/logic/move)|move|无||移动讨论至话题|
|[获取话题成员（移动端）](module/Team/discuss_post/logic/mob_get_topic_member)|mob_get_topic_member|无|||
|[讨论中评论数计数器](module/Team/discuss_post/logic/discuss_post_count)|discuss_post_count|无|||
|[讨论关注（移动端）](module/Team/discuss_post/logic/mob_discuss_post_attention)|mob_discuss_post_attention|无|||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Team/discuss_post/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Team/discuss_post/query/View)|VIEW|否|否 |否 ||
|[已删除(deleted)](module/Team/discuss_post/query/deleted)|deleted|否|否 |否 ||
|[讨论集合(mob_discuss_post_list)](module/Team/discuss_post/query/mob_discuss_post_list)|mob_discuss_post_list|否|否 |否 ||
|[我关注的(my_attention)](module/Team/discuss_post/query/my_attention)|my_attention|否|否 |否 ||
|[我发起的(my_create)](module/Team/discuss_post/query/my_create)|my_create|否|否 |否 ||
|[我回复的(my_reply)](module/Team/discuss_post/query/my_reply)|my_reply|否|否 |否 ||
|[正常状态讨论(normal)](module/Team/discuss_post/query/normal)|normal|否|否 |否 ||
|[父未删除(parent_not_deleted)](module/Team/discuss_post/query/parent_not_deleted)|parent_not_deleted|否|否 |否 ||
|[公开(public)](module/Team/discuss_post/query/public)|public|否|否 |否 ||
|[只读用户(reader)](module/Team/discuss_post/query/reader)|reader|否|否 |否 ||
|[最新讨论(recent)](module/Team/discuss_post/query/recent)|recent|否|否 |否 |最新讨论|

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Team/discuss_post/dataset/Default)|DEFAULT|数据查询|是|||
|[已删除(deleted)](module/Team/discuss_post/dataset/deleted)|deleted|数据查询|否|||
|[讨论集合(mob_discuss_post_list)](module/Team/discuss_post/dataset/mob_discuss_post_list)|mob_discuss_post_list|数据查询|否|||
|[我关注的(my_attention)](module/Team/discuss_post/dataset/my_attention)|my_attention|数据查询|否|||
|[我发起的(my_create)](module/Team/discuss_post/dataset/my_create)|my_create|数据查询|否|||
|[我回复的(my_reply)](module/Team/discuss_post/dataset/my_reply)|my_reply|数据查询|否|||
|[正常状态讨论(normal)](module/Team/discuss_post/dataset/normal)|normal|数据查询|否|||
|[只读用户(reader)](module/Team/discuss_post/dataset/reader)|reader|数据查询|否|||
|[最近讨论(recent)](module/Team/discuss_post/dataset/recent)|recent|数据查询|否||最新讨论|

## 数据权限

##### 全部数据（读写） :id=discuss_post-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ(话题(READ))`
* `UPDATE(话题(SUBDATA))`
* `DELETE`
* `CREATE`



##### 只读用户（读） :id=discuss_post-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/Team/discuss_post#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ(话题(READ))`



##### 操作用户(写) :id=discuss_post-USER_W

<p class="panel-title"><b>数据范围</b></p>

* `无`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CREATE_MAN_EQ|建立人|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|讨论名称|LIKE||
|N_STATUS_EQ|状态|EQ||
|N_TOPIC_ID_EQ|话题标识|EQ||
|N_TOPIC_NAME_EQ|话题|EQ||
|N_TOPIC_NAME_LIKE|话题|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 添加回复 | create_reply | 添加回复 |无数据|用户自定义||
| 添加附件 | add_attachments | 添加附件 |无数据|用户自定义||
| 发起讨论 | create_discuss | 发起讨论 |无数据|<details><summary>打开视图或向导（模态）</summary>[发起讨论](app/view/discuss_post_quick_create_view)</details>||
| 删除 | delete | 删除 |多项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)|批操作工具栏上按钮调用|
| 打开回复 | open_replies | 打开回复 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[讨论](app/view/discuss_post_mob_edit_view)</details>||
| 显示评论列表 | show_comment_list | 发送评论 |无数据|用户自定义||
| 关闭 | close | 关闭 |单项数据（主键）|<details><summary>后台调用</summary>[close](#行为)||
| 发送 | panel_usr1018539994_button_calluilogic_send_click | 发送 |单项数据|用户自定义||
| 编辑 | panel_usr0516087018_button_calluilogic1_click | 编辑 |单项数据|用户自定义||
| 移动 | move | 移动 |单项数据|<details><summary>后台调用</summary>[move](#行为)||
| 删除评论（移动端） | mob_del_comment | 删除评论 |单项数据（主键）|<details><summary>后台调用</summary>[del_comment](#行为)||
| 恢复 | recover | 恢复 |多项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)|回收站批操作按钮调用；|
| 发起讨论（移动端） | mob_create_discuss | 发起讨论 |无数据|<details><summary>打开视图或向导（模态）</summary>[发起讨论](app/view/discuss_post_mob_dis_create_view)</details>||
| 新建讨论（快速新建） | quick_new_discuss_post | 新建讨论 |无数据|<details><summary>打开视图或向导（模态）</summary>[发起讨论](app/view/discuss_post_quick_create_view)</details>||
| 打开讨论 | open_discuss_post | 打开讨论 |无数据|用户自定义||
| 发送 | panel_usr1029137485_button_calluilogic_click | 发送 |单项数据|用户自定义||
| 移动（移动端） | mob_move | 移动 |单项数据|<details><summary>后台调用</summary>[move](#行为)||
| 清空回复 | clear_reply | 清空 |无数据|用户自定义||
| 发表评论 | send_comment | 发表评论 |无数据|用户自定义||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义||
| 删除评论 | delete_comment | 删除评论 |单项数据（主键）|用户自定义||
| 打开讨论关注列表（移动端） | mob_open_attention_list | 打开关注列表 |单项数据|<details><summary>打开视图或向导（模态）</summary>[讨论关注](app/view/attention_mob_discuss_md_view)</details>||
| 打开讨论树导航视图（移动端） | mob_open_discuss_tree | 打开讨论树导航视图 |无数据|<details><summary>打开视图或向导（模态）</summary>[讨论](app/view/discuss_post_mob_discuss_post_tree)</details>||
| 收起评论列表 | hidden_comment_list | 收起评论 |无数据|用户自定义||
| 打开 | open | 打开 |单项数据（主键）|<details><summary>后台调用</summary>[open](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[删除评论](module/Team/discuss_post/uilogic/del_comment)|del_comment|删除评论|
|[刷新](module/Team/discuss_post/uilogic/refresh)|refresh|刷新主视图|
|[刷新（移动端）](module/Team/discuss_post/uilogic/mob_refresh)|mob_refresh||
|[发送评论](module/Team/discuss_post/uilogic/send_comment)|send_comment|发送评论|
|[发送评论（移动端讨论）](module/Team/discuss_post/uilogic/send_comment_mob)|send_comment_mob|发送评论，并关闭评论输入框|
|[添加回复](module/Team/discuss_post/uilogic/add_reply)|add_reply|添加回复，并关闭回复输入框|
|[添加附件数据](module/Team/discuss_post/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[清空回复](module/Team/discuss_post/uilogic/clear_reply)|clear_reply|清空当前输入框内已输入内容|
|[编辑回复](module/Team/discuss_post/uilogic/edit_reply)|edit_reply|编辑回复，获取回复数据，展开回复输入框并赋值|
|[讨论关闭时隐藏回复输入框](module/Team/discuss_post/uilogic/status_control_visible)|status_control_visible|讨论关闭时隐藏回复输入框|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Team/discuss_post?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_post?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_post?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_post?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_post?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_post?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_post?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_post?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_post?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_post?id=界面逻辑`">
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