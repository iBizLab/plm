# 执行人(executor)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|预估工时|ESTIMATED_WORKLOAD|数值||是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否负责人|IS_ASSIGNEE|是否逻辑||是||
|名称|NAME|文本，可指定长度|200|是||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|序号|SEQUENCE|数值||是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|执行人标识|USER_ID|外键值|100|是||
|执行人名称|USER_NAME|外键值文本|200|是||

<p class="panel-title"><b>联合主键</b></p>

  * `所属数据标识(OWNER_ID)`
  * `执行人标识(USER_ID)`

###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="用户标识" name="field_group_user_id">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|执行人标识|USER_ID|外键值|100|是||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_EXECUTOR_USER_USER_ID](der/DER1N_EXECUTOR_USER_USER_ID)|[企业用户(USER)](module/Base/user)|1:N关系||
|[DERCUSTOM_EXECUTOR_WORK_ITEM_OWNER_ID](der/DERCUSTOM_EXECUTOR_WORK_ITEM_OWNER_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#executor_Create)|||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持|[附加操作](index/action_logic_index#executor_Remove)|||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[删除执行人时发送通知](module/Base/executor/logic/del_notice)|del_notice|无||删除执行人时发送通知|
|[执行人变更附加逻辑](module/Base/executor/logic/user_id_onchange)|user_id_onchange|属性逻辑||执行人变更附加逻辑|
|[添加执行人时发送通知](module/Base/executor/logic/after_create_notice)|after_create_notice|无||添加执行人时发送通知|

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/executor/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/executor/query/View)|VIEW|否|否 |否 ||
|[评论通知工作项执行人(comment_work_item_executor)](module/Base/executor/query/comment_work_item_executor)|comment_work_item_executor|否|否 |否 ||
|[通过主数据标识查询通知对象(executor_by_ownerid)](module/Base/executor/query/executor_by_ownerid)|executor_by_ownerid|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/executor/dataset/Default)|DEFAULT|数据查询|是|||
|[评论通知工作项执行人(comment_work_item_executor)](module/Base/executor/dataset/comment_work_item_executor)|comment_work_item_executor|数据查询|否|||
|[通过主数据标识查询通知对象(executor_by_ownerid)](module/Base/executor/dataset/executor_by_ownerid)|executor_by_ownerid|数据查询|否|||

## 数据权限

##### 全部数据（读写） :id=executor-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `UPDATE`
* `CREATE`
* `DELETE`



## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[工作项取消执行人通知](module/Base/executor/notify/cancel_work_item_executor)|cancel_work_item_executor|[默认消息队列](index/notify_index)|[取消分配执行工作项通知模板](index/notify_index#cancel_executor_work_item)|执行人 ||
|[工作项分配执行人通知](module/Base/executor/notify/work_item_executor)|work_item_executor|[默认消息队列](index/notify_index)|[分配执行工作项通知模板](index/notify_index#notice_executor_work_item)|执行人 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属数据标识|EQ||
|N_USER_ID_EQ|执行人标识|EQ||
|N_USER_NAME_EQ|执行人名称|EQ||
|N_USER_NAME_LIKE|执行人名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/executor?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/executor?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/executor?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/executor?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/executor?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/executor?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/executor?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/executor?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/executor?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/executor?id=搜索模式`">
  搜索模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'minor',
show_field_group:'field_group_user_id',

      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>