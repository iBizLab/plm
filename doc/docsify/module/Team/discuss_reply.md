# 讨论回复(discuss_reply)  <!-- {docsify-ignore-all} -->


记录讨论下的回复信息，包括回复内容、回复人等信息。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|评论|COMMENTS|一对多关系数据集合|1048576|是||
|回复评论数|COMMENT_COUNT|文本，可指定长度|200|是||
|回复评论数|COMMENT_NUM|文本，可指定长度|200|是||
|回复内容|CONTENT|长文本，没有长度限制|1048576|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|讨论名称|DISCUSS_NAME|外键值文本|200|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|讨论标识|POST_ID|外键值|100|是||
|话题标识|TOPIC_ID|外键值附加数据|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_COMMENT_DISCUSS_REPLY](der/DERCUSTOM_COMMENT_DISCUSS_REPLY)|[评论(COMMENT)](module/Base/comment)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_DISCUSS_REPLY_DISCUSS_POST_POST_ID](der/DER1N_DISCUSS_REPLY_DISCUSS_POST_POST_ID)|[讨论(DISCUSS_POST)](module/Team/discuss_post)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#discuss_reply_Create)|||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持|[附加操作](index/action_logic_index#discuss_reply_Save)|||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#discuss_reply_Update)|||
|添加回复|add_reply|[实体处理逻辑](module/Team/discuss_reply/logic/add_reply "添加回复")|默认|不支持||||
|删除评论|del_comment|[实体处理逻辑](module/Team/discuss_reply/logic/del_comment "回复下删除评论")|默认|不支持||||
|删除回复|del_reply|[实体处理逻辑](module/Team/discuss_reply/logic/del_reply "删除回复")|默认|不支持||||
|编辑回复|edit_reply|[实体处理逻辑](module/Team/discuss_reply/logic/edit_reply "编辑回复")|默认|不支持||||
|发送评论|send_comment|[实体处理逻辑](module/Team/discuss_reply/logic/send_comment "回复下添加评论")|默认|不支持||||
|修改评论|update_comment|[实体处理逻辑](module/Team/discuss_reply/logic/update_comment "回复下修改评论")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[删除回复](module/Team/discuss_reply/logic/del_reply)|del_reply|无||删除回复|
|[回复下修改评论](module/Team/discuss_reply/logic/update_comment)|update_comment|无||回复下修改评论|
|[回复下删除评论](module/Team/discuss_reply/logic/del_comment)|del_comment|无||回复下删除评论|
|[回复下添加评论](module/Team/discuss_reply/logic/send_comment)|send_comment|无||回复下添加评论|
|[子回复数据](module/Team/discuss_reply/logic/sub_reply_data)|sub_reply_data|无||设置回复的子回复|
|[更新讨论时间](module/Team/discuss_reply/logic/update_post_time)|update_post_time|无|||
|[添加回复](module/Team/discuss_reply/logic/add_reply)|add_reply|无||添加回复|
|[编辑回复](module/Team/discuss_reply/logic/edit_reply)|edit_reply|无||编辑回复|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Team/discuss_reply/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Team/discuss_reply/query/View)|VIEW|否|否 |否 ||
|[我的全部回复(my_all_reply)](module/Team/discuss_reply/query/my_all_reply)|my_all_reply|否|否 |否 ||
|[我的回复(my_reply)](module/Team/discuss_reply/query/my_reply)|my_reply|否|否 |否 ||
|[最新回复(recent)](module/Team/discuss_reply/query/recent)|recent|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Team/discuss_reply/dataset/Default)|DEFAULT|数据查询|是|||
|[我的全部回复(my_all_reply)](module/Team/discuss_reply/dataset/my_all_reply)|my_all_reply|数据查询|否|||
|[我的回复(my_reply)](module/Team/discuss_reply/dataset/my_reply)|my_reply|数据查询|否|||
|[最新回复(recent)](module/Team/discuss_reply/dataset/recent)|recent|数据查询|否|||
|[子回复(sub_reply)](module/Team/discuss_reply/dataset/sub_reply)|sub_reply|[实体逻辑](module/Team/discuss_reply/logic/sub_reply_data)|否||含有子回复|

## 数据权限

##### 全部数据（读） :id=discuss_reply-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=discuss_reply-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `CREATE`
* `DELETE`
* `UPDATE`



##### 我的回复（读写） :id=discuss_reply-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[我的全部回复(my_all_reply)](module/Team/discuss_reply#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE(讨论(UPDATE))`
* `CREATE(讨论(CREATE))`
* `READ`
* `DELETE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_POST_ID_EQ|讨论标识|EQ||
|N_TOPIC_ID_EQ|话题标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 发表评论 | panel_usr0522435547_btn_show_click | 发表评论 |单项数据|用户自定义||
| 讨论回复（移动端） | mob_descuss_reply | 回复 |无数据|<details><summary>打开视图或向导（模态）</summary>[回复](app/view/discuss_reply_mob_dr_create_view)</details>||
| 删除回复 | delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[del_reply](#行为)||
| 回复下发送评论 | reply_comment | 发送评论 |无数据|用户自定义||
| 回复下删除评论 | del_commnet | 删除评论 |单项数据|<details><summary>后台调用</summary>[del_comment](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[回复下删除评论](module/Team/discuss_reply/uilogic/rely_del_comment)|rely_del_comment|回复下删除评论|
|[回复下发送评论](module/Team/discuss_reply/uilogic/reply_send_comment)|reply_send_comment|回复下发送评论|
|[点击发表评论](module/Team/discuss_reply/uilogic/click_send_comment)|click_send_comment|未完成|
|[获取回复列表总条数（移动端）](module/Team/discuss_reply/uilogic/mob_get_reply_total)|mob_get_reply_total||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Team/discuss_reply?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_reply?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_reply?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_reply?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_reply?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_reply?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_reply?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_reply?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_reply?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Team/discuss_reply?id=界面逻辑`">
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